import { useMemo, useState } from "react";
import { ArrowRight, Eye, MapPin, X } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { projectCategories, projects } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function Projects() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null);
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      return selectedCat === "All" || p.category === selectedCat;
    });
  }, [selectedCat]);

  const triggerQuoteForProject = (project: (typeof projects)[0]) => {
    sessionStorage.setItem("tsn_selected_need", project.title);
    navigate({ to: "/quote" });
  };

  return (
    <section id="projects" className="bg-paper py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── SECTION HEADER: MINIMAL CHROME, PHOTO-LED ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/15 pb-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
              Executed Projects &amp; On-Site Installations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
              Photographic records of 500+ completed factory sheds, logistics warehouses, and steel structures across Noida, Greater Noida, and Pan India.
            </p>
          </div>

          <Link
            to="/projects"
            className="btn-secondary self-start md:self-auto shrink-0"
          >
            <span>View Full Archive</span>
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* ──────── CATEGORY FILTERS ──────── */}
        <div className="mt-6 flex flex-wrap items-center gap-1.5 border-b border-border pb-5">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`rounded-xs px-3 py-1 font-mono text-xs transition-all ${
                selectedCat === cat
                  ? "border border-charcoal bg-charcoal text-paper font-semibold shadow-xs"
                  : "border border-border bg-card text-charcoal hover:border-charcoal/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ──────── PROJECT GRID WITH TECHNICAL DATA OVERLAYS ──────── */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 6).map((project) => {
            return (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-xs border border-border bg-card transition-colors hover:border-charcoal flex flex-col justify-between"
              >
                {/* Image Container */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark gradient base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-black/30" />

                  {/* Top Technical Metadata in IBM Plex Mono Tabular Nums */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-white bg-charcoal/90 px-2 py-0.5 rounded-xs border border-white/20 tabular-nums">
                      {project.coveredArea}
                    </span>
                    <span className="font-mono text-xs text-safety bg-charcoal/90 px-2 py-0.5 rounded-xs border border-white/20 flex items-center gap-1">
                      <MapPin className="size-3" aria-hidden="true" />
                      {project.location}
                    </span>
                  </div>

                  {/* Hover Inspect Prompt */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal/40">
                    <span className="inline-flex items-center gap-1.5 rounded-xs bg-safety px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-charcoal">
                      <Eye className="size-3.5" />
                      Inspect Spec
                    </span>
                  </div>
                </div>

                {/* Bottom Caption Ledger */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-muted-foreground mb-1">
                      <span>{project.category}</span>
                      <span className="text-oxide font-semibold tabular-nums">{project.completionYear}</span>
                    </div>

                    <h3
                      className="font-display font-bold text-lg text-charcoal group-hover:text-oxide transition-colors cursor-pointer"
                      onClick={() => setActiveProject(project)}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2 font-sans">
                      {project.summary}
                    </p>
                  </div>

                  {/* Material Spec Line */}
                  <div className="mt-3.5 pt-3 border-t border-border flex items-center justify-between gap-2 font-mono text-xs">
                    <span className="text-charcoal truncate" title={project.material}>
                      {project.material}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="text-oxide font-semibold hover:underline shrink-0 flex items-center gap-1"
                    >
                      <span>Spec</span>
                      <ArrowRight className="size-3" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* ──────── PROJECT SPECIFICATION MODAL ──────── */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
          <div
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-xs"
            onClick={() => setActiveProject(null)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xs border border-charcoal bg-paper p-6 sm:p-8 text-charcoal shadow-lg">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-border pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-oxide uppercase">
                  PROJECT SPECIFICATION · {activeProject.location}
                </span>
                <h3 className="font-display text-2xl font-bold text-charcoal mt-0.5">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-xs border border-border bg-surface p-1 text-charcoal hover:bg-charcoal hover:text-paper"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="mt-5 space-y-4">
              <div className="aspect-[16/9] overflow-hidden rounded-xs bg-charcoal border border-border">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="size-full object-cover"
                />
              </div>

              {/* Technical Specifications Matrix in IBM Plex Mono Tabular Nums */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="rounded-xs border border-border bg-surface p-2.5">
                  <span className="text-muted-foreground block text-[0.6875rem]">Covered Area</span>
                  <span className="font-bold text-charcoal text-sm mt-0.5 block tabular-nums">{activeProject.coveredArea}</span>
                </div>
                <div className="rounded-xs border border-border bg-surface p-2.5">
                  <span className="text-muted-foreground block text-[0.6875rem]">Clear Span</span>
                  <span className="font-bold text-charcoal text-sm mt-0.5 block tabular-nums">{activeProject.clearSpan}</span>
                </div>
                <div className="rounded-xs border border-border bg-surface p-2.5">
                  <span className="text-muted-foreground block text-[0.6875rem]">Eaves Height</span>
                  <span className="font-bold text-charcoal text-sm mt-0.5 block tabular-nums">{activeProject.eavesHeight}</span>
                </div>
                <div className="rounded-xs border border-border bg-surface p-2.5">
                  <span className="text-muted-foreground block text-[0.6875rem]">Timeline</span>
                  <span className="font-bold text-charcoal text-sm mt-0.5 block tabular-nums">{activeProject.duration}</span>
                </div>
              </div>

              <div>
                <h4 className="font-display text-sm font-bold uppercase text-charcoal">
                  Scope &amp; Engineering Details
                </h4>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground font-sans">
                  {activeProject.summary}
                </p>
              </div>

              <div className="rounded-xs border border-charcoal/20 bg-card p-3.5 font-mono text-xs">
                <p className="font-bold text-charcoal uppercase mb-1">
                  Material &amp; Fabrication Standards
                </p>
                <p className="text-charcoal/90">
                  {activeProject.material} · Grade IS 2062 Prime Mild Steel · Dual-Coat Red Oxide Zinc Phosphate Primer (IS 2074)
                </p>
              </div>
            </div>

            {/* Modal Action */}
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="btn-secondary text-xs"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const proj = activeProject;
                  setActiveProject(null);
                  triggerQuoteForProject(proj);
                }}
                className="btn-primary text-xs"
              >
                <span>Request Similar Project Quote &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <TrussDivider type="warren" className="mt-14" />
    </section>
  );
}
