"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

const steps = [
  {
    n: "01",
    title: "Catch the lead",
    body: "Anyone who fills out your form, calls, or messages you gets pulled into one place automatically.",
  },
  {
    n: "02",
    title: "Reply for you",
    body: "An AI assistant texts or calls them right away, asks the questions you'd ask, and figures out if they're worth your time.",
  },
  {
    n: "03",
    title: "Book the meeting",
    body: "When they're ready, the meeting goes straight on your calendar. All you do is show up.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HowItWorks() {
  return (
    <section className="section bg-brand-soft">
      <motion.div
        className="container-page"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.15, 0.05)}
      >
        <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
          How It Works
        </motion.p>
        <motion.h2 className="h-section max-w-3xl" variants={reveal.fadeUp}>
          Three things happen. You don&rsquo;t do any of them.
        </motion.h2>

        <div className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-5">
          <motion.div
            aria-hidden
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px origin-left"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(15,76,129,0.3) 50%, transparent 50%)",
              backgroundSize: "10px 1px",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={inView}
            transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
          />
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={reveal.fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="card relative"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-brand-deep">
                  Step {s.n}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent text-brand-deep font-semibold text-sm">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-brand-deep">
                {s.title}
              </h3>
              <p className="mt-3 text-brand-muted leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
