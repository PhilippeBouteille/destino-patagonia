import { getPagina, PaginaBloques } from "@/components/PaginaBloques";
import type { Locale } from "@/lib/i18n";

export const revalidate = 3600;

export default async function LocaleIniciativasPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const pagina = await getPagina("iniciativas");
  return <PaginaBloques pagina={pagina} locale={params.locale} />;
}
