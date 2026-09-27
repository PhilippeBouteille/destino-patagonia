import { getPagina, PaginaBloques } from "@/components/PaginaBloques";
import type { Locale } from "@/lib/i18n";

export const revalidate = 3600;

export default async function LocaleIniciativasPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const pagina = await getPagina("iniciativas");
  return (
    <>
      <div className="has-hero relative h-screen w-full overflow-hidden">
        <img
          src="/images/iniciativas-hero.jpg"
          alt="Iniciativas Destino Patagonia"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      </div>
      <div className="bg-fjord-900">
        <PaginaBloques pagina={pagina} locale={params.locale} accordion dark />
      </div>
    </>
  );
}
