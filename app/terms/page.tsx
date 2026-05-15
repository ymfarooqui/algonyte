import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Algonyte Labs",
  description:
    "The terms that govern your use of the Algonyte Labs website, AI receptionist services, automation builds, and monthly subscription plans.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 9, 2026";
const ENTITY = "Algonyte Labs";
const ADDRESS = "545 N McClurg Ct, Chicago, IL 60611";
const LEGAL_EMAIL = "yaseen@algonyte.com";

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="h-display">Terms of Service</h1>
        <p className="mt-4 text-sm text-brand-muted">Last updated: {LAST_UPDATED}</p>

        <div className="mt-12 space-y-6 text-brand-ink/90 leading-relaxed [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-brand-deep [&_h2]:mt-12 [&_h2]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-brand-deep [&_a]:font-medium [&_a]:underline">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) form a binding agreement between you and{" "}
            {ENTITY} (&ldquo;Algonyte Labs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) and govern your use of{" "}
            <a href="https://algonyte.com">algonyte.com</a> and any services we
            provide (collectively, the &ldquo;Services&rdquo;). By using the Services you agree to
            these Terms. If you do not agree, do not use the Services.
          </p>

          <h2>1. Who can use the Services</h2>
          <p>
            You must be at least 18 years old and able to form a binding contract. If you are using
            the Services for a business or other entity, you represent that you have authority to
            bind that entity, and &ldquo;you&rdquo; refers to that entity.
          </p>

          <h2>2. The Services</h2>
          <p>
            Algonyte Labs provides AI-driven business automation services, which may include CRM
            setup, voice agents, automated follow-up, content generation, and related consulting
            and implementation work. The specific scope, deliverables, and timing of any engagement
            are described in your selected subscription plan or in a separate written statement of
            work.
          </p>

          <h2>3. Subscriptions, fees, and renewals</h2>
          <ul>
            <li>
              <strong>Pricing</strong> for each plan is shown on our pricing page at the time of
              purchase. Prices may change for new subscriptions, but we will not change pricing on
              an active subscription without prior notice.
            </li>
            <li>
              <strong>Billing</strong> is processed by Stripe through our HighLevel-hosted
              checkout. By subscribing, you authorize recurring charges to your payment method on
              the billing cycle stated at checkout (typically monthly) until you cancel.
            </li>
            <li>
              <strong>Auto-renewal.</strong> Subscriptions renew automatically at the end of each
              billing period unless cancelled before the renewal date.
            </li>
            <li>
              <strong>Cancellation.</strong> You can cancel at any time, effective at the end of
              the current billing period. Cancelling stops future charges; it does not entitle you
              to a refund of fees already paid.
            </li>
            <li>
              <strong>Refunds.</strong> Except where required by law, all fees are non-refundable.
            </li>
            <li>
              <strong>Taxes.</strong> Stated prices do not include taxes. You are responsible for
              any applicable sales, use, or similar taxes.
            </li>
            <li>
              <strong>Late payment.</strong> If a payment fails, we may suspend the Services until
              payment is received and may charge interest at the lesser of 1.5% per month or the
              maximum allowed by law.
            </li>
          </ul>

          <h2>4. Your responsibilities</h2>
          <ul>
            <li>
              Provide accurate information, timely access to systems and accounts we need, and
              reasonable cooperation so we can deliver the Services.
            </li>
            <li>
              Maintain the security of any credentials we share with you and not share them with
              unauthorized parties.
            </li>
            <li>
              Use the Services in compliance with applicable laws, including telemarketing,
              anti-spam (CAN-SPAM, TCPA), and data protection laws.
            </li>
            <li>
              Obtain any consents required from your own customers and contacts before we send
              messages on your behalf.
            </li>
          </ul>

          <h2>5. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the Services to send spam, scams, or unlawful, harassing, or deceptive content.
            </li>
            <li>
              Reverse engineer, copy, resell, or sublicense the Services or our underlying systems
              except as expressly permitted.
            </li>
            <li>
              Interfere with the Services, attempt to gain unauthorized access, probe for
              vulnerabilities, or bypass any security measure.
            </li>
            <li>
              Upload content that infringes third-party rights or that contains malware, viruses,
              or harmful code.
            </li>
          </ul>
          <p>
            We may suspend or terminate the Services if you violate this section, with or without
            notice depending on severity.
          </p>

          <h2>6. Customer content and data</h2>
          <p>
            You retain ownership of the content, data, and materials you provide to us
            (&ldquo;Customer Content&rdquo;). You grant us a limited, non-exclusive, worldwide,
            royalty-free license to use, host, and process Customer Content solely to deliver and
            improve the Services for you. You are responsible for the accuracy, legality, and
            backups of Customer Content.
          </p>

          <h2>7. Our intellectual property</h2>
          <p>
            The site, our methodologies, prompts, automations, templates, documentation, and any
            deliverables we create remain our property except for the license granted in Section 8.
            Trademarks, logos, and brand elements are owned by their respective owners.
          </p>

          <h2>8. License to deliverables</h2>
          <p>
            Subject to full payment, we grant you a non-exclusive, non-transferable, worldwide
            license to use deliverables created specifically for you under your subscription,
            solely for your internal business purposes. We retain the right to reuse generic
            components, frameworks, and know-how across other clients.
          </p>

          <h2>9. Third-party services</h2>
          <p>
            The Services rely on third-party platforms including HighLevel, Stripe, and providers
            of telephony, email, AI models, and analytics. Your use of those services is subject to
            their own terms. We are not responsible for outages, changes, or actions of third-party
            providers, but we will make reasonable efforts to mitigate impact on you.
          </p>

          <h2>10. AI-generated output</h2>
          <p>
            The Services may include output produced by AI models. AI output can be inaccurate,
            incomplete, or biased and should be reviewed before use in any consequential decision.
            You are responsible for evaluating output before relying on it. We do not warrant that
            AI output will be error-free.
          </p>

          <h2>11. Confidentiality</h2>
          <p>
            Each party agrees to protect the other&rsquo;s non-public information disclosed in
            connection with the Services with reasonable care and to use it only for purposes of
            the engagement. This obligation does not apply to information that is public,
            independently developed, or required to be disclosed by law.
          </p>

          <h2>12. Disclaimers</h2>
          <p>
            The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, whether express, implied, or statutory, including warranties of
            merchantability, fitness for a particular purpose, non-infringement, or that the
            Services will be uninterrupted, secure, or error-free. We do not guarantee any specific
            business result, lead volume, conversion rate, or revenue outcome.
          </p>

          <h2>13. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, neither party is liable for indirect,
            incidental, special, consequential, exemplary, or punitive damages, or for lost
            profits, revenue, data, or goodwill, arising out of or related to these Terms or the
            Services, even if advised of the possibility. Our aggregate liability for any claim
            arising out of or related to these Terms or the Services will not exceed the amount you
            paid us in the twelve (12) months immediately preceding the event giving rise to the
            claim, or one hundred U.S. dollars (USD 100), whichever is greater.
          </p>

          <h2>14. Indemnification</h2>
          <p>
            You will defend, indemnify, and hold harmless Algonyte Labs and its owners,
            employees, and contractors from any claim, loss, or expense (including reasonable
            attorneys&rsquo; fees) arising out of (a) your use of the Services in violation of
            these Terms, (b) your Customer Content, or (c) your violation of any law or third-party
            right.
          </p>

          <h2>15. Term and termination</h2>
          <p>
            These Terms remain in effect while you use the Services. Either party may terminate a
            subscription at the end of the current billing period. We may suspend or terminate
            immediately for non-payment, material breach, or risk to the Services or other
            customers. Sections that by their nature should survive termination will survive,
            including Sections 6 through 17.
          </p>

          <h2>16. Governing law and disputes</h2>
          <p>
            These Terms are governed by the laws of the State of Illinois, without regard to its
            conflict-of-laws rules. The parties consent to the exclusive jurisdiction and venue of
            the state and federal courts located in Cook County, Illinois for any dispute not
            subject to arbitration. To the extent permitted by law, each party waives any right to
            a jury trial and any right to participate in a class or representative action.
          </p>

          <h2>17. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the
            top reflects the most recent revision. Continued use of the Services after changes take
            effect means you accept the updated Terms. If a change materially reduces your rights,
            we will provide reasonable advance notice where practical.
          </p>

          <h2>18. Miscellaneous</h2>
          <p>
            These Terms, together with any subscription plan or statement of work, are the entire
            agreement between you and us regarding the Services. If any provision is held
            unenforceable, the remaining provisions remain in effect. Our failure to enforce any
            right is not a waiver. You may not assign these Terms without our consent; we may
            assign them in connection with a merger, acquisition, or sale of assets. Notices to us
            should be sent to the address below.
          </p>

          <h2>19. Contact</h2>
          <p>
            {ENTITY}
            <br />
            {ADDRESS}
            <br />
            Email: <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
