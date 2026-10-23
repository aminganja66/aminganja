'use client'

import { useRef, type ReactNode, type MouseEvent } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useTransform, type MotionValue } from 'framer-motion'
import { EXPERIENCE } from '@/lib/site'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function FloatBadge({
  mx,
  my,
  depthX,
  depthY,
  floatDelay,
  className = '',
  children,
}: {
  mx: MotionValue<number>
  my: MotionValue<number>
  depthX: number
  depthY: number
  floatDelay: number
  className?: string
  children: ReactNode
}) {
  const x = useTransform(mx, [-0.5, 0.5], [-depthX, depthX])
  const y = useTransform(my, [-0.5, 0.5], [-depthY, depthY])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: floatDelay * 0.3 }}
      style={{ x, y }}
      className={`glassmorphism absolute z-20 rounded-2xl px-4 py-3 shadow-2xl ${className}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function WhoAmI() {
  const sectionRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const photoRotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8])
  const photoRotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8])

  return (
    <section
      ref={sectionRef}
      id="who-am-i"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate w-full flex flex-col items-center justify-center bg-background px-4 md:px-8 py-24 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute w-[26rem] h-[26rem] rounded-full bg-white/[0.04] blur-[110px] -top-24 -left-24" />
        <div className="absolute w-[22rem] h-[22rem] rounded-full bg-white/[0.03] blur-[110px] bottom-0 right-0" />
      </div>

      {/* Oversized ghost typography */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="text-[20vw] leading-none font-black uppercase text-transparent whitespace-nowrap"
          style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.1)' }}
        >
          Developer
        </span>
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
        <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">About Me</span>
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
        Hi, I&apos;m Amin Ganja.
      </motion.h2>

      {/* Intro line */}
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.16 }}
        className="mt-4 text-base md:text-lg text-gray-400 text-center max-w-xl leading-relaxed text-balance"
      >
        I build secure iOS and Android apps for women&apos;s health startups, from the first screen to the app store, so you don&apos;t need a full agency team.
      </motion.p>

      {/* Floating photo + orbiting badges */}
      <div className="relative w-full max-w-3xl min-h-[420px] sm:min-h-[480px] md:min-h-[560px] mt-6 md:mt-8 flex items-center justify-center">
        <motion.div
          style={{ rotateX: photoRotateX, rotateY: photoRotateY, transformPerspective: 1000 }}
          className="relative z-10 w-[200px] sm:w-[240px] md:w-[300px] lg:w-[340px]"
        >
          <div className="absolute -inset-10 rounded-full bg-white/10 blur-[80px] -z-10" />
          <Image
            src="/amin-nobg.png"
            alt="Amin Ganja, Flutter developer for women's health apps"
            width={751}
            height={1024}
            sizes="(min-width: 1024px) 340px, (min-width: 768px) 300px, 240px"
            className="w-full h-auto drop-shadow-2xl select-none"
            priority
          />
        </motion.div>

        <FloatBadge mx={mouseX} my={mouseY} depthX={16} depthY={10} floatDelay={0} className="top-[4%] left-0 sm:left-[4%]">
          <p className="text-sm font-semibold text-white whitespace-nowrap capitalize">{EXPERIENCE}</p>
          <p className="text-xs text-gray-400 whitespace-nowrap">Building real products</p>
        </FloatBadge>

        <FloatBadge
          mx={mouseX}
          my={mouseY}
          depthX={-16}
          depthY={12}
          floatDelay={0.6}
          className="hidden sm:block top-[10%] right-0 sm:right-[2%]"
        >
          <p className="text-sm font-semibold text-white whitespace-nowrap">Flutter · FHIR</p>
          <p className="text-xs text-gray-400 whitespace-nowrap">Women&apos;s health apps</p>
        </FloatBadge>

        <FloatBadge mx={mouseX} my={mouseY} depthX={-14} depthY={-10} floatDelay={1.1} className="bottom-[8%] left-0 sm:left-[2%]">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <p className="text-sm font-semibold text-white whitespace-nowrap">Ahmedabad, India</p>
          </div>
          <p className="text-xs text-gray-400 mt-0.5 whitespace-nowrap">Open to remote work</p>
        </FloatBadge>

        <FloatBadge
          mx={mouseX}
          my={mouseY}
          depthX={14}
          depthY={-12}
          floatDelay={1.6}
          className="hidden sm:block bottom-[4%] right-0 sm:right-[2%]"
        >
          <p className="text-sm font-semibold text-white whitespace-nowrap">Privacy built in</p>
          <p className="text-xs text-gray-400 whitespace-nowrap">Encrypted · BAA-ready</p>
        </FloatBadge>
      </div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="relative z-20 mt-4 md:mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
      >
        <a
          href="#contact"
          className="px-8 py-3 md:py-4 rounded-lg bg-white text-black font-semibold text-base md:text-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Book a 20-min call
        </a>
        <a
          href="#my-work"
          className="group inline-flex items-center gap-1.5 text-gray-300 font-medium hover:text-white transition-colors duration-300"
        >
          See my work
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="/about"
          className="group inline-flex items-center gap-1.5 text-gray-500 text-sm font-medium hover:text-white transition-colors duration-300"
        >
          Read the longer version
          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
