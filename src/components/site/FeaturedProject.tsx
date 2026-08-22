import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";

export function FeaturedProject() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Featured Architectural Project"
      className="relative bg-[#0B0D0F] text-white py-20 sm:py-32 border-b border-white/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#B08A4A]" />
          <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
            CASE STUDY BENCHMARK
          </span>
        </div>

        {/* Full-Bleed Architectural Feature Card */}
        <div
          className={`relative min-h-[500px] sm:min-h-[600px] lg:min-h-[680px] w-full overflow-hidden border border-white/15 bg-[#14171A] transition-all duration-900 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background High-Resolution Project Image */}
          <div className="absolute inset-0 size-full">
            <picture>
              <source srcSet="/images/projects/proj-01.webp" type="image/webp" />
              <img
                src="/images/projects/proj-01.jpg"
                alt="Heavy industrial manufacturing complex"
                className="size-full object-cover object-center brightness-[0.38] contrast-[1.12] transition-transform duration-[6000ms] ease-out hover:scale-103"
                loading="lazy"
              />
            </picture>
            
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F]/90 via-[#0B0D0F]/40 to-transparent" />
          </div>

          {/* Foreground Project Narrative & Technical Specs */}
          <div className="relative z-10 size-full p-6 sm:p-12 lg:p-16 flex flex-col justify-between">
            
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 bg-[#0B0D0F]/90 px-3.5 py-1.5 border border-white/15">
                <span className="size-2 bg-[#B08A4A] rounded-full animate-pulse" />
                <span className="font-mono text-xs text-[#B08A4A] font-bold uppercase tracking-widest">
                  FEATURED INDUSTRIAL BENCHMARK
                </span>
              </div>

              <div className="font-mono text-xs text-[#8C9398] bg-[#0B0D0F]/80 px-3 py-1 border border-white/10">
                100 FT CLEAR SPAN · 45-DAY ERECTION
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="max-w-2xl mt-24 sm:mt-32">
              <div className="font-mono text-xs text-[#8C9398] uppercase tracking-wider mb-2">
                NOIDA SECTOR 63 INDUSTRIAL AREA
              </div>

              <h3 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.04] mb-4">
                HEAVY INDUSTRIAL MANUFACTURING FACILITY
              </h3>

              <p className="text-sm sm:text-base text-[#C8CCD0] font-sans leading-relaxed mb-8">
                Site-fabricated portal truss system with 100-foot column-free manufacturing floor. Engineered to IS 800 standards for continuous heavy gantry crane operation and thermal-shield Galvalume envelope.
              </p>

              {/* Specs & Link */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="btn-arch-primary"
                >
                  <span>VIEW FULL CASE STUDY</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <Link
                  to="/quote"
                  className="btn-arch-secondary"
                >
                  <span>REQUEST SIMILAR STRUCTURAL ESTIMATE</span>
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
