'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    setIsSticky(window.scrollY > 50)

    let raf: number
    const handleScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setIsSticky(window.scrollY > 50)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { label: 'Who am I?', href: '/#who-am-i' },
    { label: 'My Work', href: '/#my-work' },
    { label: 'Offer', href: '/#offer' },
    { label: 'Why me?', href: '/#why-me' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'pt-4 px-4 md:px-6' : 'pt-6 px-4 md:px-6'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl ${
          isSticky
            ? 'glassmorphism rounded-2xl px-6 py-4'
            : 'px-0 py-0'
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-white hover:text-accent transition-colors"
          >
            ✦
          </Link>

          {isSticky && (
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          <Link
            href="/#contact"
            className="hidden md:block px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-accent transition-colors"
          >
            Let&apos;s Talk
          </Link>

          {isSticky && (
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
