"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

const products = [
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
    title: "Reputation Manager",
    href: "/reputation-manager",
    body: "Automated post-job review requests with smart routing for unhappy customers.",
  },
  {
    title: "Local SEO",
    href: "/seo",
    body: "Map Pack ranking, citation cleanup, schema, and content built for your service area.",
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
        <motion.h2 className="h-section max-w-2xl" variants={reveal.fadeUp}>
          Four systems. One operator. Pick the leak you need to fix first.
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-brand-muted"
          variants={reveal.fadeUp}
        >
          Most clients start with the AI Receptionist because that&rsquo;s
          where the biggest leak usually is. Add the rest as the system grows.
        </motion.p>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2"
          variants={reveal.container(0.1, 0.1)}
        >
          {products.map((p) => (
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
