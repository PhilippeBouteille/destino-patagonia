import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Tour } from "@/lib/types";
import { signOut } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: { guardado?: string };
}) {
  const supabase = createClient();
  const { data } = await supabase
    .from("tours")
    .select("*")
    .order("orden", { ascending: true });
  const tours = (data ?? []) as Tour[];

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl text-fjord-900">
          Administración
        </h1>
        <form action={signOut}>
          <button className="text-sm text-rock-600 hover:underline">
            Cerrar sesión
          </button>
        </form>
      </div>

      {searchParams.guardado ? (
        <p className="mt-4 rounded-sm bg-glacier-200 px-4 py-2 text-sm text-fjord-900">
          Cambios guardados.
        </p>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/admin/info-general"
          className="rounded-sm border border-fjord-900 px-4 py-2 text-sm text-fjord-900 hover:bg-ice-100"
        >
          Información general
        </Link>
        <Link
          href="/admin/paginas/quienes-somos"
          className="rounded-sm border border-fjord-900 px-4 py-2 text-sm text-fjord-900 hover:bg-ice-100"
        >
          Página Quiénes Somos
        </Link>
        <Link
          href="/admin/paginas/logistica"
          className="rounded-sm border border-fjord-900 px-4 py-2 text-sm text-fjord-900 hover:bg-ice-100"
        >
          Página Logística
        </Link>
      </div>

      <h2 className="mt-10 font-display text-xl text-fjord-900">Tours</h2>
      <div className="mt-4 divide-y divide-ice-100">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="flex items-center justify-between gap-4 py-4"
          >
            <div>
              <p className="font-medium text-fjord-900">{tour.nombre}</p>
              <p className="font-mono text-xs text-slate-500">
                {tour.precio_desde?.toLocaleString("es-CL")} CLP ·{" "}
                {tour.publicado ? "Publicado" : "Borrador"}
              </p>
            </div>
            <Link
              href={`/admin/tours/${tour.id}`}
              className="text-sm text-glacier-400 hover:underline"
            >
              Editar
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
