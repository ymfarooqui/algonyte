const faqs = [
  {
    q: "Do you only audit websites?",
    a: "No. ClearPath Digital also builds affordable websites and helps improve existing websites through refreshes, optimization, and ongoing care.",
  },
  {
    q: "Do you build custom websites from scratch?",
    a: "Yes, but the focus is on practical, affordable websites for small businesses. The goal is clarity, usability, and reliability rather than unnecessary complexity.",
  },
  {
    q: "Do you work with businesses that already have a developer?",
    a: "Yes. Audit reports and recommendations can be shared directly with your developer, agency, or internal team.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Monthly Website Care plans are available for checkups, small updates, regression testing, and performance monitoring.",
  },
  {
    q: "What if my website does not have bugs?",
    a: "A clean website can still be improved. In that case, the focus shifts to usability, clarity, speed, accessibility, conversion flow, and competitive positioning.",
  },
  {
    q: "Do you guarantee more sales?",
    a: "No. ClearPath Digital does not guarantee revenue outcomes. The goal is to identify and reduce friction that may prevent visitors from becoming customers.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section bg-brand-soft">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-3">FAQ</p>
        <h2 className="h-section">Questions, answered.</h2>

        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-brand-ink">
                {f.q}
                <span
                  aria-hidden
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-brand-deep transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-brand-muted leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
