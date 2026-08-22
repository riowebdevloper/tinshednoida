import { useState } from "react";
import {
  Play,
  X,
  Youtube,
  Instagram,
  Film,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, youtubeVideos, instagramVideos, type ProjectVideo } from "@/lib/site-data";

interface VideosProps {
  isPage?: boolean;
}

export function Videos({ isPage = false }: VideosProps) {
  const [activeYoutubeIndex, setActiveYoutubeIndex] = useState(0);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [modalVideo, setModalVideo] = useState<ProjectVideo | null>(null);

  const currentYoutube = youtubeVideos[activeYoutubeIndex] ?? youtubeVideos[0]!;

  const handleNextYoutube = () => {
    setActiveYoutubeIndex((prev) => (prev + 1) % youtubeVideos.length);
  };

  const handlePrevYoutube = () => {
    setActiveYoutubeIndex((prev) => (prev - 1 + youtubeVideos.length) % youtubeVideos.length);
  };

  return (
    <div id="videos" className="bg-[#0B0D0F] text-white">
      
      {/* ──────── 1. MAIN YOUTUBE ACTION SECTION (70% PLAYER / 30% INFO) ──────── */}
      <section className="py-24 sm:py-32 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Eyebrow */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#B08A4A]" />
                <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
                  PROJECT ACTION VIDEO
                </span>
              </div>
              <h2 className="font-editorial-title text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-[1.06]">
                SEE THE WORK <br />
                IN ACTION.
              </h2>
            </div>

            <a
              href={company.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-red-400 hover:text-white border border-red-500/30 bg-red-950/20 px-3.5 py-2 transition-colors self-start md:self-auto"
            >
              <Youtube className="size-4 text-red-500" />
              <span>@DeepEnterprises-yu2vo</span>
            </a>
          </div>

          {/* 70% Video Player / 30% Project Information Layout */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            
            {/* Desktop Left / Mobile Top: Real YouTube Embed (7 cols / ~60-70%) */}
            <div className="lg:col-span-8 order-1">
              <div className="arch-card-dark overflow-hidden bg-black aspect-video border border-white/15 shadow-2xl relative z-10">
                <iframe
                  key={currentYoutube.id}
                  src={`https://www.youtube-nocookie.com/embed/${currentYoutube.id}?autoplay=0&rel=0&modestbranding=1`}
                  title={currentYoutube.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="size-full border-0"
                />
              </div>
            </div>

            {/* Desktop Right / Mobile Bottom: Project Info & Controls (4 cols / ~30-40%) */}
            <div className="lg:col-span-4 order-2 arch-card-dark p-6 sm:p-7 space-y-5 bg-[#14171A] border border-white/10 relative z-20">
              <div>
                <span className="font-mono text-[0.6875rem] font-bold text-[#B08A4A] uppercase tracking-widest block mb-1">
                  OFFICIAL YOUTUBE DOCUMENTATION
                </span>
                <h3 className="font-editorial-title text-xl sm:text-2xl font-extrabold text-white leading-tight uppercase">
                  {currentYoutube.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#8C9398] leading-relaxed font-sans">
                  {currentYoutube.description}
                </p>
              </div>

              {/* Location & Meta Ledger */}
              <div className="border-t border-b border-white/10 py-3.5 font-mono text-xs space-y-2 text-[#8C9398]">
                <div className="flex items-center gap-2">
                  <MapPin className="size-3.5 text-[#B08A4A] shrink-0" />
                  <span>Location: <strong className="text-white">{currentYoutube.location}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Film className="size-3.5 text-[#B08A4A] shrink-0" />
                  <span>Service: <strong className="text-white">{currentYoutube.service}</strong></span>
                </div>
              </div>

              {/* Prev / Next Video Controls & Quote CTA */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevYoutube}
                    className="flex items-center gap-1 px-3 py-1.5 border border-white/15 bg-white/5 text-xs font-mono font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="size-3.5" />
                    <span>Prev</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextYoutube}
                    className="flex items-center gap-1 px-3 py-1.5 border border-white/15 bg-white/5 text-xs font-mono font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="size-3.5" />
                  </button>
                </div>

                <Link
                  to="/quote"
                  className="btn-arch-primary text-xs py-2 px-3"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>

              {/* Playlist Thumbnails Selector */}
              <div className="pt-4 border-t border-white/10">
                <span className="font-mono text-[0.6875rem] font-bold text-[#8C9398] uppercase block mb-2 tracking-wider">
                  SELECT RECENT VIDEO ({youtubeVideos.length})
                </span>
                <div className="grid grid-cols-5 gap-1.5">
                  {youtubeVideos.map((vid, idx) => (
                    <button
                      key={vid.id}
                      type="button"
                      onClick={() => setActiveYoutubeIndex(idx)}
                      className={`relative aspect-video overflow-hidden border transition-all ${
                        idx === activeYoutubeIndex
                          ? "border-[#B08A4A] ring-1 ring-[#B08A4A]"
                          : "border-white/10 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={vid.thumbnail}
                        alt={vid.title}
                        className="size-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ──────── 2. SEPARATE INSTAGRAM "FROM THE FIELD" SECTION ──────── */}
      <section className="bg-warm-paper text-[#0B0D0F] py-24 sm:py-32 border-b border-[#0B0D0F]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0B0D0F]/15 pb-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#B08A4A]" />
                <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
                  LIVE FIELD REPORTS
                </span>
              </div>
              <h2 className="font-editorial-title text-3xl sm:text-5xl font-extrabold text-[#0B0D0F] tracking-tight uppercase leading-[1.06]">
                FROM THE FIELD.
              </h2>
              <p className="mt-2 text-sm text-[#525860] font-sans">
                Unfiltered on-site reels, mobile crane hoisting, and welding action from active jobsites.
              </p>
            </div>

            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-pink-700 hover:text-black border border-pink-700/30 bg-pink-50 px-3.5 py-2 transition-colors self-start md:self-auto"
            >
              <Instagram className="size-4 text-pink-600" />
              <span>@tinshadenoidawale</span>
            </a>
          </div>

          {/* Vertical Reel Presentation */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instagramVideos.map((reel) => (
              <div
                key={reel.id}
                className="arch-card-light flex flex-col justify-between p-5 bg-white border border-[#0B0D0F]/12 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#0B0D0F]/10 pb-2.5 mb-3 font-mono text-xs">
                    <span className="font-bold text-pink-700 flex items-center gap-1.5">
                      <Instagram className="size-3.5" />
                      <span>INSTAGRAM REEL</span>
                    </span>
                    <span className="text-[#8C9398]">{reel.duration}</span>
                  </div>

                  <div className="relative aspect-[9/16] max-h-[380px] w-full overflow-hidden bg-[#0B0D0F]">
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <a
                        href={reel.originalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-12 items-center justify-center rounded-full bg-pink-600 text-white shadow-xl hover:scale-110 transition-transform"
                        aria-label={`Open ${reel.title} on Instagram`}
                      >
                        <Play className="size-5 fill-white ml-0.5" />
                      </a>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 font-mono text-[0.6875rem] text-[#0B0D0F] bg-white/95 px-2 py-0.5 font-bold shadow-xs">
                      {reel.location}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-editorial-title font-bold text-base text-[#0B0D0F] uppercase">
                      {reel.title}
                    </h4>
                    <p className="mt-1 text-xs text-[#525860] leading-relaxed font-sans">
                      {reel.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#0B0D0F]/10 flex items-center justify-between font-mono text-xs">
                  <a
                    href={reel.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-pink-700 hover:underline flex items-center gap-1"
                  >
                    <span>WATCH ON INSTAGRAM</span>
                    <ExternalLink className="size-3" />
                  </a>
                  <Link
                    to="/quote"
                    className="font-bold text-[#0B0D0F] hover:text-[#B08A4A]"
                  >
                    Quote &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
