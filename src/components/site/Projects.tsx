import { useMemo, useState } from "react";
import { ArrowRight, Eye, MapPin, X } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { projectCategories, projects, type ProjectItem } from "@/lib/site-data";

export function Projects() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      return selectedCat === "All" || p.category === selectedCat;
    });
  }, [selectedCat]);

  const triggerQuoteForProject = (project: ProjectItem) => {
    sessionStorage.setItem("tsn_selected_need", project.title);
    navigate({ to: "/quote" });
  };

  return (
    <section id="projects" className="bg-[#0A1128] text-white py-16 sm:py-24 border-b border-indigo-200/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── SECTION HEADER ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-indigo-200/15 pb-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold text-[#F59E0B] uppercase tracking-tight block mb-1">
              AUTHENTIC EXECUTION ARCHIVE
            </span>
            <h2 className="font-editorial-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase">
              Executed Projects &amp; On-Site Installations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#8E9CB8] leading-relaxed font-sans">
              Photographic records of 500+ completed factory sheds, logistics warehouses, and steel structures across Noida, Greater Noida, and Pan India.
            </p>
          </div>

          <Link
            to="/projects"
            className="btn-navy-outline self-start md:self-auto shrink-0 text-xs"
          >
            <span>View Full Archive</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        {/* ──────── CATEGORY FILTERS ──────── */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-indigo-200/15 pb-5">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-1.5 font-mono text-xs transition-all rounded-[2px] ${
                selectedCat === cat
                  ? "border border-[#F59E0B] bg-[#F59E0B] text-[#0A1128] font-bold shadow-md"
                  : "border border-indigo-200/20 bg-[#101B3B] text-[#8E9CB8] hover:text-white hover:border-indigo-200/40"
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
                className="group overflow-hidden flex flex-col justify-between bg-[#101B3B] border border-indigo-200/20 rounded-[3px] hover:border-[#F59E0B]/50 transition-all duration-300 shadow-xl"
              >
                {/* Image Container */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-black cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Top Technical Metadata */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-white bg-black/80 px-2.5 py-0.5 border border-indigo-200/30 tabular-nums rounded-[2px]">
                      {project.coveredArea ?? "15,000 sq ft"}
                    </span>
                    <span className="font-mono text-xs text-white bg-black/80 px-2.5 py-0.5 border border-indigo-200/30 flex items-center gap-1 rounded-[2px]">
                      <MapPin className="size-3 text-[#F59E0B]" aria-hidden="true" />
                      {project.location}
                    </span>
                  </div>

                  {/* Hover Inspection Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A1128] font-mono text-xs font-bold px-3 py-1.5 rounded-[2px]">
                      <Eye className="size-3.5" />
                      <span>INSPECT SPECIFICATIONS</span>
                    </span>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="font-mono text-[0.6875rem] text-[#F59E0B] uppercase tracking-wider font-bold mb-1">
                      {project.category}
                    </div>
                    <h3 className="font-editorial-title text-base sm:text-lg font-bold text-white uppercase line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#C7D2FE] font-sans line-clamp-2">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-indigo-200/15 flex items-center justify-between gap-2 font-mono text-xs">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="text-[#F59E0B] hover:text-white font-bold transition-colors uppercase text-[0.6875rem]"
                    >
                      Technical Sheet &rarr;
                    </button>
                    <button
                      type="button"
                      onClick={() => triggerQuoteForProject(project)}
                      className="btn-red-primary text-[0.625rem] py-1 px-2.5"
                    >
                      ESTIMATE
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ──────── TECHNICAL SPECIFICATION MODAL DRAWER ──────── */}
        {activeProject && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
            <div className="bg-[#101B3B] border border-indigo-200/30 max-w-2xl w-full rounded-[3px] overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-[#121F44] border-b border-indigo-200/20 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[0.6875rem] text-[#F59E0B] font-bold uppercase">
                    PROJECT TECHNICAL SPEC SHEET
                  </span>
                  <h3 className="font-editorial-title text-lg sm:text-xl font-bold text-white uppercase">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="p-1.5 text-[#8E9CB8] hover:text-white border border-indigo-200/20 rounded-[2px]"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5">
                <div className="relative aspect-video w-full overflow-hidden rounded-[2px] bg-black">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="size-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 font-mono text-xs bg-[#0A1128] p-4 border border-indigo-200/15 rounded-[2px]">
                  <div>
                    <span className="text-[#8E9CB8] block">LOCATION:</span>
                    <span className="text-white font-bold">{activeProject.location}</span>
                  </div>
                  <div>
                    <span className="text-[#8E9CB8] block">COVERED AREA:</span>
                    <span className="text-white font-bold">{activeProject.coveredArea ?? "15,000 SQ FT"}</span>
                  </div>
                  <div>
                    <span className="text-[#8E9CB8] block">STRUCTURAL STEEL:</span>
                    <span className="text-white font-bold">IS 2062 Built-up Frame</span>
                  </div>
                  <div>
                    <span className="text-[#8E9CB8] block">ROOF CLADDING:</span>
                    <span className="text-white font-bold">0.50mm AZ-150 Galvalume</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#C7D2FE] font-sans leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#121F44] border-t border-indigo-200/20 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="font-mono text-xs text-[#8E9CB8] hover:text-white"
                >
                  CLOSE
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const p = activeProject;
                    setActiveProject(null);
                    triggerQuoteForProject(p);
                  }}
                  className="btn-red-primary text-xs"
                >
                  <span>CALCULATE SIMILAR SHED BOQ</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
