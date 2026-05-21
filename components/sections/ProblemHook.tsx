"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import CountUp from "@/components/CountUp";
import PhoneConversation from "@/components/PhoneConversation";

export default function ProblemHook() {
  return (
    <section className="section">
      <motion.div
        className="container-page"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.18, 0.05)}
      >
        <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
          The Problem
        </motion.p>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div variants={reveal.fadeUpLg}>
            <CountUp
              to={67}
              suffix="%"
              durationMs={1800}
              className="block font-semibold text-brand-deep leading-none text-7xl sm:text-8xl lg:text-[10rem] tabular-nums"
            />
            <p className="mt-4 text-brand-ink font-medium text-lg max-w-md">
              of leads who wait more than five minutes for a reply never buy from you.
            </p>
          </motion.div>
          <motion.div
            className="space-y-5 text-brand-muted text-lg leading-relaxed"
            variants={reveal.container(0.15, 0.1)}
          >
            <motion.p variants={reveal.fadeUp}>
              Someone fills out your form. You&rsquo;re busy. By the time you
              get back to them, they&rsquo;ve already called the next shop on
              their list.
            </motion.p>
            <motion.p
              className="text-brand-ink font-medium text-xl"
              variants={reveal.fadeUp}
            >
              You don&rsquo;t need more leads. You need to stop losing the ones
              you already have.
            </motion.p>
            <motion.p variants={reveal.fadeUp}>
              We set up a system that texts them back in seconds and gets the
              meeting booked before you ever pick up the phone.
            </motion.p>
          </motion.div>
        </div>

        <motion.div className="mt-16 max-w-4xl mx-auto" variants={reveal.fadeUpLg}>
          <PhoneConversation />
        </motion.div>
      </motion.div>
    </section>
  );
}
