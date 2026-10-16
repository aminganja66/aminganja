import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Amin Ganja | Flutter Developer for Hire',
  description:
    'Have an app idea? Get in touch with Amin Ganja, a Flutter + Supabase developer in Ahmedabad, India. Share your idea and get a reply within a day.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Amin Ganja | Flutter Developer for Hire',
    description:
      'Have an app idea? Get in touch with Amin Ganja, a Flutter + Supabase developer in Ahmedabad, India. Share your idea and get a reply within a day.',
    url: '/contact',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Amin Ganja | Flutter Developer for Hire',
    description:
      'Have an app idea? Get in touch with Amin Ganja, a Flutter + Supabase developer in Ahmedabad, India. Share your idea and get a reply within a day.',
    images: ['/og-image.png'],
  },
}

const links = [
  { label: 'Email', value: 'amin.ganja@outlook.com', href: 'mailto:amin.ganja@outlook.com' },
  { label: 'LinkedIn', value: 'in/amin-ganja', href: 'https://www.linkedin.com/in/amin-ganja' },
  { label: 'GitHub', value: 'aminganja66', href: 'https://github.com/aminganja66' },
]

const faqs = [
  { q: 'How fast do you reply?', a: 'Usually within 24 hours.' },
  { q: 'Do you work with clients outside India?', a: 'Yes — most of my work is remote anyway.' },
  {
    q: 'What should I include in my first message?',
    a: 'A quick idea of what you\'re building and roughly when you\'d want to start. That\'s enough for a first reply.',
  },
]

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="Get in Touch"
        title="Let's build something people actually use"
        subtitle="Have an idea? Tell me what you're building and I'll get back to you within a day."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          {/* Left: links + FAQ */}
          <div>
            <div className="border-t border-white/10">
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
            </div>

            <div className="mt-12 space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="text-sm font-bold text-white mb-1">{f.q}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
