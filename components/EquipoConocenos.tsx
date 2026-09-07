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
// Bios en espagnol ajoutées (revisión Emilia, juillet 2026) ; EN/FR à traduire plus tard.
const EQUIPO: { nombre: string; foto: string; bio_es: string }[] = [
  {
    nombre: "Emilia Astorga",
    foto: "/images/equipo-emilia-astorga.jpg",
    bio_es:
      "Emilia es Antropóloga social de la Universidad Academia de Humanismo Cristiano y magíster en Análisis Sistémico Aplicado a la Sociedad de la Universidad de Chile. Vive hace 20 años en la región de Aysén y su trabajo se ha desarrollado en diferentes ámbitos, desde el desarrollo local con el programa Servicio País; el emprendimiento turístico con Destino Patagonia; y la investigación patrimonial y ambiental como profesional independiente. Amante de la naturaleza y en particular del bosque siempre verde, tan característico de la costa aisenina.\n\nActualmente se encuentra cursando un doctorado en Conservación en la Oregon State University, en Estados Unidos, con el fin de seguir trabajando para mejorar los procesos sociales asociados a las áreas protegidas en nuestro país y particularmente en la Patagonia.\n\nEn Destino Patagonia, siempre ha estado a cargo de la administración, coordinando reservas y el equipo base en Puerto Tranquilo.",
  },
  {
    nombre: "Daniel Torres",
    foto: "/images/equipo-daniel-torres.jpg",
    bio_es:
      "Daniel es guía naturalista, especializado en navegación y en la organización de logística compleja en zonas remotas y silvestres. Creció en un pequeño pueblo del sur de la Patagonia, en contacto constante con la naturaleza, rodeado de bosques, ríos y lagos. Esto lo hizo muy consciente del territorio al que pertenecía, de su belleza, su dificultad y su fragilidad, y lo llevó a estudiar turismo y a formarse como guía en distintas áreas. En 2007 comenzó a navegar por la costa de la Patagonia y encontró su vocación en los fiordos de la región.\n\nEn Destino Patagonia, es jefe de logística y equipo de guías, encargado de organizar cada salida y expedición.",
  },
];

function bioPara(persona: { bio_es: string }, locale: Locale): string {
  return locale === "es" ? persona.bio_es : PENDIENTE[locale];
}

export default function EquipoConocenos({ locale = "es" }: { locale?: Locale }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <h2 className="font-display text-2xl text-fjord-900">{TITULO[locale]}</h2>
      <div className="mt-8 grid gap-10 sm:grid-cols-2">
        {EQUIPO.map((persona) => (
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
                locale === "es" ? "text-slate-600" : "italic text-slate-500"
              }`}
            >
              {bioPara(persona, locale)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
