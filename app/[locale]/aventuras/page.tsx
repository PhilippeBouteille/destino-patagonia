import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/public";
import type { Tour } from "@/lib/types";
import { ICONOS_CATEGORIA } from "@/lib/icons";
import { pickField, t, type Locale } from "@/lib/i18n";

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

export default async function LocaleAventurasPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const tours = await getTours();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-3xl text-fjord-900">
        {t(locale, "nav_aventuras")}
      </h1>

      <div className="mt-10 space-y-6">
        {tours.map((tour) => (
          <Link
            key={tour.id}
            href={`/${locale}/tour/${tour.slug}`}
            className="flex flex-col gap-4 border-b border-ice-100 pb-6 transition hover:opacity-80 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex gap-4 sm:items-center">
              {tour.fotos?.[0] ? (
                <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-sm">
                  <Image
                    src={tour.fotos[0]}
                    alt={pickField(tour, "nombre", locale)}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div>
                <div className="flex items-center gap-2">
                  {ICONOS_CATEGORIA[tour.categoria ?? ""] ? (
                    <Image
                      src={ICONOS_CATEGORIA[tour.categoria ?? ""]}
                      alt=""
                      width={20}
                      height={20}
                    />
                  ) : null}
                  <p className="font-mono text-xs uppercase tracking-wide text-rock-600">
                    {tour.categoria}
                  </p>
                </div>
                <h2 className="font-display text-2xl text-fjord-900">
                  {pickField(tour, "nombre", locale)}
                </h2>
                <p className="mt-1 max-w-xl text-sm text-slate-500">
                  {pickField(tour, "descripcion_corta", locale)}
                </p>
              </div>
            </div>
            <p className="whitespace-nowrap font-mono text-sm text-fjord-700">
              {pickField(tour, "duracion", locale)} · {t(locale, "desde")}{" "}
              {tour.precio_desde?.toLocaleString("es-CL")} CLP
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
