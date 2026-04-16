import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wedding & Event Drone Photography — ColoDrone',
  description: 'Cinematic aerial wedding and event photography in Colorado. Mountain ceremonies, Denver venues, outdoor festivals. 4K HDR, vertical and horizontal formats.',
}

export default function WeddingsPage() {
  return (
    <>
      <section className="sp-hero">
        <div className="sp-hero-label">Service 02</div>
        <h1 className="sp-hero-title">Weddings &amp; Events</h1>
        <p className="sp-hero-desc">Cinematic aerial coverage of your most important moments. Mountain ceremonies, Denver venues, outdoor festivals and private events across Colorado.</p>
        <div className="sp-hero-btns">
          <Link href="/#contact" className="btn-primary">Get a Free Quote</Link>
          <Link href="/services" className="btn-outline">All Services</Link>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-inner">
          <div className="sp-two-col">
            <div>
              <div className="section-eyebrow"><div className="eyebrow-line"></div>What We Deliver</div>
              <h2 className="section-title">Moments From Above</h2>
              <ul className="sp-deliver-list">
                <li>Cinematic aerial reveal of the ceremony and reception venue</li>
                <li>Dramatic landscape and mountain backdrop shots</li>
                <li>Guest arrival and outdoor crowd footage</li>
                <li>Couple portraits with sweeping mountain or city backgrounds</li>
                <li>Horizontal edits for albums, websites and highlight reels</li>
                <li>Vertical edits for Instagram Reels and social sharing</li>
                <li>Edited footage delivered within 3–5 business days</li>
                <li>Private gallery download link included</li>
              </ul>
            </div>
            <div>
              <div className="section-eyebrow"><div className="eyebrow-line"></div>Why Aerial</div>
              <h2 className="section-title">A View No Other Camera Can Get</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '1rem' }}>Colorado is one of the most stunning backdrops in the world for a wedding. Aerial footage captures the full scale of the Rockies, the beauty of the venue, and the energy of the crowd — all in one sweeping shot.</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.7' }}>We coordinate with your photographer and videographer so we&apos;re never in each other&apos;s way — the aerial is purely additive.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-gallery">
        <div className="sp-gallery-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Our Work</div>
          <h2 className="section-title">Weddings &amp; Events</h2>
          <div className="sp-gallery-grid">
            <div className="img-slot wide"><div className="img-slot-icon">📷</div><span>Mountain Ceremony</span></div>
            <div className="img-slot portrait"><div className="img-slot-icon">📷</div><span>Vertical Reel</span></div>
            <div className="img-slot"><div className="img-slot-icon">📷</div><span>Venue Reveal</span></div>
            <div className="img-slot"><div className="img-slot-icon">📷</div><span>Guest Arrival</span></div>
            <div className="img-slot"><div className="img-slot-icon">📷</div><span>Landscape</span></div>
            <div className="img-slot portrait"><div className="img-slot-icon">📷</div><span>Couple Portrait</span></div>
            <div className="img-slot"><div className="img-slot-icon">📷</div><span>Reception</span></div>
            <div className="img-slot wide"><div className="img-slot-icon">📷</div><span>Rocky Mountain Backdrop</span></div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Event Types</div>
          <h2 className="section-title">What We Cover</h2>
          <div className="sp-type-grid">
            <div className="sp-type-item"><strong>Weddings</strong>Outdoor, mountain and Denver venue ceremonies</div>
            <div className="sp-type-item"><strong>Elopements</strong>Intimate alpine and wilderness sessions</div>
            <div className="sp-type-item"><strong>Corporate Events</strong>Conferences, retreats and team events</div>
            <div className="sp-type-item"><strong>Outdoor Festivals</strong>Concerts, markets and community events</div>
            <div className="sp-type-item"><strong>Private Parties</strong>Milestone birthdays, anniversaries and celebrations</div>
            <div className="sp-type-item"><strong>Venue Showcases</strong>Aerial content for event venue marketing</div>
          </div>
        </div>
      </section>

      <section className="sp-cta">
        <div className="sp-cta-inner">
          <div className="sp-cta-title">Let&apos;s Capture Your Day</div>
          <p className="sp-cta-desc">Reach out with your date, venue and vision. We&apos;ll confirm availability and send a quote within 24 hours.</p>
          <Link href="/#contact" className="btn-primary">Book a Wedding Shoot</Link>
        </div>
      </section>
    </>
  )
}
