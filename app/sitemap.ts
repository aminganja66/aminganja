import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const siteUrl = 'https://amin-ganja.vercel.app'

const routes: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/work', priority: 0.9 },
  { path: '/work/society-ledger', priority: 0.8 },
  { path: '/blog', priority: 0.8 },
  { path: '/pricing', priority: 0.8 },
  { path: '/about', priority: 0.7 },
  { path: '/process', priority: 0.7 },
  { path: '/why-me', priority: 0.6 },
  { path: '/contact', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const pages = routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority,
  }))
  const posts = getAllPosts().map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  return [...pages, ...posts]
}
