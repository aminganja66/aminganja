import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'
import { getAllServices } from '@/lib/services'
import BookCallLink from '@/components/book-call-link'

const title = "Women's Health App Development Services | Amin Ganja"
const description =
  'Flutter app development for femtech: pregnancy and postpartum, fertility and cycle tracking, menopause, and HIPAA compliant health apps for startups.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: { title, description, url: '/services', images: [{ url: '/og-image.png' }], type: 'website' },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
}

export default function ServicesPage() {
  const services = getAllServices()
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="Services"
        title="Women's health app development services"
        subtitle="Private iOS and Android apps for femtech startups and clinical teams, built in Flutter by one developer."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto space-y-5 text-base md:text-lg text-gray-300 leading-relaxed mb-14 md:mb-16">
            <p>
              Women&apos;s health apps share a few problems that general app agencies tend to underestimate. The data is
              more sensitive than almost anything else on a phone. Many teams need records from a hospital or clinic
              system. And most pilots have a start date that won&apos;t move.
            </p>
            <p>
              I focus on four kinds of projects. Each page below explains who it suits, what I usually build, and how the
              data stays private. If your idea sits somewhere in between, that is normal. Most first versions mix
              features from two of them.
            </p>
          </div>

          <h2 className="sr-only">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">{s.name}</h3>
                <p className="mt-2 text-sm md:text-base text-gray-400 leading-relaxed">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  See what&apos;s included
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Not sure where your app fits?</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-6">
              Send me a few lines about your users and your launch date. I&apos;ll reply within a day.
            </p>
            <BookCallLink
              className="inline-block px-8 py-3 md:py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Book a 20-min call
            </BookCallLink>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
