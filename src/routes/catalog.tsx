import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CatalogViewer } from "@/components/site/CatalogViewer";
import { Projects } from "@/components/site/Projects";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Official Work Catalog (51 Pages) — Tin Shade Noida";
const description =
  "Download or view our official 51-page PDF work catalog featuring verified structural designs, completed warehouse sheds, industrial structures, and technical specifications across India.";

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
        eyebrow="Official 51-Page Edition"
        title="TIN SHADE NOIDA CATALOG"
        description="Verified structural designs, completed site photographs and project work across India."
      />
      <CatalogViewer />
      <Projects />
      <FinalCta />
    </SiteLayout>
  );
}
