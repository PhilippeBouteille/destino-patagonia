import { getPagina, PaginaBloques } from "@/components/PaginaBloques";
import type { Locale } from "@/lib/i18n";

export const revalidate = 3600;

export default async function LocaleLogisticaPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const pagina = await getPagina("logistica");
  return <PaginaBloques pagina={pagina} locale={params.locale} />;
}
