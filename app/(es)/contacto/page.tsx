import { createClient } from "@/lib/supabase/server";
import type { InfoGeneral } from "@/lib/types";
import { whatsappLink } from "@/lib/whatsapp";

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
    <>
      <div className="has-hero relative h-screen w-full overflow-hidden">
        <img
          src="/images/contacto-hero.jpg"
          alt="Contacto Destino Patagonia"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      </div>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl text-fjord-900">Contacto</h1>
        <p className="mt-3 text-slate-500">
          Escríbenos para reservar tu aventura o coordinar un viaje especial.
        </p>

        <dl className="mt-10 space-y-4 font-mono text-sm text-fjord-700">
          {data?.telefono ? (
            <div>
              <dt className="text-rock-600">Teléfono</dt>
              <dd>
                <a
                  href={whatsappLink(data.telefono)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-glacier-400"
                >
                  {data.telefono}
                </a>
              </dd>
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
    </>
  );
}
