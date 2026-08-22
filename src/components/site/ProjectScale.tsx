import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface Metric {
  val: number;
  suffix: string;
  label: string;
  detail: string;
}

const metrics: Metric[] = [
  {
    val: 500,
    suffix: "+",
    label: "PROJECTS EXECUTED",
    detail: "Heavy manufacturing sheds, logistics godowns, and commercial steel buildings.",
  },
  {
    val: 15,
    suffix: "+",
    label: "YEARS MASTERY",
    detail: "Continuous direct workshop fabrication and structural erection since 2010.",
  },
  {
    val: 120,
    suffix: " FT",
    label: "CLEAR SPAN REACH",
    detail: "Column-free internal warehouse clear spans engineered with high-yield trusses.",
  },
  {
    val: 100,
    suffix: "%",
    label: "PAN INDIA COVERAGE",
    detail: "Direct mobilization, logistics transport, and turnkey on-site hydraulic crane teams.",
  },
];

export function ProjectScale() {
  const [inView, setInView] = useState(false);
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

  return (
    <section
      ref={ref}
      aria-label="Project Scale & Verified Track Record"
      className="relative bg-[#0A1128] text-white py-24 sm:py-32 lg:py-40 border-b border-indigo-200/15 overflow-hidden"
    >
      {/* Background Architectural Project Backdrop with Navy Contrast */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/projects/proj-01.webp" type="image/webp" />
          <img
            src="/images/projects/proj-01.jpg"
            alt="Structural steel shed frame"
            className="size-full object-cover object-center brightness-[0.24] contrast-[1.18]"
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/85 to-[#0A1128]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/95 via-[#0A1128]/85 to-[#0A1128]/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#F59E0B]" />
          <span className="font-mono-tag text-[#F59E0B] text-xs font-bold">
            SCALE & VERIFIED METRICS
          </span>
        </div>

        {/* Large Editorial Title */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-[1.05]">
            BUILT ACROSS <br />
            <span className="text-[#F59E0B]">INDUSTRIES.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C7D2FE] font-sans leading-relaxed">
            From heavy manufacturing facilities in Greater Noida to extensive logistics hubs across North India, our steel structures are engineered for multi-decade durability.
          </p>
        </div>

        {/* 4 Spotlight Cards with 21st.dev NumberTicker in Safety Yellow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((m, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(245, 158, 11, 0.18)"
              className={`p-6 sm:p-8 bg-[#101B3B]/90 border border-indigo-200/20 backdrop-blur-md transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="font-mono text-xs text-[#8E9CB8] mb-3 flex items-center justify-between">
                <span>METRIC 0{idx + 1}</span>
                <span className="size-2 bg-[#DC2626] rounded-full animate-pulse" />
              </div>

              <div className="font-editorial-title text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                <span className="text-[#F59E0B]">
                  <NumberTicker value={m.val} delay={idx * 150} duration={1800} />
                </span>
                <span className="text-white text-3xl sm:text-4xl">{m.suffix}</span>
              </div>

              <div className="font-display text-xs font-bold uppercase tracking-wider text-white mb-2">
                {m.label}
              </div>

              <p className="text-xs text-[#8E9CB8] font-sans leading-relaxed">
                {m.detail}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {/* Footer Ledger Note */}
        <div className="mt-12 pt-8 border-t border-indigo-200/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#8E9CB8]">
          <div>
            IS 2062 Prime Mild Steel · IS 800 Structural Compliance · Noida Yard Direct
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-[#F59E0B] hover:text-white font-bold transition-colors"
          >
            <span>VIEW PROJECT REPOSITORY</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
