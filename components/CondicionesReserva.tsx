import { Fragment } from "react";
import type { Locale } from "@/lib/i18n";
import { CONDICIONES_CONTENT } from "@/lib/condicionesReserva";

const EMAIL = "contacto@destinopatagonia.cl";
const NOAA = "www.ready.arl.noaa.gov";
const linkClass =
  "text-glacier-200 underline-offset-4 hover:text-white hover:underline";

/** Rend un paragraphe en transformant l'e-mail et l'adresse NOAA en liens. */
function Texto({ texto }: { texto: string }) {
  const parts = texto.split(new RegExp(`(${EMAIL}|${NOAA.replace(/\./g, "\\.")})`));
  return (
    <>
      {parts.map((part, i) =>
        part === EMAIL ? (
          <a key={i} href={`mailto:${EMAIL}`} className={linkClass}>
            {EMAIL}
          </a>
        ) : part === NOAA ? (
          <a
            key={i}
            href={`https://${NOAA}`}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {NOAA}
          </a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

/** Page « Condiciones de reserva y anulación » (ES et [locale]). */
export default function CondicionesReserva({ locale }: { locale: Locale }) {
  const t = CONDICIONES_CONTENT[locale];

  return (
    <div className="bg-fjord-900">
      <article className="mx-auto max-w-3xl px-6 py-16 text-left sm:text-justify">
        <h1 className="font-display text-3xl text-ice-50 md:text-4xl">
          {t.titulo}
        </h1>
        {t.nota ? (
          <p className="mt-4 text-sm italic text-ice-100/70">{t.nota}</p>
        ) : null}

        {t.secciones.map((seccion) => (
          <section key={seccion.titulo} className="mt-12">
            <h2 className="font-display text-2xl text-ice-50">
              {seccion.titulo}
            </h2>
            <div className="mt-4 space-y-4 text-ice-100">
              {seccion.bloques.map((bloque, i) =>
                bloque.tipo === "p" ? (
                  <p key={i}>
                    <Texto texto={bloque.texto} />
                  </p>
                ) : (
                  <ul key={i} className="space-y-3">
                    {bloque.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-glacier-400"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </section>
        ))}
      </article>
    </div>
  );
}
