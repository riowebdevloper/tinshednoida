import { useState } from "react";
import { ArrowRight, CheckCircle2, Factory, Warehouse, Building2, Frame, Layers, Building, X, ShieldCheck } from "lucide-react";
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
    <section id="services" className="bg-navy-obsidian py-16 sm:py-24 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── SECTION HEADER ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sky-400 mb-2">
              <span className="size-1.5 rounded-full bg-sky-400" />
              <span>FABRICATION YARD &amp; PAN-INDIA ERECTION</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Structural Steel Fabrication Capabilities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              All steel sections are cut, welded, and prime-coated in our Noida Sector 10 yard with IS 2062 certified mild steel, then erected on-site with hydraulic cranes.
            </p>
          </div>

          <Link
            to="/quote"
            className="btn-elite self-start md:self-auto shrink-0"
          >
            <span>Request Site Survey</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        {/* ──────── 6 CORE STRUCTURAL CAPABILITY CARDS ──────── */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = getIcon(service.id);
            return (
              <article
                key={service.id}
                className="navy-card flex flex-col justify-between p-5 sm:p-6"
              >
                <div>
                  {/* Category Tag Chip */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="inline-block rounded-xs bg-sky-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-sky-300 border border-sky-400/20">
                      {service.short}
                    </span>
                    <Icon className="size-4 text-amber-400" aria-hidden="true" />
                  </div>

                  {/* Real Structural Imagery */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xs bg-navy-deep border border-white/10">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    
                    {/* Technical Steel Grade Tag */}
                    <span className="absolute bottom-2 left-2 font-mono text-[0.6875rem] text-white bg-slate-950/80 backdrop-blur-xs px-2 py-0.5 rounded-xs border border-white/20">
                      IS 2062 Prime Mild Steel
                    </span>
                  </div>

                  {/* Service Title & Scope */}
                  <div className="mt-4">
                    <h3 className="font-display text-xl font-bold text-white">
                      {service.label}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300 font-sans">
                      {service.body}
                    </p>
                  </div>

                  {/* Engineering Specification Line Item in JetBrains Mono */}
                  <div className="mt-4 rounded-xs border border-white/10 bg-[#0B1320] p-3 font-mono text-xs text-slate-300">
                    <span className="text-amber-400 font-semibold block uppercase text-[0.6875rem] mb-0.5">
                      Spec Highlights
                    </span>
                    <span className="text-slate-200 leading-tight block">{service.specifications}</span>
                  </div>

                  {/* Use Cases */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.useCases.slice(0, 3).map((uc) => (
                      <span
                        key={uc}
                        className="rounded-xs border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300 font-sans"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="font-display text-xs font-bold uppercase tracking-wide text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => triggerQuoteForNeed(service.quoteOptionNeed)}
                    className="rounded-xs bg-white/10 hover:bg-amber-400 hover:text-slate-950 px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-white transition-all"
                  >
                    Quote &rarr;
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* ──────── FULL SPECIFICATION MODAL DRAWER ──────── */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
          <div
            className="fixed inset-0 bg-[#060A14]/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          />

          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xs border border-sky-400/30 bg-[#0E1726] p-6 sm:p-8 text-white shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-amber-400 uppercase">
                  SPEC SHEET · {selectedService.short}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase mt-1 text-white">
                  {selectedService.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-xs border border-white/15 bg-white/5 p-1.5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Content */}
            <div className="mt-5 space-y-4">
              <div className="aspect-[16/9] overflow-hidden rounded-xs bg-navy-deep border border-white/10">
                <img
                  src={selectedService.image}
                  alt={selectedService.alt}
                  className="size-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-display text-sm font-bold uppercase text-white">
                  Scope &amp; Structural Description
                </h4>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300 font-sans">
                  {selectedService.body}
                </p>
              </div>

              {/* Technical Specifications BOQ Line in Monospace */}
              <div className="rounded-xs border border-white/10 bg-[#080D1A] p-4 font-mono text-xs">
                <p className="font-bold text-amber-400 uppercase mb-1">
                  Standard Technical Standards &amp; Codes
                </p>
                <p className="text-slate-200">{selectedService.specifications}</p>
                <p className="mt-2 text-slate-400 text-[0.6875rem]">
                  Code Compliance: IS 2062 Prime Mild Steel · IS 800:2007 General Construction · IS 816 Metal Arc Welding
                </p>
              </div>

              {/* Structural Inclusions */}
              <div>
                <h4 className="font-display text-sm font-bold uppercase text-white">
                  Quality Inclusions
                </h4>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-300 font-sans">
                  {selectedService.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Primary Action */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="btn-navy-outline text-xs"
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
                className="btn-elite text-xs"
              >
                <span>Request Custom Quote &rarr;</span>
              </button>
            </div>

          </div>
        </div>
      )}

      <TrussDivider dark type="pratt" className="mt-14" />
    </section>
  );
}
