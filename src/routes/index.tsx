import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { Statement } from "@/components/site/Statement";
import { ProjectScale } from "@/components/site/ProjectScale";
import { Services } from "@/components/site/Services";
import { FeaturedProject } from "@/components/site/FeaturedProject";
import { CatalogViewer } from "@/components/site/CatalogViewer";
import { Videos } from "@/components/site/Videos";
import { Leadership } from "@/components/site/Leadership";
import { PanIndia } from "@/components/site/PanIndia";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Tin Shade Noida | Industrial Shed & Structural Steel Fabrication";
const description =
  "In-house mild steel fabrication shop in Noida Sector 10. Turnkey manufacturing factory sheds, logistics warehouses, and heavy MS frameworks up to 120ft clear span across India.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* 1. Cinematic 100vh Hero Slider with Multilingual Campaign Slides */}
      <Hero />

      {/* 2. Cinematic Editorial Statement Section */}
      <Statement />

      {/* 3. Project Scale & Statistics Section */}
      <ProjectScale />

      {/* 4. Vertical Editorial Architectural Service List (01 to 06) */}
      <Services />

      {/* 5. Massive Full-Bleed Featured Project Case Study */}
      <FeaturedProject />

      {/* 6. Five-Stage IS 800 Erection Sequence */}
      <CatalogViewer />

      {/* 7. Project Action Video (70% YouTube / 30% Details + Instagram Field Reports) */}
      <Videos isPage={false} />

      {/* 8. Editorial Founders Section (MD Khurshid & Abdul) */}
      <Leadership />

      {/* 9. Pan India Connectivity & Logistics Section */}
      <PanIndia />

      {/* 10. Dramatic Editorial Final CTA */}
      <FinalCta />
    </SiteLayout>
  );
}
