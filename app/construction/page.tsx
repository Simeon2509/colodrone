import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Construction & Inspection Drone Services — ColoDrone',
  description: 'Aerial construction progress documentation and property inspection services in Colorado. Weekly reports, time-lapse, insurance-accepted roof inspection imagery.',
}

export default function ConstructionPage() {
  return (
    <>
      <section className="sp-hero sp-hero-video">
        <video className="sp-hero-vid" autoPlay muted loop playsInline src="/construction_bg.mp4" />
        <div className="sp-hero-overlay" />
        <div className="sp-hero-content">
          <div className="sp-hero-label">Service 03</div>
          <h1 className="sp-hero-title">Construction &amp; Inspection</h1>
          <p className="sp-hero-desc">Aerial documentation from groundbreaking to ribbon-cutting, and high-resolution inspection reports that are faster and safer than traditional methods.</p>
          <div className="sp-hero-btns">
            <Link href="/book?service=Construction+%26+Inspection" className="btn-primary">Get a Free Quote</Link>
            <Link href="/services" className="btn-outline">All Services</Link>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-inner">
          <div className="sp-two-col">
            <div>
              <div className="section-eyebrow"><div className="eyebrow-line"></div>Construction Progress</div>
              <h2 className="section-title">Document Every Stage</h2>
              <ul className="sp-deliver-list">
                <li>Weekly or monthly aerial site documentation</li>
                <li>Consistent flight path for accurate before/after comparison</li>
                <li>Time-lapse sequences across the full build duration</li>
                <li>Organized photo and video report delivered after each visit</li>
                <li>Investor and developer update packages</li>
                <li>Coverage anywhere across Colorado</li>
              </ul>
            </div>
            <div>
              <div className="section-eyebrow"><div className="eyebrow-line"></div>Roof &amp; Property Inspection</div>
              <h2 className="section-title">Safer. Faster. More Detailed.</h2>
              <ul className="sp-deliver-list">
                <li>High-resolution aerial roof inspection imagery</li>
                <li>Storm and hail damage documentation for insurance claims</li>
                <li>Full property perimeter and exterior condition report</li>
                <li>Gutter, chimney and hard-to-reach area coverage</li>
                <li>Accepted by most major insurance adjusters</li>
                <li>Report delivered within 48 hours of the flight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ background: 'var(--bg)' }}>
        <div className="sp-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Pricing</div>
          <h2 className="section-title">Construction &amp; Inspection Packages</h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem', maxWidth: '520px' }}>Flat-rate packages for progress documentation and property inspections across Colorado.</p>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '520px' }}>* Locations outside Denver may incur an additional travel fee depending on mileage.</p>
          <div className="pkg-grid">
            <div className="pkg-card">
              <div className="pkg-summary-info">
                <div className="pkg-name">Single Visit</div>
                <div className="pkg-price">$299</div>
              </div>
              <div className="pkg-body">
                <ul className="pkg-features">
                  <li>1 site visit</li><li>Up to 15 aerial photos</li><li>Basic progress report</li>
                  <li>JPG delivery</li><li>48 hour turnaround</li><li>1 location</li>
                </ul>
                <Link href="/book?service=Construction+%26+Inspection&pkg=Single+Visit&price=299" className="pkg-cta-btn">Book Now</Link>
              </div>
            </div>
            <div className="pkg-card pkg-popular">
              <div className="pkg-summary-info">
                <div className="pkg-badge">Most Popular</div>
                <div className="pkg-name">Monthly Progress</div>
                <div className="pkg-price">$499</div>
              </div>
              <div className="pkg-body">
                <ul className="pkg-features">
                  <li>1 visit per month</li><li>Up to 30 aerial photos per visit</li>
                  <li>Detailed progress report</li><li>Before &amp; after comparison</li>
                  <li>JPG and RAW delivery</li><li>Priority scheduling</li>
                  <li>Coverage across Colorado</li>
                </ul>
                <Link href="/book?service=Construction+%26+Inspection&pkg=Monthly+Progress&price=499" className="pkg-cta-btn">Book Now</Link>
              </div>
            </div>
            <div className="pkg-card">
              <div className="pkg-summary-info">
                <div className="pkg-name">Full Documentation</div>
                <div className="pkg-price">$719</div>
              </div>
              <div className="pkg-body">
                <ul className="pkg-features">
                  <li>Weekly site visits</li><li>Unlimited aerial photos</li>
                  <li>4K video walkthrough each visit</li>
                  <li>Full time-lapse groundbreaking to completion</li>
                  <li>Detailed annotated reports</li><li>Investor update packages</li>
                  <li>Same day delivery available</li><li>Dedicated project contact</li>
                </ul>
                <Link href="/book?service=Construction+%26+Inspection&pkg=Full+Documentation&price=719" className="pkg-cta-btn">Book Now</Link>
              </div>
            </div>
            <div className="pkg-card pkg-custom">
              <div className="pkg-summary-info">
                <div className="pkg-name">Custom</div>
                <div className="pkg-custom-price-label">Get a Quote</div>
              </div>
              <div className="pkg-body">
                <ul className="pkg-features">
                  <li>Large commercial developments</li><li>Multi-site projects</li>
                  <li>Insurance &amp; legal documentation</li>
                  <li>Roof &amp; property inspection reports</li>
                  <li>Storm &amp; hail damage documentation</li>
                </ul>
                <Link href="/book?service=Construction+%26+Inspection&pkg=Custom" className="pkg-cta-btn">Request Custom Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-gallery">
        <div className="sp-gallery-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Our Work</div>
          <h2 className="section-title">Construction &amp; Inspection Shots</h2>
          <div className="re-photo-grid">
            <div className="re-photo re-photo-wide">
              <Image src="/images/construction/p1.jpg" alt="Aerial drone shot of Colorado construction site" fill sizes="(max-width:768px) 100vw, 66vw" style={{ objectFit: 'cover' }} priority />
            </div>
            <div className="re-photo">
              <Image src="/images/construction/p2.jpg" alt="Close-up aerial inspection drone photography" fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className="re-photo">
              <Image src="/images/construction/p3.jpg" alt="Wide aerial view of Colorado construction project" fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Who It&apos;s For</div>
          <h2 className="section-title">Built for Builders &amp; Owners</h2>
          <div className="sp-type-grid">
            <div className="sp-type-item"><strong>Developers</strong>Full build documentation for investors and stakeholders</div>
            <div className="sp-type-item"><strong>General Contractors</strong>Weekly progress reports and milestone photos</div>
            <div className="sp-type-item"><strong>Homeowners</strong>Custom home build documentation from start to finish</div>
            <div className="sp-type-item"><strong>Property Managers</strong>Annual condition reports and maintenance documentation</div>
            <div className="sp-type-item"><strong>Insurance Adjusters</strong>Faster and safer damage assessment after storms</div>
            <div className="sp-type-item"><strong>Real Estate Investors</strong>Pre-purchase aerial condition reports</div>
          </div>
        </div>
      </section>

      <section className="sp-cta">
        <div className="sp-cta-inner">
          <div className="sp-cta-title">Start Your Documentation</div>
          <p className="sp-cta-desc">Tell us about your site, schedule and needs. We&apos;ll set up a regular flight plan and deliver reports on time, every time.</p>
          <Link href="/book?service=Construction+%26+Inspection" className="btn-primary">Book a Construction Flight</Link>
        </div>
      </section>
    </>
  )
}
