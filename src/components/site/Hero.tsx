import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download, Calculator, Phone, ArrowRight, ShieldCheck, HardHat } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, heroSlides } from "@/lib/site-data";

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

  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(goNext, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, goNext]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const swipe = useTouchSwipe(goNext, goPrev);

  return (
    <section
      id="top"
      aria-label="Tin Shade Noida — Industrial Construction & Fabrication"
      className="relative w-full overflow-hidden bg-steel-deep text-steel-foreground select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...swipe}
    >
      {/* ──────── CINEMATIC IMAGE SLIDER BANNER ──────── */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/8] lg:aspect-[1920/720] max-h-[76vh] overflow-hidden bg-black">
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
                  height={720}
                  className="size-full object-cover select-none"
                />
              </picture>
            </div>
          );
        })}

        {/* Minimal Navigation Arrows */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex size-9 sm:size-11 items-center justify-center rounded-full bg-black/60 text-white/90 backdrop-blur-md transition-all duration-200 hover:bg-primary hover:text-primary-foreground shadow-lg"
        >
          <ChevronLeft className="size-5" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex size-9 sm:size-11 items-center justify-center rounded-full bg-black/60 text-white/90 backdrop-blur-md transition-all duration-200 hover:bg-primary hover:text-primary-foreground shadow-lg"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Top-Right Technical Slide Counter */}
        <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 rounded-xs bg-black/75 px-3 py-1 font-mono text-xs font-bold text-white border border-white/20 backdrop-blur-md">
          <span className="text-primary">{heroSlides[index]?.reachLabel}</span>
          <span className="text-white/40">·</span>
          <span>0{index + 1} / 0{heroSlides.length}</span>
        </div>

        {/* Bottom-Left Live Architectural Project Badge */}
        <div className="absolute bottom-4 left-4 sm:left-6 z-20 hidden sm:block pointer-events-none">
          <div className="rounded-xs bg-black/80 px-3.5 py-2 border border-white/15 backdrop-blur-md max-w-md">
            <span className="font-mono text-[0.65rem] text-primary uppercase font-bold tracking-wider block">
              REAL SITE EXECUTION / {heroSlides[index]?.language}
            </span>
            <p className="font-display text-sm font-bold uppercase text-white tracking-wide mt-0.5">
              {heroSlides[index]?.title}
            </p>
          </div>
        </div>

        {/* Slide Counter & Dots Overlay */}
        <div className="absolute bottom-4 right-4 sm:right-6 z-20 flex items-center gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.language}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === index
                  ? "h-2 w-7 bg-primary shadow-xs"
                  : "size-2 bg-white/40 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ──────── ARCHITECTURAL HERO ACTION & VALUE SUMMARY ──────── */}
      <div className="border-b border-steel-line bg-steel px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-12 items-center">
            
            {/* Value Statement (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-xs border border-primary/40 bg-primary/10 px-2.5 py-1 text-[0.68rem] font-mono font-bold uppercase tracking-wider text-primary">
                <HardHat className="size-3.5" />
                DIRECT INDUSTRIAL FABRICATORS & ERECTORS
              </div>
              <h1 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-tight text-white">
                HEAVY-DUTY INDUSTRIAL SHEDS &
                <span className="block text-primary">STRUCTURAL STEEL FABRICATION.</span>
              </h1>
              <p className="mt-2.5 text-sm sm:text-base text-steel-muted leading-relaxed max-w-2xl">
                From 2,000 to 100,000+ sq. ft. factories, logistics warehouses, and heavy MS frameworks. In-house fabrication yard in Noida Sector 10 with turnkey crane erection nationwide.
              </p>
            </div>

            {/* Direct Action Cluster (5 cols) */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-xs bg-primary px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                <span>Request Free Site Quotation</span>
                <ArrowRight className="size-4" />
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#estimator"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xs border border-steel-line bg-steel-deep px-3 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-primary hover:text-primary text-center"
                >
                  <Calculator className="size-3.5 text-primary" />
                  <span>Cost Estimator</span>
                </a>

                <a
                  href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
                  download="TIN_SHADE_NOIDA_CATALOG.pdf"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xs border border-steel-line bg-steel-deep px-3 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-primary hover:text-primary text-center"
                >
                  <Download className="size-3.5 text-primary" />
                  <span>51-Pg Catalog</span>
                </a>
              </div>
            </div>

          </div>

          {/* ──────── TECHNICAL SPECIFICATION TICKER ──────── */}
          <div className="mt-8 pt-6 border-t border-steel-line grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <span className="block font-display text-xl sm:text-2xl font-extrabold text-white">15+ YEARS</span>
              <span className="block text-[0.7rem] font-mono text-steel-muted uppercase tracking-wider">In-House Fabrication</span>
            </div>
            <div>
              <span className="block font-display text-xl sm:text-2xl font-extrabold text-white">500+ SHEDS</span>
              <span className="block text-[0.7rem] font-mono text-steel-muted uppercase tracking-wider">Completed Across India</span>
            </div>
            <div>
              <span className="block font-display text-xl sm:text-2xl font-extrabold text-white">120 FT</span>
              <span className="block text-[0.7rem] font-mono text-steel-muted uppercase tracking-wider">Max Clear Span</span>
            </div>
            <div>
              <span className="block font-display text-xl sm:text-2xl font-extrabold text-white">IS 2062</span>
              <span className="block text-[0.7rem] font-mono text-steel-muted uppercase tracking-wider">Certified Mild Steel</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
