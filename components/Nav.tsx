'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change / outside click via Escape
  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function close() { setMenuOpen(false) }

  return (
    <>
      <nav style={{ boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none' }}>
        <Link href="/" className="nav-logo" onClick={close}>
          <Image src="/logo.png" alt="ColoDrone" height={36} width={47} priority />
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          <Link href="/#services">Services</Link>
          <Link href="/#local">Why Local</Link>
          <Link href="/#coverage">Coverage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <div className="nav-right">
          <Link href="/book" className="nav-cta">Book a Flight</Link>

          {/* Hamburger — mobile only */}
          <button
            className={`nav-burger${menuOpen ? ' nav-burger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={close} aria-hidden="true" />
      )}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <Link href="/#services" className="mobile-link" onClick={close}>Services</Link>
        <Link href="/#local"    className="mobile-link" onClick={close}>Why Local</Link>
        <Link href="/#coverage" className="mobile-link" onClick={close}>Coverage</Link>
        <Link href="/blog"      className="mobile-link" onClick={close}>Blog</Link>
        <Link href="/#contact"  className="mobile-link" onClick={close}>Contact</Link>
        <Link href="/book"      className="mobile-link mobile-link--cta" onClick={close}>Book a Flight</Link>
      </div>
    </>
  )
}
