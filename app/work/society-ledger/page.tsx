import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'My Society Ledger — Flutter + Supabase Case Study | Amin Ganja',
  description:
    'How I built a full-stack society management mobile app with Flutter, Supabase, and Clean Architecture — solving real maintenance payment problems for Indian residential societies.',
}

const stats = [
  { value: '12', label: 'Database Tables' },
  { value: '44', label: 'Supabase RPCs' },
  { value: '3', label: 'User Roles' },
  { value: '0', label: 'Raw DB Queries in Flutter' },
  { value: '100%', label: 'RPC-Based Architecture' },
]

const problems = [
  {
    emoji: '💬',
    title: 'Payment proofs lost in WhatsApp',
    body: 'Members send screenshots to a 300-message group chat. Admins scroll for 45 minutes verifying who paid. One missing screenshot becomes a month-long dispute.',
  },
  {
    emoji: '⚔️',
    title: 'Monthly disputes between neighbours',
    body: '"Mera toh paid hai!" The admin can\'t verify. The member can\'t prove it. Trust between committee and residents erodes over time — not from bad intent but from missing information.',
  },
  {
    emoji: '📊',
    title: 'Zero expense transparency',
    body: 'Society funds are spent with no digital trail. Members have no way to see where their maintenance money goes. Suspicion builds. Meetings get heated.',
  },
  {
    emoji: '🕐',
    title: '45 minutes of manual work per month',
    body: 'Society admin cross-references WhatsApp, Excel, and bank statements every month by hand. No automation. No audit trail. Completely dependent on one person\'s memory.',
  },
]

const solutionSteps = [
  {
    num: 'STEP 01',
    title: 'Admin configures society once',
    body: 'Set maintenance amounts for owners and tenants separately. Configure due dates, penalty amounts, and grace periods. System generates 12 months of dues for all flats automatically — zero manual work every month.',
  },
  {
    num: 'STEP 02',
    title: 'Members get a permanent digital record',
    body: 'Members see their dues, due dates, and history in one place. They pay via UPI or bank as usual — then upload the screenshot in 30 seconds. Single month or multiple months in one submission. Partial payments supported for large fees.',
  },
  {
    num: 'STEP 03',
    title: 'Admin approves with one tap',
    body: 'Admin views the proof image, approves or rejects with a note. Push notification sent to member instantly. Approved records are permanent — tamper-proof, searchable, always available. "Did I pay?" is answered in seconds.',
  },
  {
    num: 'STEP 04',
    title: 'Both sides always see the same truth',
    body: 'Admin sees every flat\'s 12-month payment status on one screen. Members see their full history. Society expenses are visible to all members. When everyone sees the same data, disputes cannot exist.',
  },
]

const processPhases = [
  {
    num: 'PHASE 01',
    title: 'Problem definition and MVP scoping',
    body: 'Started with the real problem — not a feature list. Mapped every pain point in the existing WhatsApp + Excel workflow. Cut the initial feature list from 10 to 3 core flows: auth, flat management, and maintenance cycle. Everything else was deferred. Ship something focused rather than build everything and ship nothing.',
  },
  {
    num: 'PHASE 02',
    title: 'Schema design — entities vs events',
    body: 'Designed the database to answer two questions: who exists, and what happened. Started with 4 tables. Discovered quickly that there was no place to store events — payment submissions, approvals, expenses. Rebuilt to 12 tables. The key insight: dues and payments are different tables because they have different lifecycles, different creators, and different data.',
  },
  {
    num: 'PHASE 03',
    title: 'RPC-first backend — all logic in PostgreSQL',
    body: 'Decided early that Flutter would contain zero business logic. Every operation — creating a flat, submitting proof, approving a payment — is a single Supabase RPC. RPCs run as SECURITY DEFINER, handle validation, execute atomically, and return exactly what Flutter needs. 44 RPCs written and tested before the UI was touched.',
  },
  {
    num: 'PHASE 04',
    title: 'Clean Architecture + BLoC — feature first',
    body: 'Feature-first folder structure with strict layer separation. Every feature has data, domain, and presentation layers. BLoC split into three files — bloc, event, state. Repository returns Either<Failure, T> via dartz. No exceptions reach the UI. Each feature is independently testable and replaceable.',
  },
  {
    num: 'PHASE 05',
    title: 'Iterative feature expansion — with review at every step',
    body: 'New requirements arrived mid-build — tenants, multi-society support, additional fees, multi-month payments, penalty config. Each addition was planned, reviewed, and then implemented. Multi-month payments is a good example: the initial plan suggested two new tables. After review, a single column on the existing table solved it cleanly. Review before build saved the schema multiple times.',
  },
  {
    num: 'PHASE 06',
    title: 'Push notifications + production readiness',
    body: 'OneSignal integrated with multi-device support — player_ids stored as a TEXT array per user, appended on login and removed on logout. RPCs return notification payload directly so Flutter just reads and sends. Finally, a dev-to-prod migration plan created using Supabase CLI schema dump — ensuring production matches development exactly.',
  },
]

const techStack = [
  { cat: 'Mobile', name: 'Flutter', why: 'Single codebase for Android + iOS. Strong typing. Excellent widget system.' },
  { cat: 'State Management', name: 'flutter_bloc', why: 'Predictable state. Testable. Clear separation of UI and business logic.' },
  { cat: 'Backend + DB', name: 'Supabase', why: 'PostgreSQL with auth, storage, and realtime. Managed. Production-ready.' },
  { cat: 'Database', name: 'PostgreSQL 17', why: '44 SECURITY DEFINER RPCs. All logic server-side. Zero raw queries in Flutter.' },
  { cat: 'Auth', name: 'Phone OTP + Twilio', why: 'No passwords. Members login with the phone number admin registered.' },
  { cat: 'DI', name: 'GetIt + Injectable', why: 'Compile-time dependency injection. No service locator anti-patterns.' },
  { cat: 'Navigation', name: 'GoRouter', why: 'Role-based route guards. Deep linking. Declarative navigation.' },
  { cat: 'FP', name: 'dartz', why: 'Either<Failure, T> for all repository methods. No uncaught exceptions.' },
  { cat: 'Codegen', name: 'Freezed + JsonSerializable', why: 'Immutable models. copyWith. Exhaustive pattern matching on states.' },
  { cat: 'Push', name: 'OneSignal', why: 'Free tier. REST API for targeted delivery. Multi-device array support.' },
]

const outcomes = [
  { value: '12', label: 'Database Tables', sub: 'All with RLS enabled' },
  { value: '44', label: 'PostgreSQL RPCs', sub: 'Zero raw queries in Flutter' },
  { value: '3', label: 'User Roles', sub: 'Super admin, admin, member/tenant' },
  { value: '30 - 35 ', label: 'Days Solo Build', sub: 'Idea to production-ready' },
]

const learnings = [
  {
    emoji: '🧠',
    title: 'Plan first. Build second. Always.',
    body: 'Every feature was described and reviewed before a line of code was written. The multi-month payment feature is the clearest example — initial plan suggested two new tables, review revealed one column was enough. The review step is where most of the value was created.',
  },
  {
    emoji: '🏗️',
    title: 'Early architecture decisions compound over time',
    body: 'Putting role in user_flats instead of users was a week-one decision that made multi-society support straightforward in month four. Good architecture choices pay compound interest.',
  },
  {
    emoji: '🤖',
    title: 'AI-augmented development is a skill, not a shortcut',
    body: 'Using Claude AI throughout this build was not about generating code faster. It was about having a collaborator that challenged assumptions, caught edge cases, and pressure-tested decisions before they became technical debt. The skill is knowing when to accept, when to push back, and when to go a completely different direction.',
  },
  {
    emoji: '🔒',
    title: 'Security built in is easier than security retrofitted',
    body: 'RLS on all 12 tables and SECURITY DEFINER on all 44 RPCs was decided on day one. Database-level security means no Flutter bug can accidentally expose another society\'s data. This would have been extremely painful to add after the fact.',
  },
  {
    emoji: '📦',
    title: 'Real requirements never arrive all at once',
    body: 'Tenants, multi-society support, additional fees with partial payments, penalty config, multi-device push — none of these were in the original plan. The architecture absorbed every addition cleanly because it was built for extension, not for the minimum.',
  },
]

function SectionHeader({
  num,
  title,
  subtitle,
}: {
  num: string
  title: string
  subtitle: string
}) {
  return (
    <div className="flex items-start gap-4 mb-12">
      <span className="font-mono text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-lg whitespace-nowrap mt-1">
        {num}
      </span>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">{subtitle}</p>
      </div>
    </div>
  )
}

export default function SocietyLedgerCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
              Building <span className="text-accent">trust</span> between society committee and
              members through a Flutter app
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              A full-stack mobile application for Indian residential societies — digitising
              maintenance collection, expense tracking, and member communication. Built solo with
              Flutter, Supabase, BLoC + Clean Architecture, and 44 PostgreSQL RPCs.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-white/10">
              {[
                { label: 'Timeline', value: '30-35 Days' },
                { label: 'Role', value: 'Solo — Full Stack' },
                { label: 'Platform', value: 'Android + iOS' },
                { label: 'Stack', value: 'Flutter · Supabase · PostgreSQL' },
                { label: 'Architecture', value: 'BLoC + Clean Architecture' },
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
          <div className="rounded-2xl overflow-hidden border border-white/10 mb-0">
            <div className="w-full">
              <Image
                src="/my_society_ledger.png"
                alt="My Society Ledger app overview"
                width={1536}
                height={1024}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* ── STATS BAR ── */}
          <div className="bg-white/[0.04] border-x border-b border-white/10 rounded-b-2xl px-6 py-8 mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white leading-none mb-2">
                    {value}
                  </p>
                  <p className="text-xs text-gray-500 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── PROBLEM ── */}
          <section className="py-14 border-t border-white/10" id="problem">
            <SectionHeader
              num="01"
              title="The Problem — Trust Breaks Every Month"
              subtitle="Indian residential societies manage hundreds of flats with no dedicated software. The result is the same argument, every month, between good people who simply lack a shared source of truth."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {problems.map(({ emoji, title, body }) => (
                <div
                  key={title}
                  className="p-5 rounded-xl border border-white/10 bg-white/[0.03] space-y-2"
                >
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{emoji}</span> {title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            {/* Insight box */}
            <div className="flex gap-4 items-start p-5 rounded-xl border border-amber-500/20 bg-amber-500/5">
              <span className="text-2xl flex-shrink-0">💡</span>
              <p className="text-sm text-amber-200/80 leading-relaxed">
                <strong className="text-amber-200">Core insight:</strong> The problem is not bad
                people — it is a missing system. When everyone can see the same truth, arguments
                become structurally impossible. The solution needed to be built around transparency
                as a first principle, not as a feature.
              </p>
            </div>
          </section>

          {/* ── SOLUTION ── */}
          <section className="py-14 border-t border-white/10" id="solution">
            <SectionHeader
              num="02"
              title="The Solution — One Source of Truth for Everyone"
              subtitle="My Society Ledger digitises every step of the maintenance cycle. From admin generating dues to member uploading proof to admin approving — all in one app, with full visibility for every party."
            />

            <div className="space-y-0">
              {solutionSteps.map(({ num, title, body }, i) => (
                <div
                  key={num}
                  className={`flex gap-5 py-6 ${i < solutionSteps.length - 1 ? 'border-b border-dashed border-white/10' : ''}`}
                >
                  <span className="font-mono text-[10px] font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-lg whitespace-nowrap h-fit mt-0.5">
                    {num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROCESS ── */}
          <section className="py-14 border-t border-white/10" id="process">
            <SectionHeader
              num="03"
              title="The Process — How We Built It"
              subtitle="A structured, step-by-step development process. Every decision reviewed before implementation. No code written without a clear plan."
            />

            <div className="space-y-0">
              {processPhases.map(({ num, title, body }, i) => (
                <div
                  key={num}
                  className={`flex gap-5 py-6 ${i < processPhases.length - 1 ? 'border-b border-dashed border-white/10' : ''}`}
                >
                  <span className="font-mono text-[10px] font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-lg whitespace-nowrap h-fit mt-0.5">
                    {num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── AI AUGMENTED DEVELOPMENT ── */}
          <section className="py-14 border-t border-white/10" id="ai">
            <SectionHeader
              num="04"
              title="AI-Augmented Development with Claude"
              subtitle="This project was built using AI-augmented development — not vibe coding. Every AI suggestion was reviewed, challenged, and understood before implementation."
            />

            {/* Callout */}
            <div className="flex gap-4 items-start p-5 rounded-xl border border-white/10 bg-white/[0.03] mb-8">
              <span className="text-2xl flex-shrink-0">🤖</span>
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong className="text-white">AI-augmented development is not "AI writes my code."</strong>{' '}
                It is using AI as a product manager, architect, and senior reviewer that
                pressure-tests your decisions before you commit to them. The developer still owns
                every decision — AI accelerates the thinking, not the typing.
              </p>
            </div>

            <div className="space-y-5">

              {/* Decision 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    Claude as Product Manager
                  </p>
                  <h3 className="text-base font-bold text-white">
                    Planning features before touching code
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Every feature was described in plain English first. Claude returned edge cases,
                    failure scenarios, and user flow issues before a single line was written. The
                    multi-society problem — where the same user could be admin in one society and
                    member in another — was caught in planning, not in production.
                  </p>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                  <div className="p-3.5 rounded-xl border border-white/10 bg-white/5">
                    <p className="text-[10px] font-bold text-gray-500 mb-1.5">INPUT</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      "I want to add role to the users table so each user has one role globally"
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-accent/20 bg-accent/5">
                    <p className="text-[10px] font-bold text-accent mb-1.5">CHALLENGE RECEIVED</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      "What if the same user is admin in Society A and member in Society B?"
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-white/10 bg-white/5">
                    <p className="text-[10px] font-bold text-gray-500 mb-1.5">RESULT</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Role moved to user_flats — scoped per flat, per society. Multi-society
                      unlocked.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decision 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    Claude as Backend Engineer
                  </p>
                  <h3 className="text-base font-bold text-white">
                    44 RPCs written, reviewed, and deployed
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Supabase RPCs were written with Claude Code using the MCP server — which reads
                    the live database schema before generating any function. Each RPC was reviewed
                    line by line before deployment. Not blindly accepted — every guard, every JOIN,
                    every return value was understood before it touched production.
                  </p>
                </div>
                <div className="flex flex-col gap-2 justify-center">
                  <p className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-1">
                    Workflow per RPC
                  </p>
                  {[
                    '01 — Describe what the RPC should do',
                    '02 — Claude reads live schema via MCP',
                    '03 — Review SQL before approving',
                    '04 — Deploy directly to Supabase',
                  ].map((step, i, arr) => (
                    <div
                      key={step}
                      className={`flex items-center gap-3 py-2.5 ${i < arr.length - 1 ? 'border-b border-dashed border-white/10' : ''}`}
                    >
                      <span className="font-mono text-[10px] text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-md">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs text-gray-400">{step.slice(5)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decision 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    Knowing When to Push Back
                  </p>
                  <h3 className="text-base font-bold text-white">
                    AI suggestions are starting points, not final answers
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    When implementing multi-month maintenance payments, Claude suggested creating two
                    new tables. After reviewing the plan, it was clear that a single{' '}
                    <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded text-accent">
                      group_id
                    </code>{' '}
                    column on the existing payments table solved the problem completely. The ability
                    to review and challenge AI output is what separates AI-augmented development
                    from blindly generated code.
                  </p>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                  <div className="p-3.5 rounded-xl border border-red-500/20 bg-red-500/5">
                    <p className="text-[10px] font-bold text-red-400 mb-1.5">INITIAL SUGGESTION</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Create 2 new tables for multi-month payment grouping — more complex schema
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-amber-500/20 bg-amber-500/5">
                    <p className="text-[10px] font-bold text-amber-400 mb-1.5">
                      REVIEWED + CHALLENGED
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      "Can we just add group_id to the existing payments table?"
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-accent/20 bg-accent/5">
                    <p className="text-[10px] font-bold text-accent mb-1.5">FINAL SOLUTION</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      1 tiny table + 1 column. Same result. Far simpler schema. ✓
                    </p>
                  </div>
                </div>
              </div>

              {/* Decision 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    Claude as Flutter Engineer
                  </p>
                  <h3 className="text-base font-bold text-white">
                    Clean Architecture prompts with strict rules
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Claude Code was used inside the IDE with strict rules embedded in every prompt —
                    max 200 lines per file, one class per file, BLoC split into three files, all
                    colors from AppColors, all RPC names from RpcConstants. AI accelerated feature
                    development while the architecture rules enforced quality. Speed without
                    compromise.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs space-y-1.5 self-center">
                  <p className="text-gray-600 mb-2">// enforced by prompt, not hope</p>
                  {[
                    ['max_lines_per_file', '200'],
                    ['classes_per_file', '1'],
                    ['bloc_files', '"bloc | event | state"'],
                    ['colors', '"AppColors only"'],
                    ['rpc_names', '"RpcConstants only"'],
                    ['repo_return', '"Either<Failure, T>"'],
                    ['business_logic', '"BLoC only"'],
                  ].map(([key, val]) => (
                    <div key={key}>
                      <span className="text-accent">{key}</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-green-400">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ── TECH STACK ── */}
          <section className="py-14 border-t border-white/10" id="stack">
            <SectionHeader
              num="05"
              title="Tech Stack"
              subtitle="Every tool chosen for a specific reason — not because it was popular."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {techStack.map(({ cat, name, why }) => (
                <div
                  key={name}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors space-y-1"
                >
                  <p className="font-mono text-[10px] font-semibold text-accent uppercase tracking-widest">
                    {cat}
                  </p>
                  <p className="text-sm font-bold text-white">{name}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── OUTCOMES & LEARNINGS ── */}
          <section className="py-14 border-t border-white/10" id="results">
            <SectionHeader
              num="30"
              title="Outcomes and Learnings"
              subtitle="Thirty days of solo development. A production-ready app. These are the things that actually mattered."
            />

            {/* Outcome stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {outcomes.map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="p-5 rounded-xl border border-white/10 bg-white/[0.03] text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/60 to-accent/20" />
                  <p className="text-3xl font-bold text-accent leading-none mb-2">{value}</p>
                  <p className="text-xs font-semibold text-white mb-1">{label}</p>
                  <p className="text-[10px] text-gray-500">{sub}</p>
                </div>
              ))}
            </div>

            {/* Learnings */}
            <div className="space-y-3">
              {learnings.map(({ emoji, title, body }) => (
                <div
                  key={title}
                  className="flex gap-4 items-start p-5 rounded-xl border border-white/10 bg-white/[0.02]"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{emoji}</span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{body}</p>
                  </div>
                </div>
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
              I am a Flutter developer with 4.5+ years of experience building production mobile apps
              with Supabase, BLoC, Clean Architecture, and PostgreSQL. Based in Ahmedabad, India.
              Available for freelance projects.
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
