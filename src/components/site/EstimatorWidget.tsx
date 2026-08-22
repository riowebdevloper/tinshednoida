import { useMemo, useState } from "react";
import { ArrowRight, Calculator, Check, FileSpreadsheet, MessageCircle, Phone, Ruler, Sparkles, ShieldCheck } from "lucide-react";
import { company } from "@/lib/site-data";

export interface EstimatorState {
  structureType: string;
  areaSqFt: number;
  heightFt: number;
  craneRequired: boolean;
  location: string;
}

const structureTypes = [
  { id: "factory", name: "Industrial Factory Shed", steelFactor: 4.8, rateEst: "₹280 – ₹380 / sq ft", timeFactor: 1.0, isCode: "IS 800:2007" },
  { id: "warehouse", name: "Warehouse & Logistics Godown", steelFactor: 4.2, rateEst: "₹240 – ₹340 / sq ft", timeFactor: 0.9, isCode: "IS 875 (Wind)" },
  { id: "ms_structure", name: "Heavy MS Steel Framework", steelFactor: 6.5, rateEst: "Custom / MT Rate", timeFactor: 1.2, isCode: "IS 2062 E250" },
  { id: "puf_roofing", name: "Insulated PUF & Galvalume Roof", steelFactor: 2.8, rateEst: "₹140 – ₹220 / sq ft", timeFactor: 0.7, isCode: "0.50mm PPGL" },
  { id: "mezzanine", name: "Heavy Duty Mezzanine Floor", steelFactor: 8.0, rateEst: "₹350 – ₹550 / sq ft", timeFactor: 1.1, isCode: "1000 kg/sqm" },
];

const presetAreas = [2500, 5000, 10000, 20000, 50000];

export function EstimatorWidget({ embedded = false }: { embedded?: boolean }) {
  const [selectedType, setSelectedType] = useState(structureTypes[0]!);
  const [area, setArea] = useState<number>(5000);
  const [height, setHeight] = useState<number>(20);
  const [craneRequired, setCraneRequired] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("Noida / NCR");

  const calculation = useMemo(() => {
    const craneMultiplier = craneRequired ? 1.25 : 1.0;
    const heightMultiplier = height > 20 ? 1 + (height - 20) * 0.015 : 1.0;
    
    // Total estimated structural steel in metric tonnes
    const totalKg = area * selectedType.steelFactor * craneMultiplier * heightMultiplier;
    const tonnage = (totalKg / 1000).toFixed(1);

    // Estimated work days for fabrication & erection
    const baseDays = Math.max(10, Math.round((area / 1000) * 2.5 * selectedType.timeFactor));
    const timeline = `${baseDays} – ${baseDays + 8} Working Days`;

    // Recommended clear span recommendation
    const suggestedSpan = area < 5000 ? "30 – 45 Ft Clear Span" : area < 20000 ? "50 – 80 Ft Clear Span" : "80 – 120+ Ft Clear Span";

    return {
      tonnage,
      timeline,
      suggestedSpan,
      approxWeightSqFt: (totalKg / area).toFixed(2),
    };
  }, [area, height, craneRequired, selectedType]);

  const whatsappMessage = useMemo(() => {
    return encodeURIComponent(
      `Hello Tin Shade Noida Team,\n\nI calculated structural steel tonnage for my project:\n` +
      `• Structure: ${selectedType.name}\n` +
      `• Covered Area: ${area.toLocaleString()} Sq. Ft.\n` +
      `• Clear Eaves Height: ${height} Ft\n` +
      `• Overhead Crane: ${craneRequired ? "Yes (Gantry Columns)" : "No"}\n` +
      `• Site Location: ${location}\n` +
      `• Est. Steel Tonnage: ~${calculation.tonnage} MT (IS 2062)\n\n` +
      `Please provide an official BOQ quotation and schedule a site inspection.`
    );
  }, [selectedType, area, height, craneRequired, location, calculation]);

  return (
    <div className={`spec-plate-navy text-white overflow-hidden ${embedded ? "p-5 sm:p-6" : "p-6 sm:p-8"}`}>
      
      {/* ──────── TECHNICAL HEADER ──────── */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
            <Ruler className="size-3.5" aria-hidden="true" />
            <span>STRUCTURAL STEEL TONNAGE &amp; BOQ ESTIMATOR</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Calculate Steel Tonnage &amp; Erection Timeline
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-300 font-sans">
            Engineering calculation based on IS 2062 mild steel ratios, clear span recommendations, and crane load factors.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 rounded-xs bg-white/5 px-3 py-1.5 border border-white/10 font-mono text-xs text-slate-300">
          <ShieldCheck className="size-3.5 text-amber-400" aria-hidden="true" />
          <span>IS 2062 Formulas Active</span>
        </div>
      </div>

      {/* ──────── INPUTS & BOQ OUTPUT GRID ──────── */}
      <div className="mt-6 grid gap-6 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Form Controls (7 cols) */}
        <div className="rounded-xs border border-white/10 bg-[#0B1320] p-5 sm:p-6 space-y-5 lg:col-span-7">
          
          {/* Structure Type Selection */}
          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-2">
              Structure Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {structureTypes.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedType(t)}
                  className={`flex flex-col items-start rounded-xs p-2.5 text-left border transition-all ${
                    idx === structureTypes.length - 1 ? "sm:col-span-2" : ""
                  } ${
                    selectedType.id === t.id
                      ? "border-sky-400 bg-sky-500/15 text-white shadow-xs"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20"
                  }`}
                >
                  <span className="font-display text-sm font-bold">{t.name}</span>
                  <span className={`text-xs font-mono mt-0.5 tabular-nums ${selectedType.id === t.id ? "text-amber-400" : "text-slate-400"}`}>
                    {t.rateEst} · {t.isCode}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Covered Area with Vernier Caliper Scale */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-1.5">
              <label htmlFor="area-range" className="text-xs font-mono font-semibold uppercase text-slate-300">
                Covered Area:
              </label>
              <span className="font-mono text-xs font-bold text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-xs tabular-nums">
                {area.toLocaleString()} SQ. FT.
              </span>
            </div>

            {/* Slider */}
            <input
              id="area-range"
              type="range"
              min={1000}
              max={100000}
              step={500}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-xs appearance-none cursor-pointer accent-amber-400"
            />

            {/* Vernier Gauge Caliper Ticks in Monospace Tabular Nums */}
            <div className="flex justify-between text-[0.6875rem] font-mono text-slate-400 pt-1 px-0.5 tabular-nums">
              <span>1,000 sq.ft</span>
              <span>10,000</span>
              <span>25,000</span>
              <span>50,000</span>
              <span>100,000 sq.ft</span>
            </div>

            {/* Preset Buttons */}
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {presetAreas.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setArea(preset)}
                  className={`rounded-xs px-2.5 py-1 font-mono text-xs border tabular-nums transition-all ${
                    area === preset
                      ? "border-sky-400 bg-sky-500/20 text-white font-semibold"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20"
                  }`}
                >
                  {preset.toLocaleString()} sq ft
                </button>
              ))}
            </div>
          </div>

          {/* Clear Height & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-1.5">
                Clear Eaves Height
              </label>
              <select
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full rounded-xs border border-white/15 bg-[#0E1726] px-3 py-2 font-mono text-xs text-white focus:border-sky-400 focus:outline-none tabular-nums"
              >
                <option value={15}>15 Feet (Standard Height)</option>
                <option value={18}>18 Feet (Light Industrial)</option>
                <option value={20}>20 Feet (Recommended Warehouse)</option>
                <option value={24}>24 Feet (High-Cube Racking)</option>
                <option value={30}>30 Feet (Heavy Crane Bay)</option>
                <option value={36}>36+ Feet (Multi-tier Plant)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-1.5">
                Site Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Noida Sec 63, Greater Noida..."
                className="w-full rounded-xs border border-white/15 bg-[#0E1726] px-3 py-2 font-mono text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Crane Checkbox */}
          <div className="flex items-center gap-2.5 pt-1 border-t border-white/10">
            <input
              type="checkbox"
              id="craneCheck"
              checked={craneRequired}
              onChange={(e) => setCraneRequired(e.target.checked)}
              className="size-3.5 rounded-xs border-white/20 bg-slate-900 text-amber-400 focus:ring-sky-400 accent-amber-400"
            />
            <label htmlFor="craneCheck" className="text-xs font-medium text-slate-300 cursor-pointer select-none font-sans">
              Structure requires <strong className="text-white">Overhead EOT Crane Support</strong> (Gantry Girder Columns)
            </label>
          </div>

        </div>

        {/* Right Column: BOQ Engineering Spec Sheet in Deep Navy & Monospace (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xs border border-sky-400/20 bg-[#080D1A] p-5 sm:p-6 shadow-xl">
          
          <div>
            {/* BOQ Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs font-bold uppercase text-amber-400">
                BILL OF QUANTITIES (BOQ)
              </span>
              <span className="font-mono text-xs text-slate-400 tabular-nums">
                DOC: TSN-BOQ-2026
              </span>
            </div>

            {/* Calculated Steel Tonnage */}
            <div className="mt-4 p-4 rounded-xs bg-[#0E1726] border border-white/10">
              <span className="block text-xs font-mono text-slate-400 uppercase">
                Estimated Mild Steel Tonnage
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-amber-400 tabular-nums">
                  ~{calculation.tonnage}
                </span>
                <span className="font-mono text-sm font-bold text-white uppercase">
                  Metric Tonnes (MT)
                </span>
              </div>
              <span className="block text-[0.6875rem] font-mono text-slate-400 mt-1 tabular-nums">
                Avg ~{calculation.approxWeightSqFt} kg / sq.ft (IS 2062 Prime Mild Steel)
              </span>
            </div>

            {/* BOQ Line Items Table in JetBrains Mono */}
            <div className="mt-4 space-y-2 font-mono text-xs">
              <div className="flex justify-between border-b border-white/10 pb-1 text-slate-400 text-[0.6875rem]">
                <span>SPECIFICATION LINE ITEM</span>
                <span>RECOMMENDATION</span>
              </div>

              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">01. Clear Span Truss</span>
                <span className="text-sky-300 font-bold tabular-nums">{calculation.suggestedSpan}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">02. Erection Timeline</span>
                <span className="text-white font-bold tabular-nums">{calculation.timeline}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-300">03. Anti-Rust Primer</span>
                <span className="text-slate-200">2 Coats Red Oxide (IS 2074)</span>
              </div>

              <div className="flex justify-between py-1">
                <span className="text-slate-300">04. Roofing Sheets</span>
                <span className="text-slate-200">0.50mm Galvalume / PPGL</span>
              </div>
            </div>

            {/* Inclusions */}
            <div className="mt-4 space-y-1 text-xs text-slate-400 pt-3 border-t border-white/10 font-sans">
              <div className="flex items-center gap-2">
                <Check className="size-3 text-emerald-400 shrink-0" />
                <span>Noida Yard In-House Shop Fabrication</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-3 text-emerald-400 shrink-0" />
                <span>Turnkey Hydraulic Crane Lifting &amp; On-Site Erection</span>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="mt-5 pt-4 border-t border-white/10">
            <a
              href={`https://wa.me/918527977714?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xs bg-emerald-500 hover:bg-emerald-600 px-4 py-3 font-display text-xs sm:text-sm font-bold text-slate-950 uppercase tracking-wide transition-colors text-center shadow-lg"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              <span>Send BOQ to WhatsApp &amp; Request Survey</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
