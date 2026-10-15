import CondicionesReserva from "@/components/CondicionesReserva";
import { CONDICIONES_CONTENT } from "@/lib/condicionesReserva";

export const revalidate = 3600;

export const metadata = {
  title: CONDICIONES_CONTENT.es.metaTitle,
  description: CONDICIONES_CONTENT.es.metaDescription,
};

export default function CondicionesReservaPage() {
  return <CondicionesReserva locale="es" />;
}
