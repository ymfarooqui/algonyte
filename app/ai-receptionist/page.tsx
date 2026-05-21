import type { Metadata } from "next";
import Link from "next/link";
import { growthTiers } from "@/lib/tiers";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import FinalCTA from "@/components/sections/FinalCTA";
import { jsonLdString } from "@/lib/jsonLd";
import { aiReceptionistServiceSchema } from "@/lib/schema";

const awake = growthTiers[0];
const climbing = growthTiers[1];

const title = "AI Receptionist for Service Businesses | AlgoNyte";
const description = `AI receptionist answers, qualifies, and books your leads 24/7. Two flavors: Awake ($${awake.monthly}/mo, chat + DMs + missed-call text-back, live in ${awake.liveIn}) and Climbing ($${climbing.monthly}/mo, adds voice AI + Local SEO, live in ${climbing.liveIn}).`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ai-receptionist" },
  openGraph: { title, description, url: "/ai-receptionist", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "AI Receptionist", path: "/ai-receptionist" }]);

const faqs = [
  {
    q: "How is this different from a regular chatbot?",
    a: "A regular chatbot answers FAQ and stops. Our AI receptionist qualifies the lead, asks the questions your business needs to triage a job, and books the appointment directly onto your calendar without a human touching it. Awake handles text and chat; Climbing adds a live voice AI that picks up calls.",
  },
  {
    q: "What if the AI can't answer a question?",
    a: "The agent escalates. Anything flagged as a complaint, an existing-job follow-up, or a question outside its training routes to your phone or inbox with the full conversation captured so you have context before you reply.",
  },
  {
    q: "Does it work with my existing phone number?",
    a: "Yes. We forward your existing number; you keep it and nothing changes for your customers. Climbing adds the voice AI layer on top of your current number, so callers reach the AI first and can be transferred to you for anything it can't handle.",
  },
  {
    q: "How long until I see results?",
    a: "Most clients see bookings in the first 48 hours of going live. The missed-call text-back alone tends to recover leads the same day. Awake is live in 5 days; Climbing in 10–14 days because we layer in voice AI and start the Google Business Profile work.",
  },
  {
    q: "Can I take over the conversations myself?",
    a: "Yes. Every conversation lives in your shared inbox. You can jump in at any point, take over manually, and the AI steps aside. You also get a dashboard showing every missed call handled, DM replied, and lead booked.",
  },
  {
    q: "What happens to my leads if I cancel?",
    a: "You keep everything. Your contacts, your conversation history, your calendar bookings, and your Google Business Profile are all yours. We don't hold leads hostage.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function CheckIcon({ featured }: { featured?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`mt-0.5 flex-shrink-0 ${featured ? "text-brand-soft" : "text-brand-deep"}`}
      aria-label="Included"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function AIReceptionistPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-3xl">
            <h1 className="h-display">
              AI Receptionist for{" "}
              <span className="text-brand-deep">Service Businesses</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              An AI that answers, qualifies, and books your leads 24/7 across
              missed calls, website chat, SMS, and social DMs. Built for home
              services, auto, trades, and professional service shops where the
              phone rings while you&rsquo;re already on a job.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#tiers"
                className="inline-flex items-center justify-center rounded-full bg-brand-deep px-8 py-4 text-white font-medium hover:bg-brand-deep/90 transition-colors text-lg"
              >
                See the two flavors &rarr;
              </a>
              <Link
                href="/book"
                className="text-sm text-brand-deep underline decoration-brand-deep/30 underline-offset-4 hover:decoration-brand-deep transition-colors"
              >
                Book a 30-minute walkthrough &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand frame */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="mt-4 max-w-2xl rounded-xl border border-brand-deep/10 bg-brand-soft/60 px-5 py-4 text-brand-deep leading-relaxed text-lg">
            Your business runs while you sleep. Leads get answered, qualified,
            and booked while you&rsquo;re on a job, asleep, or off the clock.
          </p>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              The average service business misses 30&ndash;40% of inbound calls
              because the phone rings when you&rsquo;re on a roof, under a car,
              or with a patient. Those calls don&rsquo;t leave voicemail. They
              dial the next shop on Google.
            </p>
            <p>
              An AI receptionist closes that gap. It doesn&rsquo;t need a lunch
              break. It doesn&rsquo;t forget to follow up. And it doesn&rsquo;t
              need to be trained on your business more than once.
            </p>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">One system. Every channel. Always on.</h2>
          <ul className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <li>
              <strong className="text-brand-deep">Missed-call text-back.</strong>{" "}
              The moment a call goes unanswered, an SMS fires back to the caller
              and the conversation picks up where the missed call left off.
            </li>
            <li>
              <strong className="text-brand-deep">AI chat on your site, 24/7.</strong>{" "}
              Answers questions, qualifies the job, and books the appointment
              while visitors are still on your page.
            </li>
            <li>
              <strong className="text-brand-deep">
                DM auto-reply across Facebook, Instagram, WhatsApp, and Google
                Business Messages.
              </strong>{" "}
              Every channel funnels into the same inbox and the same qualification
              flow.
            </li>
            <li>
              <strong className="text-brand-deep">Lead qualification built for your business.</strong>{" "}
              Year, make, model. Scope of work. Service area. Budget. Whatever
              your business needs to triage a job. The AI asks it before booking.
            </li>
            <li>
              <strong className="text-brand-deep">Auto-booking to your calendar.</strong>{" "}
              Qualified leads book directly. No back-and-forth, no
              &ldquo;I&rsquo;ll have someone call you&rdquo; that never happens.
            </li>
            <li>
              <strong className="text-brand-deep">Review requests after job completion.</strong>{" "}
              Once an appointment is marked complete, a Google review request fires
              automatically, no manual follow-up required.
            </li>
          </ul>
        </div>
      </section>

      {/* Two-CTA fork */}
      <section id="tiers" className="section">
        <div className="container-page">
          <h2 className="h-section max-w-3xl">
            Text and chat, or voice too?
          </h2>
          <p className="mt-4 max-w-2xl text-brand-muted">
            Both tiers are done-for-you installs. Pick based on whether you need
            voice AI on the phone line, or just need the text and digital
            channels covered first.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 md:items-stretch max-w-4xl">
            {/* Card A - Awake */}
            <div
              id="awake"
              className="relative flex h-full flex-col rounded-2xl bg-brand-soft p-7 shadow-soft lift-card"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep/50">
                Text and chat?
              </p>
              <h3 className="mt-1 text-2xl font-medium tracking-tight text-brand-deep">
                {awake.name}
              </h3>
              <p className="mt-1 text-sm text-brand-muted">{awake.tagline}</p>
              <div className="mt-5 space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-medium tabular-nums text-brand-ink">
                    ${awake.setup}
                  </span>
                  <span className="text-sm text-brand-muted">one-time setup</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-medium tracking-tight tabular-nums text-brand-deep">
                    ${awake.monthly}
                  </span>
                  <span className="text-sm text-brand-muted">/mo</span>
                </div>
              </div>
              <p className="mt-2 text-xs text-brand-muted">
                Live in {awake.liveIn} &middot; Month-to-month
              </p>
              <ul className="mt-5 mb-7 space-y-2.5 text-sm flex-1">
                {awake.features.slice(0, 5).map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-brand-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing#awake"
                className="btn-primary w-full text-center"
              >
                See Awake &rarr;
              </Link>
            </div>

            {/* Card B - Climbing (featured) */}
            <div
              id="climbing"
              className="relative flex h-full flex-col rounded-2xl bg-brand-deep p-7 shadow-deep -translate-y-2 sm:-translate-y-4 text-brand-soft"
            >
              <div className="pointer-events-none absolute -top-3 inset-x-0 flex justify-center">
                <span className="pointer-events-auto rounded-md bg-brand-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-soft">
                  Recommended
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft/50">
                Want voice too?
              </p>
              <h3 className="mt-1 text-2xl font-medium tracking-tight text-brand-soft">
                {climbing.name}
              </h3>
              <p className="mt-1 text-sm text-brand-soft/70">{climbing.tagline}</p>
              <div className="mt-5 space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-medium tabular-nums text-brand-soft">
                    ${climbing.setup}
                  </span>
                  <span className="text-sm text-brand-soft/60">one-time setup</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-medium tracking-tight tabular-nums text-brand-soft">
                    ${climbing.monthly}
                  </span>
                  <span className="text-sm text-brand-soft/60">/mo</span>
                </div>
              </div>
              <p className="mt-2 text-xs text-brand-soft/60">
                {climbing.monthlyNote} &middot; Live in {climbing.liveIn}
              </p>
              <ul className="mt-5 mb-7 space-y-2.5 text-sm flex-1">
                {climbing.features.slice(1, 7).map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckIcon featured />
                    <span className="text-brand-soft/85">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing#climbing"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-brand-deep font-medium hover:bg-white/90 transition-colors text-base w-full text-center"
              >
                See Climbing &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive comparison */}
      <section className="section bg-brand-soft/40">
        <div className="container-page">
          <p className="eyebrow mb-4">How it stacks up</p>
          <h2 className="h-section max-w-3xl">
            Done-for-you reception vs. the alternatives.
          </h2>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-soft">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="px-5 py-4 text-left font-semibold text-brand-deep w-40"></th>
                  <th className="px-5 py-4 text-left font-semibold text-brand-deep bg-brand-accent/40">
                    AlgoNyte Awake
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-brand-muted">
                    Podium Core + AI
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-brand-muted">
                    Smith.ai AI
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-brand-muted">
                    Goodcall
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-5 py-4 font-medium text-brand-deep">Monthly</td>
                  <td className="px-5 py-4 font-semibold text-brand-deep bg-brand-accent/20">
                    ${awake.monthly} + ${awake.setup} setup
                  </td>
                  <td className="px-5 py-4 text-brand-muted">~$498 (annual contract)</td>
                  <td className="px-5 py-4 text-brand-muted">$95 + $2.10&ndash;$2.40/call</td>
                  <td className="px-5 py-4 text-brand-muted">$59&ndash;$99</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-brand-deep">Contract</td>
                  <td className="px-5 py-4 text-brand-deep bg-brand-accent/20">
                    Month-to-month
                  </td>
                  <td className="px-5 py-4 text-brand-muted">12 months</td>
                  <td className="px-5 py-4 text-brand-muted">Month-to-month</td>
                  <td className="px-5 py-4 text-brand-muted">Month-to-month</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-brand-deep">Setup</td>
                  <td className="px-5 py-4 text-brand-deep bg-brand-accent/20">
                    Done-for-you
                  </td>
                  <td className="px-5 py-4 text-brand-muted">DIY config</td>
                  <td className="px-5 py-4 text-brand-muted">DIY</td>
                  <td className="px-5 py-4 text-brand-muted">DIY</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-brand-deep">Channels</td>
                  <td className="px-5 py-4 text-brand-deep bg-brand-accent/20">
                    Chat + voice + SMS + FB/IG/WA DM
                  </td>
                  <td className="px-5 py-4 text-brand-muted">Webchat + SMS</td>
                  <td className="px-5 py-4 text-brand-muted">Per-call AI only</td>
                  <td className="px-5 py-4 text-brand-muted">Phone only</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-brand-deep">Reviews engine</td>
                  <td className="px-5 py-4 text-brand-deep bg-brand-accent/20">
                    Included
                  </td>
                  <td className="px-5 py-4 text-brand-muted">Add-on</td>
                  <td className="px-5 py-4 text-brand-muted">Not included</td>
                  <td className="px-5 py-4 text-brand-muted">Not included</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 max-w-3xl text-brand-muted leading-relaxed text-sm">
            <p>
              Goodcall is $59/mo if you want to build it yourself. Smith.ai is
              $95/mo + per-call. Podium is $498/mo on a 12-month contract. We&rsquo;re
              ${awake.monthly}/mo because we configure it for your business and own the result,
              and you can walk in any month, no annual lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Case study proof */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Real result</p>
          <h2 className="h-section">
            10 booked jobs in week one for an independent auto shop.
          </h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Car Hub in Macomb Township, Michigan installed the system on a
              Monday. By the end of that week the AI receptionist had booked
              10 jobs the shop would have missed otherwise: after-hours
              text-backs, late-night form fills, calls that came in during a
              busy bay.
            </p>
            <p>
              Nothing about the install was unique to auto repair. The same
              workflow runs the same for an HVAC shop, a roofer, a dental
              practice, or a landscaping company.{" "}
              <Link
                href="/insights/car-hub-macomb-case-study"
                className="text-brand-deep font-medium hover:underline"
              >
                Read the full Car Hub case study &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">Straight answers.</h2>
          <dl className="mt-6 divide-y divide-slate-200">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="text-lg font-semibold text-brand-deep">{f.q}</dt>
                <dd className="mt-2 text-brand-muted leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FinalCTA title="Want to see what this looks like for your business?" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(aiReceptionistServiceSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumb) }}
      />
    </>
  );
}

export const dynamic = "force-static";
