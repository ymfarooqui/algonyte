import type { Metadata } from "next";
import "./flyer.css";

export const metadata: Metadata = {
  title: "Services Flyer",
  robots: { index: false, follow: false },
};

const services = [
  {
    name: "Starter Website Build",
    price: "$499–$899",
    blurb: "A simple, professional 1–3 page site for businesses that need a clean online presence — without agency pricing.",
  },
  {
    name: "Business Website Build",
    price: "$999–$1,799",
    blurb: "A complete 4–7 page site with stronger structure, clearer customer flow, and a polished brand presence.",
  },
  {
    name: "Local SEO & Search Setup",
    price: "$349–$699",
    blurb: "On-page SEO, Google Business Profile, and local schema so the right customers can find you.",
  },
  {
    name: "Website Refresh & Optimization",
    price: "$399–$999",
    blurb: "For sites that need better clarity, stronger messaging, smoother navigation, or improved performance.",
  },
  {
    name: "Full Website Experience Audit",
    price: "$749–$1,250+",
    blurb: "Deep diagnostic of usability, performance, accessibility, bugs, and conversion flow with a prioritized roadmap.",
  },
  {
    name: "Monthly Website Care",
    price: "$149–$399/mo",
    blurb: "Ongoing checkups, small updates, regression testing, and broken-link checks to keep your site healthy.",
  },
];

export default function FlyerPage() {
  return (
    <div className="flyer">
      <header className="flyer-head">
        <div className="flyer-brand">
          <svg className="flyer-mark" viewBox="0 0 64 64" fill="none" aria-hidden>
            <rect width="64" height="64" rx="14" fill="#0F4C81" />
            <path
              d="M12 44 C 22 44, 22 20, 32 20 S 42 44, 52 44"
              stroke="#38BDF8"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="25" cy="25" r="4" fill="#E0F7FF" />
          </svg>
          <span className="flyer-wordmark">Farooqui Digital</span>
        </div>
        <div className="flyer-contact">
          <div>farooquidigital.com</div>
          <div>yfarooqui@priscorp.net</div>
        </div>
      </header>

      <section className="flyer-hero">
        <p className="flyer-eyebrow">Websites for small businesses</p>
        <h1 className="flyer-title">Clear websites. Fair prices. No agency runaround.</h1>
        <p className="flyer-lede">
          Affordable website builds, audits, refreshes, and ongoing care plans
          designed for small businesses that need a site that actually works.
        </p>
      </section>

      <section className="flyer-grid">
        {services.map((s) => (
          <article key={s.name} className="flyer-card">
            <h2 className="flyer-card-name">{s.name}</h2>
            <p className="flyer-card-price">{s.price}</p>
            <p className="flyer-card-blurb">{s.blurb}</p>
          </article>
        ))}
      </section>

      <footer className="flyer-foot">
        <div className="flyer-cta">
          <p className="flyer-cta-title">Get a free website review</p>
          <p className="flyer-cta-sub">
            Visit farooquidigital.com/free-review or scan to start.
          </p>
        </div>
        <div className="flyer-foot-meta">
          <div>Reply within 1–2 business days</div>
          <div>Clear pricing and scope before any work begins</div>
        </div>
      </footer>
    </div>
  );
}
