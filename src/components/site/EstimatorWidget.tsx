import { useMemo, useState } from "react";
import { ArrowRight, Calculator, Check, FileSpreadsheet, MessageCircle, Phone, Sparkles, Wrench } from "lucide-react";
import { company } from "@/lib/site-data";

export interface EstimatorState {
  structureType: string;
  areaSqFt: number;
  heightFt: number;
  craneRequired: boolean;
  location: string;
}

const structureTypes = [
  { id: "factory", name: "Industrial Factory Shed", steelFactor: 4.8, rateEst: "₹280 – ₹380 / sq ft", timeFactor: 1.0 },
  { id: "warehouse", name: "Warehouse & Logistics Godown", steelFactor: 4.2, rateEst: "₹240 – ₹340 / sq ft", timeFactor: 0.9 },
  { id: "ms_structure", name: "Heavy MS Steel Structure", steelFactor: 6.5, rateEst: "Custom / MT Rate", timeFactor: 1.2 },
  { id: "puf_roofing", name: "Insulated PUF / Galvalume Roofing", steelFactor: 2.8, rateEst: "₹140 – ₹220 / sq ft", timeFactor: 0.7 },
  { id: "mezzanine", name: "Heavy Duty Mezzanine Floor", steelFactor: 8.0, rateEst: "₹350 – ₹550 / sq ft", timeFactor: 1.1 },
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
    
    // Total estimated steel in metric tonnes
    const totalKg = area * selectedType.steelFactor * craneMultiplier * heightMultiplier;
    const tonnage = (totalKg / 1000).toFixed(1);

    // Estimated work days for fabrication & erection
    const baseDays = Math.max(10, Math.round((area / 1000) * 2.5 * selectedType.timeFactor));
    const timeline = `${baseDays} – ${baseDays + 8} Working Days`;

    // Recommended foundation & clear span
    const suggestedSpan = area < 5000 ? "30 – 45 Ft Clear Span" : area < 20000 ? "50 – 80 Ft Clear Span" : "80 – 120+ Ft Clear Span";

    return {
      tonnage,
      timeline,
      suggestedSpan,
    };
  }, [area, height, craneRequired, selectedType]);

  const whatsappMessage = useMemo(() => {
    return encodeURIComponent(
      `Hello Tin Shade Noida Team,\n\nI used your Structural Cost Estimator for my project:\n` +
      `• Structure: ${selectedType.name}\n` +
      `• Covered Area: ${area.toLocaleString()} Sq. Ft.\n` +
      `• Eaves Height: ${height} Ft\n` +
      `• Overhead Crane: ${craneRequired ? "Yes Required" : "Not Required"}\n` +
      `• Site Location: ${location}\n` +
      `• Est. Steel: ~${calculation.tonnage} MT\n\n` +
      `Please share a detailed itemized quotation and schedule a site visit.`
    );
  }, [selectedType, area, height, craneRequired, location, calculation]);

  return (
    <div className={`rounded-sm border border-steel-line bg-steel-deep text-steel-foreground shadow-2xl overflow-hidden ${embedded ? "p-6 sm:p-8" : "p-6 sm:p-10"}`}>
      
      {/* Top Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-steel-line/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-xs border border-primary/40 bg-primary/10 px-2.5 py-1 text-[0.7rem] font-mono font-bold uppercase tracking-wider text-primary">
            <Calculator className="size-3.5" />
            LIVE INDUSTRIAL ESTIMATOR
          </div>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Calculate Steel Tonnage & Timeline
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-steel-muted">
            Instant engineering estimation based on IS 2062 steel ratios & standard industrial spans.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 rounded-xs bg-steel/80 px-3 py-1.5 border border-steel-line font-mono text-xs text-steel-muted">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          IS 2062 Grade Ratios Active
        </div>
      </div>

      {/* Calculator Inputs & Output Grid */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        
        {/* Left Column: Form Controls (7 cols) */}
        <div className="space-y-6 lg:col-span-7">
          
          {/* 1. Structure Type */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-steel-muted mb-2.5">
              01. Select Structure Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {structureTypes.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedType(t)}
                  className={`flex flex-col items-start rounded-xs p-3 text-left border transition-all ${
                    selectedType.id === t.id
                      ? "border-primary bg-primary/15 text-white shadow-xs"
                      : "border-steel-line bg-steel/50 text-steel-muted hover:border-steel-line/80 hover:bg-steel hover:text-white"
                  }`}
                >
                  <span className="font-display text-sm font-bold uppercase">{t.name}</span>
                  <span className="text-[0.65rem] font-mono text-primary/90 mt-0.5">{t.rateEst}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Area in Sq Ft */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-steel-muted">
                02. Covered Area (Sq. Ft.)
              </label>
              <span className="font-mono text-base font-bold text-primary">
                {area.toLocaleString()} SQ. FT.
              </span>
            </div>

            {/* Slider */}
            <input
              type="range"
              min={1000}
              max={100000}
              step={500}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-2 bg-steel rounded-lg appearance-none cursor-pointer accent-primary"
            />

            {/* Preset Buttons */}
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {presetAreas.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setArea(preset)}
                  className={`rounded-xs px-2.5 py-1 font-mono text-xs border transition-colors ${
                    area === preset
                      ? "border-primary bg-primary text-primary-foreground font-bold"
                      : "border-steel-line bg-steel/40 text-steel-muted hover:text-white"
                  }`}
                >
                  {preset.toLocaleString()} sq ft
                </button>
              ))}
            </div>
          </div>

          {/* 3. Eaves Height & Crane */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-steel-muted mb-2">
                03. Clear Eaves Height
              </label>
              <select
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full rounded-xs border border-steel-line bg-steel px-3 py-2.5 font-mono text-sm text-white focus:border-primary focus:outline-none"
              >
                <option value={15}>15 Feet (Standard Height)</option>
                <option value={18}>18 Feet (Light Industrial)</option>
                <option value={20}>20 Feet (Recommended Warehouse)</option>
                <option value={24}>24 Feet (High-Cube Racking)</option>
                <option value={30}>30 Feet (Heavy Industrial Crane)</option>
                <option value={36}>36+ Feet (Multi-tier Plant)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-steel-muted mb-2">
                04. Site Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Noida Sec 63, Greater Noida..."
                className="w-full rounded-xs border border-steel-line bg-steel px-3 py-2 font-mono text-sm text-white placeholder:text-steel-muted/50 focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Overhead Crane Toggle */}
          <div className="flex items-center gap-3 pt-1">
            <input
              type="checkbox"
              id="craneCheck"
              checked={craneRequired}
              onChange={(e) => setCraneRequired(e.target.checked)}
              className="size-4 rounded-xs border-steel-line bg-steel text-primary focus:ring-primary accent-primary"
            />
            <label htmlFor="craneCheck" className="text-xs sm:text-sm font-medium text-white cursor-pointer select-none">
              Structure must support <strong>Overhead EOT Crane</strong> (Gantry Girder Columns)
            </label>
          </div>

        </div>

        {/* Right Column: Dynamic Engineering Results Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-sm border border-primary/30 bg-steel p-6 sm:p-7 shadow-elevated">
          
          <div>
            <div className="flex items-center justify-between border-b border-steel-line pb-4">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-steel-muted">
                Preliminary Specification
              </span>
              <span className="font-mono text-[0.65rem] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-xs border border-primary/30">
                TURNKEY ESTIMATE
              </span>
            </div>

            {/* Metric 1: Steel Tonnage */}
            <div className="mt-5">
              <span className="block text-xs font-mono text-steel-muted uppercase">Estimated Structural Steel</span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-black text-white">
                  ~{calculation.tonnage}
                </span>
                <span className="font-mono text-base font-bold text-primary uppercase">
                  Metric Tonnes (MT)
                </span>
              </div>
              <span className="block text-[0.65rem] font-mono text-steel-muted mt-1">
                IS 2062 Mild Steel Channel, Tubular Trusses & Purlins
              </span>
            </div>

            {/* Metric 2: Timeline */}
            <div className="mt-5 pt-4 border-t border-steel-line grid grid-cols-2 gap-4">
              <div>
                <span className="block text-[0.7rem] font-mono text-steel-muted uppercase">Estimated Timeline</span>
                <span className="font-display text-sm font-bold text-white mt-0.5 block">
                  {calculation.timeline}
                </span>
              </div>
              <div>
                <span className="block text-[0.7rem] font-mono text-steel-muted uppercase">Clear Span Layout</span>
                <span className="font-display text-sm font-bold text-primary mt-0.5 block">
                  {calculation.suggestedSpan}
                </span>
              </div>
            </div>

            {/* Features list */}
            <div className="mt-5 space-y-1.5 text-xs text-steel-muted pt-4 border-t border-steel-line">
              <div className="flex items-center gap-2">
                <Check className="size-3.5 text-emerald-400 shrink-0" />
                <span>Includes In-Shop Fabrication & Anti-Rust Primer</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-3.5 text-emerald-400 shrink-0" />
                <span>On-Site Crane Erection & Structural Fastening</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-3.5 text-emerald-400 shrink-0" />
                <span>Free Senior Engineer Site Visit in NCR & Nationwide</span>
              </div>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="mt-6 pt-5 border-t border-steel-line space-y-2.5">
            <a
              href={`https://wa.me/918527977714?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xs bg-whatsapp px-4 py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:opacity-95 hover:scale-101"
            >
              <MessageCircle className="size-4" />
              Send Estimate to WhatsApp
            </a>

            <a
              href={`tel:+918527977714`}
              className="flex w-full items-center justify-center gap-2 rounded-xs border border-steel-line bg-steel-deep px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="size-3.5 text-primary" />
              Speak with Engineer: +91 85279 77714
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
