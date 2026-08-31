import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import ReadingProgress from '@/components/reading-progress'

export const metadata: Metadata = {
  title: 'My Society Ledger — Flutter + Supabase Case Study | Amin Ganja',
  description:
    'How I built a full-stack society management mobile app with Flutter, Supabase, and Clean Architecture — solving real maintenance payment problems for Indian residential societies.',
}

const stats = [
  { value: '12', label: 'Database Tables' },
  { value: '44', label: 'Supabase RPCs' },
  { value: '3', label: 'User Roles' },
  { value: '30–35', label: 'Days Solo Build' },
]

const problems = [
  {
    emoji: '💬',
    title: 'Payment proofs lost in WhatsApp',
    body: 'Everyone dumps their payment screenshot into one giant group chat. Good luck finding the right one when someone swears they already paid.',
  },
  {
    emoji: '⚔️',
    title: 'Monthly disputes between neighbours',
    body: '"Mera toh paid hai!" — every admin has heard that a hundred times, and usually has no real way to check.',
  },
  {
    emoji: '📊',
    title: 'Zero expense transparency',
    body: 'Nobody can see where the maintenance money actually goes, so every meeting turns into a guessing game.',
  },
]

const problemInsight =
  "It was never really about bad people. It was that nobody had the same information. Once everyone can see the same thing, there's nothing left to argue about."

const solutionSteps = [
  {
    title: 'Admin sets it up once',
    body: "Set the maintenance amount and due dates once, and the app generates a full year of dues for every flat automatically. You're not doing this every single month.",
  },
  {
    title: 'Members pay and upload proof',
    body: 'People still pay however they normally do — UPI, bank transfer, whatever. They just snap the screenshot and upload it. Takes about 30 seconds.',
  },
  {
    title: 'Admin approves with one tap',
    body: "One tap to approve or reject, and the member gets notified right away. That record's permanent — no more digging through chat history to prove you paid.",
  },
  {
    title: 'Everyone sees the same truth',
    body: "Admin and members are looking at the exact same numbers — dues, payments, expenses. Once everyone's on the same page, there's nothing left to dispute.",
  },
]

const techStack = [
  'Flutter',
  'flutter_bloc',
  'Supabase',
  'PostgreSQL 17',
  'Phone OTP + Twilio',
  'GetIt + Injectable',
  'GoRouter',
  'dartz',
  'Freezed',
  'OneSignal',
]

const outcomes = [
  { value: '12', label: 'Database Tables', sub: 'All with RLS enabled' },
  { value: '44', label: 'PostgreSQL RPCs', sub: 'Zero raw queries in Flutter' },
  { value: '3', label: 'User Roles', sub: 'Super admin, admin, member/tenant' },
  { value: '30–35', label: 'Days Solo Build', sub: 'Idea to production-ready' },
]

const learnings = [
  {
    emoji: '🧠',
    title: 'Plan first. Build second. Always.',
    body: "I described every feature and got it reviewed before writing a single line of code. Honestly, that's where most of the good decisions actually happened.",
  },
  {
    emoji: '🤖',
    title: 'AI-augmented development is a skill, not a shortcut',
    body: "Claude wasn't on autopilot — it kept questioning my assumptions, which was more useful. Knowing when to push back on its suggestions was the real skill.",
  },
  {
    emoji: '📦',
    title: 'Real requirements never arrive all at once',
    body: "Tenants, multi-society support, penalty settings — none of that was in my original plan. New stuff kept showing up, and it worked out because I'd built the architecture to grow, not just to work.",
  },
]

function ChapterHeader({
  chapter,
  title,
  subtitle,
}: {
  chapter: string
  title: string
  subtitle: string
}) {
  return (
    <div className="flex items-start gap-5 md:gap-7 mb-12">
      <span
        aria-hidden
        className="hidden sm:block text-6xl md:text-7xl font-black leading-none text-transparent shrink-0 select-none"
        style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.14)' }}
      >
        {chapter}
      </span>
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Chapter {chapter}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 max-w-2xl">{title}</h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">{subtitle}</p>
      </div>
    </div>
  )
}

function Vignette({ emoji, title, body }: { emoji: string; title: string; body: string }) {
  return (
    <div className="flex gap-4">
      <span className="text-xl md:text-2xl leading-none mt-0.5 shrink-0">{emoji}</span>
      <div>
        <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{title}</h3>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">{body}</p>
      </div>
    </div>
  )
}

function StepRow({ index, title, body, isLast }: { index: number; title: string; body: string; isLast: boolean }) {
  return (
    <div className={`flex gap-5 md:gap-6 py-7 ${isLast ? '' : 'border-b border-white/10'}`}>
      <span className="text-3xl md:text-4xl font-black text-white/10 leading-none shrink-0 w-12 md:w-14">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{title}</h3>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">{body}</p>
      </div>
    </div>
  )
}

export default function SocietyLedgerCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ReadingProgress />

      {/* Back nav */}
      <div className="w-full px-4 pt-8 pb-4 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#my-work"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </div>

      <main className="w-full px-4">
        <div className="max-w-5xl mx-auto">

          {/* ── HERO ── */}
          <section className="py-16 md:py-20 space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-2.5 py-1 text-xs bg-white/10 border border-white/20 text-gray-300 rounded-lg">
                Case Study
              </span>
              <span className="px-2.5 py-1 text-xs bg-accent/10 border border-accent/30 text-accent rounded-lg font-semibold">
                Flutter + Supabase
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
              I built a Flutter app to fix the #1 source of <span className="text-accent">trust</span> issues
              in a housing society
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              It&apos;s a full mobile app for Indian residential societies — dues, payments, expenses,
              all of it — and I built the whole thing myself in about a month.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-white/10">
              {[
                { label: 'Timeline', value: '30-35 Days' },
                { label: 'Role', value: 'Solo — Full Stack' },
                { label: 'Platform', value: 'Android + iOS' },
                { label: 'Stack', value: 'Flutter · Supabase · PostgreSQL' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                    {label}
                  </span>
                  <span className="text-sm font-semibold text-white">{value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── APP SCREENSHOT ── */}
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/my_society_ledger.png"
              alt="My Society Ledger app overview"
              width={1536}
              height={1024}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* ── STATS STRIP ── */}
          <div className="mt-6 mb-16 grid grid-cols-2 sm:grid-cols-4 rounded-2xl border border-white/10 divide-x divide-y sm:divide-y-0 divide-white/10 overflow-hidden">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center px-3 py-6">
                <p className="text-2xl md:text-3xl font-bold text-white leading-none mb-2">{value}</p>
                <p className="text-[11px] text-gray-500 font-medium">{label}</p>
              </div>
            ))}
          </div>

          {/* ── CHAPTER ONE: THE PROBLEM ── */}
          <section className="py-14 border-t border-white/10" id="problem">
            <ChapterHeader
              chapter="01"
              title="The Same Argument, Every Month"
              subtitle="Most societies are still run on WhatsApp groups and Excel sheets. Nobody's a bad person here — they just don't have a system, so the same fight happens every month."
            />

            <div className="space-y-8 mb-12">
              {problems.map((p) => (
                <Vignette key={p.title} {...p} />
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-accent/50 pl-6">
              <p className="text-lg md:text-2xl font-semibold text-white leading-snug max-w-2xl text-balance">
                {problemInsight}
              </p>
            </blockquote>
          </section>

          {/* ── CHAPTER TWO: THE SOLUTION ── */}
          <section className="py-14 border-t border-white/10" id="solution">
            <ChapterHeader
              chapter="02"
              title="How the App Actually Works"
              subtitle="Here's the whole flow, start to finish — from the admin setting things up to a member proving they paid."
            />

            <div>
              {solutionSteps.map((step, i) => (
                <StepRow key={step.title} index={i} {...step} isLast={i === solutionSteps.length - 1} />
              ))}
            </div>
          </section>

          {/* ── CHAPTER THREE: HOW IT WAS BUILT ── */}
          <section className="py-14 border-t border-white/10" id="build">
            <ChapterHeader
              chapter="03"
              title="How It Was Built"
              subtitle="The short version — I'll spare you the deep technical dive."
            />

            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl mb-8">
              I broke it into six phases — figured out the real problem first, designed the
              database, wrote the backend logic, then built the actual app in Flutter. Every step
              got planned and reviewed before I touched any code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 p-3.5 rounded-xl border border-accent/20 bg-accent/5">
              <div>
                <p className="text-[10px] font-bold text-gray-500 mb-1">SUGGESTED</p>
                <p className="text-xs text-gray-400 leading-relaxed">Two new tables for multi-month payments</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 mb-1">CHALLENGED</p>
                <p className="text-xs text-gray-400 leading-relaxed">Could one column do the same job?</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-accent mb-1">SHIPPED</p>
                <p className="text-xs text-gray-400 leading-relaxed">Turned out yes — one column, way simpler.</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-2xl mb-10">
              That&apos;s basically how I used AI on this whole project — it suggests, I push back
              when something feels off, and I decide. I understood every RPC and every schema
              choice before it went live.
            </p>

            <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 mb-3">Built with</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span key={t} className="px-3 py-1.5 text-xs rounded-full border border-white/10 bg-white/[0.03] text-gray-400">
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* ── CHAPTER FOUR: RESULTS ── */}
          <section className="py-14 border-t border-white/10" id="results">
            <ChapterHeader
              chapter="04"
              title="What I Actually Learned in 30 Days"
              subtitle="I built this solo in about a month. Here's what actually mattered — not the feature list."
            />

            {/* Outcome stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-white/10 divide-x divide-y sm:divide-y-0 divide-white/10 overflow-hidden mb-14">
              {outcomes.map(({ value, label, sub }) => (
                <div key={label} className="px-4 py-6 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent leading-none mb-2">{value}</p>
                  <p className="text-xs font-semibold text-white mb-1">{label}</p>
                  <p className="text-[10px] text-gray-500">{sub}</p>
                </div>
              ))}
            </div>

            {/* Learnings */}
            <div className="space-y-8">
              {learnings.map((l) => (
                <Vignette key={l.title} {...l} />
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="py-16 border-t border-white/10 text-center space-y-5">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Building a Flutter app?
              <br />
              <span className="text-accent">Let&apos;s talk.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              I&apos;m a Flutter developer based in Ahmedabad, India, with 4.5+ years building
              production apps — Supabase, Clean Architecture, the works. Open for freelance
              projects right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 pb-8">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-black font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
              <Link
                href="/#my-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white text-sm hover:bg-white/5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to portfolio
              </Link>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-gray-500">
            <span className="text-white font-semibold">My Society Ledger</span> — Case Study by
            Amin Ganja · Flutter Developer, Ahmedabad, India
          </p>
          <div className="flex flex-wrap gap-2">
            {['Flutter', 'Supabase', 'BLoC', 'Clean Architecture', 'PostgreSQL', 'GoRouter'].map(
              (chip) => (
                <span
                  key={chip}
                  className="text-[10px] text-gray-500 border border-white/10 px-2.5 py-1 rounded-full"
                >
                  {chip}
                </span>
              )
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}
