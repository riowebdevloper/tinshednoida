import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Leadership } from "@/components/site/Leadership";
import { PanIndiaSection } from "@/components/site/PanIndiaSection";
import { Journey } from "@/components/site/Journey";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";
import { company } from "@/lib/site-data";

const title = `About ${company.name} | Industrial Steel & Fabrication Company`;
const description =
  "Meet the team behind Tin Shade Noida — in-house fabricators and erectors delivering industrial sheds and MS structures across India with fixed timelines.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={`Direct Fabricators · Est. ${company.since}`}
        title="BUILT ON EXPERIENCE. CARRIED FORWARD BY FAMILY."
        description="Our own fabricators, welders and erectors handle every project end to end — ensuring structural precision, fixed timelines and honest pricing."
      />
      <Leadership />
      <WhyChooseUs />
      <PanIndiaSection />
      <Journey />
      <Testimonials />
      <FinalCta />
    </SiteLayout>
  );
}
