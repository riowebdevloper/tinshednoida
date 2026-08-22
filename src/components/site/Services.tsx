import { useState } from "react";
import { ArrowRight, CheckCircle2, Factory, Warehouse, Building2, Frame, Layers, Building, ShieldCheck, X, Phone, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { services, company } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function Services() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);
  const navigate = useNavigate();

  const getIcon = (id: string) => {
    switch (id) {
      case "industrial":
        return Factory;
      case "warehouse":
        return Warehouse;
      case "godown":
        return Building2;
      case "ms":
        return Frame;
      case "roofing":
        return Layers;
      case "mezzanine":
        return Building;
      default:
        return Factory;
    }
  };

  const triggerQuoteForNeed = (need: string) => {
    sessionStorage.setItem("tsn_selected_need", need);
    navigate({ to: "/quote" });
  };

  return (
    <section id="services" className="bg-paper py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── SECTION HEADER: PLAIN CATEGORIES, INDUSTRIAL SIGNAGE ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/15 pb-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold text-oxide uppercase tracking-wider block mb-1">
              STRUCTURAL STEEL CAPABILITIES · NOIDA YARD &amp; PAN INDIA
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight">
              Industrial Fabrication &amp; Erection
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Every structure is fabricated in our Noida Sector 10 yard with IS 2062 certified mild steel, anti-rust red oxide primer, and erected on your site with licensed crane operators.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <Link
              to="/quote"
              className="btn-primary"
            >
              <span>Schedule Site Survey</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* ──────── 6 CORE STRUCTURAL CAPABILITY CARDS ──────── */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = getIcon(service.id);
            return (
              <article
                key={service.id}
                className="group flex flex-col justify-between rounded-xs border border-border bg-card p-6 shadow-card transition-all hover:border-charcoal hover:shadow-elevated"
              >
                <div>
                  {/* Top Category Tag (No fake numbering) */}
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
                    <span className="inline-block rounded-xs bg-surface px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-charcoal border border-border">
                      {service.short}
                    </span>
                    <Icon className="size-5 text-oxide" aria-hidden="true" />
                  </div>

                  {/* Structural Imagery */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xs bg-charcoal border border-border">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* IS Code Tag */}
                    <span className="absolute bottom-2.5 left-2.5 font-mono text-[0.6875rem] font-bold text-white bg-charcoal/80 px-2 py-0.5 rounded-xs border border-white/20">
                      IS 2062 Mild Steel
                    </span>
                  </div>

                  {/* Service Title & Scope */}
                  <div className="mt-5">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                      {service.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-sans">
                      {service.body}
                    </p>
                  </div>

                  {/* Engineering Specification Line Item */}
                  <div className="mt-4 rounded-xs border border-border bg-surface p-3 font-mono text-xs text-charcoal">
                    <span className="text-oxide font-bold block uppercase mb-0.5">
                      Spec Highlights
                    </span>
                    <span className="text-charcoal/90">{service.specifications}</span>
                  </div>

                  {/* Use Cases / Sectors */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.useCases.slice(0, 3).map((uc) => (
                      <span
                        key={uc}
                        className="rounded-xs border border-border bg-paper px-2 py-0.5 text-xs text-charcoal/80 font-sans"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions: Primary Spec Inspect + Direct Fast Quote */}
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="font-display text-xs font-bold uppercase tracking-wider text-charcoal hover:text-oxide flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => triggerQuoteForNeed(service.quoteOptionNeed)}
                    className="rounded-xs bg-charcoal px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-paper hover:bg-oxide transition-colors"
                  >
                    Quote →
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* ──────── FULL DETAILED SPECIFICATION MODAL DRAWER ──────── */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-xs"
            onClick={() => setSelectedService(null)}
          />

          {/* Dialog Container */}
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm border border-charcoal bg-paper p-6 sm:p-8 shadow-elevated text-charcoal">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-border pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-oxide uppercase tracking-wider">
                  ENGINEERING SPECIFICATION SHEET · {selectedService.short}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase mt-1 text-charcoal">
                  {selectedService.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-xs border border-border bg-surface p-1.5 text-charcoal hover:bg-charcoal hover:text-paper transition-colors"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Image & Key Spec Callout */}
            <div className="mt-5 space-y-5">
              <div className="aspect-[16/9] overflow-hidden rounded-xs bg-charcoal border border-border">
                <img
                  src={selectedService.image}
                  alt={selectedService.alt}
                  className="size-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-display text-base font-bold uppercase text-charcoal">
                  Structural Description &amp; Scope
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {selectedService.body}
                </p>
              </div>

              {/* Technical Specifications BOQ Line */}
              <div className="rounded-xs border border-charcoal/20 bg-surface p-4 font-mono text-xs">
                <p className="font-bold text-oxide uppercase mb-1">
                  Standard Technical Standards &amp; Codes
                </p>
                <p className="text-charcoal">{selectedService.specifications}</p>
                <p className="mt-2 text-muted-foreground">
                  Code: IS 2062 Grade Steel · IS 800:2007 General Construction · IS 816 Metal Arc Welding
                </p>
              </div>

              {/* Structural Benefits Checklist */}
              <div>
                <h4 className="font-display text-base font-bold uppercase text-charcoal">
                  Fabrication &amp; Quality Inclusions
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-charcoal">
                  {selectedService.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-safety shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-5 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href={`https://wa.me/918527977714?text=Hello%20Tin%20Shade%20Noida%2C%20I%20need%20specifications%20and%20quotation%20for%20${encodeURIComponent(
                  selectedService.label
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xs bg-whatsapp px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-white"
              >
                <MessageCircle className="size-4" />
                <span>Discuss on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  const need = selectedService.quoteOptionNeed;
                  setSelectedService(null);
                  triggerQuoteForNeed(need);
                }}
                className="btn-primary"
              >
                <span>Request Custom Quote &rarr;</span>
              </button>
            </div>

          </div>
        </div>
      )}

      <TrussDivider type="pratt" className="mt-16" />
    </section>
  );
}
