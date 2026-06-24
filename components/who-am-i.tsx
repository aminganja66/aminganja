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
                Hi, I&apos;m Amin.
              </h2>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I help startup founders transform ideas into production-ready MVPs—without the complexity of hiring and managing a full development team.
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
                    <span className="font-semibold text-white">4+ years</span> building mobile apps, business systems, and SaaS products with Flutter, Supabase, and AI tools
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
                </div>
                <div>
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="font-semibold text-white">Fast validation</span> — build only what&apos;s needed to test your hypothesis and attract early users
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
                </div>
                <div>
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="font-semibold text-white">Scalable foundations</span> — solid code that grows with your business
                  </p>
                </div>
              </div>
            </div>

            {/* Main value prop */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Whether you&apos;re a non-technical founder or a startup looking to accelerate, I transform your vision into working products in <span className="font-semibold text-white">weeks, not months.</span> My approach is simple: understand the problem, build only what matters for validation, and deliver a solid foundation that scales.
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
