"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import { useAnimSpeed } from "@/lib/useAnimSpeed";

const steps = [
  {
    n: "01",
    title: "Every inquiry, in one place",
    body: "Calls, texts, form fills, and DMs land in a single inbox the moment they come in — nothing gets buried.",
  },
  {
    n: "02",
    title: "A reply within seconds",
    body: "An AI assistant responds in your voice, answers the common questions, and gathers the details you'd want to know.",
  },
  {
    n: "03",
    title: "Booked on your calendar",
    body: "When they're ready to move forward, the appointment drops onto your calendar — no back-and-forth, no chasing.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HowItWorks() {
  const { s } = useAnimSpeed();
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
          Every lead handled, end to end.
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
            transition={{ duration: s(1.1), delay: s(0.5), ease: EASE }}
          />
          {steps.map((s) => (
            <motion.div key={s.n} variants={reveal.fadeUp} className="h-full">
              <div className="card relative h-full">
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* TODO: drop /public/dashboard-screenshot.png (real GHL inbox or pipeline view) and uncomment.
        <motion.div
          className="mt-14 rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-lg max-w-5xl mx-auto"
          variants={reveal.fadeUpLg}
        >
          <Image
            src="/dashboard-screenshot.png"
            alt="The inbox where every new lead, text, and call lands in one place"
            width={1600}
            height={1000}
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="w-full h-auto"
          />
        </motion.div>
        */}
      </motion.div>
    </section>
  );
}
