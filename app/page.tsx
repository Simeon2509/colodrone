import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import ScrollDrone from '@/components/ScrollDrone'
import ServiceCard from '@/components/ServiceCard'

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
          <Link href="/book" className="btn-outline">Get a Free Quote</Link>
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
          <h2 className="section-title">Our Services</h2>
          <p className="section-body">Aerial photography and videography for every need across Colorado. Click any service to see packages and pricing.</p>
        </div>

        <ServiceCard index={0} num="01" name="Real Estate" href="/real-estate" video="/re_bg.mp4"
          desc="Stunning aerial content that sells and rents faster. Exterior walkarounds, neighborhood context, lot overviews and twilight shots — for every listing across Colorado."
          tags={['For Sale','For Rent','Apartments','Mountain Estates','4K Video']} />

        <ServiceCard index={1} num="02" name="Weddings & Events" href="/weddings" video="/weddings_bg.mp4"
          desc="Cinematic aerial coverage of your most important moments. Mountain ceremonies, Denver venues, outdoor festivals and corporate events across the Front Range."
          tags={['Mountain Venues','Front Range','Cinematic','Corporate']} />

        <ServiceCard index={2} num="03" name="Construction & Inspection" href="/construction" video="/construction_bg.mp4"
          desc="Aerial documentation from groundbreaking to ribbon-cutting, and high-resolution inspection reports accepted by major insurance adjusters."
          tags={['Time-lapse','Monthly Plans','Insurance','Hi-Res Reports']} />

        <ServiceCard index={3} num="04" name="Airbnb & Short-Term Rentals" href="/airbnb" video="/airbnb_bg.mp4"
          desc="Listings with aerial photos get more clicks, more bookings and higher nightly rates. Make your Denver or Colorado rental impossible to scroll past."
          tags={['Airbnb','VRBO','Denver Rentals','Vertical Reels']} />

        <ServiceCard index={4} num="05" name="Venues, Hotels & Golf Courses" href="/venues" video="/venues_bg.mp4"
          desc="Give future guests a stunning first impression. Aerial content that showcases your full property, grounds and Colorado location like nothing else can."
          tags={['Event Venues','Hotels','Resorts','Golf Courses','4K HDR']} />

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

      <section id="testimonials" style={{ background: 'var(--bg)' }}>
        <div className="section-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>What Clients Say</div>
          <h2 className="section-title">Trusted Across Colorado</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"ColoDrone made our listing stand out immediately. The aerial shots showed the full lot and neighborhood context in a way ground photos never could. We had multiple offers within a week."</p>
              <div className="testimonial-author">
                <div className="testimonial-name">Sarah M.</div>
                <div className="testimonial-role">Real Estate Agent · Cherry Creek</div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"The wedding footage was absolutely breathtaking. Having aerial shots of our mountain ceremony in Breckenridge was something our guests still talk about. Completely worth it."</p>
              <div className="testimonial-author">
                <div className="testimonial-name">Jake & Lindsey T.</div>
                <div className="testimonial-role">Wedding · Breckenridge, CO</div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"We use ColoDrone monthly to document our construction projects. The progress shots are incredibly useful for clients and the turnaround is always fast. Highly recommend."</p>
              <div className="testimonial-author">
                <div className="testimonial-name">Marcus R.</div>
                <div className="testimonial-role">Project Manager · Denver Metro</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="coverage">
        <div className="section-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>Where We Fly</div>
          <h2 className="section-title">Covering All of Colorado</h2>
          <p className="section-body">Based in Denver but ready to fly anywhere across the great state of Colorado. Mountain towns, plains cities, ski resorts — we go where you need us.</p>

          {/* Colorado SVG Map */}
          <div className="co-map-wrap">
            <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" width="100%" style={{ display: 'block' }} aria-label="ColoDrone coverage map of Colorado">
              <defs>
                <filter id="co-sketch" x="-4%" y="-4%" width="108%" height="108%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="4" seed="7" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <pattern id="co-dots" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="0.9" fill="rgba(255,255,255,0.05)" />
                </pattern>
                <radialGradient id="co-glow" cx="0" cy="0" r="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1B4FD8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#1B4FD8" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Subtle dot grid */}
              <rect width="800" height="500" fill="url(#co-dots)" />

              {/* State border — sketchy rect */}
              <rect x="40" y="28" width="720" height="444" rx="8" fill="none"
                stroke="#1B4FD8" strokeWidth="1.8" opacity="0.55"
                filter="url(#co-sketch)" />
              <rect x="40" y="28" width="720" height="444" rx="8" fill="none"
                stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

              {/* Rocky Mountains — triangle peaks, left ~40% of state */}
              <g fill="none" stroke="#1B4FD8" strokeWidth="1" opacity="0.28" strokeLinejoin="round">
                <polygon points="55,282 90,200 125,282" />
                <polygon points="100,260 135,176 170,260" />
                <polygon points="72,312 104,238 136,312" />
                <polygon points="132,272 165,192 198,272" />
                <polygon points="62,348 90,278 118,348" />
                <polygon points="158,242 188,166 218,242" />
                <polygon points="188,292 214,222 240,292" />
                <polygon points="122,308 150,238 178,308" />
                <polygon points="148,358 172,290 196,358" />
                <polygon points="178,332 202,268 226,332" />
                <polygon points="208,258 232,190 256,258" />
                <polygon points="228,312 250,252 272,312" />
                <polygon points="262,242 284,180 306,242" />
                <polygon points="270,222 292,162 314,222" />
                <polygon points="232,348 254,286 276,348" />
                <polygon points="302,244 322,188 342,244" />
                <polygon points="82,358 106,296 130,358" />
                <polygon points="320,210 338,164 356,210" />
              </g>
              {/* Faint background ridge layer */}
              <g fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" strokeLinejoin="round">
                <polygon points="70,270 98,198 126,270" />
                <polygon points="146,264 172,196 198,264" />
                <polygon points="218,250 242,186 266,250" />
                <polygon points="280,232 300,180 320,232" />
              </g>

              {/* Flight paths — animated dashes radiating from Denver */}
              <g fill="none" strokeWidth="0.9" strokeDasharray="4 7">
                {/* → Boulder */}
                <path d="M 455 168 Q 441 148 427 139" stroke="rgba(255,255,255,0.2)" className="co-path" style={{ animationDelay: '0s' }} />
                {/* → Fort Collins */}
                <path d="M 455 168 Q 450 118 446 75" stroke="rgba(255,255,255,0.2)" className="co-path" style={{ animationDelay: '0.5s' }} />
                {/* → Colorado Springs */}
                <path d="M 455 168 Q 465 218 473 269" stroke="rgba(255,255,255,0.2)" className="co-path" style={{ animationDelay: '1s' }} />
                {/* → Breckenridge */}
                <path d="M 455 168 Q 394 148 348 197" stroke="rgba(255,255,255,0.2)" className="co-path" style={{ animationDelay: '0.25s' }} />
                {/* → Vail */}
                <path d="M 455 168 Q 382 148 314 180" stroke="rgba(255,255,255,0.2)" className="co-path" style={{ animationDelay: '0.75s' }} />
                {/* → Aspen */}
                <path d="M 455 168 Q 360 180 267 229" stroke="rgba(255,255,255,0.2)" className="co-path" style={{ animationDelay: '1.25s' }} />
                {/* → Steamboat Springs */}
                <path d="M 455 168 Q 358 118 266 87" stroke="rgba(255,255,255,0.2)" className="co-path" style={{ animationDelay: '0.4s' }} />
              </g>

              {/* — Steamboat Springs — */}
              <g>
                <circle cx="266" cy="87" r="3.5" fill="white" opacity="0.85" />
                <g className="co-labels">
                  <text x="278" y="83" fontSize="9" fill="rgba(255,255,255,0.88)" fontFamily="DM Sans, sans-serif" fontWeight="500">Steamboat Springs</text>
                  <text x="278" y="95" fontSize="7.5" fill="rgba(255,255,255,0.4)" fontFamily="DM Sans, sans-serif">~3 hrs</text>
                </g>
              </g>

              {/* — Fort Collins — */}
              <g>
                <circle cx="446" cy="75" r="3.5" fill="white" opacity="0.85" />
                <g className="co-labels">
                  <text x="458" y="71" fontSize="9" fill="rgba(255,255,255,0.88)" fontFamily="DM Sans, sans-serif" fontWeight="500">Fort Collins</text>
                  <text x="458" y="83" fontSize="7.5" fill="rgba(255,255,255,0.4)" fontFamily="DM Sans, sans-serif">~1 hr</text>
                </g>
              </g>

              {/* — Boulder — */}
              <g>
                <circle cx="427" cy="139" r="3.5" fill="white" opacity="0.85" />
                <g className="co-labels">
                  <text x="415" y="134" fontSize="9" fill="rgba(255,255,255,0.88)" fontFamily="DM Sans, sans-serif" fontWeight="500" textAnchor="end">Boulder</text>
                  <text x="415" y="146" fontSize="7.5" fill="rgba(255,255,255,0.4)" fontFamily="DM Sans, sans-serif" textAnchor="end">~30 min</text>
                </g>
              </g>

              {/* — Vail — */}
              <g>
                <circle cx="314" cy="180" r="3.5" fill="white" opacity="0.85" />
                <g className="co-labels">
                  <text x="302" y="174" fontSize="9" fill="rgba(255,255,255,0.88)" fontFamily="DM Sans, sans-serif" fontWeight="500" textAnchor="end">Vail</text>
                  <text x="302" y="186" fontSize="7.5" fill="rgba(255,255,255,0.4)" fontFamily="DM Sans, sans-serif" textAnchor="end">~2 hrs</text>
                </g>
              </g>

              {/* — Breckenridge — */}
              <g>
                <circle cx="348" cy="197" r="3.5" fill="white" opacity="0.85" />
                <g className="co-labels">
                  <text x="360" y="192" fontSize="9" fill="rgba(255,255,255,0.88)" fontFamily="DM Sans, sans-serif" fontWeight="500">Breckenridge</text>
                  <text x="360" y="204" fontSize="7.5" fill="rgba(255,255,255,0.4)" fontFamily="DM Sans, sans-serif">~1.5 hrs</text>
                </g>
              </g>

              {/* — Aspen — */}
              <g>
                <circle cx="267" cy="229" r="3.5" fill="white" opacity="0.85" />
                <g className="co-labels">
                  <text x="255" y="223" fontSize="9" fill="rgba(255,255,255,0.88)" fontFamily="DM Sans, sans-serif" fontWeight="500" textAnchor="end">Aspen</text>
                  <text x="255" y="235" fontSize="7.5" fill="rgba(255,255,255,0.4)" fontFamily="DM Sans, sans-serif" textAnchor="end">~3 hrs</text>
                </g>
              </g>

              {/* — Denver — home base with glow + pulse */}
              <g transform="translate(455,168)">
                <circle r="24" fill="url(#co-glow)" />
                <circle r="11" fill="none" stroke="#1B4FD8" strokeWidth="1.5" className="co-pulse" />
                <circle r="6" fill="#1B4FD8" stroke="white" strokeWidth="1.5" />
                <circle r="2.5" fill="white" opacity="0.85" />
                <g className="co-labels">
                  <text x="13" y="-5" fontSize="10" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="600">Denver</text>
                  <text x="13" y="8" fontSize="7.5" fill="#4d7ce8" fontFamily="DM Sans, sans-serif" letterSpacing="1">HOME BASE</text>
                </g>
              </g>

              {/* — Colorado Springs — */}
              <g>
                <circle cx="473" cy="269" r="3.5" fill="white" opacity="0.85" />
                <g className="co-labels">
                  <text x="485" y="264" fontSize="9" fill="rgba(255,255,255,0.88)" fontFamily="DM Sans, sans-serif" fontWeight="500">Colorado Springs</text>
                  <text x="485" y="276" fontSize="7.5" fill="rgba(255,255,255,0.4)" fontFamily="DM Sans, sans-serif">~1 hr</text>
                </g>
              </g>
            </svg>
          </div>

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

      <section id="faq" style={{ background: 'var(--bg)' }}>
        <div className="section-inner">
          <div className="section-eyebrow"><div className="eyebrow-line"></div>FAQ</div>
          <h2 className="section-title">Common Questions</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">Do you need a permit or FAA authorization to fly?</summary>
              <p className="faq-answer">Yes — and we handle all of it. We are FAA Part 107 certified and file LAANC authorizations for any controlled airspace, including areas near DIA and downtown Denver. You don't need to do anything on your end.</p>
            </details>
            <details className="faq-item">
              <summary className="faq-question">What happens if the weather is bad on shoot day?</summary>
              <p className="faq-answer">We monitor conditions closely leading up to your shoot. If wind, rain, or low visibility makes flying unsafe, we'll reschedule at no charge. Colorado weather moves fast — we're flexible and will find the next available window that works for both of us.</p>
            </details>
            <details className="faq-item">
              <summary className="faq-question">How far outside Denver do you travel?</summary>
              <p className="faq-answer">We cover all of Colorado — from Boulder and Fort Collins to Aspen, Vail, and Steamboat Springs. Locations within the Denver metro are included in all package prices. For shoots further out, a travel fee applies based on mileage.</p>
            </details>
            <details className="faq-item">
              <summary className="faq-question">How long does it take to get the edited files?</summary>
              <p className="faq-answer">Most shoots are delivered within 3–5 business days via a private gallery link. Need it faster? Same-day rush delivery is available on select packages — just mention it when you book.</p>
            </details>
            <details className="faq-item">
              <summary className="faq-question">What formats do you deliver in?</summary>
              <p className="faq-answer">Every shoot is delivered in both horizontal (16:9) and vertical (9:16) formats so you have content ready for your website, MLS listing, Instagram Reels, and TikTok. Photos are delivered as high-resolution JPGs, with RAW files available on Standard and Premium packages.</p>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Are you insured?</summary>
              <p className="faq-answer">Yes. ColoDrone carries full liability insurance for every flight. If your venue, HOA, or client requires a certificate of insurance, we can provide one before the shoot.</p>
            </details>
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
