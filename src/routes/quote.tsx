import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import { EstimatorWidget } from "@/components/site/EstimatorWidget";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Get an Itemized Structural Quotation - Tin Shade Noida";
const description =
  "Request a formal itemized quotation for industrial sheds, warehouses, MS frameworks, and roofing. Direct fabrication shop pricing with zero broker fees.";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAST-TRACK DIRECT BOQ ESTIMATION"
        title="Request an Itemized Quotation"
        description="Select your structure specifications or enter ground dimensions to receive a transparent written estimate and schedule a free senior engineer site inspection."
      />

      {/* 1. Guided Quote Wizard Form */}
      <QuoteWizard />

      {/* 2. Steel Tonnage & Cost Calculator */}
      <section className="bg-[#0B0D0F] py-24 sm:py-32 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EstimatorWidget />
        </div>
      </section>

      {/* 3. Direct Final CTA */}
      <FinalCta />
    </SiteLayout>
  );
}
