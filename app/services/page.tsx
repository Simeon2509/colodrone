import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services — ColoDrone | Colorado Drone Photography & Videography',
  description: 'Explore all ColoDrone services: real estate, weddings, construction, Airbnb rentals, venues and golf courses. Professional 4K HDR drone photography across Colorado.',
}

const services = [
  {
    num: '01',
    name: 'Real Estate',
    href: '/real-estate',
    desc: 'Stunning aerial content that sells and rents faster. Exterior walkarounds, neighborhood context, lot overviews and twilight shots — delivered in both horizontal and vertical formats for every platform.',
    tags: ['For Sale', 'For Rent', 'Apartments', 'City Homes', 'Mountain Estates', '4K Video'],
    cta: 'Real Estate Details',
  },
  {
    num: '02',
    name: 'Weddings & Events',
    href: '/weddings',
    desc: 'Cinematic aerial coverage of your special day. Mountain ceremonies, Denver venues, outdoor festivals and corporate events across the Front Range — captured in breathtaking 4K HDR.',
    tags: ['Mountain Venues', 'Denver Events', 'Front Range', 'Cinematic', 'Corporate'],
    cta: 'Wedding Details',
  },
  {
    num: '03',
    name: 'Construction & Inspection',
    href: '/construction',
    desc: 'Weekly or monthly aerial documentation of your Colorado build from groundbreaking to ribbon-cutting. High-resolution roof and property inspection reports for homeowners, insurance adjusters and property managers.',
    tags: ['Time-lapse', 'Monthly Plans', 'Insurance', 'Hi-Res Reports', 'Roof Inspection'],
    cta: 'Construction Details',
  },
  {
    num: '04',
    name: 'Airbnb & Short-Term Rentals',
    href: '/airbnb',
    desc: 'Stand out on Airbnb and VRBO with stunning aerial shots of your Denver or Colorado rental. Neighborhood context, exterior views, and scroll-stopping vertical reels that boost bookings.',
    tags: ['Airbnb', 'VRBO', 'Denver Rentals', 'Vertical Reels', 'Social Media'],
    cta: 'Rental Details',
  },
  {
    num: '05',
    name: 'Venues, Hotels & Golf Courses',
    href: '/venues',
    desc: 'Showcase your property at its best. Aerial footage and photos for event venues, hotels, resorts and golf courses — highlight your grounds, surroundings and amenities in stunning 4K HDR.',
    tags: ['Event Venues', 'Hotels', 'Resorts', 'Golf Courses', '4K HDR'],
    cta: 'Venue Details',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="svc-hero">
        <Image
          src="/images/real-estate/p1.jpg"
          alt="Aerial drone view of Colorado"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
        <div className="svc-hero-inner" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <div className="eyebrow-line" />
            What We Do
          </div>
          <h1 className="svc-hero-title">Our Services</h1>
          <p className="svc-hero-desc">
            From luxury real estate listings along Cherry Creek to wedding ceremonies in the Rockies —
            we cover every aerial need across Colorado. FAA Part 107 Certified. Fully Insured.
          </p>
          <div className="trust-bar" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
            <div className="trust-item"><div className="trust-dot" />FAA Part 107 Certified</div>
            <div className="trust-item"><div className="trust-dot" />Denver Based</div>
            <div className="trust-item"><div className="trust-dot" />4K HDR · Vertical &amp; Horizontal</div>
            <div className="trust-item"><div className="trust-dot" />Fully Insured</div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="svc-list">
        <div className="section-inner">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="svc-row">
              <div className="svc-row-num">{s.num}</div>
              <div className="svc-row-body">
                <div className="svc-row-name">{s.name}</div>
                <p className="svc-row-desc">{s.desc}</p>
                <div className="svc-row-tags">
                  {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <div className="svc-row-cta">
                {s.cta} <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta">
        <div className="sp-cta-inner">
          <div className="sp-cta-title">Not Sure Which Service You Need?</div>
          <p className="sp-cta-desc">
            Reach out and we&apos;ll recommend the right package for your project and budget.
            We respond within one business day with a custom quote.
          </p>
          <Link href="/book" className="btn-primary">Get a Free Quote</Link>
        </div>
      </section>
    </>
  )
}
