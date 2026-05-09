import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Short writeups on AI, lead follow-up, and what actually works for small businesses.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
          <p className="eyebrow mb-4">Insights</p>
          <h1 className="h-display max-w-3xl">
            Writing{" "}
            <span className="text-brand-deep">coming soon.</span>
          </h1>
          <p className="lede mt-6 max-w-2xl">
            Short pieces on what we&rsquo;re seeing in the field. Real numbers,
            real workflows, and what we&rsquo;d do differently next time. New
            posts land here.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card opacity-70">
                <p className="eyebrow">Coming soon</p>
                <h2 className="mt-3 text-xl font-semibold text-brand-deep">
                  [Post title]
                </h2>
                <p className="mt-3 text-brand-muted text-sm leading-relaxed">
                  A short line about what&rsquo;s in the post. The why behind
                  it.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
