import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'
import BlogCard from '@/components/blog-card'
import { getAllPosts, siteUrl } from '@/lib/blog'

const title = "Women's Health App Development Blog | Amin Ganja"
const description =
  "Plain-English articles on building health apps people keep using, and on protecting patient data, from a Flutter developer who builds women's health apps."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog' },
  openGraph: { title, description, url: '/blog', images: [{ url: '/og-image.png' }], type: 'website' },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Amin Ganja Blog',
  url: `${siteUrl}/blog`,
  author: { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Amin Ganja', url: `${siteUrl}/` },
  blogPost: getAllPosts().map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: `${siteUrl}/blog/${p.slug}`,
    datePublished: p.datePublished,
  })),
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
  return (
    <div className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Blog"
          title="Notes on building women's health apps"
          subtitle="Plain-English articles on apps people keep using, and on keeping patient data safe."
        />

        <section className="px-4 md:px-8 pb-14 md:pb-16">
          <div className="max-w-3xl mx-auto space-y-5 text-base md:text-lg text-gray-300 leading-relaxed">
            <p>
              I write these for founders and clinical teams, not for other developers. Each article takes one
              problem I run into while building pregnancy, fertility and menopause apps, explains it without code,
              and ends with something you can check in your own app this week.
            </p>
            <p>
              Most posts fall into two topics. The first is privacy: where health data leaks out of an app, and
              what HIPAA and the FTC expect. The second is engagement, meaning why people stop opening health
              apps and what helps them stay. If you&apos;d rather talk it through, see{' '}
              <Link href="/services" className="text-white underline underline-offset-4">the apps I build</Link>{' '}
              or{' '}
              <Link href="/contact" className="text-white underline underline-offset-4">send me a message</Link>.
            </p>
          </div>
        </section>

        <section className="px-4 md:px-8 pb-24">
          <h2 className="sr-only">Articles</h2>
          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
