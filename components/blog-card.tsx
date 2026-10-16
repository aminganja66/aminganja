import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { formatDate, readingMinutes, type Post } from '@/lib/blog'

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/25 transition-colors"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0d0d0d] border-b border-white/10">
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-gray-300">{post.category}</span>
          <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
          <span>{readingMinutes(post)} min read</span>
        </div>
        <h3 className="mt-3 text-xl md:text-2xl font-bold text-white text-balance">{post.title}</h3>
        <p className="mt-2 text-sm md:text-base text-gray-400 leading-relaxed">{post.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white">
          Read the article
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  )
}
