import { getPagina, PaginaBloques } from "@/components/PaginaBloques";
import { SEI_LINK_LABEL, SEI_SLUG } from "@/lib/iniciativaSei";
import { limpiezaFotos } from "@/lib/iniciativaLimpieza";
import { LIBRO_LINK_LABEL, LIBRO_URL, libroFoto } from "@/lib/iniciativaLibro";

export const revalidate = 3600;

export const metadata = {
  title: "Iniciativas sin Fines de Lucro — Destino Patagonia",
};

export default async function IniciativasPage() {
  const pagina = await getPagina("iniciativas");
  return (
    <>
      <div className="has-hero relative h-screen w-full overflow-hidden">
        <img
          src="/images/iniciativas-hero.jpg"
          alt="Iniciativas Destino Patagonia"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      </div>
      <div className="bg-fjord-900">
        <PaginaBloques
          pagina={pagina}
          accordion
          dark
          fotos={{ 1: limpiezaFotos("es"), 3: libroFoto("es") }}
          enlaces={{
            3: { href: LIBRO_URL, label: LIBRO_LINK_LABEL.es, externo: true },
            2: {
              href: `/iniciativas/${SEI_SLUG}`,
              label: SEI_LINK_LABEL.es,
            },
          }}
        />
      </div>
    </>
  );
}
