import JsonLd from "./JsonLd";
import { faqPageJsonLd, type FAQ } from "@/lib/landing";

type Props = {
  heading: string;
  faqs: FAQ[];
  bg?: boolean;
  /** Emit FAQPage JSON-LD. Set false when the page renders the same FAQs twice. */
  emitSchema?: boolean;
  children?: React.ReactNode;
};

/**
 * Renders an FAQ list and (by default) the matching FAQPage schema from the
 * same source array, so the on-page copy and the structured data can never
 * drift apart.
 */
export default function FAQSection({
  heading,
  faqs,
  bg = false,
  emitSchema = true,
  children,
}: Props) {
  return (
    <section className={`section${bg ? " bg-brand-soft/40" : ""}`}>
      <div className="container-page max-w-3xl">
        <h2 className="h-section">{heading}</h2>
        <dl className="mt-6 divide-y divide-slate-200">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <dt className="text-lg font-semibold text-brand-deep">{f.q}</dt>
              <dd className="mt-2 text-brand-muted leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
        {children}
        {emitSchema && <JsonLd data={faqPageJsonLd(faqs)} />}
      </div>
    </section>
  );
}
