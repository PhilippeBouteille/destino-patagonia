"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type FotoGaleria = { src: string; w: number; h: number; alt: string };

/**
 * Carrousel horizontal de photos (hauteur fixe, largeur selon le format de
 * chaque photo, donc aucune photo n'est recadrée) + lightbox au clic
 * (flèches, clavier et balayage tactile). Pensé pour des photos de formats
 * mélangés (portrait / paysage).
 */
export default function GaleriaFotos({
  photos,
  labels,
}: {
  photos: FotoGaleria[];
  labels: { prev: string; next: string; close: string };
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    updateArrows();
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: (dir === "next" ? 1 : -1) * el.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length
      ),
    [photos.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );

  // Clavier + blocage du défilement de la page quand la lightbox est ouverte
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightbox, prev, next]);

  const arrowClass =
    "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl font-bold text-fjord-900 shadow-lg hover:bg-white";

  return (
    <>
      <div className="relative">
        {canPrev && (
          <button
            type="button"
            onClick={() => scroll("prev")}
            className={`${arrowClass} left-3`}
            aria-label={labels.prev}
          >
            ‹
          </button>
        )}

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setLightbox(i)}
              className="h-[260px] shrink-0 snap-start overflow-hidden md:h-[360px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                decoding="async"
                onLoad={updateArrows}
                className="h-full w-auto transition-transform duration-300 hover:scale-105"
              />
            </button>
          ))}
        </div>

        {canNext && (
          <button
            type="button"
            onClick={() => scroll("next")}
            className={`${arrowClass} right-3`}
            aria-label={labels.next}
          >
            ›
          </button>
        )}
      </div>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightbox(null)}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (dx > 50) prev();
            else if (dx < -50) next();
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 text-3xl leading-none text-white/80 hover:text-white"
            aria-label={labels.close}
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 px-2 text-5xl leading-none text-white/80 hover:text-white"
            aria-label={labels.prev}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 px-2 text-5xl leading-none text-white/80 hover:text-white"
            aria-label={labels.next}
          >
            ›
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-sm text-white/60">
            {lightbox + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
