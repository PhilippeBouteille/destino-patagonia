import Link from "next/link";
import GaleriaFotos from "@/components/GaleriaFotos";
import VideoYoutube from "@/components/VideoYoutube";
import { localePrefix, type Locale } from "@/lib/i18n";
import {
  SEI_CONTENT,
  SEI_HERO,
  SEI_PHOTOS,
  SEI_POSTER,
  SEI_REFERENCE_URL,
  SEI_VIDEO_ID,
} from "@/lib/iniciativaSei";

/**
 * Sous-page « Proyecto SEI Viajera de los Mares » — rendue à l'identique
 * pour les trois langues (la route ES et la route [locale] l'appellent).
 */
export default function IniciativaSei({ locale }: { locale: Locale }) {
  const t = SEI_CONTENT[locale];
  const base = localePrefix(locale);

  const photos = SEI_PHOTOS.map((p, i) => ({
    src: `/images/sei/${p.file}`,
    w: p.w,
    h: p.h,
    alt: t.alts[i] ?? "",
  }));

  return (
    <>
      <div className="has-hero relative h-screen w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={SEI_HERO}
          alt={t.heroAlt}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
      </div>

      <div className="bg-fjord-900">
        <article className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href={`${base}/iniciativas`}
            className="font-mono text-xs uppercase tracking-wide text-glacier-200 hover:text-white"
          >
            ← {t.back}
          </Link>

          <h1 className="mt-6 font-display text-3xl text-ice-50 md:text-4xl">
            {t.titulo}
          </h1>
          <p className="mt-2 font-display text-lg text-glacier-200">
            {t.subtitulo}
          </p>

          <div className="mt-10 max-w-3xl space-y-5 text-ice-100">
            {t.parrafos.map((texto, i) => (
              <p key={i}>
                {texto}
                {i === t.refParrafo ? (
                  <sup className="ml-0.5">
                    <a
                      href="#referencia"
                      className="text-glacier-200 hover:text-white"
                    >
                      1
                    </a>
                  </sup>
                ) : null}
              </p>
            ))}
          </div>

          <section className="mt-16" aria-labelledby="sei-video">
            <h2 id="sei-video" className="font-display text-2xl text-ice-50">
              {t.videoTitulo}
            </h2>
            <div className="mt-6 max-w-4xl">
              <VideoYoutube
                videoId={SEI_VIDEO_ID}
                title={t.videoNombre}
                poster={SEI_POSTER}
                playLabel={t.videoPlay}
                youtubeLabel={t.videoYoutube}
              />
            </div>
          </section>

          <section className="mt-16" aria-labelledby="sei-galeria">
            <h2 id="sei-galeria" className="font-display text-2xl text-ice-50">
              {t.galeriaTitulo}
            </h2>
            <div className="mt-6">
              <GaleriaFotos photos={photos} labels={t.lightbox} />
            </div>
          </section>

          <section
            id="referencia"
            className="mt-16 max-w-3xl border-t border-ice-50/15 pt-6 text-sm text-ice-100"
          >
            <h2 className="font-mono text-xs uppercase tracking-wide text-glacier-200">
              {t.referenciaTitulo}
            </h2>
            <p className="mt-2">
              <sup>1</sup> {t.referenciaTexto}{" "}
              <a
                href={SEI_REFERENCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-glacier-200 underline-offset-4 hover:underline"
              >
                {t.referenciaTitle}
              </a>{" "}
              <em>{t.referenciaRevista}</em>
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
