import { useState } from "react";
import { ArrowRight, Download, FileText, Ruler, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import svcIndustrial from "@/assets/gen/svc-industrial.jpg";
import svcWarehouse from "@/assets/gen/svc-warehouse.jpg";
import svcMs from "@/assets/gen/svc-ms.jpg";
import svcRoofing from "@/assets/gen/svc-roofing.jpg";
import svcPeb from "@/assets/gen/svc-peb.jpg";
import svcRepair from "@/assets/gen/svc-repair.jpg";

interface ServiceItem {
  num: string;
  title: string;
  to: string;
  tagline: string;
  span: string;
  steel: string;
  image: string;
  applications: string[];
}

const serviceItems: ServiceItem[] = [
  {
    num: "01",
    title: "INDUSTRIAL SHEDS",
    to: "/services/industrial-shed",
    tagline: "Heavy-duty factory sheds engineered for manufacturing plants, machine workshops, and crane gantries.",
    span: "Up to 100 FT Span",
    steel: "IS 2062 Mild Steel",
    image: svcIndustrial,
    applications: ["Manufacturing Plants", "Machine Workshops", "Automotive Bays", "Foundries"],
  },
  {
    num: "02",
    title: "WAREHOUSE STRUCTURES",
    to: "/services/warehouse-shed",
    tagline: "Clear-span logistics storage godowns designed to maximize usable floor area and multi-tier pallet racking.",
    span: "Up to 120 FT Clear Span",
    steel: "Modular Tubular Trusses",
    image: svcWarehouse,
    applications: ["Logistics Parks", "E-Commerce Hubs", "FMCG Godowns", "Cold Storage"],
  },
  {
    num: "03",
    title: "MS STRUCTURES",
    to: "/services/ms-structure",
    tagline: "Custom mild steel framing, heavy column cleats, crane girder beams, and IS 816 structural welding.",
    span: "Custom Engineered",
    steel: "ISMB / ISMC Prime Steel",
    image: svcMs,
    applications: ["Crane Gantry Columns", "Plant Steelwork", "Mezzanine Floors", "Heavy Framing"],
  },
  {
    num: "04",
    title: "TIN ROOFING",
    to: "/services/tin-roofing",
    tagline: "Corrugated and trapezoidal 0.50mm Galvalume sheets, thermal PUF sandwich panels, and terrace shelters.",
    span: "Modular Roof Coverage",
    steel: "0.50mm AZ150 Galvalume",
    image: svcRoofing,
    applications: ["Factory Re-Roofing", "Commercial Terraces", "PUF Cold Rooms", "Canopies"],
  },
  {
    num: "05",
    title: "PEB STRUCTURES",
    to: "/services/peb-structure",
    tagline: "Factory-engineered portal frame PEB structures featuring tapered built-up I-sections and rapid crane assembly.",
    span: "Up to 120 FT Span",
    steel: "Grade 345 MPa Plates",
    image: svcPeb,
    applications: ["Distribution Centers", "Modular Factories", "Commercial Complexes", "High-Bay Sheds"],
  },
  {
    num: "06",
    title: "REPAIR & RENOVATION",
    to: "/services/repair-renovation",
    tagline: "Monsoon leak proofing, rusted sheet replacement, sagging truss gusset reinforcement, and warehouse extensions.",
    span: "Retrofit & Extension",
    steel: "Structural Reinforcement",
    image: svcRepair,
    applications: ["Monsoon Leak Repair", "Sheet Replacement", "Truss Strengthening", "Extensions"],
  },
];

export function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeService = serviceItems[activeIdx]!;

  return (
    <section
      id="services"
      className="bg-warm-paper py-24 sm:py-32 border-b border-[#0B0D0F]/10 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0B0D0F]/15 pb-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#B08A4A]" />
              <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="font-editorial-title text-3xl sm:text-5xl font-extrabold text-[#0B0D0F] tracking-tight uppercase leading-[1.06]">
              ENGINEERING DISCIPLINES.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#525860] font-sans max-w-md">
            Direct workshop fabrication in Sector 10 Noida paired with heavy crane erection on client sites across India.
          </p>
        </div>

        {/* ──────── EDITORIAL VERTICAL ARCHITECTURAL LIST ──────── */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Vertical Interactive List (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-[#0B0D0F]/12 border-y border-[#0B0D0F]/12">
            {serviceItems.map((svc, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={svc.num}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group py-6 sm:py-8 cursor-pointer transition-all duration-300 ${
                    isActive ? "pl-3 bg-black/[0.02]" : "hover:pl-2"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Number Stamp */}
                      <span
                        className={`font-mono text-sm sm:text-base font-bold tabular-nums transition-colors duration-300 ${
                          isActive ? "text-[#B08A4A]" : "text-[#8C9398] group-hover:text-[#0B0D0F]"
                        }`}
                      >
                        {svc.num}
                      </span>

                      <div>
                        {/* Service Title */}
                        <h3
                          className={`font-editorial-title text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight transition-colors duration-300 ${
                            isActive ? "text-[#0B0D0F]" : "text-[#525860] group-hover:text-[#0B0D0F]"
                          }`}
                        >
                          {svc.title}
                        </h3>

                        {/* Short Description */}
                        <p className="mt-2 text-xs sm:text-sm text-[#525860] font-sans max-w-lg leading-relaxed">
                          {svc.tagline}
                        </p>

                        {/* Specs & Link */}
                        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#8C9398]">
                          <span className="text-[#0B0D0F] font-semibold">{svc.span}</span>
                          <span>·</span>
                          <span>{svc.steel}</span>
                          <span>·</span>
                          <Link
                            to={svc.to}
                            className="font-bold text-[#B08A4A] hover:underline flex items-center gap-1 uppercase"
                          >
                            <span>VIEW DETAILS</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Direction Arrow */}
                    <div className="shrink-0 pt-1">
                      <Link
                        to={svc.to}
                        className={`flex size-9 items-center justify-center rounded-none border transition-all duration-300 ${
                          isActive
                            ? "border-[#0B0D0F] bg-[#0B0D0F] text-white rotate-0"
                            : "border-[#0B0D0F]/20 text-[#0B0D0F] -rotate-45 group-hover:rotate-0 group-hover:border-[#0B0D0F]"
                        }`}
                        aria-label={`Open ${svc.title}`}
                      >
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Architectural Image Showcase (5 cols) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="arch-card-light overflow-hidden p-3 bg-white border border-[#0B0D0F]/15 shadow-xl">
              
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0B0D0F]">
                <img
                  key={activeService.image}
                  src={activeService.image}
                  alt={activeService.title}
                  className="size-full object-cover transition-transform duration-700 ease-out scale-100 hover:scale-103"
                />
                <div className="absolute top-3 left-3 bg-[#0B0D0F]/90 text-white font-mono text-[0.6875rem] font-bold px-2.5 py-1 tracking-widest uppercase">
                  {activeService.num} · {activeService.title}
                </div>
              </div>

              <div className="p-4 space-y-3">
                <span className="font-mono text-[0.6875rem] text-[#8C9398] uppercase block tracking-wider font-bold">
                  TYPICAL APPLICATIONS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeService.applications.map((app) => (
                    <span
                      key={app}
                      className="px-2.5 py-1 text-xs font-mono bg-[#F3F1EC] text-[#0B0D0F] font-semibold border border-[#0B0D0F]/10"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#0B0D0F]/10 flex items-center justify-between">
                  <Link
                    to={activeService.to}
                    className="btn-arch-dark-outline text-xs py-2 px-3.5"
                  >
                    <span>Full Specifications &rarr;</span>
                  </Link>
                  <Link
                    to="/quote"
                    className="btn-arch-primary text-xs py-2 px-3.5"
                  >
                    <span>Get Quote</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
