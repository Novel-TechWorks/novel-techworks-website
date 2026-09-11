"use client";

import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const scene = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const progress =
        media.matches || paused
          ? 0
          : Math.min(window.scrollY / window.innerHeight, 1.5);
      scene.current?.style.setProperty("--scroll", String(progress));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    media.addEventListener("change", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      media.removeEventListener("change", schedule);
      cancelAnimationFrame(frame);
    };
  }, [paused]);
  return (
    <div className={`experience ${paused ? "is-paused" : ""}`} ref={scene}>
      <div className="scene" aria-hidden="true">
        <div className="scene-glow" />
        <div className="sculpture-position">
          <div className="sculpture">
            {Array.from({ length: 12 }, (_, i) => (
              <span
                className="monogram-layer"
                key={i}
                style={{ transform: `translateZ(${i * 3}px)` }}
              >
                N
              </span>
            ))}
          </div>
        </div>
        <span className="scene-label label-top">A DIFFERENT DIMENSION</span>
        <span className="scene-label label-bottom">DESIGNED TO MOVE</span>
      </div>
      <button
        className="motion-toggle"
        onClick={() => setPaused(!paused)}
        aria-pressed={paused}
      >
        {paused ? "Play motion" : "Pause motion"}
        <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
      </button>
    </div>
  );
}
