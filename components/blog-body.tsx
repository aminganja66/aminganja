import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Block } from '@/lib/blog'

const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g

function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  linkRe.lastIndex = 0
  while ((m = linkRe.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    const [, label, href] = m
    const cls = 'text-white underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors'
    parts.push(
      href.startsWith('/') ? (
        <Link key={m.index} href={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={m.index} href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ),
    )
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}

export default function BlogBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5 text-base md:text-lg leading-relaxed text-gray-300">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return (
              <h2 key={i} className="pt-8 text-2xl md:text-3xl font-bold text-white text-balance">
                {b.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} className="pt-4 text-xl font-semibold text-white text-balance">
                {b.text}
              </h3>
            )
          case 'p':
            return (
              <p key={i}>
                <Inline text={b.text} />
              </p>
            )
          case 'ul':
            return (
              <ul key={i} className="list-disc pl-6 space-y-2 marker:text-gray-500">
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} />
                  </li>
                ))}
              </ul>
            )
          case 'note':
            return (
              <p key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-400">
                <Inline text={b.text} />
              </p>
            )
          case 'img':
            return (
              <figure key={i} className="my-8">
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-gray-500">
                  {b.caption} Photo:{' '}
                  <a href={b.creditUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                    {b.credit}
                  </a>
                </figcaption>
              </figure>
            )
        }
      })}
    </div>
  )
}
