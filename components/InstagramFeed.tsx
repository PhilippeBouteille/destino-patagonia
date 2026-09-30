"use client";

import BeholdWidget from "@behold/react";
import type { Locale } from "@/lib/i18n";

/**
 * Flux Instagram via Behold (behold.so).
 *
 * ⚠ Ne fonctionne qu'une fois NEXT_PUBLIC_BEHOLD_FEED_ID configuré dans
 * Vercel (Project Settings → Environment Variables). Cet ID s'obtient
 * en créant un compte Behold, en connectant le compte Instagram
 * @destinopatagonia, puis en créant un feed — l'ID est visible dans
 * "Embed Code" sur le dashboard Behold. Pas de token/secret à gérer,
 * pas de renouvellement périodique (contrairement à instafeed.js) —
 * Behold s'occupe de l'authentification et du rafraîchissement.
 *
 * Sans NEXT_PUBLIC_BEHOLD_FEED_ID, le composant n'affiche rien plutôt
 * qu'une erreur visible.
 *
 * Le composant Behold ne se pré-rend pas côté serveur (client-only) —
 * une hauteur minimale est appliquée au conteneur pour éviter un saut
 * de mise en page pendant le chargement.
 */

const FEED_ID = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID ?? "";

const TEXT: Record<Locale, { titulo: string }> = {
  es: { titulo: "Síguenos en Instagram" },
  en: { titulo: "Follow us on Instagram" },
  fr: { titulo: "Suivez-nous sur Instagram" },
};

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 shrink-0 fill-current text-glacier-400"
    >
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.9 1.4 1.4 0 000-2.9z" />
    </svg>
  );
}

export default function InstagramFeed({ locale = "es" }: { locale?: Locale }) {
  if (!FEED_ID) return null; // pas de feed configuré — section masquée

  const t = TEXT[locale];

  return (
    <section className="py-16">
      {/* Titre et widget partagent le même conteneur : le bord gauche du
          logo est donc aligné sur le bord gauche des photos. Le titre
          renvoie directement vers le profil. */}
      <div className="mx-auto w-full max-w-[992px] px-4">
        <a
          href="https://www.instagram.com/destinopatagonia/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-display text-2xl text-fjord-900 hover:text-fjord-700"
        >
          <InstagramIcon />
          {t.titulo}
        </a>
        <div className="mt-8 min-h-[200px] w-full">
          <BeholdWidget feedId={FEED_ID} />
        </div>
      </div>
    </section>
  );
}
