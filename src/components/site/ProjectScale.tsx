import { useEffect, useState, useRef } from "react";
import { HardHat, Ruler, Building, Compass } from "lucide-react";
import heroImg from "@/assets/gen/hero-2.jpg";

interface Metric {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}

const metrics: Metric[] = [
  { value: 500, suffix: "+", label: "PROJECTS EXECUTED", sub: "Factories, warehouses & godowns" },
  { value: 15, suffix: "+", label: "YEARS MASTERY", sub: "Established Noida workshop since 2010" },
  { value: 120, suffix: " FT", label: "CLEAR SPAN REACH", sub: "Column-free modular truss engineering" },
  { value: 100, suffix: "%", label: "PAN INDIA REACH", sub: "Turnkey crane assembly nationwide" },
];

export function ProjectScale() {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 1600;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3); // cubic-ease-out

      setCounts(metrics.map((m) => Math.round(m.value * ease)));

      if (step >= steps) {
        clearInterval(timer);
        setCounts(metrics.map((m) => m.value));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative bg-[#0B0D0F] text-white py-24 sm:py-32 overflow-hidden border-b border-white/10"
    >
      {/* Background Architectural Canvas with Subtle Parallax Feel */}
      <div className="absolute inset-0 size-full opacity-20 pointer-events-none">
        <img
          src={heroImg}
          alt="Heavy Industrial Framing"
          className="size-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D0F] via-[#0B0D0F]/80 to-[#0B0D0F]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#B08A4A]" />
            <span className="font-mono-tag text-[#B08A4A] text-xs">
              SCALE &amp; TRACK RECORD
            </span>
          </div>

          <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.06]">
            BUILT ACROSS <br />
            INDUSTRIES.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#8C9398] font-sans leading-relaxed max-w-xl">
            From regional automotive manufacturing hubs in Greater Noida to nationwide logistics fulfillment centers, our numbers represent verified structural engineering execution.
          </p>
        </div>

        {/* 4 Architectural Metric Pillars */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, idx) => (
            <div
              key={m.label}
              className="arch-card-dark p-6 sm:p-8 flex flex-col justify-between min-h-[220px]"
            >
              <div className="border-b border-white/10 pb-4 mb-4">
                <span className="font-mono text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight tabular-nums block">
                  {counts[idx]}
                  <span className="text-[#B08A4A]">{m.suffix}</span>
                </span>
              </div>

              <div>
                <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-1">
                  {m.label}
                </h3>
                <p className="text-xs text-[#8C9398] font-sans">
                  {m.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
