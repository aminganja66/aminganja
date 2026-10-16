import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'About Amin Ganja | Flutter Developer, Ahmedabad',
  description:
    'Meet Amin Ganja, a Flutter + Supabase developer in Ahmedabad with 4+ years of experience who helps startup founders go from idea to a working app.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Amin Ganja | Flutter Developer, Ahmedabad',
    description:
      'Meet Amin Ganja, a Flutter + Supabase developer in Ahmedabad with 4+ years of experience who helps startup founders go from idea to a working app.',
    url: '/about',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Amin Ganja | Flutter Developer, Ahmedabad',
    description:
      'Meet Amin Ganja, a Flutter + Supabase developer in Ahmedabad with 4+ years of experience who helps startup founders go from idea to a working app.',
    images: ['/og-image.png'],
  },
}

const facts = [
  { label: 'Location', value: 'Ahmedabad, India' },
  { label: 'Experience', value: '4+ years' },
  { label: 'Focus', value: 'Flutter + Supabase' },
  { label: 'Availability', value: 'Open to remote work' },
]

const highlights = [
  {
    title: '4+ years, shipping real products',
    body: "Not tutorials, not side projects gathering dust — real apps that real people use, for real founders trying to get their idea off the ground.",
  },
  {
    title: 'Backend included',
    body: "You don't need a separate hire for auth, database, and storage. That's part of the build, not an add-on.",
  },
  {
    title: 'AI-augmented, not AI-rushed',
    body: "I use AI to move faster, but every app still gets solid structure and clean code underneath. Speed without cutting corners.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="About Me"
        title="A bit more about me"
        subtitle="The short version lives on the homepage. Here's the fuller picture — how I think about this work, and what to expect if we team up."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Photo + intro */}
          <section className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-center">
            <div className="mx-auto md:mx-0 w-full max-w-[220px]">
              <div className="rounded-3xl p-[1.5px] bg-gradient-to-br from-white/25 via-white/5 to-transparent">
                <div className="relative aspect-[3/4] rounded-[calc(1.5rem-1.5px)] overflow-hidden bg-background">
                  <Image
                    src="/amin-nobg.png"
                    alt="Amin Ganja - Flutter Developer"
                    fill
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I help startup founders go from idea to a working app — without hiring a full
              development team. Most of the founders I work with know exactly what they want to
              build; they just need someone who can actually build it, end to end, without a
              three-week kickoff process first.
            </p>
          </section>

          {/* Quick facts */}
          <section className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl border border-white/10 divide-x divide-y sm:divide-y-0 divide-white/10 overflow-hidden">
            {facts.map((f) => (
              <div key={f.label} className="text-center px-3 py-6">
                <p className="text-sm md:text-base font-bold text-white">{f.value}</p>
                <p className="text-[11px] text-gray-500 font-medium mt-1">{f.label}</p>
              </div>
            ))}
          </section>

          {/* What I actually do */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-8">What I actually do</h2>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {highlights.map((h) => (
                <div key={h.title} className="py-6">
                  <h3 className="text-base font-bold text-white mb-1.5">{h.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">{h.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Who this is for */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Who I work best with</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
              This tends to work best if you already have a rough idea of what you're building and
              want it live fast, not a long back-and-forth about process. If that's you, we'll
              probably get along fine.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center pt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Got an idea worth building?</h2>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 md:py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Talk
            </Link>
          </section>

        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
