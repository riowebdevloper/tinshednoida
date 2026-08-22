import { useState } from "react";
import { Calculator, ArrowRight, MessageCircle, Phone, FileText, CheckCircle2, ShieldCheck, Ruler } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";

interface ShedOption {
  type: string;
  label: string;
  kgPerSqFt: number;
  ratePerSqFt: number;
  desc: string;
}

const shedTypes: ShedOption[] = [
  {
    type: "industrial",
    label: "Industrial Factory Shed",
    kgPerSqFt: 4.8,
    ratePerSqFt: 320,
    desc: "Heavy machinery bays, high vibration resistance, overhead crane gantry support.",
  },
  {
    type: "warehouse",
    label: "Logistics Warehouse / Godown",
    kgPerSqFt: 4.2,
    ratePerSqFt: 280,
    desc: "Column-free clear span up to 120ft, optimized for forklift turning and high pallet racking.",
  },
  {
    type: "peb",
    label: "Pre-Engineered Building (PEB)",
    kgPerSqFt: 4.5,
    ratePerSqFt: 350,
    desc: "Tapered built-up portal frames, rapid bolted assembly, high-tensile 345 MPa steel.",
  },
  {
    type: "roofing",
    label: "0.50mm Galvalume Roofing / Terrace",
    kgPerSqFt: 2.2,
    ratePerSqFt: 180,
    desc: "Trapezoidal AZ150 Galvalume roof re-sheeting, PUF insulation, and terrace canopies.",
  },
];

export function EstimatorWidget() {
  const [area, setArea] = useState<number>(5000);
  const [selectedType, setSelectedType] = useState<string>("industrial");
  const [craneGantry, setCraneGantry] = useState<boolean>(false);
  const [pufInsulation, setPufInsulation] = useState<boolean>(false);

  const selected = shedTypes.find((s) => s.type === selectedType) ?? shedTypes[0]!;

  // Calculations
  const baseTonnage = (area * selected.kgPerSqFt) / 1000;
  const craneMultiplier = craneGantry ? 1.2 : 1.0;
  const totalTonnage = Math.round(baseTonnage * craneMultiplier * 10) / 10;

  const baseRate = selected.ratePerSqFt;
  const craneRateAdd = craneGantry ? 45 : 0;
  const pufRateAdd = pufInsulation ? 60 : 0;
  const totalRatePerSqFt = baseRate + craneRateAdd + pufRateAdd;

  const estimatedMinCost = Math.round((area * totalRatePerSqFt * 0.95) / 100000);
  const estimatedMaxCost = Math.round((area * totalRatePerSqFt * 1.05) / 100000);

  return (
    <div className="arch-card-light overflow-hidden bg-white border border-[#0B0D0F]/15 shadow-2xl p-6 sm:p-10 text-[#0B0D0F]">
      
      {/* Header */}
      <div className="border-b border-[#0B0D0F]/15 pb-6 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-8 bg-[#B08A4A]" />
          <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
            INTERACTIVE BOQ TOOL
          </span>
        </div>
        <h3 className="font-editorial-title text-2xl sm:text-4xl font-extrabold uppercase">
          Steel Tonnage &amp; Cost Estimator
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#525860] font-sans">
          Calculate estimated IS 2062 prime steel tonnage, metric tonnes, and budget range based on covered area and structural scope.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-12 items-start">
        
        {/* Left Column: Input Sliders & Selectors (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Structure Type Selectors */}
          <div>
            <label className="block font-mono text-xs font-bold text-[#0B0D0F] uppercase mb-2">
              1. SELECT STRUCTURE TYPE
            </label>
            <div className="grid gap-2 sm:grid-cols-2">
              {shedTypes.map((type) => (
                <button
                  key={type.type}
                  type="button"
                  onClick={() => setSelectedType(type.type)}
                  className={`p-3.5 text-left border transition-all ${
                    selectedType === type.type
                      ? "border-[#0B0D0F] bg-[#0B0D0F] text-white shadow-sm"
                      : "border-[#0B0D0F]/15 bg-[#F3F1EC] text-[#0B0D0F] hover:border-[#0B0D0F]"
                  }`}
                >
                  <span className="font-editorial-title text-xs font-bold uppercase block">
                    {type.label}
                  </span>
                  <span className={`text-[0.6875rem] font-sans block mt-1 line-clamp-2 ${selectedType === type.type ? "text-[#C8CCD0]" : "text-[#525860]"}`}>
                    {type.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Area Slider */}
          <div>
            <div className="flex items-center justify-between font-mono text-xs mb-2">
              <span className="font-bold text-[#0B0D0F] uppercase">2. COVERED AREA (SQ.FT)</span>
              <span className="font-bold text-[#B08A4A] text-sm tabular-nums">
                {area.toLocaleString()} SQ.FT
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={50000}
              step={500}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-[#B08A4A] bg-[#F3F1EC] h-2 rounded-none cursor-pointer"
            />
            <div className="flex justify-between font-mono text-[0.6875rem] text-[#8C9398] mt-1">
              <span>1,000 sq.ft</span>
              <span>25,000 sq.ft</span>
              <span>50,000+ sq.ft</span>
            </div>
          </div>

          {/* Optional Additions */}
          <div>
            <label className="block font-mono text-xs font-bold text-[#0B0D0F] uppercase mb-2">
              3. STRUCTURAL ADDITIONS
            </label>
            <div className="space-y-2 font-mono text-xs">
              <label className="flex items-center gap-3 p-3 border border-[#0B0D0F]/15 bg-[#F3F1EC] cursor-pointer">
                <input
                  type="checkbox"
                  checked={craneGantry}
                  onChange={(e) => setCraneGantry(e.target.checked)}
                  className="size-4 accent-[#B08A4A]"
                />
                <div>
                  <span className="font-bold text-[#0B0D0F] block">Include Heavy Crane Gantry Girder Columns (+20% Steel)</span>
                  <span className="text-[0.6875rem] text-[#525860]">Engineered to support 5T to 20T overhead electric traveling (EOT) cranes</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 border border-[#0B0D0F]/15 bg-[#F3F1EC] cursor-pointer">
                <input
                  type="checkbox"
                  checked={pufInsulation}
                  onChange={(e) => setPufInsulation(e.target.checked)}
                  className="size-4 accent-[#B08A4A]"
                />
                <div>
                  <span className="font-bold text-[#0B0D0F] block">Include PUF / PIR Thermal Insulation Sandwich Panels</span>
                  <span className="text-[0.6875rem] text-[#525860]">For cold storages and temperature-sensitive manufacturing bays</span>
                </div>
              </label>
            </div>
          </div>

        </div>

        {/* Right Column: BOQ Calculation Card (5 cols) */}
        <div className="lg:col-span-5 arch-card-dark p-6 sm:p-8 bg-[#0B0D0F] text-white border border-white/15 space-y-6">
          
          <div>
            <span className="font-mono text-[0.6875rem] text-[#B08A4A] font-bold uppercase tracking-widest block mb-1">
              ESTIMATED STRUCTURAL LEDGER
            </span>
            <h4 className="font-editorial-title text-xl font-bold uppercase text-white">
              Preliminary BOQ Output
            </h4>
          </div>

          <div className="border-t border-b border-white/10 py-4 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[#8C9398]">
              <span>Covered Ground Footprint:</span>
              <strong className="text-white tabular-nums">{area.toLocaleString()} sq.ft</strong>
            </div>

            <div className="flex items-center justify-between text-[#8C9398]">
              <span>Estimated Prime Steel:</span>
              <strong className="text-[#B08A4A] text-sm tabular-nums">~{totalTonnage} MT (Tonnes)</strong>
            </div>

            <div className="flex items-center justify-between text-[#8C9398]">
              <span>Avg Turnkey Rate:</span>
              <strong className="text-white tabular-nums">₹{totalRatePerSqFt} / sq.ft</strong>
            </div>
          </div>

          <div>
            <span className="font-mono text-[0.6875rem] text-[#8C9398] uppercase block mb-1">
              ESTIMATED PROJECT BUDGET RANGE:
            </span>
            <div className="font-editorial-title text-2xl sm:text-3xl font-extrabold text-white">
              ₹{estimatedMinCost} Lakh – ₹{estimatedMaxCost} Lakh
            </div>
            <p className="mt-1 text-[0.6875rem] text-[#8C9398] font-mono">
              *Includes IS 2062 steel, welding, red oxide primer &amp; crane erection. Final rate subject to site elevation survey.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/quote"
              className="btn-arch-primary w-full text-center justify-center py-3.5"
            >
              <span>Get Itemized Written BOQ</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
