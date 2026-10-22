'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const pains = [
  {
    title: 'Our users trust us with their most private data.',
    body: 'Pregnancy, fertility and reproductive health data is deeply personal. One slip in a log file, a push notification or an analytics tool can cost you that trust, and your pilot.',
  },
  {
    title: 'We need clinical data in the app.',
    body: 'Blood pressure readings, lab results, care-team notes. Getting hospital systems to share them (FHIR, permissions, test-environment approvals) can eat weeks before a single screen works.',
  },
  {
    title: "Our pilot starts soon and the app isn't ready.",
    body: 'Agencies quote months. You have weeks.',
  },
]

export default function PainPoints() {
  return (
    <section
      id="sound-familiar"
      className="relative isolate w-full flex flex-col items-center bg-background px-4 md:px-8 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[24rem] h-[24rem] rounded-full bg-white/[0.04] blur-[110px] top-0 left-1/2 -translate-x-1/2" />
      </div>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center text-balance"
      >
        Sound familiar?
      </motion.h2>

      <div className="mt-12 md:mt-16 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {pains.map((pain, i) => (
          <motion.div
            key={pain.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 * i }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/0 p-7 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white text-balance">{pain.title}</h3>
            <p className="mt-3 text-sm md:text-base text-gray-400 leading-relaxed">{pain.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
