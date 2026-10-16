'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const caseStudies = [
  {
    slug: 'society-ledger',
    thumbnail: '/my_society_ledger.png',
    tag: 'MVP in 30 Days',
    title: 'SocietyLedger — Smart Society Management App',
    description:
      'A cross-platform Flutter app that digitizes maintenance dues, payment tracking, and expense reporting for residential societies.',
    tech: ['Flutter', 'Supabase', 'Cloudinary', 'Twilio'],
  },
]

export default function MyWork() {
  return (
    <section
      id="my-work"
      className="relative isolate w-full min-h-svh flex flex-col items-center justify-center bg-background px-4 md:px-8 py-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[28rem] h-[28rem] rounded-full bg-white/[0.04] blur-[120px] top-0 left-1/2 -translate-x-1/2" />
      </div>

      {/* Eyebrow */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glassmorphism inline-flex items-center gap-2 rounded-full px-4 py-1.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">My Work</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
        className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center text-balance"
      >
        Recent Case Studies
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.16 }}
        className="mt-4 text-base md:text-lg text-gray-400 text-center max-w-xl leading-relaxed text-balance"
      >
        Real products shipped for real founders — not portfolio mockups.
      </motion.p>

      {/* Project grid */}
      <div className="w-full max-w-6xl mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.slug}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
          >
            <Link
              href={`/work/${cs.slug}`}
              className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300"
            >
              {/* Thumbnail */}
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

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors duration-300">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{cs.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cs.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md border border-white/10 bg-white/[0.03] text-gray-500"
                    >
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
          </motion.div>
        ))}

        {/* Coming soon placeholder — keeps the grid honest about what's next */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: caseStudies.length * 0.08 }}
          className="flex flex-col items-center justify-center text-center gap-3 rounded-2xl border border-dashed border-white/15 p-10 min-h-[280px]"
        >
          <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-500">
            <Plus className="w-5 h-5" />
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-[16rem]">
            More case studies are shipping soon — check back for the next build.
          </p>
        </motion.div>
      </div>

      <a
        href="/work"
        className="group relative z-10 mt-10 inline-flex items-center gap-1.5 text-gray-500 text-sm font-medium hover:text-white transition-colors duration-300"
      >
        See the full portfolio
        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </section>
  )
}
