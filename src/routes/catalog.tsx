import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CatalogViewer } from "@/components/site/CatalogViewer";
import { Projects } from "@/components/site/Projects";

const title = "Official Work Catalog (51 Pages PDF) — Tin Shade Noida";
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
        eyebrow="Official Catalog"
        title="51-Page Project & Structure Catalog"
        description="Browse all 51 verified pages of our tin shed models, warehouse designs, MS structures and real project photos across India."
      />
      <CatalogViewer standalone />
      <Projects />
    </SiteLayout>
  );
}
