import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | Amin Ganja',
  description:
    'How this website handles your name, email and message when you contact Amin Ganja, and what it does not collect.',
  alternates: { canonical: '/privacy' },
  openGraph: { title: 'Privacy Policy | Amin Ganja', description: 'How this website handles your name, email and message when you contact Amin Ganja, and what it does not collect.', url: '/privacy', images: [{ url: '/og-image.png' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Privacy Policy | Amin Ganja', description: 'How this website handles your name, email and message when you contact Amin Ganja, and what it does not collect.', images: ['/og-image.png'] },
}

export default function PrivacyPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <PageHero eyebrow="Privacy" title="Privacy policy" subtitle="Last updated 22 October 2026." />
      <main className="w-full px-4 md:px-8 pb-24">
        <div className="max-w-3xl mx-auto space-y-10">
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">What I collect</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">If you use the contact form, I receive your name, email address and the message you write. If you email me directly, I receive whatever you send.</p><p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">The site also uses Vercel Web Analytics to count page views in aggregate. It is not used to build profiles of individual visitors or to show ads.</p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">How I use it</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">I use your details only to reply to you and to keep a record of the conversation. I do not sell your information and I do not add you to a mailing list without asking.</p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Who handles it</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">The site is hosted on Vercel. Contact form messages are passed to an email delivery service so they reach my inbox. These providers process data on my behalf to run the site.</p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Please do not send health information</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">This form is for project inquiries. Please do not include medical records, diagnoses or other personal health information in your message.</p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Your choices</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">You can ask me to delete a message you sent, or to tell you what I hold about you, by emailing {CONTACT_EMAIL}.</p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">Contact</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">Amin Ganja, Ahmedabad, India. Email: {CONTACT_EMAIL}.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
