import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import { jsonLdString } from "@/lib/jsonLd";
import { growthTiers } from "@/lib/tiers";

const title = "AI Receptionist in Macomb, MI | Stop Missing Service Calls";
const description = `AI receptionist for service businesses in Macomb, MI. Answer, qualify, and book leads 24/7 across Macomb County and the Detroit metro. Plans from $${growthTiers[0].monthly}/mo.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/locations/macomb" },
  openGraph: { title, description, url: "/locations/macomb", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Locations", path: "/locations/macomb" },
  { name: "Macomb, MI", path: "/locations/macomb" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/locations/macomb#service`,
  serviceType: "AI Receptionist & Lead Automation",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Macomb County, Michigan",
    containedInPlace: { "@type": "State", name: "Michigan" },
  },
  description,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: growthTiers[0].monthly,
    highPrice: growthTiers[1].monthly,
    offerCount: 3,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you only work with businesses inside Macomb County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We're based in the Detroit metro and our system is fully remote, so we work with service businesses anywhere in Michigan and the wider US. We highlight Macomb because our first real client, Car Hub in Macomb Township, runs the system day in and day out.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you get a Macomb-area business live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most installs are live in 5 to 7 days. We use your existing phone number with call forwarding, plug into your calendar, and train the agent on your services, pricing, and service area before any leads hit it.",
      },
    },
    {
      "@type": "Question",
      name: "Will the AI receptionist sound like it's in Michigan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tone is configurable. We train the agent on your shop's voice (friendly, blunt, formal, whatever fits) and on local context like nearby cities, service area boundaries, and the way your customers describe their problems.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to calls that come in after hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every missed call gets a text within seconds. The conversation continues over SMS until the lead is qualified and booked, or until a human steps in the next morning with full context already captured.",
      },
    },
  ],
};

export default function MacombLocationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Macomb County, Michigan</p>
            <h1 className="h-display">
              AI receptionist for{" "}
              <span className="text-brand-deep">Macomb, MI</span> service businesses.
            </h1>
            <p className="lede mt-6 max-w-2xl">
              We install an AI receptionist on top of your existing phone, website,
              and inbox so missed calls, after-hours leads, and form fills get
              answered, qualified, and booked without you touching them.
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
          <p className="eyebrow mb-4">Why this matters in Macomb</p>
          <h2 className="h-section">Service businesses here lose money the same way: missed calls.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Drive Hall Road or M-59 on a Tuesday afternoon and you&rsquo;ll pass
              dozens of small shops: auto repair, HVAC, plumbing, roofing,
              landscaping, dental, salons, each one trying to grow with a phone
              that rings when nobody can answer. The owner is under a car, on a
              roof, with a patient, or on a job site. The call goes to voicemail.
              The lead calls the next shop on Google. That&rsquo;s the leak.
            </p>
            <p>
              You don&rsquo;t need a bigger marketing budget to fix that. You need
              the calls and form fills you already get to be answered, qualified,
              and booked the moment they arrive, at 2pm on a Tuesday and at 11pm
              on a Sunday.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Local proof</p>
          <h2 className="h-section">Car Hub, Macomb Township: 10 booked jobs in week one.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Car Hub is an independent auto shop in Macomb Township. Before we
              installed the AI receptionist, after-hours calls went to voicemail
              and roughly half of new-customer leads never got a callback fast
              enough. In the first week the system was live, it booked 10 jobs
              the shop wouldn&rsquo;t have captured otherwise: missed-call
              text-backs that turned into appointments, late-night form fills
              that were qualified and on the calendar by the time the bay opened
              the next morning.
            </p>
            <p>
              That&rsquo;s the standard we work to. Real leads, real bookings,
              real numbers. Nothing about the install was custom to auto repair.
              The same workflow runs equally well for an HVAC shop in Sterling
              Heights, a roofer in Shelby Township, or a dental practice in
              Clinton Township.
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
          <p className="eyebrow mb-4">What we install</p>
          <h2 className="h-section">The system, end to end.</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">Missed call text back</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Every unanswered call triggers an SMS within seconds. The
                conversation continues over text until the lead is qualified and
                a time is on your calendar.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">AI chat on your site</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                A 24/7 chat agent on your website plus SMS, WhatsApp, and
                Instagram DM. Trained on your services, pricing, and service area.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">Voice AI (Climbing plan)</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Picks up the phone when you can&rsquo;t. Qualifies, books, and
                hands off with a full transcript so you walk into every job
                already informed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">CRM and follow-up</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Every lead is tracked. Reminders, follow-up sequences, and Google
                review requests fire automatically. No spreadsheets, no
                forgotten callbacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Service area</p>
          <h2 className="h-section">Across Macomb County and the Detroit metro.</h2>
          <p className="mt-6 text-brand-muted leading-relaxed">
            We work with service businesses in Macomb Township, Sterling Heights,
            Warren, Clinton Township, Shelby Township, Roseville, St. Clair
            Shores, Chesterfield, Eastpointe, Fraser, New Baltimore, and the rest
            of Macomb County, plus the wider Detroit metro. The system is
            remote-first, so the install runs the same whether you&rsquo;re a
            single-bay shop or a multi-location operation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="h-section">Common questions from Macomb-area owners.</h2>
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
            Ready to stop losing leads?{" "}
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
