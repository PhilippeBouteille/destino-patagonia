"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  "/images/DSCN4820.jpg",
  "/images/DSCN3522.jpg",
  "/images/DSCN4808.jpg",
  "/images/DSCN4814.jpg",
  "/images/DSCN4833.jpg",
  "/images/home2-azul.jpg",
  "/images/26.jpg",
  "/images/IMG_20170908_123204290_HDR.jpg",
  "/images/laguna-san-rafael-full-day-destino-patagonia-04.jpg",
  "/images/laguna-san-rafael-full-day-destino-patagonia-01.jpg",
];

const INTERVAL_MS = 5000;
const TRANSITION_MS = 1000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (current + 1) % SLIDES.length;
      setNext(nextIndex);
      setFading(true);
      setTimeout(() => {
        setCurrent(nextIndex);
        setNext(null);
        setFading(false);
      }, TRANSITION_MS);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="absolute inset-0">
      {/* Image courante */}
      <Image
        key={current}
        src={SLIDES[current]}
        alt=""
        fill
        priority={current === 0}
        className="object-cover"
      />
      {/* Image suivante — apparaît en fondu par-dessus */}
      {next !== null && (
        <Image
          key={`next-${next}`}
          src={SLIDES[next]}
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
