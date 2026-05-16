import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import IntegrationsStrip from "@/components/sections/IntegrationsStrip";
import CursorSpotlight from "@/components/CursorSpotlight";

const title = "AI Receptionist | Answer, Qualify, and Book Every Lead 24/7";
const description =
  "An AI receptionist that answers every call, text, and form fill in seconds, qualifies the lead, and books it to your calendar. Live in 5-7 days, done for you.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ai-receptionist" },
  openGraph: { title, description, url: "/ai-receptionist", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "AI Receptionist", path: "/ai-receptionist" }]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/ai-receptionist#service`,
  serviceType: "AI Receptionist",
  name: "AI Receptionist by Algonyte Labs",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  description,
  areaServed: { "@type": "Country", name: "United States" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: 549,
    highPrice: 1299,
    offerCount: 3,
    url: `${siteConfig.url}/pricing`,
  },
};

const faqs = [
  {
    q: "How fast can you get me live?",
    a: "5 to 7 days for a standard install. We keep your existing phone number, plug into your calendar, and train the agent on your services, pricing, and service area before any leads hit it.",
  },
  {
    q: "Does it replace my receptionist?",
    a: "It replaces the gap between the phone ringing and someone being free to answer it. If you have a human receptionist, the AI handles overflow, after-hours, and the moments they're on another call.",
  },
  {
    q: "What channels does it cover?",
    a: "Inbound calls (Pro AI plan), missed-call text-back, website chat, SMS, WhatsApp, and Instagram DM. Every channel funnels into the same conversation and the same calendar.",
  },
  {
    q: "Will it sound like a robot?",
    a: "No. The agent is trained on your shop's voice and uses natural language. Most customers can't tell, and the ones who do almost always continue the booking anyway because it's easier than calling back.",
  },
  {
    q: "What if I want a human on the call?",
    a: "Configurable. Anything flagged as a complaint, an existing-job follow-up, or a high-value inquiry routes to your phone with full context already captured.",
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

export default function AIReceptionistPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">AI Receptionist</p>
            <h1 className="h-display">
              Never miss another{" "}
              <span className="text-brand-deep">booking call.</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              An AI receptionist that answers every call, text, and form fill in
              seconds, qualifies the lead, and books it on your calendar. After
              hours, on weekends, while you&rsquo;re on a job. Live in 5 to 7
              days.
            </p>
            <p className="mt-4 text-brand-muted">
              <strong className="text-brand-deep">Real result:</strong> Car Hub
              in Macomb Township booked 10 jobs in the first week after install
              — calls they would have missed.
            </p>
            <div className="mt-8">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-brand-deep px-8 py-4 text-white font-medium hover:bg-brand-deep/90 transition-colors text-lg"
              >
                Book a 30-minute walkthrough →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">The problem</p>
          <h2 className="h-section">Service businesses lose money the same way.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Your phone rings when you can&rsquo;t answer it. You&rsquo;re
              under a car, on a roof, with a patient, on a job site. The call
              goes to voicemail. The caller dials the next shop on Google.
              That&rsquo;s the leak.
            </p>
            <p>
              You don&rsquo;t need more leads. The leads are already coming in.
              You need the ones you already get to be answered, qualified, and
              booked in the moment, not the next morning.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">The system</p>
          <h2 className="h-section">One workflow. Every channel. Always on.</h2>
          <ul className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <li>
              <strong className="text-brand-deep">Answers inbound calls instantly.</strong>{" "}
              Picks up when you can&rsquo;t. Asks the questions you&rsquo;d ask. Books to your calendar.
            </li>
            <li>
              <strong className="text-brand-deep">Texts back every missed call.</strong>{" "}
              SMS goes out within seconds. The conversation continues until the lead is on the books.
            </li>
            <li>
              <strong className="text-brand-deep">Handles chat, SMS, WhatsApp, Instagram DM.</strong>{" "}
              Same agent, same context, every channel.
            </li>
            <li>
              <strong className="text-brand-deep">Qualifies before it books.</strong>{" "}
              Year/make/model, scope of work, budget range, timing — whatever your business actually needs to triage.
            </li>
            <li>
              <strong className="text-brand-deep">Escalates the right calls.</strong>{" "}
              Complaints, existing-job follow-ups, and high-value inquiries route to your phone with full context.
            </li>
            <li>
              <strong className="text-brand-deep">Asks for the review after the job.</strong>{" "}
              Google review request fires automatically once the appointment is marked complete.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">The result</p>
          <h2 className="h-section">10 booked jobs in week one for an independent auto shop.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Car Hub in Macomb Township, Michigan installed the system on a
              Monday. By the end of that week the AI receptionist had booked
              10 jobs the shop would have missed otherwise — after-hours
              text-backs, late-night form fills, calls that came in during a
              busy bay.
            </p>
            <p>
              Nothing about the install was unique to auto repair. The same
              workflow runs the same for an HVAC shop, a roofer, a dental
              practice, or a landscaping company.{" "}
              <Link href="/insights/car-hub-macomb-case-study" className="text-brand-deep font-medium hover:underline">
                Read the full Car Hub case study →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">How install works</p>
          <h2 className="h-section">Design → Train → Deploy → Optimize. 5 to 7 days.</h2>
          <ol className="mt-6 space-y-5 text-brand-muted leading-relaxed list-decimal pl-6">
            <li>
              <strong className="text-brand-deep">Day 1 — Design.</strong>{" "}
              We map your services, pricing, qualifying questions, escalation
              rules, and calendar. No template — your business, your script.
            </li>
            <li>
              <strong className="text-brand-deep">Day 2-4 — Train.</strong>{" "}
              The agent is trained on the script, tested against real-sounding
              prospect calls, and tuned until it books cleanly.
            </li>
            <li>
              <strong className="text-brand-deep">Day 5-6 — Deploy.</strong>{" "}
              We forward your existing phone number, wire up SMS and chat
              channels, and go live in shadow mode so you can listen in.
            </li>
            <li>
              <strong className="text-brand-deep">Day 7+ — Optimize.</strong>{" "}
              We review the first week of conversations, tighten the script,
              and adjust qualifying questions based on what actually came in.
            </li>
          </ol>
        </div>
      </section>

      <IntegrationsStrip />

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">FAQ</p>
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

      <section className="relative overflow-hidden section bg-brand-deep text-white">
        <CursorSpotlight />
        <div className="relative container-page max-w-3xl text-center">
          <h2 className="h-section text-white">Stop losing leads this week.</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            30-minute walkthrough. We&rsquo;ll show you exactly what the system
            looks like running on your existing phone number and calendar.
          </p>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-brand-deep font-medium hover:bg-white/90 transition-colors text-lg"
            >
              Book a 30-minute walkthrough →
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
