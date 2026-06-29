import { createClient } from "@/lib/supabase/public";
import type { Pagina } from "@/lib/types";

export const revalidate = 3600;

export async function getPagina(slug: string) {
  const supabase = createClient();
  const { data } = await supabase
    .from("paginas")
    .select("*")
    .eq("slug", slug)
    .single<Pagina>();
  return data;
}

export function PaginaBloques({ pagina }: { pagina: Pagina | null }) {
  if (!pagina) return null;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl text-fjord-900">
        {pagina.titulo}
      </h1>
      <div className="mt-10 space-y-10">
        {pagina.bloques.map((bloque) => (
          <div key={bloque.titulo}>
            <h2 className="font-display text-xl text-fjord-900">
              {bloque.titulo}
            </h2>
            <p className="mt-3 text-slate-600">{bloque.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
