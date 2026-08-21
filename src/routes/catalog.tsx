import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CatalogViewer } from "@/components/site/CatalogViewer";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Official Work Catalog (51 Pages) — Tin Shade Noida";
const description =
  "Download or view our 51-page work catalog with structural designs, completed projects and material specifications.";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/catalog" }],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Official catalog"
        title="51-page project and structure catalog"
        description="Structural designs, site photographs and completed project documentation."
      />
      <CatalogViewer />
      <FinalCta />
    </SiteLayout>
  );
}
