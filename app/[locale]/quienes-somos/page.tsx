import { getPagina, PaginaBloques } from "@/components/PaginaBloques";
import EquipoConocenos from "@/components/EquipoConocenos";
import type { Locale } from "@/lib/i18n";

export const revalidate = 3600;

export default async function LocaleQuienesSomosPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const pagina = await getPagina("quienes-somos");
  return (
    <>
      <div className="has-hero relative w-full overflow-hidden md:h-screen">
        {/* Mobile : photo entière (4 personnes) à hauteur naturelle ; desktop : plein écran */}
        <picture className="block md:h-full">
          <source
            media="(max-width: 767px)"
            srcSet="/images/nosotros-hero-mobile.jpg"
          />
          <img
            src="/images/nosotros-hero.jpg"
            alt="Destino Patagonia"
            width={1600}
            height={1547}
            className="block h-auto w-full md:h-full md:object-cover"
          />
        </picture>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      </div>
      <div className="bg-fjord-900">
        {/* Nuestra historia (index 0) : texte plein, en premier */}
        <PaginaBloques
          pagina={pagina}
          locale={params.locale}
          indices={[0]}
          maxWidthClass="max-w-5xl"
          dark
        />
        <EquipoConocenos locale={params.locale} dark />
        {/* Les autres blocs : en accordéon, sans répéter le titre de page */}
        <PaginaBloques
          pagina={pagina}
          locale={params.locale}
          accordion
          showTitle={false}
          indices={[2, 3]}
          dark
        />
      </div>
    </>
  );
}
