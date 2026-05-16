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
            className="group mt-4 block rounded-2xl border border-brand-deep/20 bg-gradient-to-br from-brand-accent/40 via-white to-white p-6 sm:p-8 transition-all hover:border-brand-deep/40 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-2xl font-semibold text-brand-deep">
                {foundation.title}
              </h3>
              <span className="rounded-full bg-brand-deep px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                {foundation.badge}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-brand-muted leading-relaxed">
              {foundation.body}
            </p>
            <p className="mt-5 text-sm font-medium text-brand-deep">
              See packages
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
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
                className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-deep/30 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-brand-deep">
                    {p.title}
                  </h3>
                  {p.badge && (
                    <span className="rounded-full bg-brand-deep/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-deep">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-brand-muted leading-relaxed">{p.body}</p>
                <p className="mt-5 text-sm font-medium text-brand-deep">
                  Learn more
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
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
