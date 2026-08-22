import { Check, ShieldCheck } from "lucide-react";
import { whyBuildWithUs } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-[#0B0D0F] text-white py-16 lg:py-24 border-b border-white/10 relative overflow-hidden arch-grid-pattern"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl border-b border-white/10 pb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#B08A4A]" />
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
              COMPETITIVE ADVANTAGES
            </span>
          </div>
          <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.05]">
            WHY BUILD WITH <br />
            <span className="text-[#B08A4A]">TIN SHADE?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8C9398] leading-relaxed font-sans">
            Five core engineering principles that guarantee durable structures and transparent project execution.
          </p>
        </Reveal>

        {/* 5 Benefits Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyBuildWithUs.map((benefit, i) => (
            <Reveal
              as="div"
              key={benefit.number}
              delay={i * 70}
              className={`arch-card-dark p-6 sm:p-8 bg-[#14171A] border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-[#B08A4A]/50 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#B08A4A] tabular-nums">
                    {benefit.number}
                  </span>
                  <div className="flex size-8 items-center justify-center bg-[#0B0D0F] border border-white/10 text-[#B08A4A]">
                    <ShieldCheck className="size-4.5" />
                  </div>
                </div>

                <h3 className="mt-5 font-editorial-title text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[#B08A4A] transition-colors">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm text-[#8C9398] leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                <Check className="size-4 text-[#B08A4A] shrink-0" />
                <span className="font-mono text-xs font-semibold text-[#C8CCD0] uppercase tracking-wider">
                  Verified Standard
                </span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
