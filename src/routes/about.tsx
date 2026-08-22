import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Leadership } from "@/components/site/Leadership";
import { PanIndia } from "@/components/site/PanIndia";
import { FinalCta } from "@/components/site/FinalCta";
import { ShieldCheck, Factory, Compass } from "lucide-react";
import heroImg from "@/assets/gen/hero-3.jpg";

const title = "About Tin Shade Noida | 15+ Years Industrial Steel Fabrication";
const description =
  "Established in 2010 with an in-house fabrication yard in Sector 10 Noida. Learn about our master fabricators, IS 2062 quality standards, and turnkey crane erection across India.";

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
        eyebrow="ESTABLISHED NOIDA FABRICATION YARD"
        title="Our Story &amp; Engineering Mastery"
        description="Founded with a practical understanding of metal fabrication and a commitment to dependable workmanship, Tin Shade has built over 500 industrial structures across India."
      />

      {/* 1. OUR STORY & EXPERIENCE */}
      <section className="bg-[#0B0D0F] py-24 sm:py-32 border-b border-white/10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B08A4A]" />
                <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
                  OUR STORY SINCE 2010
                </span>
              </div>
              <h2 className="font-editorial-title text-3xl sm:text-5xl font-extrabold uppercase leading-tight">
                Built on Trust, Steel &amp; Hand-Crafted Precision.
              </h2>
              <p className="text-sm sm:text-base text-[#C8CCD0] leading-relaxed font-sans">
                Tin Shade Noida began as a dedicated structural fabrication workshop in D179 Sector 10, Noida. Over the past 15+ years, we have grown into one of North India’s most trusted direct-fabrication contractors, specializing in large clear-span manufacturing sheds, godowns, and heavy industrial framing.
              </p>
              <p className="text-sm sm:text-base text-[#8C9398] leading-relaxed font-sans">
                Unlike brokers or commercial aggregators who subcontract execution, we maintain full direct control: our own certified welders fabricate every chord in Noida, and our own hydraulic mobile crane crew erects the steel on your site.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs text-white">
                <div className="p-3 bg-[#14171A] border border-white/15">
                  <strong className="text-base text-[#B08A4A] block tabular-nums">500+</strong>
                  <span>Executed Projects</span>
                </div>
                <div className="p-3 bg-[#14171A] border border-white/15">
                  <strong className="text-base text-[#B08A4A] block tabular-nums">15+</strong>
                  <span>Years Operation</span>
                </div>
                <div className="p-3 bg-[#14171A] border border-white/15">
                  <strong className="text-base text-[#B08A4A] block tabular-nums">120 FT</strong>
                  <span>Clear Span Record</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="arch-card-dark overflow-hidden p-2.5 bg-[#14171A] border border-white/15 shadow-2xl">
                <div className="relative aspect-[4/3] bg-[#0B0D0F] overflow-hidden">
                  <img
                    src={heroImg}
                    alt="Tin Shade Noida Workshop Erection"
                    className="size-full object-cover grayscale contrast-115"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. HOW WE WORK & WHY CHOOSE US */}
      <section className="bg-[#0B0D0F] py-24 sm:py-32 border-b border-white/10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl border-b border-white/10 pb-8 mb-16">
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold block mb-2">
              THE DIRECT ADVANTAGE
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-5xl font-extrabold uppercase text-white">
              Why Serious Industrial Clients Choose Tin Shade
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            <div className="p-6 bg-[#14171A] border border-white/10 space-y-2">
              <ShieldCheck className="size-6 text-[#B08A4A]" />
              <h3 className="font-editorial-title text-lg font-bold uppercase text-white">
                IS 2062 Prime Steel Only
              </h3>
              <p className="text-xs sm:text-sm text-[#8C9398] font-sans leading-relaxed">
                Zero re-rolled or substandard scrap steel. Every member comes with verifiable Mill Test Certificates.
              </p>
            </div>

            <div className="p-6 bg-[#14171A] border border-white/10 space-y-2">
              <Factory className="size-6 text-[#B08A4A]" />
              <h3 className="font-editorial-title text-lg font-bold uppercase text-white">
                Direct Yard Fabrication
              </h3>
              <p className="text-xs sm:text-sm text-[#8C9398] font-sans leading-relaxed">
                No middleman commissions. You deal directly with our master fabricators in Sector 10 Noida.
              </p>
            </div>

            <div className="p-6 bg-[#14171A] border border-white/10 space-y-2">
              <Compass className="size-6 text-[#B08A4A]" />
              <h3 className="font-editorial-title text-lg font-bold uppercase text-white">
                Turnkey Crane Assembly
              </h3>
              <p className="text-xs sm:text-sm text-[#8C9398] font-sans leading-relaxed">
                We own and operate dedicated hydraulic cranes for safe, high-speed erection without third-party delays.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. EDITORIAL LEADERSHIP */}
      <Leadership />

      {/* 4. PAN INDIA */}
      <PanIndia />

      {/* 5. FINAL CTA */}
      <FinalCta />
    </SiteLayout>
  );
}
