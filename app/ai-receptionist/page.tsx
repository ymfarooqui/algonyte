import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import FinalCTA from "@/components/sections/FinalCTA";
import { jsonLdString } from "@/lib/jsonLd";
import { aiReceptionistServiceSchema } from "@/lib/schema";

const voice = services.find((s) => s.id === "voice-ai")!;
const chat = services.find((s) => s.id === "ai-chat-dm")!;

// Competitive comparison, no prices (we scope on a call); the contrast is
// done-for-you + every channel + month-to-month vs. DIY tools and annual locks.
const comparison = {
  attributes: ["Setup", "Contract", "Channels", "Reviews engine"],
  competitors: [
    {
      name: "AlgoNyte",
      featured: true,
      values: ["Done-for-you", "Month-to-month", "Phone + chat + SMS + FB/IG/WA DM", "Included"],
    },
    {
      name: "Podium Core + AI",
      values: ["DIY config", "12 months", "Webchat + SMS", "Add-on"],
    },
    {
      name: "Smith.ai AI",
      values: ["DIY", "Month-to-month", "Per-call AI only", "Not included"],
    },
    {
      name: "Goodcall",
      values: ["DIY", "Month-to-month", "Phone only", "Not included"],
    },
  ],
};

const title = "AI Receptionist for Service Businesses | AlgoNyte";
const description =
  "An AI receptionist that answers, qualifies, and books your leads 24/7, across missed calls, website chat, SMS, and social DMs. Done for you, live in days, no long-term contract.";

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
    a: "A regular chatbot answers a FAQ and stops. Our AI receptionist qualifies the lead, asks the questions your business needs to triage a job, and books the appointment straight onto your calendar without a human touching it. It covers text and chat, and a live voice AI can answer the phone too.",
  },
  {
    q: "What if the AI can't answer a question?",
    a: "It escalates. Anything flagged as a complaint, an existing-job follow-up, or a question outside its training routes to your phone or inbox with the full conversation attached, so you have the context before you reply.",
  },
  {
    q: "Does it work with my existing phone number?",
    a: "Yes. We forward your existing number, you keep it and nothing changes for your customers. The voice AI layer sits on top, so callers reach the agent first and get transferred to you for anything it can't handle.",
  },
  {
    q: "How long until I see results?",
    a: "Most clients see bookings in the first 48 hours. The missed-call text-back alone tends to recover leads the same day. Text and chat go live in a few days; adding voice AI takes a little longer because we tune it to how your calls actually go.",
  },
  {
    q: "Can I take over the conversations myself?",
    a: "Anytime. Every conversation lives in your shared inbox, jump in, take over, and the AI steps aside. You also get a dashboard showing every missed call handled, DM replied to, and lead booked.",
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

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      className="mt-0.5 shrink-0 text-emerald-400"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceTile({
  service,
  kicker,
}: {
  service: typeof voice;
  kicker: string;
}) {
  return (
    <Link
      href={`/services#${service.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-ink to-brand-deep p-7 text-brand-soft shadow-xl shadow-black/30 ring-1 ring-inset ring-white/10 transition hover:ring-white/20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />
      <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-soft/45">
        {kicker}
      </p>
      <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-soft/70">{service.summary}</p>
      <ul className="mt-5 mb-7 flex-1 space-y-2.5 text-sm">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-brand-soft/80">
            <Check />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm font-medium text-brand-soft">
        Explore
        <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
      </p>
    </Link>
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
              AI Receptionist for <span className="text-brand-deep">Service Businesses</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              An AI that answers, qualifies, and books your leads 24/7 across missed calls,
              website chat, SMS, and social DMs. Built for home services, auto, trades, and
              the professional shops where the phone rings while you&rsquo;re already on a job.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/book" className="btn-primary-featured">
                Book a 30-minute walkthrough
              </Link>
              <a href="#ways" className="btn-secondary">
                See how it works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand frame */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="mt-4 max-w-2xl rounded-xl border border-brand-deep/10 bg-brand-soft/60 px-5 py-4 text-brand-deep leading-relaxed text-lg">
            Your business runs while you sleep. Leads get answered, qualified, and booked while
            you&rsquo;re on a job, asleep, or off the clock.
          </p>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              The average service business misses 30&ndash;40% of inbound calls because the phone
              rings when you&rsquo;re on a roof, under a car, or with a patient. Those calls
              don&rsquo;t leave a voicemail. They dial the next shop on Google.
            </p>
            <p>
              An AI receptionist closes that gap. It doesn&rsquo;t take a lunch break, it
              doesn&rsquo;t forget to follow up, and it only needs to learn your business once.
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
              The moment a call goes unanswered, a text fires back to the caller and the
              conversation picks up where the missed call left off.
            </li>
            <li>
              <strong className="text-brand-deep">AI chat on your site, 24/7.</strong>{" "}
              Answers questions, qualifies the job, and books the appointment while visitors are
              still on your page.
            </li>
            <li>
              <strong className="text-brand-deep">
                DM auto-reply across Facebook, Instagram, WhatsApp, and Google Business Messages.
              </strong>{" "}
              Every channel funnels into one inbox and one qualification flow.
            </li>
            <li>
              <strong className="text-brand-deep">Lead qualification built for your business.</strong>{" "}
              Year, make, model. Scope of work. Service area. Whatever you need to triage a job,
              the AI asks it before booking.
            </li>
            <li>
              <strong className="text-brand-deep">Auto-booking to your calendar.</strong>{" "}
              Qualified leads book directly. No back-and-forth, no &ldquo;I&rsquo;ll have someone
              call you&rdquo; that never happens.
            </li>
            <li>
              <strong className="text-brand-deep">Review requests after the job.</strong>{" "}
              Once an appointment is marked complete, a review request fires automatically, no
              manual follow-up.
            </li>
          </ul>
        </div>
      </section>

      {/* Two ways, à la carte services */}
      <section id="ways" className="section">
        <div className="container-page">
          <h2 className="h-section max-w-3xl">Start with text and chat, add voice, or do both.</h2>
          <p className="mt-4 max-w-2xl text-brand-muted">
            Each is a done-for-you install that stands on its own. Start with the one costing you
            the most missed work, then add the other whenever you&rsquo;re ready.
          </p>

          <div className="mt-12 grid max-w-4xl gap-5 md:grid-cols-2 md:items-stretch">
            <ServiceTile service={voice} kicker="Answer the phone" />
            <ServiceTile service={chat} kicker="Answer chat & DMs" />
          </div>
        </div>
      </section>

      {/* Competitive comparison */}
      <section className="section bg-brand-soft/40">
        <div className="container-page">
          <p className="eyebrow mb-4">How it stacks up</p>
          <h2 className="h-section max-w-3xl">Done-for-you reception vs. the alternatives.</h2>

          {/* Desktop: full comparison table */}
          <div className="mt-10 hidden sm:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="px-5 py-4 text-left font-semibold text-brand-deep w-40"></th>
                  {comparison.competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`px-5 py-4 text-left font-semibold ${
                        c.featured ? "text-brand-deep bg-brand-accent/40" : "text-brand-muted"
                      }`}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparison.attributes.map((attr, ri) => (
                  <tr key={attr}>
                    <td className="px-5 py-4 font-medium text-brand-deep">{attr}</td>
                    {comparison.competitors.map((c) => (
                      <td
                        key={c.name}
                        className={`px-5 py-4 ${
                          c.featured
                            ? "font-medium text-brand-deep bg-brand-accent/20"
                            : "text-brand-muted"
                        }`}
                      >
                        {c.values[ri]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: one card per option, no sideways scrolling */}
          <div className="mt-8 space-y-4 sm:hidden">
            {comparison.competitors.map((c) => (
              <div
                key={c.name}
                className={`rounded-2xl border p-5 ${
                  c.featured
                    ? "border-brand-deep/30 bg-brand-accent/20 shadow-soft"
                    : "border-slate-200 bg-white"
                }`}
              >
                <p className={`font-semibold ${c.featured ? "text-brand-deep" : "text-brand-ink"}`}>
                  {c.name}
                </p>
                <dl className="mt-3 divide-y divide-slate-200/70 text-sm">
                  {comparison.attributes.map((attr, ri) => (
                    <div key={attr} className="flex justify-between gap-4 py-2">
                      <dt className="text-brand-muted">{attr}</dt>
                      <dd
                        className={`text-right font-medium ${
                          c.featured ? "text-brand-deep" : "text-brand-ink"
                        }`}
                      >
                        {c.values[ri]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-3xl text-brand-muted leading-relaxed text-sm">
            <p>
              Most of the alternatives are build-it-yourself, cover one channel, or lock you into
              a 12-month contract. We configure the whole thing for your business, cover every
              channel, and own the result, and you can walk any month, no annual lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Case study proof */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Real result</p>
          <h2 className="h-section">10 booked jobs in week one for an independent auto shop.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Car Hub in Macomb Township, Michigan installed the system on a Monday. By the end of
              that week the AI receptionist had booked 10 jobs the shop would have missed
              otherwise: after-hours text-backs, late-night form fills, calls that came in during
              a busy bay.
            </p>
            <p>
              Nothing about the install was unique to auto repair. The same workflow runs the same
              for an HVAC shop, a roofer, a dental practice, or a landscaping company.{" "}
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
