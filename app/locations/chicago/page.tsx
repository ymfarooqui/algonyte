import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";

const title = "AI Receptionist in Chicago | Stop Missing Service Calls";
const description =
  "AI receptionist for service businesses in Chicago, IL. Answer, qualify, and book leads 24/7 across Chicagoland and the collar counties. Plans from $549/mo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/locations/chicago" },
  openGraph: { title, description, url: "/locations/chicago", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Locations", path: "/locations/chicago" },
  { name: "Chicago, IL", path: "/locations/chicago" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/locations/chicago#service`,
  serviceType: "AI Receptionist & Lead Automation",
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  areaServed: {
    "@type": "City",
    name: "Chicago",
    containedInPlace: { "@type": "State", name: "Illinois" },
  },
  description,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: 549,
    highPrice: 1299,
    offerCount: 3,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you only work with businesses inside Chicago city limits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The system is remote and works for any service business across Chicagoland — the city, Cook County, and the collar counties (DuPage, Lake, Will, Kane, McHenry). We highlight Chicago because the density of service businesses here means the lead leak is large and immediate.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you get a Chicago-area business live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most installs go live in 5 to 7 days. We use your existing business phone number with call forwarding, plug into your calendar, and train the agent on your services, pricing, and service area before any real leads hit it.",
      },
    },
    {
      "@type": "Question",
      name: "Can the agent handle Spanish-speaking callers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bilingual handling is configurable on the Pro AI plan. The agent can detect the caller's language, switch to Spanish, and run the full qualification and booking flow without handing off. On Starter and Growth, the agent is English-only.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to leads from the suburbs versus the Loop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The agent is trained on your service area boundaries and dispatch rules. If you only run jobs inside I-294, the agent qualifies that during the call and books only in-area leads. If you cover both the city and the collar counties, it routes by neighborhood and ZIP without manual triage.",
      },
    },
  ],
};

export default function ChicagoLocationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Chicago, Illinois</p>
            <h1 className="h-display">
              AI receptionist for{" "}
              <span className="text-brand-deep">Chicago, IL</span> service businesses.
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
          <p className="eyebrow mb-4">Why this matters in Chicago</p>
          <h2 className="h-section">Service businesses here lose leads the same way the city moves: too fast to catch up to.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Chicago is one of the densest service-business markets in the
              country. HVAC, plumbing, roofing, auto repair, dental, legal,
              cleaning, landscaping — every block has a small operator trying to
              answer the phone while a job is in progress. The owner is on a
              roof in Avondale, under a hood in Cicero, or with a client in the
              Loop. The call goes to voicemail. The lead taps the next Google
              result. The job goes to whoever picked up.
            </p>
            <p>
              The gap is even wider after hours. A burst pipe in Lincoln Park
              at 11pm on a Saturday doesn&rsquo;t wait until Monday — the
              homeowner calls four plumbers and books the first one who picks
              up or texts back. If that&rsquo;s not you, the job is gone before
              you&rsquo;ve seen the missed call.
            </p>
            <p>
              You don&rsquo;t need a bigger ad budget to fix that. You need the
              calls and form fills you already get to be answered, qualified,
              and booked the moment they arrive — at 2pm on a Tuesday and at
              11pm on a Sunday.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Proof from a sister market</p>
          <h2 className="h-section">Car Hub, Macomb Township: 10 booked jobs in week one.</h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Our first real client is an independent auto shop outside
              Detroit. Before the AI receptionist went live, after-hours calls
              died in voicemail and new-customer leads slipped to the next shop
              on Google. In the first week the system was live, it booked 10
              jobs the shop wouldn&rsquo;t have captured otherwise — missed-call
              text-backs that turned into appointments, late-night form fills
              that were qualified and on the calendar by the time the bay
              opened the next morning.
            </p>
            <p>
              The same workflow runs for a Chicago HVAC company, a Lincoln
              Square dental practice, or a Naperville roofer. The install
              doesn&rsquo;t care which industry it&rsquo;s plugged into — it
              cares that a lead reached you and got an answer in seconds.
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
                conversation continues over text until the lead is qualified
                and a time is on your calendar.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">AI chat on your site</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                A 24/7 chat agent on your website plus SMS, WhatsApp, and
                Instagram DM. Trained on your services, pricing, and the
                neighborhoods you actually cover.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">Voice AI (Pro AI plan)</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Picks up the phone when you can&rsquo;t. Qualifies, books, and
                hands off with a full transcript. Bilingual English/Spanish
                handling is available on this plan.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-deep">CRM and follow-up</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Every lead is tracked. Reminders, follow-up sequences, and
                Google review requests fire automatically — no spreadsheets, no
                forgotten callbacks.
              </p>
            </div>
          </div>
          <p className="mt-8 text-brand-muted leading-relaxed">
            Want the deeper product breakdown? See the{" "}
            <Link href="/ai-receptionist" className="text-brand-deep font-medium hover:underline">
              AI Receptionist page
            </Link>{" "}
            or jump straight to{" "}
            <Link href="/pricing" className="text-brand-deep font-medium hover:underline">
              pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Service area</p>
          <h2 className="h-section">Across Chicagoland and the collar counties.</h2>
          <p className="mt-6 text-brand-muted leading-relaxed">
            We work with service businesses across the city of Chicago — Loop,
            North Side, West Side, South Side, and everywhere between — plus
            Cook County and the collar counties: DuPage, Lake, Will, Kane, and
            McHenry. That includes Oak Park, Evanston, Naperville, Schaumburg,
            Aurora, Joliet, Elgin, Waukegan, and the smaller markets in
            between. The system is remote-first, so the install runs the same
            whether you&rsquo;re a single-truck operator in Cicero or a
            multi-location operation covering the I-90 / I-294 corridor.
          </p>
          <p className="mt-4 text-brand-muted leading-relaxed">
            Working further out?{" "}
            <Link href="/locations/macomb" className="text-brand-deep font-medium hover:underline">
              We also serve the Detroit metro
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">Founding program</p>
          <h2 className="h-section">Built for solo operators and small crews.</h2>
          <p className="mt-6 text-brand-muted leading-relaxed">
            Plans start at $549/month with a one-time $549 setup. The Founding
            Member program offers three limited spots at 50% off setup and 30%
            off monthly for the first six months in exchange for honest
            feedback and a testimonial. If you&rsquo;re a Chicago-area
            operator who wants to be in early, that&rsquo;s the cheapest way
            in.
          </p>
          <p className="mt-4">
            <Link href="/founding" className="text-brand-deep font-medium hover:underline">
              See the founding program →
            </Link>
          </p>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="h-section">Common questions from Chicago-area owners.</h2>
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
