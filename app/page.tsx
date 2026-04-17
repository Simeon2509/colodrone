import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import ScrollDrone from '@/components/ScrollDrone'

export default function Home() {
  return (
    <>
      {/* Floating drone — fixed on right, visible only while scrolling through content sections */}
      <ScrollDrone />

      <section id="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          src="/hero_bg.mp4"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
        <div className="hero-tag"><div className="tag-dot"></div>Proudly based in Denver, Colorado</div>
        <h1 className="hero-title"><span className="colo">Colo</span>Drone</h1>
        <p className="hero-subtitle-line">Colorado&apos;s Own Drone Photography &amp; Videography Service</p>
        <p className="hero-headline"><strong>Professionally flown. Beautifully shot.</strong> 4K HDR aerial photography and videography — delivered in both vertical and horizontal formats — serving Denver and all of Colorado.</p>
        <div className="hero-btns">
          <Link href="/services" className="btn-primary">Explore Services</Link>
          <a href="#contact" className="btn-outline">Get a Free Quote</a>
        </div>
        <div className="trust-bar">
          <div className="trust-item"><div className="trust-dot"></div>FAA Part 107 Certified</div>
          <div className="trust-item"><div className="trust-dot"></div>Denver Based &amp; Operated</div>
          <div className="trust-item"><div className="trust-dot"></div>4K HDR · Vertical &amp; Horizontal</div>
          <div className="trust-item"><div className="trust-dot"></div>Fully Insured</div>
          <div className="trust-item"><div className="trust-dot"></div>Same-Week Delivery</div>
        </div>
        </div>
      </section>

      <section id="services" style={{ background: 'var(--bg)', paddingBottom: 0 }}>
        <div className="section-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>What We Do</div>
          <h2 className="section-title">Our Services &amp; Pricing</h2>
          <p className="section-body">Transparent, flat-rate packages for every aerial need across Colorado. No hidden fees — what you see is what you pay.</p>
        </div>

        {/* 01 — REAL ESTATE */}
        <div id="pricing" className="pricing-svc">
          <div className="pricing-svc-inner">
            <div className="pricing-svc-head">
              <div className="pricing-svc-meta">
                <div className="pricing-svc-num">01</div>
                <div className="pricing-svc-name">Real Estate</div>
                <div className="pricing-svc-desc">Stunning aerial content that sells and rents faster. Exterior walkarounds, neighborhood context, lot overviews and twilight shots — for every listing across Colorado.</div>
                <div className="service-tags"><span className="tag">For Sale</span><span className="tag">For Rent</span><span className="tag">Apartments</span><span className="tag">Mountain Estates</span><span className="tag">4K Video</span></div>
              </div>
              <Link href="/real-estate" className="pricing-svc-link">Full service details →</Link>
            </div>
            <div className="pkg-grid">
              <details className="pkg-card">
                <summary className="pkg-summary"><div className="pkg-summary-info">
                  <div className="pkg-name">Basic</div>
                  <div className="pkg-price">$199</div>
                </div><span className="pkg-chevron" /></summary>
                <div className="pkg-body">
                  <ul className="pkg-features">
                    <li>Up to 10 aerial photos</li><li>1 hour flight time</li><li>Standard editing</li>
                    <li>JPG delivery</li><li>3–5 day turnaround</li><li>1 property</li>
                  </ul>
                  <Link href="/#contact" className="pkg-cta-btn">Book Now</Link>
                </div>
              </details>
              <details className="pkg-card pkg-popular">
                <summary className="pkg-summary"><div className="pkg-summary-info">
                  <div className="pkg-badge">Most Popular</div>
                  <div className="pkg-name">Standard</div>
                  <div className="pkg-price">$349</div>
                </div><span className="pkg-chevron" /></summary>
                <div className="pkg-body">
                  <ul className="pkg-features">
                    <li>Up to 25 aerial photos</li><li>2 hour flight time</li><li>Premium editing &amp; color grade</li>
                    <li>Horizontal &amp; vertical formats</li><li>JPG and RAW delivery</li>
                    <li>Twilight shot included</li><li>2–3 day turnaround</li><li>1 property</li>
                  </ul>
                  <Link href="/#contact" className="pkg-cta-btn">Book Now</Link>
                </div>
              </details>
              <details className="pkg-card">
                <summary className="pkg-summary"><div className="pkg-summary-info">
                  <div className="pkg-name">Premium</div>
                  <div className="pkg-price">$479</div>
                </div><span className="pkg-chevron" /></summary>
                <div className="pkg-body">
                  <ul className="pkg-features">
                    <li>Unlimited aerial photos</li><li>3 hour flight time</li>
                    <li>Full 4K HDR cinematic walkthrough video</li>
                    <li>Horizontal 16:9 &amp; vertical 9:16 delivery</li>
                    <li>Premium editing &amp; color grade</li><li>JPG, RAW &amp; video delivery</li>
                    <li>Same day rush available</li><li>1 property</li>
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
                    <li>Multiple properties</li><li>Large estates or commercial listings</li>
                    <li>Ongoing monthly listing shoots</li><li>Special requirements</li>
                  </ul>
                  <Link href="/#contact" className="pkg-cta-btn">Request Custom Quote</Link>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* 02 — WEDDINGS & EVENTS */}
        <div className="pricing-svc">
          <div className="pricing-svc-inner">
            <div className="pricing-svc-head">
              <div className="pricing-svc-meta">
                <div className="pricing-svc-num">02</div>
                <div className="pricing-svc-name">Weddings &amp; Events</div>
                <div className="pricing-svc-desc">Cinematic aerial coverage of your most important moments. Mountain ceremonies, Denver venues, outdoor festivals and corporate events across the Front Range.</div>
                <div className="service-tags"><span className="tag">Mountain Venues</span><span className="tag">Front Range</span><span className="tag">Cinematic</span><span className="tag">Corporate</span></div>
              </div>
              <Link href="/weddings" className="pricing-svc-link">Full service details →</Link>
            </div>
            <div className="pkg-grid">
              <details className="pkg-card">
                <summary className="pkg-summary"><div className="pkg-summary-info">
                  <div className="pkg-name">Essential</div>
                  <div className="pkg-price">$349</div>
                </div><span className="pkg-chevron" /></summary>
                <div className="pkg-body">
                  <ul className="pkg-features">
                    <li>Up to 2 hours aerial coverage</li><li>20 edited aerial photos</li>
                    <li>Horizontal &amp; vertical formats</li><li>JPG delivery</li><li>3–5 day turnaround</li>
                  </ul>
                  <Link href="/#contact" className="pkg-cta-btn">Book Now</Link>
                </div>
              </details>
              <details className="pkg-card">
                <summary className="pkg-summary"><div className="pkg-summary-info">
                  <div className="pkg-name">Complete</div>
                  <div className="pkg-price">$599</div>
                </div><span className="pkg-chevron" /></summary>
                <div className="pkg-body">
                  <ul className="pkg-features">
                    <li>Up to 4 hours aerial coverage</li><li>40 edited aerial photos</li>
                    <li>60 second highlight reel</li><li>4K HDR video delivery</li>
                    <li>Horizontal &amp; vertical formats</li><li>Premium editing</li><li>2–3 day turnaround</li>
                  </ul>
                  <Link href="/#contact" className="pkg-cta-btn">Book Now</Link>
                </div>
              </details>
              <details className="pkg-card pkg-popular">
                <summary className="pkg-summary"><div className="pkg-summary-info">
                  <div className="pkg-badge">Most Popular</div>
                  <div className="pkg-name">Cinematic</div>
                  <div className="pkg-price">$799</div>
                </div><span className="pkg-chevron" /></summary>
                <div className="pkg-body">
                  <ul className="pkg-features">
                    <li>Full day coverage up to 8 hours</li><li>Unlimited aerial photos</li>
                    <li>Cinematic highlight film 3–5 minutes</li><li>4K HDR video delivery</li>
                    <li>Horizontal &amp; vertical formats</li>
                    <li>Coordination with your photographer</li>
                    <li>Premium editing &amp; color grade</li><li>Same day preview clip</li>
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
                    <li>Multi-day events</li><li>Multiple locations</li>
                    <li>Corporate events &amp; large festivals</li><li>Elopements &amp; intimate sessions</li>
                  </ul>
                  <Link href="/#contact" className="pkg-cta-btn">Request Custom Quote</Link>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* 03 — CONSTRUCTION & INSPECTION */}
        <div className="pricing-svc">
          <div className="pricing-svc-inner">
            <div className="pricing-svc-head">
              <div className="pricing-svc-meta">
                <div className="pricing-svc-num">03</div>
                <div className="pricing-svc-name">Construction &amp; Inspection</div>
                <div className="pricing-svc-desc">Aerial documentation from groundbreaking to ribbon-cutting, and high-resolution inspection reports accepted by major insurance adjusters.</div>
                <div className="service-tags"><span className="tag">Time-lapse</span><span className="tag">Monthly Plans</span><span className="tag">Insurance</span><span className="tag">Hi-Res Reports</span></div>
              </div>
              <Link href="/construction" className="pricing-svc-link">Full service details →</Link>
            </div>
            <div className="pkg-grid">
              <details className="pkg-card">
                <summary className="pkg-summary"><div className="pkg-summary-info">
                  <div className="pkg-name">Single Visit</div>
                  <div className="pkg-price">$299</div>
                </div><span className="pkg-chevron" /></summary>
                <div className="pkg-body">
                  <ul className="pkg-features">
                    <li>1 site visit</li><li>Up to 15 aerial photos</li><li>Basic progress report</li>
                    <li>JPG delivery</li><li>48 hour turnaround</li><li>1 location</li>
                  </ul>
                  <Link href="/#contact" className="pkg-cta-btn">Book Now</Link>
                </div>
              </details>
              <details className="pkg-card pkg-popular">
                <summary className="pkg-summary"><div className="pkg-summary-info">
                  <div className="pkg-badge">Most Popular</div>
                  <div className="pkg-name">Monthly Progress</div>
                  <div className="pkg-price">$499</div>
                </div><span className="pkg-chevron" /></summary>
                <div className="pkg-body">
                  <ul className="pkg-features">
                    <li>1 visit per month</li><li>Up to 30 aerial photos per visit</li>
                    <li>Detailed progress report</li><li>Before &amp; after comparison</li>
                    <li>JPG and RAW delivery</li><li>Priority scheduling</li>
                    <li>Coverage across Colorado</li>
                  </ul>
                  <Link href="/#contact" className="pkg-cta-btn">Book Now</Link>
                </div>
              </details>
              <details className="pkg-card">
                <summary className="pkg-summary"><div className="pkg-summary-info">
                  <div className="pkg-name">Full Documentation</div>
                  <div className="pkg-price">$719</div>
                </div><span className="pkg-chevron" /></summary>
                <div className="pkg-body">
                  <ul className="pkg-features">
                    <li>Weekly site visits</li><li>Unlimited aerial photos</li>
                    <li>4K video walkthrough each visit</li>
                    <li>Full time-lapse groundbreaking to completion</li>
                    <li>Detailed annotated reports</li><li>Investor update packages</li>
                    <li>Same day delivery available</li><li>Dedicated project contact</li>
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
                    <li>Large commercial developments</li><li>Multi-site projects</li>
                    <li>Insurance &amp; legal documentation</li>
                    <li>Roof &amp; property inspection reports</li>
                    <li>Storm &amp; hail damage documentation</li>
                  </ul>
                  <Link href="/#contact" className="pkg-cta-btn">Request Custom Quote</Link>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* 04 — AIRBNB & SHORT-TERM RENTALS */}
        <div className="pricing-svc">
          <div className="pricing-svc-inner">
            <div className="pricing-svc-head">
              <div className="pricing-svc-meta">
                <div className="pricing-svc-num">04</div>
                <div className="pricing-svc-name">Airbnb &amp; Short-Term Rentals</div>
                <div className="pricing-svc-desc">Listings with aerial photos get more clicks, more bookings and higher nightly rates. Make your Denver or Colorado rental impossible to scroll past.</div>
                <div className="service-tags"><span className="tag">Airbnb</span><span className="tag">VRBO</span><span className="tag">Denver Rentals</span><span className="tag">Vertical Reels</span></div>
              </div>
              <Link href="/airbnb" className="pricing-svc-link">Full service details →</Link>
            </div>
            <div className="pkg-grid">
              <details className="pkg-card">
                <summary className="pkg-summary"><div className="pkg-summary-info">
                  <div className="pkg-name">Starter</div>
                  <div className="pkg-price">$249</div>
                </div><span className="pkg-chevron" /></summary>
                <div className="pkg-body">
                  <ul className="pkg-features">
                    <li>Up to 15 aerial photos</li><li>1 hour flight</li><li>Standard editing</li>
                    <li>Horizontal format for Airbnb &amp; VRBO</li><li>JPG delivery</li><li>3–5 day turnaround</li>
                  </ul>
                  <Link href="/#contact" className="pkg-cta-btn">Book Now</Link>
                </div>
              </details>
              <details className="pkg-card pkg-popular">
                <summary className="pkg-summary"><div className="pkg-summary-info">
                  <div className="pkg-badge">Most Popular</div>
                  <div className="pkg-name">Listing Boost</div>
                  <div className="pkg-price">$449</div>
                </div><span className="pkg-chevron" /></summary>
                <div className="pkg-body">
                  <ul className="pkg-features">
                    <li>Up to 30 aerial photos</li><li>Vertical Reels for Instagram &amp; TikTok</li>
                    <li>60 second social media video</li><li>Horizontal &amp; vertical formats</li>
                    <li>Premium editing &amp; color grade</li><li>JPG and video delivery</li><li>2–3 day turnaround</li>
                  </ul>
                  <Link href="/#contact" className="pkg-cta-btn">Book Now</Link>
                </div>
              </details>
              <details className="pkg-card">
                <summary className="pkg-summary"><div className="pkg-summary-info">
                  <div className="pkg-name">Super Host</div>
                  <div className="pkg-price">$599</div>
                </div><span className="pkg-chevron" /></summary>
                <div className="pkg-body">
                  <ul className="pkg-features">
                    <li>Unlimited aerial photos</li><li>Full property cinematic video 2 min</li>
                    <li>3 vertical Reels for Instagram &amp; TikTok</li>
                    <li>Twilight &amp; golden hour shots</li><li>4K HDR video delivery</li>
                    <li>Horizontal &amp; vertical formats</li><li>Premium editing</li>
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
                    <li>Multiple properties</li><li>Large estate rentals</li>
                    <li>Ski properties near Breckenridge, Vail &amp; Aspen</li>
                    <li>Ongoing content creation</li>
                  </ul>
                  <Link href="/#contact" className="pkg-cta-btn">Request Custom Quote</Link>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* 05 — VENUES, HOTELS & GOLF */}
        <div className="pricing-svc">
          <div className="pricing-svc-inner">
            <div className="pricing-svc-head">
              <div className="pricing-svc-meta">
                <div className="pricing-svc-num">05</div>
                <div className="pricing-svc-name">Venues, Hotels &amp; Golf Courses</div>
                <div className="pricing-svc-desc">Give future guests a stunning first impression. Aerial content that showcases your full property, grounds and Colorado location like nothing else can.</div>
                <div className="service-tags"><span className="tag">Event Venues</span><span className="tag">Hotels</span><span className="tag">Resorts</span><span className="tag">Golf Courses</span><span className="tag">4K HDR</span></div>
              </div>
              <Link href="/venues" className="pricing-svc-link">Full service details →</Link>
            </div>
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
        </div>

      </section>

      <section id="quality">
        <div className="section-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>The Footage</div>
          <h2 className="section-title">Cinema-Grade Quality, Every Shot</h2>
          <p className="section-body">Flown on the DJI Mini 3 — built for stunning imagery in any light condition.</p>
          <div className="quality-grid">
            <div className="quality-card">
              <div className="quality-icon">4K</div>
              <div className="quality-title">4K HDR Video</div>
              <div className="quality-desc">Crystal-clear aerial footage in 4K Ultra HD HDR — colors that pop and detail that holds up on any screen.</div>
            </div>
            <div className="quality-card">
              <div className="quality-icon">ISO</div>
              <div className="quality-title">Dual Native ISO</div>
              <div className="quality-desc">DJI Mini 3&apos;s Dual Native ISO Fusion captures rich detail in both highlights and shadows — day or night, golden hour or overcast.</div>
            </div>
            <div className="quality-card">
              <div className="quality-icon">↕↔</div>
              <div className="quality-title">Vertical &amp; Horizontal</div>
              <div className="quality-desc">Every shoot delivered in both orientations. Landscape for listings and websites, vertical for Instagram Reels and TikTok.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="local">
        <div className="section-inner">
          <div className="local-grid">
            <div>
              <div className="section-eyebrow"><div className="eyebrow-line"></div>Why Local Matters</div>
              <h2 className="section-title">We Know Colorado Like the Back of Our Hand</h2>
              <p className="section-body">We&apos;re not a national company sending someone from out of state. We&apos;re based right here in Denver and know every corner of the Front Range.</p>
              <div className="local-points">
                <div className="local-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="var(--co-blue)" fill="none" strokeWidth="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div><div className="point-title">Denver based &amp; operated</div><div className="point-desc">We know the best light windows over the Rockies and every neighborhood from RiNo to Cherry Creek.</div></div>
                </div>
                <div className="local-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="var(--co-blue)" fill="none" strokeWidth="1.5">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div><div className="point-title">Colorado airspace expertise</div><div className="point-desc">Full LAANC authorization for controlled airspace near DIA and Denver. We handle all FAA paperwork.</div></div>
                </div>
                <div className="local-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="var(--co-blue)" fill="none" strokeWidth="1.5">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    </svg>
                  </div>
                  <div><div className="point-title">Supporting Colorado businesses</div><div className="point-desc">When you hire ColoDrone your money stays local. We&apos;re invested in Colorado&apos;s growth the same way you are.</div></div>
                </div>
                <div className="local-point">
                  <div className="point-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="var(--co-blue)" fill="none" strokeWidth="1.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div><div className="point-title">300 sunny days a year</div><div className="point-desc">Colorado&apos;s famous blue skies mean we fly more, deliver faster, and always get the perfect shot.</div></div>
                </div>
              </div>
            </div>
            <div className="local-visual">
              <div className="section-eyebrow" style={{ marginBottom: '1rem' }}><div className="eyebrow-line"></div>ColoDrone by the numbers</div>
              <div className="co-stats">
                <div className="co-stat"><div className="co-stat-num">300+</div><div className="co-stat-label">Flights Flown</div></div>
                <div className="co-stat"><div className="co-stat-num">5280</div><div className="co-stat-label">Feet Above Sea Level</div></div>
                <div className="co-stat"><div className="co-stat-num">4K</div><div className="co-stat-label">HDR Resolution</div></div>
                <div className="co-stat"><div className="co-stat-num">24hr</div><div className="co-stat-label">Quote Turnaround</div></div>
              </div>
              <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: 'var(--co-blue-light)', border: '0.5px solid rgba(27,79,216,0.2)', borderRadius: '3px' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--co-blue)', marginBottom: '0.5rem' }}>Our Coverage Area</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: '1.7' }}>Denver Metro · Boulder · Fort Collins · Colorado Springs · Vail · Breckenridge · Aspen · Steamboat Springs · Pueblo · Grand Junction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="section-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>How It Works</div>
          <h2 className="section-title">Simple From Start to Finish</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num">01</div>
              <div className="step-title">Reach Out</div>
              <div className="step-body">Tell us your project, location, and date. We confirm airspace and send a quote within 24 hours.</div>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <div className="step-title">We Plan</div>
              <div className="step-body">We scout the Colorado site, check weather, file LAANC authorizations and plan the perfect flight.</div>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <div className="step-title">We Fly</div>
              <div className="step-body">Professional on-site shoot with full safety protocols. Most sessions run 1–3 hours.</div>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <div className="step-title">You Receive</div>
              <div className="step-body">Edited photos and video delivered via private gallery link within 3–5 business days.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="coverage">
        <div className="section-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Where We Fly</div>
          <h2 className="section-title">Covering All of Colorado</h2>
          <p className="section-body">Based in Denver but ready to fly anywhere across the great state of Colorado. Mountain towns, plains cities, ski resorts — we go where you need us.</p>
          <div className="coverage-grid">
            <div className="coverage-item"><div className="coverage-name">Denver</div><div className="coverage-dist">Home Base</div></div>
            <div className="coverage-item"><div className="coverage-name">Boulder</div><div className="coverage-dist">~30 min</div></div>
            <div className="coverage-item"><div className="coverage-name">Fort Collins</div><div className="coverage-dist">~1 hr</div></div>
            <div className="coverage-item"><div className="coverage-name">Colorado Springs</div><div className="coverage-dist">~1 hr</div></div>
            <div className="coverage-item"><div className="coverage-name">Breckenridge</div><div className="coverage-dist">~1.5 hrs</div></div>
            <div className="coverage-item"><div className="coverage-name">Vail</div><div className="coverage-dist">~2 hrs</div></div>
            <div className="coverage-item"><div className="coverage-name">Aspen</div><div className="coverage-dist">~3 hrs</div></div>
            <div className="coverage-item"><div className="coverage-name">Steamboat Springs</div><div className="coverage-dist">~3 hrs</div></div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div>
              <div className="section-eyebrow"><div className="eyebrow-line"></div>Get in Touch</div>
              <h2 className="section-title">Book Your Colorado Flight</h2>
              <p className="section-body" style={{ marginBottom: '1.5rem' }}>Ready to see Colorado from above? We respond within one business day with availability and a custom quote.</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--co-blue)" fill="none" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  Denver, Colorado — Serving All of CO
                </div>
                <div className="contact-detail">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--co-blue)" fill="none" strokeWidth="1.5">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
                  </svg>
                  (303) 949-7775
                </div>
                <div className="contact-detail">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--co-blue)" fill="none" strokeWidth="1.5">
                    <path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zM3 7l9 6 9-6" />
                  </svg>
                  hello@colodrone.com
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
