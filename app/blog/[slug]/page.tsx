import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/navbar'
import SiteFooter from '@/components/site-footer'
import BlogBody from '@/components/blog-body'
import BlogCard from '@/components/blog-card'
import { formatDate, getAllPosts, getPost, readingMinutes, siteUrl } from '@/lib/blog'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const ogImage = post.cover.src.replace(/w=\d+/, 'w=1200&h=630')
  return {
    title: `${post.title} | Amin Ganja`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ['Amin Ganja'],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.cover.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const others = getAllPosts().filter((p) => p.slug !== post.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: post.cover.src,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: { '@type': 'Person', name: 'Amin Ganja', url: `${siteUrl}/` },
        publisher: { '@type': 'Person', name: 'Amin Ganja', url: `${siteUrl}/` },
        mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
        citation: post.sources.map((s) => s.href),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
        ],
      },
    ],
  }

  return (
    <div className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="px-4 md:px-8 pt-32 md:pt-40 pb-24">
        <article className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </nav>

          <header className="mt-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-gray-300">{post.category}</span>
              <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
              <span>{readingMinutes(post)} min read</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">{post.description}</p>
            <p className="mt-4 text-sm text-gray-500">
              By <Link href="/about" className="text-gray-300 hover:text-white underline underline-offset-4">Amin Ganja</Link>, Flutter developer
            </p>
          </header>

          <figure className="mt-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]">
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs text-gray-500">
              Photo:{' '}
              <a href={post.cover.creditUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                {post.cover.credit}
              </a>
            </figcaption>
          </figure>

          <div className="mt-10">
            <BlogBody blocks={post.body} />
          </div>

          <section className="mt-12 border-t border-white/10 pt-8">
            <h2 className="text-lg font-semibold text-white">Sources</h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2 text-sm text-gray-400">
              {post.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4">
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white">Building a health or wellness app?</h2>
            <p className="mt-2 text-gray-400">
              I build Flutter and Supabase MVPs for founders. See the{' '}
              <Link href="/work/society-ledger" className="text-white underline underline-offset-4">case study</Link>,{' '}
              check the <Link href="/pricing" className="text-white underline underline-offset-4">pricing</Link>, or just{' '}
              <Link href="/contact" className="text-white underline underline-offset-4">tell me about your idea</Link>.
            </p>
          </section>

          {others.length > 0 && (
            <section className="mt-12">
              <h2 className="text-lg font-semibold text-white mb-4">Keep reading</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {others.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </section>
          )}

          <Link href="/blog" className="mt-10 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
