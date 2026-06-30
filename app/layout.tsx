import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
  icons: {
    icon: "/images/logo_web.png",
    shortcut: "/images/logo_web.png",
    apple: "/images/logo_web.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${poppins.variable} font-body`}>{children}</body>
    </html>
  );
}
