import type { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/public";
import { LOCALES, localePrefix, type Locale } from "@/lib/i18n";

const BASE_URL = "https://destinopatagonia.cl";
const ALL_LOCALES: Locale[] = ["es", ...LOCALES];

async function getTourSlugs(): Promise<string[]> {
  const supabase = createClient();
  const { data } = await supabase
    .from("tours")
    .select("slug")
    .eq("publicado", true);
  return ((data ?? []) as { slug: string }[]).map((tour) => tour.slug);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getTourSlugs();

  const staticPaths = ["", "/aventuras", "/logistica", "/quienes-somos", "/contacto"];
  const tourPaths = slugs.map((slug) => `/tour/${slug}`);
  const paths = [...staticPaths, ...tourPaths];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of ALL_LOCALES) {
    const prefix = localePrefix(locale);
    for (const path of paths) {
      entries.push({
        url: `${BASE_URL}${prefix}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path.startsWith("/tour/") ? 0.8 : 0.6,
      });
    }
  }

  return entries;
}
