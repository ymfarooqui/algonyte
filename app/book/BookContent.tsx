"use client";

import Script from "next/script";
import Reveal from "@/components/Reveal";
import { calendarSrc } from "@/lib/constants";

export default function BookContent() {
  return (
    <section className="section bg-brand-soft">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <p className="eyebrow mb-3">Book a call</p>
          <Reveal as="h1" className="h-section">
            Pick a time that works for you.
          </Reveal>
          <p className="lede mt-5">
            A 30-minute call. We&rsquo;ll look at how leads come into your
            business today and where you&rsquo;re leaving money on the table.
          </p>
          <ul className="mt-8 space-y-3 text-brand-ink/90">
            <li className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary"
              />
              If we&rsquo;re not the right fit, we&rsquo;ll tell you.
            </li>
            <li className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary"
              />
              You&rsquo;ll leave with at least one thing you can use.
            </li>
          </ul>
        </div>

        <Reveal className="rounded-2xl bg-white shadow-sm ring-1 ring-brand-ink/5 overflow-hidden">
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
        </Reveal>
      </div>
    </section>
  );
}
