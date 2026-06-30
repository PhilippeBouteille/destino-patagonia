"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  "/images/home-azul.jpg",
  "/images/DSCN3522.jpg",
];

const INTERVAL_MS = 6000;
const TRANSITION_MS = 1200;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [nextIdx, setNextIdx] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const n = (current + 1) % SLIDES.length;
      setNextIdx(n);
      setFading(true);
      setTimeout(() => {
        setCurrent(n);
        setNextIdx(null);
        setFading(false);
      }, TRANSITION_MS);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <>
      {/* Image courante — z-0 */}
      <div
        key={current}
        className="absolute inset-0 z-0 bg-center bg-cover transition-none"
        style={{ backgroundImage: `url(${SLIDES[current]})` }}
      />
      {/* Image suivante — z-[1], fond en fondu */}
      {nextIdx !== null && (
        <div
          key={`next-${nextIdx}`}
          className="absolute inset-0 z-[1] bg-center bg-cover transition-opacity"
          style={{
            backgroundImage: `url(${SLIDES[nextIdx]})`,
            opacity: fading ? 1 : 0,
            transitionDuration: `${TRANSITION_MS}ms`,
          }}
        />
      )}
    </>
  );
}
