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
  | "direccion"
  | "cookie_banner_text"
  | "cookie_learn_more"
  | "cookie_accept"
  | "cookie_back"
  | "privacy_title"
  | "privacy_subtitle"
  | "privacy_s1_title"
  | "privacy_s1_text"
  | "privacy_s2_title"
  | "privacy_s2_text"
  | "privacy_s3_title"
  | "privacy_s3_text"
  | "privacy_s4_title"
  | "privacy_s4_text"
  | "privacy_s5_title"
  | "privacy_s5_text";

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
    cookie_banner_text:
      "Este sitio utiliza cookies técnicas esenciales para su funcionamiento. No utilizamos cookies de seguimiento ni publicidad. Al continuar navegando, aceptas su uso.",
    cookie_learn_more: "Más información",
    cookie_accept: "Entendido",
    cookie_back: "← Volver",
    privacy_title: "Política de Privacidad",
    privacy_subtitle: "Última actualización: junio 2026",
    privacy_s1_title: "¿Qué información recopilamos?",
    privacy_s1_text:
      "Este sitio no utiliza herramientas de análisis de terceros (Google Analytics, Meta Pixel, etc.) ni cookies de seguimiento. Las únicas cookies presentes son técnicas: la sesión de acceso al panel de administración y el registro de que has visto este aviso.",
    privacy_s2_title: "¿Cómo usamos tus datos?",
    privacy_s2_text:
      "Si nos contactas por teléfono o correo electrónico, usamos esos datos únicamente para responder a tu solicitud. No los vendemos ni los compartimos con terceros.",
    privacy_s3_title: "Cookies utilizadas",
    privacy_s3_text:
      "— Sesión del panel de administración (técnica, necesaria para el equipo de Destino Patagonia)\n— Consentimiento de este aviso (localStorage, sin expiración)\n\nNinguna de estas cookies identifica a los visitantes del sitio ni se comparte con terceros.",
    privacy_s4_title: "Tus derechos",
    privacy_s4_text:
      "De acuerdo con la Ley 21.096 de Chile y el RGPD (si nos visitas desde la UE), tienes derecho a acceder, rectificar o eliminar tus datos personales. Para ejercer estos derechos, escríbenos a:",
    privacy_s5_title: "Alojamiento y servicios técnicos",
    privacy_s5_text:
      "Este sitio está alojado en Vercel (vercel.com) y utiliza Supabase (supabase.com) como base de datos. Puedes consultar sus políticas de privacidad en sus respectivos sitios web.",
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
    cookie_banner_text:
      "This site uses essential technical cookies for its operation. We do not use tracking or advertising cookies. By continuing to browse, you accept their use.",
    cookie_learn_more: "Learn more",
    cookie_accept: "Got it",
    cookie_back: "← Back",
    privacy_title: "Privacy Policy",
    privacy_subtitle: "Last updated: June 2026",
    privacy_s1_title: "What information do we collect?",
    privacy_s1_text:
      "This site does not use third-party analytics tools (Google Analytics, Meta Pixel, etc.) or tracking cookies. The only cookies present are technical: the admin panel login session and a record that you've seen this notice.",
    privacy_s2_title: "How do we use your data?",
    privacy_s2_text:
      "If you contact us by phone or email, we use that information only to respond to your request. We do not sell or share it with third parties.",
    privacy_s3_title: "Cookies used",
    privacy_s3_text:
      "— Admin panel session (technical, needed by the Destino Patagonia team)\n— Consent for this notice (localStorage, no expiry)\n\nNone of these cookies identify site visitors or are shared with third parties.",
    privacy_s4_title: "Your rights",
    privacy_s4_text:
      "Under Chile's Law 21.096 and the GDPR (if you visit us from the EU), you have the right to access, correct or delete your personal data. To exercise these rights, write to us at:",
    privacy_s5_title: "Hosting and technical services",
    privacy_s5_text:
      "This site is hosted on Vercel (vercel.com) and uses Supabase (supabase.com) as its database. You can review their privacy policies on their respective websites.",
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
    cookie_banner_text:
      "Ce site utilise des cookies techniques essentiels à son fonctionnement. Nous n'utilisons pas de cookies de suivi ni de publicité. En continuant à naviguer, vous acceptez leur utilisation.",
    cookie_learn_more: "En savoir plus",
    cookie_accept: "J'ai compris",
    cookie_back: "← Retour",
    privacy_title: "Politique de confidentialité",
    privacy_subtitle: "Dernière mise à jour : juin 2026",
    privacy_s1_title: "Quelles informations collectons-nous ?",
    privacy_s1_text:
      "Ce site n'utilise pas d'outils d'analyse tiers (Google Analytics, Meta Pixel, etc.) ni de cookies de suivi. Les seuls cookies présents sont techniques : la session de connexion au panneau d'administration et l'enregistrement du fait que vous avez vu cet avis.",
    privacy_s2_title: "Comment utilisons-nous vos données ?",
    privacy_s2_text:
      "Si vous nous contactez par téléphone ou e-mail, nous utilisons ces informations uniquement pour répondre à votre demande. Nous ne les vendons ni ne les partageons avec des tiers.",
    privacy_s3_title: "Cookies utilisés",
    privacy_s3_text:
      "— Session du panneau d'administration (technique, nécessaire à l'équipe de Destino Patagonia)\n— Consentement à cet avis (localStorage, sans expiration)\n\nAucun de ces cookies n'identifie les visiteurs du site ni n'est partagé avec des tiers.",
    privacy_s4_title: "Vos droits",
    privacy_s4_text:
      "Conformément à la loi chilienne 21.096 et au RGPD (si vous nous visitez depuis l'UE), vous avez le droit d'accéder à vos données personnelles, de les rectifier ou de les supprimer. Pour exercer ces droits, écrivez-nous à :",
    privacy_s5_title: "Hébergement et services techniques",
    privacy_s5_text:
      "Ce site est hébergé sur Vercel (vercel.com) et utilise Supabase (supabase.com) comme base de données. Vous pouvez consulter leurs politiques de confidentialité sur leurs sites respectifs.",
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
