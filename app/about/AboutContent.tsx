"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";

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
        <PageHeroBackdrop />
        <div className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">About AlgoNyte</p>
            <Reveal as="h1" className="h-display" delay={0.04}>
              We run the hard parts of your business{" "}
              <span className="text-brand-deep">so you don&rsquo;t have to.</span>
            </Reveal>
            <p className="lede mt-6 max-w-2xl">
              AlgoNyte is a small team that handles AI, marketing, and
              the systems behind them for businesses that don&rsquo;t have time
              to figure it out themselves.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-4xl">
          <Reveal as="h2" className="h-section">
            A full system, not a single tool.
          </Reveal>
          <div className="mt-6 space-y-5 text-brand-muted text-lg leading-relaxed">
            <p>
              We started in QA and automation engineering, building AI systems
              for insurance carriers and enterprise platforms. Now we bring
              the same approach to small businesses.
            </p>
            <p>
              That means everything that touches a customer. The chatbot that
              answers their first question. The ad that brought them in. The
              follow-up text the next morning. The CRM keeping track of all
              of it.
            </p>
            <p className="text-brand-ink font-medium">
              You stay focused on the work you&rsquo;re good at. We run
              everything else.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {offerings.map((o) => (
              <div
                key={o}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14 items-center">
            <Reveal className="relative">
              <Image
                src="/yf-headshot.jpg"
                alt="Yaseen Farooqui, founder of AlgoNyte, AI receptionist for service businesses"
                width={480}
                height={480}
                className="w-full max-w-sm mx-auto h-auto rounded-2xl shadow-md ring-1 ring-slate-200 object-cover object-top aspect-square"
              />
            </Reveal>
            <div>
              <p className="eyebrow mb-3">The founder</p>
              <Reveal as="h2" className="h-section">
                Yaseen Farooqui.
              </Reveal>
              <div className="mt-6 space-y-5 text-brand-muted text-lg leading-relaxed">
                <p>
                  Yaseen is a Digital Strategy Specialist focused on
                  AI-Enablement and Quality and Release, who has spent years
                  building AI systems for large insurance carriers, enterprise
                  tech platforms, and businesses across retail and service
                  industries. He founded AlgoNyte to bring the same tools
                  these companies rely on to any business that gets leads and
                  books appointments.
                </p>
                <p>
                  Yaseen is the face of the company, but he isn&rsquo;t the
                  whole company. Behind him is a team of engineers, marketers,
                  and AI specialists who do the actual work. When you sign on,
                  you get all of them.
                </p>
                <p className="text-brand-ink font-medium">
                  This isn&rsquo;t a marketing agency that added &ldquo;AI&rdquo;
                  to the name. The systems AlgoNyte builds are the same
                  ones running in production today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-4xl">
          <p className="eyebrow mb-3">How we work</p>
          <Reveal as="h2" className="h-section">
            What you can expect from us.
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="h-full">
                <div className="card h-full">
                  <h3 className="text-lg font-semibold text-brand-deep">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-brand-muted leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/services" className="btn-primary">
              See what we do
            </Link>
            <Link href="/book" className="btn-secondary">
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
