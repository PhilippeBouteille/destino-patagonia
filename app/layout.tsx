import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Locale } from "@/lib/i18n";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Destino Patagonia — Navegación a Laguna San Rafael",
  description:
    "Excursiones de navegación y kayak desde Puerto Río Tranquilo hacia el Parque Nacional Laguna San Rafael.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = (headers().get("x-locale") as Locale) ?? "es";
  const pathname = headers().get("x-pathname") ?? "/";

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} font-body`}>
        <Header locale={locale} pathname={pathname} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
