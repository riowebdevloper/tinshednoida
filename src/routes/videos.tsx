import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Videos } from "@/components/site/Videos";
import { FinalCta } from "@/components/site/FinalCta";

const title = "Project Action Video | On-Site Crane Erection & Fabrication  -  Tin Shade Noida";
const description =
  "Watch real on-site video documentation of industrial shed fabrication, heavy crane lifting, and roof sheeting across India by Tin Shade Noida.";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
  component: VideosPage,
});

function VideosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="ON-SITE ACTION VIDEO ARCHIVE"
        title="Heavy Crane Erection &amp; Workshop Fabrication"
        description="Authentic project action videos, YouTube channel documentation, and Instagram reels from active industrial construction sites across India."
      />

      {/* Main Video System with 70/30 Player & Instagram Reels */}
      <Videos isPage={true} />

      {/* Direct Final CTA */}
      <FinalCta />
    </SiteLayout>
  );
}
