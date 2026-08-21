import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Services } from "@/components/site/Services";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Services | Industrial Shed, Warehouse & Steel Fabrication — Tin Shade Noida";
const description =
  "Industrial shed and steel fabrication solutions from requirement to erection across Noida, Greater Noida, and Pan India.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="What we build"
        title="Industrial shed and steel fabrication services"
        description="From a parking shed to a 40,000 sq ft warehouse — one team handles design, fabrication and erection."
      />
      <Services />
      <FinalCta />
    </SiteLayout>
  );
}
