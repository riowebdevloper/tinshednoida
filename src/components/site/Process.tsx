import { MapPin, Ruler, FileSpreadsheet, Hammer, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const fiveSteps = [
  {
    step: "01",
    title: "SITE VISIT",
    icon: MapPin,
    description:
      "Physical inspection, ground/soil assessment, site orientation, and access study for machinery and material transport.",
  },
  {
    step: "02",
    title: "MEASUREMENT & REQUIREMENT",
    icon: Ruler,
    description:
      "Precision laser measurement of clear span, eaves height, crane loads, column spacing, and ventilation requirements.",
  },
  {
    step: "03",
    title: "DESIGN & QUOTATION",
    icon: FileSpreadsheet,
    description:
      "Complete structural analysis, steel weight calculation, 2D/3D layout drawings, and transparent itemized quotation.",
  },
  {
    step: "04",
    title: "FABRICATION",
    icon: Hammer,
    description:
      "Precision cutting, high-tensile arc welding, truss alignment, and two coats of anti-rust zinc phosphate primer.",
  },
  {
    step: "05",
    title: "ERECTION & HANDOVER",
    icon: CheckCircle2,
    description:
      "Hydraulic crane lifting, base plate anchoring, roof sheet fixing, rainwater drainage alignment, and final client inspection.",
  },
];

export function Process() {
  return (
    <section id="process" className="content-auto bg-surface py-16 lg:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal className="max-w-3xl border-b border-border pb-8">
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary" />
            Execution Workflow
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl text-foreground tracking-tight">
            5-STEP PROCESS.
            <span className="block text-primary">ZERO COMPROMISES.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            From initial site survey to final erection handover  -  an organized, structured engineering workflow.
          </p>
        </Reveal>

        {/* ──────── 5-STEP TIMELINE (Horizontal on Desktop, Vertical on Mobile) ──────── */}
        <div className="relative mt-12">
          
          {/* Desktop Connecting Line */}
          <div
            className="pointer-events-none absolute top-8 left-12 right-12 hidden h-0.5 bg-border lg:block"
            aria-hidden
          />

          <ol className="grid gap-8 lg:grid-cols-5 relative">
            {fiveSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal
                  as="li"
                  key={step.step}
                  delay={i * 90}
                  className="relative flex gap-5 lg:flex-col lg:gap-6"
                >
                  {/* Step Number + Icon Circle */}
                  <div className="relative z-10 flex size-14 sm:size-16 shrink-0 items-center justify-center rounded-sm border-2 border-primary bg-background shadow-md group-hover:scale-105 transition-transform">
                    <span className="font-mono text-base font-extrabold text-primary">
                      {step.step}
                    </span>
                    <Icon className="absolute -bottom-2 -right-2 size-5 rounded-full bg-steel-deep text-white p-1 border border-border" />
                  </div>

                  {/* Content Block */}
                  <div className="flex-1">
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

      </div>
    </section>
  );
}
