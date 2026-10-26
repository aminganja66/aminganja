import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'
import BookCallLink from '@/components/book-call-link'

export const metadata: Metadata = {
  title: 'Flutter App Case Studies | Amin Ganja',
  description:
    "Flutter and Supabase apps I've built and shipped, with the architecture, security and lessons behind each. I now focus on women's health apps for startups.",
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Flutter App Case Studies | Amin Ganja',
    description:
      "Flutter and Supabase apps I've built and shipped, with the architecture, security and lessons behind each. I now focus on women's health apps for startups.",
    url: '/work',
    images: [{ url: '/my_society_ledger.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flutter App Case Studies | Amin Ganja',
    description:
      "Flutter and Supabase apps I've built and shipped, with the architecture, security and lessons behind each. I now focus on women's health apps for startups.",
    images: ['/my_society_ledger.png'],
  },
}

const caseStudies = [
  {
    slug: 'society-ledger',
    thumbnail: '/my_society_ledger.png',
    tag: 'MVP in 30 Days',
    title: 'SocietyLedger: a society management app',
    description:
      'A cross-platform Flutter app that digitizes maintenance dues, payment tracking, and expense reporting for residential societies.',
    tech: ['Flutter', 'Supabase', 'Cloudinary', 'Twilio'],
  },
]

const carriesOver = [
  {
    title: 'Access rules on the server',
    body: 'SocietyLedger has three user roles and row-level security on all 12 database tables. A health app needs the same thing for patients, clinicians and admins.',
  },
  {
    title: 'No raw queries from the app',
    body: 'All 44 data operations run as PostgreSQL functions on the server, so the phone never decides who may read what. That is the pattern I use for patient data.',
  },
  {
    title: 'A solo build with a fixed scope',
    body: 'It went from idea to production-ready in 30 to 35 days, planned feature by feature before any code. Pilots run the same way.',
  },
]

export default function WorkPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <PageHero
        eyebrow="My Work"
        title="Flutter app case studies"
        subtitle="Apps I've designed, built and shipped on my own, and what I learned from each."
      />

      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-3xl mx-auto space-y-5 text-base md:text-lg text-gray-300 leading-relaxed mb-14 md:mb-16">
          <p>
            Each case study covers the problem, the decisions I made, the stack, and what I would do differently.
            I write them for founders who want to know how I think before they hire me, so they are light on
            jargon.
          </p>
          <p>
            My focus today is{' '}
            <Link href="/services" className="text-white underline underline-offset-4">women&apos;s health apps</Link>
            . The case study below is a product I built on my own from idea to launch. Women&apos;s health projects will
            be added here as they are published.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <h2 className="sr-only">Case studies</h2>
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-[#0d0d0d] border-b border-white/10">
                <Image
                  src={cs.thumbnail}
                  alt={cs.title}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-contain group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-black/60 border border-white/15 text-white backdrop-blur-sm">
                  {cs.tag}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors duration-300">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{cs.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cs.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-md border border-white/10 bg-white/[0.03] text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 flex items-center gap-1.5 text-sm text-white font-medium">
                  Read case study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}

          <div className="flex flex-col items-center justify-center text-center gap-3 rounded-2xl border border-dashed border-white/15 p-10 min-h-[280px]">
            <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-500">
              <Plus className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[16rem]">
              Next up: BloomCare, a prenatal blood pressure monitoring demo built on a SMART on FHIR sandbox.
            </p>
          </div>
        </div>

        <section className="max-w-3xl mx-auto mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What carries over to a health app</h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
            A housing society app and a pregnancy app have little in common on the surface. Underneath, the hard
            parts are similar: several kinds of users, private records that only some of them may see, and money or
            health decisions that depend on the data being right.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {carriesOver.map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm md:text-base text-gray-400 leading-relaxed">
            For the privacy side specifically, read{' '}
            <Link href="/services/hipaa-compliant-flutter-app-development" className="text-white underline underline-offset-4">
              how I build HIPAA compliant Flutter apps
            </Link>{' '}
            and the article on{' '}
            <Link href="/blog/hipaa-compliant-push-notifications-pregnancy-apps" className="text-white underline underline-offset-4">
              push notifications in pregnancy apps
            </Link>
            .
          </p>
        </section>

        <div className="max-w-6xl mx-auto text-center mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want yours next?</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-6">
            Tell me what you&apos;re building and I&apos;ll tell you honestly if it&apos;s a fit.
          </p>
          <BookCallLink
            className="inline-block px-8 py-3 md:py-4 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Book a 20-min call
          </BookCallLink>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
