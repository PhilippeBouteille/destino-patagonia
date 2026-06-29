import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (params.locale !== "en" && params.locale !== "fr") notFound();
  const locale = params.locale as Locale;

  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
