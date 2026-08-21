import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import { CatalogViewer } from "@/components/site/CatalogViewer";

const title = "Get a Quotation | Tin Shed & Steel Structure Pricing — Tin Shade Noida";
const description =
  "Answer four quick questions about your shed requirement and get a costed quotation from Tin Shade Noida, usually within 24 hours.";

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
        eyebrow="Free quotation"
        title="Tell us what you need built"
        description="Four short steps — structure type, size, location and timeline."
      />
      <QuoteWizard />
      <CatalogViewer />
    </SiteLayout>
  );
}

