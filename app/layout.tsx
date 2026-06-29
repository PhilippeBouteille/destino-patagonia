import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-body`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
