import { createClient } from "@/lib/supabase/public";
import type { Tour } from "@/lib/types";
import TourCard from "@/components/TourCard";
import { pickField, t, type Locale } from "@/lib/i18n";

export const revalidate = 3600;

async function getTours() {
  const supabase = createClient();
  const { data } = await supabase
    .from("tours")
    .select("*")
    .eq("publicado", true)
    .order("orden", { ascending: true });
  return (data ?? []) as Tour[];
}

export default async function LocaleProgramasPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const tours = await getTours();

  return (
    // "programas-invert" : couleurs inversées avec le footer sur cette page
    // (fond sombre ici, footer clair — voir app/globals.css).
    <div className="programas-invert bg-fjord-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-display text-3xl text-ice-50 sm:text-4xl">
          {t(locale, "nav_aventuras")}
        </h1>
        <p className="mt-3 max-w-2xl text-ice-100">
          {t(locale, "programas_intro")}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              href={`/${locale}/tour/${tour.slug}`}
              name={pickField(tour, "nombre", locale)}
              photo={tour.fotos?.[0]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
