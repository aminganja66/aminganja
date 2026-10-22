import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'
import BlogCard from '@/components/blog-card'
import { getAllPosts, siteUrl } from '@/lib/blog'

const title = "Blog: Women's Health App & Health Tech Insights | Amin Ganja"
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
  author: { '@type': 'Person', name: 'Amin Ganja', url: `${siteUrl}/` },
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
          title="Notes on building health apps"
          subtitle="Plain-English articles on apps people keep using, and on keeping patient data safe."
        />
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
