import Link from "next/link";
import { createClient } from "@/lib/supabase/public";
import type { Tour } from "@/lib/types";
import RouteDivider from "@/components/RouteDivider";
import HeroVideo from "@/components/HeroVideo";
import PostalesGalerie from "@/components/PostalesGalerie";
import ServiciosBandeau from "@/components/ServiciosBandeau";
import InstagramFeed from "@/components/InstagramFeed";
import ProgramasAccordion from "@/components/ProgramasAccordion";

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

export default async function InicioPage() {
  const tours = await getTours();

  return (
    <>
      <section className="has-hero relative flex h-screen items-center overflow-hidden px-6 py-24 text-ice-50">
        <HeroVideo />
        <div className="absolute inset-0 z-[2] bg-fjord-900/40" />
        <div className="relative z-[3] mx-auto max-w-4xl">
          <p className="font-mono text-sm uppercase tracking-widest text-glacier-400">
            Puerto Río Tranquilo · Aysén
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Navegando hacia el corazón de Laguna San Rafael
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ice-100">
            Desde 2009 abrimos rutas de navegación y kayak por los fiordos de
            la Patagonia Aysén, hasta el glaciar San Rafael.
          </p>
          <Link
            href="/programas"
            className="mt-8 inline-block rounded-sm bg-glacier-400 px-6 py-3 font-body font-medium text-fjord-900 transition hover:bg-glacier-200"
          >
            Ver programas
          </Link>
        </div>
      </section>

      <RouteDivider className="text-fjord-400" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl text-fjord-900">
          Nuestros programas
        </h2>
        <div className="mt-8">
          <ProgramasAccordion
            tours={tours}
            basePath="/tour"
            defaultSlug="kayak-a-laguna-san-rafael"
          />
        </div>
      </section>

      <RouteDivider className="text-fjord-400" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl text-fjord-900">
          Postales de nuestras aventuras
        </h2>
        <PostalesGalerie altPrefix="Aventura Destino Patagonia" />
      </section>

      <RouteDivider className="text-fjord-400" />

      <ServiciosBandeau locale="es" />

      <RouteDivider className="text-fjord-400" />

      <InstagramFeed />
    </>
  );
}
