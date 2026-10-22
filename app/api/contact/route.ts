import { NextResponse } from 'next/server'

// Sends the contact form through Resend. Set these in the hosting dashboard:
//   RESEND_API_KEY    your Resend API key
//   CONTACT_TO_EMAIL  the inbox that should receive messages
//   CONTACT_FROM      optional sender, e.g. "Amin Ganja <hello@yourdomain.com>" (needs a verified domain)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_request' }, { status: 400 })
  }

  // Hidden field that real visitors never fill in. Bots usually do.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const name = String(body.name ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, 120)
  const email = String(body.email ?? '').trim().slice(0, 200)
  const message = String(body.message ?? '').trim().slice(0, 5000)

  if (!name || !emailPattern.test(email) || message.length < 10) {
    return NextResponse.json({ error: 'invalid_fields' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    return NextResponse.json({ error: 'not_configured' }, { status: 503 })
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || 'Website contact form <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    })
    if (!res.ok) return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  } catch {
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
