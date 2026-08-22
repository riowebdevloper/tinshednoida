import { useEffect, useState } from "react";
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
import { TrussDivider } from "./TrussDivider";

interface VideosProps {
  isPage?: boolean;
}

export function Videos({ isPage = false }: VideosProps) {
  const [activeTab, setActiveTab] = useState<"youtube" | "instagram" | "onsite">("youtube");
  const [activeYoutubeIndex, setActiveYoutubeIndex] = useState(0);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [modalVideo, setModalVideo] = useState<ProjectVideo | null>(null);

  const currentYoutube = youtubeVideos[activeYoutubeIndex] ?? youtubeVideos[0]!;
  const currentReel = instagramVideos[activeReelIndex] ?? instagramVideos[0]!;

  const handleNextYoutube = () => {
    setActiveYoutubeIndex((prev) => (prev + 1) % youtubeVideos.length);
  };

  const handlePrevYoutube = () => {
    setActiveYoutubeIndex((prev) => (prev - 1 + youtubeVideos.length) % youtubeVideos.length);
  };

  const handleNextReel = () => {
    setActiveReelIndex((prev) => (prev + 1) % instagramVideos.length);
  };

  const handlePrevReel = () => {
    setActiveReelIndex((prev) => (prev - 1 + instagramVideos.length) % instagramVideos.length);
  };

  return (
    <section id="videos" className="bg-[#F8FAFC] py-16 sm:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── SECTION HEADER ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block mb-1">
              AUTHENTIC SITE VIDEO DOCUMENTATION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Project Action Video &amp; Crane Erection
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Watch our in-house crew fabricate mild steel trusses in Sector 10 Noida and erect heavy industrial sheds with hydraulic cranes on client sites across India.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={company.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xs border border-slate-300 bg-white px-3.5 py-2 font-mono text-xs font-semibold text-red-600 hover:bg-slate-50 transition-colors shadow-xs"
            >
              <Youtube className="size-4 text-red-600" />
              <span>@DeepEnterprises-yu2vo</span>
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xs border border-slate-300 bg-white px-3.5 py-2 font-mono text-xs font-semibold text-pink-600 hover:bg-slate-50 transition-colors shadow-xs"
            >
              <Instagram className="size-4 text-pink-600" />
              <span>@tinshadenoidawale</span>
            </a>
          </div>
        </div>

        {/* ──────── 3 INTERACTIVE TABS ──────── */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("youtube")}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider rounded-xs transition-all flex items-center gap-2 ${
              activeTab === "youtube"
                ? "bg-[#0E2A47] text-white shadow-xs"
                : "bg-white text-slate-700 border border-slate-300 hover:border-slate-400"
            }`}
          >
            <Youtube className="size-4 text-red-500" />
            <span>YouTube Channel ({youtubeVideos.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("instagram")}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider rounded-xs transition-all flex items-center gap-2 ${
              activeTab === "instagram"
                ? "bg-[#0E2A47] text-white shadow-xs"
                : "bg-white text-slate-700 border border-slate-300 hover:border-slate-400"
            }`}
          >
            <Instagram className="size-4 text-pink-500" />
            <span>Instagram Reels ({instagramVideos.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("onsite")}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider rounded-xs transition-all flex items-center gap-2 ${
              activeTab === "onsite"
                ? "bg-[#0E2A47] text-white shadow-xs"
                : "bg-white text-slate-700 border border-slate-300 hover:border-slate-400"
            }`}
          >
            <Film className="size-4 text-amber-500" />
            <span>Onsite Project Videos</span>
          </button>
        </div>

        {/* ──────── TAB 1: YOUTUBE FULL WORKING PLAYER ──────── */}
        {activeTab === "youtube" && (
          <div className="mt-8 grid gap-8 lg:grid-cols-12 items-start">
            
            {/* Desktop Left / Mobile Bottom: Project Info & Controls (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1 corp-card p-6 bg-white space-y-5">
              <div>
                <span className="font-mono text-xs font-bold uppercase text-amber-700 block mb-1">
                  OFFICIAL YOUTUBE CHANNEL · {currentYoutube.service}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  {currentYoutube.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {currentYoutube.description}
                </p>
              </div>

              <div className="rounded-xs border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs space-y-1.5 text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="size-3.5 text-amber-600 shrink-0" />
                  <span>Location: <strong className="text-slate-900">{currentYoutube.location}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Youtube className="size-3.5 text-red-600 shrink-0" />
                  <span>Channel: <strong className="text-slate-900">{currentYoutube.channel}</strong></span>
                </div>
              </div>

              {/* Prev / Next & Quote CTA */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevYoutube}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xs border border-slate-300 bg-white text-xs font-mono font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <ChevronLeft className="size-3.5" />
                    <span>Prev</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextYoutube}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xs border border-slate-300 bg-white text-xs font-mono font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="size-3.5" />
                  </button>
                  <span className="font-mono text-xs text-slate-500 tabular-nums">
                    {activeYoutubeIndex + 1} of {youtubeVideos.length}
                  </span>
                </div>

                <Link
                  to="/quote"
                  className="btn-corp-primary text-xs py-2 px-3"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>

              {/* Playlist Grid Selector */}
              <div className="pt-4 border-t border-slate-100">
                <span className="font-mono text-[0.6875rem] font-bold text-slate-500 uppercase block mb-2">
                  Select Video from Playlist
                </span>
                <div className="grid grid-cols-5 gap-2">
                  {youtubeVideos.map((vid, idx) => (
                    <button
                      key={vid.id}
                      type="button"
                      onClick={() => setActiveYoutubeIndex(idx)}
                      className={`relative aspect-video rounded-xs overflow-hidden border transition-all ${
                        idx === activeYoutubeIndex
                          ? "border-[#0E2A47] ring-2 ring-[#0E2A47]"
                          : "border-slate-200 opacity-70 hover:opacity-100"
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

            {/* Desktop Right / Mobile Top: Real YouTube Embed (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="corp-card overflow-hidden bg-black aspect-video border border-slate-300 shadow-lg">
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

          </div>
        )}

        {/* ──────── TAB 2: INSTAGRAM REELS PLAYER ──────── */}
        {activeTab === "instagram" && (
          <div className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {instagramVideos.map((reel) => (
                <div
                  key={reel.id}
                  className="corp-card flex flex-col justify-between p-5 bg-white"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                      <span className="font-mono text-xs font-semibold text-pink-600 flex items-center gap-1.5">
                        <Instagram className="size-3.5" />
                        <span>INSTAGRAM REEL</span>
                      </span>
                      <span className="font-mono text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="size-3" />
                        <span>{reel.duration}</span>
                      </span>
                    </div>

                    <div className="relative aspect-[9/16] max-h-[380px] w-full overflow-hidden rounded-xs bg-slate-100 border border-slate-200">
                      <img
                        src={reel.thumbnail}
                        alt={reel.title}
                        className="size-full object-cover"
                      />
                      <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                        <a
                          href={reel.originalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-12 items-center justify-center rounded-full bg-pink-600 text-white shadow-lg transition-transform hover:scale-110"
                          aria-label={`Open ${reel.title} on Instagram`}
                        >
                          <Play className="size-5 fill-white ml-0.5" />
                        </a>
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 font-mono text-[0.6875rem] text-slate-900 bg-white/95 px-2 py-0.5 rounded-xs font-semibold shadow-xs">
                        {reel.location}
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-display font-bold text-base text-slate-900">
                        {reel.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed font-sans">
                        {reel.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={reel.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-semibold text-pink-600 hover:underline flex items-center gap-1"
                    >
                      <span>Watch on Instagram</span>
                      <ExternalLink className="size-3" />
                    </a>
                    <Link
                      to="/quote"
                      className="font-display text-xs font-bold uppercase text-[#0E2A47] hover:underline"
                    >
                      Quote &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ──────── TAB 3: ONSITE PROJECT VIDEOS GRID ──────── */}
        {activeTab === "onsite" && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {youtubeVideos.map((video) => (
              <article
                key={video.id}
                onClick={() => setModalVideo(video)}
                className="corp-card group cursor-pointer overflow-hidden bg-white"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/15 transition-colors" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex size-12 items-center justify-center rounded-full bg-[#0E2A47] text-white shadow-lg transition-transform group-hover:scale-110">
                      <Play className="size-4 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute bottom-2.5 left-2.5 font-mono text-xs text-slate-900 bg-white/95 px-2.5 py-0.5 rounded-xs border border-slate-200 font-semibold shadow-xs">
                    {video.location}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-display text-sm font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-amber-700 transition-colors">
                    {video.title}
                  </h3>
                  <p className="mt-1.5 text-[0.6875rem] text-slate-500 font-mono">
                    Service: {video.service} · Location: {video.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* ──────── FULLSCREEN VIDEO MODAL ──────── */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
          <div
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs"
            onClick={() => setModalVideo(null)}
          />

          <div className="relative w-full max-w-4xl overflow-hidden rounded-xs border border-slate-300 bg-[#0B192C] text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <div className="flex items-center gap-2">
                <Film className="size-4 text-amber-400" />
                <span className="font-display text-sm font-bold uppercase text-white truncate max-w-md">
                  {modalVideo.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setModalVideo(null)}
                className="rounded-xs border border-white/20 p-1.5 text-white hover:bg-white/10"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${modalVideo.id}?autoplay=1`}
                title={modalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      {!isPage && <TrussDivider type="pratt" className="mt-14" />}
    </section>
  );
}
