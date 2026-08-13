import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { faqs } from "@/lib/site-data";

const title = "Contact Tin Shade Noida | Free Site Visit & Shed Quotation";
const description =
  "Call +91-8527977714 or send your requirement — we schedule a free site visit across India and share a written quotation.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Talk to us"
        title="Get a free site visit"
        description="Share your location and rough size — we measure on site, then send a clear written quotation with materials and timeline."
      />
      <Contact />
      <Faq />
    </SiteLayout>
  );
}
