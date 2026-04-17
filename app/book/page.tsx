import type { Metadata } from 'next'
import { Suspense } from 'react'
import BookingClient from './BookingClient'

export const metadata: Metadata = {
  title: 'Book a Free Consultation — ColoDrone',
  description: 'Schedule your free 10-minute phone consultation with ColoDrone. Pick a service, choose a date and time, and we\'ll call you. No obligation.',
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#6B7280', fontSize: '0.85rem' }}>
        Loading…
      </div>
    }>
      <BookingClient />
    </Suspense>
  )
}
