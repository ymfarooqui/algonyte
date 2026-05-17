import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import { jsonLdString } from "@/lib/jsonLd";

const title = "Car Hub Macomb Case Study: 10 Booked Jobs in Week One";
const description =
  "How Car Hub, an independent auto shop in Macomb Township, MI, booked 10 jobs in the first week after installing our AI receptionist. Setup and lessons.";
const publishedAt = "2026-05-13";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/insights/car-hub-macomb-case-study" },
  openGraph: {
    title,
    description,
    url: "/insights/car-hub-macomb-case-study",
    type: "article",
    publishedTime: publishedAt,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: publishedAt,
  dateModified: publishedAt,
  author: {
    "@type": "Person",
    name: "Yaseen Farooqui",
    url: `${siteConfig.url}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/algonyte-labs-logo.png` },
  },
  mainEntityOfPage: `${siteConfig.url}/insights/car-hub-macomb-case-study`,
  about: {
    "@type": "Thing",
    name: "AI Receptionist for Auto Repair",
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Insights", path: "/insights" },
  { name: "Car Hub Macomb Case Study", path: "/insights/car-hub-macomb-case-study" },
]);

export default function CarHubCaseStudy() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-12 sm:pt-28 sm:pb-16">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Case study · Macomb Township, MI</p>
            <h1 className="h-display">
              10 booked jobs in the first week, on the calls{" "}
              <span className="text-brand-deep">they would have missed.</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Car Hub is an independent auto shop in Macomb Township. We
              installed our AI receptionist on top of their existing phone and
              calendar. Here&rsquo;s what the first week looked like, what we
              built, and what we&rsquo;d do differently next time.
            </p>
            <p className="mt-4 text-sm text-brand-muted">
              Published May 13, 2026 · 6 min read
            </p>
          </div>
        </div>
      </section>

      <article className="section">
        <div className="container-page max-w-3xl prose-content space-y-10 text-brand-muted leading-relaxed">
          <div>
            <h2 className="h-section text-brand-deep">The problem we were asked to solve</h2>
            <p className="mt-4">
              Car Hub does what most independent shops do: takes inbound calls
              for diagnostics, brake work, suspension, tires, and the long tail
              of repair work that comes through Google searches and word of
              mouth. The owners are technicians first. When the phone rang while
              they were under a car, it usually went to voicemail. Some of those
              callers left a message. Most didn&rsquo;t. They moved on to the
              next shop on the Google list.
            </p>
            <p className="mt-4">
              The leak wasn&rsquo;t marketing. They were ranking fine locally
              and getting plenty of inbound. The leak was the gap between the
              call coming in and somebody being free to answer it — and the gap
              between an after-hours form fill and the next morning, by which
              point the lead had already booked somewhere else.
            </p>
          </div>

          <div>
            <h2 className="h-section text-brand-deep">What we installed</h2>
            <p className="mt-4">
              We kept their existing phone number and existing calendar. The AI
              receptionist sits between the two:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>
                Every unanswered call triggers an SMS within a few seconds:
                &ldquo;Hey, this is Car Hub — saw we missed you. What can we
                help with?&rdquo; The conversation continues over text.
              </li>
              <li>
                The agent is trained on Car Hub&rsquo;s services, pricing
                ranges, service area, hours, and the questions that actually
                qualify a job (year/make/model, what&rsquo;s wrong, how soon
                they need it).
              </li>
              <li>
                Once the lead is qualified, the agent offers two or three open
                time slots from the live calendar and books the appointment.
              </li>
              <li>
                A confirmation goes out by SMS, then a reminder the day before.
                After the job, the system asks for a Google review.
              </li>
            </ul>
            <p className="mt-4">
              No rip-and-replace. The owners didn&rsquo;t have to learn a new
              CRM, port a number, or change how they answer calls when
              they&rsquo;re free. The system only fires when a human
              doesn&rsquo;t.
            </p>
          </div>

          <div>
            <h2 className="h-section text-brand-deep">What happened in week one</h2>
            <p className="mt-4">
              Ten jobs on the calendar that the shop wouldn&rsquo;t have
              captured otherwise. Some were straightforward missed-call
              text-backs — caller didn&rsquo;t leave a voicemail, would have
              been lost, instead got a text within seconds and was on the books
              ten minutes later. Others were late-night form fills from the
              website that were qualified and scheduled before the bay opened
              the next morning.
            </p>
            <p className="mt-4">
              The bigger thing, harder to put a number on: the owners stopped
              spending the first hour of every day returning voicemails. The
              previous-day inbound was already triaged, and the calendar
              reflected reality.
            </p>
          </div>

          <div>
            <h2 className="h-section text-brand-deep">What we&rsquo;d do differently</h2>
            <p className="mt-4">
              Two things we tuned in week two and would recommend any shop bake
              in from day one:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>
                <strong>Tighter qualifying questions for diagnostics.</strong>{" "}
                Our first script asked too many questions before offering a
                time. Customers who knew exactly what they wanted (oil change,
                tire rotation) bounced. We pared the qualifying flow down to two
                questions for routine work and saved the deeper diagnostic
                triage for jobs that needed it.
              </li>
              <li>
                <strong>Owner-only escalation path.</strong> A handful of
                callers had complaints or were following up on existing jobs.
                We added an instant escalation: any message that looks like a
                complaint or references an existing repair gets forwarded to
                the owner&rsquo;s personal phone with full context, instead of
                being routed through the booking flow.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="h-section text-brand-deep">Why this generalizes</h2>
            <p className="mt-4">
              Nothing about the install was unique to auto repair. The same
              workflow runs equally well for an HVAC company answering
              no-heat calls on a January Sunday, a roofer fielding storm-damage
              leads, a plumber handling burst-pipe emergencies, or a dental
              practice triaging new-patient inquiries. The pattern is the same:
              service business, single physical location or small team, phone
              that rings when nobody can answer, leads that move on if they
              don&rsquo;t get a response inside ten minutes.
            </p>
            <p className="mt-4">
              The AI doesn&rsquo;t replace the owner. It replaces the gap
              between &ldquo;phone rings&rdquo; and &ldquo;owner is free to
              answer it.&rdquo;
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-brand-soft/40 p-8">
            <h2 className="text-xl font-semibold text-brand-deep">
              Want the same setup for your shop?
            </h2>
            <p className="mt-3">
              We install in 5 to 7 days, keep your existing phone number and
              calendar, and train the agent on your specific business. Plans
              start at $549/month.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-brand-deep px-6 py-3 text-white font-medium hover:bg-brand-deep/90 transition-colors"
              >
                Book a 30-minute walkthrough
              </Link>
              <Link
                href="/locations/macomb"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-medium hover:border-slate-400 transition-colors"
              >
                More on Macomb-area installs
              </Link>
            </div>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumb) }}
      />
    </>
  );
}
