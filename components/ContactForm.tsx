'use client'
import { useState } from 'react'

const EMAILJS_SERVICE_ID      = 'service_rwnxrgo'
const EMAILJS_TEMPLATE_CLIENT = 'template_enc9gbw'
const EMAILJS_TEMPLATE_OWNER  = 'template_r2sdyda'
const EMAILJS_PUBLIC_KEY      = 'lg5qtatFPjG13S6I5'

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    service: '', location: '', message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted,  setSubmitted]  = useState(false)
  const [error,      setError]      = useState('')

  function field(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const service = form.service || 'Not specified'
    const messageBody = [
      form.location ? `Location: ${form.location}` : '',
      form.message  || 'No additional details',
    ].filter(Boolean).join('\n')

    try {
      const ejs = await import('@emailjs/browser')
      ejs.init(EMAILJS_PUBLIC_KEY)

      const common = {
        service:  service,
        date:     'Contact form inquiry',
        time:     'N/A',
        phone:    form.phone || 'Not provided',
        message:  messageBody,
      }

      await Promise.all([
        // Confirmation email to the person who submitted
        ejs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CLIENT, {
          ...common,
          to_name:  form.firstName,
          to_email: form.email,
        }),
        // Notification email to you
        ejs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_OWNER, {
          ...common,
          client_name:  `${form.firstName} ${form.lastName}`,
          client_email: form.email,
          to_email:     'hello@colodrone.com',
        }),
      ])

      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Something went wrong. Please email us directly at hello@colodrone.com or call (303) 949-7775.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="Alex" required value={form.firstName} onChange={field('firstName')} />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Rivera" required value={form.lastName} onChange={field('lastName')} />
        </div>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="alex@email.com" required value={form.email} onChange={field('email')} />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="tel" placeholder="(303) 555-0000" value={form.phone} onChange={field('phone')} />
      </div>
      <div className="form-group">
        <label>Service Needed</label>
        <select value={form.service} onChange={field('service')}>
          <option value="">Select a service...</option>
          <option>Real Estate Photography</option>
          <option>Wedding / Event</option>
          <option>Construction Progress</option>
          <option>Roof / Property Inspection</option>
          <option>Airbnb / Short-Term Rental</option>
          <option>Venue / Hotel / Resort</option>
          <option>Golf Course</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Location in Colorado</label>
        <input type="text" placeholder="Denver, Boulder, Vail..." value={form.location} onChange={field('location')} />
      </div>
      <div className="form-group">
        <label>Project Details</label>
        <textarea
          placeholder="Tell us about your project, date, and what you're looking for..."
          value={form.message}
          onChange={field('message')}
        />
      </div>

      {error && (
        <p style={{ color: '#dc2626', fontSize: '0.85rem', marginBottom: '0.75rem' }}>{error}</p>
      )}

      <button
        type="submit"
        className="form-submit"
        disabled={submitting || submitted}
        style={submitted ? { background: '#16a34a' } : {}}
      >
        {submitted
          ? 'Message Sent! We will be in touch within 24 hours.'
          : submitting
          ? 'Sending…'
          : 'Send Request — hello@colodrone.com'}
      </button>
    </form>
  )
}
