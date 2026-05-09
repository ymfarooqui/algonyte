"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import { useAnimSpeed } from "@/lib/useAnimSpeed";
import FinalCTA from "@/components/sections/FinalCTA";
import ServicesFlowVisual from "@/components/ServicesFlowVisual";
import ServicesHeroStack from "@/components/ServicesHeroStack";
import StackMarquee from "@/components/StackMarquee";

const EASE = [0.22, 1, 0.36, 1] as const;

const Icon = {
  platform: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  voice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z" />
      <path d="M19 11a7 7 0 01-14 0M12 18v3M8 21h8" />
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
  crm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
      <circle cx="6" cy="6" r="1" fill="currentColor" />
      <circle cx="10" cy="12" r="1" fill="currentColor" />
      <circle cx="14" cy="18" r="1" fill="currentColor" />
    </svg>
  ),
  ads: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l16-7v16L3 13z" />
      <path d="M7 12v5a2 2 0 004 0v-3" />
    </svg>
  ),
  custom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3l3 3-9.7 9.7H5v-3z" />
      <path d="M3 21h18" />
    </svg>
  ),
};

const services = [
  {
    icon: Icon.voice,
    eyebrow: "24/7 phone",
    title: "Voice AI Agent",
    body:
      "A phone agent that picks up around the clock, qualifies the lead the way you would, and books the meeting. No more voicemails.",
    bullets: [
      "Answers in under two rings",
      "Qualifies on tone, urgency, and service area",
      "Books straight to your calendar",
      "Hands warm calls to a human if you want",
    ],
    cta: { label: "Hear a demo", href: "/contact" },
  },
  {
    icon: Icon.platform,
    eyebrow: "Full system",
    title: "AI Receptionist Platform",
    body:
      "Missed-call text back, instant SMS and DM reply, auto-booking, and follow-ups across every channel. Pick a plan, we set it up.",
    bullets: [
      "Missed call text back, instant SMS and DM reply",
      "Auto booking to your calendar",
      "Appointment reminders and review requests",
      "One inbox for every channel",
    ],
    cta: { label: "See the plans", href: "/pricing" },
    featured: true,
  },
  {
    icon: Icon.agent,
    eyebrow: "Trained on your business",
    title: "Custom AI Agents",
    body:
      "Chat or voice agents trained on your business. Your scripts, your edge cases, your tone. Tested on real conversations before launch.",
    bullets: [
      "Custom training on your services and pricing",
      "Lead qualification tuned to your edge cases",
      "Inbound and outbound flows",
      "Reviewed against real call transcripts",
    ],
    cta: { label: "Book a discovery call", href: "/book" },
  },
  {
    icon: Icon.crm,
    eyebrow: "Pipeline",
    title: "CRM & Pipeline",
    body:
      "Every lead, call, and message lands in one place with the right tags and stages. So nothing falls through the cracks.",
    bullets: [
      "Pipeline stages built around your sales motion",
      "Auto-tagging by source, service, and value",
      "Clean handoff to whoever closes the deal",
      "Reporting you can actually read",
    ],
    cta: { label: "Tell us about your setup", href: "/contact" },
  },
  {
    icon: Icon.ads,
    eyebrow: "Retainer",
    title: "Paid Ads & Landing Pages",
    body:
      "Once the system catches leads cleanly, we run the campaigns that fill it. Google, Meta, and pages built to convert.",
    bullets: [
      "Google and Meta campaigns end-to-end",
      "Landing pages designed for conversion",
      "Monthly performance reviews with real numbers",
      "We tell you what to keep and what to cut",
    ],
    cta: { label: "Talk about a retainer", href: "/contact" },
  },
  {
    icon: Icon.custom,
    eyebrow: "Project work",
    title: "Custom Builds & Integrations",
    body:
      "If your workflow doesn't fit a template, we build it. Integrations between tools, multi-step sequences, anything you can describe.",
    bullets: [
      "Connect tools that don't usually talk",
      "Multi-step workflows with branching logic",
      "API hookups and webhooks",
      "Move you off legacy tools cleanly",
    ],
    cta: { label: "Tell us what you need", href: "/contact" },
  },
];

const faqs = [
  {
    q: "Do I have to use the platform to work with you?",
    a: "No. The platform is the fastest path, but if you already have a CRM and just want ads or a custom agent on top, we can do that.",
  },
  {
    q: "Can you run ads without the AI piece?",
    a: "Yes, but we usually push back. Ads without follow-up is where most of the budget gets wasted. We'd rather fix the leak first.",
  },
  {
    q: "What if I already have a CRM?",
    a: "We integrate with most of them. If yours is on the list, we plug in. If it isn't, we'll tell you up front whether it's worth migrating.",
  },
  {
    q: "How long does setup take?",
    a: "Platform clients are usually live in 7 to 14 days. Custom builds and integrations depend on scope, and we tell you the timeline before you sign.",
  },
];

export default function ServicesContent() {
  const { s } = useAnimSpeed();
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal.container(0.12, 0.05)}
          >
            <motion.h1 className="h-display" variants={reveal.fadeUpLg}>
              Pick how much we{" "}
              <span className="text-brand-deep">do for you.</span>
            </motion.h1>
            <motion.p className="lede mt-6 max-w-xl" variants={reveal.fadeUp}>
              Some clients want the platform and run it themselves. Others hand
              us the keys top to bottom. Both work.
            </motion.p>

            <motion.div className="mt-8 lg:hidden" variants={reveal.fadeUp}>
              <ServicesHeroStack />
            </motion.div>

            <motion.ul
              className="mt-8 flex flex-wrap gap-2"
              variants={reveal.container(0.06, 0.05)}
            >
              {[
                "8 channels covered",
                "Live in 7 to 14 days",
                "Month-to-month",
                "Built on your stack",
              ].map((item) => (
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
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl"
        />
      </section>

      <section className="relative bg-gradient-to-b from-white to-brand-soft">
        <motion.div
          className="container-page pb-28 pt-8 sm:pb-36"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.1, 0.05)}
        >
          <motion.div
            className="mx-auto max-w-5xl text-center"
            variants={reveal.fadeUp}
          >
            <p className="eyebrow mb-3">End-to-end automated business system</p>
            <h2 className="h-section">
              Every step from first click to repeat customer.
            </h2>
          </motion.div>
          <motion.div
            className="mt-20 sm:mt-24 px-2 sm:px-6"
            variants={reveal.fadeUpLg}
          >
            <ServicesFlowVisual />
          </motion.div>
        </motion.div>
      </section>

      <section className="section">
        <motion.div
          className="container-page"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.1, 0.05)}
        >
          <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
            What we offer
          </motion.p>
          <motion.h2 className="h-section max-w-2xl" variants={reveal.fadeUp}>
            Six services. One team running them.
          </motion.h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const featured = "featured" in s && s.featured;
              return (
                <motion.div
                  key={s.title}
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
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3 w-3 text-brand-primary"
                          fill="currentColor"
                        >
                          <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
                        </svg>
                        Most Popular
                      </span>
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
                      >
                        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-primary/10 blur-2xl" />
                        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-brand-accent blur-3xl" />
                      </div>
                    </>
                  )}

                  <div className="relative flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${
                          featured
                            ? "bg-brand-deep text-white shadow-md shadow-brand-deep/25"
                            : "bg-brand-accent text-brand-deep"
                        }`}
                      >
                        <span className="block h-6 w-6">{s.icon}</span>
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                          featured
                            ? "bg-brand-deep/10 text-brand-deep"
                            : "bg-brand-soft text-brand-muted"
                        }`}
                      >
                        {s.eyebrow}
                      </span>
                    </div>

                    <h3 className="mt-6 text-[1.35rem] font-semibold text-brand-deep leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                      {s.body}
                    </p>

                    <ul className="mt-5 space-y-2.5 text-sm flex-1">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
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
                          <span className="text-brand-ink/80">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <Link
                        href={s.cta.href}
                        className={`group/cta inline-flex w-full items-center justify-center gap-1.5 ${
                          featured ? "btn-primary" : "btn-secondary"
                        }`}
                      >
                        {s.cta.label}
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5"
                          fill="none"
                        >
                          <path
                            d="M5 12h14M13 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="section bg-brand-soft">
        <motion.div
          className="container-page"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.1, 0.05)}
        >
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={reveal.fadeUp}
          >
            <p className="eyebrow mb-3">Channels & tools</p>
            <h2 className="h-section">
              Plays nice with everything you already use.
            </h2>
            <p className="mt-5 text-brand-muted leading-relaxed">
              Eight channels in, every major tool out. If it has an API or a
              webhook, we plug into it.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-12 max-w-5xl"
            variants={reveal.fadeUpLg}
          >
            <StackMarquee />
          </motion.div>
        </motion.div>
      </section>

      <section className="section bg-brand-soft">
        <motion.div
          className="container-page max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.1, 0.05)}
        >
          <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
            FAQ
          </motion.p>
          <motion.h2 className="h-section mb-10" variants={reveal.fadeUp}>
            Common questions about services.
          </motion.h2>
          {/*
            EXPANDABLE CARDS (optional): swap the <dl> below for native <details>/<summary>
            elements if you want each Q to collapse. Useful once the FAQ list grows past 4 or 5.
          */}
          <dl className="divide-y divide-slate-200">
            {faqs.map((f) => (
              <motion.div
                key={f.q}
                variants={reveal.fadeUp}
                className="py-6"
              >
                <dt className="text-lg font-semibold text-brand-deep">{f.q}</dt>
                <dd className="mt-2 text-brand-muted leading-relaxed">{f.a}</dd>
              </motion.div>
            ))}
          </dl>
          <motion.p
            className="mt-10 text-brand-muted"
            variants={reveal.fadeUp}
          >
            Want to see plans and pricing?{" "}
            <Link
              href="/pricing"
              className="text-brand-deep font-medium hover:underline"
            >
              See pricing →
            </Link>
          </motion.p>
        </motion.div>
      </section>

      <FinalCTA />
    </>
  );
}
