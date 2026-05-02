const addOns = [
  {
    name: "User Interaction Simulation",
    price: "$149",
    body:
      "A narrated first-time visitor walkthrough showing where users may hesitate, get confused, or lose confidence.",
  },
  {
    name: "Conversion Clinic",
    price: "$249",
    body:
      "A focused review of your most important customer action, such as booking, checkout, contact forms, or lead capture.",
  },
  {
    name: "Accessibility Deep Scan",
    price: "$349",
    body:
      "A deeper accessibility review to identify barriers that may prevent people with disabilities from using your website.",
  },
  {
    name: "Advanced Performance Check",
    price: "$199",
    body:
      "A closer look at load speed, large assets, technical bottlenecks, and page responsiveness.",
  },
  {
    name: "Competitor Experience Review",
    price: "$299",
    body: "A side-by-side comparison of your website against selected competitors.",
  },
  {
    name: "Website Copy Cleanup",
    price: "$99–$299",
    body:
      "Clearer headlines, calls-to-action, labels, and page messaging to reduce hesitation and improve trust.",
  },
  {
    name: "On-Page SEO Quick Pass",
    price: "$149",
    body:
      "A focused tune-up of titles, meta descriptions, headings, and image alt text on your most important pages.",
  },
];

export default function AddOns() {
  return (
    <section id="addons" className="section bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Add-ons</p>
          <h2 className="h-section">Add extra insight where it matters most.</h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((a) => (
            <div key={a.name} className="card">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-brand-ink">{a.name}</h3>
                <span className="text-brand-deep font-semibold">{a.price}</span>
              </div>
              <p className="mt-3 text-sm text-brand-muted leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
