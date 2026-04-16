import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction & Inspection Drone Services — ColoDrone',
  description: 'Aerial construction progress documentation and property inspection services in Colorado. Weekly reports, time-lapse, insurance-accepted roof inspection imagery.',
}

export default function ConstructionPage() {
  return (
    <>
      <section className="sp-hero">
        <div className="sp-hero-label">Service 03</div>
        <h1 className="sp-hero-title">Construction &amp; Inspection</h1>
        <p className="sp-hero-desc">Aerial documentation from groundbreaking to ribbon-cutting, and high-resolution inspection reports that are faster and safer than traditional methods.</p>
        <div className="sp-hero-btns">
          <Link href="/#contact" className="btn-primary">Get a Free Quote</Link>
          <Link href="/services" className="btn-outline">All Services</Link>
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

      <section className="sp-gallery">
        <div className="sp-gallery-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Our Work</div>
          <h2 className="section-title">Construction &amp; Inspection Shots</h2>
          <div className="sp-gallery-grid">
            <div className="img-slot wide"><div className="img-slot-icon">📷</div><span>Site Overview</span></div>
            <div className="img-slot portrait"><div className="img-slot-icon">📷</div><span>Progress Update</span></div>
            <div className="img-slot"><div className="img-slot-icon">📷</div><span>Foundation Stage</span></div>
            <div className="img-slot"><div className="img-slot-icon">📷</div><span>Framing Stage</span></div>
            <div className="img-slot"><div className="img-slot-icon">📷</div><span>Roof Inspection</span></div>
            <div className="img-slot portrait"><div className="img-slot-icon">📷</div><span>Hail Damage</span></div>
            <div className="img-slot"><div className="img-slot-icon">📷</div><span>Completed Build</span></div>
            <div className="img-slot wide"><div className="img-slot-icon">📷</div><span>Before &amp; After</span></div>
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
          <Link href="/#contact" className="btn-primary">Book a Construction Flight</Link>
        </div>
      </section>
    </>
  )
}
