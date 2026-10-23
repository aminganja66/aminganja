// The one place the site address lives. NEXT_PUBLIC_SITE_URL can override it, for example on a staging deployment.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aminganja.com').replace(/\/$/, '')

// Keep this in sync with LinkedIn, GitHub and any other profile that mentions experience.
export const EXPERIENCE = '5 years'

// Token from Google Search Console's "HTML tag" method. Leave empty when the domain is verified through DNS.
export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || ''

// Swap this for your Cal.com or Calendly link once it exists.
// Until then the buttons scroll to the contact form.
export const BOOKING_URL = '#contact'

export const faqs = [
  {
    q: 'Are you HIPAA certified?',
    a: "There's no official HIPAA certification for developers. I build to the HIPAA Security Rule safeguards and help you choose hosting and backend tools that will sign a BAA. Your compliance officer or legal advisor confirms final compliance.",
  },
  {
    q: "Does my women's health app need to be HIPAA compliant?",
    a: "It depends on who you work with. HIPAA covers healthcare providers, health plans and the companies that work for them. A consumer app with no clinic or insurer behind it usually falls outside HIPAA, but the FTC and some state privacy laws can still apply to pregnancy, fertility and cycle data. If a clinic or health plan hires you, HIPAA usually applies. A privacy lawyer should confirm which rules fit your case.",
  },
  {
    q: 'Which EHRs can the app connect to?',
    a: 'Any system with a FHIR R4 API. I test against the SMART on FHIR sandbox, and I can work in the Epic or Cerner sandboxes on request.',
  },
  {
    q: 'Will you work on my project full time?',
    a: 'I take one client project at a time, with dedicated hours and clear weekly milestones.',
  },
]
