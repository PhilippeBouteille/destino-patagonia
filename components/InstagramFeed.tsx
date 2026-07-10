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

const TEXT: Record<Locale, { titulo: string; ver: string }> = {
  es: { titulo: "Síguenos en Instagram", ver: "Ver perfil" },
  en: { titulo: "Follow us on Instagram", ver: "View profile" },
  fr: { titulo: "Suivez-nous sur Instagram", ver: "Voir le profil" },
};

export default function InstagramFeed({ locale = "es" }: { locale?: Locale }) {
  if (!FEED_ID) return null; // pas de feed configuré — section masquée

  const t = TEXT[locale];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-fjord-900">{t.titulo}</h2>
        <a
          href="https://www.instagram.com/destinopatagonia/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-wide text-fjord-700 hover:text-glacier-400"
        >
          {t.ver} →
        </a>
      </div>
      <div className="mt-8 min-h-[200px]">
        <BeholdWidget feedId={FEED_ID} />
      </div>
    </section>
  );
}
