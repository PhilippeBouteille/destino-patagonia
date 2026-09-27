import { createClient } from "@/lib/supabase/public";
import type { InfoGeneral } from "@/lib/types";
import { t, type Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { googleMapsLink } from "@/lib/googleMaps";

export const revalidate = 3600;

export default async function LocaleContactoPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
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
        <h1 className="font-display text-3xl text-fjord-900">
          {t(locale, "nav_contacto")}
        </h1>
        <p className="mt-3 text-slate-500">{t(locale, "contacto_intro")}</p>

        <dl className="mt-10 space-y-4 font-mono text-sm text-fjord-700">
          {data?.telefono ? (
            <div>
              <dt className="text-rock-600">{t(locale, "telefono")}</dt>
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
              <dt className="text-rock-600">{t(locale, "email")}</dt>
              <dd>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </dd>
            </div>
          ) : null}
          {data?.direccion ? (
            <div>
              <dt className="text-rock-600">{t(locale, "direccion")}</dt>
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
      </section>
    </>
  );
}
