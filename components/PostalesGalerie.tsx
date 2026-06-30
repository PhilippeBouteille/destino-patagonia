"use client";

import { useState, useRef, useEffect } from "react";

const PHOTOS = [
  "/images/26.jpg",
  "/images/27.jpg",
  "/images/IMG_20170908_123204290_HDR.jpg",
  "/images/laguna-san-rafael-full-day-destino-patagonia-04.jpg",
  "/images/laguna-san-rafael-full-day-destino-patagonia-01.jpg",
  "/images/DSCN4807.jpg",
  "/images/DSCN4808.jpg",
  "/images/DSCN4814.jpg",
  "/images/DSCN4835.jpg",
  "/images/DSCN9327.jpg",
];

export default function PostalesGalerie({ altPrefix }: { altPrefix: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    updateArrows();
    return () => el.removeEventListener("scroll", updateArrows);
  }, []);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const step = el.clientWidth / 5;
    el.scrollBy({ left: dir === "next" ? step * 2 : -step * 2, behavior: "smooth" });
  };

  const prev = () =>
    setLightbox((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length));
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % PHOTOS.length));

  return (
    <>
      {/* Carrousel — déborde sur toute la largeur de l'écran */}
      <div className="relative mt-8" style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw" }}>

        {/* Flèche gauche */}
        {canPrev && (
          <button
            onClick={() => scroll("prev")}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white text-fjord-900 text-2xl font-bold"
            aria-label="Anterior"
          >
            ‹
          </button>
        )}

        {/* Piste de défilement */}
        <div
          ref={trackRef}
          className="flex overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", gap: "2px" }}
        >
          {PHOTOS.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightbox(i)}
              className="shrink-0 overflow-hidden focus:outline-none"
              style={{ height: "340px", width: "20vw", minWidth: "160px" }}
            >
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: `url(${src})` }}
              />
            </button>
          ))}
        </div>

        {/* Flèche droite */}
        {canNext && (
          <button
            onClick={() => scroll("next")}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white text-fjord-900 text-2xl font-bold"
            aria-label="Siguiente"
          >
            ›
          </button>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative h-[85vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTOS[lightbox]}
              alt={`${altPrefix} ${lightbox + 1}`}
              className="h-full w-full object-contain"
            />
          </div>

          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 text-white/80 hover:text-white text-3xl leading-none"
            aria-label="Cerrar"
          >
            ×
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl leading-none px-2"
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl leading-none px-2"
            aria-label="Siguiente"
          >
            ›
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono">
            {lightbox + 1} / {PHOTOS.length}
          </p>
        </div>
      )}
    </>
  );
}
