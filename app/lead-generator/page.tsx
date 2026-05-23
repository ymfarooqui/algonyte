import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import FinalCTA from "@/components/sections/FinalCTA";
import { jsonLdString } from "@/lib/jsonLd";
import { tiers } from "@/lib/tiers";

const climbing = tiers.find((t) => t.id === "climbing")!;

const title = "Lead Generation for Service Businesses | Voice + SMS Automation";
const description = `Voice AI receptionist + SMS missed-call text-back + DM auto-reply. Books appointments, not form fills. Part of Climbing ($${climbing.monthly.toLocaleString()}/mo all-in).`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/lead-generator" },
  openGraph: { title, description, url: "/lead-generator", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Lead Generation", path: "/lead-generator" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/lead-generator#service`,
  serviceType: "Inbound Lead Capture and Follow-Up",
  name: `Lead Generation by AlgoNyte, ${climbing.name} tier`,
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  description:
    "Voice AI receptionist, missed-call text-back, DM auto-reply, and auto-booking. Captures every inbound lead so nothing goes cold. Part of the Climbing tier.",
  areaServed: { "@type": "Country", name: "United States" },
  offers: {
    "@type": "Offer",
    name: climbing.name,
    price: climbing.monthly,
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: climbing.monthly,
      priceCurrency: "USD",
      unitCode: "MON",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
    eligibleTransactionVolume: {
      "@type": "PriceSpecification",
      price: climbing.setup,
      priceCurrency: "USD",
      description: `One-time setup: $${climbing.setup}`,
    },
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/pricing#climbing`,
  },
};

const faqs = [
  {
    q: "How is this different from a regular answering service?",
    a: "An answering service takes a message. Climbing's voice AI qualifies the lead, asks the questions your business needs to triage a job, and books the appointment directly onto your calendar. SMS, DMs, and missed calls get the same treatment. The lead doesn't wait on hold or get a callback the next day.",
  },
  {
    q: "How fast do leads get a response?",
    a: "Seconds. A missed call triggers an SMS the moment it disconnects. A DM on Instagram or Facebook gets a reply before the lead switches tabs. A form fill kicks off an immediate text. Speed-to-lead is the single biggest predictor of who books — we keep it under 15 seconds.",
  },
  {
    q: "What if the AI can't handle a call or message?",
    a: "It escalates. Anything flagged as a complaint, an existing-job follow-up, or a question outside its training routes to you with the full conversation captured. You see the context before you reply.",
  },
  {
    q: "Does it work with my existing phone number?",
    a: "Yes. We forward your existing number; you keep it and nothing changes for your customers. The voice AI picks up first and can transfer to you for anything it can't handle.",
  },
  {
    q: "What happens to my leads if I cancel?",
    a: "You keep everything. Your contacts, conversation history, calendar bookings, and dashboards are all yours. No hostage data, no lock-in.",
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

export default function LeadGeneratorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-3xl">
            <h1 className="h-display">
              Lead Generation for{" "}
              <span className="text-brand-deep">Service Businesses</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Every call answered. Every text returned. Every DM replied.
              Voice AI, SMS, and DM automation that captures inbound leads
              24/7 and books them onto your calendar. Part of the{" "}
              <strong className="text-brand-deep">{climbing.name}</strong> tier.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/pricing#climbing"
                className="inline-flex items-center justify-center rounded-full bg-brand-deep px-8 py-4 text-white font-medium hover:bg-brand-deep/90 transition-colors text-lg"
              >
                See {climbing.name} &rarr;
              </Link>
              <Link
                href="/web-presence"
                className="text-sm text-brand-deep underline decoration-brand-deep/30 underline-offset-4 hover:decoration-brand-deep transition-colors"
              >
                Don&rsquo;t have a website yet? Start here &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand frame */}
      <section className="section bg-brand-deep text-white">
        <div className="container-page max-w-3xl text-center">
          <p className="text-xl sm:text-2xl font-medium leading-snug text-white/90 italic">
            &ldquo;Your business answers the phone while you sleep — and texts back the ones you missed.&rdquo;
          </p>
        </div>
      </section>

      {/* What it does */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">The full inbound capture system.</h2>
          <ul className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <li>
              <strong className="text-brand-deep">Voice AI 24/7 phone receptionist.</strong>{" "}
              Answers, qualifies, and books appointments. Handles after-hours, lunch
              breaks, and the calls that come in while you&rsquo;re on a job. Transfers
              to you when it should.
            </li>
            <li>
              <strong className="text-brand-deep">Missed-call text-back — instant SMS.</strong>{" "}
              The moment a call is missed, the caller gets a text. Most lost leads
              are recovered before they finish dialing the next business on the list.
            </li>
            <li>
              <strong className="text-brand-deep">DM auto-reply on Facebook, Instagram, WhatsApp, and Google Business Messages.</strong>{" "}
              The conversation continues across whichever channel the lead chose.
              One inbox, all the threads.
            </li>
            <li>
              <strong className="text-brand-deep">Lead qualification flow customized to your business.</strong>{" "}
              The questions you&rsquo;d ask on the phone, asked in the AI&rsquo;s voice.
              Service type, urgency, location, budget — whatever you need to triage.
            </li>
            <li>
              <strong className="text-brand-deep">Auto-booking onto your calendar.</strong>{" "}
              Qualified leads land as a confirmed time. No phone tag, no back-and-forth
              to find a slot.
            </li>
            <li>
              <strong className="text-brand-deep">Appointment reminders by SMS and email.</strong>{" "}
              Cuts no-shows. Sent on a schedule that matches your job type.
            </li>
            <li>
              <strong className="text-brand-deep">Custom dashboard.</strong>{" "}
              Missed calls handled, DMs replied, leads booked, no-shows recovered.
              Real numbers, in one view.
            </li>
          </ul>
        </div>
      </section>

      {/* Speed-to-lead callout */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <div className="rounded-2xl border-2 border-brand-deep bg-brand-accent/30 p-8 sm:p-10">
            <h2 className="h-section text-brand-deep">No lead goes cold.</h2>
            <div className="mt-4 space-y-4 text-brand-muted leading-relaxed">
              <p>
                The leads you&rsquo;re already paying to generate — from Google,
                referrals, your website, your truck wrap — most of them don&rsquo;t
                book because nobody picked up fast enough. A five-minute delay cuts
                conversion in half. An hour-long delay is the same as not calling back.
              </p>
              <p>
                Climbing closes that gap. Voice AI answers the phone the first time
                it rings. SMS goes out the second a call is missed. DMs get a reply
                before the lead loses interest. The math on your existing lead flow
                changes the day this turns on.
              </p>
              <p className="text-sm text-brand-muted/80 border-t border-brand-deep/10 pt-4">
                Everything stays in your accounts — your phone number, your Google
                Business Profile, your CRM. If you ever leave, the leads and the
                conversation history come with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Climbing tier CTA card */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">Lead capture is part of {climbing.name}.</h2>
          <div className="mt-6 lift-card rounded-2xl bg-white p-8 sm:p-10 border border-slate-200">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted">
                  Tier
                </p>
                <p className="text-3xl font-bold text-brand-deep mt-1">{climbing.name}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-brand-muted">Setup</p>
                <p className="text-2xl font-bold text-brand-deep">${climbing.setup}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-baseline gap-2">
              <span className="text-4xl font-bold text-brand-deep">
                ${climbing.monthly.toLocaleString()}
              </span>
              <span className="text-brand-muted">
                /mo{climbing.monthlyNote ? `, ${climbing.monthlyNote}` : ""}
              </span>
            </div>

            <div className="mt-2 flex flex-wrap gap-4 text-sm text-brand-muted">
              <span>Live in {climbing.liveIn}</span>
              <span>&middot;</span>
              <span>Month-to-month</span>
            </div>

            <ul className="mt-6 space-y-3 text-brand-muted leading-relaxed">
              {climbing.features.slice(0, 6).map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 text-brand-deep font-bold text-xs">&#10003;</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/pricing#climbing"
                className="inline-flex items-center justify-center rounded-full bg-brand-deep px-8 py-4 text-white font-medium hover:bg-brand-deep/90 transition-colors text-lg"
              >
                See {climbing.name} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">Straight answers on lead capture.</h2>
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

      <FinalCTA title="Ready to stop losing leads?" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(serviceJsonLd) }}
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

