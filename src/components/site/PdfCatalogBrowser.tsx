import { useState } from "react";
import { ChevronLeft, ChevronRight, Download, Eye, FileText, Maximize2, Sparkles, ZoomIn, ZoomOut } from "lucide-react";
import { Link } from "@tanstack/react-router";

const TOTAL_PAGES = 51;

export function PdfCatalogBrowser() {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);

  const getPageUrl = (page: number) => {
    const padded = String(page).padStart(2, "0");
    return `/images/pdf-pages/page-${padded}.jpg`;
  };

  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, TOTAL_PAGES));
  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 25, 175));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 25, 75));

  return (
    <section
      id="catalog"
      aria-label="The Project Book 51-Page Work Catalog"
      className="relative bg-[#0A1128] text-white py-24 sm:py-36 border-b border-indigo-200/15 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#F59E0B]" />
          <span className="font-mono-tag text-[#F59E0B] text-xs font-bold">
            ARCHIVAL WORK REPOSITORY
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-[1.05]">
              THE PROJECT BOOK. <br />
              <span className="text-[#F59E0B]">51-PAGE PORTFOLIO WORKBENCH.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#8E9CB8] font-sans leading-relaxed">
            Our comprehensive 51-page structural portfolio book containing technical section drawings, load calculations, and site photographs.
          </p>
        </div>

        {/* ──────── 51-PAGE INTERACTIVE CATALOG VIEWER ──────── */}
        <div className="bg-[#101B3B] border border-indigo-200/25 rounded-[3px] overflow-hidden shadow-2xl">
          
          {/* Top Control Bar in Navy Elevated */}
          <div className="p-4 sm:p-5 bg-[#121F44] border-b border-indigo-200/20 flex flex-wrap items-center justify-between gap-4">
            
            {/* Page Status in Safety Yellow */}
            <div className="flex items-center gap-3 font-mono text-xs">
              <FileText className="size-4 text-[#F59E0B]" />
              <span className="text-white font-bold">
                DOCUMENTATION ARCHIVE:
              </span>
              <span className="px-2.5 py-0.5 bg-[#0A1128] border border-indigo-200/30 text-[#F59E0B] font-bold rounded-[2px]">
                PAGE {String(currentPage).padStart(2, "0")} / {TOTAL_PAGES}
              </span>
            </div>

            {/* Pagination & Zoom Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-3 py-1.5 border border-indigo-200/20 bg-[#101B3B] text-white hover:bg-[#1E3A8A] disabled:opacity-30 disabled:pointer-events-none font-mono text-xs rounded-[2px] transition-colors"
              >
                &larr; PREV
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={currentPage === TOTAL_PAGES}
                className="px-3 py-1.5 border border-indigo-200/20 bg-[#101B3B] text-white hover:bg-[#1E3A8A] disabled:opacity-30 disabled:pointer-events-none font-mono text-xs rounded-[2px] transition-colors"
              >
                NEXT &rarr;
              </button>

              <span className="mx-2 h-4 w-px bg-indigo-200/20 hidden sm:block" />

              <button
                type="button"
                onClick={handleZoomOut}
                className="p-1.5 border border-indigo-200/20 bg-[#101B3B] text-white hover:bg-[#1E3A8A] hidden sm:flex rounded-[2px]"
                aria-label="Zoom out"
              >
                <ZoomOut className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={handleZoomIn}
                className="p-1.5 border border-indigo-200/20 bg-[#101B3B] text-white hover:bg-[#1E3A8A] hidden sm:flex rounded-[2px]"
                aria-label="Zoom in"
              >
                <ZoomIn className="size-3.5" />
              </button>

              <a
                href="/TIN%20SHADE%20NOIDA%20WALE.pdf"
                download
                className="btn-red-primary text-[0.6875rem] py-1.5 px-3 ml-2"
              >
                <Download className="size-3.5" />
                <span>DOWNLOAD PDF</span>
              </a>
            </div>

          </div>

          {/* Catalog Canvas Area */}
          <div className="relative min-h-[420px] sm:min-h-[620px] lg:min-h-[750px] bg-[#0A1128] flex items-center justify-center p-4 sm:p-8 overflow-auto">
            <div
              className="transition-transform duration-300 shadow-2xl border border-indigo-200/20 max-w-4xl w-full bg-black rounded-[2px]"
              style={{ transform: `scale(${zoomLevel / 100})` }}
            >
              <img
                src={getPageUrl(currentPage)}
                alt={`Tin Shade Noida Work Catalog Page ${currentPage}`}
                className="w-full h-auto object-contain select-none"
                loading="eager"
              />
            </div>
          </div>

          {/* Quick Page Jump Bar */}
          <div className="p-4 bg-[#121F44] border-t border-indigo-200/20 flex items-center justify-between gap-4 font-mono text-xs">
            <div className="text-[#8E9CB8] hidden sm:block">
              Quick Navigation: 51 High-Resolution Portfolio Pages
            </div>

            <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full">
              {[1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 51].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setCurrentPage(p)}
                  className={`px-2.5 py-1 text-[0.6875rem] font-bold rounded-[2px] transition-colors ${
                    currentPage === p
                      ? "bg-[#F59E0B] text-[#0A1128]"
                      : "bg-[#101B3B] text-[#8E9CB8] hover:text-white"
                  }`}
                >
                  P.{p}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
