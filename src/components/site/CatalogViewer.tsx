import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Grid,
  Maximize2,
  MessageCircle,
  ShieldCheck,
  X,
  ZoomIn,
} from "lucide-react";
import { company } from "@/lib/site-data";
import { Reveal } from "./Reveal";

interface CatalogViewerProps {
  standalone?: boolean;
}

const TOTAL_PAGES = 51;

// Generate all 51 page image URLs
const catalogPages = Array.from({ length: TOTAL_PAGES }, (_, i) => {
  const pageNum = i + 1;
  const padNum = String(pageNum).padStart(2, "0");
  return {
    pageNumber: pageNum,
    padNum,
    image: `/images/catalog/catalog-page-${padNum}.jpg`,
    title: `Catalog Page ${pageNum} of ${TOTAL_PAGES}`,
  };
});

// Category page ranges for quick jumping
const catalogSections = [
  { label: "Overview & Intro", startPage: 1, endPage: 5 },
  { label: "Warehouse & Godowns", startPage: 6, endPage: 15 },
  { label: "Industrial Factory Sheds", startPage: 16, endPage: 25 },
  { label: "MS Structures & Trusses", startPage: 26, endPage: 35 },
  { label: "PEB & Heavy Roofing", startPage: 36, endPage: 45 },
  { label: "Site Details & Handover", startPage: 46, endPage: 51 },
];

export function CatalogViewer({ standalone = false }: CatalogViewerProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isGridOpen, setIsGridOpen] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);

  const pdfUrl = company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf";
  const activePageObj = catalogPages[currentPage - 1] ?? catalogPages[0]!;

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => (prev < TOTAL_PAGES ? prev + 1 : 1));
  }, []);

  const goToPrevPage = useCallback(() => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : TOTAL_PAGES));
  }, []);

  const goToPage = useCallback((pageNum: number) => {
    const clamped = Math.max(1, Math.min(TOTAL_PAGES, pageNum));
    setCurrentPage(clamped);
  }, []);

  // Keyboard navigation when viewer or lightbox is focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isGridOpen) {
        if (e.key === "Escape") setIsGridOpen(false);
        return;
      }
      if (isLightboxOpen) {
        if (e.key === "Escape") setIsLightboxOpen(false);
        if (e.key === "ArrowRight") goToNextPage();
        if (e.key === "ArrowLeft") goToPrevPage();
        return;
      }
      if (e.key === "ArrowRight") goToNextPage();
      if (e.key === "ArrowLeft") goToPrevPage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGridOpen, isLightboxOpen, goToNextPage, goToPrevPage]);

  // Auto-scroll thumbnail strip to center active page
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.querySelector(
        `[data-thumb-page="${currentPage}"]`,
      ) as HTMLElement | null;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [currentPage]);

  // WhatsApp inquiry text with specific page reference
  const whatsappInquiryUrl = `${company.whatsappText}&text=${encodeURIComponent(
    `Hi Tin Shade Noida, I am viewing Page ${currentPage} of your 51-page catalog. I want a quotation and technical details for this structural design.`,
  )}`;

  return (
    <section
      id="catalog"
      aria-label="Official Tin Shade Noida 51-Page Work Catalog"
      className={`relative isolate overflow-hidden bg-steel-deep text-steel-foreground border-b border-steel-line ${
        standalone ? "py-10 lg:py-14" : "py-16 lg:py-24"
      }`}
    >
      {/* Architectural blueprint background */}
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!standalone && (
          <Reveal variant="up" className="mx-auto max-w-3xl text-center">
            <p className="eyebrow flex items-center justify-center gap-3 text-primary">
              <span className="h-px w-10 rule-accent" />
              OFFICIAL 51-PAGE CATALOG
              <span className="h-px w-10 rule-accent" />
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
              51-PAGE PROJECT & STRUCTURE PORTFOLIO
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-steel-muted sm:text-lg">
              Browse all 51 verified pages of our tin shed models, warehouse designs, MS structures and real project photos across India.
            </p>
          </Reveal>
        )}

        {/* ━━━━━━━━━━━━━━━━━━━ MAIN INTERACTIVE CATALOG CONTAINER ━━━━━━━━━━━━━━━━━━━ */}
        <Reveal
          variant="up"
          delay={100}
          className={`${
            standalone ? "" : "mt-10"
          } relative overflow-hidden rounded-md border-2 border-steel-line bg-steel/90 shadow-elevated backdrop-blur-xs`}
        >
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-steel-line bg-steel px-4 py-3 sm:px-6">
            {/* Left: Badges & Page Indicator */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-xs bg-red-600 px-2.5 py-1 font-display text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                <FileText className="size-3.5" />
                OFFICIAL PDF CATALOG
              </span>
              <div className="flex items-center gap-1 font-mono text-xs font-bold text-white">
                <span className="rounded-xs bg-black/60 px-2 py-0.5 text-primary border border-primary/30">
                  Page {String(currentPage).padStart(2, "0")}
                </span>
                <span className="text-steel-muted">/</span>
                <span className="text-steel-muted">{TOTAL_PAGES}</span>
              </div>
            </div>

            {/* Right: Quick Action Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsGridOpen(true)}
                aria-label="View all 51 pages grid"
                className="inline-flex items-center gap-1.5 rounded-sm border border-steel-line bg-steel-deep px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-primary hover:text-primary"
              >
                <Grid className="size-3.5" />
                <span className="hidden sm:inline">ALL 51 PAGES</span>
              </button>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                aria-label="Zoom in / Fullscreen"
                className="inline-flex items-center gap-1.5 rounded-sm border border-steel-line bg-steel-deep px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-primary hover:text-primary"
              >
                <Maximize2 className="size-3.5" />
                <span className="hidden sm:inline">FULLSCREEN</span>
              </button>
            </div>
          </div>

          {/* Quick Category Jump Pill Bar */}
          <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto border-b border-steel-line/60 bg-steel-deep/80 px-4 py-2 text-xs">
            <span className="eyebrow text-[0.65rem] text-steel-muted shrink-0 mr-1 hidden md:inline">
              JUMP TO:
            </span>
            {catalogSections.map((sec) => {
              const isCurrentSection =
                currentPage >= sec.startPage && currentPage <= sec.endPage;
              return (
                <button
                  key={sec.label}
                  type="button"
                  onClick={() => goToPage(sec.startPage)}
                  className={`shrink-0 rounded-xs px-2.5 py-1 font-display text-[0.7rem] font-bold uppercase tracking-wider transition-all ${
                    isCurrentSection
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "bg-steel text-steel-muted hover:text-white hover:bg-steel/80"
                  }`}
                >
                  {sec.label} ({sec.startPage}-{sec.endPage})
                </button>
              );
            })}
          </div>

          {/* ──────── MAIN PAGE DISPLAY AREA ──────── */}
          <div className="relative flex min-h-[380px] sm:min-h-[500px] lg:min-h-[640px] items-center justify-center bg-black/95 p-3 sm:p-6 select-none">
            {/* Previous Page Arrow */}
            <button
              type="button"
              onClick={goToPrevPage}
              aria-label="Previous Page"
              className="absolute left-2 sm:left-4 z-20 flex size-10 sm:size-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 shadow-md"
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* Next Page Arrow */}
            <button
              type="button"
              onClick={goToNextPage}
              aria-label="Next Page"
              className="absolute right-2 sm:right-4 z-20 flex size-10 sm:size-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 shadow-md"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Clickable Main Page Image Preview with Zoom Indicator */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="group relative cursor-zoom-in max-w-full max-h-[75vh] overflow-hidden rounded-sm border border-steel-line shadow-2xl transition-transform hover:scale-[1.01]"
            >
              <img
                key={activePageObj.image}
                src={activePageObj.image}
                alt={activePageObj.title}
                loading="eager"
                decoding="sync"
                className="max-h-[72vh] w-auto max-w-full object-contain mx-auto transition-opacity duration-300"
              />

              {/* Hover Zoom Hint */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-[1px]">
                <span className="flex items-center gap-2 rounded-sm bg-black/80 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-white border border-white/20 shadow-lg">
                  <ZoomIn className="size-4 text-primary" /> CLICK TO EXPAND FULLSCREEN
                </span>
              </div>

              {/* Bottom Right Page Watermark */}
              <div className="absolute bottom-2 right-2 rounded-xs bg-black/85 px-2 py-1 font-mono text-[0.7rem] font-bold text-white/90 border border-white/10">
                Page {currentPage} / {TOTAL_PAGES}
              </div>
            </div>
          </div>

          {/* ──────── THUMBNAIL FILMSTRIP ──────── */}
          <div className="border-t border-steel-line bg-steel-deep p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="eyebrow text-[0.65rem] text-steel-muted uppercase">
                SCROLL & CLICK TO JUMP TO ANY PAGE:
              </span>
              <span className="font-mono text-xs text-primary font-bold">
                {currentPage} of {TOTAL_PAGES}
              </span>
            </div>

            <div
              ref={thumbnailContainerRef}
              className="no-scrollbar flex gap-2 overflow-x-auto py-1 snap-x"
            >
              {catalogPages.map((page) => {
                const isActive = page.pageNumber === currentPage;
                return (
                  <button
                    key={page.pageNumber}
                    type="button"
                    data-thumb-page={page.pageNumber}
                    onClick={() => goToPage(page.pageNumber)}
                    aria-label={`Go to page ${page.pageNumber}`}
                    className={`group relative shrink-0 snap-center overflow-hidden rounded-xs border-2 transition-all duration-200 ${
                      isActive
                        ? "border-primary scale-105 shadow-md ring-2 ring-primary/40"
                        : "border-steel-line opacity-65 hover:opacity-100 hover:border-steel-muted"
                    }`}
                  >
                    <img
                      src={page.image}
                      alt={`Page ${page.pageNumber}`}
                      loading="lazy"
                      className="h-16 w-12 sm:h-20 sm:w-15 object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/85 py-0.5 text-center">
                      <span className="font-mono text-[0.6rem] font-bold text-white">
                        {page.pageNumber}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ──────── BOTTOM ACTION STRIP ──────── */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 border-t border-steel-line bg-steel p-4 sm:p-6">
            <div className="flex items-center gap-2 text-xs text-steel-muted">
              <ShieldCheck className="size-4 text-primary shrink-0" />
              <span>Full 51-page high-resolution technical & project document (4.5 MB)</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              {/* Download PDF */}
              <a
                href={pdfUrl}
                download="TIN_SHADE_NOIDA_CATALOG.pdf"
                className="group inline-flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:-translate-y-0.5"
              >
                <Download className="size-4 transition-transform group-hover:-translate-y-0.5" />
                <span>DOWNLOAD PDF</span>
              </a>

              {/* Open PDF */}
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-steel-line bg-steel-deep px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-primary hover:text-primary"
              >
                <ExternalLink className="size-4" />
                <span>OPEN PDF</span>
              </a>

              {/* Inquire on WhatsApp with specific page context */}
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-emerald-500/40 bg-emerald-950/30 px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-emerald-400 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <MessageCircle className="size-4" />
                <span>ASK ABOUT PAGE {currentPage}</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* ━━━━━━━━━━━━━━━━━━━ FULL 51-PAGE GRID MODAL ━━━━━━━━━━━━━━━━━━━ */}
        {isGridOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="All 51 Pages Grid View"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setIsGridOpen(false)}
          >
            <div
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-md border border-steel-line bg-steel-deep shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Grid Header */}
              <div className="flex items-center justify-between border-b border-steel-line bg-steel px-6 py-4">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
                    ALL 51 CATALOG PAGES
                  </h3>
                  <p className="text-xs text-steel-muted">
                    Click any page thumbnail to open and view in high resolution
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsGridOpen(false)}
                  aria-label="Close grid view"
                  className="rounded-sm border border-steel-line bg-steel-deep p-2 text-steel-muted transition-colors hover:text-white hover:border-primary"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Grid Content */}
              <div className="overflow-y-auto p-4 sm:p-6">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
                  {catalogPages.map((page) => {
                    const isSelected = page.pageNumber === currentPage;
                    return (
                      <button
                        key={page.pageNumber}
                        type="button"
                        onClick={() => {
                          goToPage(page.pageNumber);
                          setIsGridOpen(false);
                        }}
                        className={`group relative overflow-hidden rounded-xs border-2 text-left transition-all ${
                          isSelected
                            ? "border-primary ring-2 ring-primary/50 shadow-md scale-102"
                            : "border-steel-line bg-black/60 hover:border-primary/60 hover:scale-105"
                        }`}
                      >
                        <img
                          src={page.image}
                          alt={`Page ${page.pageNumber}`}
                          loading="lazy"
                          className="aspect-[3/4] w-full object-cover"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-black/90 px-1 py-0.5 text-center">
                          <span className="font-mono text-[0.65rem] font-bold text-white">
                            Page {page.pageNumber}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ━━━━━━━━━━━━━━━━━━━ FULLSCREEN LIGHTBOX MODAL ━━━━━━━━━━━━━━━━━━━ */}
        {isLightboxOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Fullscreen View — Page ${currentPage}`}
            className="fixed inset-0 z-[80] flex flex-col items-center justify-between bg-black/95 p-3 sm:p-6 backdrop-blur-lg animate-in fade-in duration-200"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Top Bar */}
            <div
              className="flex w-full max-w-6xl items-center justify-between z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-xs bg-red-600 px-2.5 py-1 font-display text-xs font-bold uppercase tracking-wider text-white">
                  Page {currentPage} of {TOTAL_PAGES}
                </span>
                <span className="hidden sm:inline text-xs text-steel-muted">
                  Use Left / Right arrow keys to navigate · Esc to close
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-sm bg-emerald-600 px-3 py-1.5 font-display text-xs font-bold uppercase text-white hover:bg-emerald-500 transition-colors"
                >
                  <MessageCircle className="size-3.5" />
                  <span>Inquire Page {currentPage}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close fullscreen"
                  className="flex size-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-red-600"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Middle Zoomed Image with Prev/Next Controls */}
            <div
              className="relative flex flex-1 w-full max-w-6xl items-center justify-center overflow-hidden my-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={goToPrevPage}
                aria-label="Previous Page"
                className="absolute left-2 sm:left-4 z-20 flex size-12 items-center justify-center rounded-full bg-black/70 text-white border border-white/20 hover:bg-primary transition-all hover:scale-110"
              >
                <ChevronLeft className="size-6" />
              </button>

              <img
                src={activePageObj.image}
                alt={activePageObj.title}
                className="max-h-[82vh] max-w-full object-contain rounded-xs shadow-2xl select-none"
              />

              <button
                type="button"
                onClick={goToNextPage}
                aria-label="Next Page"
                className="absolute right-2 sm:right-4 z-20 flex size-12 items-center justify-center rounded-full bg-black/70 text-white border border-white/20 hover:bg-primary transition-all hover:scale-110"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>

            {/* Bottom Status */}
            <div
              className="flex items-center justify-center gap-4 text-xs font-mono text-steel-muted z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Tin Shade Noida Verified Portfolio</span>
              <span>·</span>
              <a
                href={pdfUrl}
                download="TIN_SHADE_NOIDA_CATALOG.pdf"
                className="text-primary hover:underline font-bold"
              >
                Download PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
