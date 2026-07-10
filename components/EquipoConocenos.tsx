import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const TEXT: Record<Locale, { titulo: string; pendiente: string }> = {
  es: { titulo: "Conócenos", pendiente: "Texto pendiente — a completar." },
  en: { titulo: "Meet the team", pendiente: "Bio pending — to be completed." },
  fr: { titulo: "Faites connaissance", pendiente: "Texte à venir — à compléter." },
};

// ⚠ Attribution des photos à confirmer avec Philippe (voir chat) —
// équipo-emilia-astorga.jpg / equipo-daniel-torres.jpg est une hypothèse de départ.
const EQUIPO = [
  { nombre: "Emilia Astorga", foto: "/images/equipo-emilia-astorga.jpg" },
  { nombre: "Daniel Torres", foto: "/images/equipo-daniel-torres.jpg" },
];

export default function EquipoConocenos({ locale = "es" }: { locale?: Locale }) {
  const t = TEXT[locale];

  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <h2 className="font-display text-2xl text-fjord-900">{t.titulo}</h2>
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
            <p className="mt-2 text-sm italic text-slate-500">{t.pendiente}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
