'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

// The title and subtitle only slide, so they are painted at once instead of waiting for JavaScript to fade them in.
const slideUp = {
  hidden: { y: 24 },
  show: { y: 0 },
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: ReactNode
  subtitle: string
}) {
  return (
    <section className="relative isolate w-full bg-background px-4 md:px-8 pt-32 md:pt-40 pb-14 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[26rem] h-[26rem] rounded-full bg-white/[0.04] blur-[120px] -top-24 left-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glassmorphism inline-flex items-center gap-2 rounded-full px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">{eyebrow}</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={slideUp}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
          className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-white text-balance"
        >
          {title}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={slideUp}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.16 }}
          className="mt-4 text-base md:text-lg text-gray-400 leading-relaxed text-balance max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
