import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Film,
  Instagram,
  Loader2,
  Maximize2,
  Minimize2,
  Pause,
  Play,
  RefreshCw,
  Volume2,
  VolumeX,
  Youtube,
} from "lucide-react";
import {
  company,
  instagramReelsList,
  localReels,
  testimonials,
  youtubeReelsList,
  type ReelItem,
} from "@/lib/site-data";
import { triggerQuoteForNeed } from "./QuoteWizard";
import { Reveal } from "./Reveal";

interface ProjectVideoPlayerProps {
  reel: ReelItem;
  isActive: boolean;
  isGlobalMuted: boolean;
  onToggleMute: () => void;
}

/**
 * Dedicated Video Player Component.
 * Contains ONLY the video/iframe and video-specific controls.
 * Information panel and buttons are strictly outside this component.
 */
function ProjectVideoPlayer({
  reel,
  isActive,
  isGlobalMuted,
  onToggleMute,
}: ProjectVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle local HTML5 video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reel.sourceType !== "local") return;

    video.muted = isGlobalMuted;

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setAutoplayBlocked(false);
            setHasError(false);
          })
          .catch((err) => {
            console.warn(`Autoplay blocked for ${reel.id}:`, err);
            setAutoplayBlocked(true);
            setIsPlaying(false);
          });
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isActive, isGlobalMuted, reel.id, reel.sourceType]);

  // VisibilityChange: pause when tab hidden
  useEffect(() => {
    const handleVisibility = () => {
      const video = videoRef.current;
      if (!video || reel.sourceType !== "local") return;

      if (document.hidden) {
        video.pause();
        setIsPlaying(false);
      } else if (isActive) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => setIsPlaying(true)).catch(() => setAutoplayBlocked(true));
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [isActive, reel.sourceType]);

  // Auto-hide controls overlay after 3s of playing
  useEffect(() => {
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    } else {
      setShowControls(true);
    }

    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [isPlaying]);

  function handleUserTapPlay() {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isGlobalMuted;
    video
      .play()
      .then(() => {
        setIsPlaying(true);
        setAutoplayBlocked(false);
        setHasError(false);
      })
      .catch((err) => {
        console.error("Manual play error:", err);
        setHasError(true);
      });
  }

  function togglePlayPause() {
    setShowControls(true);
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      handleUserTapPlay();
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  function handleFullscreenToggle() {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {});
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
    }
  }

  function handleRetryLoad() {
    setHasError(false);
    setIsLoaded(false);
    const video = videoRef.current;
    if (video) {
      video.load();
      handleUserTapPlay();
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative flex size-full items-center justify-center overflow-hidden rounded-xl border-2 border-steel-line bg-black text-white shadow-elevated select-none"
      onClick={() => setShowControls((prev) => !prev)}
    >
      {/* 1. LOCAL ONSITE HTML5 VIDEO PLAYER */}
      {reel.sourceType === "local" && reel.videoUrl ? (
        <video
          ref={videoRef}
          src={reel.videoUrl}
          poster={reel.posterUrl}
          muted={isGlobalMuted}
          playsInline
          loop
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className="size-full object-cover object-center transition-opacity duration-300"
        />
      ) : reel.sourceType === "youtube" && reel.youtubeId ? (
        /* 2. REAL OFFICIAL YOUTUBE EMBED PLAYER */
        <div className="relative size-full overflow-hidden bg-slate-950 flex items-center justify-center">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${reel.youtubeId}?autoplay=${
              isActive ? 1 : 0
            }&mute=${isGlobalMuted ? 1 : 0}&loop=1&playlist=${reel.youtubeId}&controls=1&modestbranding=1&rel=0`}
            title={reel.title}
            className="size-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        /* 3. MINIMALIST INSTAGRAM PREVIEW PLAYER */
        <div className="relative flex size-full flex-col items-center justify-center overflow-hidden bg-slate-950 p-6 text-center">
          <img
            src={reel.posterUrl}
            alt={reel.title}
            className="absolute inset-0 size-full object-cover opacity-25 blur-xs"
          />
          <div className="relative z-10 flex flex-col items-center gap-4 rounded-sm border border-pink-500/30 bg-black/85 p-6 backdrop-blur-md max-w-xs shadow-card">
            <div className="flex size-14 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-0.5 shadow-md">
              <div className="flex size-full items-center justify-center rounded-full bg-black">
                <Instagram className="size-6 text-pink-400" />
              </div>
            </div>
            <div>
              <span className="eyebrow text-[0.65rem] text-pink-400">
                INSTAGRAM REEL · @tin_shade_wearhouse
              </span>
              <h4 className="mt-1 font-display text-base font-bold uppercase text-white">
                {reel.title}
              </h4>
              <p className="mt-1 text-xs text-steel-muted">{reel.description}</p>
            </div>
            <a
              href={reel.instagramUrl || company.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-102"
            >
              Watch on Instagram <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* 2. LOADING SPINNER OVERLAY */}
      {!isLoaded && !hasError && reel.sourceType === "local" && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xs">
          <img
            src={reel.posterUrl}
            alt={reel.title}
            className="absolute inset-0 size-full object-cover opacity-50"
          />
          <div className="relative z-10 flex flex-col items-center gap-3">
            <Loader2 className="size-10 animate-spin text-primary" />
            <span className="eyebrow rounded-sm bg-black/70 px-3 py-1 text-xs text-white">
              LOADING PROJECT VIDEO...
            </span>
          </div>
        </div>
      )}

      {/* 3. AUTOPLAY BLOCKED / TAP TO PLAY OVERLAY */}
      {autoplayBlocked && !hasError && reel.sourceType === "local" && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/75 p-4 backdrop-blur-xs">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleUserTapPlay();
            }}
            className="group flex flex-col items-center gap-3 text-center"
          >
            <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated transition-transform group-hover:scale-110">
              <Play className="size-8 ml-1" />
            </div>
            <span className="font-display text-sm font-bold uppercase tracking-wider text-white">
              ▶ TAP TO PLAY
            </span>
            <span className="eyebrow text-[0.65rem] text-primary">Click to start video</span>
          </button>
        </div>
      )}

      {/* 4. ERROR OVERLAY */}
      {hasError && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/85 p-6 text-center backdrop-blur-xs">
          <AlertTriangle className="size-10 text-signal mb-2" />
          <p className="font-display text-sm font-bold uppercase text-white">VIDEO UNAVAILABLE</p>
          <p className="mt-1 text-xs text-steel-muted max-w-xs">
            Media stream could not be loaded.
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleRetryLoad();
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-sm bg-steel-line px-4 py-2 font-display text-xs font-bold uppercase text-white hover:bg-primary"
          >
            <RefreshCw className="size-3.5" /> TRY AGAIN
          </button>
        </div>
      )}

      {/* 5. PLAYER CONTROLS (ONLY MUTE & FULLSCREEN - RELATIVE TO PLAYER INSIDE) */}
      <div
        className={`absolute inset-x-0 top-0 z-10 flex items-center justify-between p-3.5 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="eyebrow inline-flex items-center gap-1.5 rounded-sm bg-black/60 px-2.5 py-1 text-[0.65rem] font-bold text-white backdrop-blur-xs border border-white/10">
          {reel.sourceType === "local" ? (
            <>
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONSITE VIDEO
            </>
          ) : reel.sourceType === "youtube" ? (
            <>
              <Youtube className="size-3 text-red-400" />
              YOUTUBE
            </>
          ) : (
            <>
              <Instagram className="size-3 text-pink-400" />
              INSTAGRAM
            </>
          )}
        </span>

        {reel.sourceType === "local" && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleMute}
              aria-label={isGlobalMuted ? "Unmute audio" : "Mute audio"}
              className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-primary"
            >
              {isGlobalMuted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
            </button>
            <button
              type="button"
              onClick={handleFullscreenToggle}
              aria-label="Toggle Fullscreen"
              className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-primary"
            >
              {isFullscreen ? (
                <Minimize2 className="size-3.5" />
              ) : (
                <Maximize2 className="size-3.5" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* 6. CENTER PLAY/PAUSE OVERLAY BUTTON */}
      {reel.sourceType === "local" && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            togglePlayPause();
          }}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className={`absolute z-10 flex size-14 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur-xs transition-all duration-300 hover:scale-110 ${
            showControls || !isPlaying
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {isPlaying ? <Pause className="size-6" /> : <Play className="size-6 ml-1 text-primary" />}
        </button>
      )}
    </div>
  );
}

export function Videos() {
  const [activeTab, setActiveTab] = useState<"local" | "instagram" | "youtube">("local");

  const currentReelList =
    activeTab === "local"
      ? localReels
      : activeTab === "instagram"
        ? instagramReelsList
        : youtubeReelsList;

  const [activeReelId, setActiveReelId] = useState<string>(currentReelList[0]!.id);
  const [isGlobalMuted, setIsGlobalMuted] = useState(true);

  // Update active reel id when switching tabs
  useEffect(() => {
    if (currentReelList.length > 0) {
      setActiveReelId(currentReelList[0]!.id);
    }
  }, [activeTab]);

  const activeReelIndex = currentReelList.findIndex((r) => r.id === activeReelId);
  const activeReel = currentReelList[activeReelIndex] || currentReelList[0]!;

  function handleSelectQuote(need: string) {
    triggerQuoteForNeed(need);
  }

  function handleNextVideo() {
    const nextIdx = (activeReelIndex + 1) % currentReelList.length;
    setActiveReelId(currentReelList[nextIdx]!.id);
  }

  function handlePrevVideo() {
    const prevIdx = (activeReelIndex - 1 + currentReelList.length) % currentReelList.length;
    setActiveReelId(currentReelList[prevIdx]!.id);
  }

  return (
    <section
      id="videos"
      className="content-auto relative isolate overflow-hidden bg-steel-deep py-16 text-steel-foreground lg:py-24"
    >
      {/* Background blueprint pattern */}
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* 1. HEADER */}
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
            Explore live videos of our actual crew fabricating MS structures, erecting factory
            sheds, and installing tin roofing across India.
          </p>
        </Reveal>

        {/* 2. THREE INDEPENDENT NAVIGATION TABS */}
        <Reveal variant="up" delay={100} className="mt-10 flex justify-center">
          <div className="inline-flex rounded-sm border border-steel-line bg-steel/90 p-1.5 shadow-card backdrop-blur-xs">
            <button
              type="button"
              onClick={() => setActiveTab("local")}
              className={`inline-flex items-center gap-2 rounded-sm px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "local"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-steel-muted hover:text-white"
              }`}
            >
              <Film className="size-4" />
              ONSITE PROJECT REELS ({localReels.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("instagram")}
              className={`inline-flex items-center gap-2 rounded-sm px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "instagram"
                  ? "bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white shadow-sm"
                  : "text-steel-muted hover:text-white"
              }`}
            >
              <Instagram className="size-4" />
              INSTAGRAM REELS ({instagramReelsList.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("youtube")}
              className={`inline-flex items-center gap-2 rounded-sm px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "youtube"
                  ? "bg-red-600 text-white shadow-sm"
                  : "text-steel-muted hover:text-white"
              }`}
            >
              <Youtube className="size-4" />
              YOUTUBE CHANNEL ({youtubeReelsList.length})
            </button>
          </div>
        </Reveal>

        {/* 3. STRICT 2-COLUMN DESKTOP LAYOUT (NO OVERLAPPING / NO IMAGE-TEXT LAYER ISSUES) */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* LEFT: PROJECT INFORMATION PANEL (Cols 1-5, Desktop 42% width) */}
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-5">
            <Reveal
              variant="left"
              className="space-y-6 rounded-sm border border-steel-line bg-steel/90 p-6 sm:p-8 shadow-card backdrop-blur-xs"
            >
              <div className="flex items-center justify-between border-b border-steel-line pb-4">
                <span className="eyebrow flex items-center gap-2 text-primary font-semibold">
                  <span className="size-2 rounded-full bg-primary animate-pulse" />
                  {activeReel.service}
                </span>
                <span className="font-mono text-xs font-bold text-steel-muted">
                  {activeReelIndex + 1} OF {currentReelList.length}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-extrabold uppercase leading-snug tracking-wide text-white sm:text-3xl">
                  {activeReel.title}
                </h3>
                <p className="text-sm leading-relaxed text-steel-muted sm:text-base">
                  {activeReel.description}
                </p>
              </div>

              {/* Metadata Details */}
              <div className="grid grid-cols-2 gap-4 border-y border-steel-line/60 py-4 text-xs font-mono">
                <div>
                  <span className="block text-steel-muted text-[0.65rem] uppercase">Location</span>
                  <strong className="text-white font-semibold">{activeReel.location}</strong>
                </div>
                <div>
                  <span className="block text-steel-muted text-[0.65rem] uppercase">Platform</span>
                  <strong className="text-primary font-semibold uppercase">
                    ▶ {activeReel.sourceType}
                  </strong>
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={handlePrevVideo}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-steel-line bg-steel-deep px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-steel-muted transition-colors hover:border-primary hover:text-white"
                >
                  <ChevronUp className="size-4" /> PREV REEL
                </button>
                <button
                  type="button"
                  onClick={handleNextVideo}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-steel-line bg-steel-deep px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-steel-muted transition-colors hover:border-primary hover:text-white"
                >
                  NEXT REEL <ChevronDown className="size-4" />
                </button>
              </div>

              {/* Get Quote Button */}
              <button
                type="button"
                onClick={() => handleSelectQuote(activeReel.quoteOptionNeed)}
                className="group flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-4 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
              >
                <span>GET QUOTE FOR {activeReel.service.toUpperCase()}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Reveal>

            {/* Direct Channel Links */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-sm border border-steel-line bg-steel/60 p-4 text-xs text-steel-muted">
              <a
                href="https://www.youtube.com/@DeepEnterprises-yu2vo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-display uppercase tracking-wider text-red-400 hover:underline"
              >
                <Youtube className="size-4" /> Deep Enterprises Channel
              </a>
              <a
                href={company.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-display uppercase tracking-wider text-pink-400 hover:underline"
              >
                <Instagram className="size-4" /> @tin_shade_wearhouse
              </a>
            </div>
          </div>

          {/* RIGHT: DEDICATED VIDEO PLAYER CONTAINER (Cols 6-12, Desktop 58% width) */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex justify-center w-full">
            <div className="relative w-full max-w-[420px] aspect-[9/16] max-h-[640px]">
              <ProjectVideoPlayer
                key={activeReel.id}
                reel={activeReel}
                isActive={true}
                isGlobalMuted={isGlobalMuted}
                onToggleMute={() => setIsGlobalMuted((prev) => !prev)}
              />
            </div>
          </div>
        </div>
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
