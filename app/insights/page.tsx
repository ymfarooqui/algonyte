import type { Metadata } from "next";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";

const insightsTitle = "Insights: AI Receptionist, Missed Calls, and Follow-Up";
const insightsDescription =
  "Field notes on AI receptionists for service businesses: missed call recovery, voice agent setups, follow-up workflows, and what moves the numbers.";

export const metadata: Metadata = {
  title: insightsTitle,
  description: insightsDescription,
  alternates: { canonical: "/insights" },
  openGraph: { title: insightsTitle, description: insightsDescription, url: "/insights", type: "website" },
  twitter: { card: "summary_large_image", title: insightsTitle, description: insightsDescription },
  // Page is a "coming soon" placeholder. Block from search until we publish real posts to avoid thin-content penalties.
  robots: { index: false, follow: true },
};

export default function InsightsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
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
