import { useEffect, useState, useRef } from "react";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
}

export function NumberTicker({
  value,
  direction = "up",
  className = "",
  delay = 0,
  duration = 2000,
}: NumberTickerProps) {
  const [current, setCurrent] = useState(direction === "down" ? value : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const timeout = setTimeout(() => {
      let startTimestamp: number | null = null;
      const startValue = direction === "down" ? value : 0;
      const targetValue = direction === "down" ? 0 : value;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Smooth easeOutCubic curve (0.215, 0.61, 0.355, 1)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const nextValue = Math.round(startValue + (targetValue - startValue) * easeOut);
        
        setCurrent(nextValue);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeout);
  }, [hasAnimated, value, direction, delay, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {current}
    </span>
  );
}
