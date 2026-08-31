'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: '30 minutes. I understand your idea, target users, and MVP scope. No fluff.',
  },
  {
    num: '02',
    title: 'Scope & Stack',
    desc: 'I define what we build in V1, the Supabase schema, and the Flutter app structure.',
  },
  {
    num: '03',
    title: 'Build Sprint',
    desc: 'I ship in focused sprints. You see real screens, real data — within days.',
  },
  {
    num: '04',
    title: 'Review & Iterate',
    desc: 'Weekly check-ins. You test on your phone. We adjust fast.',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'App Store, Play Store, or TestFlight. Production Supabase. You own everything.',
  },
]

export default function HowIWork() {
  // Tall wrapper so the section can pin on desktop while this scrolls past
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <>
      <div ref={wrapperRef} id="how-i-work" className="relative lg:h-[300vh]">
        <section className="relative isolate lg:sticky lg:top-0 min-h-svh lg:h-svh w-full flex flex-col items-center justify-center bg-background px-4 md:px-8 py-24 overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute w-[24rem] h-[24rem] rounded-full bg-white/[0.04] blur-[110px] top-0 left-1/2 -translate-x-1/2" />
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
            <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">The Process</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
            className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center text-balance max-w-4xl"
          >
            From idea to app store — here&apos;s how we get there.
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.16 }}
            className="mt-4 text-base md:text-lg text-gray-400 text-center max-w-xl leading-relaxed text-balance"
          >
            No long discovery phases. No back-and-forth agencies. Just fast, structured execution.
          </motion.p>

          {/* Desktop: horizontal scroll-linked rail — fills as this section stays pinned */}
          <div className="hidden lg:block w-full max-w-7xl mt-20">
            <div className="relative">
              <div className="absolute left-0 right-0 top-6 h-0.5 bg-white/10" />
              <motion.div
                style={{ width: progressWidth }}
                className="absolute left-0 top-6 h-0.5 bg-gradient-to-r from-emerald-400 via-white to-white origin-left"
              />
              <div className="relative grid grid-cols-5 gap-4">
                {steps.map((step) => (
                  <div key={step.num} className="flex flex-col items-center text-center px-2">
                    <div className="w-12 h-12 rounded-full border border-white/20 bg-background flex items-center justify-center z-10 mb-5">
                      <span className="text-sm font-bold text-white/70 font-mono">{step.num}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white mb-2 leading-tight">{step.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/tablet: vertical scroll-linked rail (no pinning — normal scroll) */}
          <div className="lg:hidden w-full max-w-md mt-16">
            <div className="relative pl-5">
              <div className="absolute left-[23px] top-2 bottom-2 w-0.5 bg-white/10" />
              <motion.div
                style={{ height: progressHeight }}
                className="absolute left-[23px] top-2 w-0.5 bg-gradient-to-b from-emerald-400 via-white to-white origin-top"
              />
              {steps.map((step, idx) => (
                <div key={step.num} className="relative flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 bg-background flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-white/70 font-mono">{step.num}</span>
                  </div>
                  <div className={`flex-1 ${idx < steps.length - 1 ? 'pb-10' : ''}`}>
                    <h3 className="text-base font-bold text-white mb-1.5 mt-2 leading-tight">{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Full-width callout bar — outside the pinned view */}
      <div className="w-full bg-background px-4 md:px-8 py-12 md:py-16 flex justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-7xl rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/0 px-8 md:px-12 py-6 md:py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm md:text-base text-gray-300 font-medium tracking-wide text-center sm:text-left">
            Flutter &nbsp;·&nbsp; Supabase BaaS &nbsp;·&nbsp; BLoC + Clean Architecture &nbsp;·&nbsp; AI-Augmented &nbsp;·&nbsp; You own the code
          </p>
          <p className="text-xs md:text-sm text-gray-500 whitespace-nowrap flex-shrink-0 italic">Most MVPs: 4–8 weeks</p>
        </motion.div>
      </div>
    </>
  )
}
