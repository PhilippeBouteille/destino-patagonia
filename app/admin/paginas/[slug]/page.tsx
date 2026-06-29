import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Pagina } from "@/lib/types";
import { updatePagina } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function EditPaginaPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = createClient();
  const { data: pagina } = await supabase
    .from("paginas")
    .select("*")
    .eq("slug", params.slug)
    .single<Pagina>();

  if (!pagina) notFound();

  const action = updatePagina.bind(null, pagina.slug);
  const bloques = pagina.bloques.length ? pagina.bloques : [{ titulo: "", texto: "" }];

  return (
    <section className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="font-display text-2xl text-fjord-900">
        {pagina.titulo}
      </h1>
      <form action={action} className="mt-8 space-y-8">
        {bloques.map((bloque, i) => (
          <fieldset key={i} className="space-y-2 border-t border-ice-100 pt-4">
            <label className="block text-sm text-slate-600">
              Título del bloque
            </label>
            <input
              name="bloque_titulo"
              defaultValue={bloque.titulo}
              className="w-full rounded-sm border border-ice-100 px-3 py-2"
            />
            <label className="block text-sm text-slate-600">Texto</label>
            <textarea
              name="bloque_texto"
              defaultValue={bloque.texto}
              rows={4}
              className="w-full rounded-sm border border-ice-100 px-3 py-2"
            />
          </fieldset>
        ))}
        <button
          type="submit"
          className="rounded-sm bg-fjord-900 px-5 py-2 font-medium text-ice-50 hover:bg-fjord-700"
        >
          Guardar cambios
        </button>
      </form>
      <p className="mt-4 text-xs text-slate-500">
        Para añadir o quitar bloques, pide a tu desarrollador que ajuste el
        formulario — esta versión edita los bloques existentes.
      </p>
    </section>
  );
}
