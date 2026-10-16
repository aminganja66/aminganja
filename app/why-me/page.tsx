import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Why Hire a Solo Flutter Developer | Amin Ganja',
  description:
    'What makes working with a solo Flutter + Supabase developer different from an agency, and who this is a good fit for. Clear, fast and founder-focused.',
  alternates: { canonical: '/why-me' },
  openGraph: {
    title: 'Why Hire a Solo Flutter Developer | Amin Ganja',
    description:
      'What makes working with a solo Flutter + Supabase developer different from an agency, and who this is a good fit for. Clear, fast and founder-focused.',
    url: '/why-me',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Hire a Solo Flutter Developer | Amin Ganja',
    description:
      'What makes working with a solo Flutter + Supabase developer different from an agency, and who this is a good fit for. Clear, fast and founder-focused.',
    images: ['/og-image.png'],
  },
}

const reasons = [
  {
    title: 'Founder-Focused Development',
    body: 'Startups need speed, validation, and flexibility. My goal is to help you launch and learn from real users quickly.',
  },
  {
    title: 'End-to-End MVP Delivery',
    body: 'From planning and architecture to development and deployment, I handle the complete process so you can focus on growing.',
  },
  {
    title: 'Fast Iteration',
    body: 'Startups evolve quickly. I build with flexible architecture that lets you add, modify, or improve features without rebuilding.',
  },
  {
    title: 'Modern Technology Stack',
    body: 'Scalable, maintainable, cost-effective — using tools built for real production usage, not just what\'s trendy.',
  },
  {
    title: 'Clear Communication',
    body: 'You\'ll always know what\'s being built, what stage it\'s in, and what comes next. No technical jargon.',
  },
  {
    title: 'Long-Term Partnership',
    body: 'I don\'t disappear after launch. I keep supporting, improving, and scaling your product as you grow.',
  },
]

export default function WhyMePage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="Why Work With Me"
        title="What makes me different"
        subtitle="I'm not just a developer — I'm a partner invested in your startup's success."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-4xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {reasons.map((r) => (
              <div key={r.title}>
                <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{r.title}</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>

          {/* Who this is for */}
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Who this is actually for</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
              This tends to work best for founders who want to move fast, are comfortable making
              decisions together as we go, and want one person who understands both the code and
              the product — not a ticket queue.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to build something great?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Let&apos;s discuss your vision and see if we&apos;re a fit for your next MVP.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
