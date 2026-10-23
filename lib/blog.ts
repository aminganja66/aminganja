import { siteUrl } from '@/lib/site'

export { siteUrl }

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'note'; text: string }
  | {
      type: 'img'
      src: string
      alt: string
      caption: string
      credit: string
      creditUrl: string
    }

export type Post = {
  slug: string
  title: string
  seoTitle?: string // full <title> when "title | Amin Ganja" would run past 60 characters
  description: string
  category: string
  service?: string // slug of the matching /services page, linked from the end of the post
  datePublished: string // ISO date
  dateModified: string
  // credit is only for stock photos; leave it out for images made for the site
  cover: { src: string; alt: string; credit?: string; creditUrl?: string }
  ogImage?: string // 1200x630 share image; falls back to a crop of the cover
  sources: { label: string; href: string }[]
  body: Block[]
}

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`

const posts: Post[] = [
  {
    slug: 'hipaa-compliant-push-notifications-pregnancy-apps',
    title: 'HIPAA Compliant Push Notifications for Pregnancy Apps',
    seoTitle: 'HIPAA Compliant Push Notifications for Pregnancy Apps',
    service: 'pregnancy-postpartum-app-development',
    description:
      "HIPAA compliant push notifications for pregnancy and women's health apps, plus two quieter leaks founders miss: crash logs and analytics event names.",
    category: 'Privacy',
    datePublished: '2026-10-23',
    dateModified: '2026-10-23',
    cover: {
      src: '/blog/hipaa-compliant-push-notifications-pregnancy-apps.jpg',
      alt: 'Two pregnancy app push notifications on a locked phone: one leaks "Week 7: your baby is the size of a blueberry", the private one says "You have a new update"',
    },
    ogImage: '/blog/hipaa-compliant-push-notifications-pregnancy-apps-og.jpg',
    sources: [
      {
        label:
          'FTC (2021), Developer of Popular Women\'s Fertility-Tracking App Settles FTC Allegations that It Misled Consumers About the Disclosure of their Health Data (Flo Health)',
        href: 'https://www.ftc.gov/news-events/news/press-releases/2021/01/developer-popular-womens-fertility-tracking-app-settles-ftc-allegations-it-misled-consumers-about',
      },
      {
        label:
          'FTC (2023), Ovulation Tracking App Premom Will be Barred from Sharing Health Data for Advertising Under Proposed FTC Order',
        href: 'https://www.ftc.gov/news-events/news/press-releases/2023/05/ovulation-tracking-app-premom-will-be-barred-sharing-health-data-advertising-under-proposed-ftc',
      },
      {
        label:
          'FTC (2023), FTC Enforcement Action to Bar GoodRx from Sharing Consumers\' Sensitive Health Info for Advertising',
        href: 'https://www.ftc.gov/news-events/news/press-releases/2023/02/ftc-enforcement-action-bar-goodrx-sharing-consumers-sensitive-health-info-advertising',
      },
      {
        label: 'FTC (2024), FTC Finalizes Changes to the Health Breach Notification Rule',
        href: 'https://www.ftc.gov/news-events/news/press-releases/2024/04/ftc-finalizes-changes-health-breach-notification-rule',
      },
      {
        label: 'Android Developers, Create a notification: Set lock screen visibility',
        href: 'https://developer.android.com/develop/ui/views/notifications/build-notification',
      },
      {
        label: 'Apple Developer Documentation, hiddenPreviewsBodyPlaceholder (UNNotificationCategory)',
        href: 'https://developer.apple.com/documentation/usernotifications/unnotificationcategory/hiddenpreviewsbodyplaceholder',
      },
      {
        label: 'Courier, HIPAA-compliant notifications',
        href: 'https://www.courier.com/blog/hipaa-compliant-notifications',
      },
      {
        label: 'Google Cloud, HIPAA compliance on Google Cloud (list of covered products)',
        href: 'https://docs.cloud.google.com/docs/security/compliance/hipaa',
      },
      {
        label:
          'Hassan et al. (2024), What is in Your App? Uncovering Privacy Risks of Female Health Applications, CHI EA \'24 (arXiv 2310.14490)',
        href: 'https://ar5iv.labs.arxiv.org/html/2310.14490',
      },
    ],
    body: [
      {
        type: 'p',
        text: 'A pregnancy app sends a friendly reminder: "Week 8: your baby is the size of a raspberry." It lands on a locked phone lying face up on a desk at work. Anyone walking past now knows something the user may not have told her own family yet.',
      },
      {
        type: 'p',
        text: "That leak came from a push notification, and it's one of the easiest privacy mistakes to make in a women's health app. If you're a founder trying to get HIPAA compliant push notifications right, most of the fix is about what goes in the message and where the details live. I'm Amin, a Flutter developer who builds patient apps that connect to clinical data. This post covers push notifications first, then two quieter leaks: crash logs and analytics event names.",
      },
      { type: 'h2', text: 'Why HIPAA compliant push notifications start with the lock screen' },
      {
        type: 'p',
        text: "Once a notification arrives, the phone decides where it shows up: the lock screen, a smartwatch, or a tablet the whole family shares, and your login screen can't stop any of that.",
      },
      {
        type: 'p',
        text: "The message also travels through Apple's or Google's push service. Courier, a notification company, points out that you usually have no business associate agreement (BAA) with those services, and that this covers the hidden data fields in the payload too.",
      },
      {
        type: 'p',
        text: 'In women\'s health, one line can say a lot. "Time for your progesterone shot" tells a coworker that someone is going through IVF.',
      },
      { type: 'h3', text: 'The Android detail most teams miss' },
      {
        type: 'p',
        text: 'Android lets an app choose how much of a notification shows on the lock screen. Google\'s documentation describes three levels. VISIBILITY_PUBLIC shows everything and VISIBILITY_SECRET shows nothing. VISIBILITY_PRIVATE is the one most teams pick, and it still shows the app icon and the notification title. Only the body is hidden.',
      },
      {
        type: 'p',
        text: 'So if your title says "Your glucose test result is ready", private mode does not protect you. The title has to be safe on its own. Android also lets you attach a second, safe version with setPublicVersion, and the lock screen shows that one instead. Google notes that the user always has final control over the lock screen, so don\'t depend on their settings either.',
      },
      { type: 'h3', text: 'What I would do on iOS' },
      {
        type: 'p',
        text: "iPhone users can hide notification previews, but as Courier puts it, that setting isn't yours to control. Apple gives developers hiddenPreviewsBodyPlaceholder, a property on a notification category that sets the placeholder text shown when previews are disabled. Set it, then write every notification as if previews are on.",
      },
      { type: 'h3', text: 'The pattern that works on both' },
      {
        type: 'ul',
        items: [
          'Write generic text, like "You have a new update from your care team" or "Time for today\'s check-in".',
          'Send a data-only push that carries an ID and nothing clinical, and let the app fetch the real content after the user logs in.',
          'Show the details inside the app, behind login or a biometric lock.',
          'If users can pick their reminder wording, make the most discreet option the default.',
        ],
      },
      {
        type: 'img',
        src: unsplash('photo-1514464750060-00e6e34c8b8c', 1400),
        alt: 'A person holding a smartphone in one hand',
        caption: 'Assume someone else can see the screen, and write every notification for that moment.',
        credit: 'Jamie Street on Unsplash',
        creditUrl: 'https://unsplash.com/photos/person-holding-phone-33oxtOMk6Ac',
      },
      { type: 'h2', text: 'Leak two: PHI in crash logs' },
      {
        type: 'p',
        text: 'Crash reporting tools like Crashlytics and Sentry record what the app was doing when it broke. Courier notes that they can capture request payloads and stack traces automatically. If a developer left a debug print with a patient name or a blood pressure reading, it can end up in a dashboard your whole team can open.',
      },
      {
        type: 'p',
        text: "Google Cloud publishes the list of products covered by its HIPAA BAA. When I checked it this week, Firestore was on it, but Firebase Analytics, Crashlytics and Cloud Messaging were not. The same page says that if you can't disable a service, you must not use it for PHI. You can still use Crashlytics, as long as nothing you send it is health data. That means a logger that redacts by default, no full API responses in logs, and internal IDs in place of names.",
      },
      { type: 'h2', text: 'Leak three: analytics event names' },
      {
        type: 'p',
        text: 'A developer adds an analytics event called pregnancy_week_8_viewed because it makes the funnel easy to read. Now an analytics vendor holds a list of pregnant users.',
      },
      {
        type: 'p',
        text: 'That is close to what the FTC described in the Flo Health case in 2021. Flo, a period and ovulation app used by more than 100 million people, sent health data, including the fact of a user\'s pregnancy, to companies such as Facebook and Google as "app events". The settlement required Flo to get users\' consent before sharing their health information.',
      },
      {
        type: 'p',
        text: "In 2023 the FTC said the fertility app Premom shared users' sexual and reproductive health data with AppsFlyer and Google through SDKs. Its developer agreed to pay a $100,000 civil penalty under the Health Breach Notification Rule. Earlier that year GoodRx agreed to a $1.5 million civil penalty in the FTC's first action under the same rule, for sharing health information with Facebook, Google and other companies.",
      },
      {
        type: 'p',
        text: 'A study presented at CHI 2024 looked at seven popular female health apps on Android. Five included Firebase Analytics, and none followed the principle of data minimization.',
      },
      {
        type: 'p',
        text: 'The fix is simple. Use neutral event names like content_viewed with an ID that only your own server can map back, and keep conditions and pregnancy weeks out of property values.',
      },
      { type: 'h2', text: 'HIPAA or the FTC Health Breach Notification Rule: which applies to you?' },
      {
        type: 'p',
        text: 'Plenty of consumer pregnancy and period apps aren\'t covered by HIPAA at all, and they still have rules to follow. The FTC updated its Health Breach Notification Rule in 2024 and said it applies to health apps and similar technologies that HIPAA does not cover. Under this rule a "breach" includes an unauthorized disclosure as well as a security incident. Sending pregnancy data to an ad platform without permission can count. Notices to users must go out within 60 calendar days of discovery, and if 500 or more people are affected, the FTC has to be told at the same time.',
      },
      {
        type: 'p',
        text: "If your app works with clinicians, or pulls a patient's records from a clinic's system over SMART on FHIR, HIPAA may apply as well, depending on your contracts with those clinics. Check where you sit with a qualified lawyer. The engineering advice is the same either way.",
      },
      { type: 'h2', text: "What I'm doing in BloomCare" },
      {
        type: 'p',
        text: "I'm building BloomCare, a prenatal blood pressure monitoring demo. It connects to a SMART on FHIR sandbox with synthetic test patients, so there are no real patients in it, and it's only a demo. I still treat the data as real, because habits carry over to client work.",
      },
      {
        type: 'ul',
        items: [
          'All logging goes through one small logger that redacts by default, so a reading or a patient name never reaches a crash report.',
          "Login tokens live in the phone's secure storage (Keychain on iOS, Keystore on Android).",
          'The app shows a blank screen in the app switcher and asks for Face ID or a fingerprint when you come back.',
          'This version sends no notifications. If it did, they would say "New readings to review" and nothing more.',
        ],
      },
      { type: 'h2', text: 'A 10-minute privacy check for founders' },
      {
        type: 'p',
        text: "All you need is a test phone and your developer, and you won't have to read any code.",
      },
      {
        type: 'ul',
        items: [
          'Lock the phone and trigger every notification type the app sends. Read each one as a stranger would.',
          'On Android, read the title by itself. That is what private mode still shows.',
          'Ask for the list of analytics event names and screen names. Look for pregnancy weeks, conditions, medications or symptoms.',
          'Open the crash reporting dashboard and read three recent crashes. Look for names, readings or whole API responses.',
          'List every SDK in the app. For each one that could see health data, ask whether you have a BAA with that vendor or whether the data is stripped out first.',
        ],
      },
      { type: 'h2', text: 'Questions founders ask' },
      { type: 'h3', text: 'Can a push notification contain PHI?' },
      {
        type: 'p',
        text: "It can, but it shouldn't. The text can appear on a lock screen or a smartwatch where others see it, and the payload passes through Apple's or Google's push service, which usually has no BAA with you. Send a generic message, then load the health details inside the app after the user logs in.",
      },
      { type: 'h3', text: 'Does HIPAA apply to my pregnancy app?' },
      {
        type: 'p',
        text: "It depends on who you serve and what your contracts say. Many consumer pregnancy and period apps are outside HIPAA, but the FTC's Health Breach Notification Rule covers health apps that HIPAA doesn't, and it treats unauthorized sharing as a breach. Apps that work with clinics may face both. Check your case with a qualified lawyer.",
      },
      { type: 'h3', text: 'Is Firebase Crashlytics HIPAA compliant?' },
      {
        type: 'p',
        text: "Crashlytics was not on Google Cloud's list of BAA-covered products when I checked in October 2026, and Google says not to use services outside that list for PHI. You can still use it for crash reports if no health data reaches it. Redact logs, breadcrumbs and custom keys before anything is sent.",
      },
      { type: 'h3', text: 'How do I hide notification content on the lock screen?' },
      {
        type: 'p',
        text: "On Android, use private visibility with a safe public version, and remember the title still shows. On iOS, set a placeholder for hidden previews, but don't count on users hiding them. On both, the safest setup is a generic message plus a data-only push that fetches the details after login.",
      },
      {
        type: 'p',
        text: "If you're building a pregnancy, fertility, postpartum or menopause app and want someone to run this check with you, [book a 20-minute call](/contact). We'll go through your app together and I'll tell you what I would change first. You can also read how I approach [pregnancy and postpartum app development](/services/pregnancy-postpartum-app-development) and [HIPAA compliant Flutter apps](/services/hipaa-compliant-flutter-app-development), see [how I work](/process), or message me on LinkedIn.",
      },
      {
        type: 'note',
        text: 'This is engineering guidance, not legal advice. The case details and penalty figures come from the FTC pages listed under Sources. Rules and vendor BAA lists change, so check the current versions before you rely on them.',
      },
    ],
  },
  {
    slug: 'improve-user-engagement-health-tech-app',
    title: 'How to Improve User Engagement in a Health Tech App',
    seoTitle: 'Health App User Engagement: What Works | Amin Ganja',
    service: 'menopause-app-development',
    description:
      "Most people stop using health apps within weeks. Here's what the research says about why, and the practical changes that help users stick around.",
    category: 'Health Tech',
    datePublished: '2026-10-07',
    dateModified: '2026-10-07',
    cover: {
      src: unsplash('photo-1762768767074-e491f1eebdfc'),
      alt: 'A smartphone and a smartwatch showing health data side by side',
      credit: 'Amanz on Unsplash',
      creditUrl:
        'https://unsplash.com/photos/smartphone-and-smartwatch-displaying-apps-on-screen-data-EmMbG6H-6Cc',
    },
    sources: [
      {
        label:
          'Amagai et al. (2022), Challenges in Participant Engagement and Retention Using Mobile Health Apps: Literature Review, Journal of Medical Internet Research',
        href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9092233/',
      },
      {
        label:
          'Jakob et al. (2022), Factors Influencing Adherence to mHealth Apps for Prevention or Management of Noncommunicable Diseases: Systematic Review, Journal of Medical Internet Research',
        href: 'https://www.jmir.org/2022/5/e35371',
      },
      {
        label:
          'Lee et al. (2018), Effect of self-monitoring on long-term patient engagement with mobile health applications, PLoS ONE',
        href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6062090/',
      },
    ],
    body: [
      {
        type: 'p',
        text: 'Here is a number that should bother anyone building a health app. A 2022 review of mobile health research by Amagai and colleagues cites an estimate that around 71% of app users disengage within 90 days.',
      },
      {
        type: 'p',
        text: "That's the default outcome, and a nicer colour palette won't change it. So the useful question is why people leave, and what gives them a reason to stay. I build mobile apps for founders, so I went through the research to see what holds up and what is just folklore.",
      },
      { type: 'h2', text: 'Why people drift away' },
      {
        type: 'p',
        text: 'The same review looked at 62 studies. Only 9% of the apps fully kept participants engaged, 67% managed it partly, and 21% failed. One well-known example is Stanford\'s MyHeart Counts study, where the average person used the app for just 4.1 days, even though thousands signed up.',
      },
      { type: 'p', text: 'The reasons that come up again and again:' },
      {
        type: 'ul',
        items: [
          'No support built in: no reminders, no coach, no way to talk to another person.',
          'Bugs and technical problems that make the app feel unreliable.',
          'An easy exit. Nothing stops someone from just not opening it tomorrow.',
          'Reminders that feel intrusive, or apps with no emotional connection at all (Jakob et al., 2022).',
          'Success. When someone reaches their goal, like quitting smoking, they have no reason left to open the app.',
        ],
      },
      { type: 'h2', text: 'What actually helps' },
      {
        type: 'p',
        text: 'Jakob and colleagues reviewed apps for chronic disease prevention and management, and found four factors that helped adherence across health areas: personalised content, individual push reminders, a user-friendly and stable app, and some personal support alongside the app. None of that is glamorous, which is sort of the point.',
      },
      { type: 'h3', text: '1. Get one real win into the first session' },
      {
        type: 'p',
        text: "This one is my opinion, not a study finding. Let people do the core action once before you ask for everything else. If the app tracks blood pressure, let them log a reading and see where it sits in the first two minutes. A person who has already got something back is far more likely to return than one who has only filled in a profile.",
      },
      { type: 'h3', text: '2. Find the one habit and build around it' },
      {
        type: 'p',
        text: 'A 2018 study in PLoS ONE followed 1,439 users of a personal health record app for 18 months. Viewing charts made up 68% of all usage, while self-monitoring (logging your own data) made up only 9%. Yet self-monitoring was the thing that slowed drop-off. Users who logged seven times a week had roughly 80% retention at 40 weeks, against about 60% for people who never used the feature.',
      },
      {
        type: 'p',
        text: 'It is an observational study, so motivated people may simply log more. Still, the lesson is useful. Passive features are easy to use and easy to forget. Find the active thing that makes the app part of someone\'s routine, and make that action fast.',
      },
      {
        type: 'img',
        src: unsplash('photo-1434494878577-86c23bcb06b9', 1400),
        alt: 'A person tapping the screen of a smartwatch',
        caption: 'Logging should take seconds. If it takes a minute, people stop.',
        credit: 'Luke Chesser on Unsplash',
        creditUrl:
          'https://unsplash.com/photos/person-clicking-apple-watch-smartwatch-rCOWMC8qf8A',
      },
      { type: 'h3', text: '3. Personalise, even a little' },
      {
        type: 'p',
        text: "You don't need a machine learning model on day one. Ask for the person's goal and when they prefer to be reminded, then change what the home screen shows based on the answers. Generic content is easy to ignore, and a screen that mentions someone's own goal is not.",
      },
      { type: 'h3', text: '4. Treat reminders like a conversation' },
      {
        type: 'p',
        text: 'One study cited in the Amagai review found users were most likely to open the app within 24 hours when prompted at midday on the weekend. That is one population, so test your own timing rather than copying it. The bigger point is in the barriers: reminders that feel stigmatising or intrusive push people away.',
      },
      {
        type: 'ul',
        items: [
          'Let users choose the time and how often.',
          'Write about what they did ("You logged 5 days this week"), not what they missed.',
          'Back off if they ignore three in a row.',
        ],
      },
      { type: 'h3', text: '5. Put a human somewhere in the loop' },
      {
        type: 'p',
        text: 'Support from a person came up in both reviews. In one study cited by Amagai, 90% of participants who downloaded the app completed four months of coaching. Most startups can\'t afford a coach for every user, so start smaller: a message from the care team, a community space, or a weekly summary a real person wrote and signed.',
      },
      {
        type: 'img',
        src: unsplash('photo-1576091160399-112ba8d25d1d', 1400),
        alt: 'A healthcare worker in scrubs with a stethoscope looking at a phone',
        caption: 'Even a little human contact changes how an app feels.',
        credit: 'National Cancer Institute on Unsplash',
        creditUrl:
          'https://unsplash.com/photos/person-wearing-lavatory-gown-with-green-stethoscope-on-neck-using-phone-while-standing-L8tWZT4CcVQ',
      },
      { type: 'h3', text: '6. Keep it fast, stable and honest' },
      {
        type: 'p',
        text: "Bugs are on the list of reasons people quit, so a crash during logging does more damage than a missing feature. Gamification gets talked about the most. Personalised feedback and rewards have been linked with better adherence in some apps, but I'd be careful with streaks. A streak that resets to zero after one bad week can feel like being told off, which is exactly the kind of tone the research warns about.",
      },
      { type: 'h2', text: 'Plan for the day the user succeeds' },
      {
        type: 'p',
        text: "Some people will do what the app was for. They'll quit smoking, hit a target or recover. If your product only has one mode, they leave, and honestly that's fine. But you can do better by offering a lighter maintenance mode, like a monthly check-in instead of a daily one, and by making it easy to come back later.",
      },
      { type: 'h2', text: 'Where I would start on the build' },
      {
        type: 'p',
        text: 'If I were scoping this as a Flutter and Supabase MVP, I would do these things in the first sprint:',
      },
      {
        type: 'ul',
        items: [
          'Add event tracking before launch, so you can see exactly which screen people drop off at.',
          'Set up push notifications early, and keep the reminder schedule on the server so users can change it without an app update.',
          'Use row level security in the database from day one. Health data deserves it, and you should check what HIPAA or GDPR requires for your market with someone qualified.',
          'Ship the one core action first and polish it, before adding extra features.',
        ],
      },
      {
        type: 'p',
        text: "I use the same approach on every MVP, and you can see the steps on my [process page](/process) and what each package covers on the [pricing page](/pricing). My [SocietyLedger case study](/work/society-ledger) is a different domain, but the lesson carries over. The whole product depends on members doing one small thing every month, which is paying and uploading proof. Find that one action and protect it.",
      },
      { type: 'h2', text: 'A quick checklist' },
      {
        type: 'ul',
        items: [
          'Can a new user get a real result in the first two minutes?',
          'Is there one active habit the app is built around?',
          'Do users choose when and how they are reminded?',
          'Is there some human contact, even a small amount?',
          'Does the app have a plan for people who succeed?',
          'Can you see where users drop off?',
        ],
      },
      {
        type: 'p',
        text: "If you're building a health app and want a second pair of eyes on the engagement side, [get in touch](/contact). I'm happy to look at what you have, even if it's just a rough idea. You can also see [the women's health apps I build](/services) or [why founders work with me](/why-me).",
      },
      {
        type: 'note',
        text: 'The statistics above come from the three papers listed under Sources, and I have kept to what those papers report. Studies on health apps vary a lot by condition and population, so treat the numbers as a guide, not a promise.',
      },
    ],
  },
]

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished))
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export function readingMinutes(post: Post): number {
  const words = post.body
    .map((b) => {
      if (b.type === 'ul') return b.items.join(' ')
      if (b.type === 'img') return ''
      return b.text
    })
    .join(' ')
    .split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}
