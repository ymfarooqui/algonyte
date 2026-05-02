import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section bg-brand-soft">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="h-section">Tell us about your website.</h2>
          <p className="lede mt-5">
            Share a few details and we&rsquo;ll come back with a straight answer on what would
            actually help, whether that&rsquo;s a new website, a refresh, an audit, or ongoing care.
          </p>
          <ul className="mt-8 space-y-3 text-brand-ink/90">
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
              No pressure, no agency-speak.
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
              Clear pricing and scope before any work begins.
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
              Reply within 1&ndash;2 business days.
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
