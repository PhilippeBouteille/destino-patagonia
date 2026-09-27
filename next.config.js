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
