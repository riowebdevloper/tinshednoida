import { MapPin, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const hubs = [
  {
    region: "NORTH ZONE (PRIMARY)",
    states: "Delhi NCR, UP, Haryana, Punjab, Rajasthan, Uttarakhand",
    turnaround: "48-HR MOBILIZATION",
    flagship: "Noida Sector 10 Central Yard & Fabrication Hub",
  },
  {
    region: "WEST ZONE",
    states: "Gujarat, Maharashtra, Madhya Pradesh",
    turnaround: "72-HR MOBILIZATION",
    flagship: "Industrial Corridor Logistics & Site Erection Teams",
  },
  {
    region: "EAST & CENTRAL ZONE",
    states: "Bihar, Jharkhand, West Bengal, Odisha, Chhattisgarh",
    turnaround: "SCHEDULED TRANSIT",
    flagship: "Heavy Structural Freight & Crane Rigging Crews",
  },
  {
    region: "SOUTH ZONE",
    states: "Telangana, Andhra Pradesh, Karnataka, Tamil Nadu",
    turnaround: "PROJECT-BASED",
    flagship: "Modular Truss Long-Haul Logistics & Fast Track Assembly",
  },
];

export function PanIndia() {
  return (
    <section id="pan-india" aria-label="Pan India Reach" className="bg-[#0B0D0F] text-white py-24 sm:py-36 border-b border-white/10 relative overflow-hidden arch-grid-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#B08A4A]" />
              <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
                PAN INDIA INDUSTRIAL STRUCTURE SOLUTIONS
              </span>
            </div>
            <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              FROM NOIDA <br />
              <span className="text-[#B08A4A]">TO INDIA.</span>
            </h2>
          </div>

          <div className="max-w-md text-sm sm:text-base text-[#8C9398] font-sans leading-relaxed">
            Direct workshop fabrication in Noida Sector 10 with dedicated long-haul structural transport and mobile hydraulic crane teams operating nationwide.
          </div>
        </div>

        {/* ──────── 4 REGIONAL LOGISTICS HUBS ──────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="arch-card-dark bg-[#14171A] p-6 sm:p-7 flex flex-col justify-between group hover:border-[#B08A4A]/60"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#8C9398] mb-4">
                  <span className="text-[#B08A4A] font-bold">ZONE 0{idx + 1}</span>
                  <MapPin className="size-4 text-[#B08A4A]" />
                </div>

                <h3 className="font-editorial-title text-lg sm:text-xl font-bold text-white uppercase mb-2">
                  {hub.region}
                </h3>

                <p className="text-xs sm:text-sm text-[#C8CCD0] font-sans leading-relaxed mb-4">
                  {hub.states}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-[0.6875rem]">
                <div className="text-[#8C9398]">
                  <span className="text-white font-bold">DISPATCH: </span>
                  {hub.turnaround}
                </div>
                <div className="text-[#8C9398] line-clamp-1">
                  {hub.flagship}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logistics Commitment Ledger */}
        <div className="mt-12 p-6 sm:p-8 bg-[#14171A] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center bg-[#0B0D0F] border border-white/10 text-[#B08A4A]">
              <Truck className="size-6" />
            </div>
            <div>
              <div className="font-editorial-title text-base sm:text-lg font-bold text-white uppercase">
                TURNKEY STRUCTURAL LOGISTICS & MOBILIZATION
              </div>
              <p className="text-xs sm:text-sm text-[#8C9398] font-sans mt-0.5">
                Every long-span truss is prefabricated into modular transport sections for rapid on-site assembly with certified crane operators.
              </p>
            </div>
          </div>

          <Link
            to="/quote"
            className="btn-arch-primary text-xs shrink-0"
          >
            <span>CHECK SITE MOBILIZATION</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
