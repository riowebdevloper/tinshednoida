import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Download, Compass, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";

export interface HeroSlideData {
  num: string;
  image: string;
  fallback: string;
  language: string;
  langTag: string;
  headline: string;
  subheadline: string;
  projectName: string;
  location: string;
}

const slides: HeroSlideData[] = [
  {
    num: "01 / 05",
    image: "/images/hero/hero-slide-01.webp",
    fallback: "/images/hero/hero-slide-01.jpg",
    language: "English",
    langTag: "EN",
    headline: "ENGINEERED FOR SCALE.",
    subheadline:
      "Industrial sheds, structural steel and roofing solutions built for demanding commercial and industrial environments. In-house fabrication shop in Noida Sector 10 with turnkey crane erection nationwide.",
    projectName: "HEAVY INDUSTRIAL MANUFACTURING FACILITY",
    location: "NOIDA SECTOR 63 · 100 FT CLEAR SPAN",
  },
  {
    num: "02 / 05",
    image: "/images/hero/hero-slide-02.webp",
    fallback: "/images/hero/hero-slide-02.jpg",
    language: "Hindi",
    langTag: "HI",
    headline: "मजबूती और भरोसे का निर्माण — पैन इंडिया कवरेज.",
    subheadline:
      "15+ वर्षों का अनुभव, 500+ सफल प्रोजेक्ट्स। डायरेक्ट वर्कशॉप फैब्रिकेशन और 120 फीट कॉलम-फ्री स्पैन के साथ सम्पूर्ण भारत में टर्नकी इरेक्शन।",
    projectName: "LOGISTICS WAREHOUSE & GODOWN SHED",
    location: "GREATER NOIDA · 120 FT CLEAR SPAN",
  },
  {
    num: "03 / 05",
    image: "/images/hero/hero-slide-03.webp",
    fallback: "/images/hero/hero-slide-03.jpg",
    language: "Tamil",
    langTag: "TA",
    headline: "வலுவான கட்டமைப்பு பொறியியல் மற்றும் தொழில் கொட்டகைகள்.",
    subheadline:
      "தொழிற்சாலைகள், கிடங்குகள் மற்றும் கனரக எஃகு கட்டமைப்புகள். இந்தியா முழுவதும் நம்பகமான கிரேன் ஒருங்கிணைப்பு மற்றும் நேரடி தரம்.",
    projectName: "HEAVY MS PORTAL TRUSS FRAMEWORK",
    location: "FARIDABAD INDUSTRIAL AREA · IS 2062 PRIME STEEL",
  },
  {
    num: "04 / 05",
    image: "/images/hero/hero-slide-04.webp",
    fallback: "/images/hero/hero-slide-04.jpg",
    language: "Telugu",
    langTag: "TE",
    headline: "పారిశ్రామిక షెడ్లు మరియు స్టీల్ స్ట్రక్చర్ల సమగ్ర నిర్మాణం.",
    subheadline:
      "ఫ్యాక్టరీలు, గిడ్డంగులు మరియు భారీ లోహ నిర్మాణాల సమగ్ర ఇంజనీరింగ్. దేశవ్యాప్తంగా టర్న్‌కీ క్రేన్ అసెంబ్లీ మరియు నాణ్యమైన పనితనం.",
    projectName: "PRE-ENGINEERED BUILDING (PEB) COMPLEX",
    location: "GURGAON LOGISTICS PARK · TURNKEY CRANE ERECTION",
  },
  {
    num: "05 / 05",
    image: "/images/hero/hero-slide-05.webp",
    fallback: "/images/hero/hero-slide-05.jpg",
    language: "Kannada",
    langTag: "KN",
    headline: "ಉದ್ಯಮದ ಬೆಳವಣಿಗೆಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಸ್ಟೀಲ್ ಫ್ಯಾಬ್ರಿಕೇಶನ್.",
    subheadline:
      "ಉತ್ಪಾದನಾ ಘಟಕಗಳು, ಗೋದಾಮುಗಳು ಮತ್ತು ಹೆವಿ ಸ್ಟೀಲ್ ಫ್ರೇಮ್‌ವರ್ಕ್. ನೋಯ್ಡಾ ವರ್ಕ್‌ಶಾಪ್‌ನಿಂದ ನೇರ ಗುಣಮಟ್ಟದ ಭರವಸೆಯೊಂದಿಗೆ ಸ್ಥಾಪನೆ.",
    projectName: "WEATHERPROOF GALVALUME ROOFING & CANOPY",
    location: "GHAZIABAD INDUSTRIAL CLUSTER · 0.50MM SHEETING",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const active = slides[current]!;

  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      aria-label="Cinematic Hero"
      className="relative w-full h-[95vh] min-h-[640px] max-h-[1080px] bg-[#0B0D0F] text-white overflow-hidden flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ──────── BACKGROUND IMAGE CINEMATIC CROSSFADE ──────── */}
      {slides.map((slide, idx) => {
        const isCurrent = idx === current;
        return (
          <div
            key={idx}
            className={`absolute inset-0 size-full transition-opacity duration-1200 ease-out ${
              isCurrent ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
            }`}
          >
            <picture>
              <source srcSet={slide.image} type="image/webp" />
              <source srcSet={slide.fallback} type="image/jpeg" />
              <img
                src={slide.fallback}
                alt={slide.headline}
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
                className={`size-full object-cover object-center brightness-[0.32] contrast-[1.08] transition-transform duration-[7000ms] ease-out ${
                  isCurrent ? "scale-100" : "scale-104"
                }`}
              />
            </picture>

            {/* Deep Cinematic Contrast Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/45 to-[#0B0D0F]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F]/85 via-[#0B0D0F]/30 to-transparent" />
          </div>
        );
      })}

      {/* ──────── ARCHITECTURAL FOREGROUND CONTENT ──────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-36 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Eyebrow Label in JetBrains Mono */}
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="h-px w-6 bg-[#B08A4A]" />
            <span className="font-mono-tag text-[#B08A4A] tracking-widest text-xs">
              PAN INDIA INDUSTRIAL STRUCTURES
            </span>
          </div>

          {/* Massive Display Headline */}
          <h1 className="font-editorial-title text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.04] uppercase">
            {active.headline}
          </h1>

          {/* Secondary Subtitle */}
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-[#C8CCD0] font-sans leading-relaxed max-w-2xl">
            {active.subheadline}
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="btn-arch-primary"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="size-3.5" />
            </Link>

            <Link
              to="/quote"
              className="btn-arch-secondary"
            >
              <span>GET A QUOTE</span>
            </Link>

            <a
              href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#8C9398] hover:text-white transition-colors py-2 px-1"
            >
              <Download className="size-3.5 text-[#B08A4A]" />
              <span>DOWNLOAD PROJECT BROCHURE</span>
            </a>
          </div>

        </div>
      </div>

      {/* ──────── BOTTOM ARCHITECTURAL LEDGER & SLIDER CONTROLS ──────── */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pb-8">
        <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Active Project Identification */}
          <div className="flex items-center gap-4 font-mono text-xs text-[#8C9398]">
            <span className="text-[#B08A4A] font-bold tracking-widest tabular-nums">
              {active.num}
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-white font-medium truncate max-w-xs sm:max-w-md">
              {active.projectName}
            </span>
            <span className="hidden md:inline text-white/20">·</span>
            <span className="hidden md:inline text-[#8C9398]">
              {active.location}
            </span>
          </div>

          {/* Language Pills & Slider Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Multilingual Indicators */}
            <div className="flex items-center gap-1 bg-[#14171A] p-1 border border-white/10">
              {slides.map((s, idx) => (
                <button
                  key={s.langTag}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  className={`px-2 py-0.5 font-mono text-[0.6875rem] font-bold transition-all ${
                    idx === current
                      ? "bg-[#B08A4A] text-[#0B0D0F]"
                      : "text-[#8C9398] hover:text-white"
                  }`}
                  aria-label={`Switch to slide ${idx + 1} (${s.language})`}
                >
                  {s.langTag}
                </button>
              ))}
            </div>

            {/* Prev / Next Controls */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                className="flex size-8 items-center justify-center border border-white/15 bg-white/5 text-white hover:bg-white/15 transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex size-8 items-center justify-center border border-white/15 bg-white/5 text-white hover:bg-white/15 transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
