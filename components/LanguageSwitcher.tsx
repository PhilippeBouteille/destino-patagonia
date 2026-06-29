"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/i18n";

const LOCALE_LABEL: Record<Locale, string> = { es: "ES", en: "EN", fr: "FR" };

function withoutLocalePrefix(pathname: string): string {
  if (pathname.startsWith("/en")) return pathname.slice(3) || "/";
  if (pathname.startsWith("/fr")) return pathname.slice(3) || "/";
  return pathname;
}

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const basePath = withoutLocalePrefix(pathname);

  return (
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
  );
}
