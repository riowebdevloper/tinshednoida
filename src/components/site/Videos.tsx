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
    <section id="videos" className="bg-paper py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header (No repetitive eyebrow) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/15 pb-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
              Watch Our Crew on Active Erection Sites
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
              Authentic on-site video footage of structural steel fabrication, heavy crane lifting, warehouse truss hoisting, and roofing installations across India.
            </p>
          </div>

          {/* Social Channels */}
          <div className="flex items-center gap-2.5">
            <a
              href={company.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xs border border-border bg-card px-3 py-1.5 font-mono text-xs font-semibold text-charcoal hover:border-red-600 hover:text-red-600 transition-colors"
            >
              <Youtube className="size-3.5 text-red-600" />
              <span>YouTube</span>
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xs border border-border bg-card px-3 py-1.5 font-mono text-xs font-semibold text-charcoal hover:border-pink-600 hover:text-pink-600 transition-colors"
            >
              <Instagram className="size-3.5 text-pink-600" />
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
              className="group relative cursor-pointer overflow-hidden rounded-xs border border-border bg-card transition-colors hover:border-charcoal"
            >
              <div className="relative aspect-video overflow-hidden bg-charcoal">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-11 items-center justify-center rounded-full bg-safety text-charcoal shadow-md transition-transform group-hover:scale-110">
                    <Play className="size-4 fill-charcoal ml-0.5" />
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-2 left-2 font-mono text-xs text-white bg-charcoal/90 px-2 py-0.5 rounded-xs border border-white/20">
                  {video.location}
                </div>
              </div>

              <div className="p-3.5">
                <h3 className="font-display text-sm font-bold text-charcoal leading-snug line-clamp-2 group-hover:text-oxide transition-colors">
                  {video.title}
                </h3>
                <p className="mt-1 text-[0.6875rem] text-muted-foreground font-mono">
                  Site: {video.location}
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
            className="fixed inset-0 bg-charcoal/90 backdrop-blur-xs"
            onClick={() => setSelectedVideo(null)}
          />

          <div className="relative w-full max-w-4xl overflow-hidden rounded-xs border border-charcoal bg-charcoal text-paper shadow-lg">
            <div className="flex items-center justify-between border-b border-white/10 p-3.5">
              <div className="flex items-center gap-2">
                <Film className="size-3.5 text-safety" />
                <span className="font-display text-xs font-bold uppercase text-white truncate max-w-md">
                  {selectedVideo.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="rounded-xs border border-white/20 p-1 text-paper hover:bg-white/10"
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
