import Link from "next/link";

const points = [
  "Tested like a customer would actually use it",
  "Clear reports, no technical overwhelm",
  "Affordable, with no agency bloat",
];

export default function WhyUsPreview() {
  return (
    <section className="section bg-white">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-3">Why this is different</p>
        <h2 className="h-section">A QA mindset behind every website.</h2>
        <ul className="mt-8 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-brand-ink text-lg">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link href="/why-us" className="btn-secondary">
            See the full story
          </Link>
        </div>
      </div>
    </section>
  );
}
