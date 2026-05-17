"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import { plans, isPlaceholder } from "@/lib/constants";

const anchors: Record<string, string> = {
  starter: "Less than one missed job per month.",
  growth: "About 1/4 the cost of a part-time hire.",
  "pro-ai": "About 1/3 the cost of a full-time receptionist.",
};

export default function PricingPreview() {
  return (
    <section className="section bg-brand-paper">
      <motion.div
        className="container-page"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
          Pricing
        </motion.p>
        <motion.h2 className="h-section max-w-2xl" variants={reveal.fadeUp}>
          Three plans. The price you see is what you pay.
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-brand-muted"
          variants={reveal.fadeUp}
        >
          Flat monthly rate. No per-minute charges, no overage fees, no usage
          caps that quietly turn into a bigger bill.
        </motion.p>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-3"
          variants={reveal.container(0.14, 0.15)}
        >
          {plans.map((p) => {
            const featured = "featured" in p && p.featured;
            return (
              <motion.div key={p.id} variants={reveal.fadeUpLg} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-7 ${
                    featured
                      ? "bg-brand-deep text-brand-soft shadow-deep -translate-y-2 sm:-translate-y-4"
                      : "lift-card bg-brand-soft shadow-soft"
                  }`}
                >
                {featured && (
                  <div className="pointer-events-none absolute -top-3 inset-x-0 flex justify-center">
                    <span className="pointer-events-auto rounded-md bg-brand-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-soft">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-xl font-medium tracking-tight ${featured ? "text-brand-soft" : "text-brand-deep"}`}>{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className={`text-5xl font-medium tracking-tightest tabular-nums ${featured ? "text-brand-soft" : "text-brand-deep"}`}>
                    ${p.price}
                  </span>
                  <span className={`text-sm ${featured ? "text-brand-soft/60" : "text-brand-muted"}`}>/mo</span>
                </div>
                {anchors[p.id] && (
                  <p className={`mt-1.5 text-xs font-medium ${featured ? "text-brand-primary" : "text-brand-primary"}`}>
                    {anchors[p.id]}
                  </p>
                )}
                <p className={`mt-5 text-sm leading-relaxed min-h-[3.5rem] ${featured ? "text-brand-soft/70" : "text-brand-muted"}`}>
                  {p.tagline}
                </p>
                <ul className="mt-5 mb-7 space-y-2.5 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`mt-0.5 flex-shrink-0 ${featured ? "text-brand-primary" : "text-brand-primary"}`}
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className={featured ? "text-brand-soft/85" : "text-brand-muted"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={isPlaceholder(p.checkoutUrl) ? "/contact" : p.checkoutUrl}
                  className={
                    featured
                      ? "btn-primary-featured w-full"
                      : "btn-primary w-full"
                  }
                >
                  {isPlaceholder(p.checkoutUrl) ? "Talk to us" : "Get Started"}
                </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          className="mt-10 text-sm text-brand-muted text-center max-w-2xl mx-auto"
          variants={reveal.fadeUp}
        >
          Every plan is month to month — <strong className="text-brand-deep">cancel anytime.</strong>{" "}
          30-day refund if it&rsquo;s not working out. Starter and Growth
          have a one-time $549 setup fee.
        </motion.p>
        <motion.div className="mt-4 text-center" variants={reveal.fadeUp}>
          <Link
            href="/pricing"
            className="text-brand-deep font-medium hover:underline"
          >
            See what&rsquo;s in each plan →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
