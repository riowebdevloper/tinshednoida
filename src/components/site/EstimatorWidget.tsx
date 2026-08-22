import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

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
    <div className="overflow-hidden bg-[#101B3B] border border-indigo-200/25 shadow-2xl p-6 sm:p-10 text-white rounded-[3px]">
      
      {/* Header */}
      <div className="border-b border-indigo-200/15 pb-6 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-8 bg-[#F59E0B]" />
          <span className="font-mono-tag text-[#F59E0B] text-xs font-bold">
            INTERACTIVE BOQ TOOL
          </span>
        </div>
        <h3 className="font-editorial-title text-2xl sm:text-4xl font-extrabold uppercase">
          Steel Tonnage &amp; Cost Estimator
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#8E9CB8] font-sans">
          Calculate estimated IS 2062 prime steel tonnage, metric tonnes, and budget range based on covered area and structural scope.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-12 items-start">
        
        {/* Left Column: Input Sliders & Selectors (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Structure Type Selectors */}
          <div>
            <label className="block font-mono text-xs font-bold text-white uppercase mb-2">
              1. SELECT STRUCTURE TYPE
            </label>
            <div className="grid gap-2 sm:grid-cols-2">
              {shedTypes.map((type) => (
                <button
                  key={type.type}
                  type="button"
                  onClick={() => setSelectedType(type.type)}
                  className={`p-3.5 text-left border rounded-[2px] transition-all ${
                    selectedType === type.type
                      ? "border-[#F59E0B] bg-[#0A1128] text-white shadow-md"
                      : "border-indigo-200/20 bg-[#0A1128]/70 text-[#C7D2FE] hover:border-indigo-200/40"
                  }`}
                >
                  <div className="font-editorial-title text-sm font-bold uppercase">{type.label}</div>
                  <div className="font-mono text-[0.625rem] text-[#F59E0B] mt-1">~{type.kgPerSqFt} kg / sq.ft</div>
                </button>
              ))}
            </div>
          </div>

          {/* Area Slider */}
          <div>
            <div className="flex items-center justify-between font-mono text-xs mb-2">
              <label className="font-bold text-white uppercase">
                2. ESTIMATED COVERED AREA (SQ FT)
              </label>
              <span className="text-[#F59E0B] font-bold text-sm tabular-nums">
                {area.toLocaleString()} SQ FT
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={50000}
              step={500}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-[#F59E0B] bg-[#0A1128] h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between font-mono text-[0.625rem] text-[#8E9CB8] mt-1">
              <span>1,000 sq ft</span>
              <span>25,000 sq ft</span>
              <span>50,000+ sq ft</span>
            </div>
          </div>

          {/* Structural Add-ons */}
          <div className="space-y-3 pt-2">
            <label className="block font-mono text-xs font-bold text-white uppercase">
              3. ADDITIONAL STRUCTURAL PROVISIONS
            </label>
            <div className="flex flex-col sm:flex-row gap-3 font-mono text-xs">
              <label className="flex items-center gap-2.5 p-3 bg-[#0A1128] border border-indigo-200/20 rounded-[2px] cursor-pointer flex-1">
                <input
                  type="checkbox"
                  checked={craneGantry}
                  onChange={(e) => setCraneGantry(e.target.checked)}
                  className="accent-[#F59E0B] size-4"
                />
                <span>Include Overhead EOT Crane Gantry</span>
              </label>
              <label className="flex items-center gap-2.5 p-3 bg-[#0A1128] border border-indigo-200/20 rounded-[2px] cursor-pointer flex-1">
                <input
                  type="checkbox"
                  checked={pufInsulation}
                  onChange={(e) => setPufInsulation(e.target.checked)}
                  className="accent-[#F59E0B] size-4"
                />
                <span>Include PUF Insulation Panels</span>
              </label>
            </div>
          </div>

        </div>

        {/* Right Column: Dynamic Estimates Result Card (5 cols) */}
        <div className="lg:col-span-5 bg-[#0A1128] border border-indigo-200/20 p-6 sm:p-8 rounded-[3px] shadow-2xl">
          <span className="font-mono text-xs font-bold text-[#F59E0B] uppercase tracking-wider block mb-4 border-b border-indigo-200/15 pb-2">
            ESTIMATED PROJECT METRICS
          </span>

          <div className="space-y-4 font-mono text-xs">
            <div>
              <span className="text-[#8E9CB8] block text-[0.6875rem]">APPROX. STEEL WEIGHT</span>
              <div className="font-editorial-title text-3xl sm:text-4xl font-extrabold text-white">
                <span className="text-[#F59E0B]">{totalTonnage}</span> <span className="text-base text-[#8E9CB8]">METRIC TONNES</span>
              </div>
            </div>

            <div className="pt-3 border-t border-indigo-200/15">
              <span className="text-[#8E9CB8] block text-[0.6875rem]">APPROX. TURNKEY COST</span>
              <div className="font-editorial-title text-2xl sm:text-3xl font-extrabold text-white">
                ₹{estimatedMinCost} - ₹{estimatedMaxCost} <span className="text-base text-[#8E9CB8]">LAKHS</span>
              </div>
              <p className="text-[0.6875rem] text-[#8E9CB8] font-sans mt-1">
                Includes IS 2062 prime steel, welding, red oxide priming, and turnkey mobile crane erection.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-indigo-200/15">
            <Link
              to="/quote"
              className="btn-red-primary text-xs w-full flex items-center justify-center gap-2"
            >
              <span>LOCK YARD ESTIMATE FOR THIS SPEC</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
