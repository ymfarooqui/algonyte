import type { Metadata } from "next";
import Link from "next/link";
import { growthTiers } from "@/lib/tiers";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import FinalCTA from "@/components/sections/FinalCTA";
import { jsonLdString } from "@/lib/jsonLd";
import { reputationManagementServiceSchema } from "@/lib/schema";

const awake = growthTiers[0];
const climbing = growthTiers[1];

const title = "Reputation Management for Service Businesses | Algonyte";
const description =
  `Automated post-job review requests with smart routing for unhappy customers. Now included in ${awake.name} ($${awake.monthly}/mo, Google reviews) and ${climbing.name} ($${climbing.monthly}/mo, multi-platform). Move your rating in 60 days.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/reputation-manager" },
  openGraph: { title, description, url: "/reputation-manager", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Reputation Management", path: "/reputation-manager" }]);

const faqs = [
  {
    q: "Is this Google-only?",
    a: `On ${awake.name}, yes — the review workflow triggers on job completion and sends customers to your Google Business Profile. On ${climbing.name}, review requests go to Google, Yelp, and Facebook, with smart routing for unhappy customers on all three platforms.`,
  },
  {
    q: "What if someone leaves a bad review?",
    a: `Before the public review link goes out, the customer is asked how the job went. Anyone who responds with a low rating is routed to a private feedback form first. That gives you a chance to fix the issue before it becomes a public one-star. On ${climbing.name}, this routing logic covers all platforms — Google, Yelp, and Facebook.`,
  },
  {
    q: "Do I need to write the review request messages?",
    a: "No. We build the message templates for you. They're customized to your service type and your brand voice — not generic copy-paste. If you do a specific kind of job (HVAC, plumbing, electrical, landscaping), we tailor the language to match.",
  },
  {
    q: "How long until my rating moves?",
    a: "Most service businesses see meaningful movement inside 60 days. The math: 50 jobs/month at a 20% response rate = 10 new reviews per month. That compounds. A business sitting at 3.8 with 30 reviews can realistically be at 4.6 inside 90 days of consistent post-job requests.",
  },
  {
    q: "Can I see the metrics?",
    a: `Yes. Both ${awake.name} and ${climbing.name} include a dashboard with the numbers that actually matter: five-star count, average rating trend, and request-to-review response rate by channel. ${climbing.name} adds trend lines over time so you can see the curve moving.`,
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

export default function ReputationManagerPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Reputation Management</p>
            <h1 className="h-display">
              Reputation Management{" "}
              <span className="text-brand-deep">for Service Businesses</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Job completes &rarr; SMS goes out &rarr; happy customers post
              Google reviews &rarr; unhappy ones get routed to a private
              feedback flow before they go public. Automated, running on
              every job, moving your rating in 60 days.
            </p>
            <p className="mt-4 text-brand-muted">
              Now bundled into <strong className="text-brand-deep">Awake</strong>{" "}
              (Google reviews, $
              {awake.monthly}/mo) and{" "}
              <strong className="text-brand-deep">Climbing</strong>{" "}
              (multi-platform + smart routing, ${climbing.monthly}/mo all-in).
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/pricing#awake" className="btn-primary">
                See Awake &rarr;
              </Link>
              <Link
                href="/pricing#climbing"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand-deep px-8 py-4 text-brand-deep font-medium hover:bg-brand-deep hover:text-white transition-colors text-lg"
              >
                See Climbing &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand frame ──────────────────────────────────────────────────── */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-brand-deep leading-snug italic">
            &ldquo;Your business runs while you sleep &mdash; including the
            steady drip of new reviews that move your rating.&rdquo;
          </p>
        </div>
      </section>

      {/* ── What it does ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">The system</p>
          <h2 className="h-section">What reputation management actually does.</h2>
          <ul className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <li>
              <strong className="text-brand-deep">Triggers automatically on job completion.</strong>{" "}
              SMS goes out within an hour of the job being marked done. That window is
              where the five-stars live &mdash; customers are still in the good feeling.
            </li>
            <li>
              <strong className="text-brand-deep">Smart routing catches unhappy customers first.</strong>{" "}
              Ratings of 4&ndash;5 stars proceed to the public review link. Ratings of
              1&ndash;3 stars route to a private feedback form &mdash; giving you a
              shot to fix it before it hits your public profile.
            </li>
            <li>
              <strong className="text-brand-deep">
                Multi-platform on {climbing.name}; Google-only on {awake.name}.
              </strong>{" "}
              {awake.name} sends Google review requests. {climbing.name} adds Yelp and
              Facebook, with smart routing active on all three.
            </li>
            <li>
              <strong className="text-brand-deep">Polite drip for slow responders.</strong>{" "}
              A second nudge goes out three days later if there&rsquo;s no response.
              Stops automatically once the review lands &mdash; no spam, no repeat asks.
            </li>
            <li>
              <strong className="text-brand-deep">Dashboard with the metric that matters.</strong>{" "}
              Five-star count, response rate, and average rating trend over time. Not
              vanity counts &mdash; the numbers that show whether the system is working.
            </li>
            <li>
              <strong className="text-brand-deep">Custom message templates per service type.</strong>{" "}
              HVAC, plumbing, electrical, landscaping &mdash; the request is written to
              match what you just did, not a generic &ldquo;review us on Google&rdquo; blast.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Two-tier fork ─────────────────────────────────────────────────── */}
      <section className="section bg-brand-soft/40">
        <div className="container-page">
          <p className="eyebrow mb-4 text-center">Where reputation management lives now</p>
          <h2 className="h-section text-center mb-10">
            Two tiers. Pick the one that matches your operation.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* Card A — Awake */}
            <div className="lift-card p-8 flex flex-col gap-6">
              <div>
                <p className="eyebrow mb-2">{awake.name}</p>
                <p className="text-3xl font-bold text-brand-deep">
                  ${awake.monthly}
                  <span className="text-base font-normal text-brand-muted">/mo</span>
                </p>
                <p className="text-sm text-brand-muted mt-1">
                  ${awake.setup} one-time setup &middot; live in {awake.liveIn}
                </p>
                <p className="mt-3 text-brand-muted leading-relaxed text-sm">
                  Google review requests triggered on every job completion. The
                  right ask at the right moment, on autopilot.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-brand-muted flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-brand-deep mt-0.5">&#10003;</span>
                  Google review request workflow
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-deep mt-0.5">&#10003;</span>
                  Triggers automatically on job completion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-deep mt-0.5">&#10003;</span>
                  Basic dashboard (five-star count, response rate)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-deep mt-0.5">&#10003;</span>
                  Custom message templates for your service type
                </li>
              </ul>
              <Link href="/pricing#awake" className="btn-primary text-center">
                See {awake.name} &rarr;
              </Link>
            </div>

            {/* Card B — Climbing (featured) */}
            <div className="bg-brand-deep text-white rounded-2xl p-8 flex flex-col gap-6 shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <p className="eyebrow text-white/70">{climbing.name}</p>
                  <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">
                    Most complete
                  </span>
                </div>
                <p className="text-3xl font-bold text-white">
                  ${climbing.monthly}
                  <span className="text-base font-normal text-white/70">/mo</span>
                </p>
                <p className="text-sm text-white/60 mt-1">
                  ${climbing.setup} one-time setup &middot; live in {climbing.liveIn}
                </p>
                <p className="mt-3 text-white/80 leading-relaxed text-sm">
                  Multi-platform review requests plus smart routing for unhappy
                  customers &mdash; Google, Yelp, and Facebook, all in one workflow.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-white/80 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5">&#10003;</span>
                  Everything in {awake.name}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5">&#10003;</span>
                  Multi-platform requests (Google + Yelp + Facebook)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5">&#10003;</span>
                  Smart routing for unhappy customers on all platforms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5">&#10003;</span>
                  Custom dashboard with average rating trend lines
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5">&#10003;</span>
                  Also includes: Voice AI receptionist, Local SEO, citation cleanup
                </li>
              </ul>
              <Link
                href="/pricing#climbing"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-brand-deep font-medium hover:bg-white/90 transition-colors text-lg text-center"
              >
                See {climbing.name} &rarr;
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why this matters ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Why it matters</p>
          <h2 className="h-section">The math behind a moving rating.</h2>
          <div className="mt-6 space-y-6 text-brand-muted leading-relaxed">
            <p>
              A service business running 50 jobs per month with a 20% review-request
              response rate generates 10 new reviews per month. At a starting average
              of 4.7, that&rsquo;s a year of compounding social proof &mdash; the kind
              that moves you past every competitor sitting on a stale 4.2 from three
              years ago.
            </p>
            <p>
              The smart-routing piece matters because of how ratings actually work.
              Customers who rate 4&ndash;5 stars on the internal satisfaction question
              get sent straight to the public review link. Customers who rate 1&ndash;3
              stars get routed to a private feedback form first. You get notified, you
              fix the issue, and the conversation stays off your public profile. It
              doesn&rsquo;t eliminate bad reviews entirely &mdash; but it removes the
              ones that come from an unresolved complaint you never knew about.
            </p>
            <p>
              The reason reputation management lives inside the tiers instead of as a
              separate product: reception and reputation are the same job &mdash;
              handling what happens after the lead. Splitting them into separate line
              items was an artifact of how the product grew. Bundled is more honest.
              You already need someone answering the phone and following up after jobs.
              The review workflow is part of that same operating loop.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────────── */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">FAQ</p>
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

