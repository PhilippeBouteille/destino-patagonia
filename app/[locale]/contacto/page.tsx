import { createClient } from "@/lib/supabase/public";
import type { InfoGeneral } from "@/lib/types";
import ContactoDetalles from "@/components/ContactoDetalles";
import type { Locale } from "@/lib/i18n";

export const revalidate = 3600;

const HERO_ALT: Record<Locale, string> = {
  es: "Glaciar frente a un campo de témpanos, Laguna San Rafael",
  en: "Glacier facing a field of icebergs, Laguna San Rafael",
  fr: "Glacier face à un champ de glaçons, Laguna San Rafael",
};

export default async function LocaleContactoPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
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
          alt={HERO_ALT[locale]}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      </div>
      <div className="bg-fjord-900">
        <ContactoDetalles locale={locale} data={data} />
      </div>
    </>
  );
}
