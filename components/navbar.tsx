'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/logo'

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

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

  // Close the menu after navigating, and with the Escape key.
  useEffect(() => setMenuOpen(false), [pathname])
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const solid = isSticky || menuOpen

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 ${solid ? 'pt-3 md:pt-4' : 'pt-5 md:pt-6'}`}
    >
      <div
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
          solid ? 'glassmorphism bg-background/80 px-5 md:px-6 py-3 md:py-4' : 'px-1 py-1'
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Amin Ganja, home"
            className="text-white hover:text-accent transition-colors"
          >
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={`text-sm transition-colors ${pathname === item.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:block px-5 md:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              Let&apos;s Talk
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden -mr-1 p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="lg:hidden mt-3 pt-3 border-t border-white/10 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 mb-1 px-6 py-3 bg-white text-black rounded-full text-sm font-semibold text-center hover:bg-accent transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
