import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, MessageCircle, X } from "lucide-react";
import { company, projects } from "@/lib/site-data";

type Project = (typeof projects)[number];

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Show first 8 on homepage
  const visible = projects.slice(0, 8);

  function handleNextProject() {
    if (openIndex !== null) setOpenIndex((openIndex + 1) % visible.length);
  }
  function handlePrevProject() {
    if (openIndex !== null) setOpenIndex((openIndex - 1 + visible.length) % visible.length);
  }

  const openProject = openIndex !== null ? visible[openIndex] ?? null : null;

  return (
    <section id="projects" className="bg-background py-16 lg:py-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Small section label */}
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Selected Projects</p>
        <div className="mt-2 h-px w-12 bg-primary" />

        {/* Photography grid — mixed sizes */}
        <div className="mt-10 grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => {
            // First and every 5th project is large (spans 2 cols)
            const isLarge = i === 0 || i === 5;

            return (
              <article
                key={project.id}
                className={`group relative overflow-hidden rounded-sm bg-black cursor-pointer ${
                  isLarge ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
                onClick={() => setOpenIndex(i)}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Simple dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Simple caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                  <p className="font-display text-sm sm:text-base font-bold uppercase text-white leading-tight">
                    {project.title}
                  </p>
                  <p className="mt-0.5 text-xs text-white/60 uppercase tracking-wide">
                    {project.location}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Simple bottom link */}
        <div className="mt-8 text-center">
          <Link
            to="/projects"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            See all projects →
          </Link>
        </div>
      </div>

      {/* Project detail modal — kept functional */}
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
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
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
            className="aspect-[16/10] w-full object-cover max-h-[50vh]"
          />
          <div className="absolute inset-x-3 top-3 flex items-center justify-between">
            <span className="rounded-sm bg-black/70 px-3 py-1 font-mono text-xs text-white backdrop-blur-sm">
              {currentIndex + 1} / {totalCount}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="size-9 rounded-sm bg-black/70 text-white backdrop-blur-sm flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none">
            <button type="button" onClick={onPrev} aria-label="Previous" className="pointer-events-auto size-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80">
              <ChevronLeft className="size-4" />
            </button>
            <button type="button" onClick={onNext} aria-label="Next" className="pointer-events-auto size-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80">
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-[1.2fr_1fr] sm:p-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {project.category}
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold uppercase text-foreground">
              {project.title}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5 text-primary" />
              {project.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

            {project.scope && project.scope.length > 0 && (
              <>
                <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-foreground">Work completed</h4>
                <ul className="mt-2 space-y-1.5">
                  {project.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h4 className="mt-6 text-xs font-bold uppercase tracking-wider text-foreground">Material</h4>
            <p className="mt-1 text-sm text-muted-foreground font-mono">{project.material}</p>
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-sm bg-surface p-5 border border-border">
            <div>
              <p className="font-display text-lg font-bold uppercase text-foreground">
                Need a similar structure?
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Share your site dimensions and we'll provide a quotation.
              </p>
            </div>
            <div className="grid gap-2">
              <Link
                to="/quote"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground"
              >
                Get Quote
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href={`${company.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in a structure like "${project.title}" (${project.location}).`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <MessageCircle className="size-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
