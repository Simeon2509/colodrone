import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Venues, Hotels & Golf Course Drone Photography — ColoDrone',
  description: 'Aerial drone photography for venues, hotels, resorts and golf courses in Colorado. Full property flyovers, hole-by-hole golf course shots, seasonal imagery.',
}

export default function VenuesPage() {
  return (
    <>
      <section className="sp-hero sp-hero-video">
        <video className="sp-hero-vid" autoPlay muted loop playsInline src="/venues_bg.mp4" />
        <div className="sp-hero-overlay" />
        <div className="sp-hero-content">
          <div className="sp-hero-label">Service 05</div>
          <h1 className="sp-hero-title">Venues, Hotels &amp; Golf Courses</h1>
          <p className="sp-hero-desc">Give future guests and visitors a stunning first impression. Aerial content that showcases your full property, grounds and Colorado location like nothing else can.</p>
          <div className="sp-hero-btns">
            <Link href="/#contact" className="btn-primary">Get a Free Quote</Link>
            <Link href="/services" className="btn-outline">All Services</Link>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-inner">
          <div className="sp-two-col">
            <div>
              <div className="section-eyebrow"><div className="eyebrow-line"></div>What We Deliver</div>
              <h2 className="section-title">Show Every Corner of Your Property</h2>
              <ul className="sp-deliver-list">
                <li>Full property and grounds flyover in 4K HDR</li>
                <li>Surrounding landscape and Colorado location context</li>
                <li>Amenity highlights — pools, terraces, fairways, event spaces</li>
                <li>Aerial approach and cinematic reveal shots</li>
                <li>Seasonal availability — summer greens, fall foliage, winter snow</li>
                <li>Horizontal edits for websites and advertising</li>
                <li>Vertical edits for Instagram, TikTok and social campaigns</li>
                <li>Delivered within 3–5 business days</li>
              </ul>
            </div>
            <div>
              <div className="section-eyebrow"><div className="eyebrow-line"></div>Golf Courses</div>
              <h2 className="section-title">Hole-by-Hole or Full Course</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '1rem' }}>Aerial is the only way to truly show a golf course. We shoot each hole individually so players can study the layout, and we deliver sweeping full-course overviews for your website and marketing materials.</p>
              <ul className="sp-deliver-list">
                <li>Individual hole flyovers — tee, fairway and green</li>
                <li>Full 18-hole course overview</li>
                <li>Clubhouse and facilities from above</li>
                <li>Seasonal landscape shots — spring through winter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-gallery">
        <div className="sp-gallery-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Our Work</div>
          <h2 className="section-title">Venues, Hotels &amp; Golf</h2>
          <div className="re-photo-grid">
            <div className="re-photo re-photo-wide">
              <Image src="/images/venues/p1.jpg" alt="Aerial drone shot of Colorado venue or resort" fill sizes="(max-width:768px) 100vw, 66vw" style={{ objectFit: 'cover' }} priority />
            </div>
            <div className="re-photo">
              <Image src="/images/venues/p2.jpg" alt="Drone photography of Colorado hotel or golf course" fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className="re-photo">
              <Image src="/images/venues/p3.jpg" alt="Wide aerial view of Colorado event venue from drone" fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Property Types</div>
          <h2 className="section-title">Every Type of Hospitality Property</h2>
          <div className="sp-type-grid">
            <div className="sp-type-item"><strong>Event Venues</strong>Wedding venues, banquet halls and outdoor event spaces</div>
            <div className="sp-type-item"><strong>Hotels</strong>Boutique hotels and full-service properties across Colorado</div>
            <div className="sp-type-item"><strong>Mountain Resorts</strong>Ski resorts, mountain lodges and all-season retreat properties</div>
            <div className="sp-type-item"><strong>Golf Courses</strong>Public and private courses — hole-by-hole and full course shots</div>
            <div className="sp-type-item"><strong>Ranches &amp; Retreats</strong>Working ranches, wellness retreats and glamping properties</div>
            <div className="sp-type-item"><strong>Spas &amp; Clubs</strong>Private clubs, spas and exclusive member properties</div>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ background: 'var(--bg)' }}>
        <div className="sp-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Pricing</div>
          <h2 className="section-title">Venue &amp; Property Packages</h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '520px' }}>Flat-rate packages for venues, hotels, resorts and golf courses across Colorado.</p>
          <div className="pkg-grid">
            <details className="pkg-card">
              <summary className="pkg-summary"><div className="pkg-summary-info">
                <div className="pkg-name">Essential</div>
                <div className="pkg-price">$499</div>
              </div><span className="pkg-chevron" /></summary>
              <div className="pkg-body">
                <ul className="pkg-features">
                  <li>Up to 20 aerial photos</li><li>2 hour flight</li>
                  <li>Exterior grounds coverage</li><li>Standard editing</li>
                  <li>Horizontal format</li><li>JPG delivery</li><li>3–5 day turnaround</li>
                </ul>
                <Link href="/#contact" className="pkg-cta-btn">Book Now</Link>
              </div>
            </details>
            <details className="pkg-card pkg-popular">
              <summary className="pkg-summary"><div className="pkg-summary-info">
                <div className="pkg-badge">Most Popular</div>
                <div className="pkg-name">Showcase</div>
                <div className="pkg-price">$899</div>
              </div><span className="pkg-chevron" /></summary>
              <div className="pkg-body">
                <ul className="pkg-features">
                  <li>Up to 40 aerial photos</li><li>2 minute cinematic video</li>
                  <li>4K HDR video delivery</li><li>Horizontal &amp; vertical formats</li>
                  <li>Premium HDR editing</li><li>JPG, RAW &amp; video delivery</li><li>2–3 day turnaround</li>
                </ul>
                <Link href="/#contact" className="pkg-cta-btn">Book Now</Link>
              </div>
            </details>
            <details className="pkg-card">
              <summary className="pkg-summary"><div className="pkg-summary-info">
                <div className="pkg-name">Signature</div>
                <div className="pkg-price">$1199</div>
              </div><span className="pkg-chevron" /></summary>
              <div className="pkg-body">
                <ul className="pkg-features">
                  <li>Unlimited aerial photos</li><li>Full cinematic brand video 3–5 min</li>
                  <li>3 vertical Reels for social media</li><li>Time-lapse included</li>
                  <li>Seasonal shots available</li><li>Golf hole-by-hole flyovers included</li>
                  <li>4K HDR all formats</li><li>Premium editing &amp; color grade</li>
                  <li>Same day preview clip</li><li>Priority scheduling</li>
                </ul>
                <Link href="/#contact" className="pkg-cta-btn">Book Now</Link>
              </div>
            </details>
            <details className="pkg-card pkg-custom">
              <summary className="pkg-summary"><div className="pkg-summary-info">
                <div className="pkg-name">Custom</div>
                <div className="pkg-custom-price-label">Get a Quote</div>
              </div><span className="pkg-chevron" /></summary>
              <div className="pkg-body">
                <ul className="pkg-features">
                  <li>Multi-day shoots</li><li>Multiple properties or locations</li>
                  <li>Golf course hole-by-hole full documentation</li>
                  <li>Ranches, retreats &amp; private clubs</li>
                  <li>Ongoing content partnership</li>
                </ul>
                <Link href="/#contact" className="pkg-cta-btn">Request Custom Quote</Link>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="sp-cta">
        <div className="sp-cta-inner">
          <div className="sp-cta-title">Show Your Property at Its Best</div>
          <p className="sp-cta-desc">Tell us about your property and what you need. We&apos;ll put together a custom shoot plan and quote within 24 hours.</p>
          <Link href="/#contact" className="btn-primary">Book a Property Shoot</Link>
        </div>
      </section>
    </>
  )
}
