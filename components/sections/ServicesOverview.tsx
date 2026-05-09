"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

const services = [
  {
    label: "Platform",
    title: "The full setup",
    body: "We give you the whole system. Three plans, starting at $549 a month.",
  },
  {
    label: "Custom work",
    title: "Something specific",
    body: "Have a weird workflow or a tool you need to plug in? We can build that.",
  },
  {
    label: "AI agents",
    title: "An assistant of your own",
    body: "A chat or voice bot trained on your business, your scripts, and your edge cases.",
  },
  {
    label: "Advisory",
    title: "Someone in your corner",
    body: "A monthly retainer where we keep an eye on your systems and tell you what to fix next.",
  },
];

export default function ServicesOverview() {
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
          Services
        </motion.p>
        <motion.h2 className="h-section max-w-2xl" variants={reveal.fadeUp}>
          The platform isn&rsquo;t the only way we work.
        </motion.h2>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2"
          variants={reveal.container(0.12, 0.1)}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={reveal.fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="card"
            >
              <p className="eyebrow">{s.label}</p>
              <h3 className="mt-3 text-2xl font-semibold text-brand-deep">
                {s.title}
              </h3>
              <p className="mt-3 text-brand-muted leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
