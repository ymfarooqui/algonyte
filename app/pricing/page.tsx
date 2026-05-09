import type { Metadata } from "next";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";
import { plans } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three plans for the Farooqui Digital platform. Starts at $549 a month. If it's not working in 14 days we refund you.",
  alternates: { canonical: "/pricing" },
};

const compareRows = [
  { label: "CRM and pipeline", values: [true, true, true] },
  { label: "Automated email + SMS follow-up", values: [true, true, true] },
  { label: "Reputation management", values: [true, true, true] },
  { label: "Reporting dashboard", values: [true, true, true] },
  { label: "AI Chat Agent (24/7)", values: [false, true, true] },
  { label: "Advanced workflows", values: [false, true, true] },
  { label: "AI Voice Callback", values: [false, false, true] },
  { label: "Custom integrations", values: [false, false, true] },
  { label: "Dedicated strategist", values: [false, false, true] },
];

const faqs = [
  {
    q: "Is there a setup fee?",
    a: "Yes, $399 one time on Starter and Growth. Pro AI rolls setup into the first month.",
  },
  {
    q: "Can I cancel whenever?",
    a: "Yes. Every plan is month to month. You can cancel from the dashboard or send us an email.",
  },
  {
    q: "What's the 14-day refund?",
    a: "If you decide we're not a good fit in the first two weeks, we give you your money back on the subscription. The setup fee covers the work we already did, so that part stays.",
  },
  {
    q: "Do I need to bring tools I already use?",
    a: "Nope, the platform comes with everything. If there's a tool you can't live without, we can connect it on Growth or Pro AI.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <p className="eyebrow mb-4">Pricing</p>
          <h1 className="h-display max-w-3xl">
            Three plans.{" "}
            <span className="text-brand-deep">No hidden fees.</span>
          </h1>
          <p className="lede mt-6 max-w-2xl">
            Pick what fits where you are now. Move up when you outgrow it.
            Every plan starts with a 30-minute onboarding call, and if
            it&rsquo;s not the right fit in 14 days we refund you.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {plans.map((p) => {
              const featured = "featured" in p && p.featured;
              return (
                <div
                  key={p.id}
                  className={`card relative flex flex-col ${
                    featured
                      ? "ring-2 ring-brand-deep border-brand-deep/20 shadow-md"
                      : ""
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-deep px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                      Most Popular
                    </span>
                  )}
                  <h2 className="text-xl font-semibold text-brand-deep">{p.name}</h2>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-5xl font-semibold text-brand-ink">
                      ${p.price}
                    </span>
                    <span className="text-brand-muted text-sm">/mo</span>
                  </div>
                  <p className="mt-4 text-brand-muted text-sm leading-relaxed">
                    {p.tagline}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 flex-shrink-0 text-brand-deep"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span className="text-brand-muted">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.checkoutUrl}
                    className={`mt-7 ${featured ? "btn-primary" : "btn-secondary"}`}
                  >
                    Get Started
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft">
        <div className="container-page">
          <p className="eyebrow mb-4">Compare Plans</p>
          <h2 className="h-section mb-10">What&rsquo;s included.</h2>
          <div className="overflow-x-auto -mx-6 sm:mx-0 rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.id}
                      className="text-center py-4 px-5 text-base font-semibold text-brand-deep"
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100 last:border-0">
                    <td className="py-3.5 px-5 text-sm text-brand-ink">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="py-3.5 px-5 text-center">
                        {v ? (
                          <span className="text-brand-deep" aria-label="Included">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="inline"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </span>
                        ) : (
                          <span className="text-slate-300" aria-label="Not included">
                            ·
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="h-section mb-10">Common questions.</h2>
          <dl className="divide-y divide-slate-200">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="text-lg font-semibold text-brand-deep">{f.q}</dt>
                <dd className="mt-2 text-brand-muted leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-brand-muted">
            Still have questions?{" "}
            <Link href="/contact" className="text-brand-deep font-medium hover:underline">
              Get in touch →
            </Link>
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
