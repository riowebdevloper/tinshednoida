import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, HardHat, FileCheck, Truck, Clock } from "lucide-react";

interface Step {
  num: string;
  code: string;
  title: string;
  duration: string;
  description: string;
  specs: string[];
  image: string;
}

const steps: Step[] = [
  {
    num: "01",
    code: "SURVEY & TEKLA 3D",
    title: "Site Laser Topography & Structural Modeling",
    duration: "DAYS 1 - 3",
    description:
      "Laser level measurement of soil anchor baseplates, wind load calculations (IS 875 Part 3), and 3D Tekla detailing with exact BOQ steel tonnage.",
    specs: ["Total Station Survey", "Tekla 3D Connection Modeling", "Wind & Seismic Stress Analysis"],
    image: "/images/steps/step-measure.jpg",
  },
  {
    num: "02",
    code: "YARD FABRICATION",
    title: "Precision Shop Cutting, Fit-Up & Welding",
    duration: "DAYS 4 - 15",
    description:
      "In-house Noida yard fabrication using certified IS 2062 prime steel. CNC beveling, submerged arc welding, gusset plate drilling, and red oxide priming.",
    specs: ["IS 2062 Prime Mild Steel", "CO2 / Submerged Arc Welding", "100% Ultrasonic Flaw Inspection"],
    image: "/images/steps/step-design.jpg",
  },
  {
    num: "03",
    code: "HEAVY LOGISTICS",
    title: "Transport & Anchor Bolt Verification",
    duration: "DAYS 16 - 18",
    description:
      "Dedicated multi-axle trailer transport of pre-assembled truss sections, baseplates, and high-tensile fasteners directly to client site.",
    specs: ["Direct Noida Yard Dispatch", "Anchor Bolt Pull-Out Test", "Foundation Centerline Match"],
    image: "/images/steps/step-site.jpg",
  },
  {
    num: "04",
    code: "CRANE ERECTION",
    title: "Hydraulic Crane Tandem Hoisting",
    duration: "DAYS 19 - 30",
    description:
      "Mobilization of mobile hydraulic cranes. Column plumbing, main span rafter erection, purlin bracings, sag rods, and Grade 8.8 torque bolt tightening.",
    specs: ["Certified Crane Riggers", "Optical Theodolite Alignment", "Grade 8.8 High-Tensile Bolts"],
    image: "/images/steps/step-install.jpg",
  },
  {
    num: "05",
    code: "WATERTIGHT COMMISSIONING",
    title: "Roof Sheeting, Trim & Final Quality Handover",
    duration: "DAYS 31 - 45",
    description:
      "Installation of 0.50mm high-tensile Galvalume sheets, EPDM self-drilling fasteners, turbo ventilators, gutters, and final flood test handover.",
    specs: ["AZ-150 Galvalume Sheeting", "EPDM Self-Drilling Screws", "IS 800 Structural Warranty"],
    image: "/images/steps/step-install.jpg",
  },
];

export function CatalogViewer() {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep] || steps[0]!;

  return (
    <section
      aria-label="Five-Stage IS 800 Structural Execution Protocol"
      className="relative bg-[#0A1128] text-white py-24 sm:py-36 border-b border-indigo-200/15 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#F59E0B]" />
          <span className="font-mono-tag text-[#F59E0B] text-xs font-bold">
            STANDARD OPERATING PROCEDURE
          </span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-[1.05]">
              FIVE-STAGE <br />
              <span className="text-[#F59E0B]">EXECUTION PROTOCOL.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#8E9CB8] font-sans leading-relaxed">
            Every millimeter is measured, fabricated, and erected according to Bureau of Indian Standards (IS 800:2007) for guaranteed structural safety.
          </p>
        </div>

        {/* ──────── 5-STAGE INTERACTIVE WORKBENCH ──────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Stage Selector Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 transition-all duration-300 border rounded-[3px] flex items-center justify-between ${
                    isActive
                      ? "bg-[#101B3B] border-[#F59E0B] shadow-xl pl-6"
                      : "bg-[#0A1128] border-indigo-200/15 hover:border-indigo-200/40 text-[#8E9CB8]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isActive ? "text-[#F59E0B]" : "text-[#8E9CB8]"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div>
                      <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-[#8E9CB8]">
                        {step.code}
                      </div>
                      <div
                        className={`font-display text-sm font-bold uppercase ${
                          isActive ? "text-white" : "text-[#C7D2FE]"
                        }`}
                      >
                        {step.title}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded-[2px] ${
                      isActive ? "bg-[#F59E0B] text-[#0A1128]" : "bg-[#101B3B] text-[#8E9CB8]"
                    }`}
                  >
                    {step.duration}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Detail Display Panel in Navy Surface (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#101B3B] border border-indigo-200/25 p-6 sm:p-10 rounded-[3px] shadow-2xl">
              
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-indigo-200/15 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[#F59E0B] font-bold">STAGE {current.num} OF 05</span>
                  <span className="text-indigo-200/30">·</span>
                  <span className="text-[#C7D2FE] uppercase">{current.code}</span>
                </div>
                <div className="text-[#F59E0B] font-bold">TIMELINE: {current.duration}</div>
              </div>

              <h3 className="font-editorial-title text-2xl sm:text-3xl font-extrabold text-white uppercase mb-4">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-[#C7D2FE] font-sans leading-relaxed mb-8">
                {current.description}
              </p>

              {/* Technical Checks */}
              <div className="space-y-3 pt-6 border-t border-indigo-200/15 font-mono text-xs mb-8">
                <div className="text-xs text-[#8E9CB8] uppercase tracking-wider font-bold">
                  STAGE QUALITY VERIFICATIONS:
                </div>
                {current.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="size-4 text-[#F59E0B] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/quote"
                  className="btn-red-primary text-xs"
                >
                  <span>REQUEST SITE ESTIMATE</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <a
                  href="tel:+918527977714"
                  className="btn-navy-outline text-xs"
                >
                  <span>CONSULT LEAD ENGINEER</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
