import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: "How I Build Women's Health Apps | Amin Ganja",
  description:
    "My five-step process for building a secure women's health app: a 20-minute call, a fixed price in 48 hours, weekly demos, a security check and a full handover.",
  alternates: { canonical: '/process' },
  openGraph: {
    title: "How I Build Women's Health Apps | Amin Ganja",
    description:
      "My five-step process for building a secure women's health app: a 20-minute call, a fixed price in 48 hours, weekly demos, a security check and a full handover.",
    url: '/process',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "How I Build Women's Health Apps | Amin Ganja",
    description:
      "My five-step process for building a secure women's health app: a 20-minute call, a fixed price in 48 hours, weekly demos, a security check and a full handover.",
    images: ['/og-image.png'],
  },
}

const steps = [
  {
    title: '20-min call',
    body: 'We talk about your goal, who will use the app, and what health data is involved. I ask about your pilot date, any clinic or insurer you work with, and which systems the app has to connect to. You leave the call knowing whether I think I can help.',
  },
  {
    title: 'Fixed scope and price',
    body: 'Within 48 hours you get a written scope and one fixed price. The scope lists every screen and feature in plain language, plus what is left out on purpose, so we agree on the edges of the project before any code is written.',
  },
  {
    title: 'Weekly demos',
    body: 'Every week you get a working build to try on your own phone, through TestFlight on iPhone and a test link on Android. You see progress, show it to your clinicians, and can steer early while changes are still cheap.',
  },
  {
    title: 'Security check',
    body: 'Before each release I go through a security checklist: no patient data in logs, notifications or analytics, encrypted storage, access rules tested for every role, and third-party SDKs reviewed for what they send.',
  },
  {
    title: 'Handover',
    body: 'You receive the code, the documents and a walkthrough. The app is published under your own App Store and Google Play accounts, and the backend runs in your own cloud account. You own everything.',
  },
]

const handover = [
  'Full source code in your own Git repository',
  'The app live under your App Store and Google Play accounts',
  'Backend, database and keys in your own cloud account',
  'A short written guide to how the app is put together',
  'A summary of the security and privacy decisions',
  'A walkthrough of the code, for you or your next developer',
]

export default function ProcessPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="The Process"
        title="How I build a women's health app, step by step"
        subtitle="Five steps, with no surprises at the end."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10">
            Most app projects go wrong in one of two places: nobody agreed what was being built, or the founder
            only saw the app at the end. The steps below are there to prevent both. They are the same whether
            you need a{' '}
            <Link href="/services/pregnancy-postpartum-app-development" className="text-white underline underline-offset-4">pregnancy app</Link>
            , a{' '}
            <Link href="/services/fertility-app-development" className="text-white underline underline-offset-4">fertility tracker</Link>{' '}
            or a{' '}
            <Link href="/services/menopause-app-development" className="text-white underline underline-offset-4">menopause program</Link>.
          </p>

          <h2 className="sr-only">The five steps</h2>

          {/* Steps */}
          <div>
            {steps.map((step, i) => (
              <div key={step.title} className={`flex gap-4 sm:gap-6 py-7 ${i < steps.length - 1 ? 'border-b border-white/10' : ''}`}>
                <span aria-hidden="true" className="text-2xl sm:text-3xl md:text-4xl font-black text-white/40 leading-none shrink-0 w-10 sm:w-12 md:w-14">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What you get */}
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get at handover</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {handover.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-gray-300 leading-relaxed">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Communication */}
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How we keep in touch</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              I&apos;m based in Ahmedabad, India, and free for calls from 7:30 to 10:30 pm IST, which is 9 am to
              12 pm US Eastern. Between calls we use whatever your team already uses, whether that is Slack, email or
              WhatsApp. I take one client project at a time, so messages get an answer within a day.
            </p>
          </section>

          {/* What I need from you */}
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-9">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">What I need from you</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              A rough idea of who the app is for, what health data it needs to show or collect,
              and when your pilot or launch starts. That&apos;s enough to begin. Designs, a clinical advisor
              and content help a lot later, but none of them are needed for the first call.
            </p>
          </div>

          {/* Callout bar */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/0 px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm md:text-base text-gray-300 font-medium tracking-wide text-center sm:text-left">
              Flutter &nbsp;·&nbsp; FHIR R4 &nbsp;·&nbsp; SMART on FHIR &nbsp;·&nbsp; HIPAA-aware &nbsp;·&nbsp; You own the code
            </p>
            <p className="text-xs md:text-sm text-gray-500 sm:whitespace-nowrap flex-shrink-0 italic">Scope and price in 48 hours</p>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have a pilot coming up?</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-6">
              Check the <Link href="/pricing" className="text-white underline underline-offset-4">packages</Link>, or
              go straight to a call.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 md:py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
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
