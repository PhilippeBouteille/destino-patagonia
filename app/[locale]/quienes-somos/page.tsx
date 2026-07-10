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
      <PaginaBloques pagina={pagina} locale={params.locale} />
      <EquipoConocenos locale={params.locale} />
    </>
  );
}
