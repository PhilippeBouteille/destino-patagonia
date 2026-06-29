import { createClient } from "@/lib/supabase/public";
import type { InfoGeneral } from "@/lib/types";

export default async function Footer() {
  const supabase = createClient();
  const { data } = await supabase
    .from("info_general")
    .select("*")
    .eq("id", 1)
    .single<InfoGeneral>();

  return (
    <footer className="bg-fjord-900 text-ice-100">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm font-body">
        <p className="font-display text-lg">Destino Patagonia</p>
        {data?.anios_experiencia ? (
          <p className="mt-1 text-glacier-200">
            {data.anios_experiencia} años navegando la Patagonia Aysén
          </p>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs">
          {data?.telefono ? <span>{data.telefono}</span> : null}
          {data?.email ? <span>{data.email}</span> : null}
          {data?.direccion ? <span>{data.direccion}</span> : null}
        </div>
        <div className="mt-4 flex gap-4">
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
    </footer>
  );
}
