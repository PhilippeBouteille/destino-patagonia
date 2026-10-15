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
      <div className="has-hero relative h-screen w-full overflow-hidden">
        <img
          src="/images/nosotros-hero.jpg"
          alt="Equipo de Destino Patagonia frente al glaciar"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      </div>
      <div className="bg-fjord-900">
        {/* Nuestra historia (index 0) : texte plein, en premier */}
        <PaginaBloques
          pagina={pagina}
          indices={[0]}
          maxWidthClass="max-w-5xl"
          dark
        />
        <EquipoConocenos dark />
        {/* Les autres blocs : en accordéon, sans répéter le titre de page */}
        <PaginaBloques
          pagina={pagina}
          accordion
          showTitle={false}
          indices={[2, 3]}
          dark
        />
      </div>
    </>
  );
}
