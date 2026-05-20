"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import { useAnimSpeed } from "@/lib/useAnimSpeed";
import FinalCTA from "@/components/sections/FinalCTA";
import ServicesFlowVisual from "@/components/ServicesFlowVisual";
import ServicesHeroStack from "@/components/ServicesHeroStack";
import StackMarquee from "@/components/StackMarquee";
import { faqs } from "./faqs";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import { siteTiers, growthTiers } from "@/lib/tiers";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---- helpers ---- */

function fmt(n: number) {
  return "$" + n.toLocaleString("en-US");
}

/* ---- icons ---- */

const Icon = {
  site: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/* ---- Site rung card ---- */

function SiteRungCard({ tier, index }: { tier: (typeof siteTiers)[number]; index: number }) {
  return (
    <motion.div
      variants={reveal.fadeUpLg}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className="relative flex flex-col rounded-2xl bg-white p-7 ring-1 ring-slate-200 shadow-sm hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-accent text-brand-deep font-semibold text-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
          {tier.liveIn}
        </span>
      </div>

      <h3 className="mt-5 text-[1.25rem] font-semibold text-brand-deep leading-tight">
        {tier.name}
      </h3>
      <p className="mt-1.5 text-sm text-brand-muted leading-relaxed">
        {tier.tagline}
      </p>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-brand-deep tabular-nums">{fmt(tier.setup)}</span>
        <span className="text-sm text-brand-muted">setup</span>
        <span className="ml-2 text-sm text-brand-muted">+ {fmt(tier.monthly)}/mo hosting</span>
      </div>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <Link
          href="/pricing#site"
          className="group/cta btn-secondary inline-flex w-full items-center justify-center gap-1.5"
        >
          See what&rsquo;s included
          <span className="transition-transform group-hover/cta:translate-x-0.5">{Icon.arrow}</span>
        </Link>
      </div>
    </motion.div>
  );
}

/* ---- Growth rung card ---- */

function GrowthRungCard({ tier, index }: { tier: (typeof growthTiers)[number]; index: number }) {
  const featured = tier.featured === true;
  const href = `/pricing#${tier.id}`;

  return (
    <motion.div
      variants={reveal.fadeUpLg}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={`relative flex flex-col rounded-2xl bg-white p-7 transition-shadow ${
        featured
          ? "ring-2 ring-brand-deep shadow-xl shadow-brand-deep/15"
          : "ring-1 ring-slate-200 shadow-sm hover:shadow-md"
      }`}
    >
      {featured && (
        <>
          <span className="absolute -top-3 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-deep px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-md shadow-brand-deep/30">
            <svg viewBox="0 0 24 24" className="h-3 w-3 text-brand-primary" fill="currentColor">
              <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
            </svg>
            Most Popular
          </span>
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-primary/10 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-brand-accent blur-3xl" />
          </div>
        </>
      )}

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg font-semibold text-sm ${featured ? "bg-brand-deep text-white" : "bg-brand-accent text-brand-deep"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${featured ? "bg-brand-deep/10 text-brand-deep" : "bg-brand-soft text-brand-muted"}`}>
            {tier.liveIn}
          </span>
        </div>

        <h3 className="mt-5 text-[1.25rem] font-semibold text-brand-deep leading-tight">
          {tier.name}
        </h3>
        <p className="mt-1.5 text-sm text-brand-muted leading-relaxed">
          {tier.tagline}
        </p>

        <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          {tier.setup > 0 && (
            <>
              <span className="text-2xl font-bold text-brand-deep tabular-nums">{fmt(tier.setup)}</span>
              <span className="text-sm text-brand-muted">setup</span>
              <span className="text-brand-muted/50 mx-1">·</span>
            </>
          )}
          <span className="text-2xl font-bold text-brand-deep tabular-nums">{fmt(tier.monthly)}/mo</span>
          {tier.monthlyNote && (
            <span className="text-xs text-brand-muted">({tier.monthlyNote})</span>
          )}
        </div>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <Link
            href={href}
            className={`group/cta inline-flex w-full items-center justify-center gap-1.5 ${featured ? "btn-primary" : "btn-secondary"}`}
          >
            See what&rsquo;s included
            <span className="transition-transform group-hover/cta:translate-x-0.5">{Icon.arrow}</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ---- main component ---- */

export default function ServicesContent() {
  const { s } = useAnimSpeed();
  return (
    <>
      {/* ---- HERO ---- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal.container(0.12, 0.05)}
          >
            <motion.p className="eyebrow mb-3" variants={reveal.fadeUp}>
              Two products. Six rungs. One ladder.
            </motion.p>
            <motion.h1 className="h-display" variants={reveal.fadeUpLg}>
              What we{" "}
              <span className="text-brand-deep">build for you.</span>
            </motion.h1>
            <motion.p className="lede mt-6 max-w-xl" variants={reveal.fadeUp}>
              Start with a site that gets found. Layer on growth that runs while
              you sleep. Every rung is a defined scope — no surprises.
            </motion.p>

            <motion.div className="mt-8 lg:hidden" variants={reveal.fadeUp}>
              <ServicesHeroStack />
            </motion.div>

            <motion.ul
              className="mt-8 flex flex-wrap gap-2"
              variants={reveal.container(0.06, 0.05)}
            >
              {[
                "Site live in days",
                "Month-to-month on Site",
                "Your business runs 24/7",
                "No long-term lock-in to start",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={reveal.fadeUp}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-deep/15 bg-white px-3 py-1 text-xs font-medium text-brand-deep"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: s(0.9), delay: s(0.25), ease: EASE }}
          >
            <ServicesHeroStack />
          </motion.div>
        </div>
      </section>

      {/* ---- FLOW VISUAL ---- */}
      <section className="relative bg-gradient-to-b from-white to-brand-soft">
        <motion.div
          className="container-page pb-28 pt-8 sm:pb-36"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.1, 0.05)}
        >
          <motion.div className="mx-auto max-w-5xl text-center" variants={reveal.fadeUp}>
            <h2 className="h-section">
              From first contact to booked revenue.
            </h2>
          </motion.div>
          <motion.div className="mt-20 sm:mt-24 px-2 sm:px-6" variants={reveal.fadeUpLg}>
            <ServicesFlowVisual />
          </motion.div>
        </motion.div>
      </section>

      {/* ---- SITE PRODUCT ---- */}
      <section className="section">
        <motion.div
          className="container-page"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.1, 0.05)}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-deep text-white">
              <span className="block h-6 w-6">{Icon.site}</span>
            </span>
            <div>
              <motion.p className="eyebrow" variants={reveal.fadeUp}>Product 01</motion.p>
              <motion.h2 className="h-section leading-tight" variants={reveal.fadeUp}>Presence</motion.h2>
            </div>
          </div>

          <motion.p className="lede max-w-2xl mb-12" variants={reveal.fadeUp}>
            A professionally built, hosted, and maintained web presence. One-time
            setup fee. Flat {fmt(99)}/mo for hosting, updates, and support — forever.
            Pick the rung that matches where your business is today.
          </motion.p>

          <div className="grid gap-6 md:grid-cols-3">
            {siteTiers.map((tier, i) => (
              <SiteRungCard key={tier.id} tier={tier} index={i} />
            ))}
          </div>

          <motion.div className="mt-8 text-center" variants={reveal.fadeUp}>
            <Link href="/pricing#site" className="btn-primary inline-flex items-center gap-2">
              Compare all Presence rungs
              <span>{Icon.arrow}</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ---- LADDER CONNECTOR ---- */}
      <div className="relative flex flex-col items-center py-10 gap-3" aria-hidden>
        <div className="h-12 w-px bg-gradient-to-b from-brand-deep/20 to-brand-primary/60" />
        <span className="rounded-full border border-brand-primary/30 bg-brand-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-deep">
          Then layer on Growth
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-brand-primary/60 to-brand-deep/20" />
      </div>

      {/* ---- GROWTH PRODUCT ---- */}
      <section className="section bg-brand-soft">
        <motion.div
          className="container-page"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.1, 0.05)}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-deep text-white">
              <span className="block h-6 w-6">{Icon.growth}</span>
            </span>
            <div>
              <motion.p className="eyebrow" variants={reveal.fadeUp}>Product 02</motion.p>
              <motion.h2 className="h-section leading-tight" variants={reveal.fadeUp}>Growth</motion.h2>
            </div>
          </div>

          <motion.p className="lede max-w-2xl mb-12" variants={reveal.fadeUp}>
            Monthly retainer that handles reception, local SEO, and paid ads so
            your business runs while you sleep. Each rung stacks on the last —
            start at Awake, climb when you&rsquo;re ready.
          </motion.p>

          <div className="grid gap-6 md:grid-cols-3">
            {growthTiers.map((tier, i) => (
              <GrowthRungCard key={tier.id} tier={tier} index={i} />
            ))}
          </div>

          <motion.div className="mt-8 text-center" variants={reveal.fadeUp}>
            <Link href="/pricing" className="btn-primary inline-flex items-center gap-2">
              Compare all Growth rungs
              <span>{Icon.arrow}</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ---- STACK / INTEGRATIONS ---- */}
      <section className="section">
        <motion.div
          className="container-page"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.1, 0.05)}
        >
          <motion.div className="mx-auto max-w-3xl text-center" variants={reveal.fadeUp}>
            <h2 className="h-section">
              Plays nice with everything you already use.
            </h2>
            <p className="mt-5 text-brand-muted leading-relaxed">
              Eight channels in, every major tool out. If it has an API or a
              webhook, we plug into it.
            </p>
          </motion.div>

          <motion.div className="mx-auto mt-12 max-w-5xl" variants={reveal.fadeUpLg}>
            <StackMarquee />
          </motion.div>
        </motion.div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="section bg-brand-soft">
        <motion.div
          className="container-page max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.1, 0.05)}
        >
          <motion.h2 className="h-section mb-10" variants={reveal.fadeUp}>
            Common questions about services.
          </motion.h2>
          <dl className="divide-y divide-slate-200">
            {faqs.map((f) => (
              <motion.div key={f.q} variants={reveal.fadeUp} className="py-6">
                <dt className="text-lg font-semibold text-brand-deep">{f.q}</dt>
                <dd className="mt-2 text-brand-muted leading-relaxed">{f.a}</dd>
              </motion.div>
            ))}
          </dl>
          <motion.p className="mt-10 text-brand-muted" variants={reveal.fadeUp}>
            Want to see plans and pricing?{" "}
            <Link href="/pricing" className="text-brand-deep font-medium hover:underline">
              See pricing →
            </Link>
          </motion.p>
        </motion.div>
      </section>

      <FinalCTA />
    </>
  );
}
