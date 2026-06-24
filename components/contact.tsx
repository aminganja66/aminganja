'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="w-full px-4 py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section header */}
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-xs text-white font-semibold">05</span>
              </div>
            </div>
            <h2 className="text-sm md:text-base text-gray-400 font-semibold uppercase tracking-wide">
              Get in Touch
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Let&apos;s Talk</h3>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
              Have an idea? Let&apos;s discuss how I can help bring it to life.
            </p>
          </div>

          {/* Contact form */}
          <div className="p-8 md:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✓</div>
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tell me about your project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors resize-none"
                    placeholder="Share your idea, timeline, and budget..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-accent transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Email</h4>
              <a href="mailto:amin.ganja@outlook.com" className="text-lg font-semibold text-white hover:text-accent transition-colors">
                amin.ganja@outlook.com
              </a>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-sm text-gray-400 uppercase tracking-wide mb-2">Social</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/amin-ganja" target="_blank" className="text-white hover:text-accent transition-colors">
                  LinkedIn
                </a>
                <span className="text-gray-600">·</span>
                <a href="#" target="_blank" className="text-white hover:text-accent transition-colors">
                  Twitter
                </a>
                <span className="text-gray-600">·</span>
                <a href="https://github.com/aminganja66" target="_blank" className="text-white hover:text-accent transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © 2024 Your Name. All rights reserved. | Made with passion for founders.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
