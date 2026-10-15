import type { Locale } from "@/lib/i18n";

/**
 * Contenu de la sous-page « Proyecto SEI Viajera de los Mares »
 * (/iniciativas/sei-viajera-de-los-mares), en dur dans le code — la page
 * mêle texte, vidéo et galerie, ce qui ne rentre pas dans le modèle
 * `paginas.bloques` (titre + texte). Les textes reprennent ceux du bloc
 * correspondant de la page Iniciativas (Supabase, slug « iniciativas »).
 */

export const SEI_SLUG = "sei-viajera-de-los-mares";
export const SEI_VIDEO_ID = "jAC4qwN6luA";
export const SEI_HERO = "/images/sei-hero.jpg";
export const SEI_POSTER = "/images/sei/sei-03.jpg";

/** Référence scientifique du varamiento de 2015 (Häussermann et al. 2017). */
export const SEI_REFERENCE_URL = "https://doi.org/10.7717/peerj.3123";

/** Fichiers de /public/images/sei, dans l'ordre du carrousel. */
export const SEI_PHOTOS: { file: string; w: number; h: number }[] = [
  { file: "sei-01.jpg", w: 1200, h: 900 },
  { file: "sei-02.jpg", w: 1200, h: 675 },
  { file: "sei-03.jpg", w: 1600, h: 901 },
  { file: "sei-04.jpg", w: 1600, h: 901 },
  { file: "sei-05.jpg", w: 1600, h: 901 },
  { file: "sei-06.jpg", w: 1200, h: 1600 },
  { file: "sei-07.jpg", w: 1200, h: 1600 },
  { file: "sei-08.jpg", w: 1200, h: 1600 },
  { file: "sei-09.jpg", w: 1600, h: 1200 },
  { file: "sei-10.jpg", w: 1600, h: 1200 },
  { file: "sei-11.jpg", w: 853, h: 568 },
  { file: "sei-12.jpg", w: 853, h: 568 },
];

type SeiContent = {
  metaTitle: string;
  metaDescription: string;
  heroAlt: string;
  back: string;
  titulo: string;
  subtitulo: string;
  parrafos: string[];
  /** Index du paragraphe qui porte l'appel de note vers la référence. */
  refParrafo: number;
  videoTitulo: string;
  videoNombre: string;
  videoPlay: string;
  videoYoutube: string;
  galeriaTitulo: string;
  referenciaTitulo: string;
  referenciaTexto: string;
  referenciaTitle: string;
  referenciaRevista: string;
  lightbox: { prev: string; next: string; close: string };
  alts: string[];
};

export const SEI_CONTENT: Record<Locale, SeiContent> = {
  es: {
    metaTitle: "Proyecto SEI Viajera de los Mares — Destino Patagonia",
    metaDescription:
      "Una ballena SEI para la escuela de Puerto Río Tranquilo: el traslado de las osamentas desde Seno Escondido y su instalación frente a la escuela Gabriela Mistral.",
    heroAlt: "Esqueleto de la ballena SEI instalado frente a la escuela de Puerto Río Tranquilo",
    back: "Iniciativas",
    titulo: "Proyecto SEI Viajera de los Mares",
    subtitulo: "Una ballena para la escuela de Puerto Río Tranquilo",
    parrafos: [
      "El año 2015, en una expedición familiar al Istmo de Ofqui, una loca idea fue tomando forma y terminó por materializarse en un esqueleto de ballena instalado frente a la escuela Gabriela Mistral en Puerto Río Tranquilo.",
      "Este proyecto, desarrollado en conjunto con la fundación Aysén Mira el Mar, AG Hielo Norte, Parque Exploradores, Municipalidad de Río Ibáñez, Centro COPAS, Museo Regional y Museo de Puerto Tranquilo, consistió en trasladar las osamentas de una ballena SEI desde Seno Escondido en el P.N. Laguna San Rafael hasta Puerto Río Tranquilo, con el fin de generar nuevas conexiones de la comunidad y los visitantes con el mar.",
      "Las osamentas corresponden a un ejemplar juvenil de ballena SEI que fue parte de una de las varazones más grandes registradas de esta especie en el año 2015.",
      "La ballena, bautizada como INARA por los niños de la escuela, se encuentra en exposición de forma permanente en el frontis del recinto escolar.",
    ],
    refParrafo: 2,
    videoTitulo: "El video",
    videoNombre: "Sei: Viajera de los Mares",
    videoPlay: "Reproducir el video",
    videoYoutube: "Ver en YouTube",
    galeriaTitulo: "Galería",
    referenciaTitulo: "Referencia",
    referenciaTexto: "Häussermann, V. et al. (2017).",
    referenciaTitle:
      "Largest baleen whale mass mortality during strong El Niño event is likely related to harmful toxic algal bloom.",
    referenciaRevista: "PeerJ, 5, e3123.",
    lightbox: { prev: "Anterior", next: "Siguiente", close: "Cerrar" },
    alts: [
      "Ballena SEI varada en la costa, con un niño observándola",
      "Hueso de la ballena sobre la orilla",
      "Embarcación sobre el agua frente a las montañas",
      "Vértebras de la ballena alineadas en la orilla, con el equipo del proyecto",
      "El equipo del proyecto reunido en la costa",
      "Cráneo de la ballena en el taller de restauración",
      "Cráneo de la ballena suspendido en el taller",
      "Vértebras de la ballena sobre una mesa del taller",
      "Cráneo y mandíbulas de la ballena suspendidos en el taller",
      "Montaje del esqueleto de la ballena con ayuda de la comunidad",
      "Cráneo y mandíbulas de la ballena montados sobre soportes metálicos",
      "El equipo y la comunidad junto al esqueleto de la ballena",
    ],
  },
  en: {
    metaTitle: "SEI Viajera de los Mares Project — Destino Patagonia",
    metaDescription:
      "A Sei whale for the Puerto Río Tranquilo school: moving the remains from Seno Escondido and installing them in front of the Gabriela Mistral school.",
    heroAlt: "The Sei whale skeleton installed in front of the Puerto Río Tranquilo school",
    back: "Initiatives",
    titulo: "SEI Viajera de los Mares Project",
    subtitulo: "A whale for the Puerto Río Tranquilo school",
    parrafos: [
      "In 2015, during a family expedition to the Istmo de Ofqui, a crazy idea began to take shape and eventually became a whale skeleton installed in front of the Gabriela Mistral school in Puerto Río Tranquilo.",
      "This project, developed together with the Aysén Mira el Mar foundation, AG Hielo Norte, Parque Exploradores, the Municipality of Río Ibáñez, Centro COPAS, the Regional Museum and the Puerto Tranquilo Museum, involved moving the remains of a Sei whale from Seno Escondido, inside Laguna San Rafael National Park, to Puerto Río Tranquilo, in order to create new connections between the community, visitors and the sea.",
      "The remains belong to a juvenile Sei whale that was part of one of the largest strandings of this species ever recorded, in 2015.",
      "The whale, named INARA by the school's children, is permanently on display in front of the school.",
    ],
    refParrafo: 2,
    videoTitulo: "The video",
    videoNombre: "Sei: Viajera de los Mares",
    videoPlay: "Play the video",
    videoYoutube: "Watch on YouTube",
    galeriaTitulo: "Gallery",
    referenciaTitulo: "Reference",
    referenciaTexto: "Häussermann, V. et al. (2017).",
    referenciaTitle:
      "Largest baleen whale mass mortality during strong El Niño event is likely related to harmful toxic algal bloom.",
    referenciaRevista: "PeerJ, 5, e3123.",
    lightbox: { prev: "Previous", next: "Next", close: "Close" },
    alts: [
      "Stranded Sei whale on the shore, with a child looking at it",
      "Whale bone on the shoreline",
      "Boat on the water in front of the mountains",
      "Whale vertebrae lined up on the shore, with the project team",
      "The project team gathered on the shore",
      "Whale skull in the restoration workshop",
      "Whale skull hanging in the workshop",
      "Whale vertebrae on a workshop table",
      "Whale skull and jawbones hanging in the workshop",
      "Assembling the whale skeleton with help from the community",
      "Whale skull and jawbones mounted on metal supports",
      "The team and the community next to the whale skeleton",
    ],
  },
  fr: {
    metaTitle: "Projet SEI Viajera de los Mares — Destino Patagonia",
    metaDescription:
      "Une baleine de Sei pour l'école de Puerto Río Tranquilo : le transport des ossements depuis le Seno Escondido et leur installation devant l'école Gabriela Mistral.",
    heroAlt: "Le squelette de la baleine de Sei installé devant l'école de Puerto Río Tranquilo",
    back: "Initiatives",
    titulo: "Projet SEI Viajera de los Mares",
    subtitulo: "Une baleine pour l'école de Puerto Río Tranquilo",
    parrafos: [
      "En 2015, lors d'une expédition familiale à l'Istmo de Ofqui, une idée un peu folle a commencé à prendre forme, jusqu'à devenir un squelette de baleine installé devant l'école Gabriela Mistral, à Puerto Río Tranquilo.",
      "Ce projet, mené avec la fondation Aysén Mira el Mar, l'AG Hielo Norte, le Parque Exploradores, la municipalité de Río Ibáñez, le Centro COPAS, le Musée régional et le Musée de Puerto Tranquilo, a consisté à transporter les ossements d'une baleine de Sei depuis le Seno Escondido, dans le Parc National Laguna San Rafael, jusqu'à Puerto Río Tranquilo, afin de créer de nouveaux liens entre la communauté, les visiteurs et la mer.",
      "Ces ossements appartiennent à un spécimen juvénile de baleine de Sei, qui faisait partie de l'un des plus importants échouages de cette espèce jamais enregistrés, en 2015.",
      "La baleine, baptisée INARA par les enfants de l'école, est exposée de façon permanente devant l'établissement scolaire.",
    ],
    refParrafo: 2,
    videoTitulo: "La vidéo",
    videoNombre: "Sei: Viajera de los Mares",
    videoPlay: "Lire la vidéo",
    videoYoutube: "Voir sur YouTube",
    galeriaTitulo: "Galerie",
    referenciaTitulo: "Référence",
    referenciaTexto: "Häussermann, V. et al. (2017).",
    referenciaTitle:
      "Largest baleen whale mass mortality during strong El Niño event is likely related to harmful toxic algal bloom.",
    referenciaRevista: "PeerJ, 5, e3123.",
    lightbox: { prev: "Précédente", next: "Suivante", close: "Fermer" },
    alts: [
      "Baleine de Sei échouée sur la rive, avec un enfant qui l'observe",
      "Os de la baleine sur la rive",
      "Embarcation sur l'eau devant les montagnes",
      "Vertèbres de la baleine alignées sur la rive, avec l'équipe du projet",
      "L'équipe du projet réunie sur la rive",
      "Crâne de la baleine dans l'atelier de restauration",
      "Crâne de la baleine suspendu dans l'atelier",
      "Vertèbres de la baleine sur une table de l'atelier",
      "Crâne et mâchoires de la baleine suspendus dans l'atelier",
      "Montage du squelette de la baleine avec l'aide de la communauté",
      "Crâne et mâchoires de la baleine montés sur des supports métalliques",
      "L'équipe et la communauté près du squelette de la baleine",
    ],
  },
};

/** Libellé du lien depuis la page Iniciativas. */
export const SEI_LINK_LABEL: Record<Locale, string> = {
  es: "Ver el proyecto completo",
  en: "See the full project",
  fr: "Voir le projet complet",
};
