import type { FeatureCard } from "@/lib/landing";

type Props = {
  heading: string;
  intro?: string;
  cards: FeatureCard[];
  bg?: boolean;
  children?: React.ReactNode;
};

export default function FeatureGrid({ heading, intro, cards, bg = false, children }: Props) {
  return (
    <section className={`section${bg ? " bg-brand-soft/40" : ""}`}>
      <div className="container-page max-w-3xl">
        <h2 className="h-section">{heading}</h2>
        {intro && <p className="mt-6 text-brand-muted leading-relaxed">{intro}</p>}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title}>
              <h3 className="text-lg font-semibold text-brand-deep">{c.title}</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
