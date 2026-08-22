import { useEffect, useState } from "react";
import { Play, X, Youtube, Instagram, Film } from "lucide-react";
import { company, youtubeVideos, type ProjectVideo } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<ProjectVideo | null>(null);

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
    <section id="videos" className="bg-[#F8FAFC] py-16 sm:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block mb-1">
              ON-SITE ERECTION FOOTAGE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Watch Our Crew on Active Erection Sites
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Authentic on-site video footage of structural steel fabrication, heavy crane lifting, warehouse truss hoisting, and roofing installations across India.
            </p>
          </div>

          {/* Social Channels */}
          <div className="flex items-center gap-3">
            <a
              href={company.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xs border border-slate-300 bg-white px-3.5 py-2 font-mono text-xs font-semibold text-red-600 hover:bg-slate-50 transition-colors shadow-xs"
            >
              <Youtube className="size-4 text-red-600" />
              <span>YouTube</span>
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xs border border-slate-300 bg-white px-3.5 py-2 font-mono text-xs font-semibold text-pink-600 hover:bg-slate-50 transition-colors shadow-xs"
            >
              <Instagram className="size-4 text-pink-600" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {youtubeVideos.map((video) => (
            <article
              key={video.id}
              onClick={() => setSelectedVideo(video)}
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
                  Site Location: {video.location}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
          <div
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs"
            onClick={() => setSelectedVideo(null)}
          />

          <div className="relative w-full max-w-4xl overflow-hidden rounded-xs border border-slate-300 bg-[#0B192C] text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <div className="flex items-center gap-2">
                <Film className="size-4 text-amber-400" />
                <span className="font-display text-sm font-bold uppercase text-white truncate max-w-md">
                  {selectedVideo.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="rounded-xs border border-white/20 p-1.5 text-white hover:bg-white/10"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      <TrussDivider type="pratt" className="mt-14" />
    </section>
  );
}
