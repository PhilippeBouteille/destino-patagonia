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
}) {
  if (!pagina) return null;

  const titulo = pickField(pagina, "titulo", locale);
  const todosBloques = pickBloques(pagina, locale);
  const bloques = indices ? indices.map((i) => todosBloques[i]).filter(Boolean) : todosBloques;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      {showTitle ? (
        <h1 className="font-display text-3xl text-fjord-900">{titulo}</h1>
      ) : null}
      <div
        className={`${showTitle ? "mt-10" : ""} ${
          accordion ? "divide-y divide-fjord-900/10" : "space-y-10"
        }`}
      >
        {bloques.map((bloque) => {
          const icono = iconoParaBloque(bloque.titulo);
          const titleRow = (
            <span className="flex items-center gap-3">
              {icono ? (
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fjord-900">
                  <Image src={icono} alt="" width={24} height={24} />
                </span>
              ) : null}
              <h2 className="font-display text-xl text-fjord-900">
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
                    className="shrink-0 font-display text-2xl leading-none text-fjord-700 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 whitespace-pre-line text-slate-600">
                  {bloque.texto}
                </p>
              </details>
            );
          }

          return (
            <div key={bloque.titulo}>
              {titleRow}
              <p className="mt-3 text-slate-600">{bloque.texto}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
