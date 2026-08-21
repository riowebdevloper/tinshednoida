import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/site-data";

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

  // 5.5s autoplay, pauses on hover, resumes on mouse leave
  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(goNext, 5500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, goNext]);

  // Keyboard accessibility: Left / Right arrows
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
      {/* ──────── FULL-WIDTH CINEMATIC SLIDER CONTAINER ──────── */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-[1920/780] max-h-[82vh] overflow-hidden bg-black">
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
                  height={780}
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
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex size-10 sm:size-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:bg-primary hover:border-primary hover:scale-105 active:scale-95 shadow-lg"
        >
          <ChevronLeft className="size-5 sm:size-6" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex size-10 sm:size-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:bg-primary hover:border-primary hover:scale-105 active:scale-95 shadow-lg"
        >
          <ChevronRight className="size-5 sm:size-6" />
        </button>

        {/* Top-Right Language / Slide Indicator */}
        <div className="absolute top-3 right-3 sm:top-5 sm:right-6 z-20 hidden sm:flex items-center gap-1.5 rounded-sm border border-white/20 bg-black/75 px-3 py-1.5 text-xs font-mono font-bold text-white backdrop-blur-md">
          <span className="text-primary">{heroSlides[index]?.language}</span>
          <span className="text-white/40">·</span>
          <span>{String(index + 1).padStart(2, "0")}/05</span>
        </div>

        {/* Bottom Pagination Dots & Minimal Language Quick-Switcher */}
        <div className="absolute bottom-3 sm:bottom-6 inset-x-0 z-20 flex flex-col items-center gap-2.5 pointer-events-auto">
          {/* Language Pills (Desktop) */}
          <div className="hidden md:flex items-center gap-1 rounded-sm border border-white/20 bg-black/70 p-1 backdrop-blur-md">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.language}
                type="button"
                onClick={() => setIndex(i)}
                className={`rounded-xs px-3 py-1 font-display text-[0.7rem] font-bold uppercase tracking-wider transition-all ${
                  i === index
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                aria-label={`Switch to slide ${i + 1}`}
              >
                {i === 0
                  ? "हिन्दी"
                  : i === 1
                  ? "English"
                  : i === 2
                  ? "Hinglish"
                  : i === 3
                  ? "South India"
                  : "Pan India"}
              </button>
            ))}
          </div>

          {/* Dots Indicator (All Devices) */}
          <div
            className="flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Hero slides"
          >
            {heroSlides.map((slide, i) => (
              <button
                key={slide.language}
                type="button"
                onClick={() => setIndex(i)}
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}: ${slide.language}`}
                className={`transition-all duration-300 rounded-full ${
                  i === index
                    ? "h-2 w-8 sm:w-10 bg-primary shadow-xs"
                    : "size-2 sm:size-2.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
