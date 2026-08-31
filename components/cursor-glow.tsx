'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [isActive, setIsActive] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150, mass: 0.5 })
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150, mass: 0.5 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    function handleMove(e: MouseEvent) {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setIsActive(true)
    }
    function handleLeave() {
      setIsActive(false)
    }

    window.addEventListener('mousemove', handleMove)
    document.documentElement.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 w-[420px] h-[420px] rounded-full blur-[60px] mix-blend-screen"
      style={{
        left: springX,
        top: springY,
        translateX: '-50%',
        translateY: '-50%',
        background:
          'radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 35%, transparent 70%)',
      }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    />
  )
}
