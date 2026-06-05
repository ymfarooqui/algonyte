import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import CursorSpotlight from "@/components/CursorSpotlight";
import { jsonLdString } from "@/lib/jsonLd";
import { webPresenceServiceSchema } from "@/lib/schema";

const growthServices = services.filter((s) => s.id !== "web-presence");

const title = "Web Presence | A Site That Gets You Found, and Books the Work";
const description =
  "A fast, mobile-first website plus the local SEO and Google Business setup that gets you found, on Google and on AI search. Live in about a week, with booking and your CRM wired in. Built for you, managed for you.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/web-presence" },
  openGraph: { title, description, url: "/web-presence", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Web Presence", path: "/web-presence" }]);

// What you walk away with, the build plus the ongoing care. No prices here;
// we scope and price the whole thing on a quick call.
const included = [
  "A fast, mobile-first site built around how customers find and book you",
  "Local SEO and a Google Business Profile set up and verified",
  "Structured for Google and AI search from day one",
  "Online booking and a contact form wired straight into your CRM",
  "Managed hosting, SSL, CDN, and daily backups, handled for you",
  "Content edits when you need them, plus a direct line when something breaks",
];

const faqs = [
  {
    q: "How fast can you get me live?",
    a: "About 5–7 days from a signed brief. We hold ourselves to that, it's a public number, not a hopeful estimate.",
  },
  {
    q: "I already have a website. Do I have to replace it?",
    a: "Not always. If your site is solid, we can keep it and take over the parts that aren't working. If it's slow, broken on mobile, or invisible on Google, we rebuild. We'll tell you straight on the call.",
  },
  {
    q: "Who owns everything when I leave?",
    a: "You do. The domain, the code, the content, the Google Business Profile, your Stripe or Square accounts, all yours. We don't hold anything hostage.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No long-term contract. You stay because the work is working, not because a 12-month agreement says you have to. Cancel and you leave with your domain, your code, and your profile intact.",
  },
  {
    q: "I've had bad experiences with Hibu and Scorpion. How are you different?",
    a: "No annual lock-in, no bundling in services you didn't ask for, no surprise rate hike on renewal. One team, one number responsible for whether the phone rings, and a real person who answers when something breaks.",
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

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-shrink-0 text-brand-primary"
      aria-label="Included"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function WebPresencePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-3xl">
            <h1 className="h-display">A site that gets you found.</h1>
            <p className="mt-4 max-w-2xl rounded-xl border border-brand-deep/10 bg-white/60 px-5 py-4 text-brand-deep leading-relaxed">
              Most of your next customers check you out online before they ever call. We make
              sure what they find earns the call.
            </p>
            <p className="lede mt-6 max-w-2xl">
              A fast, mobile-first website that gets you found on Google and AI search, live in
              about a week, with booking and your CRM wired in, and the whole thing managed for
              you after launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn-primary-featured">
                Book a 30-minute walkthrough
              </Link>
              <a href="#included" className="btn-secondary">
                See what&rsquo;s included
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem framing */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">
            Your customers won&rsquo;t buy from a business they can&rsquo;t find online.
          </h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              You&rsquo;ve probably stitched something together over the years: a site a nephew
              built, a host you&rsquo;re afraid to log into, a Facebook page, a Stripe account you
              set up once and forgot, a Google Business Profile that&rsquo;s half filled in.
            </p>
            <p>
              Each piece works on its own. Nobody&rsquo;s running them as a system. So the site
              doesn&rsquo;t rank, customers can&rsquo;t book, and every month you pay vendors who
              point fingers at each other when something goes wrong.
            </p>
            <p>
              We replace the whole tangle with one setup, one team, and one number that&rsquo;s
              responsible for whether the phone actually rings.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="included" className="section bg-brand-soft/40">
        <div className="container-page">
          <h2 className="h-section max-w-3xl">Everything it takes to get found, in one place.</h2>
          <p className="mt-4 max-w-2xl text-brand-muted leading-relaxed">
            We build it, launch it, and look after it, so the site keeps earning instead of
            quietly breaking. We scope the build to your business and give you one clear number
            on a quick call.
          </p>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <ul className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-brand-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link href="/book" className="btn-primary-featured">
                Book a 30-minute walkthrough
              </Link>
              <span className="text-sm text-brand-muted">
                30-day money-back &middot; no long-term contract
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Growth engine, the à la carte services */}
      <section className="section">
        <div className="container-page">
          <h2 className="h-section max-w-3xl">Add a growth engine when you&rsquo;re ready.</h2>
          <p className="mt-4 max-w-2xl text-brand-muted leading-relaxed">
            Your site gets you found. These make the phone ring and the calendar fill. Add one,
            add a few, each runs while you sleep, and each stands on its own.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {growthServices.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-ink to-brand-deep p-6 text-brand-soft shadow-xl shadow-black/30 ring-1 ring-inset ring-white/10 transition hover:ring-white/20"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-soft/45">
                  {service.tagline}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-tight text-white">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-soft/70">
                  {service.job}
                </p>
                <p className="mt-4 text-sm font-medium text-brand-soft">
                  Explore
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why not Hibu / Scorpion callout */}
      <section className="section bg-brand-soft/40">
        <div className="container-page max-w-3xl">
          <h2 className="h-section">
            No annual contracts. No surprise rate hikes. No vendor runaround.
          </h2>
          <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
            <p>
              Hibu, Scorpion, and the rest lock you in for a year, bundle in things you never
              asked for, and quietly raise your rate at renewal. When something breaks, your
              account manager&rsquo;s manager calls you back in four business days.
            </p>
            <p>
              We ship in about a week, manage the whole thing for you, and give you a direct
              line. No 12-month trap, you stay because it&rsquo;s working.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
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

      {/* Final CTA banner */}
      <section className="relative overflow-hidden section bg-brand-deep text-white">
        <CursorSpotlight />
        <div className="relative container-page max-w-3xl text-center">
          <h2 className="h-section text-white">Stop running four vendors.</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Give us 30 minutes. We&rsquo;ll pull up your current site, your Google Business
            Profile, and where you stand in search, then tell you straight what to fix first.
          </p>
          <div className="mt-8">
            <Link href="/book" className="btn-primary-featured">
              Book a 30-minute walkthrough
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(webPresenceServiceSchema()) }}
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
