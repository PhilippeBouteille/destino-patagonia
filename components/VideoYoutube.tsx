"use client";

import { useState } from "react";

/**
 * Vidéo YouTube en « façade » : tant que le visiteur n'a pas cliqué, rien
 * n'est chargé depuis YouTube (une photo locale sert d'affiche). Au clic,
 * le lecteur s'intègre via youtube-nocookie.com. Cohérent avec le bandeau
 * cookies du site (pas de suivi tiers au chargement de la page).
 */
export default function VideoYoutube({
  videoId,
  title,
  poster,
  playLabel,
  youtubeLabel,
}: {
  videoId: string;
  title: string;
  poster: string;
  playLabel: string;
  youtubeLabel: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-black">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`${playLabel} : ${title}`}
            className="group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={poster} alt="" className="h-full w-full object-cover" />
            <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/15" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-fjord-900 shadow-lg transition-transform group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="ml-1 h-7 w-7 fill-current"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <p className="mt-3 text-sm text-ice-100">
        {title} ·{" "}
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-glacier-200 underline-offset-4 hover:underline"
        >
          {youtubeLabel}
        </a>
      </p>
    </div>
  );
}
