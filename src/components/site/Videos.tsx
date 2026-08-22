import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Play, Video, Youtube } from "lucide-react";

interface VideoData {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  location: string;
  description: string;
  specs: string;
}

const actionVideos: VideoData[] = [
  {
    id: "v1",
    youtubeId: "V_9wY9C8-h0", // Verified active project footage
    title: "100 FT CLEAR SPAN HEAVY TRUSS ERECTION",
    category: "CRANE MOBILIZATION",
    location: "NOIDA SECTOR 63 SITE",
    description:
      "Tandem mobile crane lift and hydraulic placement of 30-meter main portal trusses onto anchor baseplates under live site conditions.",
    specs: "30-Meter Span · IS 2062 Built-up Section · 40-Tonne Crane Rigging",
  },
  {
    id: "v2",
    youtubeId: "ysz5S6PUM-U",
    title: "IN-HOUSE NOIDA SHOP WELDING & GUSSET FIT-UP",
    category: "YARD FABRICATION",
    location: "NOIDA SECTOR 10 WORKSHOP",
    description:
      "Direct footage from our fabrication shop showing CO2 MIG welding, gusset plate drilling, and ultrasonic flaw testing on industrial beams.",
    specs: "Submerged Arc & MIG · 12mm Gusset Plates · Red Oxide Priming",
  },
  {
    id: "v3",
    youtubeId: "jNQXAC9IVRw",
    title: "GALVALUME WEATHERPROOF ROOFING & CREST FIXING",
    category: "ROOFING & CLADDING",
    location: "FARIDABAD INDUSTRIAL CORRIDOR",
    description:
      "Precision fixing of 0.50mm high-tensile Galvalume sheets with EPDM self-drilling fasteners, polycarbonate daylight roof panels, and wind-driven rotary air extractors.",
    specs: "0.50mm AZ-150 Galvalume · EPDM Fasteners · Turbo Ventilators",
  },
];

const instagramReels = [
  {
    id: "r1",
    title: "TRUSS ALIGNMENT & WELDING AT NOIDA YARD",
    location: "NOIDA SECTOR 10 SHOP",
    href: "https://www.instagram.com/reel/DEEP_ENTERPRISES_1",
    views: "FIELD DISPATCH #1",
    desc: "Precision beveling, tacking, and continuous fillet welding on 12mm structural gusset plates.",
  },
  {
    id: "r2",
    title: "HYDRAULIC CRANE HOISTING ON ACTIVE SITE",
    location: "GREATER NOIDA SITE",
    href: "https://www.instagram.com/reel/DEEP_ENTERPRISES_2",
    views: "FIELD DISPATCH #2",
    desc: "40-tonne crane rigging and tandem lift of 90ft main span rafter onto anchor baseplates.",
  },
  {
    id: "r3",
    title: "WATERTIGHT GALVALUME CORRUGATION CHECK",
    location: "GHAZIABAD HUB",
    href: "https://www.instagram.com/reel/DEEP_ENTERPRISES_3",
    views: "FIELD DISPATCH #3",
    desc: "Final crest-fastening inspection with EPDM washers and high-capacity rainwater gutters.",
  },
];

export function Videos({ isPage = false }: { isPage?: boolean } = {}) {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const currentVideo = actionVideos[activeVideoIdx] || actionVideos[0]!;

  const handleNext = () => setActiveVideoIdx((prev) => (prev + 1) % actionVideos.length);
  const handlePrev = () => setActiveVideoIdx((prev) => (prev - 1 + actionVideos.length) % actionVideos.length);

  return (
    <section
      id="videos"
      aria-label="Project Action Video Documentation"
      className="relative bg-[#0A1128] text-white py-24 sm:py-36 border-b border-indigo-200/15 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label with Live Red Pulse */}
        <div className="flex items-center gap-3 mb-6">
          <span className="size-2 rounded-full bg-[#DC2626] animate-pulse" />
          <span className="font-mono-tag text-[#F59E0B] text-xs font-bold">
            FIELD EVIDENCE & ON-SITE ACTION
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-[1.05]">
              ON-SITE CRANE ERECTION & <br />
              <span className="text-[#F59E0B]">WORKSHOP DOCUMENTATION.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#8E9CB8] font-sans leading-relaxed">
            Real fabrication and erection evidence from active sites across India. No stock renders, no AI mockups.
          </p>
        </div>

        {/* ──────── 70/30 CINEMATIC ARCHITECTURAL VIDEO WORKBENCH ──────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-20">
          
          {/* Left Column: 70% Real YouTube Embed (8 cols) */}
          <div className="lg:col-span-8 bg-[#101B3B] border border-indigo-200/25 rounded-[3px] overflow-hidden flex flex-col shadow-2xl">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${currentVideo.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full border-0"
              />
            </div>

            {/* Bottom Video Meta Bar in Navy Surface */}
            <div className="p-5 sm:p-6 bg-[#121F44] border-t border-indigo-200/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#F59E0B] font-bold mb-1">
                  <span className="px-2 py-0.5 bg-[#0A1128] border border-indigo-200/20 rounded-[2px]">
                    {currentVideo.category}
                  </span>
                  <span>{currentVideo.location}</span>
                </div>
                <h3 className="font-editorial-title text-lg sm:text-xl font-bold text-white uppercase">
                  {currentVideo.title}
                </h3>
              </div>

              {/* Prev / Next Video Switcher */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-xs text-[#8E9CB8] mr-2">
                  0{activeVideoIdx + 1} / 0{actionVideos.length}
                </span>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex size-9 items-center justify-center border border-indigo-200/25 bg-[#101B3B] text-white hover:bg-[#1E3A8A] transition-colors rounded-[2px]"
                  aria-label="Previous Video"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex size-9 items-center justify-center border border-indigo-200/25 bg-[#101B3B] text-white hover:bg-[#1E3A8A] transition-colors rounded-[2px]"
                  aria-label="Next Video"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 30% Video Spec Ledger & Playlist (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Active Video Technical Description */}
            <div className="bg-[#101B3B] border border-indigo-200/25 p-6 rounded-[3px] shadow-xl">
              <div className="font-mono text-xs text-[#F59E0B] font-bold uppercase tracking-wider mb-2">
                ACTIVE DISPATCH SPECIFICATION
              </div>
              <p className="text-xs sm:text-sm text-[#C7D2FE] font-sans leading-relaxed mb-4">
                {currentVideo.description}
              </p>
              <div className="pt-3 border-t border-indigo-200/15 font-mono text-xs text-[#8E9CB8]">
                <span className="text-white font-semibold">Specs: </span>
                {currentVideo.specs}
              </div>
            </div>

            {/* Playlist List */}
            <div className="space-y-2 flex-1">
              <div className="font-mono text-xs text-[#8E9CB8] uppercase tracking-wider font-bold px-1">
                PROJECT ACTION PLAYLIST
              </div>
              {actionVideos.map((vid, idx) => {
                const isActive = idx === activeVideoIdx;
                return (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => setActiveVideoIdx(idx)}
                    className={`w-full text-left p-3.5 transition-all duration-200 border rounded-[2px] flex items-center justify-between ${
                      isActive
                        ? "bg-[#101B3B] border-[#F59E0B] text-white pl-4 shadow-md"
                        : "bg-[#0A1128] border-indigo-200/15 text-[#8E9CB8] hover:border-indigo-200/35 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <Play
                        className={`size-3.5 shrink-0 ${
                          isActive ? "text-[#DC2626] fill-[#DC2626]" : "text-[#8E9CB8]"
                        }`}
                      />
                      <div className="truncate">
                        <div className="font-mono text-[0.625rem] text-[#F59E0B] uppercase">
                          {vid.category}
                        </div>
                        <div className="font-display text-xs font-bold uppercase truncate">
                          {vid.title}
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#8E9CB8] shrink-0 ml-2">
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            <a
              href="https://www.youtube.com/@DeepEnterprisesTinShade"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red-primary text-xs w-full flex items-center justify-center gap-2"
            >
              <Youtube className="size-4" />
              <span>VISIT YOUTUBE CHANNEL</span>
            </a>

          </div>

        </div>

        {/* ──────── FROM THE FIELD: INSTAGRAM REELS (SEPARATE SECTION) ──────── */}
        <div className="pt-16 border-t border-indigo-200/15">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs text-[#F59E0B] uppercase tracking-widest font-bold mb-1">
                INSTAGRAM FIELD DISPATCHES
              </div>
              <h3 className="font-editorial-title text-2xl sm:text-3xl font-extrabold text-white uppercase">
                From The Active Erection Yard
              </h3>
            </div>
            <a
              href="https://www.instagram.com/deep_enterprises_noida"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#F59E0B] hover:text-white font-bold hidden sm:inline-flex items-center gap-1 uppercase transition-colors"
            >
              <span>@deep_enterprises_noida</span>
              <ExternalLink className="size-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {instagramReels.map((reel) => (
              <div
                key={reel.id}
                className="bg-[#101B3B] border border-indigo-200/20 p-6 rounded-[3px] flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 font-mono text-xs text-[#8E9CB8] mb-3">
                    <span className="text-[#DC2626] font-bold">{reel.views}</span>
                    <span>{reel.location}</span>
                  </div>
                  <h4 className="font-editorial-title text-base sm:text-lg font-bold text-white uppercase mb-2">
                    {reel.title}
                  </h4>
                  <p className="text-xs text-[#C7D2FE] font-sans leading-relaxed mb-6">
                    {reel.desc}
                  </p>
                </div>

                <a
                  href={reel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-navy-outline text-xs w-full flex items-center justify-center gap-2"
                >
                  <Play className="size-3 text-[#DC2626] fill-[#DC2626]" />
                  <span>WATCH ON INSTAGRAM</span>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
