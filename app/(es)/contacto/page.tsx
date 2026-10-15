import { createClient } from "@/lib/supabase/server";
import type { InfoGeneral } from "@/lib/types";
import ContactoDetalles from "@/components/ContactoDetalles";

export const revalidate = 3600;

export const metadata = {
  title: "Contacto — Destino Patagonia",
};

export default async function ContactoPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("info_general")
    .select("*")
    .eq("id", 1)
    .single<InfoGeneral>();

  return (
    <>
      <div className="has-hero relative h-screen w-full overflow-hidden">
        <img
          src="/images/contacto-hero-glaciar.jpg"
          alt="Glaciar frente a un campo de témpanos, Laguna San Rafael"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      </div>
      <div className="bg-fjord-900">
        <ContactoDetalles locale="es" data={data} />
      </div>
    </>
  );
}
