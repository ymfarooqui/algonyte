"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import { siteTiers, growthTiers } from "@/lib/tiers";

export default function ProductGrid() {
  return (
    <section className="section">
      <motion.div
        className="container-page"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
          What we run
        </motion.p>
        <motion.h2 className="h-section max-w-3xl" variants={reveal.fadeUp}>
          Get found. Get the call. Get paid. We run all of it.
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-brand-muted"
          variants={reveal.fadeUp}
        >
          Start with Site, layer Growth on top when you&rsquo;re ready. One
          team, one bill, one number to call.
        </motion.p>

        {/* Two-product grid */}
        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2"
          variants={reveal.container(0.1, 0.1)}
        >
          {/* Site card */}
          <motion.div variants={reveal.fadeUpLg}>
            <Link
              href="/web-presence"
              className="group lift-card flex h-full flex-col relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-accent via-brand-soft to-brand-soft p-7 sm:p-9 shadow-soft"
            >
              <span aria-hidden className="absolute left-0 top-6 bottom-6 w-[3px] bg-brand-primary rounded-r-full" />
              <div className="pl-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl sm:text-3xl font-medium text-brand-deep tracking-tight">
                    Site
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-primary bg-brand-accent rounded-md px-2.5 py-1">
                    Start here
                  </span>
                </div>
                <p className="mt-2 text-brand-muted leading-relaxed">
                  Open your business online. Built fast, hosted flat.
                </p>

                {/* Three rungs */}
                <ul className="mt-5 space-y-2">
                  {siteTiers.map((t) => (
                    <li key={t.id} className="flex items-baseline justify-between text-sm">
                      <span className="font-medium text-brand-deep">{t.name}</span>
                      <span className="text-brand-muted tabular-nums">${t.setup} setup</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs text-brand-primary font-medium">
                  ${siteTiers[0].monthly}/mo flat hosting forever — never moves as you grow
                </p>

                <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary">
                  See Site tiers
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Growth card */}
          <motion.div variants={reveal.fadeUpLg}>
            <Link
              href="/pricing#growth"
              className="group lift-card flex h-full flex-col rounded-2xl bg-brand-soft p-7 sm:p-9 shadow-soft"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl sm:text-3xl font-medium text-brand-deep tracking-tight">
                  Growth
                </h3>
              </div>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Answer your leads, rank on Google, run paid ads.
              </p>

              {/* Three rungs */}
              <ul className="mt-5 space-y-2">
                {growthTiers.map((t) => (
                  <li key={t.id} className="flex items-baseline justify-between text-sm">
                    <span className="font-medium text-brand-deep">{t.name}</span>
                    <span className="text-brand-muted tabular-nums">
                      ${t.monthly}/mo{t.monthlyNote ? ` (${t.monthlyNote})` : ""}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs text-brand-muted">
                Month-to-month on Awake. 6-month minimum on SEO.
              </p>

              <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary">
                See Growth tiers
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </p>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
