import Image from "next/image";
import { createClient } from "@/lib/supabase/public";
import type { InfoGeneral } from "@/lib/types";
import type { Locale } from "@/lib/i18n";

const ANIOS_TEXT: Record<Locale, (n: number) => string> = {
  es: (n) => `${n} años navegando la Patagonia Aysén`,
  en: (n) => `${n} years sailing Patagonia Aysén`,
  fr: (n) => `${n} ans de navigation en Patagonie Aysén`,
};

export default async function Footer({ locale }: { locale: Locale }) {
  const supabase = createClient();
  const { data } = await supabase
    .from("info_general")
    .select("*")
    .eq("id", 1)
    .single<InfoGeneral>();

  return (
    <footer className="bg-fjord-900 text-ice-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">

          {/* Logo Destino Patagonia */}
          <div className="shrink-0">
            <Image
              src="/images/logo_web.png"
              alt="Destino Patagonia"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>

          {/* Infos de contact */}
          <div className="flex-1 text-sm font-body">
            {data?.anios_experiencia ? (
              <p className="text-glacier-200">
                {ANIOS_TEXT[locale](data.anios_experiencia)}
              </p>
            ) : null}
            <div className="mt-3 flex flex-wrap gap-x-8 gap-y-1 font-mono text-xs">
              {data?.telefono ? <span>{data.telefono}</span> : null}
              {data?.email ? <span>{data.email}</span> : null}
              {data?.direccion ? <span>{data.direccion}</span> : null}
            </div>
            <div className="mt-3 flex gap-4 text-sm">
              {data?.redes_sociales?.instagram ? (
                <a
                  href={data.redes_sociales.instagram}
                  className="hover:text-glacier-400"
                >
                  Instagram
                </a>
              ) : null}
              {data?.redes_sociales?.facebook ? (
                <a
                  href={data.redes_sociales.facebook}
                  className="hover:text-glacier-400"
                >
                  Facebook
                </a>
              ) : null}
            </div>
          </div>

          {/* Logo Ruta de los Parques */}
          <div className="shrink-0">
            <a
              href="https://rutadelosparques.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/images/LOGO-ruta-de-los-parques-patagonia-180x161-1.png"
                alt="Ruta de los Parques de la Patagonia"
                width={90}
                height={81}
                className="object-contain"
              />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
