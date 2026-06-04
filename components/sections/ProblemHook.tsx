"use client";

import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import PhoneConversation from "@/components/PhoneConversation";

export default function ProblemHook() {
  return (
    <section className="section">
      <div className="container-page">
        <p className="eyebrow mb-4">The revenue leak</p>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal>
            <CountUp
              to={67}
              suffix="%"
              durationMs={1800}
              className="block font-semibold text-brand-deep leading-none text-7xl sm:text-8xl lg:text-[10rem] tabular-nums"
            />
            <p className="mt-4 text-brand-ink font-medium text-lg max-w-md">
              of leads who wait more than five minutes for a reply never buy from you.
            </p>
          </Reveal>
          <div className="space-y-5 text-brand-muted text-lg leading-relaxed">
            <p>
              Someone fills out your form. You&rsquo;re busy. By the time you
              get back to them, they&rsquo;ve already called the next shop on
              their list.
            </p>
            <p className="text-brand-ink font-medium text-xl">
              You don&rsquo;t need more leads. You need to stop losing the ones
              you already have.
            </p>
            <p>
              We set up a system that texts them back in seconds and gets the
              meeting booked before you ever pick up the phone.
            </p>
          </div>
        </div>

        <Reveal className="mt-16 max-w-4xl mx-auto">
          <PhoneConversation />
        </Reveal>
      </div>
    </section>
  );
}
