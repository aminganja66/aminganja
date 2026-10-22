'use client'

import ContactForm from '@/components/contact-form'
import { motion } from 'framer-motion'
import { BOOKING_URL } from '@/lib/site'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const links = [
  {
    label: 'Email',
    value: 'amin.ganja@outlook.com',
    href: 'mailto:amin.ganja@outlook.com',
  },
  {
    label: 'LinkedIn',
    value: 'in/amin-ganja',
    href: 'https://www.linkedin.com/in/amin-ganja',
  },
  {
    label: 'GitHub',
    value: 'aminganja66',
    href: 'https://github.com/aminganja66',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate w-full min-h-svh flex flex-col justify-center bg-background px-4 md:px-8 py-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[26rem] h-[26rem] rounded-full bg-white/[0.04] blur-[110px] top-0 right-0" />
        <div className="absolute w-[20rem] h-[20rem] rounded-full bg-white/[0.03] blur-[110px] bottom-0 left-0" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: invitation + direct links */}
          <div>
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
              <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">
                Available · Replies within 24h
              </span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-balance"
            >
              Have a pilot or launch in the next 3 months?
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.16 }}
              className="mt-5 text-base md:text-lg text-gray-400 leading-relaxed max-w-lg text-balance"
            >
              Let&apos;s make sure your app is ready, and safe. Book a 20-minute call, or send a note and I&apos;ll reply within a day.
            </motion.p>

            <a
              href={BOOKING_URL}
              className="mt-8 inline-block px-8 py-3 md:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Book a 20-min call
            </a>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.24 }}
              className="mt-10 border-t border-white/10"
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 py-5 border-b border-white/10 hover:border-white/30 transition-colors duration-300"
                >
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{link.label}</p>
                    <p className="text-lg md:text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {link.value}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M17 7H8m9 0v9" />
                  </svg>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.16 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 md:mt-20 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © 2025 Amin Ganja · Flutter developer for women&apos;s health apps · Ahmedabad, India
          </p>
        </div>
      </div>
    </section>
  )
}
