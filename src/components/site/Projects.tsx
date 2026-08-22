import { useMemo, useState } from "react";
import { ArrowRight, Eye, MapPin, X, ShieldCheck } from "lucide-react";
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
    <section id="projects" className="bg-navy-obsidian py-16 sm:py-24 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── SECTION HEADER ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sky-400 mb-2">
              <span className="size-1.5 rounded-full bg-sky-400" />
              <span>AUTHENTIC EXECUTION ARCHIVE</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Executed Projects &amp; On-Site Installations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Photographic records of 500+ completed factory sheds, logistics warehouses, and steel structures across Noida, Greater Noida, and Pan India.
            </p>
          </div>

          <Link
            to="/projects"
            className="btn-navy-outline self-start md:self-auto shrink-0"
          >
            <span>View Full Archive</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        {/* ──────── CATEGORY FILTERS ──────── */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-white/10 pb-5">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`rounded-xs px-3.5 py-1.5 font-mono text-xs transition-all ${
                selectedCat === cat
                  ? "border border-sky-400 bg-sky-500/20 text-white font-semibold shadow-xs"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
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
                className="navy-card group overflow-hidden flex flex-col justify-between"
              >
                {/* Image Container */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-navy-deep cursor-pointer"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726] via-transparent to-black/40" />

                  {/* Top Technical Metadata in JetBrains Mono */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-white bg-slate-950/80 backdrop-blur-xs px-2.5 py-0.5 rounded-xs border border-white/20 tabular-nums">
                      {project.coveredArea}
                    </span>
                    <span className="font-mono text-xs text-amber-400 bg-slate-950/80 backdrop-blur-xs px-2.5 py-0.5 rounded-xs border border-white/20 flex items-center gap-1">
                      <MapPin className="size-3" aria-hidden="true" />
                      {project.location}
                    </span>
                  </div>

                  {/* Hover Inspect Prompt */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/50 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-xs bg-amber-400 px-3.5 py-1.5 font-display text-xs font-bold text-slate-950 shadow-lg">
                      <Eye className="size-3.5" />
                      Inspect Spec
                    </span>
                  </div>
                </div>

                {/* Bottom Caption Ledger */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-1.5">
                      <span>{project.category}</span>
                      <span className="text-amber-400 font-semibold tabular-nums">{project.completionYear}</span>
                    </div>

                    <h3
                      className="font-display font-bold text-lg text-white group-hover:text-amber-400 transition-colors cursor-pointer"
                      onClick={() => setActiveProject(project)}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-300 line-clamp-2 font-sans">
                      {project.summary}
                    </p>
                  </div>

                  {/* Material Spec Line */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2 font-mono text-xs">
                    <span className="text-slate-300 truncate" title={project.material}>
                      {project.material}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="text-sky-400 font-semibold hover:underline shrink-0 flex items-center gap-1"
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
            className="fixed inset-0 bg-[#060A14]/80 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xs border border-sky-400/30 bg-[#0E1726] p-6 sm:p-8 text-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-amber-400 uppercase">
                  PROJECT SPECIFICATION · {activeProject.location}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-xs border border-white/15 bg-white/5 p-1.5 text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="mt-5 space-y-4">
              <div className="aspect-[16/9] overflow-hidden rounded-xs bg-navy-deep border border-white/10">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="size-full object-cover"
                />
              </div>

              {/* Technical Specifications Matrix in JetBrains Mono */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="rounded-xs border border-white/10 bg-[#080D1A] p-3">
                  <span className="text-slate-400 block text-[0.6875rem]">Covered Area</span>
                  <span className="font-bold text-white text-sm mt-0.5 block tabular-nums">{activeProject.coveredArea}</span>
                </div>
                <div className="rounded-xs border border-white/10 bg-[#080D1A] p-3">
                  <span className="text-slate-400 block text-[0.6875rem]">Clear Span</span>
                  <span className="font-bold text-white text-sm mt-0.5 block tabular-nums">{activeProject.clearSpan}</span>
                </div>
                <div className="rounded-xs border border-white/10 bg-[#080D1A] p-3">
                  <span className="text-slate-400 block text-[0.6875rem]">Eaves Height</span>
                  <span className="font-bold text-white text-sm mt-0.5 block tabular-nums">{activeProject.eavesHeight}</span>
                </div>
                <div className="rounded-xs border border-white/10 bg-[#080D1A] p-3">
                  <span className="text-slate-400 block text-[0.6875rem]">Timeline</span>
                  <span className="font-bold text-white text-sm mt-0.5 block tabular-nums">{activeProject.duration}</span>
                </div>
              </div>

              <div>
                <h4 className="font-display text-sm font-bold uppercase text-white">
                  Scope &amp; Engineering Details
                </h4>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300 font-sans">
                  {activeProject.summary}
                </p>
              </div>

              <div className="rounded-xs border border-white/10 bg-[#080D1A] p-4 font-mono text-xs">
                <p className="font-bold text-amber-400 uppercase mb-1">
                  Material &amp; Fabrication Standards
                </p>
                <p className="text-slate-200">
                  {activeProject.material} · Grade IS 2062 Prime Mild Steel · Dual-Coat Red Oxide Zinc Phosphate Primer (IS 2074)
                </p>
              </div>
            </div>

            {/* Modal Action */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="btn-navy-outline text-xs"
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
                className="btn-elite text-xs"
              >
                <span>Request Similar Project Quote &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <TrussDivider dark type="warren" className="mt-14" />
    </section>
  );
}
