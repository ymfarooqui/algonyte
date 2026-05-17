import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import { jsonLdString } from "@/lib/jsonLd";

const title = "AI Receptionist for Auto Dealerships | Book Test Drives 24/7";
const description =
  "AI receptionist built for auto dealers. Answer every Cars.com, AutoTrader, and Facebook Marketplace lead, qualify trade-ins, and book test drives 24/7 — even when sales is on the lot. Plans from $549/mo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries/auto-dealerships" },
  openGraph: { title, description, url: "/industries/auto-dealerships", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Industries", path: "/industries/auto-dealerships" },
  { name: "Auto Dealerships", path: "/industries/auto-dealerships" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/industries/auto-dealerships#service`,
  serviceType: "AI Receptionist for Auto Dealerships",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  audience: { "@type": "BusinessAudience", audienceType: "Auto Dealerships" },
  description,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: 549,
    highPrice: 1299,
    offerCount: 3,
  },
  subjectOf: {
    "@type": "CreativeWork",
    name: "Car Hub Macomb case study",
    url: `${siteConfig.url}/insights/car-hub-macomb-case-study`,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does this replace our BDC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It sits in front of your BDC and handles first-touch instantly, around the clock. Leads still land in your CRM and your team still closes the deal. The agent takes the calls and form fills that would have gone to voicemail or sat unanswered for hours, qualifies them, and books test drives directly into your calendar.",
      },
    },
    {
      "@type": "Question",
      name: "How does it handle trade-in valuations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The agent asks the qualifying questions — year, make, model, trim, mileage, condition, VIN if available — and captures the answers in a clean lead record. It doesn't quote a number on the spot. Pricing stays with your team, where it belongs. You walk into the follow-up call with everything you need to value the trade.",
      },
    },
    {
      "@type": "Question",
      name: "What CRMs and tools do you integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By default we pass qualified leads into your existing CRM via email and Zapier, which covers VinSolutions, DealerSocket, CDK, Reynolds, and most others without custom work. Direct API integrations are available on the Pro AI plan when your CRM supports it. We'd rather be honest about what's wired in day one than promise an integration that takes weeks to ship.",
      },
    },
    {
      "@type": "Question",
      name: "How fast does it respond to Cars.com and AutoTrader leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seconds. The agent fires an SMS the moment a form fill hits your inbox or a missed call lands on your line. The conversation continues over text until the lead is qualified and a test drive is on the calendar. That speed is the entire point — internet leads decay fast, and the first dealer to respond usually wins the appointment.",
      },
    },
    {
      "@type": "Question",
      name: "Will it spam customers with too many follow-ups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cadence is configurable per store. We tune it during onboarding — typical is two or three nudges over a week, then a hand-off to a long-term re-engagement track. The agent stops the moment a lead replies, books, or asks to be left alone. We'd rather under-message than burn your phone numbers with carriers.",
      },
    },
  ],
};

export default function AutoDealershipsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Industries — Auto Dealerships</p>
            <h1 className="h-display">
              AI lead automation for{" "}
              <span className="text-brand-deep">auto dealerships</span>.
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Every Cars.com inquiry, AutoTrader form fill, and Facebook
              Marketplace message gets an instant response. Trade-ins get
              qualified. Test drives land on your calendar — at 11pm on a
              Sunday or in the middle of a Saturday rush.
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
          <p className="eyebrow mb-4">Why dealers lose leads</p>
          <h2 className="h-section">The lead is gone in five minutes. Most dealerships can&rsquo;t respond that fast.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Internet leads decay quickly. The shopper who filled out a
              Cars.com form for a used Tahoe at 9:47pm is also looking at three
              other dealerships and is one tap away from booking with whoever
              answers first. By the morning the form is cold. By Monday
              it&rsquo;s closed lost.
            </p>
            <p>
              Floor reps can&rsquo;t fix this. They&rsquo;re with customers,
              walking the lot, or running paperwork. The BDC helps but it
              doesn&rsquo;t work weekends and evenings the way leads do, and
              even during business hours the queue gets long enough that the
              first reply lands well outside the window where it would have
              mattered.
            </p>
            <p>
              The leak isn&rsquo;t the volume of leads. It&rsquo;s the time
              between a lead arriving and someone answering it. Close that gap
              and the same ad spend produces more booked test drives.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Real client</p>
          <h2 className="h-section">Car Hub, Macomb Township: 10 booked jobs in week one.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Car Hub is an independent auto shop outside Detroit — different
              business model than a new-car franchise, but the same underlying
              problem. Before the AI receptionist went live, after-hours calls
              died in voicemail and new-customer leads went to the next shop
              on Google. In the first week the system was live, it booked 10
              jobs the shop wouldn&rsquo;t have captured otherwise.
            </p>
            <p>
              The mechanics that work for an independent shop in Macomb
              Township are the same ones that work for a franchise store in
              Naperville or a used-car lot in Cicero. The lead hits your line.
              The agent answers in seconds. The conversation continues over
              SMS until a time is booked. The salesperson walks in the next
              morning with the appointment, the trade details, and the
              transcript already in hand.
            </p>
            <p>
              <Link href="/insights/car-hub-macomb-case-study" className="text-brand-deep font-medium hover:underline">
                Read the full Car Hub case study →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">What the AI does for a dealership</p>
          <h2 className="h-section">Built around the way deals actually start.</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">Instant lead response</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Every Cars.com, AutoTrader, dealer-site, and Facebook
                Marketplace form fill triggers an SMS within seconds. Missed
                calls fire a text-back automatically. No more overnight lead
                queue.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">Trade-in qualification</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                The agent captures year, make, model, trim, mileage, and
                condition over text so your team walks into the follow-up with
                everything they need to value the trade. Pricing stays with
                you.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">Test-drive booking</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Once a lead is qualified, the agent books the appointment
                directly into your sales calendar — with the vehicle of
                interest, contact info, and trade details attached.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">Cold lead re-engagement</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                The Pro AI plan can re-engage your last 30 to 90 days of cold
                form fills with a tailored SMS and route any replies back into
                live conversation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">After-hours coverage</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Evenings, weekends, holidays — the lot may be dark but leads
                still come in. The agent runs the same play 24/7 so a
                Saturday-night Cars.com lead is on Monday&rsquo;s calendar.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">Bilingual handling (Pro AI)</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                In bilingual markets, the agent detects the caller&rsquo;s
                language and switches to Spanish without a hand-off. Available
                on the Pro AI plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Integrations</p>
          <h2 className="h-section">Wired into the tools you already run.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Day one, qualified leads land in your CRM via email and Zapier.
              That covers VinSolutions, DealerSocket, CDK, Reynolds, and the
              long tail of dealer CRMs without any custom integration work.
              For shops that need direct API hand-off, that&rsquo;s on the
              Pro AI plan when the CRM supports it.
            </p>
            <p>
              On the inbound side, the agent plugs into your existing main
              line via call forwarding, your website chat, your SMS short
              code if you have one, and the lead inboxes you already
              monitor. No new phone tree. No retraining the floor.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="h-section">Plans starting at $549/month.</h2>
          <p className="mt-6 text-brand-muted leading-relaxed">
            Starter is the missed-call text-back and SMS qualification flow.
            Growth adds the 24/7 chat agent, WhatsApp and Instagram DM, and
            branching workflows for trade-in and test-drive paths. Pro AI
            layers in the voice agent, cold-lead re-engagement, custom
            integrations, and bilingual handling.
          </p>
          <p className="mt-4">
            <Link href="/pricing" className="text-brand-deep font-medium hover:underline">
              See full pricing →
            </Link>
          </p>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="h-section">Common questions from dealer principals and GMs.</h2>
          <dl className="mt-6 divide-y divide-slate-200">
            {faqJsonLd.mainEntity.map((q) => (
              <div key={q.name} className="py-6">
                <dt className="text-lg font-semibold text-brand-deep">{q.name}</dt>
                <dd className="mt-2 text-brand-muted leading-relaxed">
                  {q.acceptedAnswer.text}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-brand-muted">
            Want to see it run on your inventory?{" "}
            <Link href="/book" className="text-brand-deep font-medium hover:underline">
              Book a 30-minute walkthrough →
            </Link>
          </p>
        </div>
      </section>

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
