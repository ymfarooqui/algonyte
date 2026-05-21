"use client";

import Reveal from "@/components/Reveal";
import StackMarquee from "@/components/StackMarquee";

export default function IntegrationsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-brand-line bg-brand-soft py-14 sm:py-16">
      <div className="container-page">
        <Reveal delay={0.05} className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Plugs into everything you already use</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-medium tracking-tight text-brand-deep [text-wrap:balance]">
            Every channel in. Every tool out.
          </h2>
        </Reveal>

        <Reveal delay={0.17} className="mt-10">
          <StackMarquee />
        </Reveal>
      </div>
    </section>
  );
}
