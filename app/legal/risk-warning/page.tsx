import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Risk Warning — Aurora Growth Academy",
  description:
    "Risk warning and important notices about using Aurora Growth Academy. Investing involves risk; capital is at risk.",
};

export default function RiskWarningPage() {
  return (
    <LegalLayout title="Risk Warning" updated="2026-05-29">
      <p>
        Aurora Growth Academy provides educational content and software
        tools for individual investors. This page sets out the key risks
        you should understand before using the platform or acting on
        anything you see on it.
      </p>

      <h2>1. Not financial advice</h2>
      <p>
        Nothing on Aurora Growth Academy — including the dashboard,
        scoring systems, ladders, articles, calculators, watchlist items
        and any communication — constitutes regulated financial advice,
        investment advice, tax advice, or a personal recommendation. All
        information is provided for educational purposes only and is
        general in nature.
      </p>
      <p>
        Aurora Growth Academy is <strong>not</strong> authorised or
        regulated by the Financial Conduct Authority (FCA). We do not
        manage money, hold client assets, or execute trades on your behalf.
      </p>

      <h2>2. Capital at risk</h2>
      <p>
        Investing involves risk. The value of investments can go down as
        well as up, and you may get back less than you invested. In some
        cases you can lose your entire investment. You should never invest
        money you cannot afford to lose.
      </p>

      <h2>3. Past performance</h2>
      <p>
        Past performance is not a reliable indicator of future results.
        Backtests, simulations, illustrations and example portfolios shown
        on the platform are hypothetical and do not represent any real
        client account. Real-world results will differ, sometimes
        materially.
      </p>

      <h2>4. Illustrative calculators</h2>
      <p>
        The compound calculator and any similar projection tools on the
        platform use assumed inputs — for example, a constant annual
        return. Real markets are volatile and returns are not constant.
        These tools are intended to show the impact of consistency and
        compounding over time, not to predict your actual outcome.
      </p>

      <h2>5. Tax</h2>
      <p>
        Tax treatment depends on your individual circumstances and may
        change in the future. ISA rules are set by HMRC. Aurora Growth
        Academy does not provide tax advice. Speak to a qualified tax
        adviser if you are unsure.
      </p>

      <h2>6. Third-party services</h2>
      <p>
        Aurora Growth Academy may integrate with third-party services
        (for example Trading 212) at your option. Use of those services
        is governed by their own terms and is at your own risk. We are
        not responsible for outages, errors, or losses arising from
        third-party services.
      </p>

      <h2>7. Decisions are yours</h2>
      <p>
        You are solely responsible for your investment decisions. Always
        consider seeking advice from an appropriately qualified and
        authorised professional before making investment decisions.
      </p>
    </LegalLayout>
  );
}
