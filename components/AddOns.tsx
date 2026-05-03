"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

const addOns = [
  {
    name: "User Interaction Simulation",
    price: "$149",
    body:
      "A narrated first-time visitor walkthrough showing where users may hesitate, get confused, or lose confidence.",
  },
  {
    name: "Conversion Clinic",
    price: "$249",
    body:
      "A focused review of your most important customer action, such as booking, checkout, contact forms, or lead capture.",
  },
  {
    name: "Accessibility Deep Scan",
    price: "$349",
    body:
      "A deeper accessibility review to identify barriers that may prevent people with disabilities from using your website.",
  },
  {
    name: "Advanced Performance Check",
    price: "$199",
    body:
      "A closer look at load speed, large assets, technical bottlenecks, and page responsiveness.",
  },
  {
    name: "Competitor Experience Review",
    price: "$299",
    body: "A side-by-side comparison of your website against selected competitors.",
  },
  {
    name: "Website Copy Cleanup",
    price: "$99–$299",
    body:
      "Clearer headlines, calls-to-action, labels, and page messaging to reduce hesitation and improve trust.",
  },
  {
    name: "On-Page SEO Quick Pass",
    price: "$149",
    body:
      "A focused tune-up of titles, meta descriptions, headings, and image alt text on your most important pages.",
  },
];

export default function AddOns() {
  return (
    <section id="addons" className="section bg-white">
      <motion.div
        className="container-page"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.1, 0.1)}
      >
        <div className="grid gap-10 lg:grid-cols-[1fr,auto] lg:items-center">
          <motion.div className="max-w-2xl" variants={reveal.fadeUp}>
            <p className="eyebrow mb-3">Add-ons</p>
            <h2 className="h-section">Add extra insight where it matters most.</h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Stack any of these onto a build, audit, or care plan to go deeper where you need it.
            </p>
          </motion.div>
          <motion.div className="hidden lg:block" variants={reveal.fadeUp}>
            <Image
              src="/updates-backups.png"
              alt="Website maintenance dashboard showing regular updates, security monitoring, performance checks, and daily backups"
              width={520}
              height={390}
              sizes="(min-width: 1024px) 380px, 100vw"
              className="w-full max-w-md h-auto rounded-2xl shadow-md ring-1 ring-slate-200"
            />
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((a) => (
            <motion.div key={a.name} className="card" variants={reveal.dropTile}>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-brand-ink">{a.name}</h3>
                <span className="text-brand-deep font-semibold">{a.price}</span>
              </div>
              <p className="mt-3 text-sm text-brand-muted leading-relaxed">{a.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
