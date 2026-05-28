import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Aurora Growth Academy",
  description:
    "Terms of Service for Aurora Growth Academy — the rules that apply when using the platform and our software.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="2026-05-29">
      <p>
        These Terms of Service ("Terms") govern your use of Aurora Growth
        Academy ("we", "us", "our", or "the Platform"), accessible at
        auroragrowth.co.uk and app.auroragrowth.co.uk. By creating an
        account or otherwise using the Platform, you agree to these Terms.
      </p>

      <h2>1. The service</h2>
      <p>
        Aurora Growth Academy is an educational platform that provides
        software tools — including screening rules, watchlists, ladders,
        calculators and dashboards — to help individual investors plan
        and review their own investing.
      </p>
      <p>
        We do not provide regulated financial advice, manage money, hold
        client assets, or execute trades. We are not authorised or
        regulated by the Financial Conduct Authority. See our{" "}
        <a href="/legal/risk-warning">Risk Warning</a>.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old to use the Platform. By using
        the Platform you confirm that you have the legal capacity to
        enter into a binding contract.
      </p>

      <h2>3. Accounts</h2>
      <ul>
        <li>You are responsible for keeping your login credentials confidential.</li>
        <li>You are responsible for all activity on your account.</li>
        <li>You agree to provide accurate information when creating an account.</li>
        <li>We may suspend or terminate accounts for breaches of these Terms.</li>
      </ul>

      <h2>4. Subscriptions and billing</h2>
      <p>
        Some features of the Platform require a paid subscription
        (currently the Core, Pro and Elite tiers). Subscriptions are
        billed monthly or yearly in advance via our payment processor
        (Stripe). You can cancel at any time from your account settings;
        cancellation takes effect at the end of the current billing
        period and does not entitle you to a pro-rata refund unless
        required by law.
      </p>
      <p>
        Prices are shown in GBP and may include applicable taxes. We may
        change prices for future billing periods on reasonable notice.
      </p>

      <h2>5. Third-party integrations</h2>
      <p>
        The Platform may allow you to connect third-party services such
        as a broker account. Your use of those services is governed by
        the third party's own terms. You are responsible for the
        credentials you provide and for any activity initiated through
        those integrations.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Platform for any unlawful purpose.</li>
        <li>Attempt to gain unauthorised access to the Platform or any account.</li>
        <li>Scrape, mirror or resell our content or data without written permission.</li>
        <li>Reverse engineer or attempt to extract source code from the Platform.</li>
        <li>Use the Platform to harass, defraud, or harm others.</li>
      </ul>

      <h2>7. Intellectual property</h2>
      <p>
        All content, software, designs and trademarks on the Platform are
        owned by Aurora Growth Academy or its licensors and are protected
        by intellectual property laws. You receive a limited, personal,
        non-transferable licence to use the Platform for its intended
        purpose for the duration of your subscription.
      </p>

      <h2>8. No warranty</h2>
      <p>
        The Platform is provided "as is" and "as available". We make no
        warranties or representations that the Platform will be
        uninterrupted, error-free, secure, or fit for any particular
        purpose. Educational content is general in nature and may not
        apply to your situation.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Aurora Growth Academy
        and its officers, employees and contractors will not be liable
        for any indirect, incidental, consequential or punitive damages,
        or for any investment losses arising from your use of the
        Platform. Our aggregate liability to you for any claim relating
        to the Platform will not exceed the amount you paid us in the
        12 months before the claim arose.
      </p>
      <p>
        Nothing in these Terms excludes or limits liability for death or
        personal injury caused by negligence, for fraud, or for any
        liability that cannot lawfully be excluded.
      </p>

      <h2>10. Termination</h2>
      <p>
        You can stop using the Platform and cancel your subscription at
        any time. We may suspend or terminate your access if you breach
        these Terms or if required by law.
      </p>

      <h2>11. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes
        will be notified by email or via the Platform. Your continued
        use after the effective date constitutes acceptance.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These Terms are governed by the laws of England and Wales. Any
        disputes will be subject to the exclusive jurisdiction of the
        courts of England and Wales.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:hello@auroragrowth.co.uk">
          hello@auroragrowth.co.uk
        </a>
        .
      </p>
    </LegalLayout>
  );
}
