'use client'

export default function Offer() {
  const packages = [
    {
      name: 'MVP Launch Package',
      description: 'Perfect for founders ready to validate their idea',
      badge: 'MOST POPULAR',
      highlighted: true,
      features: [
        'User Authentication',
        'Core Product Features',
        'Admin Dashboard',
        'Database & Backend',
        'Mobile App or Web App',
        'Deployment',
        'Analytics Setup',
      ],
    },
    {
      name: 'Growth Package',
      description: 'Scale your MVP with advanced features',
      badge: 'ACCELERATE',
      highlighted: false,
      features: [
        'Everything in MVP Launch',
        'Payment Integration',
        'Notifications',
        'Advanced User Roles',
        'AI Features',
        'Performance Optimization',
      ],
    },
    {
      name: 'Long-Term Partnership',
      description: 'Ongoing support as you scale',
      badge: 'SUPPORT',
      highlighted: false,
      features: [
        'Feature Development',
        'Bug Fixes',
        'Product Improvements',
        'Technical Support',
        'Scaling Assistance',
      ],
    },
  ]

  return (
    <section id="offer" className="w-full bg-background px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block">
            <div className="text-xs md:text-sm text-gray-400 font-semibold tracking-widest uppercase">
              Service Packages
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Simple, Transparent Packages
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the package that fits your needs. All include full technical support and quality guarantee.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border transition-all duration-300 overflow-hidden group ${
                pkg.highlighted
                  ? 'border-white/40 bg-gradient-to-br from-white/15 to-white/5 md:scale-105 shadow-2xl'
                  : 'border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-white/30 hover:from-white/10'
              }`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 group-hover:from-white/5 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative p-8 md:p-10 flex flex-col h-full">
                {/* Badge */}
                {pkg.badge && (
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase ${
                      pkg.highlighted
                        ? 'bg-white/20 text-white'
                        : 'bg-white/10 text-gray-300'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Title and Description */}
                <div className="space-y-3 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 flex-1">
                  {pkg.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-gray-300 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full mt-8 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-xl'
                    : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/10'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-gray-400 text-base md:text-lg">
            Not sure which package? Let&apos;s discuss your project.
          </p>
          <button className="px-8 py-3 md:py-4 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
