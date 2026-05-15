import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Algonyte Labs",
  description:
    "How Algonyte Labs collects, uses, stores, and protects information you share through our website, contact forms, booking flows, and AI receptionist services.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 9, 2026";
const ENTITY = "Algonyte Labs";
const ADDRESS = "545 N McClurg Ct, Chicago, IL 60611";
const PRIVACY_EMAIL = "yaseen@algonyte.com";


export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="h-display">Privacy Policy</h1>
        <p className="mt-4 text-sm text-brand-muted">Last updated: {LAST_UPDATED}</p>

        <div className="mt-12 space-y-6 text-brand-ink/90 leading-relaxed [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-brand-deep [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-brand-deep [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-brand-deep [&_a]:font-medium [&_a]:underline">
          <p>
            This Privacy Policy explains how {ENTITY} (&ldquo;Algonyte Labs,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares
            information when you visit{" "}
            <a href="https://algonyte.com">algonyte.com</a>, fill out a form, book a
            call, chat with us, or purchase a subscription.
          </p>

          <p>If you do not agree with this policy, please do not use the site or our services.</p>

          <h2>1. Information we collect</h2>

          <h3>Information you give us directly</h3>
          <ul>
            <li>
              <strong>Contact details</strong> such as name, business name, email address, phone
              number, and website when you submit a contact form, request an audit, or book a call.
            </li>
            <li>
              <strong>Message content</strong> you send through our contact form, chat widget,
              email, or scheduled call notes.
            </li>
            <li>
              <strong>Billing information</strong> when you subscribe to a paid plan. Card numbers
              are handled by our payment processor and are not stored on our servers.
            </li>
            <li>
              <strong>Account information</strong> if we provision a CRM, dashboard, or related
              workspace for you as part of service delivery.
            </li>
          </ul>

          <h3>Information collected automatically</h3>
          <ul>
            <li>
              <strong>Device and usage data</strong> such as IP address, browser type, operating
              system, referring URL, pages viewed, and timestamps.
            </li>
            <li>
              <strong>Cookies and similar technologies</strong> used for site functionality,
              analytics, and (where you consent) marketing attribution. You can control cookies in
              your browser settings.
            </li>
          </ul>

          <h3>Information from third parties</h3>
          <p>
            We may receive limited information from service providers we use to run the business,
            including our CRM, calendar, payment, and analytics tools. We do not buy contact lists.
          </p>

          <h2>2. How we use information</h2>
          <ul>
            <li>To respond to inquiries and deliver the services you request.</li>
            <li>To schedule, host, and follow up on calls and audits.</li>
            <li>To process payments, manage subscriptions, and send service notifications.</li>
            <li>
              To send marketing emails or SMS only where you have opted in. Every marketing message
              includes an unsubscribe option.
            </li>
            <li>To improve our website, content, and services.</li>
            <li>
              To comply with legal obligations, enforce our Terms of Service, and protect against
              fraud or misuse.
            </li>
          </ul>

          <h2>3. Legal bases (for visitors in the EEA, UK, or Switzerland)</h2>
          <p>
            Where applicable law requires it, we rely on one or more of the following legal bases:
            your consent, performance of a contract, our legitimate business interests, and
            compliance with legal obligations.
          </p>

          <h2>4. Service providers we share information with</h2>
          <p>
            We share information with vendors that help us run the business. These providers
            process data on our behalf under contracts that require appropriate safeguards. The
            categories we currently use include:
          </p>
          <ul>
            <li>
              <strong>CRM, forms, chat, calendar, and email/SMS automation:</strong> HighLevel
              (GoHighLevel).
            </li>
            <li>
              <strong>Payment processing:</strong> Stripe, accessed through our HighLevel checkout.
            </li>
            <li>
              <strong>Hosting and infrastructure:</strong> Vercel.
            </li>
            <li>
              <strong>Analytics:</strong> Vercel Analytics and Google Analytics 4.
            </li>
            <li>
              <strong>Contact form delivery:</strong> Formspree.
            </li>
          </ul>
          <p>
            We do not sell personal information. We do not share personal information for
            cross-context behavioral advertising.
          </p>

          <h2>5. International transfers</h2>
          <p>
            Our service providers may process data in the United States and other countries. Where
            required, we rely on Standard Contractual Clauses or other lawful transfer mechanisms.
          </p>

          <h2>6. Data retention</h2>
          <p>
            We keep personal information only as long as needed for the purposes described in this
            policy, to comply with legal obligations, resolve disputes, and enforce agreements.
            Inquiry records are typically retained for 24 months, and active customer records are
            retained for the duration of the engagement plus 36 months.
          </p>

          <h2>7. Your rights</h2>
          <p>
            Depending on where you live, you may have the right to access, correct, delete, or
            export the personal information we hold about you, to object to or restrict certain
            processing, and to withdraw consent at any time. California residents have rights
            under the CCPA/CPRA, including the right to opt out of any sale or sharing of personal
            information (note: we do not sell or share for cross-context behavioral advertising).
            EEA, UK, and Swiss residents have rights under the GDPR and UK GDPR.
          </p>
          <p>
            To exercise any of these rights, email{" "}
            <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>. We will respond within the
            timeframe required by applicable law. You also have the right to lodge a complaint with
            your local data protection authority.
          </p>

          <h2>8. Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards to protect
            personal information. No method of transmission or storage is completely secure, so we
            cannot guarantee absolute security.
          </p>

          <h2>9. Children</h2>
          <p>
            Our services are not directed to children under 16, and we do not knowingly collect
            personal information from them. If you believe a child has provided us with personal
            information, contact us and we will delete it.
          </p>

          <h2>10. Third-party links</h2>
          <p>
            Our site may link to third-party websites or services. We are not responsible for their
            privacy practices and encourage you to review their policies.
          </p>

          <h2>11. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the
            top reflects the most recent revision. Material changes will be communicated through
            the site or by email where appropriate.
          </p>

          <h2>12. Contact</h2>
          <p>
            {ENTITY}
            <br />
            {ADDRESS}
            <br />
            Email: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
