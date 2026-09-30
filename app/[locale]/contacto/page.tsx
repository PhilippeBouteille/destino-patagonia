import { createClient } from "@/lib/supabase/public";
import type { InfoGeneral } from "@/lib/types";
import { t, type Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { googleMapsLink } from "@/lib/googleMaps";
import ParallaxImage from "@/components/ParallaxImage";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/ContactIcons";

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
    <section className="has-hero relative flex h-screen items-end overflow-hidden px-6 pb-24 pt-24 text-ice-50 sm:pb-32">
      <ParallaxImage
        src="/images/contacto-hero.jpg"
        alt="Contacto Destino Patagonia"
      />
      <div className="absolute inset-0 z-[2] bg-fjord-900/55" />
      <div className="relative z-[3] mx-auto max-w-2xl">
        <h1 className="sr-only">{t(locale, "nav_contacto")}</h1>
        <p className="max-w-xl text-lg text-ice-100">
          {t(locale, "contacto_intro")}
        </p>

        <dl className="mt-10 space-y-5 font-mono text-sm">
          {data?.telefono ? (
            <div>
              <dt className="text-glacier-200">{t(locale, "telefono_oficina")}</dt>
              <dd className="mt-1 flex items-center gap-3">
                <PhoneIcon />
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
          {data?.telefono_contacto ? (
            <div>
              <dt className="text-glacier-200">{t(locale, "telefono_contacto")}</dt>
              <dd className="mt-1 flex items-center gap-3">
                <PhoneIcon />
                <a
                  href={whatsappLink(data.telefono_contacto)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-glacier-400"
                >
                  {data.telefono_contacto}
                </a>
              </dd>
            </div>
          ) : null}
          {data?.email ? (
            <div>
              <dt className="text-glacier-200">{t(locale, "email")}</dt>
              <dd className="mt-1 flex items-center gap-3">
                <MailIcon />
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
              <dt className="text-glacier-200">{t(locale, "direccion")}</dt>
              <dd className="mt-1 flex items-center gap-3">
                <PinIcon />
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
