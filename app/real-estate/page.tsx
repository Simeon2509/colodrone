import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Real Estate Drone Photography — ColoDrone',
  description: 'Professional aerial real estate photography and videography in Denver and Colorado. 4K HDR drone footage for listings, rentals, apartments and mountain estates.',
}

export default function RealEstatePage() {
  return (
    <>
      <section className="sp-hero sp-hero-video">
        <video className="sp-hero-vid" autoPlay muted loop playsInline src="/re_bg.mp4" />
        <div className="sp-hero-overlay" />
        <div className="sp-hero-content">
          <div className="sp-hero-label">Service 01</div>
          <h1 className="sp-hero-title">Real Estate</h1>
          <p className="sp-hero-desc">From a downtown Denver studio to a 10-acre mountain estate — stunning aerial content that makes every listing sell and rent faster.</p>
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
              <h2 className="section-title">Everything Your Listing Needs</h2>
              <ul className="sp-deliver-list">
                <li>Exterior flyover and full walkaround in 4K HDR</li>
                <li>Neighborhood and surroundings context shots</li>
                <li>Lot overview and property boundary footage</li>
                <li>Twilight and golden hour shots</li>
                <li>Horizontal format — ready for MLS, Zillow and your website</li>
                <li>Vertical format — Instagram Reels, TikTok and social media</li>
                <li>Edited photos and video delivered within 3–5 business days</li>
                <li>Private gallery download link included</li>
              </ul>
            </div>
            <div>
              <div className="section-eyebrow"><div className="eyebrow-line"></div>Formats</div>
              <h2 className="section-title">Shot in 4K HDR</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.7' }}>Flown on the DJI Mini 3 with Dual Native ISO Fusion — crisp detail in highlights and shadows, day or night. Every shoot is delivered in both landscape and portrait so you have content for every platform.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ background: 'var(--co-blue-light)', border: '0.5px solid rgba(27,79,216,0.2)', padding: '1rem 1.2rem', borderRadius: '3px' }}>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '2px', color: 'var(--co-blue)', marginBottom: '0.3rem' }}>Horizontal 16:9</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>MLS listings, Zillow, websites, email marketing</div>
                </div>
                <div style={{ background: 'var(--co-blue-light)', border: '0.5px solid rgba(27,79,216,0.2)', padding: '1rem 1.2rem', borderRadius: '3px' }}>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", letterSpacing: '2px', color: 'var(--co-blue)', marginBottom: '0.3rem' }}>Vertical 9:16</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Instagram Reels, TikTok, Facebook Stories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery — 3 real aerial shots */}
      <section className="sp-gallery">
        <div className="sp-gallery-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Our Work</div>
          <h2 className="section-title">Real Estate Shots</h2>
          <div className="re-photo-grid">
            <div className="re-photo re-photo-wide">
              <Image
                src="/images/real-estate/re-1.jpg"
                alt="Aerial drone shot of Colorado real estate property"
                fill
                sizes="(max-width:768px) 100vw, 66vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="re-photo">
              <Image
                src="/images/real-estate/re-2.jpg"
                alt="Aerial drone photography of residential property in Colorado"
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="re-photo">
              <Image
                src="/images/real-estate/re-3.jpg"
                alt="Wide aerial view of Colorado property from drone"
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Property Types</div>
          <h2 className="section-title">Every Type of Property</h2>
          <div className="sp-type-grid">
            <div className="sp-type-item"><strong>Apartments</strong>Studio, 1BR, 2BR and multi-unit buildings in Denver</div>
            <div className="sp-type-item"><strong>City Homes</strong>Townhouses, row homes and single-family in the Denver metro</div>
            <div className="sp-type-item"><strong>Suburban Homes</strong>Single-family properties across the Front Range suburbs</div>
            <div className="sp-type-item"><strong>Luxury Homes</strong>High-end Cherry Creek, Wash Park and LoDo properties</div>
            <div className="sp-type-item"><strong>Mountain Cabins</strong>Foothills and mountain retreat properties</div>
            <div className="sp-type-item"><strong>Mountain Estates</strong>Large acreage and luxury estates in the Rockies</div>
            <div className="sp-type-item"><strong>For Sale Listings</strong>Make your MLS listing stand out from day one</div>
            <div className="sp-type-item"><strong>Rental Marketing</strong>Boost your rental appeal and justify a higher rate</div>
          </div>
        </div>
      </section>

      <section className="sp-cta">
        <div className="sp-cta-inner">
          <div className="sp-cta-title">Ready to List?</div>
          <p className="sp-cta-desc">Tell us about your property and we&apos;ll send a quote within 24 hours. Most shoots can be scheduled within the same week.</p>
          <Link href="/#contact" className="btn-primary">Book a Real Estate Shoot</Link>
        </div>
      </section>
    </>
  )
}
