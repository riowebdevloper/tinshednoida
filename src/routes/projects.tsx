import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Projects } from "@/components/site/Projects";
import { Gallery } from "@/components/site/Gallery";
import { Videos } from "@/components/site/Videos";

const title = "Projects | Industrial Shed & Steel Structure Portfolio — Tin Shade Noida";
const description =
  "Browse completed tin shed, warehouse roofing and MS structure projects across Noida, Greater Noida and Pan India with scope, materials and site photos.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Recent work"
        title="Projects built across India"
        description="Filter by structure type, open any project to see the scope, materials and span we delivered on site."
      />
      <Projects />
      <Gallery />
      <Videos />
    </SiteLayout>
  );
}
