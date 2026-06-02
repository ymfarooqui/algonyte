type Props = {
  eyebrow?: string;
  heading: string;
  paragraphs?: string[];
  bg?: boolean;
  children?: React.ReactNode;
};

/**
 * A headed block of body copy. `paragraphs` come from content data; `children`
 * lets a page append inline-linked paragraphs (e.g. a case-study link).
 */
export default function ProseSection({
  eyebrow,
  heading,
  paragraphs,
  bg = false,
  children,
}: Props) {
  return (
    <section className={`section${bg ? " bg-brand-soft/40" : ""}`}>
      <div className="container-page max-w-3xl">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h2 className="h-section">{heading}</h2>
        <div className="mt-6 space-y-5 text-brand-muted leading-relaxed">
          {paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
          {children}
        </div>
      </div>
    </section>
  );
}
