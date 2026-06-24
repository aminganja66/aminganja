export default function MyWork() {
  const caseStudies = [
    {
      id: 1,
      title: 'FinTech SaaS Platform',
      description: 'Built a real-time financial dashboard for SMBs with automated reporting.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      metrics: '50K+ users',
      image: '🏦',
    },
    {
      id: 2,
      title: 'Mobile Fitness App',
      description: 'Flutter app with AI-powered workout recommendations and community features.',
      tech: ['Flutter', 'Firebase', 'TensorFlow'],
      metrics: '100K downloads',
      image: '💪',
    },
    {
      id: 3,
      title: 'SaaS Analytics Tool',
      description: 'Real-time analytics platform for e-commerce businesses with custom dashboards.',
      tech: ['Next.js', 'Supabase', 'TypeScript'],
      metrics: '200% growth',
      image: '📊',
    },
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

          {/* Case studies grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group p-6 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl md:text-5xl mb-4">{study.image}</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
                  {study.description}
                </p>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-white/10 border border-white/20 text-gray-300 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-accent font-semibold">{study.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
