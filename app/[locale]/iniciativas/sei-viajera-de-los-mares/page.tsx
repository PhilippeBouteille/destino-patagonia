import IniciativaSei from "@/components/IniciativaSei";
import type { Locale } from "@/lib/i18n";
import { SEI_CONTENT } from "@/lib/iniciativaSei";

export const revalidate = 3600;

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = SEI_CONTENT[params.locale] ?? SEI_CONTENT.es;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default function LocaleSeiViajeraDeLosMaresPage({
  params,
}: {
  params: { locale: Locale };
}) {
  return <IniciativaSei locale={params.locale} />;
}
