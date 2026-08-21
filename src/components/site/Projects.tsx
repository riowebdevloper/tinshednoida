import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, MessageCircle, Ruler, X } from "lucide-react";
import { company, projectCategories, projects, type ProjectCategory } from "@/lib/site-data";

type Project = (typeof projects)[number];

export function Projects({ showFilters = true }: { showFilters?: boolean }) {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Completed Projects") return p.completedProject;
    if (filter === "Under Construction") return !p.completedProject;
    if (filter === "Industrial Shed")
      return (
        (p.category as string) === "Industrial" || (p.category as string) === "Industrial Shed"
      );
    if (filter === "Warehouse") return (p.category as string) === "Warehouse";
    if (filter === "MS Structure") return (p.category as string) === "MS Structure";
    if (filter === "Tin Roofing")
      return (
        (p.category as string) === "Roofing" ||
        (p.category as string) === "Tin Shed" ||
        (p.category as string) === "Tin Roofing"
      );
    if (filter === "PEB Structure")
      return (p.category as string) === "PEB" || (p.category as string) === "PEB Structure";
    return (p.category as string) === filter;
  });

  function handleOpenProject(project: Project) {
    const idx = visible.findIndex((p) => p.id === project.id);
    setOpenIndex(idx >= 0 ? idx : 0);
  }

  function handleNextProject() {
    if (openIndex !== null && visible.length > 0) {
      setOpenIndex((openIndex + 1) % visible.length);
    }
  }

  function handlePrevProject() {
    if (openIndex !== null && visible.length > 0) {
      setOpenIndex((openIndex - 1 + visible.length) % visible.length);
    }
  }

  const openProject = openIndex !== null && visible[openIndex] ? visible[openIndex] : null;

  return (
    <section id="projects" className="bg-background py-16 lg:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                AUTHENTIC PROJECT PORTFOLIO
              </span>
              <span className="text-muted-foreground font-mono text-xs">/ Real Site Erection</span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold uppercase leading-tight tracking-tight text-foreground">
              SELECTED PROJECT LEDGER
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Real structural fabrication and on-site crane erection projects executed across Noida, Greater Noida, and industrial hubs across India.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xs bg-primary px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-xs transition-transform hover:-translate-y-px"
          >
            <span>View All Projects</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Filter Categories */}
        {showFilters && (
          <div className="no-scrollbar mt-8 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setFilter(category);
                  setOpenIndex(null);
                }}
                aria-pressed={filter === category}
                className={`shrink-0 rounded-xs border px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Photographic Grid */}
        <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visible.slice(0, 9).map((project, i) => {
            const isFeatured = i === 0;

            return (
              <article
                key={project.id}
                onClick={() => handleOpenProject(project)}
                className={`group relative overflow-hidden rounded-xs border border-border bg-steel-deep text-steel-foreground cursor-pointer shadow-card transition-all duration-300 hover:border-primary ${
                  isFeatured ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-[0.68rem] font-bold bg-black/80 text-white px-2.5 py-1 rounded-xs border border-white/20 backdrop-blur-xs">
                    {project.category}
                  </span>
                  <span className="font-mono text-[0.68rem] text-emerald-400 bg-black/80 px-2 py-0.5 rounded-xs border border-white/10 flex items-center gap-1">
                    <MapPin className="size-3" />
                    {project.location}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6">
                  <h3 className={`font-display font-extrabold uppercase leading-tight text-white group-hover:text-primary transition-colors ${
                    isFeatured ? "text-xl sm:text-3xl" : "text-base sm:text-lg"
                  }`}>
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-steel-muted line-clamp-2 max-w-xl">
                    {project.summary}
                  </p>
                  <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-2.5">
                    <span className="font-mono text-[0.68rem] text-primary truncate max-w-[200px]">
                      {project.material}
                    </span>
                    <span className="font-display text-[0.7rem] font-bold uppercase text-white flex items-center gap-1 group-hover:text-primary">
                      Inspect Specs
                      <ArrowRight className="size-3" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            Have custom site drawings or architectural plans? Send them for an instant structural steel analysis.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-xs bg-primary px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground"
          >
            Submit Site Drawings
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

      </div>

      {/* Project Lightbox & Spec Modal */}
      {openProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={openProject.title}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/85 p-0 backdrop-blur-md sm:items-center sm:p-6 animate-in fade-in duration-200"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-lg bg-steel-deep text-steel-foreground shadow-2xl sm:rounded-xs border border-steel-line"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative">
              <img
                src={openProject.image}
                alt={openProject.alt}
                className="aspect-16/10 w-full object-cover max-h-[50vh]"
              />

              {/* Controls */}
              <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                <span className="rounded-xs bg-black/85 px-3 py-1 font-mono text-xs font-bold text-white border border-white/20 backdrop-blur-md">
                  {(openIndex ?? 0) + 1} / {visible.length}
                </span>
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  aria-label="Close project modal"
                  className="size-9 rounded-xs bg-black/85 text-white flex items-center justify-center border border-white/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <X className="size-4.5" />
                </button>
              </div>

              <div className="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none">
                <button
                  type="button"
                  onClick={handlePrevProject}
                  aria-label="Previous"
                  className="pointer-events-auto size-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-primary transition-colors border border-white/20"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextProject}
                  aria-label="Next"
                  className="pointer-events-auto size-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-primary transition-colors border border-white/20"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>

            {/* Spec Sheet Body */}
            <div className="grid gap-6 p-6 sm:grid-cols-[1.2fr_1fr] sm:p-8">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  {openProject.category}
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                  {openProject.title}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-steel-muted">
                  <MapPin className="size-3.5 text-primary" />
                  {openProject.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-steel-muted">
                  {openProject.summary}
                </p>

                {openProject.scope && openProject.scope.length > 0 && (
                  <div className="mt-6 border-t border-steel-line/60 pt-4">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      Scope of Fabrication & Erection
                    </h4>
                    <ul className="mt-2.5 space-y-2">
                      {openProject.scope.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-steel-foreground">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6 border-t border-steel-line/60 pt-4">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                    Material Specification
                  </h4>
                  <p className="mt-1.5 font-mono text-xs text-primary">{openProject.material}</p>
                </div>
              </div>

              {/* Inquiry Action Box */}
              <div className="flex flex-col justify-between rounded-xs bg-steel p-6 border border-steel-line">
                <div>
                  <h4 className="font-display text-lg font-bold uppercase text-white">
                    Need a Similar Structure?
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-steel-muted">
                    Our engineering team provides physical site surveys and transparent structural drawings.
                  </p>
                </div>

                <div className="mt-6 space-y-2.5">
                  <Link
                    to="/quote"
                    onClick={() => setOpenIndex(null)}
                    className="flex w-full items-center justify-center gap-2 rounded-xs bg-primary py-3 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-transform hover:-translate-y-px"
                  >
                    Request Quotation
                    <ArrowRight className="size-3.5" />
                  </Link>

                  <a
                    href={`${company.whatsapp}?text=${encodeURIComponent(`Hi Tin Shade Noida, I am inquiring about the "${openProject.title}" (${openProject.location}) structure. Please share estimated rate per sq ft.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xs border border-steel-line bg-steel-deep py-3 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-whatsapp hover:text-whatsapp"
                  >
                    <MessageCircle className="size-4 text-whatsapp" />
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
