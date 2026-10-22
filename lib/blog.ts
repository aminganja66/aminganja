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
  description: string
  category: string
  datePublished: string // ISO date
  dateModified: string
  cover: { src: string; alt: string; credit: string; creditUrl: string }
  sources: { label: string; href: string }[]
  body: Block[]
}

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`

const posts: Post[] = [
  {
    slug: 'improve-user-engagement-health-tech-app',
    title: 'How to Improve User Engagement in a Health Tech App',
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
        text: "If you're building a health app and want a second pair of eyes on the engagement side, [get in touch](/contact). I'm happy to look at what you have, even if it's just a rough idea. You can also see [why founders work with me](/why-me).",
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
