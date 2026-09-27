/**
 * Position CSS `object-position` du hero de chaque page programme (sept.
 * 2026). Le hero est en `object-cover` sur une hauteur fixe (cf. pages
 * tour), donc par défaut le centre de la photo est cadré — ce qui coupait
 * le bateau sur Full Day (positionné en bas à droite de la photo) et
 * l'oiseau sur Zodiac (en haut à gauche). Ajusté au cas par cas plutôt
 * qu'un recadrage fichier séparé, pour rester sur la photo complète.
 */
export const TOUR_HERO_FOCUS: Record<string, string> = {
  "laguna-san-rafael-full-day": "center 82%",
  "vive-san-rafael-kayak": "center 25%",
};

export function tourHeroFocus(slug: string): string {
  return TOUR_HERO_FOCUS[slug] ?? "center";
}
