import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header locale="es" />
      <main>{children}</main>
      <Footer locale="es" />
      <CookieConsent locale="es" />
    </>
  );
}
