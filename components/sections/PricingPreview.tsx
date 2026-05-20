"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import { siteTiers, growthTiers } from "@/lib/tiers";
import { isPlaceholder } from "@/lib/constants";

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
          Two tracks, six tiers. The price you see is what you pay.
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-brand-muted"
          variants={reveal.fadeUp}
        >
          Flat monthly hosting for every Presence tier. Flat retainers for Growth — no
          per-minute charges, no overage fees, no usage caps.
        </motion.p>

        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2"
          variants={reveal.container(0.12, 0.1)}
        >
          {/* Site track */}
          <motion.div variants={reveal.fadeUpLg}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep/70 mb-4">
              Presence
            </p>
            <div className="space-y-3">
              {siteTiers.map((t) => {
                const featured = false;
                return (
                  <div
                    key={t.id}
                    className="lift-card flex items-center justify-between rounded-2xl bg-brand-soft px-6 py-4 shadow-soft"
                  >
                    <div>
                      <p className="font-medium text-brand-deep">{t.name}</p>
                      <p className="mt-0.5 text-xs text-brand-muted">{t.tagline}</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="tabular-nums font-medium text-brand-deep">
                        ${t.monthly}
                        <span className="text-brand-muted font-normal text-sm">/mo</span>
                      </p>
                      <p className="text-xs text-brand-muted tabular-nums">${t.setup} setup</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Growth track */}
          <motion.div variants={reveal.fadeUpLg}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep/70 mb-4">
              Growth
            </p>
            <div className="space-y-3">
              {growthTiers.map((t) => {
                const featured = "featured" in t && t.featured;
                return (
                  <div
                    key={t.id}
                    className={`flex items-center justify-between rounded-2xl px-6 py-4 ${
                      featured
                        ? "bg-brand-deep text-brand-soft shadow-deep"
                        : "lift-card bg-brand-soft shadow-soft"
                    }`}
                  >
                    <div>
                      <p className={`font-medium ${featured ? "text-brand-soft" : "text-brand-deep"}`}>
                        {t.name}
                      </p>
                      <p className={`mt-0.5 text-xs ${featured ? "text-brand-soft/60" : "text-brand-muted"}`}>
                        {t.tagline}
                      </p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className={`tabular-nums font-medium ${featured ? "text-brand-soft" : "text-brand-deep"}`}>
                        ${t.monthly}
                        <span className={`font-normal text-sm ${featured ? "text-brand-soft/60" : "text-brand-muted"}`}>/mo</span>
                      </p>
                      <p className={`text-xs tabular-nums ${featured ? "text-brand-soft/60" : "text-brand-muted"}`}>
                        ${t.setup} setup
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-10 text-sm text-brand-muted text-center max-w-2xl mx-auto"
          variants={reveal.fadeUp}
        >
          Presence hosting is month-to-month — <strong className="text-brand-deep">cancel anytime.</strong>{" "}
          Awake is month-to-month. Climbing and Scale have a 6-month minimum.{" "}
          30-day refund if it&rsquo;s not working out.
        </motion.p>
        <motion.div className="mt-4 text-center" variants={reveal.fadeUp}>
          <Link
            href="/pricing"
            className="text-brand-deep font-medium hover:underline"
          >
            See what&rsquo;s in each tier →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
