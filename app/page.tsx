import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
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
          <a href="#services" className="btn-primary">Explore Services</a>
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

      <section id="services">
        <div className="section-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>What We Do</div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-body">From luxury real estate listings along Cherry Creek to wedding ceremonies in the Rockies — we cover every aerial need across Colorado.</p>
          <div className="services-grid">
            <Link href="/real-estate" className="service-card">
              <div className="service-accent"></div>
              <div className="service-num">01</div>
              <div className="service-name">Real Estate</div>
              <div className="service-desc">Stunning aerial content that sells and rents faster. From downtown Denver apartments and city homes to sprawling mountain estates — wherever the property is, we deliver exterior walkarounds, neighborhood context, lot overviews and twilight shots that make every listing stand out.</div>
              <div className="service-tags"><span className="tag">For Sale</span><span className="tag">For Rent</span><span className="tag">Apartments</span><span className="tag">City Homes</span><span className="tag">Mountain Estates</span><span className="tag">4K Video</span></div>
              <div className="service-more">See what&apos;s included <span>→</span></div>
            </Link>
            <Link href="/weddings" className="service-card">
              <div className="service-accent"></div>
              <div className="service-num">02</div>
              <div className="service-name">Weddings &amp; Events</div>
              <div className="service-desc">Cinematic aerial coverage of your special day. Mountain ceremonies, Denver venues, outdoor festivals and corporate events across the Front Range.</div>
              <div className="service-tags"><span className="tag">Mountain Venues</span><span className="tag">Front Range</span><span className="tag">Cinematic</span></div>
              <div className="service-more">See what&apos;s included <span>→</span></div>
            </Link>
            <Link href="/construction" className="service-card">
              <div className="service-accent"></div>
              <div className="service-num">03</div>
              <div className="service-name">Construction &amp; Inspection</div>
              <div className="service-desc">Weekly or monthly aerial documentation of your Colorado build from groundbreaking to ribbon-cutting — plus high-resolution roof and property inspection reports for homeowners, insurance adjusters and property managers.</div>
              <div className="service-tags"><span className="tag">Time-lapse</span><span className="tag">Monthly Plans</span><span className="tag">Insurance</span><span className="tag">Hi-Res Reports</span></div>
              <div className="service-more">See what&apos;s included <span>→</span></div>
            </Link>
            <Link href="/airbnb" className="service-card">
              <div className="service-accent"></div>
              <div className="service-num">04</div>
              <div className="service-name">Airbnb &amp; Short-Term Rentals</div>
              <div className="service-desc">Stand out on Airbnb and VRBO with stunning aerial shots of your Denver or Colorado rental. Neighborhood context, exterior views, and scroll-stopping vertical reels for social media — everything you need to boost your listing.</div>
              <div className="service-tags"><span className="tag">Airbnb</span><span className="tag">VRBO</span><span className="tag">Denver Rentals</span><span className="tag">Vertical Reels</span></div>
              <div className="service-more">See what&apos;s included <span>→</span></div>
            </Link>
            <Link href="/venues" className="service-card">
              <div className="service-accent"></div>
              <div className="service-num">05</div>
              <div className="service-name">Venues, Hotels &amp; Golf Courses</div>
              <div className="service-desc">Showcase your property at its best. Aerial footage and photos for event venues, hotels, resorts and golf courses across Colorado — highlight your grounds, surroundings and amenities in stunning 4K HDR delivered in both horizontal and vertical formats.</div>
              <div className="service-tags"><span className="tag">Event Venues</span><span className="tag">Hotels</span><span className="tag">Resorts</span><span className="tag">Golf Courses</span><span className="tag">4K HDR</span></div>
              <div className="service-more">See what&apos;s included <span>→</span></div>
            </Link>
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
