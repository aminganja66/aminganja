'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { faqs } from '@/lib/site'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function Faq() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="faq"
      className="relative isolate w-full flex flex-col items-center bg-background px-4 md:px-8 py-24 overflow-hidden"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center text-balance"
      >
        Questions I get a lot
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
        className="w-full max-w-3xl mt-12 md:mt-14 border-t border-white/10"
      >
        {faqs.map((item, i) => {
          const isOpen = active === i
          return (
            <div key={item.q} className="border-b border-white/10">
              <button
                onClick={() => setActive(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              >
                <h3
                  className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}
                >
                  {item.q}
                </h3>
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
              {/* Answers stay in the DOM so search engines can read them */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 pr-12 text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
