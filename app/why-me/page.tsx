import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: "Why Choose Me for Your Women's Health App | Amin Ganja",
  description:
    "Why women's health startups hire me: I focus on pregnancy, postpartum and fertility apps, handle app and health data, build in privacy, and quote a fixed price.",
  alternates: { canonical: '/why-me' },
  openGraph: {
    title: "Why Choose Me for Your Women's Health App | Amin Ganja",
    description:
      "Why women's health startups hire me: I focus on pregnancy, postpartum and fertility apps, handle app and health data, build in privacy, and quote a fixed price.",
    url: '/why-me',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why Choose Me for Your Women's Health App | Amin Ganja",
    description:
      "Why women's health startups hire me: I focus on pregnancy, postpartum and fertility apps, handle app and health data, build in privacy, and quote a fixed price.",
    images: ['/og-image.png'],
  },
}

const reasons = [
  {
    title: "Focused on women's health apps",
    body: 'I already understand the care flows for prenatal, postpartum and fertility patients, so we skip the long briefing and get to the screens.',
  },
  {
    title: 'App and health data in one person',
    body: 'The same person builds your screens and connects them to clinical systems. Nothing gets lost between an app developer and an integration specialist.',
  },
  {
    title: 'Privacy built in from day one',
    body: 'No patient data in logs, notifications or analytics, and everything is stored encrypted. I also help you choose hosting and backend tools that will sign a BAA, the agreement HIPAA asks for from any vendor that handles patient data.',
  },
  {
    title: 'Fixed price',
    body: 'You agree the scope and the price up front, so there are no surprise bills.',
  },
]

export default function WhyMePage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="Why Work With Me"
        title="Why women's health teams work with me"
        subtitle="Four reasons, in plain terms."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
        <h2 className="sr-only">Four reasons</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {reasons.map((r) => (
              <div key={r.title}>
                <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{r.title}</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>

          {/* Who this is for */}
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Who this is for</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
              You'll get the most from this if you have a pilot or launch in the next few months
              and want one person accountable for the app. I'm free for calls 7:30 to 10:30 pm
              IST, which is 9 am to 12 pm US Eastern.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have a pilot coming up?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Tell me about your users and your timeline. I&apos;ll tell you honestly if I can help.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Book a 20-min call
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
