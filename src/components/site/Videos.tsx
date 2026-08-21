import { useEffect, useState } from "react";
import { ExternalLink, Play, X, Youtube, Instagram, Video } from "lucide-react";
import { company, youtubeVideos, type ProjectVideo } from "@/lib/site-data";

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
    <section id="videos" className="bg-background py-16 lg:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                ON-SITE VIDEO DOCUMENTATION
              </span>
              <span className="text-muted-foreground font-mono text-xs">/ Active Construction</span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold uppercase leading-tight tracking-tight text-foreground">
              WATCH OUR CREW IN ACTION
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Real video footage of active steel fabrication, heavy crane lifting, warehouse shed erection, and roof installations across India.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={company.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xs border border-border bg-card px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-foreground hover:border-red-500 hover:text-red-500 transition-colors"
            >
              <Youtube className="size-4 text-red-500" />
              YouTube Channel
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xs border border-border bg-card px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-foreground hover:border-pink-500 hover:text-pink-500 transition-colors"
            >
              <Instagram className="size-4 text-pink-500" />
              Instagram Reels
            </a>
          </div>
        </div>

        {/* Video Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {youtubeVideos.map((video) => (
            <article
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group relative cursor-pointer overflow-hidden rounded-xs border border-border bg-card shadow-card transition-all hover:border-primary"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                    <Play className="size-5 fill-primary-foreground ml-0.5" />
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-2.5 left-2.5 font-mono text-[0.68rem] font-bold text-white bg-black/80 px-2 py-0.5 rounded-xs border border-white/20">
                  {video.location}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-display text-sm font-bold uppercase text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xs border border-zinc-800 bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between bg-zinc-900 px-4 py-3 border-b border-zinc-800">
              <h3 className="font-display text-sm font-bold uppercase text-white truncate pr-4">
                {selectedVideo.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video"
                className="shrink-0 p-1 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="size-full border-0"
              />
            </div>

            <div className="flex items-center justify-between bg-zinc-900 px-4 py-2.5 border-t border-zinc-800">
              <span className="font-mono text-xs text-zinc-400">
                Location: {selectedVideo.location}
              </span>
              <a
                href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
              >
                Watch on YouTube
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
