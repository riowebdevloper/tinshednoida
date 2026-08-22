import { useMemo, useState } from "react";
import { ArrowRight, Calculator, Check, FileSpreadsheet, MessageCircle, Phone, Ruler, Sparkles } from "lucide-react";
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
    <div className={`rounded-xs border border-charcoal/20 bg-card text-charcoal overflow-hidden ${embedded ? "p-5 sm:p-6" : "p-6 sm:p-8"}`}>
      
      {/* ──────── PLAIN TECHNICAL HEADER ──────── */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-charcoal font-semibold mb-1">
            <Ruler className="size-3.5 text-oxide" aria-hidden="true" />
            <span>STRUCTURAL STEEL TONNAGE &amp; BOQ ESTIMATOR</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
            Calculate Steel Tonnage &amp; Timeline
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-sans">
            Engineering calculation based on IS 2062 mild steel ratios, clear span recommendations, and crane load factors.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 rounded-xs bg-surface px-3 py-1.5 border border-border font-mono text-xs text-charcoal">
          <span className="size-1.5 rounded-full bg-safety" aria-hidden="true" />
          <span>IS 2062 Grade Formulas Active</span>
        </div>
      </div>

      {/* ──────── INPUTS & BOQ OUTPUT GRID ──────── */}
      <div className="mt-6 grid gap-6 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Form Controls (7 cols) */}
        <div className="rounded-xs border border-border bg-surface/50 p-5 sm:p-6 space-y-5 lg:col-span-7">
          
          {/* Structure Type Selection */}
          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-charcoal mb-2">
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
                      ? "border-charcoal bg-charcoal text-paper shadow-xs"
                      : "border-border bg-card text-charcoal hover:border-charcoal/60"
                  }`}
                >
                  <span className="font-display text-sm font-bold uppercase">{t.name}</span>
                  <span className={`text-xs font-mono mt-0.5 tabular-nums ${selectedType.id === t.id ? "text-safety" : "text-muted-foreground"}`}>
                    {t.rateEst} · {t.isCode}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Covered Area with Vernier Caliper Scale */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-1.5">
              <label htmlFor="area-range" className="text-xs font-mono font-semibold uppercase text-charcoal">
                Covered Area:
              </label>
              <span className="font-mono text-xs font-bold text-charcoal bg-safety px-2.5 py-0.5 rounded-xs border border-charcoal/20 tabular-nums">
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
              className="w-full h-2 bg-border rounded-xs appearance-none cursor-pointer accent-charcoal"
            />

            {/* Vernier Gauge Caliper Ticks in Monospace Tabular Nums */}
            <div className="flex justify-between text-[0.6875rem] font-mono text-muted-foreground pt-1 px-0.5 tabular-nums">
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
                      ? "border-charcoal bg-charcoal text-paper font-semibold"
                      : "border-border bg-card text-charcoal hover:border-charcoal"
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
              <label className="block text-xs font-mono font-semibold uppercase text-charcoal mb-1.5">
                Clear Eaves Height
              </label>
              <select
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full rounded-xs border border-border bg-card px-3 py-2 font-mono text-xs text-charcoal focus:border-charcoal focus:outline-none tabular-nums"
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
              <label className="block text-xs font-mono font-semibold uppercase text-charcoal mb-1.5">
                Site Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Noida Sec 63, Greater Noida..."
                className="w-full rounded-xs border border-border bg-card px-3 py-2 font-mono text-xs text-charcoal placeholder:text-muted-foreground focus:border-charcoal focus:outline-none"
              />
            </div>
          </div>

          {/* Crane Checkbox */}
          <div className="flex items-center gap-2.5 pt-1 border-t border-border">
            <input
              type="checkbox"
              id="craneCheck"
              checked={craneRequired}
              onChange={(e) => setCraneRequired(e.target.checked)}
              className="size-3.5 rounded-xs border-border bg-card text-charcoal focus:ring-charcoal accent-charcoal"
            />
            <label htmlFor="craneCheck" className="text-xs font-medium text-charcoal cursor-pointer select-none font-sans">
              Structure requires <strong>Overhead EOT Crane Support</strong> (Gantry Girder Columns)
            </label>
          </div>

        </div>

        {/* Right Column: BOQ Engineering Spec Sheet in Charcoal / IBM Plex Mono (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xs border border-charcoal bg-charcoal text-paper p-5 sm:p-6">
          
          <div>
            {/* BOQ Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs font-bold uppercase text-safety">
                BILL OF QUANTITIES (BOQ)
              </span>
              <span className="font-mono text-xs text-steel-muted tabular-nums">
                DOC: TSN-BOQ-2026
              </span>
            </div>

            {/* Calculated Steel Tonnage */}
            <div className="mt-4 p-3.5 rounded-xs bg-charcoal-deep border border-white/10">
              <span className="block text-xs font-mono text-steel-muted uppercase">
                Estimated Mild Steel Tonnage
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-safety tabular-nums">
                  ~{calculation.tonnage}
                </span>
                <span className="font-mono text-sm font-bold text-white uppercase">
                  Metric Tonnes (MT)
                </span>
              </div>
              <span className="block text-[0.6875rem] font-mono text-steel-muted mt-1 tabular-nums">
                Avg ~{calculation.approxWeightSqFt} kg / sq.ft (IS 2062 Prime Mild Steel)
              </span>
            </div>

            {/* BOQ Line Items Table in IBM Plex Mono Tabular Nums */}
            <div className="mt-4 space-y-2 font-mono text-xs">
              <div className="flex justify-between border-b border-white/10 pb-1 text-steel-muted text-[0.6875rem]">
                <span>SPECIFICATION LINE ITEM</span>
                <span>RECOMMENDATION</span>
              </div>

              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-paper/90">01. Clear Span Truss</span>
                <span className="text-safety font-bold tabular-nums">{calculation.suggestedSpan}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-paper/90">02. Erection Timeline</span>
                <span className="text-white font-bold tabular-nums">{calculation.timeline}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-paper/90">03. Anti-Rust Primer</span>
                <span className="text-galvalume">2 Coats Red Oxide (IS 2074)</span>
              </div>

              <div className="flex justify-between py-1">
                <span className="text-paper/90">04. Roofing Sheets</span>
                <span className="text-galvalume">0.50mm Galvalume / PPGL</span>
              </div>
            </div>

            {/* Inclusions */}
            <div className="mt-4 space-y-1 text-xs text-steel-muted pt-3 border-t border-white/10 font-sans">
              <div className="flex items-center gap-2">
                <Check className="size-3 text-safety shrink-0" />
                <span>Noida Yard In-House Shop Fabrication</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-3 text-safety shrink-0" />
                <span>Turnkey Hydraulic Crane Lifting &amp; On-Site Erection</span>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
            <a
              href={`https://wa.me/918527977714?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xs bg-safety px-4 py-3 font-display text-xs sm:text-sm font-bold text-charcoal uppercase tracking-wide hover:bg-yellow-400 transition-colors text-center"
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
