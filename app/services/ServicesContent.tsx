import Link from "next/link";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/sections/FinalCTA";
import ServicesFlowVisual from "@/components/ServicesFlowVisual";
import StackMarquee from "@/components/StackMarquee";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import GuaranteeStrip from "@/components/sections/GuaranteeStrip";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import { faqs } from "./faqs";

export default function ServicesContent() {
  return (
    <>
      {/* ---- HERO ---- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20 text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-3">Individual services. No packages.</p>
          <Reveal as="h1" className="h-display" delay={0.04}>
            What we <span className="text-brand-deep">build for you.</span>
          </Reveal>
          <p className="lede mt-6 mx-auto">
            Every service is a done-for-you install that runs while you sleep — answering,
            qualifying, and booking your leads. Start with the one thing costing you most,
            then add the rest whenever you&rsquo;re ready.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {["Done-for-you", "Live in days", "30-day money-back", "No long-term lock-in"].map(
              (item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-deep/15 bg-white px-3 py-1 text-xs font-medium text-brand-deep"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* ---- SERVICES CATALOG ---- */}
      <SolutionsGrid
        eyebrow="The services"
        heading="Six ways to stop losing leads."
        subhead="Pick one. Pick a few. They share one inbox and one calendar, so they work better together — but every one stands on its own."
        className="bg-white"
      />

      <GuaranteeStrip />

      {/* ---- FLOW VISUAL ---- */}
      <section className="relative bg-gradient-to-b from-white to-brand-soft">
        <div className="container-page pb-28 pt-8 sm:pb-36">
          <Reveal className="mx-auto max-w-5xl text-center">
            <h2 className="h-section">From first contact to booked revenue.</h2>
          </Reveal>
          <div className="mt-20 sm:mt-24 px-2 sm:px-6">
            <ServicesFlowVisual />
          </div>
        </div>
      </section>

      {/* ---- STACK / INTEGRATIONS ---- */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="h-section">Plays nice with everything you already use.</h2>
            <p className="mt-5 text-brand-muted leading-relaxed">
              Eight channels in, every major tool out. If it has an API or a webhook, we plug
              into it.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-5xl">
            <StackMarquee />
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="section bg-brand-soft">
        <div className="container-page max-w-3xl">
          <Reveal as="h2" className="h-section mb-10">
            Common questions about services.
          </Reveal>
          <dl className="divide-y divide-slate-200">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="text-lg font-semibold text-brand-deep">{f.q}</dt>
                <dd className="mt-2 text-brand-muted leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-brand-muted">
            Ready to start?{" "}
            <Link href="/book" className="text-brand-deep font-medium hover:underline">
              Book a 30-minute call &rarr;
            </Link>
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
