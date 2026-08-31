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
const siteTitle = 'Amin Ganja — Flutter Developer | Mobile Apps & Supabase BaaS'
const siteDescription =
  'I help founders ship mobile apps fast using Flutter and Supabase as BaaS. AI-Augmented development with 4+ years of experience. Based in Ahmedabad, India.'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  generator: 'v0.app',
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
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: `${siteUrl}/`,
    images: [{ url: '/og-image.png' }],
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
  '@type': 'Person',
  name: 'Amin Ganja',
  jobTitle: 'Flutter Developer',
  url: `${siteUrl}/`,
  email: 'amin.ganja@outlook.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/in/amin-ganja',
    'https://github.com/aminganja66',
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
