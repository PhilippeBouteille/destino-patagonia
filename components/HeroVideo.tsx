"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vidéo de fond du Hero (Inicio), en boucle, muette, autoplay.
 * Remplace HeroSlider.tsx — conserve le même positionnement (absolute inset-0 z-0)
 * pour rester compatible avec l'overlay (z-[2]) et le texte (z-[3]) déjà en place
 * dans app/(es)/page.tsx et app/[locale]/page.tsx.
 *
 * Respecte prefers-reduced-motion : affiche l'image poster statique au lieu
 * de lancer la vidéo si l'utilisateur a activé cette préférence système.
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reduceMotion) {
    return (
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: "url(/images/hero-poster.jpg)" }}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 z-0 h-full w-full object-cover"
      src="/videos/hero-video.mp4"
      poster="/images/hero-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
