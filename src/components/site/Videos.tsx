import { useEffect, useState } from "react";
import { ExternalLink, Instagram, Play, X, Youtube, ShieldCheck } from "lucide-react";
import { company, instagramVideos, youtubeVideos, type ProjectVideo } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Videos() {
  const [activeTab, setActiveTab] = useState<"youtube" | "instagram">("youtube");
  const [selectedVideo, setSelectedVideo] = useState<ProjectVideo | null>(null);

  // Close modal with Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", onKeyDown);
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  return (
    <section id="videos" className="content-auto bg-steel-deep text-steel-foreground py-16 lg:py-24 border-b border-steel-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-steel-line pb-8">
          <div className="max-w-3xl">
            <p className="eyebrow flex items-center gap-3 text-primary">
              <span className="h-px w-10 bg-primary" />
              Verified On-Site Footage
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl text-white tracking-tight">
              WATCH OUR
              <span className="block text-primary">WORK IN ACTION.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-steel-muted leading-relaxed">
              Real video documentation of active steel fabrication, warehouse shed erection, and roof installations across India.
            </p>
          </div>

          {/* Social Channel Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={company.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-red-500/40 bg-red-500/10 px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-red-400 transition-colors hover:bg-red-500 hover:text-white"
            >
              <Youtube className="size-4" />
              YouTube Channel
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-pink-500/40 bg-pink-500/10 px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-pink-400 transition-colors hover:bg-pink-500 hover:text-white"
            >
              <Instagram className="size-4" />
              Instagram Reels
            </a>
          </div>
        </Reveal>

        {/* ──────── TWO DISTINCT TABS ──────── */}
        <div className="mt-8 flex items-center gap-3 border-b border-steel-line pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("youtube")}
            className={`inline-flex items-center gap-2 rounded-sm px-5 py-3 font-display text-sm font-bold uppercase tracking-wider transition-all ${
              activeTab === "youtube"
                ? "bg-red-600 text-white shadow-md"
                : "border border-steel-line bg-steel text-steel-muted hover:text-white"
            }`}
          >
            <Youtube className="size-4.5" />
            YOUTUBE — 5 VIDEOS
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("instagram")}
            className={`inline-flex items-center gap-2 rounded-sm px-5 py-3 font-display text-sm font-bold uppercase tracking-wider transition-all ${
              activeTab === "instagram"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                : "border border-steel-line bg-steel text-steel-muted hover:text-white"
            }`}
          >
            <Instagram className="size-4.5" />
            INSTAGRAM REELS
          </button>
        </div>

        {/* ──────── TAB CONTENT: YOUTUBE (5 ACTUAL VIDEOS) ──────── */}
        {activeTab === "youtube" && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {youtubeVideos.map((video, i) => (
              <Reveal
                as="article"
                key={video.id}
                delay={i * 70}
                onClick={() => setSelectedVideo(video)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-steel-line bg-steel shadow-card transition-all duration-300 hover:border-red-500/60 hover:shadow-elevated flex flex-col justify-between"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex size-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-transform group-hover:scale-110">
                      <Play className="size-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* YouTube Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-xs bg-black/80 px-2.5 py-1 font-display text-[0.65rem] font-bold text-white border border-white/20">
                    <Youtube className="size-3.5 text-red-500" />
                    YOUTUBE
                  </div>

                  <span className="font-mono absolute bottom-3 right-3 text-[0.65rem] font-bold text-white bg-black/80 px-2 py-0.5 rounded-xs">
                    {video.service}
                  </span>
                </div>

                {/* Video Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold uppercase text-white group-hover:text-red-400 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-xs text-steel-muted line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-steel-line/60 pt-3">
                    <span className="font-mono text-xs text-primary font-medium">
                      {video.location}
                    </span>
                    <span className="font-display text-xs font-bold uppercase text-red-400 flex items-center gap-1">
                      PLAY VIDEO →
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* ──────── TAB CONTENT: INSTAGRAM REELS ──────── */}
        {activeTab === "instagram" && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instagramVideos.map((reel, i) => (
              <Reveal
                as="article"
                key={reel.id}
                delay={i * 70}
                className="group relative overflow-hidden rounded-sm border border-steel-line bg-steel shadow-card transition-all duration-300 hover:border-pink-500/60 hover:shadow-elevated flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {/* Instagram Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-xs bg-black/80 px-2.5 py-1 font-display text-[0.65rem] font-bold text-white border border-white/20">
                    <Instagram className="size-3.5 text-pink-400" />
                    INSTAGRAM REEL
                  </div>

                  <span className="font-mono absolute bottom-3 right-3 text-[0.65rem] font-bold text-white bg-black/80 px-2 py-0.5 rounded-xs">
                    {reel.service}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold uppercase text-white group-hover:text-pink-400 transition-colors">
                      {reel.title}
                    </h3>
                    <p className="mt-2 text-xs text-steel-muted line-clamp-2 leading-relaxed">
                      {reel.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-steel-line/60 pt-3">
                    <span className="font-mono text-xs text-steel-muted">
                      {reel.location}
                    </span>
                    <a
                      href={reel.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xs font-bold uppercase text-pink-400 flex items-center gap-1 hover:underline"
                    >
                      VIEW ON INSTAGRAM
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

      </div>

      {/* ──────── YOUTUBE MODAL PLAYER ──────── */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-sm border border-steel-line bg-steel-deep shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-steel-line bg-steel px-5 py-3.5">
              <div className="flex items-center gap-2 min-w-0 pr-4">
                <Youtube className="size-5 text-red-500 shrink-0" />
                <h3 className="font-display text-sm sm:text-base font-bold uppercase text-white truncate">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video player"
                className="rounded-xs bg-steel-deep p-1.5 text-steel-muted hover:text-white border border-steel-line"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* 16:9 Responsive YouTube Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="size-full border-0"
              />
            </div>

            {/* Modal Footer with Fallback Link */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-steel-line bg-steel px-5 py-4">
              <div className="flex items-center gap-2 text-xs text-steel-muted">
                <ShieldCheck className="size-4 text-primary" />
                Official video from @DeepEnterprises-yu2vo
              </div>

              <a
                href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xs bg-red-600 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-red-700 transition-colors"
              >
                WATCH ON YOUTUBE
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
