"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import FinalCTA from "@/components/sections/FinalCTA";

const values = [
  {
    title: "Plain English",
    body: "We don't hide behind jargon. If you don't understand what we're doing, that's on us, not you.",
  },
  {
    title: "Real numbers",
    body: "We tell you what's working, what's not, and what we'd change. Every month. No spin.",
  },
  {
    title: "One team",
    body: "When you sign on, you get our team. Not an account manager who hands you off to someone else.",
  },
];

const offerings = [
  "Custom AI chat and voice assistants",
  "CRM and pipeline setup",
  "Paid ads on Google and Meta",
  "Landing pages built to convert",
  "Marketing automation and email",
  "Integrations with the tools you already use",
];

export default function AboutContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <motion.div
          className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20"
          initial="hidden"
          animate="visible"
          variants={reveal.container(0.12, 0.05)}
        >
          <div className="max-w-3xl">
            <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
              About Farooqui Digital
            </motion.p>
            <motion.h1 className="h-display" variants={reveal.fadeUpLg}>
              We run the hard parts of your business{" "}
              <span className="text-brand-deep">so you don&rsquo;t have to.</span>
            </motion.h1>
            <motion.p className="lede mt-6 max-w-2xl" variants={reveal.fadeUp}>
              Farooqui Digital is a small team that handles AI, marketing, and
              the systems behind them for businesses that don&rsquo;t have time
              to figure it out themselves.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <motion.div
          className="container-page max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.12, 0.05)}
        >
          <motion.p className="eyebrow mb-3" variants={reveal.fadeUp}>
            What we do
          </motion.p>
          <motion.h2 className="h-section" variants={reveal.fadeUp}>
            A full system, not a single tool.
          </motion.h2>
          <motion.div
            className="mt-6 space-y-5 text-brand-muted text-lg leading-relaxed"
            variants={reveal.container(0.1, 0.1)}
          >
            <motion.p variants={reveal.fadeUp}>
              We started in QA and automation engineering, building AI systems
              for insurance carriers and enterprise platforms. Now we bring
              the same approach to small businesses.
            </motion.p>
            <motion.p variants={reveal.fadeUp}>
              That means everything that touches a customer. The chatbot that
              answers their first question. The ad that brought them in. The
              follow-up text the next morning. The CRM keeping track of all
              of it.
            </motion.p>
            <motion.p
              className="text-brand-ink font-medium"
              variants={reveal.fadeUp}
            >
              You stay focused on the work you&rsquo;re good at. We run
              everything else.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-3 sm:grid-cols-2"
            variants={reveal.container(0.06, 0.1)}
          >
            {offerings.map((o) => (
              <motion.div
                key={o}
                variants={reveal.fadeUp}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 text-brand-deep"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-sm text-brand-ink">{o}</span>
              </motion.div>
            ))}
          </motion.div>
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
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14 items-center">
            <motion.div className="relative" variants={reveal.fadeUpLg}>
              <Image
                src="/yf-headshot.jpg"
                alt="Yaseen Farooqui"
                width={480}
                height={480}
                className="w-full max-w-sm mx-auto h-auto rounded-2xl shadow-md ring-1 ring-slate-200 object-cover aspect-square"
              />
            </motion.div>
            <motion.div variants={reveal.container(0.1, 0.1)}>
              <motion.p className="eyebrow mb-3" variants={reveal.fadeUp}>
                The founder
              </motion.p>
              <motion.h2 className="h-section" variants={reveal.fadeUp}>
                Yaseen Farooqui.
              </motion.h2>
              <motion.div
                className="mt-6 space-y-5 text-brand-muted text-lg leading-relaxed"
                variants={reveal.container(0.1, 0.1)}
              >
                <motion.p variants={reveal.fadeUp}>
                  I&rsquo;m a QA and automation engineer who has spent years
                  building AI systems for big insurance carriers and tech
                  platforms. I started Farooqui Digital because the same tools
                  these companies use can work for any business that gets leads
                  and books appointments.
                </motion.p>
                <motion.p variants={reveal.fadeUp}>
                  I&rsquo;m the face of the company, but I&rsquo;m not the
                  whole company. We have engineers, marketers, and AI
                  specialists who do the actual work. When you sign on, you
                  get a team.
                </motion.p>
                <motion.p
                  className="text-brand-ink font-medium"
                  variants={reveal.fadeUp}
                >
                  This isn&rsquo;t a marketing agency that added &ldquo;AI&rdquo;
                  to the name. The systems we build are the same ones running
                  in production today.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <motion.div
          className="container-page max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.12, 0.05)}
        >
          <motion.p className="eyebrow mb-3" variants={reveal.fadeUp}>
            How we work
          </motion.p>
          <motion.h2 className="h-section" variants={reveal.fadeUp}>
            What you can expect from us.
          </motion.h2>

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-3"
            variants={reveal.container(0.1, 0.1)}
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={reveal.fadeUp} className="card">
                <h3 className="text-lg font-semibold text-brand-deep">
                  {v.title}
                </h3>
                <p className="mt-2 text-brand-muted leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            variants={reveal.fadeUp}
          >
            <Link href="/services" className="btn-primary">
              See what we do
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a call
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <FinalCTA />
    </>
  );
}
