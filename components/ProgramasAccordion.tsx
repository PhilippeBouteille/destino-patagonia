"use client";

import { useState } from "react";
import Link from "next/link";
import type { Tour } from "@/lib/types";
import { pickField, t, type Locale } from "@/lib/i18n";

/**
 * Section "Nuestros programas" de l'accueil (sept. 2026, demande Philippe) :
 * accordéon vertical — les tours sont des bandes hautes et étroites côte à
 * côte ; cliquer sur une bande l'élargit (les autres se resserrent) et
 * révèle un aperçu succinct (durée, prix, courte description). Volontairement
 * différent de la grille de la page Programas, pour donner une dynamique
 * propre à l'accueil.
 */
export default function ProgramasAccordion({
  tours,
  locale = "es",
  basePath = "/tour",
}: {
  tours: Tour[];
  locale?: Locale;
  basePath?: string;
}) {
  const [active, setActive] = useState(0);

  function toggle(index: number) {
    setActive(index);
  }

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(index);
    }
  }

  return (
    <div className="flex h-[420px] w-full gap-2 overflow-hidden sm:h-[520px]">
      {tours.map((tour, index) => {
        const isActive = index === active;
        const name = pickField(tour, "nombre", locale);
        const descripcion = pickField(tour, "descripcion_corta", locale);
        const duracion = pickField(tour, "duracion", locale);
        const photo = tour.fotos?.[0] ?? tour.fotos?.[1];

        return (
          <div
            key={tour.id}
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
            aria-label={name}
            onClick={() => toggle(index)}
            onKeyDown={(e) => onKeyDown(e, index)}
            className="group relative h-full cursor-pointer overflow-hidden rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-glacier-400"
            style={{
              flex: isActive ? "6 1 0%" : "1 1 0%",
              transition: "flex 500ms ease-in-out",
            }}
          >
            {photo ? (
              <img
                src={photo}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-fjord-700" />
            )}
            <div
              className={`absolute inset-0 transition-colors duration-500 ${
                isActive
                  ? "bg-fjord-900/45"
                  : "bg-fjord-900/55 group-hover:bg-fjord-900/40"
              }`}
            />

            {/* Bande repliée : nom en lecture verticale */}
            <div
              className={`absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-300 ${
                isActive ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <span className="whitespace-nowrap font-display text-sm uppercase tracking-wide text-ice-50 [writing-mode:vertical-rl]">
                {name}
              </span>
            </div>

            {/* Contenu déplié */}
            <div
              className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 sm:p-8 ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <h3 className="font-display text-2xl text-ice-50 sm:text-3xl">
                {name}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-glacier-200 sm:text-sm">
                {duracion}
                {tour.precio_desde
                  ? ` · ${t(locale, "desde")} ${tour.precio_desde.toLocaleString(
                      "es-CL"
                    )} CLP`
                  : ""}
              </p>
              <p className="mt-3 max-w-md text-sm text-ice-100 sm:text-base">
                {descripcion}
              </p>
              <Link
                href={`${basePath}/${tour.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-block w-fit rounded-sm bg-glacier-400 px-4 py-2 font-body text-sm font-medium text-fjord-900 transition hover:bg-glacier-200"
              >
                {t(locale, "ver_detalle")}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
