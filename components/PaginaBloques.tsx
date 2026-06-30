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
}: {
  pagina: Pagina | null;
  locale?: Locale;
}) {
  if (!pagina) return null;

  const titulo = pickField(pagina, "titulo", locale);
  const bloques = pickBloques(pagina, locale);

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl text-fjord-900">{titulo}</h1>
      <div className="mt-10 space-y-10">
        {bloques.map((bloque) => {
          const icono = iconoParaBloque(bloque.titulo);
          return (
            <div key={bloque.titulo}>
              <div className="flex items-center gap-3">
                {icono ? (
                  <Image src={icono} alt="" width={32} height={32} />
                ) : null}
                <h2 className="font-display text-xl text-fjord-900">
                  {bloque.titulo}
                </h2>
              </div>
              <p className="mt-3 text-slate-600">{bloque.texto}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
