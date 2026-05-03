"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

type Service = {
  name: string;
  price: string;
  blurb: string;
  includes: string[];
  cta: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    name: "Starter Website Build",
    price: "$499–$899",
    blurb:
      "A simple, professional website for small businesses that need a clean online presence without overcomplicated features or high agency pricing.",
    includes: [
      "1–3 pages",
      "Mobile-friendly layout",
      "Contact form or booking link",
      "Clear service descriptions",
      "Basic SEO setup",
      "Usability-focused structure",
      "Launch checklist",
    ],
    cta: "Start My Website",
  },
  {
    name: "Business Website Build",
    price: "$999–$1,799",
    blurb:
      "A more complete website for businesses that need stronger structure, clearer customer flow, and a polished brand presence.",
    includes: [
      "4–7 pages",
      "Homepage, services, about, contact, FAQ, and optional landing page",
      "Mobile-friendly design",
      "CTA strategy",
      "Basic performance optimization",
      "Basic accessibility pass",
      "Launch QA review",
      "30-day post-launch checkup",
    ],
    cta: "Build My Business Site",
    featured: true,
  },
  {
    name: "Local SEO & Search Setup",
    price: "$349–$699",
    blurb:
      "Get your business found by the right local customers. The on-page SEO basics, Google Business Profile setup, and search foundations most small business sites are missing.",
    includes: [
      "Google Business Profile setup or cleanup",
      "On-page SEO for top 5 pages",
      "Titles, meta descriptions, and headings",
      "Local schema markup",
      "Sitemap and Search Console setup",
      "Image alt text and content cleanup",
      "Keyword research for your local market",
      "Prioritized next-step recommendations",
    ],
    cta: "Get Found on Google",
  },
  {
    name: "Website Refresh & Optimization",
    price: "$399–$999",
    blurb:
      "For businesses with an existing site that needs better clarity, stronger messaging, smoother navigation, or improved performance.",
    includes: [
      "Usability review",
      "Homepage clarity improvements",
      "CTA and messaging cleanup",
      "Navigation review",
      "Mobile usability check",
      "Performance snapshot",
      "Prioritized recommendations",
    ],
    cta: "Improve My Website",
  },
  {
    name: "Full Website Experience Audit",
    price: "$749–$1,250+",
    blurb:
      "A deeper diagnostic review of usability, performance, accessibility, bugs, and conversion flow.",
    includes: [
      "Full usability audit",
      "Bug and broken-flow review",
      "Desktop and mobile recordings",
      "Performance review",
      "Accessibility mini-audit",
      "Competitor comparison",
      "Conversion flow map",
      "Prioritized roadmap",
    ],
    cta: "Audit My Website",
  },
  {
    name: "Monthly Website Care",
    price: "$149–$399/month",
    blurb:
      "Ongoing website checkups and small updates to keep your site clear, stable, and customer-ready.",
    includes: [
      "Monthly or quarterly site checkups",
      "Critical flow retesting",
      "Small content updates",
      "Performance snapshot",
      "Broken link checks",
      "Regression checks",
      "Priority recommendations",
    ],
    cta: "Keep My Site Healthy",
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-brand-soft">
      <motion.div
        className="container-page"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.1, 0.1)}
      >
        <motion.div className="max-w-2xl" variants={reveal.fadeUp}>
          <p className="eyebrow mb-3">Services & Pricing</p>
          <h2 className="h-section">Services designed for where your website is today.</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <motion.article
              key={s.name}
              className={
                "card flex flex-col " +
                (s.featured
                  ? "ring-2 ring-brand-primary/60 relative"
                  : "")
              }
              variants={reveal.dropTile}
            >
              {s.featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-brand-deep px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-brand-ink">{s.name}</h3>
              <p className="mt-2 text-2xl font-semibold text-brand-deep">{s.price}</p>
              <p className="mt-4 text-brand-muted leading-relaxed">{s.blurb}</p>
              <ul className="mt-5 space-y-2 text-sm text-brand-ink/90">
                {s.includes.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn-primary mt-7 self-start">
                {s.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
