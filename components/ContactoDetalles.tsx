import type { ReactNode } from "react";
import type { InfoGeneral } from "@/lib/types";
import { t, localePrefix, type Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { googleMapsLink } from "@/lib/googleMaps";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/ContactIcons";
import { CONDICIONES_CONTENT, CONDICIONES_SLUG } from "@/lib/condicionesReserva";

/**
 * Section Contacto affichée sous la photo (même structure que les autres
 * pages : hero plein écran puis contenu sur fond fjord-900). Les
 * coordonnées viennent de la table `info_general`.
 */
function Carte({
  icono,
  etiqueta,
  children,
  ancho = false,
}: {
  icono: ReactNode;
  etiqueta: string;
  children: ReactNode;
  ancho?: boolean;
}) {
  return (
    <div
      className={`rounded-sm border border-ice-50/15 p-6 ${
        ancho ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        {icono}
        <h2 className="font-mono text-xs uppercase tracking-widest text-glacier-200">
          {etiqueta}
        </h2>
      </div>
      <div className="mt-3 text-lg text-ice-50">{children}</div>
    </div>
  );
}

const enlaceClass =
  "underline-offset-4 transition-colors hover:text-glacier-200 hover:underline";

export default function ContactoDetalles({
  locale,
  data,
}: {
  locale: Locale;
  data: InfoGeneral | null;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl text-ice-50">
        {t(locale, "nav_contacto")}
      </h1>
      <p className="mt-4 max-w-xl text-ice-100">{t(locale, "contacto_intro")}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {data?.telefono ? (
          <Carte icono={<PhoneIcon />} etiqueta={t(locale, "telefono_oficina")}>
            <a
              href={whatsappLink(data.telefono)}
              target="_blank"
              rel="noopener noreferrer"
              className={enlaceClass}
            >
              {data.telefono}
            </a>
          </Carte>
        ) : null}
        {data?.telefono_contacto ? (
          <Carte icono={<PhoneIcon />} etiqueta={t(locale, "telefono_contacto")}>
            <a
              href={whatsappLink(data.telefono_contacto)}
              target="_blank"
              rel="noopener noreferrer"
              className={enlaceClass}
            >
              {data.telefono_contacto}
            </a>
          </Carte>
        ) : null}
        {data?.email ? (
          <Carte icono={<MailIcon />} etiqueta={t(locale, "email")}>
            <a href={`mailto:${data.email}`} className={`${enlaceClass} break-all`}>
              {data.email}
            </a>
          </Carte>
        ) : null}
        {data?.direccion ? (
          <Carte icono={<PinIcon />} etiqueta={t(locale, "direccion")}>
            <a
              href={googleMapsLink(data.direccion)}
              target="_blank"
              rel="noopener noreferrer"
              className={enlaceClass}
            >
              {data.direccion}
            </a>
          </Carte>
        ) : null}
      </div>

      <p className="mt-10 text-sm">
        <a
          href={`${localePrefix(locale)}/${CONDICIONES_SLUG}`}
          className="text-glacier-200 underline underline-offset-4 hover:text-white"
        >
          {CONDICIONES_CONTENT[locale].link} →
        </a>
      </p>
    </section>
  );
}
