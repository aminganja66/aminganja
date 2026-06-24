'use client'

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: '30 minutes. I understand your idea, target users, and MVP scope. No fluff.',
  },
  {
    num: '02',
    title: 'Scope & Stack',
    desc: 'I define what we build in V1, the Supabase schema, and the Flutter app structure. You get a clear spec.',
  },
  {
    num: '03',
    title: 'Build Sprint',
    desc: 'I ship in focused sprints. You see real screens, real data — not mockups — within days.',
  },
  {
    num: '04',
    title: 'Review & Iterate',
    desc: 'Weekly check-ins. You test on your phone. We adjust fast.',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'App Store, Play Store, or internal TestFlight. Production Supabase. You own everything.',
  },
]

export default function HowIWork() {
  return (
    <section id="how-i-work" className="w-full bg-background px-4 md:px-8 py-16 md:py-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <p className="text-base md:text-lg text-gray-300 mb-4">
          How I build Flutter + Supabase MVPs for startup founders:
        </p>

        {/* Section label */}
        <div className="text-xs md:text-sm text-gray-400 font-semibold tracking-widest uppercase mb-12 md:mb-16">
          The Process
        </div>

        {/* Main layout: left statement + right steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: anchor statement */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
              From idea to app store — here&apos;s how we get there.
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-md">
              No long discovery phases. No back-and-forth agencies. Just fast, structured execution.
            </p>
          </div>

          {/* Right: vertical step flow */}
          <div>
            {steps.map((step, idx) => (
              <div key={step.num} className="flex gap-5 md:gap-6">
                {/* Node + connector line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.06] flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-white/50 font-mono">{step.num}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-px flex-1 min-h-[28px] my-2 bg-gradient-to-b from-white/15 to-white/5" />
                  )}
                </div>

                {/* Step content */}
                <div className={`flex-1 ${idx < steps.length - 1 ? 'pb-8' : ''}`}>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1.5 mt-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width callout bar */}
        <div className="mt-16 md:mt-20 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/0 px-8 md:px-12 py-6 md:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base text-gray-300 font-medium tracking-wide text-center sm:text-left">
            Flutter &nbsp;·&nbsp; Supabase BaaS &nbsp;·&nbsp; BLoC + Clean Architecture &nbsp;·&nbsp; AI-Augmented &nbsp;·&nbsp; You own the code
          </p>
          <p className="text-xs md:text-sm text-gray-500 whitespace-nowrap flex-shrink-0 italic">
            Most MVPs: 4–8 weeks
          </p>
        </div>
      </div>
    </section>
  )
}
