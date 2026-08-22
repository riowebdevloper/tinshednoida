import { useState } from "react";
import { Youtube, Instagram, Play, ExternalLink, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { videos } from "@/lib/site-data";

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  location: string;
  description: string;
  specs: string;
}

const actionVideos: VideoItem[] = [
  {
    id: "v1",
    youtubeId: "jZ_y-D4-H7U",
    title: "100 FT CLEAR SPAN HEAVY PORTAL TRUSS ERECTION",
    category: "HEAVY INDUSTRIAL SHED",
    location: "NOIDA SECTOR 63",
    description:
      "Direct footage of our mobile hydraulic crane crew hoisting pre-welded 100-foot mild steel truss sections onto 8-meter columns. In-house fabrication from our Noida Sector 10 yard.",
    specs: "100 Ft Clear Span · 8.8 High-Tensile Fasteners · 40T Mobile Crane",
  },
  {
    id: "v2",
    youtubeId: "oHg5SJYRHA0",
    title: "PRE-ENGINEERED BUILDING WAREHOUSE LOGISTICS GODOWN",
    category: "WAREHOUSE STRUCTURE",
    location: "GREATER NOIDA LOGISTICS PARK",
    description:
      "Rapid turnkey erection of a 25,000 sq ft logistics warehouse with column-free clear span, automated crane assembly, and high-tensile bolted foundation anchor cages.",
    specs: "120 Ft Clear Span · 25,000 Sq Ft Floor · Fast Track Delivery",
  },
  {
    id: "v3",
    youtubeId: "36YnV9STBqc",
    title: "WEATHERPROOF GALVALUME ROOFING & DAYLIGHT STRIP INSTALLATION",
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
    <section id="videos" aria-label="Field Action Videos" className="bg-[#0B0D0F] text-white border-b border-white/10 overflow-hidden">
      
      {/* ──────── PART 1: YOUTUBE CINEMATIC 70/30 PLAYER ──────── */}
      <div className="py-24 sm:py-36 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow & Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#B08A4A]" />
                <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
                  DOCUMENTED SITE EVIDENCE
                </span>
              </div>
              <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.05]">
                SEE THE WORK <br />
                <span className="text-[#B08A4A]">IN ACTION.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://www.youtube.com/@DeepEnterprises-yu2vo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-arch-secondary text-xs inline-flex items-center gap-2"
              >
                <Youtube className="size-4 text-red-500" />
                <span>OFFICIAL YOUTUBE CHANNEL</span>
                <ExternalLink className="size-3 text-[#8C9398]" />
              </a>
            </div>
          </div>

          {/* 70% Real YouTube Player / 30% Project Information */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* 70% Video Viewport Container (8 cols) */}
            <div className="lg:col-span-8 bg-[#14171A] border border-white/15 overflow-hidden flex flex-col justify-between">
              <div className="relative aspect-[16/9] w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${currentVideo.youtubeId}?rel=0&modestbranding=1`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="size-full border-0"
                  loading="lazy"
                />
              </div>

              {/* Video Selector Footer */}
              <div className="p-4 bg-[#0B0D0F] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#8C9398]">
                  <span className="text-[#B08A4A] font-bold">0{activeVideoIdx + 1} / 0{actionVideos.length}</span>
                  <span>·</span>
                  <span className="text-white truncate max-w-xs">{currentVideo.category}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex size-7 items-center justify-center border border-white/15 bg-white/5 text-white hover:bg-white/15 transition-colors"
                    aria-label="Previous Video"
                  >
                    <ChevronLeft className="size-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex size-7 items-center justify-center border border-white/15 bg-white/5 text-white hover:bg-white/15 transition-colors"
                    aria-label="Next Video"
                  >
                    <ChevronRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* 30% Project Information & Technical Ledger (4 cols) */}
            <div className="lg:col-span-4 bg-[#14171A] border border-white/15 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[0.6875rem] text-[#B08A4A] uppercase tracking-widest font-bold mb-1">
                  PROJECT ACTION VIDEO
                </div>
                <div className="font-mono text-xs text-[#8C9398] uppercase mb-4">
                  {currentVideo.location}
                </div>

                <h3 className="font-editorial-title text-xl sm:text-2xl font-bold text-white uppercase leading-snug mb-4">
                  {currentVideo.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#C8CCD0] font-sans leading-relaxed mb-6">
                  {currentVideo.description}
                </p>

                <div className="p-3 bg-[#0B0D0F] border border-white/10 font-mono text-xs text-[#8C9398] mb-6">
                  <div className="text-white font-bold mb-1 uppercase text-[0.6875rem]">VERIFIED SPEC:</div>
                  <div>{currentVideo.specs}</div>
                </div>
              </div>

              {/* Playlist Thumbnails Selector */}
              <div className="pt-6 border-t border-white/10 space-y-2">
                <div className="font-mono text-[0.6875rem] text-[#8C9398] uppercase font-bold mb-2">
                  PROJECT SELECTOR:
                </div>
                {actionVideos.map((v, vIdx) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActiveVideoIdx(vIdx)}
                    className={`w-full text-left p-2.5 font-mono text-xs transition-all flex items-center justify-between ${
                      vIdx === activeVideoIdx
                        ? "bg-[#B08A4A] text-[#0B0D0F] font-bold"
                        : "bg-[#0B0D0F] text-[#8C9398] hover:text-white border border-white/5"
                    }`}
                  >
                    <span className="truncate max-w-[200px]">{v.title}</span>
                    <Play className="size-3 shrink-0 ml-2" />
                  </button>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ──────── PART 2: FROM THE FIELD (INSTAGRAM REELS) ──────── */}
      <div className="py-24 sm:py-32 bg-[#0B0D0F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#B08A4A]" />
                <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
                  NOIDA YARD & SITE LOGS
                </span>
              </div>
              <h2 className="font-editorial-title text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                FROM THE FIELD.
              </h2>
            </div>

            <div className="font-mono text-xs text-[#8C9398]">
              Daily structural fabrication footage direct from Noida Sector 10 yard.
            </div>
          </div>

          {/* 3 Vertical Reel Presentation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {instagramReels.map((reel, idx) => (
              <div
                key={reel.id}
                className="arch-card-dark bg-[#14171A] p-6 flex flex-col justify-between group hover:border-[#B08A4A]/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 font-mono text-xs">
                    <span className="text-[#B08A4A] font-bold">{reel.views}</span>
                    <Instagram className="size-4 text-[#8C9398] group-hover:text-[#B08A4A] transition-colors" />
                  </div>

                  <div className="aspect-[9/12] w-full bg-[#0B0D0F] border border-white/10 mb-5 relative overflow-hidden flex items-center justify-center p-4">
                    <picture>
                      <source srcSet={`/images/projects/proj-0${idx + 2}.webp`} type="image/webp" />
                      <img
                        src={`/images/projects/proj-0${idx + 2}.jpg`}
                        alt={reel.title}
                        className="size-full object-cover brightness-[0.45] contrast-[1.1] transition-transform duration-500 group-hover:scale-105"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent" />
                    <div className="absolute flex size-12 items-center justify-center rounded-full bg-[#B08A4A] text-[#0B0D0F] shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="size-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <span className="font-mono text-[0.6875rem] text-[#8C9398] uppercase block mb-1">
                    {reel.location}
                  </span>
                  <h4 className="font-editorial-title text-base sm:text-lg font-bold text-white uppercase mb-2">
                    {reel.title}
                  </h4>
                  <p className="text-xs text-[#8C9398] font-sans leading-relaxed mb-6">
                    {reel.desc}
                  </p>
                </div>

                <a
                  href="https://www.youtube.com/@DeepEnterprises-yu2vo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#B08A4A] hover:text-white font-bold inline-flex items-center gap-1.5 uppercase transition-colors"
                >
                  <span>WATCH ON YOUTUBE / REELS &rarr;</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
