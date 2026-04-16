'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{ boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none' }}>
      <Link href="/" className="nav-logo">
        <div className="nav-logo-text"><span>Colo</span>Drone</div>
        <div className="logo-badge">Denver, CO</div>
      </Link>
      <div className="nav-links">
        <Link href="/#services">Services</Link>
        <Link href="/#local">Why Local</Link>
        <Link href="/#coverage">Coverage</Link>
        <Link href="/#contact">Contact</Link>
      </div>
      <Link href="/#contact" className="nav-cta">Book a Flight</Link>
    </nav>
  )
}
