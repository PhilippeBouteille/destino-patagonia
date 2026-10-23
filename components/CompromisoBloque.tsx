import Link from "next/link";
import { localePrefix, type Locale } from "@/lib/i18n";
import {
  CODIGO_ETICO_URL,
  CODIGO_PDF,
  POLITICA_CONTENT,
  POLITICA_SLUG,
} from "@/lib/politicaSustentabilidad";

const linkClass =
  "font-medium text-glacier-200 underline-offset-4 hover:text-white hover:underline";

/** Liens affichés sous le texte du bloc « Nuestro compromiso con la región ». */
export default function CompromisoBloque({ locale }: { locale: Locale }) {
  const t = POLITICA_CONTENT[locale];
  return (
    <ul className="mt-4 space-y-2">
      <li>
        <Link
          href={`${localePrefix(locale)}/iniciativas/${POLITICA_SLUG}`}
          className={linkClass}
        >
          {t.linkPolitica} →
        </Link>
      </li>
      <li>
        <a
          href={CODIGO_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {t.linkCodigo} ↗
        </a>
      </li>
      <li>
        <a
          href={CODIGO_ETICO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {t.linkCodigoEtico} ↗
        </a>
      </li>
    </ul>
  );
}
