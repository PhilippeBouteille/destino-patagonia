import PoliticaSustentabilidad from "@/components/PoliticaSustentabilidad";
import { POLITICA_CONTENT } from "@/lib/politicaSustentabilidad";

export const revalidate = 3600;

export const metadata = {
  title: POLITICA_CONTENT.es.metaTitle,
  description: POLITICA_CONTENT.es.metaDescription,
};

export default function PoliticaSustentabilidadPage() {
  return <PoliticaSustentabilidad locale="es" />;
}
