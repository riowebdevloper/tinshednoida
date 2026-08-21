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

  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(goNext, 5500);
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
      className="relative w-full overflow-hidden bg-black select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...swipe}
    >
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/7.5] lg:aspect-[1920/780] max-h-[82vh] overflow-hidden">
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

        {/* Subtle arrows — appear on hover */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 flex size-10 items-center justify-center rounded-full bg-black/40 text-white/70 transition-all hover:bg-black/60 hover:text-white"
        >
          <ChevronLeft className="size-5" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex size-10 items-center justify-center rounded-full bg-black/40 text-white/70 transition-all hover:bg-black/60 hover:text-white"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Simple dot indicators */}
        <div className="absolute bottom-5 inset-x-0 z-20 flex items-center justify-center gap-2" role="tablist" aria-label="Hero slides">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.language}
              type="button"
              onClick={() => setIndex(i)}
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === index
                  ? "h-2 w-7 bg-white"
                  : "size-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
