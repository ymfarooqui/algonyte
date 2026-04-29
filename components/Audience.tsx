const audiences = [
  "Local service businesses",
  "Consultants",
  "Solo business owners",
  "E-commerce starters",
  "Health, wellness, and fitness businesses",
  "Real estate professionals",
  "Home service providers",
  "Agencies needing white-label website QA",
];

export default function Audience() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Who it&rsquo;s for</p>
          <h2 className="h-section">Built for small businesses that need clarity, not complexity.</h2>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <li
              key={a}
              className="rounded-xl border border-slate-200 bg-brand-soft px-4 py-3 text-brand-ink/90"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
