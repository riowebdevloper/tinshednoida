import {
  ArrowRight,
  Award,
  HardHat,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, leadership } from "@/lib/site-data";
import { Reveal } from "./Reveal";

interface PhotoPlaceholderProps {
  photo: string | null;
  name: string;
  initials: string;
  role: string;
  isFounder?: boolean;
}

function PhotoPlaceholder({ photo, name, initials, role, isFounder }: PhotoPlaceholderProps) {
  if (photo) {
    return (
      <div
        className={`relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-sm border ${
          isFounder ? "border-primary/50" : "border-amber-500/40"
        } bg-steel-deep shadow-elevated transition-colors duration-300`}
      >
        <img
          src={photo}
          alt={`${name} - ${role}`}
          className="size-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-steel-deep/95 via-steel-deep/30 to-transparent" />
        <div
          className={`pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ${
            isFounder ? "ring-primary/20" : "ring-amber-500/20"
          }`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-sm border ${
        isFounder ? "border-primary/50 bg-steel-deep/90" : "border-amber-500/30 bg-steel-deep/80"
      } group grid-blueprint flex flex-col items-center justify-center p-6 text-center shadow-card`}
    >
      {/* Decorative corner accent lines */}
      <div className="pointer-events-none absolute left-3 top-3 size-3 border-l-2 border-t-2 border-primary/40" />
      <div className="pointer-events-none absolute right-3 top-3 size-3 border-r-2 border-t-2 border-primary/40" />
      <div className="pointer-events-none absolute bottom-3 left-3 size-3 border-b-2 border-l-2 border-primary/40" />
      <div className="pointer-events-none absolute bottom-3 right-3 size-3 border-b-2 border-r-2 border-primary/40" />

      {/* Initials & Icon Avatar Badge */}
      <div className="relative flex items-center justify-center">
        <div
          className={`flex size-20 items-center justify-center rounded-full border ${
            isFounder
              ? "border-primary/60 bg-primary/10 text-primary shadow-[0_0_24px_rgba(56,189,248,0.15)]"
              : "border-amber-500/50 bg-amber-500/10 text-amber-400 shadow-[0_0_24px_rgba(245,158,11,0.15)]"
          }`}
        >
          {isFounder ? (
            <HardHat className="size-9 text-primary" />
          ) : (
            <Sparkles className="size-9 text-amber-400" />
          )}
        </div>
        <span
          className={`absolute -bottom-1.5 rounded-sm px-2 py-0.5 font-display text-xs font-bold uppercase tracking-wider ${
            isFounder ? "bg-primary text-primary-foreground" : "bg-amber-500 text-slate-950"
          }`}
        >
          {initials}
        </span>
      </div>

      <div className="mt-5 space-y-1">
        <p className="font-display text-base font-bold uppercase tracking-wide text-steel-foreground">
          {name}
        </p>
        <p className="eyebrow text-[0.65rem] text-steel-muted">
          Photograph Area · Official Photo Pending
        </p>
      </div>

      <div className="mt-4 rounded-sm border border-steel-line bg-steel/60 px-3 py-1 text-[0.7rem] font-medium tracking-wide text-steel-muted backdrop-blur-xs">
        Replaceable Photo Slot
      </div>
    </div>
  );
}

export function Leadership() {
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    subheading,
    founder,
    nextGen,
    connectionBadge,
    story,
    cta,
  } = leadership;

  return (
    <section
      id="leadership"
      className="content-auto relative isolate overflow-hidden bg-steel-gradient py-16 text-steel-foreground lg:py-24"
    >
      {/* Background blueprint pattern */}
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-30" aria-hidden />

      {/* Subtle ambient lighting glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 size-96 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* 1. SECTION HEADING */}
        <Reveal variant="up" className="mx-auto max-w-3xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3 text-primary">
            <span className="h-px w-10 rule-accent" />
            {eyebrow}
            <span className="h-px w-10 rule-accent" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            <span>{titleLine1}</span>
            <span className="block text-primary">{titleLine2}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-steel-muted sm:text-lg">
            "{subheading}"
          </p>
        </Reveal>

        {/* 2 & 3. PROFILES LAYOUT (DESKTOP & MOBILE STACKING) */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* FOUNDER PROFILE CARD */}
          <Reveal
            variant="left"
            className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-primary/40 bg-steel/90 p-6 shadow-elevated transition-all duration-300 hover:border-primary/70 sm:p-8"
          >
            {/* Subtle Founder Highlight Tag */}
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-sm border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Award className="size-3.5" />
              Founder & Anchor
            </div>

            <div>
              {/* Founder Photo / Placeholder */}
              <PhotoPlaceholder
                photo={founder.photo}
                name={founder.name}
                initials="MK"
                role={founder.designation}
                isFounder
              />

              {/* Title & Name */}
              <div className="mt-6 border-b border-steel-line pb-4">
                <p className="eyebrow flex items-center gap-2 font-semibold text-primary">
                  <ShieldCheck className="size-4" />
                  {founder.designation}
                </p>
                <h3 className="mt-1 font-display text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
                  {founder.name}
                </h3>
              </div>

              {/* Founder Description */}
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-steel-muted sm:text-base">
                {founder.paragraphs.map((p, idx) => (
                  <p key={idx}>"{p}"</p>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-steel-line/60 pt-4 text-xs text-steel-muted">
              <span className="flex items-center gap-1.5 font-mono">
                <span className="size-2 animate-pulse rounded-full bg-primary" />
                Hands-on Onsite Leadership
              </span>
              <span className="font-display font-semibold uppercase tracking-wider text-primary">
                Est. {company.since}
              </span>
            </div>
          </Reveal>

          {/* ABDUL — NEXT GENERATION PROFILE CARD */}
          <Reveal
            variant="right"
            className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-steel-line bg-steel/80 p-6 shadow-card transition-all duration-300 hover:border-amber-500/50 sm:p-8"
          >
            {/* Subtle NextGen Tag */}
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-sm border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <Sparkles className="size-3.5" />
              Future & Modern Tech
            </div>

            <div>
              {/* Abdul Photo / Placeholder */}
              <PhotoPlaceholder
                photo={nextGen.photo}
                name={nextGen.name}
                initials="A"
                role={nextGen.designation}
              />

              {/* Title & Name */}
              <div className="mt-6 border-b border-steel-line pb-4">
                <p className="eyebrow flex items-center gap-2 font-semibold text-amber-400">
                  <User className="size-4" />
                  {nextGen.designation}
                </p>
                <h3 className="mt-1 font-display text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
                  {nextGen.name}
                </h3>
              </div>

              {/* NextGen Description */}
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-steel-muted sm:text-base">
                {nextGen.paragraphs.map((p, idx) => (
                  <p key={idx}>"{p}"</p>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-steel-line/60 pt-4 text-xs text-steel-muted">
              <span className="flex items-center gap-1.5 font-mono">
                <span className="size-2 animate-pulse rounded-full bg-amber-400" />
                Digital & Client Coordination
              </span>
              <span className="font-display font-semibold uppercase tracking-wider text-amber-400">
                Next Gen Tech
              </span>
            </div>
          </Reveal>
        </div>

        {/* 4. VISUAL CONNECTION: FOUNDATION → FUTURE */}
        <Reveal variant="up" delay={250} className="my-10 flex items-center justify-center">
          <div className="relative flex items-center gap-4 rounded-full border border-steel-line bg-steel-deep/90 px-6 py-2.5 shadow-card backdrop-blur-sm">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary sm:w-16" />
            <span className="font-display text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
              <span className="text-primary">{connectionBadge.split(" → ")[0]}</span>
              <span className="mx-2 font-normal text-steel-muted">→</span>
              <span className="text-amber-400">{connectionBadge.split(" → ")[1]}</span>
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400 sm:w-16" />
          </div>
        </Reveal>

        {/* 5. PERSONAL STORY ELEMENT */}
        <Reveal variant="up" delay={350} className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-sm border border-steel-line bg-steel-deep/60 p-6 text-center shadow-card sm:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-amber-400 to-primary opacity-60" />

            <h4 className="font-display text-xl font-bold uppercase tracking-wider text-white sm:text-2xl">
              "{story.heading}"
            </h4>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-steel-muted sm:text-base">
              {story.body}
            </p>
          </div>
        </Reveal>

        {/* 9. SECTION CTA */}
        <Reveal variant="fade" delay={400} className="mt-14 text-center">
          <div className="inline-flex flex-col items-center gap-6 rounded-sm border border-steel-line bg-steel-deep/80 p-8 shadow-elevated backdrop-blur-xs sm:px-12 sm:py-10">
            <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
              {cta.heading}
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/quote"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
              >
                {cta.getQuoteLabel}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={company.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-whatsapp/40 bg-whatsapp/10 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-whatsapp transition-colors hover:bg-whatsapp hover:text-white"
              >
                <MessageCircle className="size-4" />
                {cta.talkToUsLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
