import Link from "next/link";
import { createClient } from "@/lib/supabase/public";
import type { Tour } from "@/lib/types";
import RouteDivider from "@/components/RouteDivider";
import HeroVideo from "@/components/HeroVideo";
import PostalesGalerie from "@/components/PostalesGalerie";
import ServiciosBandeau from "@/components/ServiciosBandeau";
import InstagramFeed from "@/components/InstagramFeed";
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

export default async function LocaleInicioPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const tours = await getTours();

  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden px-6 py-24 text-ice-50">
        <HeroVideo />
        <div className="absolute inset-0 z-[2] bg-fjord-900/40" />
        <div className="relative z-[3] mx-auto max-w-4xl">
          <p className="font-mono text-sm uppercase tracking-widest text-glacier-400">
            {t(locale, "hero_kicker")}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            {t(locale, "hero_title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ice-100">
            {t(locale, "hero_text")}
          </p>
          <Link
            href={`/${locale}/programas`}
            className="mt-8 inline-block rounded-sm bg-glacier-400 px-6 py-3 font-body font-medium text-fjord-900 transition hover:bg-glacier-200"
          >
            {t(locale, "ver_programas")}
          </Link>
        </div>
      </section>

      <RouteDivider className="text-fjord-400" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl text-fjord-900">
          {t(locale, "nuestras_aventuras")}
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              href={`/${locale}/tour/${tour.slug}`}
              name={pickField(tour, "nombre", locale)}
              photo={tour.fotos?.[1] ?? tour.fotos?.[0]}
            />
          ))}
        </div>
      </section>

      <RouteDivider className="text-fjord-400" />

      <ServiciosBandeau locale={locale} />

      <RouteDivider className="text-fjord-400" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl text-fjord-900">
          {t(locale, "postales")}
        </h2>
        <PostalesGalerie altPrefix="Destino Patagonia" />
      </section>

      <InstagramFeed locale={locale} />
    </>
  );
}
