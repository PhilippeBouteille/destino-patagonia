import { getPagina, PaginaBloques } from "@/components/PaginaBloques";
import EquipoConocenos from "@/components/EquipoConocenos";

export const revalidate = 3600;

export const metadata = {
  title: "Quiénes Somos — Destino Patagonia",
};

export default async function QuienesSomosPage() {
  const pagina = await getPagina("quienes-somos");
  return (
    <>
      <PaginaBloques pagina={pagina} />
      <EquipoConocenos />
    </>
  );
}
