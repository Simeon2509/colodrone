'use client'

// ── EMAILJS CREDENTIALS ───────────────────────────────────────────────
const EMAILJS_SERVICE_ID      = 'service_rwnxrgo'
const EMAILJS_TEMPLATE_CLIENT = 'template_enc9gbw'
const EMAILJS_TEMPLATE_OWNER  = 'template_r2sdyda'
const EMAILJS_PUBLIC_KEY      = 'lg5qtatFPjG13S6I5'
// ─────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const SERVICES = [
  { name: 'Real Estate',                   from: '$199' },
  { name: 'Weddings & Events',             from: '$349' },
  { name: 'Construction & Inspection',     from: '$299' },
  { name: 'Airbnb & Short-Term Rentals',   from: '$249' },
  { name: 'Venues, Hotels & Golf Courses', from: '$499' },
]

// Mountain Time slot hours per day-of-week (0=Sun … 6=Sat)
// Last slot = closing hour − 1 (call ends at closing)
function slotsForDow(dow: number): number[] {
  if (dow >= 1 && dow <= 4) return range(6, 21)  // Mon–Thu  6 am – 9 pm
  if (dow === 5)             return range(6, 16)  // Fri      6 am – 4 pm
  if (dow === 6)             return range(9, 16)  // Sat      9 am – 4 pm
  return                            range(9, 21)  // Sun      9 am – 9 pm
}

function range(a: number, b: number): number[] {
  return Array.from({ length: b - a + 1 }, (_, i) => i + a)
}

function fmt12(h: number): string {
  if (h === 0)  return '12:00 AM'
  if (h < 12)  return `${h}:00 AM`
  if (h === 12) return '12:00 PM'
  return `${h - 12}:00 PM`
}

function datStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
}

function datLong(ds: string): string {
  const [y, m, d] = ds.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  })
}

const LS_KEY = 'colodrone_booked'

function loadBooked(): Set<string> {
  try {
    const r = localStorage.getItem(LS_KEY)
    return new Set(r ? JSON.parse(r) : [])
  } catch { return new Set() }
}

function saveBooked(key: string) {
  try {
    const s = loadBooked(); s.add(key)
    localStorage.setItem(LS_KEY, JSON.stringify(Array.from(s)))
  } catch {}
}

function slotKey(ds: string, h: number) {
  return `${ds}_${String(h).padStart(2,'0')}`
}

export default function BookingClient() {
  const params    = useSearchParams()
  const svcParam  = params.get('service') ?? ''
  const pkgParam  = params.get('pkg')     ?? ''
  const priceParam = params.get('price')  ?? ''

  // All date/calendar state is client-only (avoids hydration mismatch)
  const [mounted,       setMounted]       = useState(false)
  const [today,         setToday]         = useState<Date | null>(null)
  const [tomorrow,      setTomorrow]      = useState<Date | null>(null)
  const [maxDate,       setMaxDate]       = useState<Date | null>(null)
  const [viewMonth,     setViewMonth]     = useState<Date | null>(null)
  const [selectedDate,  setSelectedDate]  = useState<string | null>(null)
  const [selectedHour,  setSelectedHour]  = useState<number | null>(null)
  const [bookedSlots,   setBookedSlots]   = useState<Set<string>>(new Set())
  const [randBlocks,    setRandBlocks]    = useState<Map<string, Set<number>>>(new Map())

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    service: svcParam, message: '',
  })
  const [errors,      setErrors]      = useState<Record<string, string>>({})
  const [submitting,  setSubmitting]  = useState(false)
  const [submitted,   setSubmitted]   = useState(false)
  const [submitErr,   setSubmitErr]   = useState('')

  useEffect(() => {
    const t = new Date(); t.setHours(0, 0, 0, 0)
    const tm = new Date(t); tm.setDate(t.getDate() + 1)
    const mx = new Date(t); mx.setDate(t.getDate() + 14)
    setToday(t); setTomorrow(tm); setMaxDate(mx)
    setViewMonth(new Date(t.getFullYear(), t.getMonth(), 1))

    const booked = loadBooked()
    setBookedSlots(booked)

    // Generate random "busy" blocks (10–60 % of slots per day)
    const blocks = new Map<string, Set<number>>()
    let cur = new Date(tm)
    while (cur <= mx) {
      const ds     = datStr(cur)
      const slots  = slotsForDow(cur.getDay())
      const unbkd  = slots.filter(h => !booked.has(slotKey(ds, h)))
      const n      = Math.floor(unbkd.length * (0.10 + Math.random() * 0.50))
      const blk    = new Set([...unbkd].sort(() => Math.random() - 0.5).slice(0, n))
      blocks.set(ds, blk)
      cur = new Date(cur.getTime() + 86_400_000)
    }
    setRandBlocks(blocks)
    if (svcParam) setForm(f => ({ ...f, service: svcParam }))
    setMounted(true)
  }, [])

  if (!mounted || !today || !tomorrow || !maxDate || !viewMonth) {
    return <div className="bk-loading">Loading calendar…</div>
  }

  // ── helpers ────────────────────────────────────────────────────────

  function inWindow(ds: string): boolean {
    const d = new Date(ds + 'T12:00:00')
    return d >= tomorrow! && d <= maxDate!
  }

  function isAvail(ds: string, h: number): boolean {
    return !bookedSlots.has(slotKey(ds, h)) && !(randBlocks.get(ds)?.has(h) ?? false)
  }

  // ── calendar ───────────────────────────────────────────────────────

  const yr    = viewMonth.getFullYear()
  const mo    = viewMonth.getMonth()
  const dim   = new Date(yr, mo + 1, 0).getDate()
  const fdow  = new Date(yr, mo, 1).getDay()

  const cells: (number | null)[] = [
    ...Array(fdow).fill(null),
    ...Array.from({ length: dim }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  function dayClass(day: number): string {
    const ds = `${yr}-${String(mo + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
    if (selectedDate === ds) return 'bk-day-sel'
    if (!inWindow(ds)) return 'bk-day-off'
    const dow = new Date(ds + 'T12:00:00').getDay()
    return slotsForDow(dow).some(h => isAvail(ds, h)) ? 'bk-day-on' : 'bk-day-off'
  }

  function handleDay(day: number) {
    const ds = `${yr}-${String(mo + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
    if (!inWindow(ds)) return
    const dow = new Date(ds + 'T12:00:00').getDay()
    if (!slotsForDow(dow).some(h => isAvail(ds, h))) return
    setSelectedDate(ds)
    setSelectedHour(null)
  }

  const canPrevMonth = new Date(yr, mo - 1, 1) >= new Date(today.getFullYear(), today.getMonth(), 1)
  const canNextMonth = new Date(yr, mo + 1, 1) <= maxDate

  const timeSlots = selectedDate
    ? slotsForDow(new Date(selectedDate + 'T12:00:00').getDay())
    : []

  // ── form ───────────────────────────────────────────────────────────

  function validate(): boolean {
    const e: Record<string, string> = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim())  e.lastName  = 'Last name is required'
    if (!form.email.trim())     e.email     = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address'
    if (!form.phone.trim())    e.phone   = 'Phone number is required'
    if (!form.service)         e.service = 'Please select a service'
    if (!selectedDate || selectedHour === null)
      e.slot = 'Please select a date and time above'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate() || !selectedDate || selectedHour === null) return
    setSubmitting(true)
    setSubmitErr('')

    const key      = slotKey(selectedDate, selectedHour)
    const dateLong = datLong(selectedDate)
    const timeStr  = `${fmt12(selectedHour)} Mountain Time`
    const svcLabel = [form.service, pkgParam, priceParam ? `Starting at $${priceParam}` : ''].filter(Boolean).join(' — ')

    try {
      const ejs = await import('@emailjs/browser')
      ejs.init(EMAILJS_PUBLIC_KEY)

      const common = {
        service: svcLabel,
        date:    dateLong,
        time:    timeStr,
        phone:   form.phone,
        message: form.message || 'No additional notes',
      }

      await Promise.all([
        ejs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CLIENT, {
          ...common,
          to_name:  form.firstName,
          to_email: form.email,
        }),
        ejs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_OWNER, {
          ...common,
          client_name:  `${form.firstName} ${form.lastName}`,
          client_email: form.email,
          to_email:     'hello@colodrone.com',
        }),
      ])

      saveBooked(key)
      setBookedSlots(prev => { const n = new Set(prev); n.add(key); return n })
      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setSubmitErr('Something went wrong. Please email us directly at hello@colodrone.com or call (303) 949-7775 and we will get you booked.')
    } finally {
      setSubmitting(false)
    }
  }

  // ── confirmation ───────────────────────────────────────────────────

  if (submitted && selectedDate && selectedHour !== null) {
    const svcLabel = [svcParam, pkgParam].filter(Boolean).join(' — ')
    return (
      <section className="bk-confirm-wrap">
        <div className="bk-confirm-box">
          <div className="bk-check-icon">✓</div>
          <h2 className="bk-confirm-title">You&apos;re All Set</h2>
          <p className="bk-confirm-text">
            Your free consultation is confirmed. We will call you on{' '}
            <strong>{datLong(selectedDate)}</strong> at{' '}
            <strong>{fmt12(selectedHour)} Mountain Time</strong> at{' '}
            <strong>{form.phone}</strong>. Check your email for your confirmation.
          </p>
          {svcLabel && <div className="bk-badge">{svcLabel}</div>}
          <div className="bk-confirm-actions">
            <Link href="/" className="btn-primary">Back to Home</Link>
            <button className="btn-outline" onClick={() => { window.location.href = '/book' }}>
              Book Another Service
            </button>
          </div>
        </div>
      </section>
    )
  }

  // ── badge / header info ────────────────────────────────────────────

  const badgeParts = [svcParam, pkgParam, priceParam ? `Starting at $${priceParam}` : ''].filter(Boolean)
  const badgeText  = badgeParts.join(' — ')

  // ── main render ────────────────────────────────────────────────────

  return (
    <main className="bk-main">

      {/* Section A — Header */}
      <section className="bk-hero">
        <div className="bk-hero-inner">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <div className="eyebrow-line" />Free Consultation
          </div>
          <h1 className="bk-page-title">Book Your Free Consultation</h1>
          <p className="bk-page-sub">
            10 minute phone call — no obligation — we&apos;ll call you at your chosen time
          </p>
          {badgeText ? (
            <div className="bk-badge">{badgeText}</div>
          ) : (
            <div className="bk-svc-pick">
              <p className="bk-svc-label">What service are you interested in?</p>
              <select className="bk-svc-sel"
                value={form.service}
                onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
                <option value="">Select a service…</option>
                {SERVICES.map(s => (
                  <option key={s.name} value={s.name}>{s.name} — From {s.from}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </section>

      <div className="bk-content">

        {/* Section B — Calendar */}
        <section className="bk-step">
          <div className="bk-step-lbl"><span>1</span>Pick a Date &amp; Time — Mountain Time, Denver CO</div>

          <div className="bk-cal">
            {/* Month navigation */}
            <div className="bk-cal-nav">
              <button className="bk-nav-btn"
                disabled={!canPrevMonth}
                onClick={() => setViewMonth(new Date(yr, mo - 1, 1))}>‹</button>
              <span className="bk-cal-label">
                {viewMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
              <button className="bk-nav-btn"
                disabled={!canNextMonth}
                onClick={() => setViewMonth(new Date(yr, mo + 1, 1))}>›</button>
            </div>

            {/* Grid */}
            <div className="bk-cal-grid">
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                <div key={d} className="bk-cal-dh">{d}</div>
              ))}
              {cells.map((day, i) =>
                day === null
                  ? <div key={`e${i}`} />
                  : (
                    <button key={day}
                      className={`bk-cal-day ${dayClass(day)}`}
                      onClick={() => handleDay(day)}
                      disabled={dayClass(day) === 'bk-day-off'}>
                      {day}
                    </button>
                  )
              )}
            </div>
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div className="bk-slots">
              <div className="bk-slots-head">
                <strong>{datLong(selectedDate)}</strong>
                <span> · Mountain Time</span>
              </div>
              <div className="bk-slots-grid">
                {timeSlots.map(h => {
                  const avail = isAvail(selectedDate, h)
                  const sel   = selectedHour === h
                  return (
                    <button key={h}
                      className={`bk-slot${avail ? '' : ' bk-slot-off'}${sel ? ' bk-slot-sel' : ''}`}
                      onClick={() => avail && setSelectedHour(h)}
                      disabled={!avail}>
                      <span className="bk-slot-time">{fmt12(h)}</span>
                      {!avail && <span className="bk-slot-tag">Unavailable</span>}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {errors.slot && <p className="bk-err" style={{ marginTop: '0.75rem' }}>{errors.slot}</p>}
        </section>

        {/* Section C — Form */}
        <section className="bk-step" style={{ borderBottom: 'none' }}>
          <div className="bk-step-lbl"><span>2</span>Your Details</div>

          <form className="bk-form" onSubmit={handleSubmit} noValidate>

            <div className="bk-row">
              <div className="bk-field">
                <label className="bk-lbl">First Name <span className="bk-req">*</span></label>
                <input className={`bk-inp${errors.firstName ? ' bk-inp-err' : ''}`}
                  value={form.firstName} placeholder="Jane"
                  onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} />
                {errors.firstName && <p className="bk-err">{errors.firstName}</p>}
              </div>
              <div className="bk-field">
                <label className="bk-lbl">Last Name <span className="bk-req">*</span></label>
                <input className={`bk-inp${errors.lastName ? ' bk-inp-err' : ''}`}
                  value={form.lastName} placeholder="Smith"
                  onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} />
                {errors.lastName && <p className="bk-err">{errors.lastName}</p>}
              </div>
            </div>

            <div className="bk-row">
              <div className="bk-field">
                <label className="bk-lbl">Email Address <span className="bk-req">*</span></label>
                <input className={`bk-inp${errors.email ? ' bk-inp-err' : ''}`}
                  type="email" value={form.email} placeholder="jane@example.com"
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                {errors.email && <p className="bk-err">{errors.email}</p>}
              </div>
              <div className="bk-field">
                <label className="bk-lbl">
                  Phone Number <span className="bk-req">*</span>
                  <span className="bk-hint"> — we call this number</span>
                </label>
                <input className={`bk-inp${errors.phone ? ' bk-inp-err' : ''}`}
                  type="tel" value={form.phone} placeholder="(720) 555-0123"
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                {errors.phone && <p className="bk-err">{errors.phone}</p>}
              </div>
            </div>

            <div className="bk-field">
              <label className="bk-lbl">Service <span className="bk-req">*</span></label>
              <select className={`bk-inp${errors.service ? ' bk-inp-err' : ''}`}
                value={form.service}
                onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
                <option value="">Select a service…</option>
                {SERVICES.map(s => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
              {errors.service && <p className="bk-err">{errors.service}</p>}
            </div>

            <div className="bk-field">
              <label className="bk-lbl">Selected Date &amp; Time</label>
              <input className="bk-inp bk-inp-ro" readOnly
                value={
                  selectedDate && selectedHour !== null
                    ? `${datLong(selectedDate)} at ${fmt12(selectedHour)} Mountain Time`
                    : 'Pick a date and time slot above'
                } />
            </div>

            <div className="bk-field">
              <label className="bk-lbl">
                Message <span className="bk-opt">(optional)</span>
              </label>
              <textarea className="bk-inp bk-ta" rows={4}
                value={form.message}
                placeholder="Tell us a bit about your property, event or project…"
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
            </div>

            <p className="bk-note">
              We will call you at the phone number provided at your chosen time.
              This consultation is completely free with no obligation.
            </p>

            {submitErr && <div className="bk-submit-err">{submitErr}</div>}

            <button type="submit" className="bk-submit" disabled={submitting}>
              {submitting
                ? <><span className="bk-spin" />Submitting…</>
                : 'CONFIRM FREE CONSULTATION'}
            </button>

          </form>
        </section>
      </div>
    </main>
  )
}
