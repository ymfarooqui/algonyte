"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

const foundation = {
  title: "Web Presence",
  href: "/web-presence",
  body: "We build your website, host it, and get it indexed on Google. From $279 one-time, then a flat $99/mo for hosting, maintenance, and edits across every tier.",
  badge: "Start here",
};

const engine = [
  {
    title: "AI Receptionist",
    href: "/ai-receptionist",
    body: "Answer, qualify, and book every lead 24/7. Phone, SMS, chat, DM. Live in 5-7 days.",
    badge: "Most popular",
  },
  {
    title: "Lead Generator",
    href: "/lead-generator",
    body: "Paid ads on Google and Meta with AI follow-up that books appointments, not form fills.",
  },
  {
    title: "Local SEO Program",
    href: "/pricing#local-seo",
    body: "Active Local SEO retainer — GBP optimization, citations, content cadence, ranking reports.",
  },
  {
    title: "Reputation Manager",
    href: "/reputation-manager",
    body: "Automated post-job review requests with smart routing for unhappy customers.",
  },
];

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
          Start with the foundation, layer the engine on top when you&rsquo;re
          ready. One team, one bill, one number to call.
        </motion.p>

        <motion.div className="mt-10" variants={reveal.fadeUp}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep/70">
            Foundation
          </p>
          <p className="mt-1 text-sm text-brand-muted">
            Every business needs a real web presence before automation matters.
          </p>
          <Link
            href={foundation.href}
            className="group lift-card lift-sm relative mt-4 block overflow-hidden rounded-2xl bg-gradient-to-br from-brand-accent via-brand-soft to-brand-soft p-6 sm:p-9 shadow-soft"
          >
            {/* Petrol accent stripe along the left edge */}
            <span aria-hidden className="absolute left-0 top-6 bottom-6 w-[3px] bg-brand-primary rounded-r-full" />
            <div className="flex items-start justify-between gap-3 pl-3">
              <h3 className="text-2xl sm:text-3xl font-medium text-brand-deep tracking-tight">
                {foundation.title}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-primary bg-brand-accent rounded-md px-2.5 py-1">
                {foundation.badge}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-brand-muted leading-relaxed pl-3">
              {foundation.body}
            </p>
            <p className="mt-6 pl-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary">
              See packages
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </p>
          </Link>
        </motion.div>

        <motion.div className="mt-12" variants={reveal.fadeUp}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep/70">
            Engine
          </p>
          <p className="mt-1 text-sm text-brand-muted">
            Layer these on once the site is live. Pick the leak you need to
            fix first.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-5 sm:grid-cols-2"
          variants={reveal.container(0.1, 0.1)}
        >
          {engine.map((p) => (
            <motion.div key={p.href} variants={reveal.fadeUpLg}>
              <Link
                href={p.href}
                className="group lift-card flex h-full flex-col rounded-2xl bg-brand-soft p-7 shadow-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-medium text-brand-deep tracking-tight">
                    {p.title}
                  </h3>
                  {p.badge && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-primary bg-brand-accent rounded-md px-2.5 py-1">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="mt-3 flex-1 text-brand-muted leading-relaxed">{p.body}</p>
                <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary">
                  Learn more
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
