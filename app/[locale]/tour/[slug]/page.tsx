import Image from "next/image";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/public";
import type { Tour } from "@/lib/types";
import { ICONOS_CATEGORIA } from "@/lib/icons";
import { pickField, pickArrayField, t, type Locale } from "@/lib/i18n";

export const revalidate = 3600;

async function getTour(slug: string) {
  const supabase = createClient();
  const { data } = await supabase
    .from("tours")
    .select("*")
    .eq("slug", slug)
    .eq("publicado", true)
    .single<Tour>();
  return data;
}

export async function generateStaticParams() {
  const supabase = createClient();
  const { data } = await supabase
    .from("tours")
    .select("slug")
    .eq("publicado", true);

  const slugs = (data ?? []).map((tour) => tour.slug);
  return ["en", "fr"].flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export default async function LocaleTourPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const { locale, slug } = params;
  const tour = await getTour(slug);
  if (!tour) notFound();

  const incluye = pickArrayField(tour, "incluye", locale);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {tour.fotos?.[0] ? (
        <div className="relative mb-8 h-72 w-full overflow-hidden rounded-sm sm:h-96">
          <Image
            src={tour.fotos[0]}
            alt={pickField(tour, "nombre", locale)}
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : null}

      <div className="flex items-center gap-2">
        {ICONOS_CATEGORIA[tour.categoria ?? ""] ? (
          <Image
            src={ICONOS_CATEGORIA[tour.categoria ?? ""]}
            alt=""
            width={32}
            height={32}
          />
        ) : null}
        <p className="font-mono text-xs uppercase tracking-wide text-rock-600">
          {tour.categoria}
        </p>
      </div>
      <h1 className="mt-2 font-display text-3xl text-fjord-900 sm:text-4xl">
        {pickField(tour, "nombre", locale)}
      </h1>

      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-fjord-700">
        <div>
          <dt className="text-rock-600">{t(locale, "duracion")}</dt>
          <dd>{pickField(tour, "duracion", locale)}</dd>
        </div>
        <div>
          <dt className="text-rock-600">{t(locale, "temporada")}</dt>
          <dd>
            {tour.temporada_ini} – {tour.temporada_fin}
          </dd>
        </div>
        <div>
          <dt className="text-rock-600">{t(locale, "desde")}</dt>
          <dd>{tour.precio_desde?.toLocaleString("es-CL")} CLP</dd>
        </div>
      </dl>

      <p className="mt-8 text-lg text-slate-600">
        {pickField(tour, "descripcion_corta", locale)}
      </p>

      {pickField(tour, "descripcion_larga", locale) ? (
        <p className="mt-4 whitespace-pre-line text-slate-500">
          {pickField(tour, "descripcion_larga", locale)}
        </p>
      ) : null}

      {incluye.length ? (
        <>
          <h2 className="mt-10 font-display text-xl text-fjord-900">
            {t(locale, "incluye")}
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
            {incluye.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}

      <a
        href={`/${locale}/contacto`}
        className="mt-10 inline-block rounded-sm bg-fjord-900 px-6 py-3 font-body font-medium text-ice-50 transition hover:bg-fjord-700"
      >
        {t(locale, "reservar")}
      </a>
    </article>
  );
}
