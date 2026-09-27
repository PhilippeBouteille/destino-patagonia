import { getPagina, PaginaBloques } from "@/components/PaginaBloques";

export const revalidate = 3600;

export const metadata = {
  title: "Logística y servicios adicionales — Destino Patagonia",
};

export default async function LogisticaPage() {
  const pagina = await getPagina("logistica");
  return (
    <>
      <div className="has-hero relative h-screen w-full overflow-hidden">
        <img
          src="/images/logistica-hero.jpg"
          alt="Logística Destino Patagonia"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      </div>
      <div className="bg-fjord-900">
        <PaginaBloques pagina={pagina} dark />
      </div>
    </>
  );
}
