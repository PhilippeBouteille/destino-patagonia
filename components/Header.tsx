"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { localePrefix, t, type Locale } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const NAV_ITEMS: {
  key:
    | "nav_aventuras"
    | "nav_logistica"
    | "nav_quienes_somos"
    | "nav_iniciativas"
    | "nav_contacto";
  path: string;
}[] = [
  { key: "nav_aventuras", path: "/programas" },
  { key: "nav_logistica", path: "/logistica" },
  { key: "nav_quienes_somos", path: "/quienes-somos" },
  { key: "nav_iniciativas", path: "/iniciativas" },
  { key: "nav_contacto", path: "/contacto" },
];

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefix = localePrefix(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 text-fjord-900 shadow-md transition-colors duration-300 ${
        // Le menu mobile ouvert reste toujours plein, même sur une page avec photo
        open ? "header-scrolled" : scrolled ? "header-scrolled" : "header-top"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href={prefix || "/"} className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/images/logo_web.png"
            alt="Destino Patagonia"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Navigation desktop */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          <ul className="flex gap-6 text-sm font-body uppercase tracking-wide">
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
          <LanguageSwitcher
            locale={locale}
            className="header-lang-divider border-l pl-6"
          />
        </nav>

        {/* Bouton hamburger mobile */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-current transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

    </header>

    {/* Panneau de navigation mobile */}
      {open ? (
        <nav
          aria-label="Mobile navigation"
          className="header-mobile-panel fixed inset-x-0 top-[120px] bottom-0 z-40 overflow-y-auto border-t border-fjord-900/10 bg-ice-50 px-6 py-4 text-fjord-900 md:hidden"
        >
          <ul className="flex flex-col gap-4 text-base font-body uppercase tracking-wide">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={`${prefix}${item.path}` || "/"}
                  onClick={() => setOpen(false)}
                  className="block py-1 transition-colors hover:text-glacier-400"
                >
                  {t(locale, item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-white/10 pt-4">
            <LanguageSwitcher locale={locale} />
          </div>
        </nav>
      ) : null}
    </>
  );
}
