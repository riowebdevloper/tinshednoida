import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/site-data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0B0D0F] py-16 sm:py-24 border-b border-white/10 relative text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#B08A4A]" />
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
              KNOWLEDGE BASE &amp; LOGISTICS
            </span>
          </div>
          <h2 className="font-editorial-title text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight">
            Frequently Answered Technical Questions
          </h2>
          <p className="mt-3 text-sm text-[#8C9398] leading-relaxed font-sans">
            Structural steel grades, fabrication timelines, clear span recommendations, and on-site crane erection logistics.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left font-editorial-title text-base sm:text-lg font-bold text-white hover:text-[#B08A4A] transition-colors uppercase"
                >
                  <span>{faq.q}</span>
                  <span className="inline-flex size-6 shrink-0 items-center justify-center border border-white/15 bg-[#14171A] text-white">
                    {isOpen ? <Minus className="size-3.5 text-[#B08A4A]" /> : <Plus className="size-3.5" />}
                  </span>
                </button>
                {isOpen ? (
                  <p className="pb-4 pr-6 text-xs sm:text-sm leading-relaxed text-[#C8CCD0] font-sans">
                    {faq.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
