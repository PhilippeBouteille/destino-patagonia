import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/public";
import type { Tour } from "@/lib/types";
import { ICONOS_CATEGORIA } from "@/lib/icons";
import RouteDivider from "@/components/RouteDivider";
import { pickField, pickArrayField, t, type Locale } from "@/lib/i18n";

export const revalidate = 3600;

const GALERIA = [
  "https://destinopatagonia.cl/wp-content/uploads/2019/11/26.jpg",
  "https://destinopatagonia.cl/wp-content/uploads/2019/11/IMG_20170908_123204290_HDR.jpg",
  "https://destinopatagonia.cl/wp-content/uploads/2018/07/laguna-san-rafael-full-day-destino-patagonia-04.jpg",
  "https://destinopatagonia.cl/wp-content/uploads/2018/07/laguna-san-rafael-full-day-destino-patagonia-01.jpg",
  "https://destinopatagonia.cl/wp-content/uploads/2019/11/27.jpg",
  "https://destinopatagonia.cl/wp-content/uploads/2019/11/DSCN4807.jpg",
];

async function getTours() {
  const supabase = createClient();
  const { data } = await supabase
    .from("tours")
    .select("*")
    .eq("publicado", true)
    .order("orden", { ascending: true });
  return (data ?? []) as Tour[];
}

export default async function LocaleInicioPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const tours = await getTours();

  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden px-6 py-24 text-ice-50">
        <Image
          src="https://destinopatagonia.cl/wp-content/uploads/2019/11/home-azul.jpg"
          alt="Sailing to Laguna San Rafael"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-fjord-900/70" />
        <div className="relative mx-auto max-w-4xl">
          <p className="font-mono text-sm uppercase tracking-widest text-glacier-400">
            {t(locale, "hero_kicker")}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            {t(locale, "hero_title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ice-100">
            {t(locale, "hero_text")}
          </p>
          <Link
            href={`/${locale}/aventuras`}
            className="mt-8 inline-block rounded-sm bg-glacier-400 px-6 py-3 font-body font-medium text-fjord-900 transition hover:bg-glacier-200"
          >
            {t(locale, "ver_aventuras")}
          </Link>
        </div>
      </section>

      <RouteDivider className="text-fjord-400" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl text-fjord-900">
          {t(locale, "nuestras_aventuras")}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <Link
              key={tour.id}
              href={`/${locale}/tour/${tour.slug}`}
              className="group block overflow-hidden rounded-sm border border-ice-100 bg-white transition hover:border-glacier-400"
            >
              {tour.fotos?.[0] ? (
                <div className="relative h-44 w-full">
                  <Image
                    src={tour.fotos[0]}
                    alt={pickField(tour, "nombre", locale)}
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
                  {pickField(tour, "nombre", locale)}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {pickField(tour, "descripcion_corta", locale)}
                </p>
                <p className="mt-4 font-mono text-sm text-fjord-700">
                  {pickField(tour, "duracion", locale)} · {t(locale, "desde")}{" "}
                  {tour.precio_desde?.toLocaleString("es-CL")} CLP
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <RouteDivider className="text-fjord-400" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl text-fjord-900">
          {t(locale, "postales")}
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {GALERIA.map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={src}
                alt="Destino Patagonia adventure"
                fill
                className="object-cover transition hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
