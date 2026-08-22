import { useState } from "react";
import { ArrowRight, CheckCircle2, FileText, Ruler, ShieldCheck, X, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects, services } from "@/lib/site-data";
import { triggerQuoteForNeed } from "./QuoteWizard";

type ServiceItem = (typeof services)[number];

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  if (!service) return null;

  const relatedProjects = projects.filter(
    (p) =>
      p.category.toLowerCase().includes(service.id) ||
      p.title.toLowerCase().includes(service.label.toLowerCase()),
  );

  function handleGetQuote() {
    onClose();
    triggerQuoteForNeed(service!.quoteOptionNeed);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-sm border border-steel-line bg-steel-deep text-steel-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-steel-line bg-steel px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-primary bg-black/60 px-2 py-0.5 rounded-xs border border-white/10">
              {service.code}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
              {service.label}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-xs p-1.5 text-steel-muted transition-colors hover:text-white hover:bg-steel-deep"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div className="aspect-[4/3] overflow-hidden rounded-xs bg-black border border-steel-line">
              <img src={service.image} alt={service.alt} className="size-full object-cover" />
            </div>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-steel-muted">{service.body}</p>
              
              <div className="rounded-xs border border-steel-line bg-steel/80 p-4 font-mono text-xs space-y-1.5">
                <span className="text-primary font-bold block uppercase">Engineering Specification</span>
                <p className="text-steel-foreground">{service.specifications}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {service.useCases.map((uc) => (
                  <span key={uc} className="rounded-xs border border-steel-line bg-steel/50 px-2.5 py-1 text-xs text-white">
                    {uc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Engineering Advantages */}
          <div className="border-t border-steel-line/60 pt-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-steel-muted mb-3">
              Structural Advantages & Load Capabilities
            </h4>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="rounded-xs border border-steel-line bg-steel/40 p-3.5 text-xs text-steel-foreground leading-relaxed">
                  <span className="font-mono text-primary font-bold block mb-1">0{idx + 1}. Capability</span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Related Executed Projects */}
          {relatedProjects.length > 0 && (
            <div className="border-t border-steel-line/60 pt-5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-steel-muted mb-3">
                Completed Project Benchmarks
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedProjects.slice(0, 2).map((proj) => (
                  <div key={proj.id} className="flex items-center gap-3 rounded-xs border border-steel-line bg-steel/30 p-3">
                    <img src={proj.image} alt={proj.title} className="size-12 rounded-xs object-cover shrink-0" />
                    <div className="min-w-0">
                      <p className="font-display text-xs font-bold uppercase text-white truncate">{proj.title}</p>
                      <p className="text-[0.7rem] font-mono text-steel-muted">{proj.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-steel-line bg-steel px-6 py-4">
          <Link
            to="/projects"
            onClick={onClose}
            className="font-mono text-xs font-semibold text-steel-muted transition-colors hover:text-white"
          >
            Browse All Case Studies →
          </Link>
          <button
            type="button"
            onClick={handleGetQuote}
            className="inline-flex items-center gap-2 rounded-xs bg-primary px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-transform hover:-translate-y-px"
          >
            Get Quotation for this Structure
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="bg-surface py-16 lg:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                Core Structural Capabilities
              </span>
              <span className="text-muted-foreground font-mono text-xs">/ 01 — 06</span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
              Industrial Steel &amp; Shed Solutions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Complete design, in-house shop fabrication, and on-site crane erection across India. Built strictly to IS 2062 &amp; IS 800 standards.
            </p>
          </div>

          <Link
            to="/quote"
            className="self-start md:self-center shrink-0 inline-flex items-center gap-2 rounded-xs bg-primary px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-xs transition-transform hover:-translate-y-px"
          >
            <span>Request Itemized Quotation</span>
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Alternating Editorial Capability Cards */}
        <div className="mt-12 space-y-16 lg:space-y-20">
          {services.map((service, i) => {
            const isReversed = i % 2 !== 0;

            return (
              <article
                key={service.id}
                className={`grid gap-8 lg:grid-cols-12 lg:gap-12 items-center ${
                  isReversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Photo Side (6 cols) */}
                <div
                  className="relative aspect-[16/10] overflow-hidden rounded-sm bg-black border border-border cursor-pointer lg:col-span-6 lg:[direction:ltr] group"
                  onClick={() => setSelectedService(service)}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded-xs font-mono text-xs font-bold text-white border border-white/20">
                    {service.code}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 rounded-xs font-mono text-xs text-primary border border-white/10">
                    {service.short}
                  </div>
                </div>

                {/* Content Side (6 cols) */}
                <div className="lg:col-span-6 lg:[direction:ltr] space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-primary">{service.code}</span>
                    <span className="text-muted-foreground text-xs font-mono">/ Technical Capability</span>
                  </div>

                  <h3
                    className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-foreground hover:text-primary transition-colors cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    {service.label}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>

                  {/* Specification Callout Box */}
                  <div className="rounded-xs border border-border bg-card p-3.5 font-mono text-xs text-foreground">
                    <span className="text-primary font-bold block uppercase mb-0.5">Engineering Spec</span>
                    {service.specifications}
                  </div>

                  {/* Applications Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.useCases.map((uc) => (
                      <span
                        key={uc}
                        className="rounded-xs border border-border bg-surface px-2.5 py-1 text-xs text-foreground"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 rounded-xs border border-primary/40 bg-primary/10 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <span>View Full Specifications</span>
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </button>

                    <button
                      type="button"
                      onClick={() => triggerQuoteForNeed(service.quoteOptionNeed)}
                      className="inline-flex items-center gap-1.5 rounded-xs border border-border bg-card px-4 py-2 font-mono text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
                    >
                      <span>Get Fast Quote &rarr;</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Section Bottom Guarantee Strip */}
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <span>✓ All Mild Steel Welds Tested to IS 816 (Code of Practice for Use of Metal Arc Welding)</span>
          <Link to="/quote" className="font-bold text-primary hover:underline">
            Schedule Site Survey &rarr;
          </Link>
        </div>

      </div>

      {/* Modal View */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
