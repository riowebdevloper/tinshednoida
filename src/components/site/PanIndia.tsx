import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Truck, ShieldCheck, Clock } from "lucide-react";

interface Hub {
  region: string;
  city: string;
  leadTime: string;
  coverage: string;
  recentProject: string;
}

const hubs: Hub[] = [
  {
    region: "NORTH CORRIDOR",
    city: "NOIDA SECTOR 10 (HQ & YARD)",
    leadTime: "24-48 HRS MOBILIZATION",
    coverage: "Delhi NCR, Greater Noida, Ghaziabad, Faridabad, Gurgaon, Meerut",
    recentProject: "45,000 SQ FT Manufacturing Shed, Sector 63",
  },
  {
    region: "WESTERN LOGISTICS BELT",
    city: "RAJASTHAN & GUJARAT HUB",
    leadTime: "3-5 DAYS MOBILIZATION",
    coverage: "Jaipur, Bhiwadi, Neemrana, Ahmedabad, Sanand, Surat Industrial Corridors",
    recentProject: "60,000 SQ FT Warehouse PEB Complex, Bhiwadi",
  },
  {
    region: "CENTRAL & EASTERN CORRIDOR",
    city: "UP & BIHAR INDUSTRIAL HUBS",
    leadTime: "3-5 DAYS MOBILIZATION",
    coverage: "Lucknow, Kanpur, Varanasi, Patna, Jamshedpur, Ranchi Logistics Parks",
    recentProject: "35,000 SQ FT Cold Storage Godown, Kanpur",
  },
  {
    region: "SOUTHERN & EXTENDED PAN INDIA",
    city: "CROSS-COUNTRY DISPATCH",
    leadTime: "5-7 DAYS MOBILIZATION",
    coverage: "Maharashtra, Telangana, Karnataka, Tamil Nadu via Multi-Axle Fleets",
    recentProject: "Turnkey Heavy Crane Erection Support Across State Borders",
  },
];

export function PanIndia() {
  return (
    <section
      aria-label="Pan India Logistics and Mobilization"
      className="relative bg-[#0A1128] text-white py-24 sm:py-36 border-b border-indigo-200/15 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#F59E0B]" />
          <span className="font-mono-tag text-[#F59E0B] text-xs font-bold">
            MOBILIZATION NETWORK
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-[1.05]">
              FROM NOIDA <br />
              <span className="text-[#F59E0B]">TO ALL OF INDIA.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#8E9CB8] font-sans leading-relaxed">
            Direct workshop fabrication in Noida Sector 10 combined with multi-axle freight and mobile hydraulic crane mobilization to your site anywhere in India.
          </p>
        </div>

        {/* ──────── 4 REGIONAL LOGISTICS HUBS IN NAVY SURFACE ──────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="bg-[#101B3B] border border-indigo-200/25 p-6 sm:p-8 rounded-[3px] shadow-xl flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 font-mono text-xs text-[#8E9CB8] mb-4">
                  <span className="text-[#F59E0B] font-bold">HUB 0{idx + 1}</span>
                  <MapPin className="size-3.5 text-[#DC2626]" />
                </div>

                <div className="font-mono text-[0.6875rem] text-[#F59E0B] font-bold uppercase tracking-wider mb-1">
                  {hub.region}
                </div>
                <h3 className="font-editorial-title text-lg sm:text-xl font-bold text-white uppercase mb-3">
                  {hub.city}
                </h3>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0A1128] border border-indigo-200/20 font-mono text-[0.6875rem] text-white font-semibold rounded-[2px] mb-4">
                  <Clock className="size-3 text-[#F59E0B]" />
                  <span>{hub.leadTime}</span>
                </div>

                <p className="text-xs text-[#C7D2FE] font-sans leading-relaxed mb-4">
                  {hub.coverage}
                </p>
              </div>

              <div className="pt-4 border-t border-indigo-200/15 font-mono text-[0.6875rem] text-[#8E9CB8]">
                <span className="text-white font-semibold">Track Record: </span>
                {hub.recentProject}
              </div>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="mt-12 pt-8 border-t border-indigo-200/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#8E9CB8]">
            Equipped with Heavy Multi-Axle Fleet & Hydraulic Crane Partner Networks
          </div>
          <Link
            to="/quote"
            className="btn-red-primary text-xs"
          >
            <span>CHECK MOBILIZATION TIMELINE FOR YOUR PINCODE</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
