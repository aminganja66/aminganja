'use client'

import Image from 'next/image'

export default function WhoAmI() {
  return (
    <section id="who-am-i" className="w-full bg-background px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-center">
          {/* Right side - Content */}
          <div className="space-y-8 order-1 md:order-2">
            {/* Section label */}
            <div className="inline-block">
              <div className="text-xs md:text-sm text-gray-400 font-semibold tracking-widest uppercase">
                About Me
              </div>
            </div>

            {/* Main intro */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I&apos;m Amin Ganja — Flutter Developer in Ahmedabad.
              </h2>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I help startup founders ship production-ready mobile apps without hiring a full development team. With 4+ years of Flutter development experience, I build everything from UI to backend — using Supabase as BaaS for auth, database, storage, and real-time features.
              </p>
            </div>

            {/* Key highlights with bullets */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
                </div>
                <div>
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="font-semibold text-white">4+ Years Flutter</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
                </div>
                <div>
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="font-semibold text-white">Supabase BaaS Expert</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
                </div>
                <div>
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="font-semibold text-white">AI-Augmented Development</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Main value prop */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                I work with AI tools to move fast — but this isn&apos;t vibe coding. Every app is built with Clean Architecture, BLoC state management, and a scalable Supabase backend. I call it AI-Augmented Development: the speed of AI with the discipline of a senior engineer.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="px-8 py-3 md:py-4 rounded-lg bg-white text-black font-semibold text-base md:text-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Let&apos;s Build Together
              </button>
            </div>
          </div>
          {/* Left side - Image */}
          <div className="flex items-center justify-center order-2 md:order-1">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none rounded-3xl"></div>

              <Image
                src="/amin-nobg.png"
                alt="Amin - MVP Developer for Startups"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
