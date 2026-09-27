import { createClient } from "@/lib/supabase/server";
import type { InfoGeneral } from "@/lib/types";
import { whatsappLink } from "@/lib/whatsapp";
import { googleMapsLink } from "@/lib/googleMaps";
import ParallaxImage from "@/components/ParallaxImage";

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
    <section className="has-hero relative flex h-screen items-end overflow-hidden px-6 pb-16 pt-24 text-ice-50 sm:pb-24">
      <ParallaxImage
        src="/images/contacto-hero.jpg"
        alt="Contacto Destino Patagonia"
      />
      <div className="absolute inset-0 z-[2] bg-fjord-900/55" />
      <div className="relative z-[3] mx-auto max-w-2xl">
        <h1 className="font-display text-4xl sm:text-5xl">Contacto</h1>
        <p className="mt-4 max-w-xl text-lg text-ice-100">
          Escríbenos para reservar tu aventura o coordinar un viaje especial.
        </p>

        <dl className="mt-10 space-y-4 font-mono text-sm">
          {data?.telefono ? (
            <div>
              <dt className="text-glacier-200">Teléfono</dt>
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
              <dt className="text-glacier-200">Email</dt>
              <dd>
                <a
                  href={`mailto:${data.email}`}
                  className="hover:text-glacier-400"
                >
                  {data.email}
                </a>
              </dd>
            </div>
          ) : null}
          {data?.direccion ? (
            <div>
              <dt className="text-glacier-200">Dirección</dt>
              <dd>
                <a
                  href={googleMapsLink(data.direccion)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-glacier-400"
                >
                  {data.direccion}
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </section>
  );
}
