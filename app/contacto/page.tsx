import { createClient } from "@/lib/supabase/public";
import type { InfoGeneral } from "@/lib/types";

export const revalidate = 3600;

export const metadata = {
  title: "Contacto — Destino Patagonia",
};

export default async function ContactoPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("info_general")
    .select("*")
    .eq("id", 1)
    .single<InfoGeneral>();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl text-fjord-900">Contacto</h1>
      <p className="mt-3 text-slate-500">
        Escríbenos para reservar tu aventura o coordinar un viaje especial.
      </p>

      <dl className="mt-10 space-y-4 font-mono text-sm text-fjord-700">
        {data?.telefono ? (
          <div>
            <dt className="text-rock-600">Teléfono</dt>
            <dd>{data.telefono}</dd>
          </div>
        ) : null}
        {data?.email ? (
          <div>
            <dt className="text-rock-600">Email</dt>
            <dd>
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </dd>
          </div>
        ) : null}
        {data?.direccion ? (
          <div>
            <dt className="text-rock-600">Dirección</dt>
            <dd>{data.direccion}</dd>
          </div>
        ) : null}
      </dl>
    </section>
  );
}
