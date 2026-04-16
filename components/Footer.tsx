import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <Image src="/logo.png" alt="ColoDrone" height={44} width={58} style={{ filter: 'brightness(0) invert(1)' }} />
            <div className="footer-tagline" style={{ marginTop: '0.5rem' }}>Colorado&apos;s Own Drone Photography &amp; Videography Service</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '0.8rem' }}>
              <div style={{ width: '4px', height: '16px', background: '#3B6FD4' }}></div>
              <div style={{ width: '4px', height: '16px', background: 'rgba(255,255,255,0.2)' }}></div>
              <div style={{ width: '4px', height: '16px', background: '#C8102E' }}></div>
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px', marginLeft: '6px' }}>DENVER, CO 80211</span>
            </div>
          </div>
          <div className="footer-links-group">
            <div className="footer-col">
              <div className="footer-col-title">Services</div>
              <Link href="/real-estate">Real Estate</Link>
              <Link href="/weddings">Weddings &amp; Events</Link>
              <Link href="/construction">Construction &amp; Inspection</Link>
              <Link href="/airbnb">Airbnb &amp; Rentals</Link>
              <Link href="/venues">Venues, Hotels &amp; Golf</Link>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Coverage</div>
              <Link href="/#coverage">Denver Metro</Link>
              <Link href="/#coverage">Boulder</Link>
              <Link href="/#coverage">Fort Collins</Link>
              <Link href="/#coverage">Colorado Springs</Link>
              <Link href="/#coverage">Mountain Towns</Link>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Contact</div>
              <a href="mailto:hello@colodrone.com">hello@colodrone.com</a>
              <a href="tel:3039497775">(303) 949-7775</a>
              <Link href="/#contact">Book a Flight</Link>
              <Link href="/#contact">Get a Quote</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 ColoDrone LLC · Denver, Colorado · All rights reserved</div>
          <div className="footer-cert"><div className="cert-dot"></div>FAA Part 107 Certified · Fully Insured · Colorado Licensed</div>
        </div>
      </div>
    </footer>
  )
}
