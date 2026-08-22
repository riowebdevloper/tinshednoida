import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Projects } from "@/components/site/Projects";
import { Videos } from "@/components/site/Videos";
import { FinalCta } from "@/components/site/FinalCta";
import { MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";

const title = "Projects & Portfolio | Industrial Sheds & Steel Structures — Tin Shade Noida";
const description =
  "Photographic records and technical specifications of completed factory sheds, logistics warehouses, and MS structures across Noida, Greater Noida, and Pan India.";

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
        eyebrow="AUTHENTIC EXECUTION PORTFOLIO"
        title="500+ Industrial Sheds Delivered Nationwide"
        description="Filter by structure type, inspect engineering span drawings, tonnages, and on-site crane erection photos from actual industrial installations."
      />

      {/* 1. Filterable Projects Archive */}
      <Projects />

      {/* 2. On-Site Erection Videos */}
      <Videos />

      {/* 3. Final Inquiry Dispatch */}
      <FinalCta />
    </SiteLayout>
  );
}
