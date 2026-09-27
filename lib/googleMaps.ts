// Construit un lien de recherche Google Maps à partir d'une adresse en
// texte libre (pas d'embed de carte, juste un lien qui ouvre Google Maps).
export function googleMapsLink(direccion: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    direccion
  )}`;
}
