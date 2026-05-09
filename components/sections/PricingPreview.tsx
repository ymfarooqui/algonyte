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
    <section className="section bg-brand-soft">
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
              <motion.div
                key={p.id}
                variants={reveal.fadeUpLg}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
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
                <h3 className="text-xl font-semibold text-brand-deep">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-semibold text-brand-ink">
                    ${p.price}
                  </span>
                  <span className="text-brand-muted text-sm">/mo</span>
                </div>
                {anchors[p.id] && (
                  <p className="mt-1 text-xs text-brand-deep/70 font-medium">
                    {anchors[p.id]}
                  </p>
                )}
                <p className="mt-4 text-brand-muted text-sm leading-relaxed min-h-[3.5rem]">
                  {p.tagline}
                </p>
                <ul className="mt-5 mb-7 space-y-2 text-sm flex-1">
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
                  href={isPlaceholder(p.checkoutUrl) ? "/contact" : p.checkoutUrl}
                  className="btn-primary w-full"
                >
                  {isPlaceholder(p.checkoutUrl) ? "Talk to us" : "Get Started"}
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          className="mt-10 text-sm text-brand-muted text-center max-w-2xl mx-auto"
          variants={reveal.fadeUp}
        >
          Every plan starts with a 30-minute onboarding call. If it&rsquo;s
          not working out in the first 14 days, we refund you. Starter and
          Growth have a one-time $399 setup fee.
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
