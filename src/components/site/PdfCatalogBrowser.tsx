import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  FileText,
  ShieldCheck,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { company } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";

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
    description: "Multi-level rooftop structural shed creating functional indoor space on commercial buildings.",
  },
  {
    page: 51,
    title: "Commercial Canopy & Walkway Cover",
    category: "Tin Roofing",
    image: "/images/selected/selected-51.jpg",
    description: "Protective architectural metal canopy for commercial entrances, walkways, and loading bays.",
  },
];

export function PdfCatalogBrowser() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentPage = catalogPages[currentPageIndex] || catalogPages[0]!;
  const pdfUrl = company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf";

  const handlePrev = () => {
    setCurrentPageIndex((prev) => (prev > 0 ? prev - 1 : catalogPages.length - 1));
  };

  const handleNext = () => {
    setCurrentPageIndex((prev) => (prev < catalogPages.length - 1 ? prev + 1 : 0));
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <section id="catalog" aria-label="The Project Book" className="bg-[#0B0D0F] text-white py-24 sm:py-36 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#B08A4A]" />
              <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
                DOCUMENTED WORK CATALOG
              </span>
            </div>
            <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              THE PROJECT BOOK.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={pdfUrl}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="btn-arch-primary text-xs inline-flex items-center gap-2"
            >
              <Download className="size-3.5" />
              <span>DOWNLOAD 51-PAGE BROCHURE</span>
            </a>
          </div>
        </div>

        {/* ──────── EDITORIAL 51-PAGE PORTFOLIO WORKBENCH ──────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Large Catalog Preview Viewport (7 cols) */}
          <div className="lg:col-span-7 bg-[#14171A] border border-white/15 p-6 flex flex-col justify-between">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs text-[#8C9398]">
              <div className="flex items-center gap-2">
                <BookOpen className="size-4 text-[#B08A4A]" />
                <span className="text-white font-bold">PAGE {currentPage.page} OF 51</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-1 hover:text-white transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="size-4" />
                </button>
                <span className="text-[0.6875rem]">{Math.round(zoomLevel * 100)}%</span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-1 hover:text-white transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="size-4" />
                </button>
              </div>
            </div>

            {/* Catalog Page Canvas */}
            <div className="my-6 relative aspect-[16/11] w-full bg-[#0B0D0F] border border-white/10 overflow-hidden flex items-center justify-center p-2">
              <div
                className="size-full transition-transform duration-300 ease-out flex items-center justify-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <picture>
                  <source srcSet={currentPage.image} type="image/jpeg" />
                  <img
                    src={currentPage.image}
                    alt={currentPage.title}
                    className="size-full object-contain"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>

            {/* Bottom Nav Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handlePrev}
                className="btn-arch-secondary text-xs inline-flex items-center gap-1.5 py-2 px-3"
              >
                <ChevronLeft className="size-3.5" />
                <span>PREVIOUS PAGE</span>
              </button>

              <span className="font-mono text-xs text-[#B08A4A] font-bold">
                PAGE {currentPage.page} / 51
              </span>

              <button
                type="button"
                onClick={handleNext}
                className="btn-arch-secondary text-xs inline-flex items-center gap-1.5 py-2 px-3"
              >
                <span>NEXT PAGE</span>
                <ChevronRight className="size-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: 51-Page Project Portfolio Ledger & Page Index (5 cols) */}
          <div className="lg:col-span-5 bg-[#14171A] border border-white/15 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-[#B08A4A] uppercase tracking-widest font-bold mb-2">
                51-PAGE PROJECT PORTFOLIO
              </div>

              <h3 className="font-editorial-title text-2xl sm:text-3xl font-extrabold text-white uppercase mb-3">
                {currentPage.title}
              </h3>

              <div className="inline-block px-2.5 py-1 bg-[#0B0D0F] border border-white/10 font-mono text-[0.6875rem] text-[#8C9398] uppercase mb-4">
                CATEGORY: {currentPage.category}
              </div>

              <p className="text-xs sm:text-sm text-[#C8CCD0] font-sans leading-relaxed mb-6">
                {currentPage.description}
              </p>

              {/* Verified Submittal Inclusions */}
              <div className="p-4 bg-[#0B0D0F] border border-white/10 space-y-2 mb-6 font-mono text-xs text-[#8C9398]">
                <div className="text-white font-bold uppercase text-[0.6875rem] mb-1">
                  OFFICIAL SUBMITTAL INCLUSIONS:
                </div>
                <div>· 51 High-Resolution Verified Project Photographs</div>
                <div>· Structural Layouts, Rafter Spans, & Foundation Drawings</div>
                <div>· IS 2062 Mill Test Certificate (MTC) Documentation</div>
              </div>
            </div>

            {/* Quick Page Jump Selector */}
            <div>
              <div className="font-mono text-[0.6875rem] text-[#8C9398] uppercase font-bold mb-2">
                KEY PAGES SELECTOR:
              </div>
              <div className="grid grid-cols-4 gap-1.5 mb-6">
                {catalogPages.map((pg, idx) => (
                  <button
                    key={pg.page}
                    type="button"
                    onClick={() => {
                      setCurrentPageIndex(idx);
                      handleResetZoom();
                    }}
                    className={`py-1.5 font-mono text-xs text-center border transition-all ${
                      idx === currentPageIndex
                        ? "bg-[#B08A4A] text-[#0B0D0F] border-[#B08A4A] font-bold"
                        : "bg-[#0B0D0F] text-[#8C9398] border-white/10 hover:text-white hover:border-white/25"
                    }`}
                  >
                    PG {pg.page}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/catalog"
                  className="btn-arch-primary text-xs flex-1 text-center"
                >
                  <span>VIEW FULL CATALOG ARCHIVE</span>
                  <ArrowRight className="size-3.5 ml-1" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
