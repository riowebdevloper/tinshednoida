import { Star, MapPin } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#0B0D0F] text-white py-16 lg:py-24 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl border-b border-white/10 pb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#B08A4A]" />
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
              CLIENT FEEDBACK
            </span>
          </div>
          <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.05]">
            TRUSTED BY BUSINESSES <br />
            <span className="text-[#B08A4A]">&amp; PLANT OWNERS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8C9398] leading-relaxed font-sans">
            Real feedback from factory owners, warehouse managers, and structural clients across India.
          </p>
        </Reveal>

        {/* Testimonials Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              as="article"
              key={item.name}
              delay={i * 80}
              className="arch-card-dark flex flex-col justify-between p-6 sm:p-8 bg-[#14171A] border border-white/10 shadow-lg"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#B08A4A]" aria-label="5 stars rating">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star key={starIdx} className="size-4 fill-[#B08A4A] text-[#B08A4A]" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="mt-4 text-sm sm:text-base leading-relaxed text-[#C8CCD0] font-sans">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Client Info Footer */}
              <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <strong className="block font-editorial-title text-base font-bold uppercase text-white">
                    {item.name}
                  </strong>
                  <span className="block text-xs text-[#8C9398] font-sans">
                    {item.role} · {item.project}
                  </span>
                </div>

                <span className="flex items-center gap-1 font-mono text-[0.7rem] text-white bg-[#0B0D0F] px-2 py-1 border border-white/10">
                  <MapPin className="size-3 text-[#B08A4A]" />
                  {item.location}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
