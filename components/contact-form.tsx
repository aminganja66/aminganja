'use client'

import { useState } from 'react'

const CONTACT_EMAIL = 'amin.ganja@outlook.com'
const inputClass =
  'w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
      setFormData({ name: '', email: '', message: '', website: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-16" role="status">
        <div className="text-4xl mb-4">✓</div>
        <h2 className="text-xl font-bold text-white mb-2">Message sent</h2>
        <p className="text-gray-400">Thanks for reaching out. I&apos;ll reply within a day.</p>
      </div>
    )
  }

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Message from ${formData.name || 'the website'}`)}&body=${encodeURIComponent(formData.message)}`

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">Your name</label>
        <input id="contact-name" type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required maxLength={120} className={inputClass} placeholder="Jane Doe" />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">Your email</label>
        <input id="contact-email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required maxLength={200} className={inputClass} placeholder="jane@example.com" />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">Tell me about your project</label>
        <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required minLength={10} maxLength={5000} rows={5} className={`${inputClass} resize-none`} placeholder="Who is the app for, and when does your pilot start?" />
      </div>
      {/* Spam trap: hidden from people, visible to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
      </div>
      {status === 'error' && (
        <p role="alert" className="text-sm text-red-300">
          Your message didn&apos;t go through. Please try again, or{' '}
          <a href={mailto} className="underline underline-offset-2 hover:text-white">email me directly</a>.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p className="text-xs text-gray-500 text-center">
        I use your details only to reply to you. <a href="/privacy" className="underline underline-offset-2 hover:text-white">Privacy policy</a>
      </p>
    </form>
  )
}
