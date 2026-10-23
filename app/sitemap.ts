import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { getAllServices } from '@/lib/services'
import { siteUrl } from '@/lib/site'

// Update a date here when that page's content really changes.
const routes: { path: string; lastModified: string }[] = [
  { path: '/', lastModified: '2026-10-23' },
  { path: '/services', lastModified: '2026-10-23' },
  { path: '/work', lastModified: '2026-10-23' },
  { path: '/work/society-ledger', lastModified: '2026-10-23' },
  { path: '/blog', lastModified: '2026-10-23' },
  { path: '/pricing', lastModified: '2026-10-23' },
  { path: '/about', lastModified: '2026-10-23' },
  { path: '/process', lastModified: '2026-10-23' },
  { path: '/why-me', lastModified: '2026-10-23' },
  { path: '/contact', lastModified: '2026-10-23' },
  { path: '/privacy', lastModified: '2026-10-22' },
  { path: '/terms', lastModified: '2026-10-22' },
]

// Service pages share one date until one of them changes on its own.
const servicesModified = '2026-10-23'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map(({ path, lastModified }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(lastModified),
  }))
  const services = getAllServices().map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date(servicesModified),
  }))
  const posts = getAllPosts().map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
  }))
  return [...pages, ...services, ...posts]
}
