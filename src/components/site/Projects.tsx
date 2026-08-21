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
    <section id="projects" className="content-auto bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary" />
            Real work, real sites
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl">
            PROJECT PORTFOLIO
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Filter by structure type across Pan India sites. Open any project to inspect structural
            details and request a quotation.
          </p>
        </Reveal>

        {/* Filter categories */}
        <div className="no-scrollbar mt-8 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
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

        {featured ? (
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.25fr_1fr]">
            <ProjectCard project={featured} onOpen={() => handleOpenProject(featured)} large />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {rest.slice(0, 4).map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={() => handleOpenProject(project)}
                  delay={i * 70}
                />
              ))}
            </div>
          </div>
        ) : null}

        {rest.length > 4 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(4).map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => handleOpenProject(project)}
                delay={i * 70}
              />
            ))}
          </div>
        ) : null}
      </div>

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
      className={`group relative overflow-hidden rounded-sm bg-steel-deep ${large ? "min-h-[20rem] lg:min-h-[32rem]" : "min-h-[14rem]"}`}
    >
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        width={1280}
        height={960}
        className="absolute inset-0 size-full object-cover opacity-90 transition-transform duration-[900ms] group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.16_0.035_260/0.94),oklch(0.16_0.035_260/0.15)_65%)]"
        aria-hidden
      />
      <button
        type="button"
        onClick={onOpen}
        className="absolute inset-0 flex flex-col justify-end p-5 text-left sm:p-6"
        aria-label={`View project ${project.title}`}
      >
        <span className="eyebrow w-fit rounded-sm bg-primary px-2 py-1 text-[0.6rem] text-primary-foreground">
          {project.category}
        </span>
        <h3
          className={`mt-3 font-display font-bold uppercase leading-tight text-steel-foreground ${large ? "text-2xl sm:text-4xl" : "text-lg"}`}
        >
          {project.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-steel-muted">
          <MapPin className="size-3.5" />
          {project.location}
        </p>
        {large ? (
          <p className="mt-3 max-w-md text-sm leading-relaxed text-steel-muted">
            {project.summary}
          </p>
        ) : null}
        <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wide text-primary">
          View project
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
      className="fixed inset-0 z-[60] flex items-end justify-center bg-steel-deep/85 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-lg bg-card shadow-elevated sm:rounded-sm border border-border"
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

          {/* Top Bar on Image */}
          <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none">
            <span className="pointer-events-auto rounded-sm bg-black/70 px-3 py-1 font-mono text-xs text-white backdrop-blur-md">
              {currentIndex + 1} / {totalCount}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project"
              className="pointer-events-auto inline-flex size-10 items-center justify-center rounded-sm bg-background/90 text-foreground backdrop-blur hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Left/Right controls */}
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous project"
              className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur hover:bg-primary transition-colors"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next project"
              className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur hover:bg-primary transition-colors"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-[1.2fr_1fr] sm:p-8">
          <div>
            <span className="eyebrow rounded-sm bg-primary-soft px-2.5 py-1 text-primary font-semibold">
              {project.category}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold uppercase text-foreground sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {project.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

            <h4 className="eyebrow mt-6 text-foreground">Work completed</h4>
            <ul className="mt-2 grid gap-1.5">
              {project.scope.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <h4 className="eyebrow mt-6 text-foreground">Material & structure</h4>
            <p className="mt-2 text-sm text-muted-foreground">{project.material}</p>
          </div>

          <div className="flex flex-col justify-end gap-3 rounded-sm bg-surface p-5 border border-border/60">
            <p className="font-display text-lg font-semibold uppercase leading-tight text-foreground">
              Want something like this?
            </p>
            <p className="text-sm text-muted-foreground">
              Send your site details — our team will provide a free measurement and itemized written
              quote.
            </p>
            <Link
              to="/quote"
              onClick={onClose}
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-sm transition-all hover:opacity-95"
            >
              Get quote for this structure
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`${company.whatsapp}?text=${encodeURIComponent(`Hi Tin Shade Noida, I am inquiring about the "${project.title}" project in ${project.location}. Please share pricing details.`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-whatsapp hover:text-whatsapp"
            >
              <MessageCircle className="size-4 text-whatsapp" />
              Discuss on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
