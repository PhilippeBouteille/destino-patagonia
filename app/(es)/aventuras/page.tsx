import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/public";
import type { Tour } from "@/lib/types";
import { ICONOS_CATEGORIA } from "@/lib/icons";

export const revalidate = 3600;

export const metadata = {
  title: "Aventuras — Destino Patagonia",
};

async function getTours() {
  const supabase = createClient();
  const { data } = await supabase
    .from("tours")
    .select("*")
    .eq("publicado", true)
    .order("orden", { ascending: true });
  return (data ?? []) as Tour[];
}

export default async function AventurasPage() {
  const tours = await getTours();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-3xl text-fjord-900">Aventuras</h1>
      <p className="mt-3 max-w-2xl text-slate-500">
        Desde un full day hasta expediciones en kayak de 6 días — cada ruta
        navega hacia el Parque Nacional Laguna San Rafael.
      </p>

      <div className="mt-10 space-y-6">
        {tours.map((tour) => (
          <Link
            key={tour.id}
            href={`/tour/${tour.slug}`}
            className="flex flex-col gap-4 border-b border-ice-100 pb-6 transition hover:opacity-80 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex gap-4 sm:items-center">
              {tour.fotos?.[0] ? (
                <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-sm">
                  <Image
                    src={tour.fotos[0]}
                    alt={tour.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div>
                <div className="flex items-center gap-2">
                  {ICONOS_CATEGORIA[tour.categoria ?? ""] ? (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fjord-900">
                      <Image
                        src={ICONOS_CATEGORIA[tour.categoria ?? ""]}
                        alt=""
                        width={16}
                        height={16}
                      />
                    </span>
                  ) : null}
                  <p className="font-mono text-xs uppercase tracking-wide text-rock-600">
                    {tour.categoria}
                  </p>
                </div>
                <h2 className="font-display text-2xl text-fjord-900">
                  {tour.nombre}
                </h2>
                <p className="mt-1 max-w-xl text-sm text-slate-500">
                  {tour.descripcion_corta}
                </p>
              </div>
            </div>
            <p className="whitespace-nowrap font-mono text-sm text-fjord-700">
              {tour.duracion} · desde{" "}
              {tour.precio_desde?.toLocaleString("es-CL")} CLP
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
