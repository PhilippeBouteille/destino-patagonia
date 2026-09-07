import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const TITULO: Record<Locale, string> = {
  es: "Conócenos",
  en: "Meet the team",
  fr: "Faites connaissance",
};

const PENDIENTE: Record<Locale, string> = {
  es: "Texto pendiente — a completar.",
  en: "Bio pending — to be completed.",
  fr: "Texte à venir — à compléter.",
};

// ⚠ Attribution des photos à confirmer avec Philippe (voir chat) —
// équipo-emilia-astorga.jpg / equipo-daniel-torres.jpg est une hypothèse de départ.
// Bios ES/EN/FR ajoutées (revisión Emilia, sept. 2026). La bio EN de Daniel
// reprend son texte original (rédigé en anglais par lui-même dans le doc Emilia).
const EQUIPO: {
  nombre: string;
  foto: string;
  bio: Record<Locale, string>;
}[] = [
  {
    nombre: "Emilia Astorga",
    foto: "/images/equipo-emilia-astorga.jpg",
    bio: {
      es: "Emilia es Antropóloga social de la Universidad Academia de Humanismo Cristiano y magíster en Análisis Sistémico Aplicado a la Sociedad de la Universidad de Chile. Vive hace 20 años en la región de Aysén y su trabajo se ha desarrollado en diferentes ámbitos, desde el desarrollo local con el programa Servicio País; el emprendimiento turístico con Destino Patagonia; y la investigación patrimonial y ambiental como profesional independiente. Amante de la naturaleza y en particular del bosque siempre verde, tan característico de la costa aisenina.\n\nActualmente se encuentra cursando un doctorado en Conservación en la Oregon State University, en Estados Unidos, con el fin de seguir trabajando para mejorar los procesos sociales asociados a las áreas protegidas en nuestro país y particularmente en la Patagonia.\n\nEn Destino Patagonia, siempre ha estado a cargo de la administración, coordinando reservas y el equipo base en Puerto Tranquilo.",
      en: "Emilia is a social anthropologist from Universidad Academia de Humanismo Cristiano and holds a master's degree in Systemic Analysis Applied to Society from Universidad de Chile. She has lived in the Aysén region for 20 years, and her work has spanned several fields: local development with the Servicio País program, tourism entrepreneurship with Destino Patagonia, and heritage and environmental research as an independent professional. A lover of nature, and in particular of the evergreen forest so characteristic of the Aysén coast.\n\nShe is currently pursuing a PhD in Conservation at Oregon State University, in the United States, with the aim of continuing to improve the social processes associated with protected areas in Chile, and in Patagonia in particular.\n\nAt Destino Patagonia, she has always been in charge of administration, coordinating bookings and the base team in Puerto Tranquilo.",
      fr: "Emilia est anthropologue sociale, diplômée de l'Universidad Academia de Humanismo Cristiano, et titulaire d'un master en Analyse Systémique Appliquée à la Société de l'Universidad de Chile. Elle vit depuis 20 ans dans la région d'Aysén et son travail s'est développé dans plusieurs domaines : le développement local avec le programme Servicio País, l'entrepreneuriat touristique avec Destino Patagonia, et la recherche patrimoniale et environnementale en tant que professionnelle indépendante. Amoureuse de la nature, et en particulier de la forêt toujours verte si caractéristique de la côte d'Aysén.\n\nElle prépare actuellement un doctorat en Conservation à l'Oregon State University, aux États-Unis, afin de continuer à améliorer les processus sociaux liés aux aires protégées dans notre pays, et en Patagonie en particulier.\n\nChez Destino Patagonia, elle a toujours été en charge de l'administration, coordonnant les réservations et l'équipe de base à Puerto Tranquilo.",
    },
  },
  {
    nombre: "Daniel Torres",
    foto: "/images/equipo-daniel-torres.jpg",
    bio: {
      es: "Daniel es guía naturalista, especializado en navegación y en la organización de logística compleja en zonas remotas y silvestres. Creció en un pequeño pueblo del sur de la Patagonia, en contacto constante con la naturaleza, rodeado de bosques, ríos y lagos. Esto lo hizo muy consciente del territorio al que pertenecía, de su belleza, su dificultad y su fragilidad, y lo llevó a estudiar turismo y a formarse como guía en distintas áreas. En 2007 comenzó a navegar por la costa de la Patagonia y encontró su vocación en los fiordos de la región.\n\nEn Destino Patagonia, es jefe de logística y equipo de guías, encargado de organizar cada salida y expedición.",
      en: "Daniel is a naturalist guide, specializing in navigation and organizing complex logistics in remote and wild areas. He grew up in a small village in southern Patagonia, where he was in constant contact with nature, surrounded by forests, rivers and lakes. This made him very aware of the territory to which he belonged, its beauty, difficulty and frailty, and led him to study tourism and train as a guide in different areas. In 2007 he started to navigate on the coast of Patagonia and found his vocation in the fjords of the region.\n\nAt Destino Patagonia, he is the head of logistics and the guide team, in charge of organizing every departure and expedition.",
      fr: "Daniel est guide naturaliste, spécialisé dans la navigation et l'organisation d'une logistique complexe dans des zones reculées et sauvages. Il a grandi dans un petit village du sud de la Patagonie, en contact constant avec la nature, entouré de forêts, de rivières et de lacs. Cela l'a rendu très conscient du territoire auquel il appartenait, de sa beauté, de sa difficulté et de sa fragilité, et l'a conduit à étudier le tourisme et à se former comme guide dans différents domaines. En 2007, il a commencé à naviguer le long de la côte de Patagonie et a trouvé sa vocation dans les fjords de la région.\n\nChez Destino Patagonia, il est responsable de la logistique et de l'équipe de guides, chargé d'organiser chaque départ et chaque expédition.",
    },
  },
];

export default function EquipoConocenos({ locale = "es" }: { locale?: Locale }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <h2 className="font-display text-2xl text-fjord-900">{TITULO[locale]}</h2>
      <div className="mt-8 grid gap-10 sm:grid-cols-2">
        {EQUIPO.map((persona) => {
          const texto = persona.bio[locale] || PENDIENTE[locale];
          const esPendiente = texto === PENDIENTE[locale];
          return (
            <div key={persona.nombre}>
              <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-ice-100">
                <Image
                  src={persona.foto}
                  alt={persona.nombre}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-display text-lg text-fjord-900">
                {persona.nombre}
              </h3>
              <p
                className={`mt-2 whitespace-pre-line text-sm ${
                  esPendiente ? "italic text-slate-500" : "text-slate-600"
                }`}
              >
                {texto}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
