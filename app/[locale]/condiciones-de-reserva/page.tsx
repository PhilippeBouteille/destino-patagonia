import CondicionesReserva from "@/components/CondicionesReserva";
import type { Locale } from "@/lib/i18n";
import { CONDICIONES_CONTENT } from "@/lib/condicionesReserva";

export const revalidate = 3600;

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = CONDICIONES_CONTENT[params.locale] ?? CONDICIONES_CONTENT.es;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default function LocaleCondicionesReservaPage({
  params,
}: {
  params: { locale: Locale };
}) {
  return <CondicionesReserva locale={params.locale} />;
}
