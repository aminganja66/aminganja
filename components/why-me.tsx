export default function WhyMe() {
  const reasons = [
    {
      id: 1,
      title: 'Founder-Focused Development',
      description: 'I understand startups need speed, validation, and flexibility. My goal is to help you launch and learn from real users quickly.',
      icon: 'Target',
    },
    {
      id: 2,
      title: 'End-to-End MVP Delivery',
      description: 'From planning and architecture to development and deployment, I handle the complete process so you focus on growing.',
      icon: 'Package',
    },
    {
      id: 3,
      title: 'Fast Iteration',
      description: 'Startups evolve quickly. I build with flexible architecture that lets you add, modify, or improve features without rebuilding.',
      icon: 'Zap',
    },
    {
      id: 4,
      title: 'Modern Technology Stack',
      description: 'Scalable, maintainable, and cost-effective solutions using modern tools built for real-world production usage.',
      icon: 'Layers',
    },
    {
      id: 5,
      title: 'Clear Communication',
      description: 'You&apos;ll always know what&apos;s being built, what stage it&apos;s in, and what comes next. No technical jargon.',
      icon: 'MessageSquare',
    },
    {
      id: 6,
      title: 'Long-Term Partnership',
      description: 'I don&apos;t disappear after launch. I continue supporting, improving, and scaling your product as you grow.',
      icon: 'Handshake',
    },
  ]

  const renderIcon = (iconName: string) => {
    const iconProps = 'w-6 h-6 stroke-current'
    switch (iconName) {
      case 'Target':
        return (
          <svg className={iconProps} fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
          </svg>
        )
      case 'Package':
        return (
          <svg className={iconProps} fill="none" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" strokeWidth="1.5" />
          </svg>
        )
      case 'Zap':
        return (
          <svg className={iconProps} fill="none" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="1.5" />
          </svg>
        )
      case 'Layers':
        return (
          <svg className={iconProps} fill="none" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="1.5" />
            <path d="M2 17l10 5 10-5" strokeWidth="1.5" />
            <path d="M2 12l10 5 10-5" strokeWidth="1.5" />
          </svg>
        )
      case 'MessageSquare':
        return (
          <svg className={iconProps} fill="none" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="1.5" />
          </svg>
        )
      case 'Handshake':
        return (
          <svg className={iconProps} fill="none" viewBox="0 0 24 24">
            <path d="M17 12h-5v2h5v-2z" strokeWidth="1.5" />
            <path d="M9 9h.01" strokeWidth="1.5" />
            <path d="M9 13h.01" strokeWidth="1.5" />
            <path d="M9 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4H9z" strokeWidth="1.5" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="why-me" className="w-full px-4 py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Section header */}
          <div className="space-y-4">
            <div className="inline-block">
              <div className="text-xs md:text-sm text-gray-400 font-semibold tracking-widest uppercase">
                Why Work With Me
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              What Makes Me Different
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl">
              I&apos;m not just a developer—I&apos;m a partner invested in your startup&apos;s success.
            </p>
          </div>

          {/* Reasons grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="group p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-white/30 hover:from-white/15 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 text-white/70 group-hover:text-white transition-colors">
                  {renderIcon(reason.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 p-8 md:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to build something great?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-base md:text-lg">
              Let&apos;s discuss your vision and see if we&apos;re a perfect fit to work together on your next MVP.
            </p>
            <button className="px-8 md:px-10 py-3 md:py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
