import VideoYoutube from "@/components/VideoYoutube";
import type { Locale } from "@/lib/i18n";
import { SEI_CONTENT } from "@/lib/iniciativaSei";
import {
  ARTICULO_URL,
  PUBLICACIONES_TEXT,
  PUBLICACIONES_VIDEO_CREDIT,
  PUBLICACIONES_VIDEO_ID,
  PUBLICACIONES_VIDEO_POSTER,
} from "@/lib/iniciativaPublicaciones";

const headingClass =
  "font-mono text-xs uppercase tracking-wide text-glacier-200";

/** Contenu sous le paragraphe du bloc « Aporte en publicaciones ». */
export default function PublicacionesBloque({ locale }: { locale: Locale }) {
  const t = PUBLICACIONES_TEXT[locale];
  const sei = SEI_CONTENT[locale];

  return (
    <div className="mt-8 space-y-10">
      <div>
        <h3 className={headingClass}>{t.publicaciones}</h3>
        <ul className="mt-3 space-y-4">
          <li className="text-sm leading-relaxed text-ice-100">
            Sade, K., Westfall, C., Pérez-Barría, L. &amp;{" "}
            <span className="font-medium text-ice-50">Torres, D.</span> (2022).{" "}
            {t.articuloTitle} <em>{t.revista}</em>
            {t.revistaRef}{" "}
            <a
              href={ARTICULO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-glacier-200 underline-offset-4 hover:text-white hover:underline"
            >
              {t.verArticulo} ↗
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className={headingClass}>{t.video}</h3>
        <div className="mt-3 max-w-2xl">
          <VideoYoutube
            videoId={PUBLICACIONES_VIDEO_ID}
            title={t.videoNombre}
            credit={PUBLICACIONES_VIDEO_CREDIT}
            poster={PUBLICACIONES_VIDEO_POSTER}
            playLabel={sei.videoPlay}
            youtubeLabel={sei.videoYoutube}
          />
        </div>
      </div>
    </div>
  );
}
