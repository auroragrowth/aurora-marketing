import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Aurora Growth Academy",
  description:
    "How Aurora Growth Academy collects, uses and protects your personal data under UK GDPR.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="2026-05-29">
      <p>
        This Privacy Policy explains how Aurora Growth Academy ("we",
        "us", "our") collects, uses and protects your personal data. We
        operate under the UK General Data Protection Regulation
        (UK GDPR) and the Data Protection Act 2018.
      </p>

      <h2>1. Who we are</h2>
      <p>
        Aurora Growth Academy is the data controller for personal data
        collected through auroragrowth.co.uk and
        app.auroragrowth.co.uk. You can contact us at{" "}
        <a href="mailto:hello@auroragrowth.co.uk">
          hello@auroragrowth.co.uk
        </a>
        .
      </p>

      <h2>2. What we collect</h2>
      <ul>
        <li>
          <strong>Account data:</strong> email address, password
          (hashed), name, country, and authentication metadata.
        </li>
        <li>
          <strong>Subscription data:</strong> plan, billing status,
          subscription identifiers. Card details are processed by Stripe
          and are not stored on our servers.
        </li>
        <li>
          <strong>Platform data:</strong> watchlist items, ladder
          settings, notes, calculator inputs and other content you
          create on the Platform.
        </li>
        <li>
          <strong>Broker connection data (optional):</strong> encrypted
          API credentials and the broker data returned to the
          dashboard. Credentials are encrypted at rest using AES-256.
        </li>
        <li>
          <strong>Technical data:</strong> IP address, browser type,
          device data, log files and similar diagnostic information.
        </li>
      </ul>

      <h2>3. How we use your data</h2>
      <ul>
        <li>To provide and operate the Platform.</li>
        <li>To authenticate you and keep your account secure.</li>
        <li>To process payments and manage subscriptions.</li>
        <li>To respond to support requests.</li>
        <li>To improve and develop the Platform.</li>
        <li>To send essential service emails (e.g. billing receipts, security notices).</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>4. Legal bases</h2>
      <p>
        We rely on the following lawful bases under UK GDPR:
      </p>
      <ul>
        <li><strong>Contract</strong> — to deliver the services you sign up for.</li>
        <li><strong>Legitimate interests</strong> — to operate and secure the Platform.</li>
        <li><strong>Consent</strong> — for any optional marketing or analytics where required.</li>
        <li><strong>Legal obligation</strong> — to comply with applicable law.</li>
      </ul>

      <h2>5. Sharing</h2>
      <p>
        We share personal data only with processors who help us run the
        Platform, including:
      </p>
      <ul>
        <li><strong>Supabase</strong> — authentication and database hosting.</li>
        <li><strong>Stripe</strong> — payment processing.</li>
        <li><strong>Vercel</strong> — application hosting.</li>
        <li><strong>Trading 212</strong> — only if you opt in to the broker connection.</li>
      </ul>
      <p>
        We do not sell your personal data. We may disclose data where
        required by law or to protect our rights.
      </p>

      <h2>6. International transfers</h2>
      <p>
        Some of our processors operate outside the UK. Where personal
        data is transferred internationally, we rely on appropriate
        safeguards such as adequacy decisions and standard contractual
        clauses.
      </p>

      <h2>7. Retention</h2>
      <p>
        We keep your data for as long as your account is active and for
        a reasonable period afterwards to meet legal and accounting
        requirements. You can request deletion at any time (see Rights
        below).
      </p>

      <h2>8. Your rights</h2>
      <p>
        Under UK GDPR you have the right to:
      </p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Correct inaccurate or incomplete data.</li>
        <li>Request deletion of your data.</li>
        <li>Restrict or object to certain processing.</li>
        <li>Request a copy of your data in a portable format.</li>
        <li>Withdraw consent where consent is the legal basis.</li>
      </ul>
      <p>
        To exercise any of these rights, email{" "}
        <a href="mailto:hello@auroragrowth.co.uk">
          hello@auroragrowth.co.uk
        </a>
        .
      </p>
      <p>
        You also have the right to lodge a complaint with the
        Information Commissioner's Office (ICO) at{" "}
        <a href="https://ico.org.uk">ico.org.uk</a>.
      </p>

      <h2>9. Cookies</h2>
      <p>
        We use only the cookies necessary to run the Platform —
        primarily session cookies for authentication. We do not use
        third-party advertising cookies. If we add analytics in future
        we will update this policy and request consent where required.
      </p>

      <h2>10. Security</h2>
      <p>
        We use industry-standard measures to protect your data,
        including encryption in transit (TLS) and at rest for sensitive
        fields such as broker credentials. No system is perfectly
        secure; please notify us immediately if you believe your
        account has been compromised.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material
        changes will be communicated by email or via the Platform.
      </p>

      <h2>12. Contact</h2>
      <p>
        Any privacy questions can be sent to{" "}
        <a href="mailto:hello@auroragrowth.co.uk">
          hello@auroragrowth.co.uk
        </a>
        .
      </p>
    </LegalLayout>
  );
}
