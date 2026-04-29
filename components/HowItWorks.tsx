const steps = [
  {
    title: "Share Your Website or Goals",
    body: "Send your current site, business goals, key pages, or what you want built.",
  },
  {
    title: "We Review, Build, or Diagnose",
    body:
      "Depending on your package, we either build your site, audit your current experience, or improve specific areas.",
  },
  {
    title: "You Get Clear Deliverables",
    body:
      "You receive a launched site, a clear report, recorded walkthroughs, recommendations, or ongoing support.",
  },
  {
    title: "Improve With Confidence",
    body: "Use the findings to update your site, guide your developer, or continue with monthly care.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-brand-soft">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="h-section">A simple process from first look to finished roadmap.</h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card relative">
              <span
                aria-hidden
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-deep text-white font-semibold"
              >
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand-ink">{s.title}</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
