"use client";

import { motion } from "motion/react";
import { reveal } from "@/lib/motion";

const events = [
  { label: "New lead captured", time: "00:00:02" },
  { label: "AI agent responded", time: "00:00:14" },
  { label: "Lead qualified", time: "00:00:48" },
  { label: "Appointment booked", time: "00:01:38" },
  { label: "Confirmation sent", time: "00:01:40" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white"
    >
      <div className="container-page pt-20 pb-24 sm:pt-28 sm:pb-32 grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={reveal.container(0.12, 0.05)}
        >
          <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
            AI-Powered Business Automation
          </motion.p>
          <motion.h1 className="h-display" variants={reveal.fadeUpLg}>
            Your business should run{" "}
            <span className="text-brand-deep">while you sleep.</span>
          </motion.h1>
          <motion.p className="lede mt-6" variants={reveal.fadeUp}>
            We build AI that answers your leads, follows up with them, and
            books them on your calendar. You don&rsquo;t have to do anything.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={reveal.fadeUp}
          >
            <a href="/contact" className="btn-primary">
              Book a Free Automation Audit
            </a>
            <a href="/pricing" className="btn-secondary">
              See the Plans
            </a>
          </motion.div>

          <motion.ul
            className="mt-8 flex flex-wrap gap-2"
            variants={reveal.container(0.06, 0.05)}
          >
            {["AI Automation", "Voice Agents", "CRM + Pipeline", "Review Management"].map(
              (item) => (
                <motion.li
                  key={item}
                  variants={reveal.fadeUp}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-deep/15 bg-white px-3 py-1 text-xs font-medium text-brand-deep"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-brand-primary"
                    aria-hidden
                  />
                  {item}
                </motion.li>
              )
            )}
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Live System</p>
              <span className="inline-flex items-center gap-2 text-xs text-brand-muted">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-500/50 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Active
              </span>
            </div>
            <motion.div
              className="mt-5 space-y-3"
              initial="hidden"
              animate="visible"
              variants={reveal.container(0.18, 0.6)}
            >
              {events.map((row) => (
                <motion.div
                  key={row.label}
                  variants={reveal.dropTile}
                  className="flex items-center justify-between rounded-lg bg-brand-soft px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-sm font-medium text-brand-ink">
                      {row.label}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-brand-muted">
                    {row.time}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            <p className="mt-6 text-sm text-brand-muted">
              All of this happened while you were busy.
            </p>
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl"
      />
    </section>
  );
}
