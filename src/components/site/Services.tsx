import { useState } from "react";
import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects, services, type VideoItem } from "@/lib/site-data";
import { needIcons } from "./needIcons";
import { triggerQuoteForNeed } from "./QuoteWizard";
import { Reveal } from "./Reveal";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-sm border border-steel-line bg-steel-deep text-steel-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-steel-line bg-steel px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-primary">{service.code}</span>
            <div className="flex items-center gap-2">
              <Icon className="size-5 text-primary" />
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                {service.label}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close service modal"
            className="rounded-sm border border-steel-line bg-steel-deep p-1.5 text-steel-muted transition-colors hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Showcase Image & Description */}
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="relative aspect-16/10 overflow-hidden rounded-sm border border-steel-line bg-card shadow-card">
              <img src={service.image} alt={service.alt} className="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-deep/80 via-transparent to-transparent" />
              <span className="eyebrow absolute bottom-3 left-3 rounded-sm bg-black/70 px-2.5 py-1 text-xs text-white backdrop-blur-xs">
                {service.short}
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-base leading-relaxed text-steel-muted">{service.body}</p>

              <div className="rounded-sm border border-steel-line bg-steel/60 p-4">
                <p className="eyebrow text-xs text-primary font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="size-4" /> Technical Specifications
                </p>
                <p className="mt-1.5 text-xs font-mono text-steel-foreground">
                  {service.specifications}
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="border-t border-steel-line/60 pt-6">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <CheckCircle2 className="size-4.5 text-primary" /> Key Structural Advantages
            </h4>
            <div className="mt-3.5 grid gap-3 sm:grid-cols-3">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="rounded-sm border border-steel-line bg-steel/40 p-3.5 text-xs text-steel-foreground leading-relaxed"
                >
                  <span className="block font-bold text-primary mb-1">0{idx + 1}. Advantage</span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Typical Applications */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-steel-muted">
              Typical Applications
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {service.useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="rounded-sm border border-steel-line/80 bg-steel/60 px-3 py-1.5 text-xs text-white"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="border-t border-steel-line/60 pt-6">
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-steel-muted mb-3">
                Completed Project Examples
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedProjects.slice(0, 2).map((proj) => (
                  <div
                    key={proj.id}
                    className="flex items-center gap-3 rounded-sm border border-steel-line bg-steel/30 p-3"
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="size-14 rounded-sm object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-display text-sm font-bold uppercase text-white truncate">
                        {proj.title}
                      </p>
                      <p className="text-xs text-steel-muted">{proj.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-steel-line bg-steel px-6 py-4">
          <Link
            to="/projects"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wide text-steel-muted transition-colors hover:text-white"
          >
            VIEW ALL PROJECTS
            <ExternalLink className="size-3.5" />
          </Link>

          <button
            type="button"
            onClick={handleGetQuote}
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
          >
            GET A QUOTE FOR THIS
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const featuredService = services[0]!; // 01 Industrial Shed
  const gridServices = services.slice(1); // 02 to 06

  return (
    <section id="services" className="content-auto bg-surface py-16 lg:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
          <div className="max-w-3xl">
            <p className="eyebrow flex items-center gap-3 text-primary">
              <span className="h-px w-10 bg-primary" />
              Structural Capabilities
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl text-foreground tracking-tight">
              ENGINEERED FOR INDUSTRY.
              <span className="block text-primary">BUILT TO LAST.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Complete industrial shed and steel fabrication solutions from requirement to fabrication and erection.
            </p>
          </div>

          <Link
            to="/quote"
            className="group hidden items-center gap-2 rounded-sm border border-border bg-background px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-foreground transition-all hover:border-primary hover:text-primary sm:inline-flex"
          >
            Request a Free Quotation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {/* ──────── EDITORIAL ASYMMETRICAL SERVICES LAYOUT ──────── */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          
          {/* 01. FEATURED PROMINENT CARD (Industrial Shed - Spans 7 Cols) */}
          <Reveal
            as="article"
            variant="left"
            onClick={() => setSelectedService(featuredService)}
            className="group relative cursor-pointer overflow-hidden rounded-sm border border-border bg-steel-deep text-steel-foreground shadow-card transition-all duration-300 hover:border-primary hover:shadow-elevated lg:col-span-7 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
              <img
                src={featuredService.image}
                alt={featuredService.alt}
                loading="lazy"
                decoding="async"
                width={1280}
                height={720}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-deep via-steel-deep/40 to-transparent" />
              
              {/* Service Number Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-white bg-black/70 px-2.5 py-1 rounded-xs border border-white/15 backdrop-blur-md">
                  {featuredService.code}
                </span>
                <span className="eyebrow rounded-xs bg-primary px-2.5 py-1 text-[0.65rem] font-extrabold text-primary-foreground uppercase tracking-wider">
                  FLAGSHIP SERVICE
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white group-hover:text-primary transition-colors">
                  {featuredService.label}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-steel-muted">
                  {featuredService.body}
                </p>

                {/* Applications list */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {featuredService.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="rounded-xs border border-steel-line bg-steel/80 px-2.5 py-1 text-xs text-steel-foreground"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-steel-line flex items-center justify-between">
                <span className="font-mono text-xs text-primary font-bold">
                  {featuredService.specifications}
                </span>
                <span className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase text-white group-hover:text-primary transition-colors">
                  VIEW FULL SPECS
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                </span>
              </div>
            </div>
          </Reveal>

          {/* 02 & 03 SERVICES (Spans 5 Cols on Desktop) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:col-span-5">
            {gridServices.slice(0, 2).map((service, i) => (
              <Reveal
                as="article"
                key={service.id}
                delay={i * 80}
                onClick={() => setSelectedService(service)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-border bg-card shadow-card transition-all duration-300 hover:border-primary hover:shadow-elevated flex flex-col sm:flex-row lg:flex-row"
              >
                <div className="relative aspect-[16/10] sm:aspect-square sm:w-44 lg:w-48 shrink-0 overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:hidden" />
                  <span className="font-mono absolute top-3 left-3 text-xs font-bold text-white bg-black/75 px-2 py-0.5 rounded-xs border border-white/20">
                    {service.code}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-foreground group-hover:text-primary transition-colors">
                      {service.label}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {service.body}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                    <span className="eyebrow text-[0.65rem] text-muted-foreground">
                      {service.short}
                    </span>
                    <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 04, 05, 06 SERVICES (Bottom 3 Columns Row) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-12">
            {gridServices.slice(2).map((service, i) => (
              <Reveal
                as="article"
                key={service.id}
                delay={i * 80}
                onClick={() => setSelectedService(service)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-border bg-card shadow-card transition-all duration-300 hover:border-primary hover:shadow-elevated flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="font-mono absolute top-3 left-3 text-xs font-bold text-white bg-black/75 px-2 py-0.5 rounded-xs border border-white/20">
                    {service.code}
                  </span>
                  <span className="eyebrow absolute bottom-3 left-3 text-[0.65rem] text-white/90 font-medium">
                    {service.short}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-foreground group-hover:text-primary transition-colors">
                      {service.label}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {service.body}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                    <span className="font-display text-xs font-semibold uppercase text-primary">
                      Learn More
                    </span>
                    <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>

      {/* SERVICE DETAIL MODAL */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
