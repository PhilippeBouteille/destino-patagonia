import Image from "next/image";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/public";
import type { Tour } from "@/lib/types";
import { ICONOS_CATEGORIA } from "@/lib/icons";
import { tourHeroFocus } from "@/lib/tourHeroFocus";

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
  return (data ?? []).map((tour) => ({ slug: tour.slug }));
}

export default async function TourPage({
  params,
}: {
  params: { slug: string };
}) {
  const tour = await getTour(params.slug);
  if (!tour) notFound();

  return (
    <article>
      {tour.fotos?.[0] ? (
        <div className="has-hero relative h-screen w-full overflow-hidden">
          <img
            src={tour.fotos[0]}
            alt={tour.nombre}
            className="h-full w-full object-cover"
            style={{ objectPosition: tourHeroFocus(tour.slug) }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
        </div>
      ) : null}

      <div className="mx-auto max-w-3xl px-6 py-16">
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
          {tour.nombre}
        </h1>

        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-fjord-700">
          <div>
            <dt className="text-rock-600">Duración</dt>
            <dd>{tour.duracion}</dd>
          </div>
          <div>
            <dt className="text-rock-600">Temporada</dt>
            <dd>
              {tour.temporada_ini} – {tour.temporada_fin}
            </dd>
          </div>
          <div>
            <dt className="text-rock-600">Desde</dt>
            <dd>{tour.precio_desde?.toLocaleString("es-CL")} CLP</dd>
          </div>
        </dl>

        <p className="mt-8 text-lg text-slate-600">{tour.descripcion_corta}</p>

        {tour.descripcion_larga ? (
          <p className="mt-4 whitespace-pre-line text-slate-500">
            {tour.descripcion_larga}
          </p>
        ) : null}

        {tour.incluye?.length ? (
          <>
            <h2 className="mt-10 font-display text-xl text-fjord-900">
              Incluye
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              {tour.incluye.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/contacto"
            className="inline-block rounded-sm bg-fjord-900 px-6 py-3 font-body font-medium text-ice-50 transition hover:bg-fjord-700"
          >
            Reservar este tour
          </a>
          {tour.pdf_folleto ? (
            <a
              href={tour.pdf_folleto}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm border border-fjord-900 px-6 py-3 font-body font-medium text-fjord-900 transition hover:bg-fjord-900 hover:text-ice-50"
            >
              Descargar programa (PDF)
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
