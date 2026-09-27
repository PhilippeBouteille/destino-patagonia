import Image from "next/image";
import Link from "next/link";

/**
 * Carte photo plein format pour un tour (style blacktomato.com).
 * Utilisée sur l'accueil (grille "Nuestros programas") ET sur la page
 * Programas — un seul composant pour garantir que les deux pages restent
 * visuellement identiques (voir décision sept. 2026 : la page Programas
 * utilisait avant un design différent, en liste, ce qui créait une
 * incohérence avec l'accueil).
 */
export default function TourCard({
  href,
  name,
  photo,
}: {
  href: string;
  name: string;
  photo?: string | null;
}) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[2/5] w-full overflow-hidden rounded-sm bg-fjord-700">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-fjord-900/30 transition group-hover:bg-fjord-900/40" />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <h3 className="font-display text-lg uppercase tracking-wide text-ice-50 sm:text-xl">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
