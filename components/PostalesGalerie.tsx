"use client";

import { useState } from "react";
import Image from "next/image";

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

  const prev = () =>
    setLightbox((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length));
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % PHOTOS.length));

  return (
    <>
      {/* Grille */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {PHOTOS.map((src, i) => (
          <button
            key={src}
            onClick={() => setLightbox(i)}
            className="relative aspect-[4/3] overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-glacier-400"
          >
            <Image
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              fill
              unoptimized
              className="object-cover transition duration-300 hover:scale-105"
            />
          </button>
        ))}
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
            <Image
              src={PHOTOS[lightbox]}
              alt={`${altPrefix} ${lightbox + 1}`}
              fill
              unoptimized
              className="object-contain"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl leading-none px-2"
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl leading-none px-2"
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
