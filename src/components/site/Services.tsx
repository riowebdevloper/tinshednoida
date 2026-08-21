import { useState } from "react";
import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects, services, type VideoItem } from "@/lib/site-data";
import { needIcons } from "./needIcons";
import { triggerQuoteForNeed } from "./QuoteWizard";

type ServiceItem = (typeof services)[number];

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  if (!service) return null;

  const Icon = needIcons[service.icon] ?? needIcons["factory"]!;
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-sm border border-steel-line bg-steel-deep text-steel-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-steel-line px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-primary">{service.code}</span>
            <h3 className="font-display text-xl font-bold uppercase text-white">
              {service.label}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-sm p-1.5 text-steel-muted transition-colors hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-black">
              <img src={service.image} alt={service.alt} className="size-full object-cover" />
            </div>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-steel-muted">{service.body}</p>
              <p className="text-xs font-mono text-steel-foreground">{service.specifications}</p>
            </div>
          </div>

          <div className="border-t border-steel-line/60 pt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-steel-muted mb-3">Key Advantages</h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-steel-foreground leading-relaxed">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {service.useCases.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-steel-muted mb-2">Applications</h4>
              <div className="flex flex-wrap gap-1.5">
                {service.useCases.map((uc) => (
                  <span key={uc} className="rounded-sm border border-steel-line bg-steel/50 px-2.5 py-1 text-xs text-white">
                    {uc}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-steel-line px-6 py-4">
          <Link
            to="/projects"
            onClick={onClose}
            className="text-xs font-medium text-steel-muted transition-colors hover:text-white"
          >
            View projects →
          </Link>
          <button
            type="button"
            onClick={handleGetQuote}
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wide text-primary-foreground"
          >
            Get a quote
            <ArrowRight className="size-3.5" />
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section label — small, not dramatic */}
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Services</p>
        <div className="mt-2 h-px w-12 bg-primary" />

        {/* Alternating editorial service rows */}
        <div className="mt-12 space-y-16 lg:space-y-20">
          {services.map((service, i) => {
            const isReversed = i % 2 !== 0;

            return (
              <article
                key={service.id}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-14 items-center ${
                  isReversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-sm bg-black cursor-pointer lg:[direction:ltr]"
                  onClick={() => setSelectedService(service)}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                {/* Text */}
                <div className="lg:[direction:ltr]">
                  <span className="font-mono text-sm text-muted-foreground">{service.code}</span>
                  <h3
                    className="mt-1 font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground cursor-pointer hover:text-primary transition-colors"
                    onClick={() => setSelectedService(service)}
                  >
                    {service.label}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
                    {service.body}
                  </p>
                  <p className="mt-4 font-mono text-xs text-muted-foreground">
                    {service.specifications}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    View details →
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Simple CTA at bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Need something custom? We fabricate to your exact structural requirements.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-px"
          >
            Get a quotation
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
