import type { Locale } from "@/lib/i18n";

/**
 * Bloc « Aporte en publicaciones e investigación científica » de la page
 * Iniciativas (index 4 du tableau `bloques`) : liste de publications +
 * vidéo du CEAZA. Contenu en dur ici (le bloc en base ne garde que le
 * paragraphe d'introduction).
 *
 * Seule publication listée : l'article de la Revista de Aysenología n° 11
 * (2022), dont Daniel Torres est co-auteur — lien vers la fiche
 * ResearchGate relevée dans l'en-tête du PDF fourni. Les deux autres
 * fichiers du Drive (rapport préliminaire 2019, rapport de monitoring 2023)
 * sont des brouillons non publiés : à ajouter ici une fois finalisés.
 */

export const PUBLICACIONES_VIDEO_ID = "XnuwzbOh100";
export const PUBLICACIONES_VIDEO_POSTER = "/images/sei/sei-04.jpg";
export const PUBLICACIONES_VIDEO_CREDIT = "Centro Científico CEAZA";

export const ARTICULO_URL = "https://www.researchgate.net/publication/360643977";

export const PUBLICACIONES_TEXT: Record<
  Locale,
  {
    publicaciones: string;
    video: string;
    videoNombre: string;
    articuloTitle: string;
    revista: string;
    revistaRef: string;
    verArticulo: string;
  }
> = {
  es: {
    publicaciones: "Publicaciones",
    video: "Video",
    videoNombre: "El misterio de las ballenas",
    articuloTitle:
      "Arqueología, pasos y barreras naturales alrededor de Campos de Hielo Norte (Aysén, Chile).",
    revista: "Revista de Aysenología",
    revistaRef: ", 11, 33–49. Coyhaique.",
    verArticulo: "Ver el artículo",
  },
  en: {
    publicaciones: "Publications",
    video: "Video",
    videoNombre: "El misterio de las ballenas",
    articuloTitle:
      "Archaeological records, crossings and natural barriers surrounding the North Ice Fields (Aysén, Chile).",
    revista: "Revista de Aysenología",
    revistaRef: ", 11, 33–49. Coyhaique.",
    verArticulo: "View the article",
  },
  fr: {
    publicaciones: "Publications",
    video: "Vidéo",
    videoNombre: "El misterio de las ballenas",
    articuloTitle:
      "Arqueología, pasos y barreras naturales alrededor de Campos de Hielo Norte (Aysén, Chile) [en espagnol].",
    revista: "Revista de Aysenología",
    revistaRef: ", 11, 33–49. Coyhaique.",
    verArticulo: "Voir l'article",
  },
};
