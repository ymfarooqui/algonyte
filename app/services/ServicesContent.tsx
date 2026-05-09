"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import FinalCTA from "@/components/sections/FinalCTA";

const Icon = {
  platform: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  custom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3l3 3-9.7 9.7H5v-3z" />
      <path d="M3 21h18" />
    </svg>
  ),
  agent: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0116 0" />
      <circle cx="9.5" cy="8" r="0.6" fill="currentColor" />
      <circle cx="14.5" cy="8" r="0.6" fill="currentColor" />
    </svg>
  ),
  advisory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l9 4-9 4-9-4 9-4z" />
      <path d="M3 12l9 4 9-4M3 18l9 4 9-4" />
    </svg>
  ),
};

const services = [
  {
    icon: Icon.platform,
    eyebrow: "Most popular",
    title: "The full platform",
    body:
      "We set up the whole system. CRM, chat and voice assistants, automatic follow-up, and one dashboard to see it all. Pick a plan that fits and we take it from there.",
    bullets: [
      "Chat that answers leads day or night",
      "Voice callbacks for the calls you miss",
      "One inbox for every lead and message",
      "Review requests and pipeline tracking",
    ],
    cta: { label: "See the plans", href: "/pricing" },
  },
  {
    icon: Icon.custom,
    eyebrow: "Project work",
    title: "Custom builds",
    body:
      "If your business has a workflow that doesn't fit a template, we build it. Integrations between tools, multi-step sequences, anything you can describe.",
    bullets: [
      "Connect tools that don't usually talk",
      "Multi-step workflows with branching logic",
      "API hookups and webhooks",
      "Move you off legacy tools cleanly",
    ],
    cta: { label: "Tell us what you need", href: "/contact" },
  },
  {
    icon: Icon.agent,
    eyebrow: "AI assistants",
    title: "Custom AI agents",
    body:
      "We train chat or voice assistants on your business. Your scripts, your edge cases, your tone. They handle inbound and outbound the way you would.",
    bullets: [
      "Trained on your scripts and FAQs",
      "Learns from your existing documents",
      "Handles inbound and outbound calls",
      "Tested on real conversations before launch",
    ],
    cta: { label: "Book a discovery call", href: "/contact" },
  },
  {
    icon: Icon.advisory,
    eyebrow: "Retainer",
    title: "Marketing and ads",
    body:
      "Once your system is in place, we run the marketing that fills it. Paid ads, content, and the campaigns that bring leads in the door.",
    bullets: [
      "Google and Meta ad campaigns",
      "Landing pages built for conversion",
      "Monthly performance reviews",
      "We tell you what to keep and cut",
    ],
    cta: { label: "Talk about a retainer", href: "/contact" },
  },
];

const process = [
  { n: "01", title: "Look", body: "We sit down with you and figure out where leads are getting dropped." },
  { n: "02", title: "Plan", body: "We write up what we'd build, what it costs, and how long it takes. No surprises later." },
  { n: "03", title: "Build", body: "Our team sets up the system, plugs in your data, and gets it live." },
  { n: "04", title: "Run", body: "We watch how it performs and tweak it. You get a monthly report on what changed." },
];

export default function ServicesContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <motion.div
          className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20"
          initial="hidden"
          animate="visible"
          variants={reveal.container(0.12, 0.05)}
        >
          <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
            Services
          </motion.p>
          <motion.h1 className="h-display max-w-3xl" variants={reveal.fadeUpLg}>
            Pick how much we{" "}
            <span className="text-brand-deep">do for you.</span>
          </motion.h1>
          <motion.p className="lede mt-6 max-w-2xl" variants={reveal.fadeUp}>
            Some clients want the platform and run it themselves. Others hand
            us the keys and have us run their marketing, ads, and AI assistants
            top to bottom. Both work.
          </motion.p>
        </motion.div>
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl"
        />
      </section>

      <section className="section">
        <motion.div
          className="container-page"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.12, 0.05)}
        >
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={reveal.fadeUpLg}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className="card border-l-4 border-l-brand-deep flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent text-brand-deep">
                    <span className="block h-6 w-6">{s.icon}</span>
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-deep">
                    {s.eyebrow}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-brand-deep">
                  {s.title}
                </h2>
                <p className="mt-3 text-brand-muted leading-relaxed">{s.body}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 flex-shrink-0 text-brand-deep"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-brand-muted">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.cta.href}
                  className="mt-6 inline-flex self-start text-brand-deep font-medium hover:underline"
                >
                  {s.cta.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section bg-brand-soft">
        <motion.div
          className="container-page"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.12, 0.05)}
        >
          <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
            How we work
          </motion.p>
          <motion.h2 className="h-section max-w-2xl" variants={reveal.fadeUp}>
            From first call to running system.
          </motion.h2>

          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-4"
            variants={reveal.container(0.12, 0.1)}
          >
            {process.map((p) => (
              <motion.div key={p.n} variants={reveal.fadeUp} className="card">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-brand-deep">
                  Step {p.n}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-brand-deep">
                  {p.title}
                </h3>
                <p className="mt-2 text-brand-muted leading-relaxed text-sm">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <FinalCTA />
    </>
  );
}
