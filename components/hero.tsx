'use client'

import { motion } from 'framer-motion'
import { BOOKING_URL, EXPERIENCE } from '@/lib/site'

export default function Hero() {
  const skills = [
    'Flutter',
    'Supabase',
    'FHIR',
    'HIPAA-aware',
    'Stripe / Razorpay',
    `${EXPERIENCE} in production`,
  ]

  // Duplicate for seamless loop
  const repeatedSkills = [...skills, ...skills]

  return (
    <section className="relative isolate w-full min-h-svh flex flex-col items-center justify-center px-4 md:px-8 bg-background overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
          }}
        />

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute w-[28rem] h-[28rem] rounded-full bg-white/10 blur-[100px]"
          style={{ top: '10%', left: '8%' }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[24rem] h-[24rem] rounded-full bg-white/[0.08] blur-[100px]"
          style={{ bottom: '5%', right: '10%' }}
          animate={{
            x: [0, -30, 20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 0.9, 1.08, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute w-[18rem] h-[18rem] rounded-full bg-white/[0.06] blur-[90px]"
          style={{ top: '45%', left: '50%', translateX: '-50%' }}
          animate={{
            x: [0, 25, -25, 0],
            y: [0, -15, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background pointer-events-none" />
      </div>

      <div className="max-w-6xl w-full flex flex-col items-center gap-5 md:gap-7 [@media(max-height:760px)]:gap-4 pt-28 pb-24 [@media(max-height:760px)]:pb-12">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glassmorphism inline-flex items-center gap-2 rounded-full px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs md:text-sm text-gray-300 font-medium">
            Available for new projects · Replies within 24h
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="text-[clamp(2.25rem,min(6.5vw,9vh),4.5rem)] font-bold text-white text-center text-balance leading-[1.1]"
        >
          Secure women&apos;s health apps,{' '}
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            built in weeks, not months.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.22 }}
          className="text-center text-gray-400 text-lg md:text-xl max-w-2xl mx-auto text-balance"
        >
          I&apos;m Amin Ganja, a women&apos;s health app developer. I build private Flutter apps for pregnancy, postpartum, fertility and menopause startups, and connect them to hospital records.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.34 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={BOOKING_URL}
            className="group relative px-8 md:px-10 py-3 md:py-4 bg-white text-black rounded-full font-semibold text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-white/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a 20-min call
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#my-work"
            className="px-8 md:px-10 py-3 md:py-4 glassmorphism text-white rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            See my work
          </a>
        </motion.div>

        {/* Auto-scrolling Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-4xl pt-4 md:pt-6 [@media(max-height:760px)]:pt-2"
        >
          <div className="relative">
            {/* Left mask */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
            {/* Right mask */}
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10"></div>

            {/* Scrolling container */}
            <div className="overflow-hidden">
              <div className="flex gap-6 md:gap-8 scroll-animate">
                {repeatedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 md:gap-6 whitespace-nowrap"
                  >
                    <span className="text-base md:text-lg text-gray-300 font-medium">
                      {skill}
                    </span>
                    {index < repeatedSkills.length - 1 && (
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 [@media(max-height:760px)]:hidden"
      >
        <span className="text-[11px] uppercase tracking-widest text-gray-500">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1.5"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-gray-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
