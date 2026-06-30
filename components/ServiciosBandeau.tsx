import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePrefix } from "@/lib/i18n";

const TEXT: Record<
  Locale,
  {
    titulo: string;
    subtitulo: string;
    items: { icono: string; titulo: string; texto: string; link: string }[];
  }
> = {
  es: {
    titulo: "Contamos con servicios paralelos para tu aventura",
    subtitulo: "Logística local · Viajes científicos · Transfer terrestre",
    items: [
      {
        icono: "/images/icono-logisticas-especiales.png",
        titulo: "Logística especial",
        texto: "Organizamos viajes especiales para grupos que tienen fines específicos en el sector",
        link: "Ver logística",
      },
      {
        icono: "/images/icon-van.png",
        titulo: "Transfer terrestre",
        texto: "Servicio de transfer para quien lo requiera de Balmaceda a Puerto Tranquilo",
        link: "Ver transfer local",
      },
      {
        icono: "/images/icon-cientificos.png",
        titulo: "Viajes científicos",
        texto: "Todo el conocimiento de la zona dispuesto para la investigación científica",
        link: "Ver viajes científicos",
      },
    ],
  },
  en: {
    titulo: "We offer additional services for your adventure",
    subtitulo: "Local logistics · Scientific trips · Ground transfer",
    items: [
      {
        icono: "/images/icono-logisticas-especiales.png",
        titulo: "Special logistics",
        texto: "We organize special trips for groups with specific purposes in the area",
        link: "See logistics",
      },
      {
        icono: "/images/icon-van.png",
        titulo: "Ground transfer",
        texto: "Transfer service from Balmaceda to Puerto Tranquilo for those who need it",
        link: "See local transfer",
      },
      {
        icono: "/images/icon-cientificos.png",
        titulo: "Scientific trips",
        texto: "All the knowledge of the area available for scientific research",
        link: "See scientific trips",
      },
    ],
  },
  fr: {
    titulo: "Des services complémentaires pour votre aventure",
    subtitulo: "Logistique locale · Voyages scientifiques · Transfert terrestre",
    items: [
      {
        icono: "/images/icono-logisticas-especiales.png",
        titulo: "Logistique spéciale",
        texto: "Nous organisons des voyages spéciaux pour des groupes ayant des objectifs spécifiques dans la région",
        link: "Voir la logistique",
      },
      {
        icono: "/images/icon-van.png",
        titulo: "Transfert terrestre",
        texto: "Service de transfert de Balmaceda à Puerto Tranquilo pour ceux qui en ont besoin",
        link: "Voir le transfert local",
      },
      {
        icono: "/images/icon-cientificos.png",
        titulo: "Voyages scientifiques",
        texto: "Toute la connaissance de la région mise à disposition de la recherche scientifique",
        link: "Voir les voyages scientifiques",
      },
    ],
  },
};

export default function ServiciosBandeau({ locale }: { locale: Locale }) {
  const t = TEXT[locale];
  const prefix = localePrefix(locale);

  return (
    <section
      className="relative overflow-hidden bg-fjord-900 px-6 py-20 text-center text-ice-50"
      style={{
        backgroundImage: "url(/images/DSCN3572.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-fjord-900/75" />

      <div className="relative mx-auto max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl">{t.titulo}</h2>
        <p className="mt-3 font-body italic text-ice-100">{t.subtitulo}</p>

        <div className="mt-12 grid gap-12 sm:grid-cols-3">
          {t.items.map((item) => (
            <div key={item.titulo} className="flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icono} alt="" className="h-14 w-14 object-contain" />
              <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wide">
                {item.titulo}
              </h3>
              <p className="mt-3 max-w-xs text-sm text-ice-100/80">{item.texto}</p>
              <Link
                href={`${prefix}/logistica`}
                className="mt-4 font-body text-sm italic underline-offset-4 hover:underline"
              >
                {item.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
