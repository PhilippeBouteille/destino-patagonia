import { createClient } from "@/lib/supabase/public";
import type { Tour } from "@/lib/types";
import TourCard from "@/components/TourCard";

export const revalidate = 3600;

export const metadata = {
  title: "Programas — Destino Patagonia",
};

async function getTours() {
  const supabase = createClient();
  const { data } = await supabase
    .from("tours")
    .select("*")
    .eq("publicado", true)
    .order("orden", { ascending: true });
  return (data ?? []) as Tour[];
}

export default async function ProgramasPage() {
  const tours = await getTours();

  return (
    <div className="has-hero bg-fjord-900">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-32">
        <h1 className="font-display text-3xl text-ice-50 sm:text-4xl">
          Programas
        </h1>
        <p className="mt-3 max-w-2xl text-ice-100">
          Desde la navegación full day hasta expediciones de múltiples días
          que combinan zodiac, packraft y caminatas — cada ruta conduce al
          Parque Nacional Laguna San Rafael.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              href={`/tour/${tour.slug}`}
              name={tour.nombre}
              photo={tour.fotos?.[1] ?? tour.fotos?.[0]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
