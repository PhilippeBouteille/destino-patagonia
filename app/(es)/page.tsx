import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/public";
import type { Tour } from "@/lib/types";
import { ICONOS_CATEGORIA } from "@/lib/icons";
import RouteDivider from "@/components/RouteDivider";
import HeroSlider from "@/components/HeroSlider";
import PostalesGalerie from "@/components/PostalesGalerie";
import ServiciosBandeau from "@/components/ServiciosBandeau";

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
      <section className="relative flex min-h-[88vh] items-center overflow-hidden px-6 py-24 text-ice-50">
        <HeroSlider />
        <div className="absolute inset-0 z-[2] bg-fjord-900/40" />
        <div className="relative z-[3] mx-auto max-w-4xl">
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
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tour/${tour.slug}`}
              className="group block overflow-hidden rounded-sm border border-ice-100 bg-white transition hover:border-glacier-400"
            >
              {tour.fotos?.[0] ? (
                <div className="relative h-44 w-full">
                  <Image
                    src={tour.fotos[0]}
                    alt={tour.nombre}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
              ) : null}
              <div className="p-6">
                <div className="flex items-center gap-2">
                  {ICONOS_CATEGORIA[tour.categoria ?? ""] ? (
                    <Image
                      src={ICONOS_CATEGORIA[tour.categoria ?? ""]}
                      alt=""
                      width={28}
                      height={28}
                    />
                  ) : null}
                  <p className="font-mono text-xs uppercase tracking-wide text-rock-600">
                    {tour.categoria}
                  </p>
                </div>
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
              </div>
            </Link>
          ))}
        </div>
      </section>

      <RouteDivider className="text-fjord-400" />

      <ServiciosBandeau locale="es" />

      <RouteDivider className="text-fjord-400" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl text-fjord-900">
          Postales de nuestras aventuras
        </h2>
        <PostalesGalerie altPrefix="Aventura Destino Patagonia" />
      </section>
    </>
  );
}
