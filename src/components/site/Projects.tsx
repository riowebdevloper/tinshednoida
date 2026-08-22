import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, Eye, Filter, MapPin, Ruler, X, HardHat } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { projectCategories, projects } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function Projects() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null);
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = selectedCat === "All" || p.category === selectedCat;
      const matchStatus = selectedStatus === "All" || p.status === selectedStatus;
      return matchCat && matchStatus;
    });
  }, [selectedCat, selectedStatus]);

  const triggerQuoteForProject = (project: (typeof projects)[0]) => {
    sessionStorage.setItem("tsn_selected_need", project.title);
    navigate({ to: "/quote" });
  };

  return (
    <section id="projects" className="bg-paper py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── SECTION HEADER: MINIMAL CHROME, LET WORK SPEAK ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/15 pb-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold text-oxide uppercase tracking-wider block mb-1">
              STRUCTURAL PORTFOLIO · 500+ COMPLETED SHEDS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight">
              Executed Industrial Projects
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed font-sans">
              Authentic on-site construction and completed facilities across Noida, Greater Noida, Ghaziabad, and nationwide industrial hubs.
            </p>
          </div>

          <Link
            to="/projects"
            className="btn-secondary self-start md:self-auto"
          >
            <span>View Full Project Archive</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        {/* ──────── CATEGORY FILTERS ──────── */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-border pb-6">
          <div className="flex flex-wrap items-center gap-1.5">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`rounded-xs px-3.5 py-1.5 font-mono text-xs transition-all ${
                  selectedCat === cat
                    ? "border border-charcoal bg-charcoal text-paper font-bold shadow-xs"
                    : "border border-border bg-card text-charcoal hover:border-charcoal/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ──────── PROJECT GRID WITH TECHNICAL DATA OVERLAYS ──────── */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 6).map((project) => {
            return (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-xs border border-border bg-card transition-all hover:border-charcoal hover:shadow-elevated flex flex-col justify-between"
              >
                {/* Image Container with Structural Aspect Ratio */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark gradient base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-black/30" />

                  {/* Top Technical Metadata Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-white bg-charcoal/90 px-2.5 py-1 rounded-xs border border-white/20">
                      {project.coveredArea}
                    </span>
                    <span className="font-mono text-xs text-safety bg-charcoal/90 px-2 py-1 rounded-xs border border-white/20 flex items-center gap-1">
                      <MapPin className="size-3" aria-hidden="true" />
                      {project.location}
                    </span>
                  </div>

                  {/* Hover Inspect Prompt */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal/40 backdrop-blur-2xs">
                    <span className="inline-flex items-center gap-1.5 rounded-xs bg-safety px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-charcoal shadow-md">
                      <Eye className="size-3.5" />
                      Inspect Structural Spec
                    </span>
                  </div>
                </div>

                {/* Bottom Caption Ledger */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-muted-foreground mb-1.5">
                      <span>{project.category}</span>
                      <span className="text-oxide font-bold">{project.completionYear}</span>
                    </div>

                    <h3
                      className="font-display font-bold text-lg sm:text-xl text-charcoal group-hover:text-oxide transition-colors cursor-pointer"
                      onClick={() => setActiveProject(project)}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2 font-sans">
                      {project.summary}
                    </p>
                  </div>

                  {/* Material Spec Line */}
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between gap-2 font-mono text-xs">
                    <span className="text-charcoal truncate" title={project.material}>
                      {project.material}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="text-oxide font-bold hover:underline shrink-0 flex items-center gap-1"
                    >
                      <span>Details</span>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-xs"
            onClick={() => setActiveProject(null)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm border border-charcoal bg-paper p-6 sm:p-8 shadow-elevated text-charcoal">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-border pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-oxide uppercase tracking-wider">
                  PROJECT SPECIFICATION ARCHIVE · {activeProject.location}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-xs border border-border bg-surface p-1.5 text-charcoal hover:bg-charcoal hover:text-paper"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="mt-5 space-y-5">
              <div className="aspect-[16/9] overflow-hidden rounded-xs bg-charcoal border border-border">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="size-full object-cover"
                />
              </div>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="rounded-xs border border-border bg-surface p-3">
                  <span className="text-muted-foreground block">Covered Area</span>
                  <span className="font-bold text-charcoal text-sm mt-0.5 block">{activeProject.coveredArea}</span>
                </div>
                <div className="rounded-xs border border-border bg-surface p-3">
                  <span className="text-muted-foreground block">Structural Span</span>
                  <span className="font-bold text-charcoal text-sm mt-0.5 block">{activeProject.clearSpan}</span>
                </div>
                <div className="rounded-xs border border-border bg-surface p-3">
                  <span className="text-muted-foreground block">Eaves Height</span>
                  <span className="font-bold text-charcoal text-sm mt-0.5 block">{activeProject.eavesHeight}</span>
                </div>
                <div className="rounded-xs border border-border bg-surface p-3">
                  <span className="text-muted-foreground block">Execution Time</span>
                  <span className="font-bold text-charcoal text-sm mt-0.5 block">{activeProject.duration}</span>
                </div>
              </div>

              <div>
                <h4 className="font-display text-sm font-bold uppercase text-charcoal">
                  Scope &amp; Engineering Details
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {activeProject.summary}
                </p>
              </div>

              {/* Steel Grades and Standards */}
              <div className="rounded-xs border border-charcoal/20 bg-card p-4 font-mono text-xs">
                <p className="font-bold text-charcoal uppercase mb-1">
                  Material &amp; Fabrication Standards
                </p>
                <p className="text-charcoal/90">
                  {activeProject.material} · Grade IS 2062 Prime Mild Steel · Dual-Coat Red Oxide Zinc Phosphate Primer (IS 2074)
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-5 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href={`https://wa.me/918527977714?text=Hello%20Tin%20Shade%20Noida%2C%20I%20saw%20your%20project%20${encodeURIComponent(
                  activeProject.title
                )}%20and%20want%20a%20similar%20estimate.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xs bg-whatsapp px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-white"
              >
                <span>Inquire on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  const proj = activeProject;
                  setActiveProject(null);
                  triggerQuoteForProject(proj);
                }}
                className="btn-primary"
              >
                <span>Request Similar Project Quote &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <TrussDivider type="warren" className="mt-16" />
    </section>
  );
}
