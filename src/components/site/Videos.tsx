import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Instagram,
  Play,
  Youtube,
} from "lucide-react";
import {
  company,
  getYouTubeEmbedUrl,
  instagramVideos,
  testimonials,
  youtubeVideos,
  type ProjectVideo,
} from "@/lib/site-data";
import { triggerQuoteForNeed } from "./QuoteWizard";
import { Reveal } from "./Reveal";

/**
 * Dedicated YouTube Embed Component (Zero overlays, official responsive 16:9 iframe)
 */
function YouTubeEmbed({ video }: { video: ProjectVideo }) {
  const embedUrl = getYouTubeEmbedUrl(video.originalUrl || video.embedUrl);

  if (!embedUrl) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-md border-2 border-red-500/30 bg-black flex flex-col items-center justify-center p-6 text-center shadow-elevated z-10">
        <AlertTriangle className="size-10 text-amber-400 mb-2" />
        <p className="font-display text-base font-bold uppercase text-white">
          YouTube video unavailable for embedding.
        </p>
        <p className="mt-1 max-w-xs text-xs text-steel-muted">
          The video link is unavailable or not formatted for embedding.
        </p>
        <a
          href={video.originalUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-sm bg-red-600 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-105"
        >
          WATCH ON YOUTUBE → <ExternalLink className="size-3.5" />
        </a>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md border-2 border-red-500/30 bg-black shadow-elevated z-10 pointer-events-auto">
      <iframe
        key={video.id}
        src={embedUrl}
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="size-full border-0 pointer-events-auto block"
      />
    </div>
  );
}

/**
 * Dedicated Instagram Embed Component (Official blockquote + embed.js mechanism)
 */
function InstagramEmbed({ video }: { video: ProjectVideo }) {
  const [scriptReady, setScriptReady] = useState(false);
  const [processAttempted, setProcessAttempted] = useState(false);

  useEffect(() => {
    setProcessAttempted(false);
    let timer: ReturnType<typeof setTimeout> | null = null;

    // Ensure embed.js is injected
    if (typeof window !== "undefined") {
      const existingScript = document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]',
      );

      const runProcess = () => {
        if ((window as unknown as { instgrm?: { Embeds?: { process: () => void } } }).instgrm?.Embeds) {
          try {
            (window as unknown as { instgrm: { Embeds: { process: () => void } } }).instgrm.Embeds.process();
            setScriptReady(true);
          } catch (e) {
            console.warn("Instagram process error:", e);
          }
        }
        setProcessAttempted(true);
      };

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => {
          runProcess();
        };
        script.onerror = () => {
          setProcessAttempted(true);
        };
        document.body.appendChild(script);
      } else {
        // Small delay to ensure blockquote DOM node is mounted before processing
        timer = setTimeout(runProcess, 60);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [video.id, video.originalUrl]);

  const cleanPermalink = video.originalUrl.split("?")[0]!.replace(/\/+$/, "") + "/";

  return (
    <div className="relative w-full max-w-[420px] mx-auto flex flex-col items-center justify-center z-10 pointer-events-auto">
      {/* Official Instagram Media Blockquote Container */}
      <div className="w-full flex justify-center overflow-hidden rounded-md border border-pink-500/30 bg-black p-1 shadow-elevated">
        <blockquote
          key={video.id}
          className="instagram-media"
          data-instgrm-permalink={cleanPermalink}
          data-instgrm-version="14"
          style={{
            background: "#000",
            border: 0,
            borderRadius: "6px",
            margin: "0 auto",
            maxWidth: "400px",
            width: "100%",
            minHeight: "460px",
            display: "block",
          }}
        >
          {/* Fallback card if embed is loading or blocked by privacy extensions */}
          <div className="flex flex-col items-center justify-center p-6 text-center min-h-[460px] bg-steel-deep/90">
            {video.thumbnail && (
              <img
                src={video.thumbnail}
                alt={video.title}
                className="size-20 rounded-full object-cover border-2 border-pink-500 mb-3 opacity-90 shadow-md"
              />
            )}
            <span className="eyebrow text-xs text-pink-400">@tinshadenoidawale</span>
            <h4 className="mt-2 font-display text-sm font-bold uppercase text-white leading-snug">
              {video.title}
            </h4>
            <p className="mt-2 text-xs text-steel-muted max-w-xs">{video.description}</p>
            <a
              href={video.originalUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-105"
            >
              VIEW ON INSTAGRAM → <ExternalLink className="size-3.5" />
            </a>
          </div>
        </blockquote>
      </div>

      {/* Direct link footer */}
      <div className="mt-3 w-full flex justify-center">
        <a
          href={video.originalUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wide text-pink-400 hover:text-pink-300 transition-colors"
        >
          Open Reel on Instagram <ExternalLink className="size-3" />
        </a>
      </div>
    </div>
  );
}

export function Videos() {
  const [activePlatform, setActivePlatform] = useState<"youtube" | "instagram">("youtube");
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const videoList = activePlatform === "youtube" ? youtubeVideos : instagramVideos;
  const activeVideo = videoList[activeVideoIndex] || videoList[0]!;

  function handleSelectPlatform(platform: "youtube" | "instagram") {
    setActivePlatform(platform);
    setActiveVideoIndex(0);
  }

  function handleNextVideo() {
    setActiveVideoIndex((prev) => (prev + 1) % videoList.length);
  }

  function handlePrevVideo() {
    setActiveVideoIndex((prev) => (prev - 1 + videoList.length) % videoList.length);
  }

  function handleSelectQuote(need: string) {
    triggerQuoteForNeed(need);
  }

  return (
    <section
      id="videos"
      className="content-auto relative isolate overflow-hidden bg-steel-deep py-16 text-steel-foreground lg:py-24 border-b border-steel-line"
    >
      {/* Blueprint grid background */}
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* 1. SECTION HEADER */}
        <Reveal variant="up" className="mx-auto max-w-3xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3 text-primary">
            <span className="h-px w-10 rule-accent" />
            PROJECT ACTION VIDEO
            <span className="h-px w-10 rule-accent" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            REAL ONSITE FABRICATION & ERECTION
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-steel-muted sm:text-lg">
            Watch verified videos from our official YouTube channel (@DeepEnterprises-yu2vo) and Instagram reels (@tinshadenoidawale) showcasing active steel fabrication, factory shed erection, and industrial roofing across India.
          </p>
        </Reveal>

        {/* 2. PLATFORM SELECTOR TABS */}
        <Reveal variant="up" delay={100} className="mt-10 flex justify-center">
          <div className="inline-flex rounded-sm border border-steel-line bg-steel/90 p-1.5 shadow-card backdrop-blur-xs">
            <button
              type="button"
              onClick={() => handleSelectPlatform("youtube")}
              className={`inline-flex items-center gap-2 rounded-sm px-6 py-2.5 font-display text-xs font-bold uppercase tracking-wider transition-all ${
                activePlatform === "youtube"
                  ? "bg-red-600 text-white shadow-sm"
                  : "text-steel-muted hover:text-white"
              }`}
            >
              <Youtube className="size-4" />
              YOUTUBE VIDEOS — {youtubeVideos.length}
            </button>

            <button
              type="button"
              onClick={() => handleSelectPlatform("instagram")}
              className={`inline-flex items-center gap-2 rounded-sm px-6 py-2.5 font-display text-xs font-bold uppercase tracking-wider transition-all ${
                activePlatform === "instagram"
                  ? "bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white shadow-sm"
                  : "text-steel-muted hover:text-white"
              }`}
            >
              <Instagram className="size-4" />
              INSTAGRAM REELS ({instagramVideos.length})
            </button>
          </div>
        </Reveal>

        {/* 3. MAIN VIDEO PLAYER AND INFO SECTION */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* LEFT: PROJECT INFORMATION & ACTIVE DETAILS (Cols 1-5) */}
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-5">
            <Reveal
              variant="left"
              className="space-y-6 rounded-sm border border-steel-line bg-steel/90 p-6 sm:p-8 shadow-card backdrop-blur-xs"
            >
              {/* Category & Counter */}
              <div className="flex items-center justify-between border-b border-steel-line pb-4">
                <span className="eyebrow flex items-center gap-2 text-primary font-semibold">
                  <span className="size-2 rounded-full bg-primary animate-pulse" />
                  {activeVideo.service}
                </span>
                <span className="font-mono text-xs font-bold text-steel-muted">
                  {String(activeVideoIndex + 1).padStart(2, "0")} OF{" "}
                  {String(videoList.length).padStart(2, "0")}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase leading-snug tracking-wide text-white">
                  {activeVideo.title}
                </h3>
                <p className="text-sm leading-relaxed text-steel-muted">
                  {activeVideo.description}
                </p>
              </div>

              {/* Metadata Details */}
              <div className="grid grid-cols-2 gap-4 border-y border-steel-line/60 py-4 text-xs font-mono">
                <div>
                  <span className="block text-steel-muted text-[0.65rem] uppercase">Location</span>
                  <strong className="text-white font-semibold">{activeVideo.location}</strong>
                </div>
                <div>
                  <span className="block text-steel-muted text-[0.65rem] uppercase">Channel / Source</span>
                  <strong
                    className={`font-semibold uppercase ${
                      activePlatform === "youtube" ? "text-red-400" : "text-pink-400"
                    }`}
                  >
                    ▶ {activeVideo.channel || activeVideo.platform.toUpperCase()}
                  </strong>
                </div>
              </div>

              {/* Prev / Next Navigation Buttons */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={handlePrevVideo}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-steel-line bg-steel-deep px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-steel-muted transition-colors hover:border-primary hover:text-white"
                >
                  <ChevronUp className="size-4" /> PREV VIDEO
                </button>
                <button
                  type="button"
                  onClick={handleNextVideo}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-steel-line bg-steel-deep px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-steel-muted transition-colors hover:border-primary hover:text-white"
                >
                  NEXT VIDEO <ChevronDown className="size-4" />
                </button>
              </div>

              {/* Get Quote Button */}
              <button
                type="button"
                onClick={() => handleSelectQuote(activeVideo.quoteOptionNeed)}
                className="group flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
              >
                <span>GET QUOTE FOR {activeVideo.service.toUpperCase()}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Direct External Link */}
              <div className="pt-2 border-t border-steel-line/60">
                <a
                  href={activeVideo.originalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-wider py-2.5 rounded-sm border transition-colors ${
                    activePlatform === "youtube"
                      ? "border-red-500/40 text-red-400 hover:bg-red-600/10"
                      : "border-pink-500/40 text-pink-400 hover:bg-pink-600/10"
                  }`}
                >
                  {activePlatform === "youtube" ? "WATCH ON YOUTUBE" : "VIEW ON INSTAGRAM"} →
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </Reveal>

            {/* Direct Channel Links */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-sm border border-steel-line bg-steel/60 p-4 text-xs text-steel-muted">
              <a
                href={company.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-display uppercase tracking-wider text-red-400 hover:underline"
              >
                <Youtube className="size-4" /> @DeepEnterprises-yu2vo
              </a>
              <a
                href={company.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-display uppercase tracking-wider text-pink-400 hover:underline"
              >
                <Instagram className="size-4" /> @tinshadenoidawale
              </a>
            </div>
          </div>

          {/* RIGHT: DEDICATED EMBEDDED PLAYER CONTAINER (Cols 6-12) */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex justify-center w-full">
            {activePlatform === "youtube" ? (
              <div className="w-full">
                <YouTubeEmbed key={activeVideo.id} video={activeVideo} />
              </div>
            ) : (
              <div className="w-full flex justify-center">
                <InstagramEmbed key={activeVideo.id} video={activeVideo} />
              </div>
            )}
          </div>
        </div>

        {/* 4. DEDICATED ALL 5 YOUTUBE VIDEOS GALLERY / SELECTOR */}
        {activePlatform === "youtube" && (
          <Reveal variant="up" className="mt-14 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-steel-line pb-4">
              <div>
                <h3 className="font-display text-2xl font-extrabold uppercase text-white tracking-wide">
                  ALL UPLOADED VIDEOS ({youtubeVideos.length})
                </h3>
                <p className="text-xs text-steel-muted mt-1">
                  Click any project video card below to load and play directly in the viewer above.
                </p>
              </div>
              <span className="font-mono text-xs text-red-400 uppercase flex items-center gap-1.5 font-semibold">
                <Youtube className="size-4" /> Official Channel Videos
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {youtubeVideos.map((item, idx) => {
                const isSelected = idx === activeVideoIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`group relative flex flex-col overflow-hidden rounded-sm border text-left transition-all duration-300 ${
                      isSelected
                        ? "border-red-500 bg-red-950/20 ring-2 ring-red-500/50 shadow-elevated"
                        : "border-steel-line bg-steel/80 hover:border-steel-muted hover:bg-steel"
                    }`}
                  >
                    {/* Thumbnail with Play Overlay */}
                    <div className="relative aspect-video w-full overflow-hidden bg-black">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                      {/* Play Button Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`flex size-10 items-center justify-center rounded-full transition-transform ${
                            isSelected
                              ? "bg-red-600 text-white scale-110 shadow-md"
                              : "bg-black/70 text-white group-hover:bg-red-600 group-hover:scale-110"
                          }`}
                        >
                          <Play className="size-4 fill-current ml-0.5" />
                        </div>
                      </div>

                      {/* Video Number Tag */}
                      <span className="absolute top-2 left-2 rounded-xs bg-black/80 px-1.5 py-0.5 font-mono text-[0.65rem] font-bold text-white backdrop-blur-xs">
                        #{idx + 1}
                      </span>

                      {/* Playing Badge */}
                      {isSelected && (
                        <span className="absolute top-2 right-2 rounded-xs bg-red-600 px-2 py-0.5 font-display text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-xs">
                          NOW PLAYING
                        </span>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col justify-between p-3.5 space-y-2">
                      <span className="eyebrow text-[0.65rem] text-primary block truncate font-semibold">
                        {item.service}
                      </span>
                      <h4 className="font-display text-xs font-bold uppercase text-white line-clamp-2 group-hover:text-red-400 transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="font-mono text-[0.65rem] text-steel-muted truncate">
                        📍 {item.location}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}

        {/* 5. INSTAGRAM REELS GALLERY */}
        {activePlatform === "instagram" && (
          <Reveal variant="up" className="mt-14 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-steel-line pb-4">
              <div>
                <h3 className="font-display text-2xl font-extrabold uppercase text-white tracking-wide">
                  INSTAGRAM REELS ({instagramVideos.length})
                </h3>
                <p className="text-xs text-steel-muted mt-1">
                  Verified onsite construction and tin shade fabrication reels from @tinshadenoidawale.
                </p>
              </div>
              <span className="font-mono text-xs text-pink-400 uppercase flex items-center gap-1.5 font-semibold">
                <Instagram className="size-4" /> @tinshadenoidawale
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {instagramVideos.map((item, idx) => {
                const isSelected = idx === activeVideoIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`group relative flex flex-col overflow-hidden rounded-sm border text-left transition-all duration-300 ${
                      isSelected
                        ? "border-pink-500 bg-pink-950/20 ring-2 ring-pink-500/50 shadow-elevated"
                        : "border-steel-line bg-steel/80 hover:border-steel-muted hover:bg-steel"
                    }`}
                  >
                    <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`flex size-9 items-center justify-center rounded-full transition-transform ${
                            isSelected
                              ? "bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 text-white scale-110 shadow-md"
                              : "bg-black/70 text-white group-hover:bg-pink-600 group-hover:scale-110"
                          }`}
                        >
                          <Play className="size-3.5 fill-current ml-0.5" />
                        </div>
                      </div>

                      <div className="absolute bottom-2 inset-x-2">
                        <p className="truncate font-display text-[0.65rem] font-bold uppercase text-white">
                          {item.title}
                        </p>
                        <span className="font-mono text-[0.6rem] text-primary">{item.service}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="content-auto bg-steel-deep/90 border-t border-steel-line py-16 lg:py-24 text-steel-foreground"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal variant="up" className="mx-auto max-w-3xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3 text-primary">
            <span className="h-px w-10 rule-accent" />
            CLIENT TESTIMONIALS
            <span className="h-px w-10 rule-accent" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-steel-muted">
            Trusted by 500+ factory owners, logistics managers, and commercial business owners
            across India.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal
              key={idx}
              variant="up"
              delay={idx * 100}
              className="flex flex-col justify-between rounded-sm border border-steel-line bg-steel/80 p-6 shadow-card transition-all hover:border-primary/50"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-base">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm italic leading-relaxed text-steel-muted">"{t.quote}"</p>
              </div>

              <div className="mt-6 border-t border-steel-line/60 pt-4">
                <p className="font-display text-base font-bold uppercase tracking-wide text-white">
                  {t.name}
                </p>
                <p className="eyebrow text-xs text-primary">
                  {t.role} · {t.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
