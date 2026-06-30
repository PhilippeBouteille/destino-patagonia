"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  "/images/DSCN4820.jpg",
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
    <div className="absolute inset-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={current}
        src={SLIDES[current]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {nextIdx !== null && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`next-${nextIdx}`}
          src={SLIDES[nextIdx]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-opacity"
          style={{
            opacity: fading ? 1 : 0,
            transitionDuration: `${TRANSITION_MS}ms`,
          }}
        />
      )}
    </div>
  );
}
