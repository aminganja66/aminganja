import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { siteUrl } from '@/lib/site'

// Update a date here when that page's content really changes.
const routes: { path: string; lastModified: string }[] = [
  { path: '/', lastModified: '2026-10-22' },
  { path: '/work', lastModified: '2026-10-22' },
  { path: '/work/society-ledger', lastModified: '2026-10-22' },
  { path: '/blog', lastModified: '2026-10-22' },
  { path: '/pricing', lastModified: '2026-10-22' },
  { path: '/about', lastModified: '2026-10-22' },
  { path: '/process', lastModified: '2026-10-22' },
  { path: '/why-me', lastModified: '2026-10-22' },
  { path: '/contact', lastModified: '2026-10-22' },
  { path: '/privacy', lastModified: '2026-10-22' },
  { path: '/terms', lastModified: '2026-10-22' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map(({ path, lastModified }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(lastModified),
  }))
  const posts = getAllPosts().map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
  }))
  return [...pages, ...posts]
}
