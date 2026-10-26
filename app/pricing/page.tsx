import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'
import BookCallLink from '@/components/book-call-link'

export const metadata: Metadata = {
  title: "Women's Health App Development Pricing | Amin Ganja",
  description:
    "Fixed-price packages for women's health apps: a pilot-ready first version, clinical data and payments, and ongoing support. See what drives the cost.",
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: "Women's Health App Development Pricing | Amin Ganja",
    description:
      "Fixed-price packages for women's health apps: a pilot-ready first version, clinical data and payments, and ongoing support. See what drives the cost.",
    url: '/pricing',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Women's Health App Development Pricing | Amin Ganja",
    description:
      "Fixed-price packages for women's health apps: a pilot-ready first version, clinical data and payments, and ongoing support. See what drives the cost.",
    images: ['/og-image.png'],
  },
}

// Fill in startingFrom (for example 'From $6,000' or 'From $1,500 / month') to show a price on each card.
const packages = [
  {
    name: 'Pilot App',
    tagline: 'A secure iOS and Android app, ready for your first patients.',
    badge: 'Most popular',
    startingFrom: '',
    features: [
      'Sign-up and secure login',
      'Your core patient features',
      'Encrypted storage of patient data',
      'Privacy checks before release',
      'App Store and Google Play release',
      'Code, docs and a walkthrough',
    ],
  },
  {
    name: 'Connected App',
    tagline: 'Everything in Pilot App, plus hospital records and payments.',
    badge: 'Clinical data',
    startingFrom: '',
    features: [
      'Everything in Pilot App',
      'Hospital record access through FHIR',
      'Patient and care-team roles',
      'Stripe or Razorpay payments',
      'Push notifications without patient details',
    ],
  },
  {
    name: 'Ongoing Support',
    tagline: 'Keep improving the app after launch.',
    badge: 'Support',
    startingFrom: '',
    features: [
      'New features',
      'Bug fixes',
      'Security updates',
      'Help with your next release',
    ],
  },
]

const costDrivers = [
  {
    title: 'How many screens and user roles',
    body: 'A patient-only app with a handful of screens costs far less than one with patient, clinician and admin views. Each role needs its own screens and its own access rules on the server.',
  },
  {
    title: 'Hospital or clinic records',
    body: 'Connecting to an EHR through FHIR adds sign-in with SMART on FHIR, mapping clinical data into the app, and testing in the vendor sandbox. It is often the single largest item in a project.',
  },
  {
    title: 'Whether HIPAA applies',
    body: 'If a clinic or health plan is involved, the backend has to run on services that sign a BAA, with audit logs and stricter access control. That adds setup work and usually a higher hosting plan.',
  },
  {
    title: 'Payments and subscriptions',
    body: 'Charging for programs or consultations adds Stripe or Razorpay, receipts, and the app store rules for in-app purchases.',
  },
  {
    title: 'Content you can edit yourself',
    body: 'Week-by-week pregnancy content or a menopause program is cheaper to run long term when your team can edit it without a new release. Building that editor is extra work up front.',
  },
]

const faqs = [
  {
    q: 'How much does it cost to build a women\'s health app?',
    a: 'It depends mostly on the drivers above: roles, hospital records, HIPAA and payments. A focused pilot with one user role costs a fraction of a connected clinical app. After a 20-minute call you get a written scope and one fixed price within 48 hours.',
  },
  {
    q: 'Is the price really fixed?',
    a: 'Yes. After our call you get a written scope and one price, so there are no surprise bills. If you want to add something halfway through, I quote it separately before doing it.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most pilots go live in weeks, not months. Your timeline comes with your scope.',
  },
  {
    q: "What if my project doesn't fit one of these?",
    a: "Many don't. Tell me what you're building and we'll agree the right scope together.",
  },
  {
    q: 'Do I need to understand the technical side?',
    a: 'No. I explain each choice in terms of your patients and your launch date.',
  },
  {
    q: 'Who owns the code?',
    a: 'You do. The full source code, the documentation and the app store accounts are yours from the handover.',
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
        title="Women's health app development packages"
        subtitle="Three fixed-price packages. After our call you get a written scope and one price within 48 hours."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="sr-only">Packages</h2>

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => {
              const featured = pkg.badge === 'Most popular'
              return (
                <div
                  key={pkg.name}
                  className={`rounded-2xl border p-6 md:p-8 flex flex-col ${
                    featured
                      ? 'border-white/30 bg-gradient-to-br from-white/[0.06] to-white/0'
                      : 'border-white/10 bg-white/[0.02]'
                  }`}
                >
                  <span className="inline-block w-fit px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase bg-white/10 text-gray-300 mb-4">
                    {pkg.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  {pkg.startingFrom && <p className="text-2xl font-bold text-white mb-2">{pkg.startingFrom}</p>}
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

                  <BookCallLink
                    className={`mt-8 block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-300 ${
                      featured
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Book a 20-min call
                  </BookCallLink>
                </div>
              )
            })}
          </div>

          {/* Cost drivers */}
          <section className="max-w-3xl mx-auto mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What affects the cost of a women&apos;s health app</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
              Two apps that look alike in a pitch deck can be very different to build. These are the five things
              that move the price most, so you can decide what belongs in your first version and what can wait.
            </p>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {costDrivers.map((d) => (
                <div key={d.title} className="py-6">
                  <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{d.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm md:text-base text-gray-400 leading-relaxed">
              Most teams I talk to start smaller than they planned. A pilot with one role and no hospital
              connection gets real patients using the app sooner, and what you learn from them tells you which
              features are worth paying for next. See{' '}
              <Link href="/services" className="text-white underline underline-offset-4">the kinds of apps I build</Link>{' '}
              or{' '}
              <Link href="/process" className="text-white underline underline-offset-4">how a project runs</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section className="max-w-3xl mx-auto mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Common questions about pricing</h2>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <h3 className="text-base font-bold text-white mb-1.5">{f.q}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mt-20">
            <p className="text-gray-400 text-base mb-4">Not sure which package fits?</p>
            <BookCallLink
              className="inline-block px-8 py-3 md:py-4 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              Book a 20-min call
            </BookCallLink>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
