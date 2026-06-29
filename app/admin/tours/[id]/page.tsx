import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Tour } from "@/lib/types";
import { updateTour } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function EditTourPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data: tour } = await supabase
    .from("tours")
    .select("*")
    .eq("id", params.id)
    .single<Tour>();

  if (!tour) notFound();

  const action = updateTour.bind(null, tour.id);

  return (
    <section className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="font-display text-2xl text-fjord-900">{tour.nombre}</h1>
      <form action={action} className="mt-8 space-y-5">
        <Field label="Nombre" name="nombre" defaultValue={tour.nombre} />
        <Field
          label="Categoría"
          name="categoria"
          defaultValue={tour.categoria ?? ""}
        />
        <Field
          label="Precio desde (CLP)"
          name="precio_desde"
          type="number"
          defaultValue={String(tour.precio_desde ?? "")}
        />
        <Field
          label="Duración"
          name="duracion"
          defaultValue={tour.duracion ?? ""}
        />
        <div className="flex gap-4">
          <Field
            label="Temporada inicio"
            name="temporada_ini"
            defaultValue={tour.temporada_ini ?? ""}
          />
          <Field
            label="Temporada fin"
            name="temporada_fin"
            defaultValue={tour.temporada_fin ?? ""}
          />
        </div>
        <div>
          <label className="block text-sm text-slate-600">
            Descripción corta
          </label>
          <textarea
            name="descripcion_corta"
            defaultValue={tour.descripcion_corta ?? ""}
            rows={2}
            className="mt-1 w-full rounded-sm border border-ice-100 px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-600">
            Descripción larga
          </label>
          <textarea
            name="descripcion_larga"
            defaultValue={tour.descripcion_larga ?? ""}
            rows={5}
            className="mt-1 w-full rounded-sm border border-ice-100 px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-600">
            Incluye (una línea por punto)
          </label>
          <textarea
            name="incluye"
            defaultValue={(tour.incluye ?? []).join("\n")}
            rows={4}
            className="mt-1 w-full rounded-sm border border-ice-100 px-3 py-2"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            name="publicado"
            defaultChecked={tour.publicado}
          />
          Publicado en el sitio
        </label>
        <button
          type="submit"
          className="rounded-sm bg-fjord-900 px-5 py-2 font-medium text-ice-50 hover:bg-fjord-700"
        >
          Guardar cambios
        </button>
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  defaultValue,
  type = "text",
}: {
  label: string;
  name: string;
  defaultValue: string;
  type?: string;
}) {
  return (
    <div className="flex-1">
      <label className="block text-sm text-slate-600">{label}</label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-sm border border-ice-100 px-3 py-2"
      />
    </div>
  );
}
