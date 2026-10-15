import type { Locale } from "@/lib/i18n";

/**
 * Page « Condiciones de reserva y anulación » (/condiciones-de-reserva).
 * Texte espagnol = document fourni par Destino Patagonia (Drive, dossier
 * « Condiciones de Reserva y anulación de viajes »). EN/FR : traductions de
 * courtoisie, à faire relire. Lié depuis le Footer, les pages tour et
 * Contacto.
 */

export const CONDICIONES_SLUG = "condiciones-de-reserva";

export type CondBloque =
  | { tipo: "p"; texto: string }
  | { tipo: "ul"; items: string[] };

export type CondSeccion = { titulo: string; bloques: CondBloque[] };

type CondContent = {
  metaTitle: string;
  metaDescription: string;
  titulo: string;
  nota?: string;
  secciones: CondSeccion[];
  /** Libellé court du lien (footer, fiche tour, contact). */
  link: string;
};

export const CONDICIONES_CONTENT: Record<Locale, CondContent> = {
  es: {
    metaTitle: "Condiciones de reserva y anulación — Destino Patagonia",
    metaDescription:
      "Cómo reservar con Destino Patagonia y políticas de anulación y devolución, por parte de la empresa y del cliente.",
    titulo: "Condiciones de reserva y anulación",
    link: "Condiciones de reserva",
    secciones: [
      {
        titulo: "Condiciones de reserva",
        bloques: [
          {
            tipo: "p",
            texto:
              "Para reservar por favor escríbenos a contacto@destinopatagonia.cl, luego de lo cual te contactaremos y solicitaremos lo siguiente:",
          },
          {
            tipo: "ul",
            items: [
              "Transferencia del 50% del valor total del viaje.",
              "Ficha de registro y formulario de conocimiento de riesgos.",
            ],
          },
          {
            tipo: "p",
            texto: "Toda esta información te la enviaremos vía correo electrónico.",
          },
        ],
      },
      {
        titulo: "Anulaciones por parte de Destino Patagonia",
        bloques: [
          {
            tipo: "p",
            texto:
              "Destino Patagonia anulará la reserva de un servicio turístico, única y exclusivamente cuando las condiciones climáticas sean totalmente desfavorables y adversas e impidan realizar la navegación o bien, cuando un proveedor de servicios turísticos externos sea único o crítico y no pueda ejecutar la actividad por problemas de fuerza mayor.",
          },
          {
            tipo: "p",
            texto:
              "En caso de malas condiciones climáticas se dará un aviso al menos un día antes a los pasajeros vía correo electrónico, mensaje de WhatsApp o de texto, llamada telefónica o mensaje en su hospedaje o cabaña.",
          },
          {
            tipo: "p",
            texto:
              "El último plazo para suspender el viaje es antes de medio día del día previo al viaje.",
          },
          {
            tipo: "p",
            texto:
              "Ante la suspensión del viaje, Destino Patagonia dará la posibilidad al cliente de coordinar una nueva fecha para el viaje, siempre y cuando la empresa tenga disponibilidad para dicho día. Cabe destacar que en temporada alta es difícil cambiar pasajeros de un día para otro, por lo tanto se va a sugerir la posibilidad de que los pasajeros tomen el viaje dentro de 4-5 días más, dependiendo del recorrido que tengan planificado.",
          },
          {
            tipo: "p",
            texto:
              "En caso de que los pasajeros no puedan cambiar la fecha del viaje, se realizará un reembolso del 100% de lo abonado mediante transferencia bancaria, pago en efectivo, o bien a través de la anulación por el portal de Transbank, a más tardar 48 horas después de la suspensión.",
          },
          {
            tipo: "p",
            texto:
              "La evaluación de las condiciones climáticas se realizará a través del análisis del informe meteorológico del NOAA, el cual obtenemos en la página web www.ready.arl.noaa.gov con las coordenadas del sector más expuesto de navegación que es el Golfo Elefantes. Se tomará como referencia para suspensión de un viaje las condiciones de viento, la dirección, su intensidad como también las condiciones de marea y corrientes presentes en el canal.",
          },
        ],
      },
      {
        titulo: "Anulación por parte del cliente final",
        bloques: [
          {
            tipo: "p",
            texto:
              "Cada vez que un cliente final decida anular la reserva de un servicio turístico deberá tener en consideración las siguientes políticas de anulación y devolución establecidas por Destino Patagonia:",
          },
          {
            tipo: "ul",
            items: [
              "7 días antes de la ejecución de la actividad: devolución del 100%.",
              "3 días o menos antes de la ejecución del viaje: no se hará reembolso, a excepción de casos especiales de fuerza mayor: accidentes; muertes de familiares y enfermedades; problemas mecánicos del vehículo o bus; retrasos de vuelos u otros similares.",
            ],
          },
          {
            tipo: "p",
            texto:
              "En estos casos se reembolsará el 50% del valor del programa, quedando sujeto a la evaluación por parte de la Administradora, Jefe de Operaciones y/o Encargado de ventas.",
          },
          {
            tipo: "p",
            texto:
              "Cuando el cliente decida anular una reserva, deberá comunicarse con Destino Patagonia vía telefónica y/o correo electrónico, exponer los motivos de la anulación y presentar o enviar el voucher de reserva, requerimientos que deben ser solicitados por el Ejecutivo de ventas para hacer efectiva la anulación y la devolución, si corresponde.",
          },
          {
            tipo: "p",
            texto:
              "Si el cliente no se presenta en el minuto de la actividad, no se realizarán devoluciones de dinero.",
          },
        ],
      },
    ],
  },
  en: {
    metaTitle: "Booking and cancellation terms — Destino Patagonia",
    metaDescription:
      "How to book with Destino Patagonia, and the cancellation and refund policies, both by the company and by the customer.",
    titulo: "Booking and cancellation terms",
    nota: "Courtesy translation. The Spanish version is the original.",
    link: "Booking terms",
    secciones: [
      {
        titulo: "Booking terms",
        bloques: [
          {
            tipo: "p",
            texto:
              "To book, please write to us at contacto@destinopatagonia.cl. We will then contact you and ask for the following:",
          },
          {
            tipo: "ul",
            items: [
              "A bank transfer of 50% of the total trip price.",
              "A registration form and a risk acknowledgment form.",
            ],
          },
          {
            tipo: "p",
            texto: "We will send you all this information by email.",
          },
        ],
      },
      {
        titulo: "Cancellations by Destino Patagonia",
        bloques: [
          {
            tipo: "p",
            texto:
              "Destino Patagonia will cancel the booking of a tourism service only when weather conditions are completely unfavorable and adverse and prevent navigation, or when an external tourism service provider that is unique or critical cannot carry out the activity due to force majeure.",
          },
          {
            tipo: "p",
            texto:
              "In case of bad weather, passengers will be notified at least one day in advance by email, WhatsApp or text message, phone call, or a message at their accommodation or cabin.",
          },
          {
            tipo: "p",
            texto:
              "The deadline for suspending a trip is before noon on the day before the trip.",
          },
          {
            tipo: "p",
            texto:
              "If a trip is suspended, Destino Patagonia will offer the customer the option of arranging a new date, provided the company has availability on that day. Please note that in high season it is difficult to move passengers from one day to the next, so we will suggest that passengers take the trip 4–5 days later, depending on their planned itinerary.",
          },
          {
            tipo: "p",
            texto:
              "If passengers cannot change the date of the trip, 100% of the amount paid will be refunded by bank transfer, cash, or through cancellation on the Transbank portal, no later than 48 hours after the suspension.",
          },
          {
            tipo: "p",
            texto:
              "Weather conditions are assessed by analyzing the NOAA weather report, which we obtain on the website www.ready.arl.noaa.gov using the coordinates of the most exposed navigation area, the Golfo Elefantes. Wind conditions, direction and intensity, as well as tide and current conditions in the channel, are used as the reference for suspending a trip.",
          },
        ],
      },
      {
        titulo: "Cancellation by the customer",
        bloques: [
          {
            tipo: "p",
            texto:
              "Whenever a customer decides to cancel the booking of a tourism service, the following cancellation and refund policies established by Destino Patagonia apply:",
          },
          {
            tipo: "ul",
            items: [
              "7 days before the activity: 100% refund.",
              "3 days or less before the trip: no refund, except in special cases of force majeure: accidents; death of relatives and illness; mechanical problems with the vehicle or bus; flight delays or similar.",
            ],
          },
          {
            tipo: "p",
            texto:
              "In these cases, 50% of the program price will be refunded, subject to evaluation by the Administrator, the Head of Operations and/or the Sales Manager.",
          },
          {
            tipo: "p",
            texto:
              "When a customer decides to cancel a booking, they must contact Destino Patagonia by phone and/or email, explain the reasons for the cancellation and present or send the booking voucher. These requirements must be requested by the Sales Executive in order to process the cancellation and the refund, if applicable.",
          },
          {
            tipo: "p",
            texto:
              "If the customer does not show up at the time of the activity, no refunds will be made.",
          },
        ],
      },
    ],
  },
  fr: {
    metaTitle: "Conditions de réservation et d'annulation — Destino Patagonia",
    metaDescription:
      "Comment réserver avec Destino Patagonia, et politiques d'annulation et de remboursement, côté entreprise et côté client.",
    titulo: "Conditions de réservation et d'annulation",
    nota: "Traduction de courtoisie. La version espagnole fait foi.",
    link: "Conditions de réservation",
    secciones: [
      {
        titulo: "Conditions de réservation",
        bloques: [
          {
            tipo: "p",
            texto:
              "Pour réserver, écrivez-nous à contacto@destinopatagonia.cl. Nous vous contacterons ensuite et vous demanderons les éléments suivants :",
          },
          {
            tipo: "ul",
            items: [
              "Un virement de 50 % du montant total du voyage.",
              "Une fiche d'inscription et un formulaire de reconnaissance des risques.",
            ],
          },
          {
            tipo: "p",
            texto: "Nous vous enverrons toutes ces informations par e-mail.",
          },
        ],
      },
      {
        titulo: "Annulations par Destino Patagonia",
        bloques: [
          {
            tipo: "p",
            texto:
              "Destino Patagonia n'annule la réservation d'un service touristique que lorsque les conditions météorologiques sont totalement défavorables et empêchent la navigation, ou lorsqu'un prestataire touristique externe, unique ou critique, ne peut pas réaliser l'activité en raison d'un cas de force majeure.",
          },
          {
            tipo: "p",
            texto:
              "En cas de mauvaises conditions météorologiques, les passagers sont prévenus au moins un jour à l'avance par e-mail, message WhatsApp ou SMS, appel téléphonique ou message à leur hébergement ou cabane.",
          },
          {
            tipo: "p",
            texto:
              "Le dernier délai pour suspendre le voyage est avant midi la veille du départ.",
          },
          {
            tipo: "p",
            texto:
              "En cas de suspension du voyage, Destino Patagonia propose au client de convenir d'une nouvelle date, dans la mesure où l'entreprise a de la disponibilité ce jour-là. En haute saison, il est difficile de décaler des passagers d'un jour à l'autre ; nous suggérerons donc de faire le voyage 4 à 5 jours plus tard, selon l'itinéraire prévu.",
          },
          {
            tipo: "p",
            texto:
              "Si les passagers ne peuvent pas changer la date du voyage, 100 % des sommes versées sont remboursées par virement bancaire, en espèces ou par annulation via le portail Transbank, au plus tard 48 heures après la suspension.",
          },
          {
            tipo: "p",
            texto:
              "Les conditions météorologiques sont évaluées à partir du bulletin météo de la NOAA, que nous consultons sur le site www.ready.arl.noaa.gov avec les coordonnées de la zone de navigation la plus exposée, le Golfo Elefantes. Le vent (direction et intensité) ainsi que les conditions de marée et de courants dans le canal servent de référence pour suspendre un voyage.",
          },
        ],
      },
      {
        titulo: "Annulation par le client",
        bloques: [
          {
            tipo: "p",
            texto:
              "Lorsqu'un client décide d'annuler la réservation d'un service touristique, les politiques d'annulation et de remboursement suivantes, établies par Destino Patagonia, s'appliquent :",
          },
          {
            tipo: "ul",
            items: [
              "7 jours avant l'activité : remboursement de 100 %.",
              "3 jours ou moins avant le voyage : aucun remboursement, sauf cas particuliers de force majeure : accidents ; décès de proches et maladies ; problèmes mécaniques du véhicule ou du bus ; retards de vol ou situations similaires.",
            ],
          },
          {
            tipo: "p",
            texto:
              "Dans ces cas, 50 % de la valeur du programme sont remboursés, sous réserve de l'évaluation de l'Administratrice, du Chef des opérations et/ou du Responsable des ventes.",
          },
          {
            tipo: "p",
            texto:
              "Lorsqu'un client décide d'annuler une réservation, il doit contacter Destino Patagonia par téléphone et/ou par e-mail, exposer les motifs de l'annulation et présenter ou envoyer le voucher de réservation. Ces éléments doivent être demandés par le chargé de ventes pour valider l'annulation et le remboursement, le cas échéant.",
          },
          {
            tipo: "p",
            texto:
              "Si le client ne se présente pas à l'heure de l'activité, aucun remboursement n'est effectué.",
          },
        ],
      },
    ],
  },
};
