import { useEffect, useState } from "react";
import { ExternalLink, Play, X, Youtube } from "lucide-react";
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Small section label */}
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">On-Site Work</p>
        <div className="mt-2 h-px w-12 bg-primary" />
        <p className="mt-4 text-sm text-muted-foreground max-w-lg">
          Real fabrication and erection work from our project sites.
        </p>

        {/* Clean video grid — no badges, no tabs */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {youtubeVideos.map((video) => (
            <article
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group relative cursor-pointer overflow-hidden rounded-sm bg-black"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />

                {/* Simple play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-white/90 text-black transition-transform group-hover:scale-110">
                    <Play className="size-5 fill-black ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-display text-sm font-bold uppercase text-foreground leading-tight line-clamp-2">
                  {video.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {video.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Simple links at bottom */}
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <a
            href={company.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Youtube className="size-4" />
            YouTube channel →
          </a>
          <a
            href={company.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            Instagram reels →
          </a>
        </div>
      </div>

      {/* Video modal */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-sm bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between bg-zinc-900 px-4 py-3">
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

            <div className="flex items-center justify-end bg-zinc-900 px-4 py-2.5">
              <a
                href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
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
