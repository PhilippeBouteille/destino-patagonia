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
      {/* Nuestra historia (index 0) : texte plein, en premier */}
      <PaginaBloques pagina={pagina} locale={params.locale} indices={[0]} />
      <EquipoConocenos locale={params.locale} />
      {/* Les autres blocs : en accordéon, sans répéter le titre de page */}
      <PaginaBloques
        pagina={pagina}
        locale={params.locale}
        accordion
        showTitle={false}
        indices={[1, 2, 3]}
      />
    </>
  );
}
