import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import CursorGlow from '@/components/cursor-glow'
import { siteUrl } from '@/lib/site'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteTitle = "Women's Health App Developer | HIPAA-Aware Apps | Amin Ganja"
const siteDescription =
  "Flutter developer for femtech startups. I build private pregnancy, postpartum, fertility and menopause apps that connect to hospital records."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: 'Amin Ganja',
  authors: [{ name: 'Amin Ganja', url: siteUrl }],
  creator: 'Amin Ganja',
  publisher: 'Amin Ganja',
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, address: false, telephone: false },
  keywords: [
    "women's health app developer for startups",
    'femtech app developer for startups',
    'pregnancy app developer',
    'postpartum app development',
    'fertility app developer',
    'menopause app developer',
    'HIPAA compliant app developer for startups',
    'hire Flutter developer healthcare',
    'FHIR integration for startups',
    'affordable femtech MVP',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: '/' },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName: 'Amin Ganja',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, type: 'image/png', alt: "Amin Ganja, Flutter developer for women's health apps" }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
  },
  other: {
    'theme-color': '#0a0a0a',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Amin Ganja',
      jobTitle: 'Flutter Developer for Women\'s Health Apps',
      url: `${siteUrl}/`,
      image: `${siteUrl}/amin-profile.png`,
      email: 'amin.ganja@outlook.com',
      knowsAbout: [
        'Flutter',
        'FHIR R4',
        'SMART on FHIR',
        'HIPAA Security Rule',
        "Women's health app development",
        'Femtech',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressCountry: 'IN',
      },
      description:
        "Flutter developer who builds private, HIPAA-aware iOS and Android apps for women's health startups and connects them to hospital records through FHIR.",
      sameAs: [
        'https://www.linkedin.com/in/amin-ganja',
        'https://github.com/aminganja66',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'Amin Ganja',
      description: siteDescription,
      publisher: { '@id': `${siteUrl}/#person` },
      inLanguage: 'en',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#service`,
      name: "Amin Ganja, Women's Health App Development",
      url: `${siteUrl}/`,
      image: `${siteUrl}/og-image.png`,
      description: siteDescription,
      provider: { '@id': `${siteUrl}/#person` },
      areaServed: 'Worldwide',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressCountry: 'IN',
      },
      serviceType: "Women's health mobile app development",
      slogan: "Secure women's health apps, built in weeks, not months.",
      audience: {
        '@type': 'Audience',
        audienceType: "Women's health, femtech and digital health startups",
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'amin.ganja@outlook.com',
        availableLanguage: 'English',
        hoursAvailable: 'Mo-Fr 09:00-12:00 America/New_York',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: "Women's health app services",
        itemListElement: [
          'Pregnancy and postpartum app development',
          'Fertility and menopause app development',
          'FHIR and SMART on FHIR integration',
          'HIPAA-aware security and data protection',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <CursorGlow />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
