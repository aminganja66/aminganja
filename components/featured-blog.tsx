'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import BlogCard from '@/components/blog-card'
import type { Post } from '@/lib/blog'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function FeaturedBlog({ post }: { post: Post }) {

  return (
    <section
      id="blog"
      className="relative isolate w-full bg-background px-4 md:px-8 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[26rem] h-[26rem] rounded-full bg-white/[0.04] blur-[120px] top-0 left-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glassmorphism inline-flex items-center gap-2 rounded-full px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">From the blog</span>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
          className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance"
        >
          Notes on building health apps
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.16 }}
          className="mt-10 w-full text-left"
        >
          <BlogCard post={post} />
        </motion.div>

        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
        >
          See all articles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
