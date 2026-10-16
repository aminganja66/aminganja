import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Flutter MVP Development Pricing | Amin Ganja',
  description:
    'Simple, transparent packages for Flutter + Supabase MVPs, from a first launch to ongoing product support. See what is included and get a quote.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Flutter MVP Development Pricing | Amin Ganja',
    description:
      'Simple, transparent packages for Flutter + Supabase MVPs, from a first launch to ongoing product support. See what is included and get a quote.',
    url: '/pricing',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flutter MVP Development Pricing | Amin Ganja',
    description:
      'Simple, transparent packages for Flutter + Supabase MVPs, from a first launch to ongoing product support. See what is included and get a quote.',
    images: ['/og-image.png'],
  },
}

const packages = [
  {
    name: 'MVP Launch',
    tagline: 'Full-stack Flutter + Supabase mobile app — from zero to App Store.',
    badge: 'Most Popular',
    features: [
      'User Authentication',
      'Core Product Features',
      'Admin Dashboard',
      'Database & Backend',
      'Mobile App or Web App',
      'Deployment',
      'Analytics Setup',
    ],
  },
  {
    name: 'Growth',
    tagline: 'Scale your MVP with AI features, payments, and a more advanced backend.',
    badge: 'Accelerate',
    features: [
      'Everything in MVP Launch',
      'Payment Integration',
      'Notifications',
      'Advanced User Roles',
      'AI Features',
      'Performance Optimization',
    ],
  },
  {
    name: 'Partnership',
    tagline: 'Ongoing development and support as your startup grows.',
    badge: 'Support',
    features: [
      'Feature Development',
      'Bug Fixes',
      'Product Improvements',
      'Technical Support',
      'Scaling Assistance',
    ],
  },
]

const faqs = [
  {
    q: 'What\'s included in every package?',
    a: 'Full technical support and a quality guarantee, no matter which one you pick.',
  },
  {
    q: 'How long does it usually take?',
    a: 'Most MVPs go live in 4–8 weeks, depending on scope.',
  },
  {
    q: 'What if my project doesn\'t fit neatly into one of these?',
    a: 'Most don\'t, honestly. Tell me what you\'re building and we\'ll figure out the right scope together.',
  },
  {
    q: 'Do I need to know Flutter or Supabase to work with you?',
    a: 'No. That\'s most of who I work with — you just need to know what you want the app to do.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent packages"
        subtitle="Pick a lane. Every package includes full technical support and a quality guarantee."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-6xl mx-auto">

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl border p-7 md:p-8 flex flex-col ${
                  pkg.badge === 'Most Popular'
                    ? 'border-white/30 bg-gradient-to-br from-white/[0.06] to-white/0'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <span className="inline-block w-fit px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase bg-white/10 text-gray-300 mb-4">
                  {pkg.badge}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{pkg.tagline}</p>

                <div className="space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-300 leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`mt-8 block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-300 ${
                    pkg.badge === 'Most Popular'
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">Questions founders usually ask</h2>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <h3 className="text-base font-bold text-white mb-1.5">{f.q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <p className="text-gray-400 text-base mb-4">Not sure which package fits?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 md:py-4 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              Let&apos;s Talk It Through
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
