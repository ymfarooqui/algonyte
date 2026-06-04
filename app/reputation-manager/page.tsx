import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import FinalCTA from "@/components/sections/FinalCTA";
import { jsonLdString } from "@/lib/jsonLd";
import { reputationManagementServiceSchema } from "@/lib/schema";

const title = "Reputation Management for Service Businesses | AlgoNyte";
const description =
  "Automated post-job review requests across Google, Yelp, and Facebook, with smart routing that catches unhappy customers before they post publicly. Move your rating in 60 days.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/reputation-manager" },
  openGraph: { title, description, url: "/reputation-manager", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Reputation Management", path: "/reputation-manager" }]);

const included = [
  "Review requests that fire automatically on job completion",
  "Sent across Google, Yelp, and Facebook",
  "Smart routing sends unhappy customers to private feedback first",
  "A polite second nudge for slow responders, then it stops on its own",
  "Custom message templates written for your service type",
  "A dashboard with five-star count, response rate, and rating trend",
];

const faqs = [
  {
    q: "Which platforms does it cover?",
    a: "Google, Yelp, and Facebook. The workflow fires on job completion and asks for the review where it helps you most, with smart routing for unhappy customers active on every platform we set up.",
  },
  {
    q: "What if someone leaves a bad review?",
    a: "Before the public review link goes out, the customer is asked how the job went. Anyone who responds with a low rating is routed to a private feedback form first — so you get a chance to fix the issue before it becomes a public one-star. The routing covers every platform we run.",
  },
  {
    q: "Do I need to write the review request messages?",
    a: "No. We build the message templates for you, customized to your service type and your brand voice — not generic copy-paste. If you do a specific kind of job (HVAC, plumbing, electrical, landscaping), we tailor the language to match.",
  },
  {
    q: "How long until my rating moves?",
    a: "Most service businesses see meaningful movement inside 60 days. The math: 50 jobs/month at a 20% response rate = 10 new reviews per month. A business sitting at 3.8 with 30 reviews can realistically reach 4.6 inside 90 days of consistent post-job requests.",
  },
  {
    q: "Can I see the metrics?",
    a: "Yes. You get a dashboard with five-star count, average rating trend, and request-to-review response rate by channel, with trend lines over time so you can watch the curve move.",
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
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" className="mt-0.5 shrink-0 text-emerald-400" aria-hidden>
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ReputationManagerPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-3xl">
            <h1 className="h-display">
              Reputation Management{" "}
              <span className="text-brand-deep">for Service Businesses</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Job completes &rarr; a text goes out &rarr; happy customers post reviews &rarr;
              unhappy ones get routed to a private feedback flow before they go public.
              Automated, running on every job, moving your rating in 60 days.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book" className="btn-primary-featured">
                Book a 30-minute walkthrough
              </Link>
              <Link
                href="/services"
                className="text-sm text-brand-deep underline decoration-brand-deep/30 underline-offset-4 hover:decoration-brand-deep transition-colors"
              >
                See all the services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand frame ──────────────────────────────────────────────────── */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-brand-deep leading-snug italic">
            &ldquo;Your business runs while you sleep, including the steady drip of new reviews
            that move your rating.&rdquo;
          </p>
        </div>
      </section>

      {/* ── What it does ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">How the reputation system works.</h2>
          <ul className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <li>
              <strong className="text-brand-deep">Triggers automatically on job completion.</strong>{" "}
              A text goes out within an hour of the job being marked done. That window is where
              the five-stars live — customers are still in the good feeling.
            </li>
            <li>
              <strong className="text-brand-deep">Smart routing catches unhappy customers first.</strong>{" "}
              Ratings of 4&ndash;5 stars proceed to the public review link. Ratings of 1&ndash;3
              stars route to a private feedback form, giving you a shot to fix it before it hits
              your public profile.
            </li>
            <li>
              <strong className="text-brand-deep">Across Google, Yelp, and Facebook.</strong>{" "}
              Review requests go out to the platforms that matter for your business, with smart
              routing active on all of them.
            </li>
            <li>
              <strong className="text-brand-deep">Polite drip for slow responders.</strong>{" "}
              A second nudge goes out three days later if there&rsquo;s no response. Stops
              automatically once the review lands. No spam, no repeat asks.
            </li>
            <li>
              <strong className="text-brand-deep">Dashboard with the metric that matters.</strong>{" "}
              Five-star count, response rate, and average rating trend over time — not vanity
              counts. These are the numbers that show whether the system is working.
            </li>
            <li>
              <strong className="text-brand-deep">Custom message templates per service type.</strong>{" "}
              HVAC, plumbing, electrical, landscaping. The request is written to match what you
              just did, not a generic &ldquo;review us on Google&rdquo; blast.
            </li>
          </ul>
        </div>
      </section>

      {/* ── What's included ──────────────────────────────────────────────── */}
      <section className="section bg-brand-soft/40">
        <div className="container-page">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-ink to-brand-deep p-8 text-brand-soft shadow-xl shadow-black/30 ring-1 ring-inset ring-white/10 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
            <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-soft/45">
              Reputation engine
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Built to move your rating, on autopilot.
            </h2>
            <ul className="mt-6 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-brand-soft/80 leading-relaxed">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/book" className="btn-primary-featured">
                Book a 30-minute walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why this matters ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">The math behind a moving rating.</h2>
          <div className="mt-6 space-y-6 text-brand-muted leading-relaxed">
            <p>
              A service business running 50 jobs per month with a 20% review-request response
              rate generates 10 new reviews per month. At a starting average of 4.7, that&rsquo;s
              a year of compounding social proof that moves you past every competitor sitting on a
              stale 4.2 from three years ago.
            </p>
            <p>
              The smart-routing piece matters because of how ratings work. Customers who rate
              4&ndash;5 stars on the internal satisfaction question get sent straight to the
              public review link. Customers who rate 1&ndash;3 stars get routed to a private
              feedback form first. You get notified, you fix the issue, and the conversation stays
              off your public profile. It doesn&rsquo;t eliminate bad reviews entirely, but it
              removes the ones that come from an unresolved complaint you never knew about.
            </p>
            <p>
              Reception and reputation are really the same job — handling what happens around the
              lead. You can add reviews on its own, or run it alongside the receptionist; either
              way it works on the same loop. You already need someone following up after jobs.
              This is that, done for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────────── */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">Common questions.</h2>
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

      <FinalCTA title="Want to see what reputation management looks like for your business?" />

      {/* jsonLdString sanitizes all XSS-sensitive bytes — see lib/jsonLd.ts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(reputationManagementServiceSchema()) }}
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
