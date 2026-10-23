import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllServices } from '@/lib/services'

export default function Services() {
  return (
    <section id="services" className="relative isolate w-full bg-background px-4 md:px-8 pb-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center text-balance">
          The apps I build
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-400 text-center max-w-2xl mx-auto leading-relaxed text-balance">
          Flutter apps for iOS and Android, for femtech startups and the clinics they work with.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {getAllServices().map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">{s.name}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{s.summary}</p>
              <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
