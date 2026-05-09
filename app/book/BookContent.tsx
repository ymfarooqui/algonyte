"use client";

import Script from "next/script";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
import { calendarSrc } from "@/lib/constants";

export default function BookContent() {
  return (
    <section className="section bg-brand-soft">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.12, 0.1)}
        >
          <motion.p className="eyebrow mb-3" variants={reveal.fadeUp}>
            Book a call
          </motion.p>
          <motion.h1 className="h-section" variants={reveal.fadeUp}>
            Pick a time that works for you.
          </motion.h1>
          <motion.p className="lede mt-5" variants={reveal.fadeUp}>
            A 30-minute call. We&rsquo;ll look at how leads come into your
            business today and where you&rsquo;re leaving money on the table.
          </motion.p>
          <ul className="mt-8 space-y-3 text-brand-ink/90">
            <motion.li className="flex gap-3" variants={reveal.fadeUp}>
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary"
              />
              If we&rsquo;re not the right fit, we&rsquo;ll tell you.
            </motion.li>
            <motion.li className="flex gap-3" variants={reveal.fadeUp}>
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary"
              />
              You&rsquo;ll leave with at least one thing you can use.
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          className="rounded-2xl bg-white shadow-sm ring-1 ring-brand-ink/5 overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src={calendarSrc}
            title="Book a call"
            id="book-call-widget"
            loading="lazy"
            style={{ width: "100%", border: "none", minHeight: "720px" }}
            scrolling="no"
          />
          <Script
            src="https://link.msgsndr.com/js/form_embed.js"
            strategy="lazyOnload"
          />
        </motion.div>
      </div>
    </section>
  );
}
