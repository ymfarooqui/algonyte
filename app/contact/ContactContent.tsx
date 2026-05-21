"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";

function ContactBody() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section bg-brand-soft">
      <div
        className={
          submitted
            ? "container-page max-w-2xl mx-auto"
            : "container-page grid gap-12 lg:grid-cols-2 lg:items-start"
        }
      >
        {!submitted && (
          <div>
            <p className="eyebrow mb-3">Contact</p>
            <Reveal as="h1" className="h-section">
              Tell us a bit about your business.
            </Reveal>
            <p className="lede mt-5">
              Send us a few details. We&rsquo;ll come back with a straight
              answer on whether we can help, and if so, what we&rsquo;d do
              first.
            </p>
            <ul className="mt-8 space-y-3 text-brand-ink/90">
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                Clear pricing and scope before any work starts.
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                Onboarded in days, not months.
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                Zero obligation walkthrough.
              </li>
            </ul>
          </div>
        )}
        <ContactForm
          onSubmitted={() => setSubmitted(true)}
          onReset={() => setSubmitted(false)}
        />
      </div>
    </section>
  );
}

export default function ContactContent() {
  return <ContactBody />;
}
