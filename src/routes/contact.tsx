import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { FinalCta } from "@/components/site/FinalCta";
import { company } from "@/lib/site-data";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, ShieldCheck, HardHat } from "lucide-react";
import { QuoteWizard } from "@/components/site/QuoteWizard";

const title = "Contact Tin Shade Noida | Fabrication Yard & Site Survey";
const description =
  "Visit our in-house steel fabrication yard at D179 Sector 10 Noida, schedule a free on-site survey, or call directly for immediate structural shed pricing.";

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
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="DIRECT YARD HOTLINES &amp; LOCATION"
        title="Contact &amp; Site Survey Booking"
        description="Speak directly with our senior structural engineers in Noida or book a free physical site inspection for your plot anywhere across India."
      />

      {/* 1. Contact Information & Map Hub */}
      <section className="bg-warm-paper py-24 sm:py-32 border-b border-[#0B0D0F]/10 text-[#0B0D0F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Column: Direct Yard Ledger (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <span className="font-mono-tag text-[#B08A4A] text-xs font-bold block mb-2">
                  NOIDA WORKSHOP HEADQUARTERS
                </span>
                <h2 className="font-editorial-title text-3xl sm:text-4xl font-extrabold uppercase">
                  Direct Engineering Desk
                </h2>
                <p className="mt-2 text-sm text-[#525860] font-sans">
                  You are welcome to visit our yard to inspect raw IS 2062 steel stocks, truss arc welding, and discuss architectural drawings in person.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-4 font-mono text-xs">
                
                {/* Yard Address */}
                <div className="p-5 bg-white border border-[#0B0D0F]/15 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#0B0D0F]">
                    <MapPin className="size-4 text-[#B08A4A]" />
                    <span className="uppercase">Fabrication Yard Address</span>
                  </div>
                  <p className="text-xs text-[#525860] font-sans pl-6">
                    D179 Sector 10, Noida, Uttar Pradesh 201301
                  </p>
                </div>

                {/* Direct Phone Lines */}
                <div className="p-5 bg-white border border-[#0B0D0F]/15 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#0B0D0F]">
                    <Phone className="size-4 text-[#B08A4A]" />
                    <span className="uppercase">Direct Yard Telephones</span>
                  </div>
                  <div className="text-xs text-[#0B0D0F] font-sans pl-6 space-y-1">
                    <div>
                      <a href="tel:+918527977714" className="font-bold hover:text-[#B08A4A]">+91 85279 77714</a> (Abdul / Engineering)
                    </div>
                    <div>
                      <a href="tel:+919899793714" className="font-bold hover:text-[#B08A4A]">+91 98997 93714</a> (MD Khurshid / Workshop)
                    </div>
                  </div>
                </div>

                {/* Operational Hours */}
                <div className="p-5 bg-white border border-[#0B0D0F]/15 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#0B0D0F]">
                    <Clock className="size-4 text-[#B08A4A]" />
                    <span className="uppercase">Operating Hours</span>
                  </div>
                  <p className="text-xs text-[#525860] font-sans pl-6">
                    Monday – Saturday: 8:00 AM – 8:00 PM <br />
                    Sunday: By appointment for site visits
                  </p>
                </div>

                {/* WhatsApp Action */}
                <div className="pt-2">
                  <a
                    href={company.whatsappText}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white p-3.5 font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageCircle className="size-4" />
                    <span>WhatsApp Yard Desk Directly</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Right Column: Google Maps Embed (7 cols) */}
            <div className="lg:col-span-7">
              <div className="arch-card-light overflow-hidden bg-white p-2.5 border border-[#0B0D0F]/15 shadow-2xl">
                <div className="relative aspect-[16/10] bg-[#0B0D0F] overflow-hidden">
                  <iframe
                    src={company.mapEmbed}
                    title="Tin Shade Noida Yard Location"
                    className="size-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 flex items-center justify-between font-mono text-xs text-[#8C9398]">
                  <span>Plot D179 Sector 10 Noida</span>
                  <a
                    href="https://maps.google.com/?q=D179+Sector+10+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0B0D0F] hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Quotation Wizard */}
      <QuoteWizard />

      {/* 3. Final CTA */}
      <FinalCta />
    </SiteLayout>
  );
}
