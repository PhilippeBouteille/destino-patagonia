import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/aventuras", label: "Aventuras" },
  { href: "/logistica", label: "Logística" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="bg-fjord-900 text-ice-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center">
          <img
            src="https://destinopatagonia.cl/wp-content/uploads/2019/11/logo_web.png"
            alt="Destino Patagonia"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <nav aria-label="Navegación principal">
          <ul className="flex gap-6 text-sm font-body">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-glacier-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
