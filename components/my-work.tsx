export default function MyWork() {
  const tech = ['Flutter', 'Supabase', 'BLoC', 'GoRouter', 'GetIt', 'OneSignal']
  const stats = [
    '12+ Database Tables',
    '44+ Supabase RPCs',
    '3 User Roles',
    'Multi-Society Support',
  ]

  return (
    <section id="my-work" className="w-full px-4 py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-xs text-white font-semibold">02</span>
              </div>
              <p className="text-sm md:text-base text-gray-400 font-semibold uppercase tracking-wide">
                My Work
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Recent Case Studies</h2>
          </div>

          {/* SocietyLedger case study */}
          <div className="group p-6 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-white/20 transition-all duration-300">
            {/* Tag */}
            <div className="mb-4">
              <span className="px-2 py-1 text-xs bg-white/10 border border-white/20 text-gray-300 rounded-lg">
                Case Study · In Progress
              </span>
            </div>

            {/* Title + one-liner */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">SocietyLedger</h3>
            <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
              Society management and expense tracking app for residential communities in India.
            </p>

            {/* Problem / Solution */}
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Problem</p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Residential societies had no simple way to manage maintenance dues, payments, member records, and announcements across multiple flats and roles.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Solution</p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  A multi-role Flutter mobile app with Super Admin, Society Admin, and Member/Tenant roles. Real-time data, push notifications, maintenance payment tracking, and full Supabase backend.
                </p>
              </div>
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tech.map((t) => (
                <span key={t} className="px-2 py-1 text-xs bg-white/10 border border-white/20 text-gray-300 rounded-lg">
                  {t}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {stats.map((stat) => (
                <div key={stat} className="p-3 rounded-xl border border-white/10 bg-white/5 text-center">
                  <p className="text-xs md:text-sm font-semibold text-white">{stat}</p>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <p className="text-sm text-accent font-semibold">
              Full case study coming soon — MVP architecture complete.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
