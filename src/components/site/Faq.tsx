import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { faqs } from "@/lib/site-data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="content-auto bg-surface py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <Reveal variant="left">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Everything you <span className="text-primary">need to know</span>
              </>
            }
            sub="Costs, timelines, materials and coverage — answered before you call."
          />
        </Reveal>

        <div className="divide-y divide-border border-y border-border">

          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold uppercase text-foreground">
                    {faq.q}
                  </span>
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground">
                    {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                  </span>
                </button>
                {isOpen ? (
                  <p className="-mt-1 pb-5 pr-12 text-sm leading-relaxed text-muted-foreground">
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
