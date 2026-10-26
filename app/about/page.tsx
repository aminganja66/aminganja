import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'
import { EXPERIENCE } from '@/lib/site'
import BookCallLink from '@/components/book-call-link'

const title = "About Amin Ganja | Flutter Developer for Women's Health Apps"
const description = `Amin Ganja is a Flutter developer with ${EXPERIENCE} of experience who builds private, HIPAA-aware apps for women's health startups. Based in Ahmedabad, India.`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/about' },
  openGraph: { title, description, url: '/about', images: [{ url: '/og-image.png' }], type: 'profile' },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
}

const facts = [
  { label: 'Location', value: 'Ahmedabad, India' },
  { label: 'Experience', value: EXPERIENCE },
  { label: 'Focus', value: "Women's health apps" },
  { label: 'Calls', value: '9 am–12 pm US Eastern' },
]

const highlights = [
  {
    title: `${EXPERIENCE} of shipping apps`,
    body: "I've shipped apps that real people use every day. That experience helps most when something unexpected breaks close to launch.",
  },
  {
    title: 'Privacy comes first',
    body: "In a women's health app, one slip with patient data can end a pilot. I keep health details out of logs, notifications and analytics, and I store data encrypted.",
  },
  {
    title: 'Plain English, always',
    body: "You don't need to know what FHIR or an API is. I explain each choice in terms of your patients and your launch date.",
  },
  {
    title: 'One project at a time',
    body: 'I never split my week between several clients. Your project gets dedicated hours and a clear milestone every week.',
  },
]

const stack = ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'FHIR R4', 'SMART on FHIR', 'Stripe', 'Razorpay', 'OneSignal', 'Twilio']

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
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">

          {/* Photo + intro */}
          <section className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-10 items-center">
            <div className="mx-auto md:mx-0 w-full max-w-[200px] md:max-w-[220px]">
              <div className="rounded-3xl p-[1.5px] bg-gradient-to-br from-white/25 via-white/5 to-transparent">
                <div className="relative aspect-[3/4] rounded-[calc(1.5rem-1.5px)] overflow-hidden bg-background">
                  <Image
                    src="/amin-nobg.png"
                    alt="Amin Ganja, Flutter developer for women's health apps"
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
              <p>
                I&apos;m a Flutter developer based in Ahmedabad. For {EXPERIENCE} I&apos;ve built mobile apps that
                people use every day, and now I work mostly with women&apos;s health startups:
                pregnancy, postpartum, fertility and menopause. I take one client project at a time,
                so your project never waits behind another.
              </p>
              <p>
                I&apos;m a good match for founders without a technical co-founder, and for small clinical teams with a
                pilot date already on the calendar. They need someone who can design the screens, build the backend,
                connect to hospital records and get the app through App Store review, without hiring four people.
              </p>
            </div>
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

          {/* Why women's health */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Why women&apos;s health</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl">
              <p>
                Women&apos;s health apps carry some of the most sensitive data on a phone, and that is exactly
                where careful engineering makes the biggest difference. A lock-screen notification, a crash report
                or an analytics event can reveal a pregnancy or a fertility treatment. Avoiding that is mostly a
                matter of discipline, and it is the part of the job I enjoy most.
              </p>
              <p>
                The field also needs more developers who understand both sides: the app people hold in their hand,
                and the clinical systems behind it. I build both, so you work with one person from the first
                screen to the FHIR connection. You can read more about{' '}
                <Link href="/services" className="text-white underline underline-offset-4">the kinds of apps I build</Link>{' '}
                or{' '}
                <Link href="/blog" className="text-white underline underline-offset-4">my notes on health app development</Link>.
              </p>
            </div>
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

          {/* Tools */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Tools I work with</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl mb-6">
              Flutter for the iOS and Android app, Supabase and PostgreSQL for the backend, and FHIR for hospital
              data. You can see how they fit together in the{' '}
              <Link href="/work/society-ledger" className="text-white underline underline-offset-4">SocietyLedger case study</Link>.
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <span key={t} className="px-3 py-1.5 text-xs md:text-sm rounded-md border border-white/10 bg-white/[0.03] text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Who this is for */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-9">
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Who I work best with</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
              Founders and clinical teams building a women&apos;s health app with a pilot or launch
              coming up, who want one person responsible for the build. If your timeline is
              tight, we&apos;ll probably get along.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center pt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have a pilot coming up?</h2>
            <BookCallLink
              className="inline-block px-8 py-3 md:py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Book a 20-min call
            </BookCallLink>
          </section>

        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
