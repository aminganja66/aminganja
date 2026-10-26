import Link from 'next/link'
import { getAllServices } from '@/lib/services'
import Logo from '@/components/logo'

const pages = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Process', href: '/process' },
  { label: 'Why me', href: '/why-me' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-background px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <Link href="/" aria-label="Amin Ganja, home" className="self-center lg:self-start text-white hover:text-accent transition-colors">
          <Logo />
        </Link>
        <nav aria-label="Services" className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
          <Link href="/services" className="font-semibold text-white hover:text-emerald-300 transition-colors">Services</Link>
          {getAllServices().map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="hover:text-white transition-colors">
              {s.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center lg:text-left">
            © {new Date().getFullYear()} Amin Ganja · Flutter developer for women&apos;s health apps · Ahmedabad, India
          </p>
          <nav aria-label="Pages" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
            {pages.map((p) => (
              <Link key={p.href} href={p.href} className="hover:text-white transition-colors">
                {p.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
