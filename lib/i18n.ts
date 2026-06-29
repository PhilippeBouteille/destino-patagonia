export type Locale = "es" | "en" | "fr";

export const LOCALES: Locale[] = ["en", "fr"];

type DictKey =
  | "nav_inicio"
  | "nav_aventuras"
  | "nav_logistica"
  | "nav_quienes_somos"
  | "nav_contacto"
  | "hero_kicker"
  | "hero_title"
  | "hero_text"
  | "ver_aventuras"
  | "nuestras_aventuras"
  | "postales"
  | "desde"
  | "duracion"
  | "temporada"
  | "incluye"
  | "reservar"
  | "contacto_intro"
  | "telefono"
  | "email"
  | "direccion";

const dict: Record<Locale, Record<DictKey, string>> = {
  es: {
    nav_inicio: "Inicio",
    nav_aventuras: "Aventuras",
    nav_logistica: "Logística",
    nav_quienes_somos: "Quiénes somos",
    nav_contacto: "Contacto",
    hero_kicker: "Puerto Río Tranquilo · Aysén",
    hero_title: "Navegando hacia el corazón de Laguna San Rafael",
    hero_text:
      "Desde 2009 abrimos rutas de navegación y kayak por los fiordos de la Patagonia Aysén, hasta el glaciar San Rafael.",
    ver_aventuras: "Ver aventuras",
    nuestras_aventuras: "Nuestras aventuras",
    postales: "Postales de nuestras aventuras",
    desde: "desde",
    duracion: "Duración",
    temporada: "Temporada",
    incluye: "Incluye",
    reservar: "Reservar este tour",
    contacto_intro: "Escríbenos para reservar tu aventura o coordinar un viaje especial.",
    telefono: "Teléfono",
    email: "Email",
    direccion: "Dirección",
  },
  en: {
    nav_inicio: "Home",
    nav_aventuras: "Adventures",
    nav_logistica: "Logistics",
    nav_quienes_somos: "About us",
    nav_contacto: "Contact",
    hero_kicker: "Puerto Río Tranquilo · Aysén",
    hero_title: "Sailing to the heart of Laguna San Rafael",
    hero_text:
      "Since 2009 we have run sailing and kayaking routes through the fjords of Patagonia Aysén, all the way to the San Rafael glacier.",
    ver_aventuras: "See adventures",
    nuestras_aventuras: "Our adventures",
    postales: "Postcards from our adventures",
    desde: "from",
    duracion: "Duration",
    temporada: "Season",
    incluye: "Includes",
    reservar: "Book this tour",
    contacto_intro: "Write to us to book your adventure or arrange a special trip.",
    telefono: "Phone",
    email: "Email",
    direccion: "Address",
  },
  fr: {
    nav_inicio: "Accueil",
    nav_aventuras: "Aventures",
    nav_logistica: "Logistique",
    nav_quienes_somos: "Qui sommes-nous",
    nav_contacto: "Contact",
    hero_kicker: "Puerto Río Tranquilo · Aysén",
    hero_title: "Naviguer vers le cœur de Laguna San Rafael",
    hero_text:
      "Depuis 2009, nous proposons des routes de navigation et de kayak à travers les fjords de la Patagonie Aysén, jusqu'au glacier San Rafael.",
    ver_aventuras: "Voir les aventures",
    nuestras_aventuras: "Nos aventures",
    postales: "Cartes postales de nos aventures",
    desde: "dès",
    duracion: "Durée",
    temporada: "Saison",
    incluye: "Inclus",
    reservar: "Réserver ce circuit",
    contacto_intro: "Écrivez-nous pour réserver votre aventure ou organiser un voyage spécial.",
    telefono: "Téléphone",
    email: "Email",
    direccion: "Adresse",
  },
};

export function t(locale: Locale, key: DictKey): string {
  return dict[locale]?.[key] ?? dict.es[key];
}

export function localePrefix(locale: Locale): string {
  return locale === "es" ? "" : `/${locale}`;
}

/**
 * Lit un champ traduit sur un objet venant de Supabase, avec repli sur
 * l'espagnol (colonne sans suffixe) si la traduction est vide ou absente.
 */
export function pickField<T extends Record<string, unknown>>(
  obj: T,
  field: string,
  locale: Locale
): string {
  if (locale === "es") return (obj[field] as string) ?? "";
  const translated = obj[`${field}_${locale}`];
  if (typeof translated === "string" && translated.length > 0) return translated;
  return (obj[field] as string) ?? "";
}

export function pickArrayField<T extends Record<string, unknown>>(
  obj: T,
  field: string,
  locale: Locale
): string[] {
  if (locale === "es") return (obj[field] as string[]) ?? [];
  const translated = obj[`${field}_${locale}`];
  if (Array.isArray(translated) && translated.length > 0) return translated as string[];
  return (obj[field] as string[]) ?? [];
}
