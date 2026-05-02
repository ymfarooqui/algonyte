import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const title = "Free Website Review";
const description =
  "A short, honest look at your website. We tell you what is working, what is costing you customers, and what to fix first.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/free-review" },
  openGraph: { title, description, url: "/free-review", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const includes = [
  "A first-impression read of your homepage",
  "Two to three friction points hurting conversion",
  "A quick mobile experience check",
  "One concrete next step you can act on this week",
];

const expectations = [
  { label: "Cost", value: "Free. No catch." },
  { label: "Time", value: "Around 2 business days." },
  { label: "Format", value: "A short written summary by email." },
  { label: "What we need", value: "Your URL and one sentence on your business." },
];

export default function FreeReviewPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Free Website Review</p>
            <h1 className="h-display">
              Find out if your site is{" "}
              <span className="text-brand-deep">costing you customers.</span>
            </h1>
            <p className="lede mt-6 max-w-2xl">
              A short, honest look at your website. We tell you what is working, what is hurting
              conversion, and what to fix first. No sales pitch attached.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow mb-3">What you get</p>
            <h2 className="h-section">A clear, useful read on your site.</h2>
            <ul className="mt-8 space-y-3">
              {includes.map((p) => (
                <li key={p} className="flex gap-3 text-brand-ink">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl bg-brand-accent/60 p-6 sm:p-8">
              <p className="eyebrow mb-3">What to expect</p>
              <dl className="grid gap-3">
                {expectations.map((e) => (
                  <div key={e.label} className="flex gap-3 text-brand-ink/90">
                    <dt className="font-medium text-brand-deep w-32 shrink-0">{e.label}</dt>
                    <dd className="text-brand-ink/80">{e.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-8 text-sm text-brand-muted">
              Need something deeper than a free read?{" "}
              <Link href="/services" className="text-brand-deep underline-offset-4 hover:underline">
                See full audits and pricing
              </Link>
              .
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
