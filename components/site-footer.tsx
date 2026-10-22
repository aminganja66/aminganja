import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-background px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500 text-center sm:text-left">
          © 2025 Amin Ganja · Flutter developer for women&apos;s health apps · Ahmedabad, India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
          <Link href="/about" className="hover:text-white transition-colors">Who am I</Link>
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/process" className="hover:text-white transition-colors">Process</Link>
          <Link href="/why-me" className="hover:text-white transition-colors">Why Me</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
