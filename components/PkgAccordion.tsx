'use client'
import { useEffect } from 'react'

export default function PkgAccordion() {
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 541px)')
    const sync = (list: MediaQueryList | MediaQueryListEvent) => {
      document.querySelectorAll<HTMLDetailsElement>('details.pkg-card').forEach(d => {
        if (list.matches) d.setAttribute('open', '')
        else d.removeAttribute('open')
      })
    }
    sync(mq)
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])
  return null
}
