import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import PageHero from '@/components/page-hero'
import SiteFooter from '@/components/site-footer'
import BlogCard from '@/components/blog-card'
import { getAllPosts, siteUrl } from '@/lib/blog'

const title = 'Blog: Mobile App & Health Tech Insights | Amin Ganja'
const description =
  'Practical, research-backed articles on building mobile apps people keep using, from a Flutter and Supabase developer who ships MVPs for startup founders.'

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
          title="Ideas worth shipping"
          subtitle="Practical notes on building mobile apps people keep using, backed by real research."
        />
        <section className="px-4 md:px-8 pb-24">
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
