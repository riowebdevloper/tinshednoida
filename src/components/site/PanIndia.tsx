import { MapPin, Navigation, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface RegionHub {
  region: string;
  cities: string;
  capabilities: string;
}

const hubs: RegionHub[] = [
  {
    region: "NORTH REGION (HQ & FABRICATION YARD)",
    cities: "Noida · Greater Noida · Ghaziabad · Delhi NCR · Faridabad · Gurgaon · Meerut",
    capabilities: "Same-day site survey, in-house Noida fabrication yard, 24-hour crew deployment.",
  },
  {
    region: "WEST & CENTRAL INDIA",
    cities: "Rajasthan (Jaipur, Alwar, Bhiwadi) · MP (Indore, Bhopal) · Gujarat",
    capabilities: "Turnkey long-span modular trusses transported with dedicated mobile crane rigs.",
  },
  {
    region: "SOUTH & EAST INDIA",
    cities: "Hyderabad · Bengaluru · Chennai · Kolkata · Patna · Lucknow",
    capabilities: "On-site mobile welding and crane erection crews for large logistics complexes.",
  },
];

export function PanIndia() {
  return (
    <section className="bg-[#0B0D0F] text-white py-24 sm:py-36 border-b border-white/10 relative overflow-hidden arch-grid-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#B08A4A]" />
              <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
                GEOGRAPHIC REACH
              </span>
            </div>
            <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.05]">
              FROM NOIDA <br />
              TO INDIA.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#8C9398] font-sans max-w-xl">
              PAN INDIA INDUSTRIAL STRUCTURE SOLUTIONS · Engineered in Sector 10 Noida, erected with heavy hydraulic cranes across industrial corridors nationwide.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/quote"
              className="btn-arch-primary"
            >
              <span>PLAN A SITE SURVEY</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* ──────── 3 REGIONAL HUBS LEDGER ──────── */}
        <div className="grid gap-6 md:grid-cols-3">
          {hubs.map((hub) => (
            <div
              key={hub.region}
              className="arch-card-dark p-6 sm:p-8 flex flex-col justify-between bg-[#14171A] min-h-[260px] border border-white/10"
            >
              <div>
                <span className="font-mono text-[0.6875rem] font-bold text-[#B08A4A] uppercase tracking-widest block mb-2">
                  {hub.region}
                </span>
                <h3 className="font-editorial-title text-lg font-bold text-white uppercase leading-snug">
                  {hub.cities}
                </h3>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-[#8C9398] font-sans leading-relaxed">
                  {hub.capabilities}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Logistics Promise Strip */}
        <div className="mt-10 p-6 border border-white/10 bg-[#14171A] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#8C9398]">
          <div className="flex items-center gap-2 text-white">
            <Truck className="size-4 text-[#B08A4A]" />
            <span>Dedicated Heavy Transport &amp; Mobile Hydraulic Crane Fleets</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-[#B08A4A]" />
            <span>All Site Erection Inspected to IS 800:2007 Safety Codes</span>
          </div>
        </div>

      </div>
    </section>
  );
}
