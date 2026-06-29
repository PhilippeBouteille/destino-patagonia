import Link from "next/link";
import { createClient } from "@/lib/supabase/public";
import type { Tour } from "@/lib/types";
import RouteDivider from "@/components/RouteDivider";

export const revalidate = 3600;

async function getTours() {
  const supabase = createClient();
  const { data } = await supabase
    .from("tours")
    .select("*")
    .eq("publicado", true)
    .order("orden", { ascending: true });
  return (data ?? []) as Tour[];
}

export default async function InicioPage() {
  const tours = await getTours();

  return (
    <>
      <section className="bg-fjord-900 px-6 py-24 text-ice-50">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-sm uppercase tracking-widest text-glacier-400">
            Puerto Río Tranquilo · Aysén
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Navegando hacia el corazón de Laguna San Rafael
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ice-100">
            Desde 2009 abrimos rutas de navegación y kayak por los fiordos de
            la Patagonia Aysén, hasta el glaciar San Rafael.
          </p>
          <Link
            href="/aventuras"
            className="mt-8 inline-block rounded-sm bg-glacier-400 px-6 py-3 font-body font-medium text-fjord-900 transition hover:bg-glacier-200"
          >
            Ver aventuras
          </Link>
        </div>
      </section>

      <RouteDivider className="text-fjord-400" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl text-fjord-900">
          Nuestras aventuras
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tour/${tour.slug}`}
              className="block rounded-sm border border-ice-100 bg-white p-6 transition hover:border-glacier-400"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-rock-600">
                {tour.categoria}
              </p>
              <h3 className="mt-2 font-display text-xl text-fjord-900">
                {tour.nombre}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                {tour.descripcion_corta}
              </p>
              <p className="mt-4 font-mono text-sm text-fjord-700">
                {tour.duracion} · desde{" "}
                {tour.precio_desde?.toLocaleString("es-CL")} CLP
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
