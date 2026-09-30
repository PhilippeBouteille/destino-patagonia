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
    <div className="has-hero bg-fjord-900">
      {/* Nuestra historia (index 0) : texte plein, en premier */}
      <PaginaBloques
        pagina={pagina}
        locale={params.locale}
        indices={[0]}
        maxWidthClass="max-w-5xl"
        topClass="pb-16 pt-32"
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
  );
}
