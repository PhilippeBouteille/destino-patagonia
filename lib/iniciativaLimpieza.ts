import type { Locale } from "@/lib/i18n";
import type { FotoGaleria } from "@/components/GaleriaFotos";

/**
 * Photos du bloc « Limpieza de Playas » de la page Iniciativas
 * (index 1 du tableau `bloques`). Fichiers dans /public/images/limpieza.
 */

const FILES: { file: string; w: number; h: number }[] = [
  { file: "limpieza-01.jpg", w: 1600, h: 1200 },
  { file: "limpieza-02.jpg", w: 1200, h: 1600 },
  { file: "limpieza-03.jpg", w: 1200, h: 1600 },
];

const ALTS: Record<Locale, string[]> = {
  es: [
    "Voluntarios en la playa junto a una embarcación, con témpanos y montañas al fondo",
    "Clasificación de redes y cuerdas recogidas en la playa, sobre una lona azul",
    "Voluntarios separando residuos en la playa, con el lago y las montañas al fondo",
  ],
  en: [
    "Volunteers on the beach next to a boat, with icebergs and mountains behind",
    "Sorting nets and ropes collected on the beach, on a blue tarp",
    "Volunteers sorting debris on the beach, with the lake and mountains behind",
  ],
  fr: [
    "Bénévoles sur la plage près d'une embarcation, avec des icebergs et des montagnes au fond",
    "Tri de filets et de cordes ramassés sur la plage, sur une bâche bleue",
    "Bénévoles triant des déchets sur la plage, avec le lac et les montagnes au fond",
  ],
};

const LABELS: Record<Locale, { prev: string; next: string; close: string }> = {
  es: { prev: "Anterior", next: "Siguiente", close: "Cerrar" },
  en: { prev: "Previous", next: "Next", close: "Close" },
  fr: { prev: "Précédente", next: "Suivante", close: "Fermer" },
};

export function limpiezaFotos(locale: Locale): {
  photos: FotoGaleria[];
  labels: { prev: string; next: string; close: string };
} {
  return {
    photos: FILES.map((f, i) => ({
      src: `/images/limpieza/${f.file}`,
      w: f.w,
      h: f.h,
      alt: ALTS[locale][i] ?? "",
    })),
    labels: LABELS[locale],
  };
}
