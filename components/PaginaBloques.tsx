import Image from "next/image";
import { createClient } from "@/lib/supabase/public";
import type { Pagina, BloquePagina } from "@/lib/types";
import { pickField, type Locale } from "@/lib/i18n";

export const revalidate = 3600;

export async function getPagina(slug: string) {
  const supabase = createClient();
  const { data } = await supabase
    .from("paginas")
    .select("*")
    .eq("slug", slug)
    .single<Pagina>();
  return data;
}

function pickBloques(pagina: Pagina, locale: Locale): BloquePagina[] {
  if (locale === "es") return pagina.bloques ?? [];
  const translated = locale === "en" ? pagina.bloques_en : pagina.bloques_fr;
  return translated && translated.length > 0 ? translated : pagina.bloques ?? [];
}

// Correspondance icône ↔ mots-clés du titre du bloc (toutes langues confondues)
const ICONO_POR_TITULO: { match: string[]; icono: string }[] = [
  { match: ["logística especial", "special logistics", "logistique spéciale"], icono: "/images/icono-logisticas-especiales.png" },
  { match: ["apoyo a la investigación", "scientific research", "recherche scientifique"], icono: "/images/icon-cientificos.png" },
  { match: ["transfer terrestre", "ground transfer", "transfert terrestre"], icono: "/images/icon-van.png" },
  { match: ["equipamiento", "equipment", "équipement"], icono: "/images/icon-yacht.png" },
];

function iconoParaBloque(titulo: string): string | null {
  const t = titulo.toLowerCase();
  for (const entry of ICONO_POR_TITULO) {
    if (entry.match.some((m) => t.includes(m))) return entry.icono;
  }
  return null;
}

export function PaginaBloques({
  pagina,
  locale = "es",
  accordion = false,
  indices,
  showTitle = true,
  maxWidthClass,
  dark = false,
}: {
  pagina: Pagina | null;
  locale?: Locale;
  /**
   * Affiche chaque bloc en dépliable (titre visible, texte replié dessous,
   * façon FAQ) au lieu du texte affiché en continu. Demande Philippe pour
   * la page Nosotros (sept. 2026) — désactivé par défaut pour ne pas
   * changer les autres pages qui utilisent ce composant (ex. Logística).
   */
  accordion?: boolean;
  /**
   * Ne rend que ces blocs, par position dans le tableau `bloques` (même
   * ordre dans toutes les langues). Sert à découper l'affichage d'une
   * page en plusieurs sections (ex. Nosotros : "Nuestra historia" en
   * texte plein en premier, puis les autres blocs en accordéon plus bas,
   * avec autre chose entre les deux). Par défaut, tous les blocs.
   */
  indices?: number[];
  /** Affiche le <h1> de la page. À désactiver sur un second appel du
   * composant pour la même page (le titre n'est affiché qu'une fois). */
  showTitle?: boolean;
  /** Largeur max de la section (classe Tailwind `max-w-*`). Par défaut
   * `max-w-3xl` (texte de lecture). Nosotros élargit "Nuestra historia"
   * à `max-w-5xl` pour aligner sa largeur sur EquipoConocenos. */
  maxWidthClass?: string;
  /**
   * Palette claire → sombre pour une page à fond sombre (ex. Logística,
   * sept. 2026 : fond couleur footer, bg-fjord-900). Le fond lui-même
   * n'est pas posé ici — la page l'ajoute sur son propre wrapper — mais
   * les couleurs de texte s'adaptent pour rester lisibles dessus.
   */
  dark?: boolean;
}) {
  if (!pagina) return null;

  const titulo = pickField(pagina, "titulo", locale);
  const todosBloques = pickBloques(pagina, locale);
  const bloques = indices ? indices.map((i) => todosBloques[i]).filter(Boolean) : todosBloques;

  const tituloColor = dark ? "text-ice-50" : "text-fjord-900";
  const textoColor = dark ? "text-ice-100" : "text-slate-600";
  const divideColor = dark ? "divide-ice-50/15" : "divide-fjord-900/10";
  const chevronColor = dark ? "text-glacier-200" : "text-fjord-700";

  return (
    <section className={`mx-auto ${maxWidthClass ?? "max-w-3xl"} px-6 py-16`}>
      {showTitle ? (
        <h1 className={`font-display text-3xl ${tituloColor}`}>{titulo}</h1>
      ) : null}
      <div
        className={`${showTitle ? "mt-10" : ""} ${
          accordion ? `divide-y ${divideColor}` : "space-y-10"
        }`}
      >
        {bloques.map((bloque) => {
          const icono = iconoParaBloque(bloque.titulo);
          const titleRow = (
            <span className="flex items-center gap-4">
              {icono ? (
                <Image
                  src={icono}
                  alt=""
                  width={44}
                  height={44}
                  className="shrink-0"
                />
              ) : null}
              <h2 className={`font-display text-xl ${tituloColor}`}>
                {bloque.titulo}
              </h2>
            </span>
          );

          if (accordion) {
            return (
              <details key={bloque.titulo} className="group py-6 first:pt-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:content-none [&::-webkit-details-marker]:hidden">
                  {titleRow}
                  <span
                    aria-hidden
                    className={`shrink-0 font-display text-2xl leading-none transition-transform duration-200 group-open:rotate-45 ${chevronColor}`}
                  >
                    +
                  </span>
                </summary>
                <p className={`mt-3 whitespace-pre-line ${textoColor}`}>
                  {bloque.texto}
                </p>
              </details>
            );
          }

          return (
            <div key={bloque.titulo}>
              {titleRow}
              <p className={`mt-3 ${textoColor}`}>{bloque.texto}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
