import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Globe,
  Mail,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { company, heroSlides, heroStats } from "@/lib/site-data";
import { Counter } from "./Counter";

function useTouchSwipe(onSwipeLeft: () => void, onSwipeRight: () => void) {
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const diff = touchStartX.current - (e.changedTouches[0]?.clientX ?? 0);
      if (Math.abs(diff) > 40) {
        diff > 0 ? onSwipeLeft() : onSwipeRight();
      }
      touchStartX.current = null;
    },
    [onSwipeLeft, onSwipeRight],
  );

  return { onTouchStart, onTouchEnd };
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = useCallback(() => setIndex((i) => (i + 1) % heroSlides.length), []);
  const goPrev = useCallback(
    () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length),
    [],
  );

  // Autoplay — 5.5s per slide, paused when user hovers
  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(goNext, 5500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const swipe = useTouchSwipe(goNext, goPrev);
  const currentSlide = heroSlides[index]!;

  return (
    <section
      id="top"
      aria-label="Hero — Pan India Industrial Shed & Structural Solutions"
      className="relative isolate overflow-hidden bg-steel-deep text-steel-foreground border-b border-steel-line"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...swipe}
    >
      {/* Background blueprint grid for industrial engineering aesthetic */}
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-20" aria-hidden />

      {/* ━━━━━━━━━━━━━━━━━━━ MAIN FULL-WIDTH HERO SLIDER CONTAINER ━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8">
        
        {/* Top Regional Switcher Bar */}
        <div className="mb-3 sm:mb-4 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-sm border border-primary/40 bg-primary/10 px-2.5 py-1 font-display text-[0.7rem] font-bold uppercase tracking-wider text-primary">
              <Globe className="size-3.5" />
              PAN INDIA COVERAGE
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 font-mono text-xs text-steel-muted">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Slide {String(index + 1).padStart(2, "0")} of 05 · {currentSlide.language}
            </span>
          </div>

          {/* Quick Language Navigation Buttons */}
          <div className="no-scrollbar flex items-center gap-1 overflow-x-auto rounded-sm border border-steel-line bg-steel/80 p-1 backdrop-blur-xs">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.language}
                type="button"
                onClick={() => setIndex(i)}
                className={`rounded-xs px-2.5 py-1 font-display text-[0.68rem] font-bold uppercase tracking-wide transition-all ${
                  i === index
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-steel-muted hover:text-white hover:bg-steel-deep/60"
                }`}
                aria-label={`Switch to ${slide.language} slide`}
              >
                {i === 0
                  ? "1. हिन्दी"
                  : i === 1
                  ? "2. English"
                  : i === 2
                  ? "3. Hinglish"
                  : i === 3
                  ? "4. South India"
                  : "5. Pan India"}
              </button>
            ))}
          </div>
        </div>

        {/* ──────── FULL-WIDTH BILLBOARD HERO CAROUSEL ──────── */}
        <div className="group relative w-full overflow-hidden rounded-md border-2 border-steel-line bg-black shadow-elevated transition-colors hover:border-primary/50">
          
          {/* Responsive Aspect Ratio Image Wrapper */}
          <div className="relative aspect-[16/9] sm:aspect-[16/8] lg:aspect-[1920/820] w-full overflow-hidden bg-steel-deep">
            {heroSlides.map((slide, i) => {
              const isActive = i === index;
              return (
                <div
                  key={slide.image}
                  className={`absolute inset-0 size-full transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                  aria-hidden={!isActive}
                >
                  <picture>
                    <source srcSet={slide.image} type="image/webp" />
                    <source srcSet={slide.fallback} type="image/jpeg" />
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      loading={i === 0 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : "low"}
                      decoding={i === 0 ? "sync" : "async"}
                      width={1920}
                      height={820}
                      className="size-full object-cover select-none"
                    />
                  </picture>
                </div>
              );
            })}

            {/* Previous Arrow Button */}
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex size-9 sm:size-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 shadow-md"
            >
              <ChevronLeft className="size-5 sm:size-6" />
            </button>

            {/* Next Arrow Button */}
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex size-9 sm:size-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 shadow-md"
            >
              <ChevronRight className="size-5 sm:size-6" />
            </button>

            {/* Top Right Slide Counter Pill */}
            <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 rounded-sm border border-white/20 bg-black/75 px-2.5 py-1 text-xs font-mono font-bold text-white backdrop-blur-md">
              <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-white/40">/</span>
              <span>05</span>
            </div>

            {/* Bottom Centered Pagination Dots */}
            <div
              className="absolute bottom-3 sm:bottom-4 inset-x-0 z-20 flex items-center justify-center gap-2 pointer-events-auto"
              role="tablist"
              aria-label="Hero slider pagination"
            >
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.language}
                  type="button"
                  onClick={() => setIndex(i)}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}: ${slide.language}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === index
                      ? "h-2 w-7 sm:w-9 bg-primary shadow-xs"
                      : "size-2 sm:size-2.5 bg-white/40 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ──────── QUICK INTERACTIVE CONTACT & CTA RIBBON ──────── */}
        <div className="mt-4 sm:mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* Direct Clickable Phone CTA */}
          <a
            href="tel:+918527977714"
            className="group flex items-center justify-between rounded-sm border border-steel-line bg-steel/90 p-3.5 sm:p-4 shadow-card backdrop-blur-xs transition-all duration-200 hover:border-primary hover:bg-steel"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <PhoneCall className="size-5" />
              </div>
              <div>
                <span className="eyebrow block text-[0.65rem] text-steel-muted uppercase">
                  CALL FOR DIRECT QUOTE
                </span>
                <strong className="font-display text-sm sm:text-base font-bold text-white tracking-wide">
                  85279-77714
                </strong>
              </div>
            </div>
            <ArrowRight className="size-4 text-steel-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </a>

          {/* Direct Clickable Email CTA */}
          <a
            href={`mailto:${company.email}`}
            className="group flex items-center justify-between rounded-sm border border-steel-line bg-steel/90 p-3.5 sm:p-4 shadow-card backdrop-blur-xs transition-all duration-200 hover:border-primary hover:bg-steel"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="size-5" />
              </div>
              <div className="truncate">
                <span className="eyebrow block text-[0.65rem] text-steel-muted uppercase">
                  EMAIL SPECIFICATIONS
                </span>
                <strong className="font-display text-xs sm:text-sm font-bold text-white truncate block">
                  {company.email}
                </strong>
              </div>
            </div>
            <ArrowRight className="size-4 shrink-0 text-steel-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </a>

          {/* Instant Online Quote Trigger */}
          <Link
            to="/quote"
            className="group flex items-center justify-between rounded-sm bg-primary p-3.5 sm:p-4 text-primary-foreground shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-black/20 text-white">
                <Sparkles className="size-5" />
              </div>
              <div>
                <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-white/80">
                  ESTIMATE IN 60 SECS
                </span>
                <strong className="font-display text-sm sm:text-base font-extrabold uppercase tracking-wide block">
                  GET A FREE QUOTE
                </strong>
              </div>
            </div>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Download 51-Page Catalog Brochure */}
          <a
            href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
            download="TIN_SHADE_NOIDA_CATALOG.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-sm border border-steel-line bg-steel/90 p-3.5 sm:p-4 shadow-card backdrop-blur-xs transition-all duration-200 hover:border-primary hover:bg-steel"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Download className="size-5" />
              </div>
              <div>
                <span className="eyebrow block text-[0.65rem] text-steel-muted uppercase">
                  51-PAGE PORTFOLIO
                </span>
                <strong className="font-display text-sm sm:text-base font-bold text-white tracking-wide">
                  DOWNLOAD BROCHURE
                </strong>
              </div>
            </div>
            <ArrowRight className="size-4 text-steel-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </a>
        </div>

        {/* ──────── KEY STATS STRIP ──────── */}
        <dl className="mt-4 sm:mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-steel-line bg-steel-line">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-steel/90 px-3 py-2.5 sm:py-3.5 text-center backdrop-blur-sm"
            >
              <dt className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none text-white">
                {"value" in stat && stat.value !== undefined ? (
                  <>
                    <Counter value={stat.value} />
                    <span className="text-primary">{stat.suffix}</span>
                  </>
                ) : (
                  <span className="text-primary text-sm sm:text-xl lg:text-2xl">{stat.text}</span>
                )}
              </dt>
              <dd className="eyebrow mt-1 text-[0.55rem] sm:text-[0.65rem] text-steel-muted">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
