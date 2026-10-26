import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'
import { getAllServices, getService } from '@/lib/services'
import { siteUrl } from '@/lib/site'
import BookCallLink from '@/components/book-call-link'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  const url = `/services/${service.slug}`
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: { title: service.title, description: service.description, url, images: [{ url: '/og-image.png' }], type: 'website' },
    twitter: { card: 'summary_large_image', title: service.title, description: service.description, images: ['/og-image.png'] },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const others = getAllServices().filter((s) => s.slug !== service.slug)
  const url = `${siteUrl}/services/${service.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.h1,
        description: service.description,
        url,
        serviceType: service.name,
        provider: { '@id': `${siteUrl}/#person` },
        areaServed: 'Worldwide',
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
          { '@type': 'ListItem', position: 3, name: service.name, item: url },
        ],
      },
    ],
  }

  return (
    <div className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <PageHero eyebrow="Services" title={service.h1} subtitle={service.summary} />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-3xl mx-auto space-y-16 md:space-y-20">
          <section className="space-y-5 text-base md:text-lg text-gray-300 leading-relaxed">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-9">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Who this is for</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">{service.audience}</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">What I can build for you</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {service.features.map((f) => (
                <div key={f.title}>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{f.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How I keep the data private</h2>
            <ul className="space-y-3">
              {service.privacy.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-gray-300 leading-relaxed">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500 leading-relaxed">
              The work follows the same five steps as every project: a 20-minute call, a fixed scope and price within 48
              hours, weekly demos, a security check and a full handover.{' '}
              <Link href="/process" className="text-gray-300 underline underline-offset-4 hover:text-white">
                See the process
              </Link>{' '}
              or{' '}
              <Link href="/pricing" className="text-gray-300 underline underline-offset-4 hover:text-white">
                compare the packages
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common questions</h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {service.faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <h3 className="text-base font-bold text-white mb-1.5">{f.q}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">Further reading</h2>
            <ul className="space-y-2">
              {service.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-sm md:text-base text-gray-300 underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="text-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/0 px-6 py-10 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Have a pilot coming up?</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-6">
              Tell me who the app is for and when you want to launch. I&apos;ll tell you honestly if I&apos;m a good fit.
            </p>
            <BookCallLink
              className="inline-block px-8 py-3 md:py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              Book a 20-min call
            </BookCallLink>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-4">Other services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/25 transition-colors"
                >
                  <p className="text-sm font-semibold text-white">{s.name}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-white transition-colors">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
