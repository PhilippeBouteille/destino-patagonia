"use client";

import { useEffect, useState } from "react";
import { t, type Locale } from "@/lib/i18n";

const CONSENT_KEY = "cookie_consent_v1";
const EMAIL = "contacto@destinopatagonia.cl";

export default function CookieConsent({ locale }: { locale: Locale }) {
  const [consented, setConsented] = useState(true); // true par défaut pour éviter un flash avant lecture du localStorage
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    setConsented(Boolean(localStorage.getItem(CONSENT_KEY)));
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "1");
    setConsented(true);
  }

  function learnMore() {
    localStorage.setItem(CONSENT_KEY, "1");
    setConsented(true);
    setShowPolicy(true);
  }

  const sections: { title: string; text: string; withEmail?: boolean }[] = [
    { title: t(locale, "privacy_s1_title"), text: t(locale, "privacy_s1_text") },
    { title: t(locale, "privacy_s2_title"), text: t(locale, "privacy_s2_text") },
    { title: t(locale, "privacy_s3_title"), text: t(locale, "privacy_s3_text") },
    { title: t(locale, "privacy_s4_title"), text: t(locale, "privacy_s4_text"), withEmail: true },
    { title: t(locale, "privacy_s5_title"), text: t(locale, "privacy_s5_text") },
  ];

  return (
    <>
      {!consented ? (
        <div
          role="dialog"
          aria-label="Cookies"
          className="fixed inset-x-0 bottom-0 z-50 flex flex-wrap items-center gap-4 bg-fjord-900 px-6 py-4 text-ice-50 shadow-lg"
        >
          <p className="m-0 flex-1 text-sm leading-relaxed">
            {t(locale, "cookie_banner_text")}
          </p>
          <div className="flex flex-shrink-0 gap-3">
            <button
              onClick={learnMore}
              className="rounded-sm border border-glacier-400 px-4 py-2 text-sm text-glacier-400 hover:bg-fjord-700"
            >
              {t(locale, "cookie_learn_more")}
            </button>
            <button
              onClick={accept}
              className="rounded-sm bg-glacier-400 px-5 py-2 text-sm font-medium text-fjord-900 hover:bg-glacier-200"
            >
              {t(locale, "cookie_accept")}
            </button>
          </div>
        </div>
      ) : null}

      {showPolicy ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
          <div className="mx-auto max-w-2xl px-6 py-12">
            <button
              onClick={() => setShowPolicy(false)}
              className="mb-8 font-medium text-glacier-400 hover:underline"
            >
              {t(locale, "cookie_back")}
            </button>

            <div className="mb-2 flex items-center gap-3">
              <div className="h-9 w-1 rounded-sm bg-glacier-400" />
              <h1 className="font-display text-2xl text-fjord-900">
                {t(locale, "privacy_title")}
              </h1>
            </div>
            <p className="mb-9 text-xs text-slate-500">
              {t(locale, "privacy_subtitle")} · Destino Patagonia
            </p>

            {sections.map((section) => (
              <div key={section.title} className="mb-7">
                <h2 className="mb-2 font-display text-lg text-fjord-900">
                  {section.title}
                </h2>
                <p className="whitespace-pre-line leading-relaxed text-slate-600">
                  {section.text}
                </p>
                {section.withEmail ? (
                  <p className="mt-2">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-medium text-glacier-400"
                    >
                      {EMAIL}
                    </a>
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
