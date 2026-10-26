import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'
import BookCallLink from '@/components/book-call-link'

export const metadata: Metadata = {
  title: "Why Hire a Femtech App Developer Like Me | Amin Ganja",
  description:
    "Why women's health startups hire me: I focus on pregnancy, postpartum and fertility apps, handle app and health data, build in privacy, and quote a fixed price.",
  alternates: { canonical: '/why-me' },
  openGraph: {
    title: "Why Hire a Femtech App Developer Like Me | Amin Ganja",
    description:
      "Why women's health startups hire me: I focus on pregnancy, postpartum and fertility apps, handle app and health data, build in privacy, and quote a fixed price.",
    url: '/why-me',
    images: [{ url: '/og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why Hire a Femtech App Developer Like Me | Amin Ganja",
    description:
      "Why women's health startups hire me: I focus on pregnancy, postpartum and fertility apps, handle app and health data, build in privacy, and quote a fixed price.",
    images: ['/og-image.png'],
  },
}

const reasons = [
  {
    title: "Focused on women's health apps",
    body: 'I already understand the care flows for prenatal, postpartum and fertility patients, so we skip the long briefing and get to the screens. I also know where these apps tend to leak private details, like lock-screen notifications and analytics events.',
    href: '/services',
    linkLabel: 'See the apps I build',
  },
  {
    title: 'App and health data in one person',
    body: 'The same person builds your screens and connects them to clinical systems through FHIR. Nothing gets lost between an app developer and an integration specialist, and you only explain your project once.',
  },
  {
    title: 'Privacy built in from day one',
    body: 'No patient data in logs, notifications or analytics, and everything is stored encrypted. I also help you choose hosting and backend tools that will sign a BAA, the agreement HIPAA asks for from any vendor that handles patient data.',
    href: '/services/hipaa-compliant-flutter-app-development',
    linkLabel: 'How I build HIPAA compliant Flutter apps',
  },
  {
    title: 'Fixed price',
    body: 'You agree the scope and the price up front, so there are no surprise bills. If something new comes up halfway through, you get a separate quote before I start on it.',
    href: '/pricing',
    linkLabel: 'See the packages',
  },
]

const notAFit = [
  'You need a large team working in parallel on web, mobile and data at once.',
  'You want someone to write medical content or make clinical decisions. That belongs with your clinicians.',
  'You need a native-only app with features Flutter cannot support well. I will tell you on the first call if that is the case.',
]

export default function WhyMePage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="Why Work With Me"
        title="Why women's health teams work with me"
        subtitle="Four reasons, in plain terms, and a few cases where I'm the wrong choice."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <p className="max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed mb-12">
            Hiring a femtech app developer is a bigger bet than hiring for most apps. Your users share things they
            may not have told their own family, and a single leak can end a pilot with a clinic. Here is what you
            get when you work with me instead of a general agency.
          </p>

          <h2 className="sr-only">Four reasons</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            {reasons.map((r) => (
              <div key={r.title}>
                <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{r.title}</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">{r.body}</p>
                {r.href && (
                  <Link href={r.href} className="mt-3 inline-block text-sm text-gray-300 underline underline-offset-4 hover:text-white">
                    {r.linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Who this is for */}
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-9">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Who this is for</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
              You&apos;ll get the most from this if you have a pilot or launch in the next few months
              and want one person accountable for the app. I&apos;m free for calls 7:30 to 10:30 pm
              IST, which is 9 am to 12 pm US Eastern.
            </p>
          </div>

          {/* Not a fit */}
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When I&apos;m not the right choice</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 max-w-2xl">
              Working with one developer has limits, and it&apos;s better to know them before the first call.
            </p>
            <ul className="space-y-3 max-w-2xl">
              {notAFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-gray-300 leading-relaxed">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have a pilot coming up?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Tell me about your users and your timeline. I&apos;ll tell you honestly if I can help.
            </p>
            <BookCallLink
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
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
