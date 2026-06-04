"use client";

import Reveal from "@/components/Reveal";

const items = [
  {
    q: "Why not Podium?",
    a: "Podium locks you into a 12-month contract and still leaves you configuring the flows yourself. We're month-to-month, fully done-for-you, and cover every channel — phone, SMS, web chat, Facebook, Instagram, WhatsApp, and Google Business Messages.",
  },
  {
    q: "Why not Scorpion, Blue Corona, or Hibu?",
    a: "Those agencies run $2,500–$10,000/mo with heavy setup fees and 12–24 month contracts. We're a fraction of that, month-to-month, with no long-term commitment — and your ad spend goes straight to Google and Meta on your own card. It never touches us, and it never has a markup.",
  },
  {
    q: "Why not a cheap DIY tool (Goodcall, Numa)?",
    a: "Those are cheap because you build and maintain the system yourself. We're done-for-you — we set up the flows, write the scripts, connect the channels, and keep it running. If something breaks at 11pm, we fix it. Not you.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function WhyNot() {
  return (
    <section className="section">
      <div className="container-page">
        <p className="eyebrow mb-4">Honest answers</p>
        <Reveal as="h2" className="h-section max-w-2xl">
          What about the cheaper options?
        </Reveal>

        <dl className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.06}>
              <div className="card h-full">
                <dt className="font-semibold text-brand-deep">{item.q}</dt>
                <dd className="mt-3 text-sm text-brand-muted leading-relaxed">
                  {item.a}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
