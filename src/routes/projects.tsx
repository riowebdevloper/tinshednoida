import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Projects } from "@/components/site/Projects";
import { Videos } from "@/components/site/Videos";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Projects | Industrial Shed & Steel Structure Portfolio — Tin Shade Noida";
const description =
  "Completed tin shed, warehouse roofing and MS structure projects across Noida, Greater Noida and Pan India.";

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
        description="Filter by structure type, open any project to see the scope and materials."
      />
      <Projects />
      <Videos />
      <FinalCta />
    </SiteLayout>
  );
}
