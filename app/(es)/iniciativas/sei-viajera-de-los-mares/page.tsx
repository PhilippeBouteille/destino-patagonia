import IniciativaSei from "@/components/IniciativaSei";
import { SEI_CONTENT } from "@/lib/iniciativaSei";

export const revalidate = 3600;

export const metadata = {
  title: SEI_CONTENT.es.metaTitle,
  description: SEI_CONTENT.es.metaDescription,
};

export default function SeiViajeraDeLosMaresPage() {
  return <IniciativaSei locale="es" />;
}
