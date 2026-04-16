import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Airbnb & Short-Term Rental Drone Photography — ColoDrone',
  description: 'Aerial drone photography for Airbnb and VRBO rentals in Denver and Colorado. Boost your listing with stunning exterior shots and vertical social media reels.',
}

export default function AirbnbPage() {
  return (
    <>
      <section className="sp-hero">
        <div className="sp-hero-label">Service 04</div>
        <h1 className="sp-hero-title">Airbnb &amp; Short-Term Rentals</h1>
        <p className="sp-hero-desc">Listings with aerial photos get more clicks, more bookings and higher nightly rates. Make your Denver or Colorado rental impossible to scroll past.</p>
        <div className="sp-hero-btns">
          <Link href="/#contact" className="btn-primary">Get a Free Quote</Link>
          <Link href="/#services" className="btn-outline">All Services</Link>
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

      <section className="sp-gallery">
        <div className="sp-gallery-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Our Work</div>
          <h2 className="section-title">Airbnb &amp; Rental Shots</h2>
          <div className="sp-gallery-grid">
            <div className="img-slot wide"><div className="img-slot-icon">📷</div><span>Property Hero Shot</span></div>
            <div className="img-slot portrait"><div className="img-slot-icon">📷</div><span>Instagram Reel</span></div>
            <div className="img-slot"><div className="img-slot-icon">📷</div><span>Neighborhood</span></div>
            <div className="img-slot"><div className="img-slot-icon">📷</div><span>Rooftop / Deck</span></div>
            <div className="img-slot"><div className="img-slot-icon">📷</div><span>Street Approach</span></div>
            <div className="img-slot portrait"><div className="img-slot-icon">📷</div><span>TikTok Reel</span></div>
            <div className="img-slot"><div className="img-slot-icon">📷</div><span>Mountain Cabin</span></div>
            <div className="img-slot wide"><div className="img-slot-icon">📷</div><span>Denver Skyline Context</span></div>
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
          <Link href="/#contact" className="btn-primary">Book an Airbnb Shoot</Link>
        </div>
      </section>
    </>
  )
}
