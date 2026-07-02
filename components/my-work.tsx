'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    slug: 'society-ledger',
    thumbnail: '/my_society_ledger.png',
    badge: 'MVP in 30 Days',
    title: 'SocietyLedger — Smart Society Management App',
    description:
      'Built a cross-platform Flutter app that digitizes maintenance dues, payment tracking, and expense reporting for residential societies — shipped from zero to production in 30 days.',
    tech: ['Flutter', 'Supabase', 'Cloudinary', 'Twilio'],
  },
]

export default function MyWork() {
  return (
    <section id="my-work" className="w-full px-4 py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <span className="text-xs text-white font-semibold">02</span>
            </div>
            <p className="text-sm md:text-base text-gray-400 font-semibold uppercase tracking-wide">
              My Work
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Recent Case Studies</h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group block rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-white/25 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="w-full overflow-hidden bg-white/5">
                <Image
                  src={cs.thumbnail}
                  alt={cs.title}
                  width={1536}
                  height={1024}
                  className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-1 text-xs bg-accent/20 border border-accent/40 text-accent rounded-lg font-semibold backdrop-blur-sm">
                  {cs.badge}
                </span>
              </div>

              {/* Text content */}
              <div className="p-6 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {cs.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs bg-white/10 border border-white/15 text-gray-400 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug group-hover:text-accent transition-colors duration-200">
                  {cs.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{cs.description}</p>
                <div className="flex items-center gap-1 text-sm text-accent font-medium pt-1">
                  Read case study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
