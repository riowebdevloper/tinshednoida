import { useState } from "react";
import { ArrowRight, CheckCircle, ExternalLink, Play, Shield, Wrench, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects, reels, services, type VideoItem } from "@/lib/site-data";
import { needIcons } from "./needIcons";
import { triggerQuoteForNeed } from "./QuoteWizard";
import { Reveal } from "./Reveal";

type ServiceItem = (typeof services)[number];

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectVideo: (video: VideoItem) => void;
}

function ServiceDetailModal({ service, onClose, onSelectVideo }: ServiceDetailModalProps) {
  if (!service) return null;

  const Icon = needIcons[service.icon] ?? needIcons["factory"]!;
  const relatedProjects = projects.filter(
    (p) =>
      p.category.toLowerCase().includes(service.id) ||
      p.title.toLowerCase().includes(service.label.toLowerCase()),
  );
  const relatedVideos = reels.filter(
    (r) => r.serviceId === service.id || r.label.toLowerCase().includes(service.id),
  );

  function handleGetQuote() {
    onClose();
    triggerQuoteForNeed(service!.quoteOptionNeed);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-sm border border-steel-line bg-steel-deep text-steel-foreground shadow-elevated"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-steel-line bg-steel px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="eyebrow rounded-sm bg-primary/20 px-2.5 py-1 text-xs font-semibold text-primary">
              {service.code}
            </span>
            <div className="flex items-center gap-2">
              <Icon className="size-6 text-primary" />
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white">
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
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Showcase Image & Description */}
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="relative aspect-16/10 overflow-hidden rounded-sm border border-steel-line bg-card shadow-card">
              <img src={service.image} alt={service.alt} className="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-deep/80 via-transparent to-transparent" />
              <span className="eyebrow absolute bottom-3 left-3 rounded-sm bg-black/60 px-2.5 py-1 text-xs text-white backdrop-blur-xs">
                {service.short}
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-base leading-relaxed text-steel-muted">"{service.body}"</p>

              <div className="rounded-sm border border-steel-line bg-steel/60 p-4">
                <p className="eyebrow text-xs text-primary font-semibold flex items-center gap-1.5">
                  <Shield className="size-3.5" /> Technical Specifications
                </p>
                <p className="mt-1 text-xs font-mono text-steel-foreground">
                  {service.specifications}
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits & Features */}
          <div className="border-t border-steel-line/60 pt-6">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <CheckCircle className="size-5 text-primary" /> Key Structural Advantages
            </h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="rounded-sm border border-steel-line bg-steel/40 p-3.5 text-xs text-steel-foreground"
                >
                  <span className="block font-bold text-primary mb-1">0{idx + 1}. Feature</span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Typical Applications */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-steel-muted">
              Typical Applications
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {service.useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="rounded-sm border border-steel-line bg-steel/80 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-wide text-white"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          {/* LINKED ACTION VIDEOS FOR THIS SERVICE */}
          {relatedVideos.length > 0 && (
            <div className="border-t border-steel-line/60 pt-6">
              <div className="flex items-center justify-between">
                <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Play className="size-5 text-primary" /> Linked Project Action Videos (
                  {relatedVideos.length})
                </h4>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {relatedVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => {
                      onClose();
                      onSelectVideo(video);
                    }}
                    className="group relative aspect-16/10 cursor-pointer overflow-hidden rounded-sm border border-steel-line bg-steel-deep shadow-card transition-all hover:border-primary"
                  >
                    <img
                      src={video.image}
                      alt={video.label}
                      className="size-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex size-9 items-center justify-center rounded-full bg-primary/80 text-white backdrop-blur-xs transition-transform group-hover:scale-110">
                        <Play className="size-4 ml-0.5" />
                      </span>
                    </div>
                    <span className="absolute bottom-2 left-2 right-2 truncate font-display text-xs font-bold uppercase text-white">
                      {video.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RELATED PROJECTS */}
          {relatedProjects.length > 0 && (
            <div className="border-t border-steel-line/60 pt-6">
              <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Wrench className="size-5 text-amber-400" /> Recent Delivered Projects
              </h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedProjects.slice(0, 2).map((proj) => (
                  <div
                    key={proj.id}
                    className="flex items-center gap-3 rounded-sm border border-steel-line bg-steel/50 p-3"
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
            VIEW RELATED PROJECTS
            <ExternalLink className="size-3.5" />
          </Link>

          <button
            type="button"
            onClick={handleGetQuote}
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
          >
            GET A QUOTE FOR {service.label}
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filteredServices =
    activeFilter === "ALL"
      ? services
      : services.filter(
          (s) => s.id === activeFilter || s.label.toUpperCase().includes(activeFilter),
        );

  return (
    <section id="services" className="content-auto bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow flex items-center gap-3 text-primary">
              <span className="h-px w-10 bg-primary" />
              What we build
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
              Capabilities & Services
            </h2>
            <p className="mt-3 max-w-lg text-base text-muted-foreground">
              Six core structure types — click any service to view full specifications, related
              project videos, and request a direct estimate.
            </p>
          </div>

          <a
            href="#quote"
            className="group hidden items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-primary sm:inline-flex"
          >
            Request a quotation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        {/* INTERACTIVE SERVICE FILTER TABS */}
        <Reveal
          variant="up"
          delay={100}
          className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4"
        >
          <button
            type="button"
            onClick={() => setActiveFilter("ALL")}
            className={`rounded-sm px-4 py-2 font-display text-xs font-bold uppercase tracking-wider transition-colors ${
              activeFilter === "ALL"
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            ALL SERVICES ({services.length})
          </button>
          {services.map((svc) => (
            <button
              key={svc.id}
              type="button"
              onClick={() => setActiveFilter(svc.id)}
              className={`rounded-sm px-4 py-2 font-display text-xs font-bold uppercase tracking-wider transition-colors ${
                activeFilter === svc.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {svc.label}
            </button>
          ))}
        </Reveal>

        {/* SERVICE CARDS GRID */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, i) => {
            const Icon = needIcons[service.icon] ?? needIcons["factory"]!;
            return (
              <Reveal
                as="article"
                key={service.id}
                delay={i * 60}
                onClick={() => setSelectedService(service)}
                className="group relative cursor-pointer overflow-hidden rounded-sm bg-card shadow-card border border-border transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-elevated"
              >
                <div className="relative aspect-16/11 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={960}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.16_0.035_260/0.95),transparent_60%)]"
                    aria-hidden
                  />
                  <span className="eyebrow absolute left-4 top-4 rounded-sm bg-steel-deep/80 px-2.5 py-1 text-[0.6rem] font-bold text-white backdrop-blur-sm">
                    {service.code}
                  </span>
                  <Icon className="absolute bottom-4 left-4 size-7 text-primary transition-transform group-hover:scale-110" />

                  <span className="eyebrow absolute right-4 bottom-4 rounded-sm bg-primary/20 border border-primary/40 px-2.5 py-1 text-[0.65rem] text-primary backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
                    CLICK FOR DETAILS
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold uppercase text-foreground group-hover:text-primary transition-colors">
                    {service.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {service.body}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {service.useCases.slice(0, 3).map((useCase) => (
                      <li
                        key={useCase}
                        className="rounded-sm bg-muted px-2 py-1 text-xs text-muted-foreground"
                      >
                        {useCase}
                      </li>
                    ))}
                    {service.useCases.length > 3 && (
                      <li className="rounded-sm bg-muted px-2 py-1 text-xs font-semibold text-primary">
                        +{service.useCases.length - 3} more
                      </li>
                    )}
                  </ul>

                  <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerQuoteForNeed(service.quoteOptionNeed);
                      }}
                      className="font-display text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                    >
                      GET QUOTE →
                    </button>
                    <span className="inline-flex items-center gap-1 font-display text-xs font-semibold uppercase text-muted-foreground transition-colors group-hover:text-foreground">
                      Details & Videos
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* SERVICE DETAIL MODAL */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectVideo={(video) => {
          setSelectedService(null);
          // Smooth scroll to video section
          const videoSection = document.getElementById("videos");
          if (videoSection) {
            videoSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </section>
  );
}
