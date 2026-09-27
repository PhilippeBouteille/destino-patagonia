// Construit un lien wa.me à partir d'un numéro de téléphone (même logique
// que dans Footer.tsx — extraite ici pour être réutilisée, ex. Contacto).
export function whatsappLink(telefono: string) {
  const digits = telefono.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}
