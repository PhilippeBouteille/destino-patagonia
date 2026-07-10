import Image from "next/image";
import { createClient } from "@/lib/supabase/public";
import type { InfoGeneral } from "@/lib/types";
import type { Locale } from "@/lib/i18n";

const COPYRIGHT_PREFIX: Record<Locale, string> = {
  es: "© 2012–2026 Destino Patagonia",
  en: "© 2012–2026 Destino Patagonia",
  fr: "© 2012–2026 Destino Patagonia",
};

const TRIPADVISOR_URL =
  "https://www.tripadvisor.fr/Attraction_Review-g1409472-d7166123-Reviews-Destino_Patagonia-Puerto_Rio_Tranquilo_Aisen_Region.html";
const GOOGLE_REVIEW_URL = "https://share.google/BTk2i5R3C38HlUbGL";

function whatsappLink(telefono: string) {
  const digits = telefono.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

export default async function Footer({ locale }: { locale: Locale }) {
  const supabase = createClient();
  const { data } = await supabase
    .from("info_general")
    .select("*")
    .eq("id", 1)
    .single<InfoGeneral>();

  const { data: resenas } = await supabase
    .from("resenas_externas")
    .select("fuente, rating, cantidad");

  const resenaGoogle = resenas?.find((r) => r.fuente === "google");
  const resenaTripadvisor = resenas?.find((r) => r.fuente === "tripadvisor");

  return (
    <footer className="bg-fjord-900 text-ice-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          {/* Logo Destino Patagonia */}
          <div className="shrink-0">
            <Image
              src="/images/logo_web.png"
              alt="Destino Patagonia"
              width={120}
              height={120}
              className="mx-auto object-contain sm:mx-0"
            />
          </div>

          {/* Infos de contacto */}
          <div className="flex-1 font-body text-sm">
            <p className="text-glacier-200">
              Puerto Río Tranquilo - Región de Aysén
            </p>

            <div className="mt-4 flex flex-col items-center gap-2 font-mono text-xs sm:items-start">
              {data?.telefono ? (
                <a
                  href={whatsappLink(data.telefono)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-glacier-400"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4C7.1 4 3.08 8 3.08 12.94c0 1.74.5 3.4 1.4 4.84L3 21l3.32-1.42a8.94 8.94 0 0 0 5.73 2.03c4.94 0 8.96-4 8.96-8.94a8.86 8.86 0 0 0-3.41-6.35zM12.06 19.6c-1.7 0-3.32-.5-4.7-1.42l-.33-.2-2.6 1.12.7-2.6-.22-.34a7.5 7.5 0 0 1-1.16-4c0-4.13 3.36-7.5 7.51-7.5 2 0 3.88.79 5.3 2.2a7.43 7.43 0 0 1 2.2 5.3c0 4.13-3.37 7.44-7.7 7.44zm4.1-5.6c-.22-.11-1.32-.65-1.53-.73-.2-.08-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.16-.48.05-.22-.1-.93-.34-1.77-1.1-.65-.58-1.1-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.11.22-.28.34-.42.11-.14.15-.24.22-.4.07-.16.04-.3-.02-.42-.07-.11-.6-1.46-.83-2-.22-.52-.45-.45-.62-.46h-.53c-.18 0-.46.07-.7.34-.24.27-.93.91-.93 2.21 0 1.3.95 2.55 1.08 2.73.13.18 1.79 2.74 4.33 3.73 2.55 1 2.55.66 3.01.62.46-.04 1.5-.6 1.71-1.19.21-.58.21-1.08.15-1.19-.06-.1-.22-.16-.45-.27z"/>
                  </svg>
                  {data.telefono}
                </a>
              ) : null}
              {data?.email ? (
                <a
                  href={`mailto:${data.email}`}
                  className="inline-flex items-center gap-2 hover:text-glacier-400"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13zm2.2.3 7.3 5.84a.8.8 0 0 0 1 0l7.3-5.84A.5.5 0 0 0 19.5 5h-15a.5.5 0 0 0-.3.8z"/>
                  </svg>
                  {data.email}
                </a>
              ) : null}
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 sm:justify-start">
              {data?.redes_sociales?.instagram ? (
                <a
                  href={data.redes_sociales.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-ice-100 hover:text-glacier-400"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.23.41.56.21.96.46 1.38.88.42.42.67.82.88 1.38.17.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.41 2.23-.21.56-.46.96-.88 1.38-.42.42-.82.67-1.38.88-.42.17-1.06.36-2.23.41-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.23-.41a3.7 3.7 0 0 1-1.38-.88 3.7 3.7 0 0 1-.88-1.38c-.17-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.8.41-2.23.21-.56.46-.96.88-1.38.42-.42.82-.67 1.38-.88.42-.17 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.87 5.87 0 0 0-2.13 1.39A5.87 5.87 0 0 0 .62 4.14C.32 4.9.12 5.78.06 7.05.01 8.33 0 8.74 0 12s.01 3.67.06 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.06c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.39 5.87 5.87 0 0 0 1.39-2.13c.3-.76.5-1.64.56-2.91.05-1.28.06-1.69.06-4.95s-.01-3.67-.06-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.39-2.13A5.87 5.87 0 0 0 19.86.62c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"/>
                  </svg>
                </a>
              ) : null}
              {data?.redes_sociales?.facebook ? (
                <a
                  href={data.redes_sociales.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-ice-100 hover:text-glacier-400"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.89h-2.34V22c4.78-.75 8.44-4.88 8.44-9.94z"/>
                  </svg>
                </a>
              ) : null}
            </div>

            {/* Reseñas — TripAdvisor / Google */}
            <div className="mt-4 flex items-center justify-center gap-2 sm:justify-start">
              <a
                href={TRIPADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 font-mono text-xs uppercase tracking-wide text-ice-100 hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M12 2 14.9 8.6 22 9.3l-5.3 4.8L18.2 21 12 17.3 5.8 21l1.5-6.9L2 9.3l7.1-.7z"/>
                </svg>
                TripAdvisor
                {resenaTripadvisor?.rating ? (
                  <span className="text-glacier-300">
                    · ★ {resenaTripadvisor.rating.toFixed(1)}
                    {resenaTripadvisor.cantidad ? ` (${resenaTripadvisor.cantidad})` : ""}
                  </span>
                ) : null}
              </a>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 font-mono text-xs uppercase tracking-wide text-ice-100 hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M12 2 14.9 8.6 22 9.3l-5.3 4.8L18.2 21 12 17.3 5.8 21l1.5-6.9L2 9.3l7.1-.7z"/>
                </svg>
                Google
                {resenaGoogle?.rating ? (
                  <span className="text-glacier-300">
                    · ★ {resenaGoogle.rating.toFixed(1)}
                    {resenaGoogle.cantidad ? ` (${resenaGoogle.cantidad})` : ""}
                  </span>
                ) : null}
              </a>
            </div>
          </div>

          {/* Logo Ruta de los Parques */}
          <div className="shrink-0">
            <a
              href="https://rutadelosparques.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto inline-block opacity-80 transition-opacity hover:opacity-100 sm:mx-0"
            >
              <Image
                src="/images/LOGO-ruta-de-los-parques-patagonia-180x161-1.png"
                alt="Ruta de los Parques de la Patagonia"
                width={120}
                height={108}
                className="object-contain"
              />
            </a>
          </div>

        </div>

        {/* Sous-footer */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="font-body text-xs text-ice-100/60">
            {COPYRIGHT_PREFIX[locale]}
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ice-100/40">
            Destino Patagonia · Laguna San Rafael · Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
