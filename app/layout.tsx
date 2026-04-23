import type { Metadata } from 'next'
import Script from 'next/script'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PkgAccordion from '@/components/PkgAccordion'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://colodrone.com'),
  title: {
    default: "ColoDrone — Colorado's Own Drone Photography & Videography Service",
    template: '%s | ColoDrone',
  },
  description: 'Professional drone photography and videography based in Denver, Colorado. Real estate, weddings, construction, short-term rentals, venues and golf courses. FAA Part 107 Certified.',
  keywords: 'drone photography Colorado, drone videography Denver, aerial photography Colorado, drone service Denver, ColoDrone',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: "ColoDrone — Colorado's Own Drone Photography & Videography Service",
    description: 'Professional drone photography and videography based in Denver, Colorado. Real estate, weddings, construction, short-term rentals, venues and golf courses. FAA Part 107 Certified.',
    url: 'https://colodrone.com',
    siteName: 'ColoDrone',
    images: [
      {
        url: '/images/real-estate/p1.jpg',
        width: 1200,
        height: 800,
        alt: 'Aerial drone photography of Colorado by ColoDrone',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ColoDrone — Colorado's Own Drone Photography & Videography Service",
    description: 'Professional drone photography and videography based in Denver, Colorado. FAA Part 107 Certified.',
    images: ['/images/real-estate/p1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-M8JGM373H7" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M8JGM373H7');
        `}</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://colodrone.com',
              name: 'ColoDrone',
              description: 'Professional drone photography and videography based in Denver, Colorado. Real estate, weddings, construction, short-term rentals, venues and golf courses. FAA Part 107 Certified.',
              url: 'https://colodrone.com',
              image: 'https://colodrone.com/images/real-estate/p1.jpg',
              logo: 'https://colodrone.com/logo.png',
              telephone: '+13039497775',
              email: 'hello@colodrone.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Denver',
                addressRegion: 'CO',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 39.7392,
                longitude: -104.9903,
              },
              areaServed: [
                { '@type': 'City', name: 'Denver' },
                { '@type': 'City', name: 'Boulder' },
                { '@type': 'City', name: 'Fort Collins' },
                { '@type': 'City', name: 'Colorado Springs' },
                { '@type': 'City', name: 'Vail' },
                { '@type': 'City', name: 'Breckenridge' },
                { '@type': 'City', name: 'Aspen' },
                { '@type': 'State', name: 'Colorado' },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Drone Photography & Videography Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate Drone Photography' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding & Event Drone Videography' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction & Inspection Aerial Photography' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Airbnb & Short-Term Rental Drone Photography' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Venue & Golf Course Aerial Photography' } },
                ],
              },
            }),
          }}
        />
        <div className="co-flag-strip" />
        <Nav />
        <PkgAccordion />
        {children}
        <Footer />
      </body>
    </html>
  )
}
