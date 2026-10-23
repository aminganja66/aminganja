export type Service = {
  slug: string
  name: string // short label for menus, cards and the footer
  title: string // <title>, keep it under 60 characters
  description: string // meta description, 120-160 characters
  h1: string
  summary: string // one line for cards
  intro: string[]
  audience: string
  features: { title: string; body: string }[]
  privacy: string[]
  faqs: { q: string; a: string }[]
  related: { label: string; href: string }[]
}

const services: Service[] = [
  {
    slug: 'pregnancy-postpartum-app-development',
    name: 'Pregnancy & postpartum apps',
    title: 'Pregnancy & Postpartum App Development | Amin Ganja',
    description:
      'I build private pregnancy and postpartum apps in Flutter for femtech startups and clinics: week-by-week content, symptom logs, care-team chat and FHIR records.',
    h1: 'Pregnancy and postpartum app development',
    summary: 'Week-by-week guidance, symptom and mood logs, and a line to the care team.',
    intro: [
      "Pregnancy apps hold some of the most personal data a phone will ever store. A due date, a scan, a missed appointment or a note about low mood can tell someone's story before she is ready to tell it herself. I build pregnancy and postpartum apps in Flutter, for iOS and Android from one codebase, with that in mind from the first screen.",
      "The projects I take on usually come from early femtech teams and clinical groups running a pilot: a prenatal program that wants patients to log blood pressure at home, a postpartum service that checks in on mood during the first weeks, or a startup that needs a first version in front of real users before its next funding round.",
    ],
    audience:
      'Founders and care teams who need a working app for a pilot or launch in the coming months, and want one developer accountable for the build from design to App Store release.',
    features: [
      {
        title: 'Week-by-week journey',
        body: 'Content that follows the pregnancy week or the days since birth, written by your clinical team and editable without a new app release.',
      },
      {
        title: 'Symptom, mood and vitals logs',
        body: 'Quick daily check-ins for blood pressure, weight, sleep or mood, with screening questionnaires such as the EPDS if your clinicians use them.',
      },
      {
        title: 'Care-team view and secure messages',
        body: 'Patient and clinician roles, so a midwife or nurse can see the readings that need attention without exporting spreadsheets.',
      },
      {
        title: 'Appointments and reminders',
        body: 'Reminders for scans, visits and medication that never show health details on the lock screen.',
      },
      {
        title: 'Hospital records through FHIR',
        body: 'When the app needs lab results or visit history, I connect it to the EHR through a FHIR R4 API and SMART on FHIR sign-in.',
      },
    ],
    privacy: [
      'Notifications say "You have a new update" and nothing more. The detail waits inside the app, behind login.',
      'No pregnancy or health details in crash logs, analytics events or ad SDKs.',
      'Data stored encrypted on the device and on a backend that will sign a BAA when HIPAA applies.',
      'An app lock option, for users who share a phone or a tablet with family.',
    ],
    faqs: [
      {
        q: 'How long does a pregnancy app take to build?',
        a: 'A focused pilot version usually takes weeks, not months. You get the exact timeline in writing with your fixed price, within 48 hours of our first call.',
      },
      {
        q: 'Can the app work for postpartum care only?',
        a: 'Yes. Many teams start with the fourth trimester, because that is where follow-up drops off. The same app can add prenatal features later.',
      },
      {
        q: 'Who writes the medical content?',
        a: 'Your clinical team or content partner. I build the system that shows the right content at the right week and lets you update it without waiting for an app store review.',
      },
    ],
    related: [
      { label: 'HIPAA compliant push notifications for pregnancy apps', href: '/blog/hipaa-compliant-push-notifications-pregnancy-apps' },
      { label: 'How to improve user engagement in a health tech app', href: '/blog/improve-user-engagement-health-tech-app' },
    ],
  },
  {
    slug: 'fertility-app-development',
    name: 'Fertility & cycle-tracking apps',
    title: 'Fertility & Cycle Tracking App Development | Amin Ganja',
    description:
      'Flutter developer for fertility, IVF and period-tracking apps. Cycle logs, treatment reminders and clinic connections, built so sensitive data stays private.',
    h1: 'Fertility and cycle-tracking app development',
    summary: 'Cycle and symptom logs, IVF treatment reminders and clinic connections.',
    intro: [
      'Cycle and fertility data became one of the most sensitive kinds of health data an app can hold. The FTC has taken action against fertility and period apps that shared it with advertisers, and users have noticed. If your app asks someone to log her cycle, she needs a good reason to trust it.',
      'I build fertility, IVF and cycle-tracking apps in Flutter for femtech startups and fertility clinics. One codebase covers iOS and Android, and privacy decisions are made at the start of the project, when they are cheap, instead of after launch.',
    ],
    audience:
      'Femtech founders building a cycle or fertility tracker, and fertility clinics that want patients to follow treatment plans, log injections and message the clinic from one app.',
    features: [
      {
        title: 'Cycle and symptom tracking',
        body: 'Fast daily logging for periods, symptoms, basal temperature and ovulation tests, with clear calendar and history views.',
      },
      {
        title: 'IVF treatment schedules',
        body: 'Medication and injection reminders that follow the protocol your clinic sets, with discreet wording on the lock screen.',
      },
      {
        title: 'Clinic connection',
        body: 'Patient and care-team roles, secure messages, and FHIR integration when the clinic system exposes lab results or appointments.',
      },
      {
        title: 'Wearables and Health data',
        body: 'Optional import from Apple Health or Health Connect, only for the data types the user agrees to share.',
      },
    ],
    privacy: [
      'No cycle, pregnancy-attempt or treatment details sent to analytics or advertising tools.',
      'Analytics event names that describe the screen, not the health state ("log_saved", never "ovulation_positive").',
      'Clear export and delete options, so users can take their data with them or remove it.',
      'Encrypted storage, and a backend that will sign a BAA when a clinic is involved.',
    ],
    faqs: [
      {
        q: 'Does a period tracker need HIPAA compliance?',
        a: 'Often not, if no clinic or health plan is involved. The FTC Health Breach Notification Rule and state privacy laws can still apply to cycle data, so the app should be built as if it were covered. A privacy lawyer should confirm which rules apply to you.',
      },
      {
        q: 'Can you build cycle predictions?',
        a: 'I can build the logic your team specifies and show it clearly in the app. Medical claims and prediction methods should be signed off by your clinical advisors.',
      },
      {
        q: 'Can the app grow from tracking into a clinic product?',
        a: 'Yes. I structure the data so care-team roles and FHIR connections can be added later without rewriting the app.',
      },
    ],
    related: [
      { label: 'HIPAA compliant push notifications for pregnancy apps', href: '/blog/hipaa-compliant-push-notifications-pregnancy-apps' },
      { label: 'Women\'s health app development pricing', href: '/pricing' },
    ],
  },
  {
    slug: 'menopause-app-development',
    name: 'Menopause apps',
    title: 'Menopause App Development for Startups | Amin Ganja',
    description:
      'I build menopause and perimenopause apps in Flutter: symptom tracking, care plans, coaching and clinician check-ins, with health data kept private by default.',
    h1: 'Menopause app development',
    summary: 'Symptom tracking, care plans and check-ins with clinicians or coaches.',
    intro: [
      'Menopause care has been underserved for a long time, and a growing number of startups and clinics are building digital programs for it. These apps tend to run for months or years, so the hard part is keeping people coming back after the first week.',
      'I build menopause and perimenopause apps in Flutter for iOS and Android. The focus is on fast symptom logging, a clear picture of change over time, and an easy way to reach a clinician or coach when something gets worse.',
    ],
    audience:
      'Startups and clinical teams launching a menopause program, whether that is a coaching service, a telehealth clinic or an employer health benefit.',
    features: [
      {
        title: 'Symptom tracking that takes seconds',
        body: 'Hot flushes, sleep, mood, joint pain and cycle changes logged in a few taps, with trends a user can show her doctor.',
      },
      {
        title: 'Care plans and education',
        body: 'Programs and articles from your clinical team, delivered in the right order and editable without an app update.',
      },
      {
        title: 'Clinician and coach check-ins',
        body: 'Secure messages, appointment booking and a care-team view of the symptoms that matter.',
      },
      {
        title: 'Payments and subscriptions',
        body: 'Stripe or Razorpay for programs and consultations, kept separate from health records.',
      },
    ],
    privacy: [
      'Health details kept out of notifications, logs and analytics.',
      'Encrypted storage on the device and on a backend that will sign a BAA when HIPAA applies.',
      'Role-based access, so a coach sees only what the plan needs and a clinician sees the medical record.',
    ],
    faqs: [
      {
        q: 'Can a menopause app connect to medical records?',
        a: 'Yes, if the clinic system has a FHIR R4 API. I use SMART on FHIR for sign-in and only request the record types the app needs.',
      },
      {
        q: 'Do you build for employer health programs?',
        a: 'Yes. Employer programs need extra care with privacy, because the employer must never see individual health data. I design the roles and reports with that rule from the start.',
      },
      {
        q: 'What does a menopause app cost to build?',
        a: 'It depends on the features in your first version. After a 20-minute call you get a written scope and one fixed price within 48 hours.',
      },
    ],
    related: [
      { label: 'How to improve user engagement in a health tech app', href: '/blog/improve-user-engagement-health-tech-app' },
      { label: 'How I build women\'s health apps, step by step', href: '/process' },
    ],
  },
  {
    slug: 'hipaa-compliant-flutter-app-development',
    name: 'HIPAA compliant Flutter apps',
    title: 'HIPAA Compliant Flutter App Development | Amin Ganja',
    description:
      'Building a HIPAA compliant Flutter app? I build health apps to the HIPAA Security Rule safeguards, with encrypted storage, audit logs and BAA-ready backends.',
    h1: 'HIPAA compliant Flutter app development',
    summary: 'Flutter apps built to the HIPAA Security Rule safeguards, with BAA-ready backends.',
    intro: [
      'Flutter lets a small team ship one app to iOS and Android, which is why so many health startups pick it. HIPAA does not care which framework you use. It cares where patient data goes, who can see it, and whether you can prove it.',
      "There is no official HIPAA certification for an app or a developer. What I do is build to the HIPAA Security Rule safeguards, help you choose hosting and backend services that will sign a business associate agreement (BAA), and document the decisions so your compliance advisor can review them.",
    ],
    audience:
      'Health startups and clinics that work with protected health information, or expect to, and want a Flutter app that will hold up to a security review.',
    features: [
      {
        title: 'Secure sign-in',
        body: 'Strong authentication, session timeouts, optional biometric unlock, and SMART on FHIR sign-in when the app connects to an EHR.',
      },
      {
        title: 'Encryption on the device and on the server',
        body: 'Sensitive data stored in encrypted storage on the phone, and encrypted at rest and in transit on the backend.',
      },
      {
        title: 'Access control and audit logs',
        body: 'Patient, clinician and admin roles enforced on the server, with a record of who opened which record and when.',
      },
      {
        title: 'BAA-ready backend choices',
        body: 'Supabase, Google Cloud or AWS set up on plans that offer a BAA, with the HIPAA-eligible services only.',
      },
      {
        title: 'Leak checks before every release',
        body: 'A checklist for push notifications, crash reports, analytics events and third-party SDKs, the places patient data most often escapes.',
      },
    ],
    privacy: [
      'Minimum necessary data: the app only collects and shows what each role needs.',
      'No protected health information in push payloads, crash logs or analytics.',
      'A written summary of the security decisions, handed over with the code.',
    ],
    faqs: [
      {
        q: 'Is Flutter HIPAA compliant?',
        a: 'Flutter is a UI framework, so compliance depends on how the app stores, sends and logs data, and on the backend and vendors you choose. A Flutter app can meet the same safeguards as a native one.',
      },
      {
        q: 'Can I use Supabase for a HIPAA app?',
        a: 'Supabase offers a BAA on its paid plans, with extra configuration required. I set it up that way and keep row-level security on every table that holds patient data.',
      },
      {
        q: 'Will I need a BAA with you?',
        a: 'Often not. In most projects I build and test with sample data only, so real patient data never reaches development. If your project does need me to handle protected health information, we cover it on our first call.',
      },
    ],
    related: [
      { label: 'HIPAA compliant push notifications for pregnancy apps', href: '/blog/hipaa-compliant-push-notifications-pregnancy-apps' },
      { label: 'Why women\'s health teams work with me', href: '/why-me' },
    ],
  },
]

export function getAllServices(): Service[] {
  return services
}

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
