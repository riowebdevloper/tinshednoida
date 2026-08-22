import { useState } from "react";
import { ArrowRight, CheckCircle2, Factory, Warehouse, Building2, Frame, Layers, Building, X } from "lucide-react";
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
    <section id="services" className="bg-paper py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── SECTION HEADER: PLAIN CATEGORY FOCUS, NO REPETITIVE EYEBROW ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/15 pb-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
              Structural Fabrication &amp; Erection Capabilities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
              All steel sections are cut, welded, and prime-coated in our Noida Sector 10 yard with IS 2062 certified mild steel, then erected on-site with hydraulic cranes.
            </p>
          </div>

          <Link
            to="/quote"
            className="btn-primary self-start md:self-auto shrink-0"
          >
            <span>Request Site Survey</span>
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* ──────── 6 CORE STRUCTURAL CAPABILITY CARDS (NO 01/02 NUMBERING) ──────── */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = getIcon(service.id);
            return (
              <article
                key={service.id}
                className="flex flex-col justify-between rounded-xs border border-border bg-card p-5 transition-colors hover:border-charcoal flex-1"
              >
                <div>
                  {/* Category Tag Chip (No numbering) */}
                  <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                    <span className="inline-block rounded-xs bg-surface px-2.5 py-0.5 font-mono text-xs font-semibold text-charcoal border border-border">
                      {service.short}
                    </span>
                    <Icon className="size-4 text-oxide" aria-hidden="true" />
                  </div>

                  {/* Real Structural Imagery */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xs bg-charcoal border border-border">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover"
                    />
                    
                    {/* Technical Steel Grade Tag */}
                    <span className="absolute bottom-2 left-2 font-mono text-[0.6875rem] text-white bg-charcoal/90 px-2 py-0.5 rounded-xs border border-white/20">
                      IS 2062 Mild Steel
                    </span>
                  </div>

                  {/* Service Title & Scope */}
                  <div className="mt-4">
                    <h3 className="font-display text-xl font-bold text-charcoal">
                      {service.label}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground font-sans">
                      {service.body}
                    </p>
                  </div>

                  {/* Engineering Specification Line Item in IBM Plex Mono */}
                  <div className="mt-3.5 rounded-xs border border-border bg-surface p-3 font-mono text-xs text-charcoal">
                    <span className="text-oxide font-bold block uppercase text-[0.6875rem] mb-0.5">
                      Spec Highlights
                    </span>
                    <span className="text-charcoal/90 leading-tight block">{service.specifications}</span>
                  </div>

                  {/* Use Cases */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
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

                {/* Card Action */}
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="font-display text-xs font-bold uppercase tracking-wide text-charcoal hover:text-oxide flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => triggerQuoteForNeed(service.quoteOptionNeed)}
                    className="rounded-xs bg-charcoal px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-paper hover:bg-oxide transition-colors"
                  >
                    Quote &rarr;
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* ──────── FULL DETAILED SPECIFICATION MODAL DRAWER ──────── */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
          <div
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-xs"
            onClick={() => setSelectedService(null)}
          />

          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xs border border-charcoal bg-paper p-6 sm:p-8 text-charcoal shadow-lg">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-border pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-oxide uppercase">
                  SPEC SHEET · {selectedService.short}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase mt-1 text-charcoal">
                  {selectedService.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-xs border border-border bg-surface p-1 text-charcoal hover:bg-charcoal hover:text-paper transition-colors"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Image & Key Spec Callout */}
            <div className="mt-5 space-y-4">
              <div className="aspect-[16/9] overflow-hidden rounded-xs bg-charcoal border border-border">
                <img
                  src={selectedService.image}
                  alt={selectedService.alt}
                  className="size-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-display text-sm font-bold uppercase text-charcoal">
                  Scope &amp; Structural Description
                </h4>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground font-sans">
                  {selectedService.body}
                </p>
              </div>

              {/* Technical Specifications BOQ Line in Monospace */}
              <div className="rounded-xs border border-charcoal/20 bg-surface p-3.5 font-mono text-xs">
                <p className="font-bold text-oxide uppercase mb-1">
                  Standard Technical Standards &amp; Codes
                </p>
                <p className="text-charcoal">{selectedService.specifications}</p>
                <p className="mt-1.5 text-muted-foreground text-[0.6875rem]">
                  Code: IS 2062 Grade Steel · IS 800:2007 General Construction · IS 816 Metal Arc Welding
                </p>
              </div>

              {/* Structural Inclusions */}
              <div>
                <h4 className="font-display text-sm font-bold uppercase text-charcoal">
                  Quality Inclusions
                </h4>
                <ul className="mt-2 space-y-1.5 text-xs text-charcoal font-sans">
                  {selectedService.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-safety shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Primary Action */}
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="btn-secondary text-xs"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const need = selectedService.quoteOptionNeed;
                  setSelectedService(null);
                  triggerQuoteForNeed(need);
                }}
                className="btn-primary text-xs"
              >
                <span>Request Custom Quote &rarr;</span>
              </button>
            </div>

          </div>
        </div>
      )}

      <TrussDivider type="pratt" className="mt-14" />
    </section>
  );
}
