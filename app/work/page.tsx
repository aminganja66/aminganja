import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: "App Case Studies | Amin Ganja, Flutter Developer",
  description:
    "Real mobile apps I've built and shipped with Flutter, and what I learned from each. I now focus on women's health apps for startups and clinical teams.",
  alternates: { canonical: '/work' },
  openGraph: {
    title: "App Case Studies | Amin Ganja, Flutter Developer",
    description:
      "Real mobile apps I've built and shipped with Flutter, and what I learned from each. I now focus on women's health apps for startups and clinical teams.",
    url: '/work',
    images: [{ url: '/my_society_ledger.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "App Case Studies | Amin Ganja, Flutter Developer",
    description:
      "Real mobile apps I've built and shipped with Flutter, and what I learned from each. I now focus on women's health apps for startups and clinical teams.",
    images: ['/my_society_ledger.png'],
  },
}

const caseStudies = [
  {
    slug: 'society-ledger',
    thumbnail: '/my_society_ledger.png',
    tag: 'MVP in 30 Days',
    title: 'SocietyLedger: a society management app',
    description:
      'A cross-platform Flutter app that digitizes maintenance dues, payment tracking, and expense reporting for residential societies.',
    tech: ['Flutter', 'Supabase', 'Cloudinary', 'Twilio'],
  },
]

export default function WorkPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="My Work"
        title="Apps I've shipped"
        subtitle="Real projects used by real people. More case studies are on the way."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <h2 className="sr-only">Case studies</h2>
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-[#0d0d0d] border-b border-white/10">
                <Image
                  src={cs.thumbnail}
                  alt={cs.title}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-contain group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-black/60 border border-white/15 text-white backdrop-blur-sm">
                  {cs.tag}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors duration-300">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{cs.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cs.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-md border border-white/10 bg-white/[0.03] text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 flex items-center gap-1.5 text-sm text-white font-medium">
                  Read case study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}

          <div className="flex flex-col items-center justify-center text-center gap-3 rounded-2xl border border-dashed border-white/15 p-10 min-h-[280px]">
            <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-500">
              <Plus className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[16rem]">
              More case studies are on the way.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want yours next?</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-6">
            Tell me what you&apos;re building and I&apos;ll tell you honestly if it&apos;s a fit.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 md:py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Book a 20-min call
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
