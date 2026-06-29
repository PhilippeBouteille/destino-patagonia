import Link from "next/link";
import { LOCALES, localePrefix, t, type Locale } from "@/lib/i18n";

const NAV_ITEMS: { key: "nav_inicio" | "nav_aventuras" | "nav_logistica" | "nav_quienes_somos" | "nav_contacto"; path: string }[] = [
  { key: "nav_inicio", path: "" },
  { key: "nav_aventuras", path: "/aventuras" },
  { key: "nav_logistica", path: "/logistica" },
  { key: "nav_quienes_somos", path: "/quienes-somos" },
  { key: "nav_contacto", path: "/contacto" },
];

const LOCALE_LABEL: Record<Locale, string> = { es: "ES", en: "EN", fr: "FR" };

function withoutLocalePrefix(pathname: string): string {
  if (pathname.startsWith("/en")) return pathname.slice(3) || "/";
  if (pathname.startsWith("/fr")) return pathname.slice(3) || "/";
  return pathname;
}

export default function Header({
  locale,
  pathname,
}: {
  locale: Locale;
  pathname: string;
}) {
  const basePath = withoutLocalePrefix(pathname);
  const prefix = localePrefix(locale);

  return (
    <header className="bg-fjord-900 text-ice-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href={prefix || "/"} className="flex items-center">
          <img
            src="https://destinopatagonia.cl/wp-content/uploads/2019/11/logo_web.png"
            alt="Destino Patagonia"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-body">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={`${prefix}${item.path}` || "/"}
                  className="transition-colors hover:text-glacier-400"
                >
                  {t(locale, item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-2 border-l border-white/20 pl-6 font-mono text-xs">
            <li>
              <Link
                href={basePath}
                className={locale === "es" ? "text-glacier-400" : "hover:text-glacier-400"}
              >
                ES
              </Link>
            </li>
            {LOCALES.map((l) => (
              <li key={l}>
                <Link
                  href={`/${l}${basePath === "/" ? "" : basePath}`}
                  className={locale === l ? "text-glacier-400" : "hover:text-glacier-400"}
                >
                  {LOCALE_LABEL[l]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
