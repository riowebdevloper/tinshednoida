import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  FileText,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { company } from "@/lib/site-data";

export interface CatalogPageItem {
  page: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const catalogPages: CatalogPageItem[] = [
  {
    page: 1,
    title: "Industrial Storage & Fabrication Shed",
    category: "Industrial Shed",
    image: "/images/selected/selected-01.jpg",
    description: "Heavy-duty industrial tin shed built with structural steel trusses and weather-resistant GI roofing sheets.",
  },
  {
    page: 2,
    title: "Clear-Span Warehouse Shed Facility",
    category: "Warehouse",
    image: "/images/selected/selected-02.jpg",
    description: "Spacious clear-span warehouse enclosure designed for high-density inventory storage and vehicle access.",
  },
  {
    page: 3,
    title: "Heavy MS Structural Framing",
    category: "MS Structure",
    image: "/images/selected/selected-03.jpg",
    description: "Precision-welded mild steel structural framework engineered for long service life and high stability.",
  },
  {
    page: 7,
    title: "Commercial Rooftop Tin Shelter",
    category: "Tin Roofing",
    image: "/images/selected/selected-07.jpg",
    description: "Durable rooftop shed providing 100% rain and heat protection for commercial building terraces.",
  },
  {
    page: 14,
    title: "Wide-Span Factory Building Shed",
    category: "Industrial Shed",
    image: "/images/selected/selected-14.jpg",
    description: "Custom industrial workshop shed with side cladding and high eaves clearance for heavy machinery.",
  },
  {
    page: 19,
    title: "Pre-Engineered Building (PEB) Warehouse",
    category: "PEB Structure",
    image: "/images/selected/selected-19.jpg",
    description: "Factory-fabricated PEB steel building assembled rapidly on site with high structural integrity.",
  },
  {
    page: 22,
    title: "Curved Parking Shed Canopy",
    category: "Tin Roofing",
    image: "/images/selected/selected-22.jpg",
    description: "Aesthetically designed curved metal parking canopy protecting multi-car parking bays.",
  },
  {
    page: 28,
    title: "High-Bay Logistics Godown Shed",
    category: "Warehouse",
    image: "/images/selected/selected-28.jpg",
    description: "Column-free interior space designed for logistics, container loading, and pallet racking.",
  },
  {
    page: 32,
    title: "Heavy Machine Shop Shed Enclosure",
    category: "Industrial Shed",
    image: "/images/selected/selected-32.jpg",
    description: "Industrial shelter engineered with vibration resistance and daylight ventilation panels.",
  },
  {
    page: 36,
    title: "Agricultural & Raw Material Godown",
    category: "Warehouse",
    image: "/images/selected/selected-36.jpg",
    description: "Weatherproof large-capacity storage shed for bulk goods and materials.",
  },
  {
    page: 43,
    title: "Terrace Utility & Mezzanine Shed",
    category: "MS Structure",
    image: "/images/selected/selected-43.jpg",
    description: "Custom terrace extension creating covered operational space on an existing structure.",
  },
  {
    page: 47,
    title: "Custom Factory Extension Shed",
    category: "Industrial Shed",
    image: "/images/selected/selected-47.jpg",
    description: "Seamless extension connected to existing manufacturing building to double storage capacity.",
  },
  {
    page: 50,
    title: "Full Project Catalog Handover Shed",
    category: "Tin Roofing",
    image: "/images/selected/selected-50.jpg",
    description: "Complete turnkey shed project delivered with structural guarantees and clean finish.",
  },
];

export function PdfCatalogBrowser() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentPage = catalogPages[currentIndex]!;
  const pdfUrl = company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf";

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % catalogPages.length);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + catalogPages.length) % catalogPages.length);
    setZoomLevel(1);
  };

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 2.0));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.75));

  return (
    <section className="py-24 sm:py-36 border-b border-[#0B0D0F]/10 bg-warm-paper text-[#0B0D0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0B0D0F]/15 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#B08A4A]" />
              <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
                THE PROJECT BOOK
              </span>
            </div>
            <h2 className="font-editorial-title text-3xl sm:text-5xl font-extrabold text-[#0B0D0F] tracking-tight uppercase leading-[1.06]">
              51-PAGE WORK CATALOG.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#525860] font-sans max-w-2xl">
              Inspect verified case studies, truss chord schedules, and raw material certificates from our 51-page official catalog.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="btn-arch-primary text-xs"
            >
              <Download className="size-3.5" />
              <span>Download Full PDF (4.5 MB)</span>
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-arch-dark-outline text-xs"
            >
              <ExternalLink className="size-3.5" />
              <span>Open in Browser</span>
            </a>
          </div>
        </div>

        {/* ──────── INTERACTIVE CATALOG BROWSER CHROME ──────── */}
        <div className={`arch-card-light bg-white border border-[#0B0D0F]/15 shadow-xl ${isFullscreen ? "fixed inset-4 z-50 overflow-y-auto" : "p-4 sm:p-6"}`}>
          
          {/* Top Control Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0B0D0F]/10 pb-3 mb-4 font-mono text-xs text-[#0B0D0F]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#0B0D0F]">
                PAGE {currentPage.page} OF 51
              </span>
              <span className="text-[#8C9398]">·</span>
              <span className="text-[#B08A4A] font-bold">{currentPage.category}</span>
            </div>

            {/* Navigation & Zoom Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="flex size-7 items-center justify-center border border-[#0B0D0F]/20 bg-white hover:bg-slate-50 transition-colors"
                title="Previous Page"
                aria-label="Previous Page"
              >
                <ChevronLeft className="size-4" />
              </button>

              <select
                value={currentIndex}
                onChange={(e) => {
                  setCurrentIndex(Number(e.target.value));
                  setZoomLevel(1);
                }}
                className="border border-[#0B0D0F]/20 bg-[#F3F1EC] px-2 py-1 text-xs font-mono text-[#0B0D0F] focus:outline-none focus:border-[#0B0D0F]"
              >
                {catalogPages.map((p, idx) => (
                  <option key={p.page} value={idx}>
                    Page {p.page}: {p.title}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={handleNext}
                className="flex size-7 items-center justify-center border border-[#0B0D0F]/20 bg-white hover:bg-slate-50 transition-colors"
                title="Next Page"
                aria-label="Next Page"
              >
                <ChevronRight className="size-4" />
              </button>

              <div className="hidden sm:flex items-center gap-1 border-l border-[#0B0D0F]/10 pl-2">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="flex size-7 items-center justify-center border border-[#0B0D0F]/20 bg-white hover:bg-slate-50"
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="size-3.5" />
                </button>
                <span className="text-[0.6875rem] font-mono tabular-nums px-1">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="flex size-7 items-center justify-center border border-[#0B0D0F]/20 bg-white hover:bg-slate-50"
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="size-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="flex size-7 items-center justify-center border border-[#0B0D0F]/20 bg-white hover:bg-slate-50 ml-1"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                  aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Main Sheet Viewport */}
          <div className="grid gap-6 lg:grid-cols-12 items-start">
            
            {/* Image Canvas with Zoom (8 cols) */}
            <div className="lg:col-span-8 overflow-hidden border border-[#0B0D0F]/10 bg-[#F3F1EC] flex items-center justify-center p-3 min-h-[420px] max-h-[580px]">
              <div
                className="transition-transform duration-200 ease-out origin-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <img
                  src={currentPage.image}
                  alt={currentPage.title}
                  className="max-h-[520px] w-auto object-contain shadow-md"
                />
              </div>
            </div>

            {/* Right Meta & Scope (4 cols) */}
            <div className="lg:col-span-4 space-y-4 font-mono text-xs">
              <div className="p-4 border border-[#0B0D0F]/10 bg-[#F3F1EC] space-y-2">
                <span className="font-bold text-[#B08A4A] uppercase block text-[0.6875rem]">
                  SELECTED SUBMITTAL PAGE
                </span>
                <h3 className="font-editorial-title text-lg font-bold text-[#0B0D0F] uppercase leading-tight">
                  {currentPage.title}
                </h3>
                <p className="text-[#525860] font-sans text-xs leading-relaxed">
                  {currentPage.description}
                </p>
              </div>

              <div className="p-4 border border-[#0B0D0F]/10 bg-[#F3F1EC] space-y-2 text-[#525860]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-700 shrink-0" />
                  <span className="text-[#0B0D0F] font-semibold">IS 2062 Prime Mild Steel Tested</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-700 shrink-0" />
                  <span className="text-[#0B0D0F] font-semibold">Dual-Coat Red Oxide Primer (IS 2074)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-700 shrink-0" />
                  <span className="text-[#0B0D0F] font-semibold">Turnkey Crane Erection Handover</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={pdfUrl}
                  download="TIN_SHADE_NOIDA_CATALOG.pdf"
                  className="btn-arch-primary w-full text-center justify-center"
                >
                  <Download className="size-4" />
                  <span>Download Complete 51-Page PDF</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Thumbnail Strip */}
          <div className="mt-6 pt-4 border-t border-[#0B0D0F]/10">
            <span className="font-mono text-[0.6875rem] font-bold text-[#8C9398] uppercase block mb-2 tracking-wider">
              CATALOG PAGE THUMBNAILS (CLICK TO JUMP)
            </span>
            <div className="no-scrollbar flex gap-2.5 overflow-x-auto pb-2">
              {catalogPages.map((p, idx) => (
                <button
                  key={p.page}
                  type="button"
                  onClick={() => {
                    setCurrentIndex(idx);
                    setZoomLevel(1);
                  }}
                  className={`relative shrink-0 w-24 aspect-[4/3] overflow-hidden border transition-all ${
                    idx === currentIndex
                      ? "border-[#0B0D0F] ring-2 ring-[#0B0D0F] opacity-100"
                      : "border-[#0B0D0F]/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="size-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 bg-black/85 text-white font-mono text-[0.625rem] px-1 font-bold">
                    P.{p.page}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
