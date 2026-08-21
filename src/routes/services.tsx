import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Services | Industrial Shed, Warehouse & MS Steel Fabrication — Tin Shade Noida";
const description =
  "Complete industrial shed and steel fabrication solutions from requirement to fabrication and erection across Noida, Greater Noida, and Pan India.";

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
        eyebrow="Structural Capabilities"
        title="ENGINEERED FOR INDUSTRY. BUILT TO LAST."
        description="Complete industrial shed and steel fabrication solutions from requirement to fabrication and erection."
      />
      <Services />
      <WhyChooseUs />
      <Process />
      <FinalCta />
    </SiteLayout>
  );
}
