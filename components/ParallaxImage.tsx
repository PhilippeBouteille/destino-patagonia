"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Image de fond avec effet parallax (défile plus lentement que le reste de
 * la page au scroll). Même positionnement (absolute inset-0, z-0) que
 * HeroVideo.tsx, pour rester compatible avec un overlay (z-[2]) et un
 * texte (z-[3]) posés par-dessus dans la section qui l'utilise — cette
 * section doit être `position: relative`.
 *
 * Respecte prefers-reduced-motion : désactive le mouvement et garde
 * l'image simplement centrée, sans parallax.
 */
export default function ParallaxImage({
  src,
  alt,
  speed = 0.25,
}: {
  src: string;
  alt: string;
  speed?: number;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const el = imgRef.current;
    const section = el?.parentElement;
    if (!el || !section) return;

    function update() {
      const rect = section!.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      // L'image dépasse le cadre de 60 % de sa hauteur (30 % de chaque
      // côté) : le décalage max autorisé reste dans cette marge pour ne
      // jamais découvrir de bord vide.
      const maxOffset = window.innerHeight * 0.3;
      let offset = (viewportCenter - sectionCenter) * speed;
      offset = Math.max(-maxOffset, Math.min(maxOffset, offset));
      el!.style.transform = `translate3d(0, calc(-50% + ${offset}px), 0)`;
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduceMotion, speed]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className="absolute left-0 top-1/2 z-0 h-[160%] w-full -translate-y-1/2 object-cover will-change-transform"
    />
  );
}
