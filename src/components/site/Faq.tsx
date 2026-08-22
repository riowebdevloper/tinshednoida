import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/site-data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-navy-obsidian py-16 sm:py-24 border-b border-white/10 relative">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sky-400 mb-2">
            <span className="size-1.5 rounded-full bg-sky-400" />
            <span>KNOWLEDGE BASE &amp; LOGISTICS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-white tracking-tight">
            Frequently Answered Technical Questions
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed font-sans">
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
                  className="flex w-full items-center justify-between gap-4 py-4 text-left font-display text-base sm:text-lg font-bold text-white hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-xs border border-white/15 bg-white/5 text-slate-300">
                    {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                  </span>
                </button>
                {isOpen ? (
                  <p className="pb-4 pr-6 text-xs sm:text-sm leading-relaxed text-slate-300 font-sans">
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
