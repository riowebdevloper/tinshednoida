import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/site-data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-16 sm:py-20 border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-charcoal">
            Frequently Answered Technical Questions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-sans">
            Structural steel grades, fabrication timelines, clear span recommendations, and on-site crane erection logistics.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left font-display text-base font-bold text-charcoal hover:text-oxide transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-xs border border-border text-charcoal">
                    {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                  </span>
                </button>
                {isOpen ? (
                  <p className="pb-4 pr-6 text-xs sm:text-sm leading-relaxed text-muted-foreground font-sans">
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
