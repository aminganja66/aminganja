import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Use | Amin Ganja',
  description:
    'Terms for using this website. Project work is agreed separately in writing, with scope, price and ownership set out before work starts.',
  alternates: { canonical: '/terms' },
  openGraph: { title: 'Terms of Use | Amin Ganja', description: 'Terms for using this website. Project work is agreed separately in writing, with scope, price and ownership set out before work starts.', url: '/terms', images: [{ url: '/og-image.png' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Terms of Use | Amin Ganja', description: 'Terms for using this website. Project work is agreed separately in writing, with scope, price and ownership set out before work starts.', images: ['/og-image.png'] },
}

export default function TermsPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <PageHero eyebrow="Terms" title="Terms of use" subtitle="Last updated 22 October 2026." />
      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-3xl mx-auto space-y-10">
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">About this site</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">This website describes the app development services offered by Amin Ganja. The information is general and may change.</p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">No professional advice</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">Nothing on this site is legal, medical or compliance advice. Statements about HIPAA, privacy laws or health regulations are general information. Please ask a qualified lawyer or compliance officer about your own situation.</p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Project work</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">Any project is agreed separately in writing, including scope, price, timeline and ownership. Quotes and packages on this site are not binding until agreed in that written scope.</p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Content</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">The text, design and code on this site belong to Amin Ganja unless noted otherwise. Please ask before reusing them.</p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Contact</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">Questions about these terms: {CONTACT_EMAIL}.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
