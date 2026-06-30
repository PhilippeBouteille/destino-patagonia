"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
      <Image
        key={current}
        src={SLIDES[current]}
        alt=""
        fill
        priority={current === 0}
        className="object-cover"
      />
      {nextIdx !== null && (
        <Image
          key={`next-${nextIdx}`}
          src={SLIDES[nextIdx]}
          alt=""
          fill
          className="object-cover transition-opacity"
          style={{
            opacity: fading ? 1 : 0,
            transitionDuration: `${TRANSITION_MS}ms`,
          }}
        />
      )}
    </div>
  );
}
