import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PkgAccordion from '@/components/PkgAccordion'
import './globals.css'

export const metadata: Metadata = {
  title: "ColoDrone — Colorado's Own Drone Photography & Videography Service",
  description: 'Professional drone photography and videography based in Denver, Colorado. Real estate, weddings, construction, short-term rentals, venues and golf courses. FAA Part 107 Certified.',
  keywords: 'drone photography Colorado, drone videography Denver, aerial photography Colorado, drone service Denver, ColoDrone',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="co-flag-strip" />
        <Nav />
        <PkgAccordion />
        {children}
        <Footer />
      </body>
    </html>
  )
}
