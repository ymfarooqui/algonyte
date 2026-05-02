import type { Metadata } from "next";
import Link from "next/link";
import FounderBio from "@/components/FounderBio";

const title = "About";
const description =
  "Farooqui Digital builds affordable, easy-to-use websites for small businesses, with clear customer journeys and no agency bloat.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const values = [
  {
    title: "Clarity over cleverness",
    body: "Visitors should always know what you do, who you help, and what to do next. We design for that first. Everything else follows.",
  },
  {
    title: "Fair, honest pricing",
    body: "Small businesses deserve transparent pricing without retainer traps or padded scopes. You see the price, the deliverable, and the timeline up front.",
  },
  {
    title: "No agency bloat",
    body: "No layers of account managers, change-order games, or 12-week timelines for a five-page site. Just the work, done well.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">About Farooqui Digital</p>
            <h1 className="h-display">
              Affordable websites,{" "}
              <span className="text-brand-deep">built around the customer.</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Farooqui Digital helps small businesses get online and stay effective online,
              without the cost, complexity, or runaround of a traditional agency.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page space-y-16 max-w-3xl">
          <div>
            <p className="eyebrow mb-3">Our story</p>
            <h2 className="h-section">Built from years of watching real users get stuck.</h2>
            <div className="mt-6 space-y-4 text-brand-muted leading-relaxed">
              <p>
                Farooqui Digital grew out of a simple observation: most small business websites
                aren&apos;t broken because they look bad. They&apos;re broken because the path
                from visitor to customer is unclear. Buttons hide, copy buries the offer, and
                mobile experiences quietly turn people away.
              </p>
              <p>
                We started Farooqui Digital to fix that, at a price small businesses can actually afford.
                Whether you need a brand-new site, a focused refresh, or an honest second opinion
                on the one you have, our job is to make the customer journey obvious and the
                whole project feel easy.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">What we believe</p>
            <h2 className="h-section">Principles that shape every project.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="card">
                  <h3 className="text-lg font-semibold text-brand-ink">{v.title}</h3>
                  <p className="mt-2 text-brand-muted leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3">How we work</p>
          <h2 className="h-section">Small team. Direct communication. Real results.</h2>
          <p className="mt-6 text-brand-muted leading-relaxed">
            You&apos;ll work directly with the person doing the work. No handoffs, no hidden
            subcontractors, no surprise scope changes. Most builds wrap in two to four weeks, and
            every engagement ends with a site you can actually run yourself.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/services" className="btn-primary">
              See Services & Pricing
            </Link>
            <Link href="/free-review" className="btn-secondary">
              Get a Free Website Review
            </Link>
          </div>
        </div>
      </section>

      <FounderBio />
    </>
  );
}
