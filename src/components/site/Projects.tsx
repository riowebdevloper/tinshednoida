import { useEffect, useState } from "react";
import { ArrowRight, MapPin, MessageCircle, X } from "lucide-react";
import { company, projectCategories, projects, type ProjectCategory } from "@/lib/site-data";
import { Reveal } from "./Reveal";

type Project = (typeof projects)[number];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const featured = visible.find((p) => p.featured) ?? visible[0];
  const rest = visible.filter((p) => p.id !== featured?.id);
  const openProject = projects.find((p) => p.id === openId) ?? null;

  return (
    <section id="projects" className="content-auto bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary" />
            Real work, real sites
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl">
            Built by us
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Filter by structure type, open any project and tell us if you want something similar.
          </p>
        </Reveal>

        <div className="no-scrollbar mt-8 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
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
            <ProjectCard project={featured} onOpen={setOpenId} large />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {rest.slice(0, 4).map((project, i) => (
                <ProjectCard key={project.id} project={project} onOpen={setOpenId} delay={i * 70} />
              ))}
            </div>
          </div>
        ) : null}

        {rest.length > 4 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(4).map((project, i) => (
              <ProjectCard key={project.id} project={project} onOpen={setOpenId} delay={i * 70} />
            ))}
          </div>
        ) : null}
      </div>

      {openProject ? <ProjectModal project={openProject} onClose={() => setOpenId(null)} /> : null}
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
  onOpen: (id: string) => void;
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
        onClick={() => onOpen(project.id)}
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

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-steel-deep/85 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-lg bg-card shadow-elevated sm:rounded-sm"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.alt}
            width={1280}
            height={960}
            className="aspect-16/10 w-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project"
            className="absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-sm bg-background/90 text-foreground backdrop-blur"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-[1.2fr_1fr] sm:p-8">
          <div>
            <span className="eyebrow rounded-sm bg-primary-soft px-2 py-1 text-primary">
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

          <div className="flex flex-col justify-end gap-3 rounded-sm bg-surface p-5">
            <p className="font-display text-lg font-semibold uppercase leading-tight text-foreground">
              Want something like this?
            </p>
            <p className="text-sm text-muted-foreground">
              Send your site details — we'll visit free of cost and quote for a similar structure.
            </p>
            <a
              href="/quote"
              onClick={onClose}
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground"
            >
              I want something like this
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`${company.whatsapp}?text=${encodeURIComponent(`Hi Tin Shade Noida, I saw the "${project.title}" project and want something similar.`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-whatsapp hover:text-whatsapp"
            >
              <MessageCircle className="size-4" />
              Discuss on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
