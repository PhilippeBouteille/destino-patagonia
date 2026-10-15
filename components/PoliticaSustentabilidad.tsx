import Link from "next/link";
import { localePrefix, type Locale } from "@/lib/i18n";
import { CODIGO_PDF, POLITICA_CONTENT } from "@/lib/politicaSustentabilidad";

const h2 = "font-display text-2xl text-ice-50";

function Lista({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-ice-100">
          <span
            aria-hidden
            className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-glacier-400"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Sous-page « Política de Sustentabilidad » — rendue pour les trois
 * langues (route ES et route [locale]). Page texte sur fond sombre, sans
 * photo : le header reste donc en haut de page avec son fond plein.
 */
export default function PoliticaSustentabilidad({ locale }: { locale: Locale }) {
  const t = POLITICA_CONTENT[locale];
  const base = localePrefix(locale);

  return (
    <div className="bg-fjord-900">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href={`${base}/iniciativas`}
          className="font-mono text-xs uppercase tracking-wide text-glacier-200 hover:text-white"
        >
          ← {t.back}
        </Link>

        <h1 className="mt-6 font-display text-3xl text-ice-50 md:text-4xl">
          {t.titulo}
        </h1>
        <p className="mt-2 font-display text-lg text-glacier-200">{t.empresa}</p>
        {t.nota ? (
          <p className="mt-4 text-sm italic text-ice-100/70">{t.nota}</p>
        ) : null}

        <section className="mt-12">
          <h2 className={h2}>{t.compromisoTitulo}</h2>
          <p className="mt-4 text-ice-100">{t.compromiso}</p>
        </section>

        <section className="mt-12">
          <p className="text-ice-100">{t.principiosIntro}</p>
          <Lista items={t.principios} />
        </section>

        <section className="mt-10">
          <p className="text-ice-100">{t.compromisosIntro}</p>
          <Lista items={t.compromisos} />
        </section>

        <section className="mt-12">
          <h2 className={h2}>{t.comunicacionTitulo}</h2>
          <p className="mt-4 text-ice-100">{t.comunicacion}</p>
        </section>

        <section className="mt-12">
          <h2 className={h2}>{t.mejoraTitulo}</h2>
          <p className="mt-4 text-ice-100">{t.mejora}</p>
        </section>

        <section className="mt-12">
          <h2 className={h2}>{t.alcanceTitulo}</h2>
          <div className="mt-4 space-y-4 text-ice-100">
            {t.alcance.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <p className="mt-10 text-ice-100">
          <span className="font-display text-lg text-ice-50">
            {t.firmaNombre}
          </span>
          <br />
          <span className="text-sm">{t.firmaCargo}</span>
        </p>

        <section className="mt-16 border-t border-ice-50/15 pt-12">
          <h2 className={h2}>{t.codigoTitulo}</h2>
          <p className="mt-4 text-ice-100">{t.codigoIntro}</p>
          <Lista items={t.codigoItems} />
          <a
            href={CODIGO_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-sm border border-glacier-400 px-5 py-2 font-medium text-glacier-200 transition-colors hover:bg-glacier-400 hover:text-fjord-900"
          >
            {t.codigoDescargar} ↓
          </a>
        </section>
      </article>
    </div>
  );
}
