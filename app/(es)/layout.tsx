import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header locale="es" />
      <main>{children}</main>
      <Footer locale="es" />
    </>
  );
}
