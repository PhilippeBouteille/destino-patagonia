/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "destinopatagonia.cl" },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    // Vidéo du hero : cache 7 jours (le nom de fichier ne change pas quand on
    // remplace la vidéo, donc pas d'"immutable" ni d'un an).
    return [
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    // /aventuras renommé en /programas (sept. 2026) — redirection permanente
    // pour les liens déjà indexés/partagés vers l'ancienne URL.
    return [
      { source: "/aventuras", destination: "/programas", permanent: true },
      { source: "/en/aventuras", destination: "/en/programas", permanent: true },
      { source: "/fr/aventuras", destination: "/fr/programas", permanent: true },
    ];
  },
};

module.exports = nextConfig;
