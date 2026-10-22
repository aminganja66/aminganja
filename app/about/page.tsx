import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: "About Amin Ganja | Flutter Developer for Women's Health Apps",
  description:
    "Amin Ganja is a Flutter developer with 5 years of experience who builds private, HIPAA-aware apps for women's health startups. Based in Ahmedabad, India.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: "About Amin Ganja | Flutter Developer for Women's Health Apps",
    description:
      "Amin Ganja is a Flutter developer with 5 years of experience who builds private, HIPAA-aware apps for women's health startups. Based in Ahmedabad, India.",
    url: '/about',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Amin Ganja | Flutter Developer for Women's Health Apps",
    description:
      "Amin Ganja is a Flutter developer with 5 years of experience who builds private, HIPAA-aware apps for women's health startups. Based in Ahmedabad, India.",
    images: ['/og-image.png'],
  },
}

const facts = [
  { label: 'Location', value: 'Ahmedabad, India' },
  { label: 'Experience', value: '5 years' },
  { label: 'Focus', value: "Women's health apps" },
  { label: 'Calls', value: '9 am–12 pm US Eastern' },
]

const highlights = [
  {
    title: '5 years of shipping apps',
    body: "I've shipped apps that real people use every day. That experience helps most when something unexpected breaks close to launch.",
  },
  {
    title: 'Privacy comes first',
    body: 'In a women\'s health app, one slip with patient data can end a pilot. I keep health details out of logs, notifications and analytics, and I store data encrypted.',
  },
  {
    title: 'Plain English, always',
    body: "You don't need to know what FHIR or an API is. I explain each choice in terms of your patients and your launch date.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="About Me"
        title="About Amin Ganja, Flutter developer for women's health apps"
        subtitle="A little more about who you'd be working with."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Photo + intro */}
          <section className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-center">
            <div className="mx-auto md:mx-0 w-full max-w-[220px]">
              <div className="rounded-3xl p-[1.5px] bg-gradient-to-br from-white/25 via-white/5 to-transparent">
                <div className="relative aspect-[3/4] rounded-[calc(1.5rem-1.5px)] overflow-hidden bg-background">
                  <Image
                    src="/amin-nobg.png"
                    alt="Amin Ganja, Flutter developer for women's health apps"
                    fill
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I'm a Flutter developer based in Ahmedabad. For 5 years I've built mobile apps that
              people use every day, and now I work mostly with women's health startups:
              pregnancy, postpartum, fertility and menopause. I take one client project at a time,
              so your project never waits behind another.
            </p>
          </section>

          {/* Quick facts */}
          <section className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl border border-white/10 divide-x divide-y sm:divide-y-0 divide-white/10 overflow-hidden">
            {facts.map((f) => (
              <div key={f.label} className="text-center px-3 py-6">
                <p className="text-sm md:text-base font-bold text-white">{f.value}</p>
                <p className="text-[11px] text-gray-500 font-medium mt-1">{f.label}</p>
              </div>
            ))}
          </section>

          {/* What I actually do */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-8">What you can expect</h2>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {highlights.map((h) => (
                <div key={h.title} className="py-6">
                  <h3 className="text-base font-bold text-white mb-1.5">{h.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">{h.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Who this is for */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Who I work best with</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
              Founders and clinical teams building a women's health app with a pilot or launch
              coming up, who want one person responsible for the build. If your timeline is
              tight, we'll probably get along.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center pt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have a pilot coming up?</h2>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 md:py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Book a 20-min call
            </Link>
          </section>

        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
