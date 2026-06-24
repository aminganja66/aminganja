'use client'

export default function Hero() {
  const skills = [
    'Flutter',
    'Supabase',
    'AI Features',
    'Mobile Apps',
    'SaaS Platforms',
  ]

  // Duplicate for seamless loop
  const repeatedSkills = [...skills, ...skills]

  return (
    <section className="w-full flex items-center justify-center px-4 pt-32 pb-16 md:pt-48 md:pb-24 bg-background relative overflow-hidden">
      <div className="max-w-4xl w-full space-y-8 md:space-y-12">
        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center text-balance leading-tight">
            Launch Your MVP in <br className="hidden md:block" />
            <span className="text-5xl md:text-7xl lg:text-8xl">4–6 Weeks</span>
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-center text-gray-400 text-lg md:text-xl max-w-2xl mx-auto text-balance">
          I help founders turn ideas into working products — without hiring a full development team.
        </p>

        {/* Auto-scrolling Tech Stack */}
        <div className="w-full pt-8">
          <div className="relative">
            {/* Left mask */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
            {/* Right mask */}
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10"></div>

            {/* Scrolling container */}
            <div className="overflow-hidden">
              <div className="flex gap-6 md:gap-8 scroll-animate">
                {repeatedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 md:gap-6 whitespace-nowrap"
                  >
                    <span className="text-base md:text-lg text-gray-300 font-medium">
                      {skill}
                    </span>
                    {index < repeatedSkills.length - 1 && (
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-8">
          <button className="px-8 md:px-10 py-3 md:py-4 bg-white text-black rounded-full font-semibold text-base md:text-lg hover:bg-accent transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            See My Work
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
