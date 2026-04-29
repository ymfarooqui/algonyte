const pillars = [
  {
    title: "Website Builds",
    body:
      "Clean, affordable websites designed around simple navigation, clear messaging, and strong calls-to-action.",
  },
  {
    title: "Website Audits",
    body:
      "Independent reviews of usability, bugs, performance, accessibility, and conversion flow.",
  },
  {
    title: "Website Optimization",
    body:
      "Focused improvements to pages, forms, content, navigation, speed, and mobile experience.",
  },
  {
    title: "Website Care",
    body:
      "Ongoing checkups, small updates, regression testing, and performance monitoring to keep your site customer-ready.",
  },
];

export default function Solution() {
  return (
    <section className="section bg-brand-soft">
      <div className="container-page">
        <h2 className="h-section max-w-3xl">
          Build it right. Improve what exists. Keep it working.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="card">
              <h3 className="text-lg font-semibold text-brand-deep">{p.title}</h3>
              <p className="mt-3 text-brand-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
