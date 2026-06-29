import { getPagina, PaginaBloques } from "@/components/PaginaBloques";

export const revalidate = 3600;

export const metadata = {
  title: "Logística y servicios adicionales — Destino Patagonia",
};

export default async function LogisticaPage() {
  const pagina = await getPagina("logistica");
  return <PaginaBloques pagina={pagina} />;
}
