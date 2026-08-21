import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, MessageCircle, X } from "lucide-react";
import { company, projectCategories, projects, type ProjectCategory } from "@/lib/site-data";
import { Reveal } from "./Reveal";

type Project = (typeof projects)[number];

export function Projects() {
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

  const featured = visible.find((p) => p.featured) ?? visible[0];
  const rest = visible.filter((p) => p.id !== featured?.id);

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
    <section id="projects" className="content-auto bg-background py-16 lg:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
          <div className="max-w-3xl">
            <p className="eyebrow flex items-center gap-3 text-primary">
              <span className="h-px w-10 bg-primary" />
              On-Site Execution
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl text-foreground tracking-tight">
              OUR WORK SPEAKS
              <span className="block text-primary">FOR ITSELF.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Real fabrication and erection work from our projects.
            </p>
          </div>

          <Link
            to="/projects"
            className="group hidden items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:scale-102 sm:inline-flex"
          >
            VIEW ALL PROJECTS
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {/* Filter categories */}
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
              className={`shrink-0 rounded-sm border px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide transition-all ${
                filter === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ──────── ASYMMETRICAL GALLERY ──────── */}
        {featured ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            {/* LARGE FEATURED PROJECT CARD (Spans 7 columns) */}
            <div className="lg:col-span-7">
              <ProjectCard project={featured} onOpen={() => handleOpenProject(featured)} large />
            </div>

            {/* 4 SUPPORTING CARDS (Spans 5 columns) */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:col-span-5">
              {rest.slice(0, 4).map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={() => handleOpenProject(project)}
                  delay={i * 60}
                />
              ))}
            </div>
          </div>
        ) : null}

        {/* Additional 3 Cards row if available */}
        {rest.length > 4 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(4, 7).map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => handleOpenProject(project)}
                delay={i * 60}
              />
            ))}
          </div>
        ) : null}

        {/* Mobile View All CTA */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-md"
          >
            VIEW ALL PROJECTS
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      {openProject ? (
        <ProjectModal
          project={openProject}
          currentIndex={openIndex ?? 0}
          totalCount={visible.length}
          onClose={() => setOpenIndex(null)}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      ) : null}
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
  large = false,
  delay = 0,
}: {
  project: Project;
  onOpen: () => void;
  large?: boolean;
  delay?: number;
}) {
  return (
    <Reveal
      as="article"
      delay={delay}
      variant="scale"
      className={`group relative overflow-hidden rounded-sm border border-border bg-steel-deep text-steel-foreground shadow-card transition-all duration-300 hover:border-primary hover:shadow-elevated ${
        large ? "min-h-[22rem] sm:min-h-[30rem] lg:min-h-[36rem]" : "min-h-[16rem] sm:min-h-[17rem]"
      }`}
    >
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        width={1280}
        height={960}
        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-steel-deep via-steel-deep/40 to-transparent"
        aria-hidden
      />
      <button
        type="button"
        onClick={onOpen}
        className="absolute inset-0 flex flex-col justify-end p-5 text-left sm:p-7"
        aria-label={`View project details for ${project.title}`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow rounded-xs bg-primary px-2.5 py-1 text-[0.65rem] font-bold text-primary-foreground uppercase">
            {project.category}
          </span>
          <span className="flex items-center gap-1 font-mono text-xs text-white/80 bg-black/60 px-2 py-0.5 rounded-xs backdrop-blur-xs">
            <MapPin className="size-3 text-primary" />
            {project.location}
          </span>
        </div>

        <h3
          className={`mt-2.5 font-display font-bold uppercase leading-tight text-white group-hover:text-primary transition-colors ${
            large ? "text-2xl sm:text-4xl" : "text-lg sm:text-xl"
          }`}
        >
          {project.title}
        </h3>

        {large && (
          <p className="mt-2.5 max-w-lg text-xs sm:text-sm text-steel-muted line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        )}

        {/* Work Completed pill list */}
        {project.scope && project.scope.length > 0 && (
          <div className="mt-3 hidden sm:flex flex-wrap gap-1.5">
            {project.scope.slice(0, large ? 4 : 2).map((item) => (
              <span
                key={item}
                className="rounded-xs border border-steel-line bg-steel/80 px-2 py-0.5 text-[0.68rem] text-steel-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-primary group-hover:underline">
          VIEW PROJECT SPECS
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
        </span>
      </button>
    </Reveal>
  );
}

function ProjectModal({
  project,
  currentIndex,
  totalCount,
  onClose,
  onNext,
  onPrev,
}: {
  project: Project;
  currentIndex: number;
  totalCount: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowLeft") onPrev();
      else if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/85 p-0 backdrop-blur-md sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-lg bg-card shadow-2xl sm:rounded-sm border border-border"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.alt}
            width={1280}
            height={960}
            className="aspect-16/10 w-full object-cover max-h-[50vh]"
          />

          {/* Top Bar */}
          <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none">
            <span className="pointer-events-auto rounded-xs bg-black/80 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur-md border border-white/20">
              {currentIndex + 1} / {totalCount}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project modal"
              className="pointer-events-auto inline-flex size-10 items-center justify-center rounded-xs bg-black/80 text-white backdrop-blur hover:bg-primary hover:text-primary-foreground transition-colors border border-white/20"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Left/Right controls */}
          <div className="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous project"
              className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur hover:bg-primary transition-colors border border-white/20"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next project"
              className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur hover:bg-primary transition-colors border border-white/20"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-[1.2fr_1fr] sm:p-8">
          <div>
            <span className="eyebrow rounded-xs bg-primary-soft px-2.5 py-1 text-primary font-bold">
              {project.category}
            </span>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold uppercase text-foreground">
              {project.title}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              {project.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

            <h4 className="eyebrow mt-6 text-foreground font-bold">Work completed</h4>
            <ul className="mt-2.5 grid gap-2">
              {project.scope.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <h4 className="eyebrow mt-6 text-foreground font-bold">Material & structure</h4>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-mono">{project.material}</p>
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-sm bg-surface p-6 border border-border">
            <div>
              <p className="font-display text-xl font-bold uppercase text-foreground">
                Inquire About This Structure
              </p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Send your site dimensions — our engineering team will provide a free site survey and transparent written quotation.
              </p>
            </div>
            
            <div className="grid gap-2.5">
              <Link
                to="/quote"
                onClick={onClose}
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-md transition-all hover:opacity-95"
              >
                Get Quote for this Project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`${company.whatsapp}?text=${encodeURIComponent(`Hi Tin Shade Noida, I am inquiring about the "${project.title}" (${project.location}) structure. Please share a quotation.`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-whatsapp hover:text-whatsapp"
              >
                <MessageCircle className="size-4 text-whatsapp" />
                Discuss on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
