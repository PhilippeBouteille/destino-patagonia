import { getPagina, PaginaBloques } from "@/components/PaginaBloques";

export const revalidate = 3600;

export const metadata = {
  title: "Iniciativas sin Fines de Lucro — Destino Patagonia",
};

export default async function IniciativasPage() {
  const pagina = await getPagina("iniciativas");
  return <PaginaBloques pagina={pagina} />;
}
