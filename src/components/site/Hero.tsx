import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Download, HardHat, Phone, ShieldCheck, CheckCircle2, Ruler } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export interface HeroSlide {
  image: string;
  fallback: string;
  language: string;
  langTag: string;
  headline: string;
  subheadline: string;
  badge: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero/hero-slide-01.webp",
    fallback: "/images/hero/hero-slide-01.jpg",
    language: "English",
    langTag: "EN",
    headline: "ENGINEERED FOR STRENGTH. BUILT FOR BUSINESS.",
    subheadline:
      "From 2,000 to 100,000+ sq. ft. manufacturing factories, logistics warehouses, and heavy MS frameworks. In-house fabrication shop in Noida Sector 10 with turnkey crane erection nationwide.",
    badge: "IN-HOUSE FABRICATION YARD · NOIDA SECTOR 10",
  },
  {
    image: "/images/hero/hero-slide-02.webp",
    fallback: "/images/hero/hero-slide-02.jpg",
    language: "Hindi",
    langTag: "HI",
    headline: "मजबूती और भरोसे का प्रतीक — सम्पूर्ण भारत में इंडस्ट्रियल शेड निर्माण",
    subheadline:
      "15+ वर्षों का अनुभव, 500+ सफल प्रोजेक्ट्स। नोएडा सेक्टर 10 वर्कशॉप से डायरेक्ट फैब्रिकेशन और ऑन-साइट हाइड्रा क्रेन इरेक्शन।",
    badge: "डायरेक्ट फैब्रिकेटर · 120 फीट कॉलम-फ्री स्पैन",
  },
  {
    image: "/images/hero/hero-slide-03.webp",
    fallback: "/images/hero/hero-slide-03.jpg",
    language: "Tamil",
    langTag: "TA",
    headline: "வலுவான தொழில்துறை கொட்டகைகள் மற்றும் கட்டமைப்பு எஃகு உற்பத்தி",
    subheadline:
      "தொழிற்சாலைகள், கிடங்குகள் மற்றும் கனரக எஃகு கட்டமைப்புகள். இந்தியா முழுவதும் நேரடி கிரேன்கள் மற்றும் நம்பகமான பொறியியல்.",
    badge: "அகில இந்திய சேவை · IS 2062 சான்றளிக்கப்பட்ட எஃகு",
  },
  {
    image: "/images/hero/hero-slide-04.webp",
    fallback: "/images/hero/hero-slide-04.jpg",
    language: "Telugu",
    langTag: "TE",
    headline: "పారిశ్రామిక షెడ్లు మరియు స్టీల్ స్ట్రక్చర్ల నమ్మకమైన నిర్మాణం",
    subheadline:
      "ఫ్యాక్టరీలు, గోడౌన్లు మరియు భారీ లోహ నిర్మాణాల సమగ్ర ఇంజనీరింగ్. దేశవ్యాప్తంగా టర్న్‌కీ క్రేన్ అసెంబ్లీ మరియు నాణ్యమైన పనితనం.",
    badge: "పాన్ ఇండియా సర్వీస్ · 500+ పూర్తయిన ప్రాజెక్ట్‌లు",
  },
  {
    image: "/images/hero/hero-slide-05.webp",
    fallback: "/images/hero/hero-slide-05.jpg",
    language: "Kannada",
    langTag: "KN",
    headline: "ಉದ್ಯಮಕ್ಕಾಗಿ ಬಲವಾದ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಇಂಡಸ್ಟ್ರಿಯಲ್ ಶೆಡ್ ನಿರ್ಮಾಣ",
    subheadline:
      "ಉತ್ಪಾದನಾ ಘಟಕಗಳು, ಗೋದಾಮುಗಳು ಮತ್ತು ಹೆವಿ ಸ್ಟೀಲ್ ಫ್ರೇಮ್‌ವರ್ಕ್. ನೋಯ್ಡಾ ವರ್ಕ್‌ಶಾಪ್‌ನಿಂದ ನೇರ ಫ್ಯಾಬ್ರಿಕೇಶನ್ ಮತ್ತು ದೇಶಾದ್ಯಂತ ಸ್ಥಾಪನೆ.",
    badge: "15+ ವರ್ಷಗಳ ಪರಿಣತಿ · ನೇರ ಗುಣಮಟ್ಟದ ಭರವಸೆ",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const activeSlide = heroSlides[current]!;

  return (
    <section
      id="top"
      aria-label="Tin Shade Noida — Industrial Steel Fabrication & Erection"
      className="relative w-full overflow-hidden bg-[#0B192C] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[75vh] lg:min-h-[82vh] w-full flex items-center justify-center">
        
        {/* ──────── BACKGROUND IMAGE SLIDER ──────── */}
        {heroSlides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`absolute inset-0 size-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
              }`}
            >
              <picture>
                <source srcSet={slide.image} type="image/webp" />
                <source srcSet={slide.fallback} type="image/jpeg" />
                <img
                  src={slide.fallback}
                  alt={slide.headline}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="sync"
                  width={1920}
                  height={900}
                  className="size-full object-cover object-center brightness-[0.34] contrast-[1.10]"
                />
              </picture>

              {/* Multi-layer Dark Gradient for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/50 to-[#0B192C]/75" />
            </div>
          );
        })}

        {/* ──────── HERO CONTENT (STRICT Z-INDEX HIERARCHY) ──────── */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 w-full">
          <div className="max-w-3xl">
            
            {/* Eyebrow / Yard Identification Tag */}
            <div className="inline-flex items-center gap-2 rounded-xs border border-white/20 bg-[#0E2A47]/90 px-3.5 py-1 text-xs font-mono text-amber-400 mb-4 shadow-sm">
              <HardHat className="size-3.5" aria-hidden="true" />
              <span className="font-semibold">{activeSlide.badge}</span>
            </div>

            {/* Main Signage Headline with smooth transition */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] min-h-[4rem] sm:min-h-[7rem]">
              {activeSlide.headline}
            </h1>

            {/* Description in Plus Jakarta Sans */}
            <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-200 max-w-2xl font-sans min-h-[3.5rem]">
              {activeSlide.subheadline}
            </p>

            {/* Action Buttons: 3 Key CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to="/quote"
                className="btn-corp-primary"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <Link
                to="/projects"
                className="btn-corp-secondary"
              >
                <span>EXPLORE OUR PROJECTS</span>
              </Link>

              <a
                href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
                download="TIN_SHADE_NOIDA_CATALOG.pdf"
                className="btn-corp-navy-outline text-xs"
              >
                <Download className="size-3.5 text-amber-400" aria-hidden="true" />
                <span>DOWNLOAD PROJECT BROCHURE</span>
              </a>
            </div>

            {/* Technical Metadata Ledger in JetBrains Mono */}
            <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-3.5 text-amber-400" />
                <span>IS 2062 Certified Prime Steel</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-amber-400" />
                <span>IS 800:2007 Structural Code</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-amber-400" />
                <span>Spans Up to <strong className="text-white tabular-nums">120 FT</strong> Column-Free</span>
              </span>
            </div>

          </div>
        </div>

        {/* ──────── SLIDER CONTROLS & MULTILINGUAL PILLS ──────── */}
        <div className="absolute bottom-6 right-4 sm:right-8 z-20 flex flex-col items-end gap-3">
          
          {/* Multilingual Slide Selector Pills */}
          <div className="flex items-center gap-1.5 bg-[#07101C]/80 backdrop-blur-xs p-1.5 rounded-xs border border-white/15">
            {heroSlides.map((slide, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={slide.langTag}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  className={`px-2.5 py-1 font-mono text-xs font-bold rounded-xs transition-all ${
                    isActive
                      ? "bg-amber-500 text-slate-950 shadow-xs"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                  aria-label={`Switch to slide ${idx + 1} (${slide.language})`}
                >
                  {slide.langTag}
                </button>
              );
            })}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={prevSlide}
              className="flex size-8 items-center justify-center rounded-xs border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous hero slide"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="flex size-8 items-center justify-center rounded-xs border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next hero slide"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

        </div>

      </div>

      <TrussDivider dark type="warren" />
    </section>
  );
}
