import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Leadership } from "@/components/site/Leadership";
import { Journey } from "@/components/site/Journey";
import { FinalCta } from "@/components/site/FinalCta";
import { company } from "@/lib/site-data";

const title = `About ${company.name} | Steel & Fabrication Since ${company.since}`;
const description =
  "Meet the team behind Tin Shade Noida — in-house fabricators and erectors delivering industrial sheds and MS structures across India.";

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
        eyebrow={`Direct fabricators since ${company.since}`}
        title="Our own crew, not a middleman"
        description="Fabricators, welders and erectors — we handle every project end to end."
      />
      <Leadership />
      <Journey />
      <FinalCta />
    </SiteLayout>
  );
}
