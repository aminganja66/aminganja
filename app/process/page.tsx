import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'How I Build Flutter MVPs | Amin Ganja',
  description:
    'From discovery call to app store launch: the step-by-step process I follow for every Flutter + Supabase MVP. See what I need from you and what you get.',
  alternates: { canonical: '/process' },
  openGraph: {
    title: 'How I Build Flutter MVPs | Amin Ganja',
    description:
      'From discovery call to app store launch: the step-by-step process I follow for every Flutter + Supabase MVP. See what I need from you and what you get.',
    url: '/process',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How I Build Flutter MVPs | Amin Ganja',
    description:
      'From discovery call to app store launch: the step-by-step process I follow for every Flutter + Supabase MVP. See what I need from you and what you get.',
    images: ['/og-image.png'],
  },
}

const steps = [
  {
    title: 'Discovery Call',
    body: '30 minutes. I understand your idea, target users, and MVP scope. No fluff.',
  },
  {
    title: 'Scope & Stack',
    body: 'I define what we build in V1, the Supabase schema, and the Flutter app structure. You get a clear spec.',
  },
  {
    title: 'Build Sprint',
    body: 'I ship in focused sprints. You see real screens, real data — not mockups — within days.',
  },
  {
    title: 'Review & Iterate',
    body: 'Weekly check-ins. You test on your phone. We adjust fast.',
  },
  {
    title: 'Launch',
    body: 'App Store, Play Store, or internal TestFlight. Production Supabase. You own everything.',
  },
]

export default function ProcessPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="The Process"
        title="From idea to app store — here's how we get there"
        subtitle="No long discovery phases. No back-and-forth agencies. Just fast, structured execution."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-3xl mx-auto">

          {/* Steps */}
          <div>
            {steps.map((step, i) => (
              <div key={step.title} className={`flex gap-6 py-7 ${i < steps.length - 1 ? 'border-b border-white/10' : ''}`}>
                <span className="text-3xl md:text-4xl font-black text-white/10 leading-none shrink-0 w-12 md:w-14">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What I need from you */}
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">What I actually need from you</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Roughly what you&apos;re building, who it&apos;s for, and what &quot;done&quot; looks
              like for version one. That&apos;s genuinely enough to get started — the rest gets
              figured out together as we go.
            </p>
          </div>

          {/* Callout bar */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/0 px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm md:text-base text-gray-300 font-medium tracking-wide text-center sm:text-left">
              Flutter &nbsp;·&nbsp; Supabase BaaS &nbsp;·&nbsp; BLoC + Clean Architecture &nbsp;·&nbsp; AI-Augmented &nbsp;·&nbsp; You own the code
            </p>
            <p className="text-xs md:text-sm text-gray-500 whitespace-nowrap flex-shrink-0 italic">Most MVPs: 4–8 weeks</p>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to start?</h2>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 md:py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Book the Discovery Call
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
