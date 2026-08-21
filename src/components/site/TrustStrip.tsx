import { Globe2, ShieldCheck, Users2, Hammer, Clock } from "lucide-react";
import { trustStrip } from "@/lib/site-data";

const icons = [Globe2, ShieldCheck, Users2, Hammer, Clock];

export function TrustStrip() {
  return (
    <section
      aria-label="Verified Trust Pillars"
      className="border-y border-steel-line bg-steel-deep text-steel-foreground shadow-inner"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:py-5 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {trustStrip.map((item, index) => {
            const Icon = icons[index % icons.length] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-sm border border-steel-line/60 bg-steel/60 px-3.5 py-3 transition-colors hover:border-primary/50 hover:bg-steel"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <Icon className="size-4.5" />
                </div>
                <div className="min-w-0">
                  <strong className="block font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white truncate">
                    {item.label}
                  </strong>
                  <span className="block text-[0.65rem] text-steel-muted truncate">
                    {item.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
