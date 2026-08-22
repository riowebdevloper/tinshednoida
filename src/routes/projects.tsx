import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { FinalCta } from "@/components/site/FinalCta";
import {
  projects,
  projectCategories,
  type ProjectCategory,
  type ProjectItem,
} from "@/lib/site-data";
import {
  ArrowRight,
  MapPin,
  X,
  Phone,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const title = "Industrial Steel Shed Projects Portfolio | Tin Shade Noida";
const description =
  "Browse completed and active industrial factory sheds, logistics warehouses, and heavy mild steel structural frameworks fabricated and erected across India.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="VERIFIED STRUCTURAL ARCHIVE"
        title="Project Portfolio &amp; Case Studies"
        description="Over 500 industrial manufacturing factory sheds, column-free logistics warehouses, and heavy mild steel structures delivered across India since 2010."
      />

      <section className="py-20 sm:py-32 bg-[#0B0D0F] text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-6 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeCategory === cat
                    ? "border-[#B08A4A] bg-[#B08A4A] text-[#0B0D0F] shadow-sm"
                    : "border-white/15 bg-[#14171A] text-[#8C9398] hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ──────── ASYMMETRICAL EDITORIAL PROJECT GRID ──────── */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 items-start">
            {filteredProjects.map((project, idx) => {
              // Asymmetrical span: alternate 8-col and 4-col
              const isLarge = idx % 3 === 0;
              const colSpan = isLarge ? "lg:col-span-8" : "lg:col-span-4";

              return (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`${colSpan} arch-card-dark overflow-hidden bg-[#14171A] border border-white/10 group cursor-pointer flex flex-col justify-between`}
                >
                  <div className={`relative overflow-hidden bg-[#0B0D0F] ${isLarge ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                    <img
                      src={project.image}
                      alt={project.alt || project.title}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="font-mono text-xs text-[#B08A4A] font-bold uppercase tracking-wider flex items-center gap-1">
                        <span>INSPECT SPECIFICATIONS</span>
                        <ArrowRight className="size-3" />
                      </span>
                    </div>

                    <div className="absolute top-3 left-3 bg-[#0B0D0F]/90 text-white font-mono text-[0.6875rem] font-bold px-2.5 py-1 tracking-wider uppercase border border-white/10">
                      {project.location}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="font-mono text-xs text-[#B08A4A] font-bold uppercase block mb-1">
                        {project.category}
                      </span>
                      <h3 className="font-editorial-title text-lg sm:text-xl font-bold text-white uppercase leading-tight group-hover:text-[#B08A4A] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#8C9398] line-clamp-2 font-sans">
                        {project.summary}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                      <span className="text-[#8C9398]">{project.material}</span>
                      <span className="font-bold text-[#B08A4A] group-hover:underline flex items-center gap-1">
                        <span>Inspect &rarr;</span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* ──────── PROJECT SPECIFICATION MODAL DRAWER ──────── */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0B0D0F] text-white border border-white/20 shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs text-[#B08A4A] font-bold uppercase block">
                  {selectedProject.category} · CASE STUDY
                </span>
                <h3 className="font-editorial-title text-xl sm:text-2xl font-bold uppercase text-white mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1.5 border border-white/20 hover:bg-white/10 text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="relative aspect-video overflow-hidden bg-black border border-white/10">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="size-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-[#C8CCD0] font-sans leading-relaxed">
                {selectedProject.summary}
              </p>

              <div className="border-t border-b border-white/10 py-4 grid grid-cols-2 gap-4 font-mono text-xs text-[#8C9398]">
                <div>
                  <span className="block text-[0.6875rem] uppercase text-[#8C9398]">LOCATION</span>
                  <strong className="text-white text-sm mt-0.5 block">{selectedProject.location}</strong>
                </div>
                <div>
                  <span className="block text-[0.6875rem] uppercase text-[#8C9398]">MATERIALS</span>
                  <strong className="text-white text-sm mt-0.5 block">{selectedProject.material}</strong>
                </div>
              </div>

              {selectedProject.scope && (
                <div>
                  <span className="font-mono text-xs text-[#B08A4A] font-bold uppercase block mb-2">
                    WORK EXECUTED:
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs text-[#C8CCD0]">
                    {selectedProject.scope.map((s: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="size-1.5 rounded-full bg-[#B08A4A] mt-1.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/quote"
                className="btn-arch-primary text-xs"
              >
                <span>Request Similar Project Quote</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="tel:+918527977714"
                className="btn-arch-secondary text-xs"
              >
                <Phone className="size-3.5 text-[#B08A4A]" />
                <span>Call Yard: +91 85279 77714</span>
              </a>
            </div>

          </div>
        </div>
      )}

      <FinalCta />
    </SiteLayout>
  );
}
