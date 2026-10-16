import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import CursorGlow from '@/components/cursor-glow'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://amin-ganja.vercel.app'
const siteTitle = 'Amin Ganja | Flutter Developer for Startup MVPs'
const siteDescription =
  'I help founders ship mobile apps fast using Flutter and Supabase as BaaS. AI-Augmented development with 4+ years of experience. Based in Ahmedabad, India.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: 'Amin Ganja' }],
  keywords: [
    'Flutter developer',
    'Supabase BaaS',
    'mobile app development',
    'MVP development',
    'Flutter Supabase',
    'startup app development',
    'Flutter developer India',
    'AI-augmented development',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName: 'Amin Ganja',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Amin Ganja, Flutter Developer' }],
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
      jobTitle: 'Flutter Developer',
      url: `${siteUrl}/`,
      image: `${siteUrl}/amin-profile.png`,
      email: 'amin.ganja@outlook.com',
      knowsAbout: ['Flutter', 'Supabase', 'Mobile app development', 'MVP development'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressCountry: 'IN',
      },
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
      name: 'Amin Ganja, Flutter + Supabase MVP Development',
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
      serviceType: 'Flutter mobile app development',
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
