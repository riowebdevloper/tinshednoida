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
    <section id="services" className="bg-[#F8FAFC] py-16 sm:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── SECTION HEADER ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block mb-1">
              STRUCTURAL STEEL SOLUTIONS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Fabrication &amp; Crane Erection Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              All steel sections are cut, welded, and dual-coat primed in our Noida Sector 10 yard with IS 2062 certified mild steel, then erected on-site with hydraulic cranes.
            </p>
          </div>

          <Link
            to="/quote"
            className="btn-corp-primary self-start md:self-auto shrink-0"
          >
            <span>Request Site Survey</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        {/* ──────── 6 CRISP WHITE SERVICE CARDS ──────── */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = getIcon(service.id);
            return (
              <article
                key={service.id}
                className="corp-card flex flex-col justify-between p-5 sm:p-6 bg-white"
              >
                <div>
                  {/* Category Tag Chip */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <span className="inline-block rounded-xs bg-slate-100 px-2.5 py-0.5 font-mono text-xs font-semibold text-slate-800 border border-slate-200">
                      {service.short}
                    </span>
                    <Icon className="size-4 text-amber-600" aria-hidden="true" />
                  </div>

                  {/* Real Structural Imagery */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xs bg-slate-100 border border-slate-200">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-300 hover:scale-103"
                    />
                    
                    {/* Technical Steel Grade Tag */}
                    <span className="absolute bottom-2 left-2 font-mono text-[0.6875rem] text-slate-900 bg-white/95 px-2 py-0.5 rounded-xs border border-slate-300 font-semibold shadow-xs">
                      IS 2062 Mild Steel
                    </span>
                  </div>

                  {/* Service Title & Scope */}
                  <div className="mt-4">
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      {service.label}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-sans">
                      {service.body}
                    </p>
                  </div>

                  {/* Engineering Specification Line Item in JetBrains Mono */}
                  <div className="mt-4 rounded-xs border border-slate-200 bg-slate-50 p-3 font-mono text-xs text-slate-800">
                    <span className="text-amber-800 font-bold block uppercase text-[0.6875rem] mb-0.5">
                      Spec Highlights
                    </span>
                    <span className="text-slate-700 leading-tight block">{service.specifications}</span>
                  </div>

                  {/* Use Cases */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.useCases.slice(0, 3).map((uc) => (
                      <span
                        key={uc}
                        className="rounded-xs border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600 font-sans"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="font-display text-xs font-bold uppercase tracking-wide text-[#0E2A47] hover:text-amber-700 flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => triggerQuoteForNeed(service.quoteOptionNeed)}
                    className="rounded-xs bg-[#0E2A47] hover:bg-[#0B192C] px-3.5 py-1 font-display text-xs font-bold uppercase tracking-wide text-white transition-colors"
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setSelectedService(null)}
          />

          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xs border border-slate-300 bg-white p-6 sm:p-8 text-slate-900 shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-amber-700 uppercase">
                  SPEC SHEET · {selectedService.short}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase mt-1 text-slate-900">
                  {selectedService.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-xs border border-slate-200 p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Content */}
            <div className="mt-5 space-y-4">
              <div className="aspect-[16/9] overflow-hidden rounded-xs bg-slate-100 border border-slate-200">
                <img
                  src={selectedService.image}
                  alt={selectedService.alt}
                  className="size-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-display text-sm font-bold uppercase text-slate-900">
                  Scope &amp; Structural Description
                </h4>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600 font-sans">
                  {selectedService.body}
                </p>
              </div>

              {/* Technical Specifications BOQ Line in Monospace */}
              <div className="rounded-xs border border-slate-200 bg-slate-50 p-4 font-mono text-xs">
                <p className="font-bold text-amber-800 uppercase mb-1">
                  Standard Technical Standards &amp; Codes
                </p>
                <p className="text-slate-800">{selectedService.specifications}</p>
                <p className="mt-2 text-slate-500 text-[0.6875rem]">
                  Code Compliance: IS 2062 Prime Mild Steel · IS 800:2007 General Construction · IS 816 Metal Arc Welding
                </p>
              </div>

              {/* Structural Inclusions */}
              <div>
                <h4 className="font-display text-sm font-bold uppercase text-slate-900">
                  Quality Inclusions
                </h4>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-700 font-sans">
                  {selectedService.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Primary Action */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="btn-corp-secondary text-xs"
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
                className="btn-corp-primary text-xs"
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
