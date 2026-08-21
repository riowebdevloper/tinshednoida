import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import { EstimatorWidget } from "@/components/site/EstimatorWidget";
import { CatalogViewer } from "@/components/site/CatalogViewer";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Get a Quotation | Industrial Shed & Steel Structure Pricing — Tin Shade Noida";
const description =
  "Calculate estimated steel tonnage or answer four quick questions to receive an itemized BOQ quotation from Tin Shade Noida.";

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
        eyebrow="Instant Estimation & Free Site Survey"
        title="Industrial Structure Quotation"
        description="Calculate estimated steel weight and timeline instantly, or submit your project details for an on-site survey."
      />
      
      {/* 1. Quick Step Wizard */}
      <QuoteWizard />

      {/* 2. Interactive Calculator Section */}
      <section className="bg-background py-12 lg:py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EstimatorWidget />
        </div>
      </section>

      {/* 3. Catalog & Process */}
      <CatalogViewer />

      {/* 4. Final Contact CTA */}
      <FinalCta />
    </SiteLayout>
  );
}
