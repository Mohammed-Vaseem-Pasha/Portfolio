"use client";

import { useCallback, useEffect, useRef, type CSSProperties, type PointerEvent } from "react";

const DESKTOP_RADIUS = 235;
const MOBILE_RADIUS = 160;

type Point = { x: number; y: number };

export default function GlassHero() {
  const containerRef = useRef<HTMLElement | null>(null);

  const raw = useRef<Point>({ x: -999, y: -999 });
  const smoothed = useRef<Point>({ x: -999, y: -999 });
  const currentRadius = useRef(0);
  const targetRadius = useRef(0);
  const isHovered = useRef(false);
  const isTracking = useRef(false);
  const frameId = useRef<number | null>(null);
  const reducedMotion = useRef(false);

  const getRelativePoint = useCallback((clientX: number, clientY: number): Point => {
    const el = containerRef.current;
    if (!el) return { x: -999, y: -999 };
    const rect = el.getBoundingClientRect();
    return { x: clientX - rect.left, y: clientY - rect.top };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = motionQuery.matches;
    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion.current = event.matches;
    };
    motionQuery.addEventListener("change", handleMotionChange);

    const tick = () => {
      if (isHovered.current || isTracking.current) {
        targetRadius.current = window.innerWidth <= 767 ? MOBILE_RADIUS : DESKTOP_RADIUS;
      } else {
        targetRadius.current = 0;
      }

      if (smoothed.current.x < -100 && raw.current.x > 0) {
        smoothed.current = { ...raw.current };
      }

      const posFactor = reducedMotion.current ? 1 : 0.15;
      const radiusFactor = reducedMotion.current ? 1 : 0.15;

      smoothed.current.x += (raw.current.x - smoothed.current.x) * posFactor;
      smoothed.current.y += (raw.current.y - smoothed.current.y) * posFactor;
      currentRadius.current += (targetRadius.current - currentRadius.current) * radiusFactor;

      const radius = Math.max(currentRadius.current, 0);

      el.style.setProperty("--reveal-x", `${Math.round(smoothed.current.x)}px`);
      el.style.setProperty("--reveal-y", `${Math.round(smoothed.current.y)}px`);
      el.style.setProperty("--reveal-radius", `${Math.round(radius)}px`);

      frameId.current = requestAnimationFrame(tick);
    };

    frameId.current = requestAnimationFrame(tick);

    const handleGlobalMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        isHovered.current = true;
        raw.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      } else {
        isHovered.current = false;
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove, { passive: true });

    return () => {
      if (frameId.current !== null) cancelAnimationFrame(frameId.current);
      motionQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  const handlePointerEnter = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (event.pointerType !== "mouse") return;
      isHovered.current = true;
      raw.current = getRelativePoint(event.clientX, event.clientY);
    },
    [getRelativePoint]
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (event.pointerType === "mouse") {
        isHovered.current = true;
        raw.current = getRelativePoint(event.clientX, event.clientY);
        return;
      }
      if (isTracking.current) {
        raw.current = getRelativePoint(event.clientX, event.clientY);
      }
    },
    [getRelativePoint]
  );

  const handlePointerLeave = useCallback((event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    isHovered.current = false;
  }, []);

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (event.pointerType === "mouse") return;
      isTracking.current = true;
      const target = event.currentTarget;
      if (target.setPointerCapture) {
        try {
          target.setPointerCapture(event.pointerId);
        } catch {
          // Pointer capture is best-effort
        }
      }
      raw.current = getRelativePoint(event.clientX, event.clientY);
    },
    [getRelativePoint]
  );

  const endTouch = useCallback((event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse") return;
    isTracking.current = false;
    isHovered.current = false;
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="glass-hero"
      style={
        {
          "--reveal-x": "50%",
          "--reveal-y": "50%",
          "--reveal-radius": "0px",
        } as CSSProperties
      }
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={endTouch}
      onPointerCancel={endTouch}
    >
      <div className="hero-layer hero-base" aria-hidden="true" />
      <div className="hero-layer hero-reveal" aria-hidden="true" />

      <div className="hero-grid" aria-hidden="true">
        <div className="hero-grid-circle" />
      </div>

      <header className="hero-nav">
        <a href="#top" className="hero-brand" aria-label="Mohammed Vaseem Pasha, home">
          <span className="hero-monogram" aria-hidden="true">
            <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1" />
              <path
                d="M12 30V14L22 25L32 14V30"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </span>
          <span className="hero-name">Mohammed Vaseem Pasha</span>
        </a>

        <div className="hero-nav-right">
          <nav className="hero-links hero-nav-pill" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#projects">Work</a>
            <a href="#internship">Process</a>
            <a href="#skills">Experiments</a>
          </nav>

          <a
            href="mailto:mdvaseempashasss@gmail.com"
            className="hero-cta"
          >
            Let&rsquo;s talk
          </a>
        </div>
      </header>

      <div className="hero-headline">
        <h1>
          <span className="hero-line" style={{ animationDelay: "0.15s" }}>
            Building
          </span>
          <span className="hero-line" style={{ animationDelay: "0.3s" }}>
            Digital
          </span>
          <span className="hero-line" style={{ animationDelay: "0.45s" }}>
            Experiences.
          </span>
        </h1>
      </div>

      <div className="hero-bottom">
        <p className="hero-intro">
          I&rsquo;m a passionate web developer who turns ideas into clean, engaging digital
          experiences while exploring the intersection of technology, data, and process
          intelligence.
        </p>
        <a
          href="https://github.com/Mohammed-Vaseem-Pasha"
          target="_blank"
          rel="noreferrer"
          className="hero-explore"
        >
          Explore my work
        </a>
      </div>

      <div className="hero-tagline" aria-hidden="true">
        <span>BUILDING THE</span>
        <span>WEB OF</span>
        <span>WHAT&rsquo;S NEXT</span>
      </div>
    </section>
  );
}
