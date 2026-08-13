import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { TrustBlock } from "@/components/site/TrustBlock";
import { Leadership } from "@/components/site/Leadership";
import { Journey } from "@/components/site/Journey";
import { Testimonials } from "@/components/site/Videos";
import { company } from "@/lib/site-data";

const title = `About ${company.name} | Shed Builders in Noida Since ${company.since}`;
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
        eyebrow={`Building since ${company.since}`}
        title="A shed crew, not a middleman"
        description="Our own fabricators, welders and erectors handle every project end to end — so quality, timelines and pricing stay in one pair of hands."
      />
      <TrustBlock />
      <Leadership />
      <Journey />
      <Testimonials />
    </SiteLayout>
  );
}
