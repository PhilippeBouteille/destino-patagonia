import { getPagina, PaginaBloques } from "@/components/PaginaBloques";
import EquipoConocenos from "@/components/EquipoConocenos";

export const revalidate = 3600;

export const metadata = {
  title: "Quiénes Somos — Destino Patagonia",
};

export default async function QuienesSomosPage() {
  const pagina = await getPagina("quienes-somos");
  return (
    <div className="has-hero bg-fjord-900">
      {/* Nuestra historia (index 0) : texte plein, en premier */}
      <PaginaBloques
        pagina={pagina}
        indices={[0]}
        maxWidthClass="max-w-5xl"
        topClass="pb-16 pt-32"
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
  );
}
