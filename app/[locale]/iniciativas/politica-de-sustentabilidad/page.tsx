import PoliticaSustentabilidad from "@/components/PoliticaSustentabilidad";
import type { Locale } from "@/lib/i18n";
import { POLITICA_CONTENT } from "@/lib/politicaSustentabilidad";

export const revalidate = 3600;

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = POLITICA_CONTENT[params.locale] ?? POLITICA_CONTENT.es;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default function LocalePoliticaSustentabilidadPage({
  params,
}: {
  params: { locale: Locale };
}) {
  return <PoliticaSustentabilidad locale={params.locale} />;
}
