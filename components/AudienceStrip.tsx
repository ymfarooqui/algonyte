const audiences = [
  "Local service businesses",
  "Consultants",
  "Solo business owners",
  "E-commerce starters",
  "Health, wellness & fitness",
  "Real estate professionals",
  "Home service providers",
  "Agencies needing white-label QA",
];

export default function AudienceStrip() {
  return (
    <section id="who-its-for" className="section bg-brand-soft">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Who it&rsquo;s for</p>
          <h2 className="h-section">
            Built for small businesses that want clarity, not complexity.
          </h2>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <li
              key={a}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink/90"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
