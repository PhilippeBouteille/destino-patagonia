import type { Locale } from "@/lib/i18n";
import type { FotoGaleria } from "@/components/GaleriaFotos";

/**
 * Bloc « Libro : Istmo de Ofqui… » de la page Iniciativas (index 3 du
 * tableau `bloques`) : photo du livre + lien vers la fiche de l'éditeur.
 * Le livre n'a pas de version numérique ; la fiche Ñire Negro est le seul
 * lien en ligne (et peut indiquer « Agotado » selon le stock).
 */

export const LIBRO_URL =
  "https://www.nirenegro.cl/istmo-de-ofqui-un-proceso-inconcluso-de-conectividad-en-la-zona-sur-austral";

const ALT: Record<Locale, string> = {
  es: "Portada del libro «Istmo de Ofqui» sobre una playa de grava, rodeada de bosque",
  en: "Cover of the book “Istmo de Ofqui” on a gravel beach, surrounded by forest",
  fr: "Couverture du livre « Istmo de Ofqui » posée sur une plage de galets, entourée de forêt",
};

export const LIBRO_LINK_LABEL: Record<Locale, string> = {
  es: "Ver el libro en la editorial Ñire Negro",
  en: "See the book on the Ñire Negro publisher's site",
  fr: "Voir le livre sur le site des éditions Ñire Negro",
};

export function libroFoto(locale: Locale): {
  photos: FotoGaleria[];
  labels: { prev: string; next: string; close: string };
} {
  return {
    photos: [
      { src: "/images/libro-istmo-ofqui.jpg", w: 1600, h: 1200, alt: ALT[locale] },
    ],
    labels: { prev: "", next: "", close: "" },
  };
}
