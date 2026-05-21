import type { Metadata } from "next";
import Link from "next/link";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";

export const metadata: Metadata = {
  title: "Page not found — AlgoNyte",
  description:
    "We can't find that page. Head back home or explore our AI receptionist, voice agents, and web presence services.",
  robots: { index: false, follow: true },
};

const POPULAR = [
  {
    label: "AI Receptionist",
    href: "/ai-receptionist",
    note: "Answers, qualifies, and books leads 24/7.",
  },
  {
    label: "Web Presence",
    href: "/web-presence",
    note: "Sites, hosting, and indexing — done right.",
  },
  {
    label: "Pricing",
    href: "/pricing",
    note: "Three plans, no per-minute charges.",
  },
  {
    label: "Book a call",
    href: "/contact",
    note: "Talk to a human in 15 minutes.",
  },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent/60 via-brand-soft to-brand-soft">
      <PageHeroBackdrop />
      <div className="relative container-page pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tabular-nums text-brand-primary">
                404
              </span>
              <span aria-hidden className="h-px w-10 bg-brand-line" />
              <span className="eyebrow">Page not found</span>
            </div>
            <h1 className="h-display mt-5">
              That page seems to have{" "}
              <em className="not-italic text-brand-primary">gone missing.</em>
            </h1>
            <p className="lede mt-6">
              The link may be old, or the page may have moved. Try one of
              these — or head back to the homepage.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/" className="btn-primary">
                Back to home
              </Link>
              <Link href="/contact" className="btn-link">
                Talk to us
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <ul className="space-y-2">
              {POPULAR.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group lift-card lift-sm flex items-baseline justify-between gap-4 rounded-xl bg-brand-soft px-5 py-4 shadow-soft"
                  >
                    <div>
                      <p className="font-medium text-brand-deep">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-brand-muted">
                        {item.note}
                      </p>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 shrink-0 translate-y-1 text-brand-primary transition-transform duration-200 group-hover:translate-x-0.5"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
