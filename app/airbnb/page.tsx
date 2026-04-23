import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Airbnb & Short-Term Rental Drone Photography — ColoDrone',
  description: 'Aerial drone photography for Airbnb and VRBO rentals in Denver and Colorado. Boost your listing with stunning exterior shots and vertical social media reels.',
}

export default function AirbnbPage() {
  return (
    <>
      <section className="sp-hero sp-hero-video">
        <video className="sp-hero-vid" autoPlay muted loop playsInline src="/airbnb_bg.mp4" />
        <div className="sp-hero-overlay" />
        <div className="sp-hero-content">
          <div className="sp-hero-label">Service 04</div>
          <h1 className="sp-hero-title">Airbnb &amp; Short-Term Rentals</h1>
          <p className="sp-hero-desc">Listings with aerial photos get more clicks, more bookings and higher nightly rates. Make your Denver or Colorado rental impossible to scroll past.</p>
          <div className="sp-hero-btns">
            <Link href="/book?service=Airbnb+%26+Short-Term+Rentals" className="btn-primary">Get a Free Quote</Link>
            <Link href="/services" className="btn-outline">All Services</Link>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-inner">
          <div className="sp-two-col">
            <div>
              <div className="section-eyebrow"><div className="eyebrow-line"></div>What We Deliver</div>
              <h2 className="section-title">Content That Fills Calendars</h2>
              <ul className="sp-deliver-list">
                <li>Aerial exterior and rooftop shots of the property</li>
                <li>Neighborhood context — parks, mountains, city highlights nearby</li>
                <li>Street view and approach shots</li>
                <li>Outdoor spaces — patios, yards, pools and decks from above</li>
                <li>Scroll-stopping vertical Reels for Instagram and TikTok</li>
                <li>Horizontal edits for Airbnb, VRBO and website listings</li>
                <li>Delivered within 3–5 business days</li>
              </ul>
            </div>
            <div>
              <div className="section-eyebrow"><div className="eyebrow-line"></div>Why It Works</div>
              <h2 className="section-title">Stand Out in a Crowded Market</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '1rem' }}>Most Airbnb listings use the same interior photos taken with a phone. Aerial content immediately signals a premium experience and helps guests understand the location and surroundings before they book.</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.7' }}>Denver and Colorado short-term rentals with professional aerial content see higher booking rates and can justify higher nightly pricing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ background: 'var(--bg)' }}>
        <div className="sp-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Pricing</div>
          <h2 className="section-title">Airbnb &amp; Rental Packages</h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem', maxWidth: '520px' }}>Flat-rate packages for every rental type across Colorado. All edits delivered via private gallery link.</p>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '520px' }}>* Locations outside Denver may incur an additional travel fee depending on mileage.</p>
          <div className="pkg-grid">
            <div className="pkg-card">
              <div className="pkg-summary-info">
                <div className="pkg-name">Starter</div>
                <div className="pkg-price">$249</div>
              </div>
              <div className="pkg-body">
                <ul className="pkg-features">
                  <li>Up to 15 aerial photos</li><li>1 hour flight</li><li>Standard editing</li>
                  <li>Horizontal format for Airbnb &amp; VRBO</li><li>JPG delivery</li><li>3–5 day turnaround</li>
                </ul>
                <Link href="/book?service=Airbnb+%26+Short-Term+Rentals&pkg=Starter&price=249" className="pkg-cta-btn">Book Now</Link>
              </div>
            </div>
            <div className="pkg-card pkg-popular">
              <div className="pkg-summary-info">
                <div className="pkg-badge">Most Popular</div>
                <div className="pkg-name">Listing Boost</div>
                <div className="pkg-price">$449</div>
              </div>
              <div className="pkg-body">
                <ul className="pkg-features">
                  <li>Up to 30 aerial photos</li><li>Vertical Reels for Instagram &amp; TikTok</li>
                  <li>60 second social media video</li><li>Horizontal &amp; vertical formats</li>
                  <li>Premium editing &amp; color grade</li><li>JPG and video delivery</li><li>2–3 day turnaround</li>
                </ul>
                <Link href="/book?service=Airbnb+%26+Short-Term+Rentals&pkg=Listing+Boost&price=449" className="pkg-cta-btn">Book Now</Link>
              </div>
            </div>
            <div className="pkg-card">
              <div className="pkg-summary-info">
                <div className="pkg-name">Super Host</div>
                <div className="pkg-price">$599</div>
              </div>
              <div className="pkg-body">
                <ul className="pkg-features">
                  <li>Unlimited aerial photos</li><li>Full property cinematic video 2 min</li>
                  <li>3 vertical Reels for Instagram &amp; TikTok</li>
                  <li>Twilight &amp; golden hour shots</li><li>4K HDR video delivery</li>
                  <li>Horizontal &amp; vertical formats</li><li>Premium editing</li>
                  <li>Same day preview clip</li><li>Priority scheduling</li>
                </ul>
                <Link href="/book?service=Airbnb+%26+Short-Term+Rentals&pkg=Super+Host&price=599" className="pkg-cta-btn">Book Now</Link>
              </div>
            </div>
            <div className="pkg-card pkg-custom">
              <div className="pkg-summary-info">
                <div className="pkg-name">Custom</div>
                <div className="pkg-custom-price-label">Get a Quote</div>
              </div>
              <div className="pkg-body">
                <ul className="pkg-features">
                  <li>Multiple properties</li><li>Large estate rentals</li>
                  <li>Ski properties near Breckenridge, Vail &amp; Aspen</li>
                  <li>Ongoing content creation</li>
                </ul>
                <Link href="/book?service=Airbnb+%26+Short-Term+Rentals&pkg=Custom" className="pkg-cta-btn">Request Custom Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-gallery">
        <div className="sp-gallery-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Our Work</div>
          <h2 className="section-title">Airbnb &amp; Rental Shots</h2>
          <div className="re-photo-grid">
            <div className="re-photo re-photo-wide">
              <Image src="/images/airbnb/p1.jpg" alt="Aerial drone shot of Colorado Airbnb rental property" fill sizes="(max-width:768px) 100vw, 66vw" style={{ objectFit: 'cover' }} priority />
            </div>
            <div className="re-photo">
              <Image src="/images/airbnb/p2.jpg" alt="Drone photography of short-term rental in Colorado" fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className="re-photo">
              <Image src="/images/airbnb/p3.jpg" alt="Wide aerial view of vacation rental property Colorado" fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="sp-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Property Types</div>
          <h2 className="section-title">Every Short-Term Rental</h2>
          <div className="sp-type-grid">
            <div className="sp-type-item"><strong>Denver Apartments</strong>Urban lofts, condos and apartments in the heart of Denver</div>
            <div className="sp-type-item"><strong>City Homes</strong>Denver and metro area houses listed on Airbnb or VRBO</div>
            <div className="sp-type-item"><strong>Mountain Cabins</strong>Foothills and mountain retreat rentals near ski areas</div>
            <div className="sp-type-item"><strong>Ski Properties</strong>Winter rental homes near Breckenridge, Vail and Aspen</div>
            <div className="sp-type-item"><strong>Vacation Homes</strong>Any Colorado vacation rental looking to increase bookings</div>
            <div className="sp-type-item"><strong>Unique Stays</strong>Glamping, yurts, treehouses and specialty properties</div>
          </div>
        </div>
      </section>

      <section className="sp-cta">
        <div className="sp-cta-inner">
          <div className="sp-cta-title">Boost Your Listing Today</div>
          <p className="sp-cta-desc">Tell us about your rental property and location. We&apos;ll get you booked and deliver content within the week.</p>
          <Link href="/book?service=Airbnb+%26+Short-Term+Rentals" className="btn-primary">Book an Airbnb Shoot</Link>
        </div>
      </section>
    </>
  )
}
