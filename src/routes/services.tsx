import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Journey } from "@/components/site/Journey";

const title = "Services | Tin Sheds, Warehouse Roofing & MS Structures — Tin Shade Noida";
const description =
  "Factory sheds, warehouse roofing, pre-engineered buildings, MS fabrication and shed repair, engineered and installed across Noida and Pan India.";

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
        title="Engineered shed & steel services"
        description="From a single parking shed to a 40,000 sq ft warehouse roof — one team handles design, fabrication, erection and finishing."
      />
      <Services />
      <Process />
      <Journey />
    </SiteLayout>
  );
}
