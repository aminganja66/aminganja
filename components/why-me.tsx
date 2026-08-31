'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const reasons = [
  {
    title: 'Founder-Focused Development',
    description:
      'I understand startups need speed, validation, and flexibility. My goal is to help you launch and learn from real users quickly.',
  },
  {
    title: 'End-to-End MVP Delivery',
    description:
      'From planning and architecture to development and deployment, I handle the complete process so you focus on growing.',
  },
  {
    title: 'Fast Iteration',
    description:
      'Startups evolve quickly. I build with flexible architecture that lets you add, modify, or improve features without rebuilding.',
  },
  {
    title: 'Modern Technology Stack',
    description:
      'Scalable, maintainable, and cost-effective solutions using modern tools built for real-world production usage.',
  },
  {
    title: 'Clear Communication',
    description:
      "You'll always know what's being built, what stage it's in, and what comes next. No technical jargon.",
  },
  {
    title: 'Long-Term Partnership',
    description:
      "I don't disappear after launch. I continue supporting, improving, and scaling your product as you grow.",
  },
]

export default function WhyMe() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="why-me"
      className="relative isolate w-full min-h-svh flex flex-col items-center justify-center bg-background px-4 md:px-8 py-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[24rem] h-[24rem] rounded-full bg-white/[0.04] blur-[110px] -bottom-24 -left-24" />
        <div className="absolute w-[20rem] h-[20rem] rounded-full bg-white/[0.03] blur-[110px] top-0 right-0" />
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
        <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">Why Work With Me</span>
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
        What Makes Me Different
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.16 }}
        className="mt-4 text-base md:text-lg text-gray-400 text-center max-w-xl leading-relaxed text-balance"
      >
        I&apos;m not just a developer — I&apos;m a partner invested in your startup&apos;s success.
      </motion.p>

      {/* Accordion list */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.24 }}
        className="w-full max-w-4xl mt-14 md:mt-16 border-t border-white/10"
      >
        {reasons.map((reason, i) => {
          const isOpen = active === i
          return (
            <div key={reason.title} className="border-b border-white/10">
              <button
                onClick={() => setActive(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className={`text-sm font-mono transition-colors duration-300 ${isOpen ? 'text-emerald-400' : 'text-gray-600'}`}>
                    0{i + 1}
                  </span>
                  <h3
                    className={`text-lg md:text-2xl font-bold transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`}
                  >
                    {reason.title}
                  </h3>
                </div>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'rotate-45 border-white/40 bg-white/10' : 'border-white/15'
                  }`}
                >
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 md:pb-7 pl-[2.75rem] md:pl-[3.25rem] pr-12 text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mt-14 md:mt-16 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to build something great?</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm md:text-base">
          Let&apos;s discuss your vision and see if we&apos;re a fit for your next MVP.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 md:px-10 py-3 md:py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Let&apos;s Talk
        </a>
      </motion.div>
    </section>
  )
}
