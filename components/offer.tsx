'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const packages = [
  {
    name: 'Pilot App',
    tagline: 'A secure iOS and Android app, ready for your first patients.',
    description: 'For teams with a pilot or launch date.',
    badge: 'MOST POPULAR',
    features: [
      'Sign-up and secure login',
      'Your core patient features',
      'Encrypted storage of patient data',
      'Privacy checks before release',
      'App Store and Google Play release',
      'Code, docs and a walkthrough',
    ],
  },
  {
    name: 'Connected App',
    tagline: 'Everything in Pilot App, plus hospital records and payments.',
    description: 'For apps that need clinical data.',
    badge: 'CLINICAL DATA',
    features: [
      'Everything in Pilot App',
      'Hospital record access through FHIR',
      'Patient and care-team roles',
      'Stripe or Razorpay payments',
      'Push notifications without patient details',
    ],
  },
  {
    name: 'Ongoing Support',
    tagline: 'Keep improving the app after launch.',
    description: 'For apps that are already live.',
    badge: 'SUPPORT',
    features: [
      'New features',
      'Bug fixes',
      'Security updates',
      'Help with your next release',
    ],
  },
]

export default function Offer() {
  const [active, setActive] = useState(0)
  const pkg = packages[active]

  return (
    <section
      id="offer"
      className="relative isolate w-full min-h-svh flex flex-col items-center justify-center bg-background px-4 md:px-8 py-24 overflow-hidden"
    >
      {/* Spotlight glow behind the panel */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <div className="w-[40rem] h-[40rem] rounded-full bg-white/[0.05] blur-[130px]" />
      </div>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 100%)',
          }}
        />
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
        <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">Pricing</span>
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
        Fixed-price packages
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.16 }}
        className="mt-4 text-base md:text-lg text-gray-400 text-center max-w-xl leading-relaxed text-balance"
      >
        After our call you get a written scope and one price within 48 hours.
      </motion.p>

      {/* Segmented tab switcher */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.24 }}
        className="mt-10 md:mt-12 inline-flex flex-wrap justify-center items-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/[0.03]"
      >
        {packages.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setActive(i)}
            className={`relative px-5 md:px-7 py-2.5 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${
              active === i ? 'text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            {active === i && (
              <motion.div
                layoutId="pricing-pill"
                className="absolute inset-0 bg-white rounded-full -z-10"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            {p.name}
          </button>
        ))}
      </motion.div>

      {/* Spotlight panel */}
      <div className="mt-10 md:mt-12 w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/0 p-8 md:p-12"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-gray-300">
              {pkg.badge}
            </span>

            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white">{pkg.name}</h3>
            <p className="mt-2 text-sm md:text-base text-gray-300 font-medium">{pkg.tagline}</p>
            <p className="mt-1 text-sm md:text-base text-gray-500">{pkg.description}</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {pkg.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm md:text-base text-gray-300 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 block w-full text-center px-6 py-3 md:py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Book a 20-min call
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mt-10 md:mt-12 text-center"
      >
        <p className="text-gray-400 text-sm md:text-base">Not sure which package fits?</p>
        <a
          href="#contact"
          className="mt-4 inline-block px-8 py-3 md:py-4 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300"
        >
          Book a 20-min call
        </a>
        <div className="mt-5">
          <a href="/pricing" className="text-gray-500 text-sm hover:text-white transition-colors duration-300">
            See the full pricing page →
          </a>
        </div>
      </motion.div>
    </section>
  )
}
