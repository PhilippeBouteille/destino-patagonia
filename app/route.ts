import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

// Empêche Next.js de mettre cette route en cache statique.
export const dynamic = "force-dynamic";

// Location ID TripAdvisor de Destino Patagonia, tiré de l'URL fournie par
// Philippe (…-d7166123-…) — pas un secret, pas besoin d'env var.
const TRIPADVISOR_LOCATION_ID = "7166123";

type Resena = {
  fuente: "google" | "tripadvisor";
  rating: number | null;
  cantidad: number | null;
  url: string | null;
};

async function fetchGoogle(): Promise<Resena | null> {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!placeId || !apiKey) return null;

  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    console.error("Google Places API error", res.status, await res.text());
    return null;
  }
  const data = await res.json();
  return {
    fuente: "google",
    rating: typeof data.rating === "number" ? data.rating : null,
    cantidad: typeof data.userRatingCount === "number" ? data.userRatingCount : null,
    url: data.googleMapsUri ?? null,
  };
}

async function fetchTripadvisor(): Promise<Resena | null> {
  const apiKey = process.env.TRIPADVISOR_API_KEY;
  if (!apiKey) return null;

  const res = await fetch(
    `https://api.content.tripadvisor.com/api/v1/location/${TRIPADVISOR_LOCATION_ID}/details?key=${apiKey}&language=es`,
    { headers: { accept: "application/json" }, cache: "no-store" }
  );
  if (!res.ok) {
    console.error("TripAdvisor Content API error", res.status, await res.text());
    return null;
  }
  const data = await res.json();
  return {
    fuente: "tripadvisor",
    rating: data.rating ? Number(data.rating) : null,
    cantidad: data.num_reviews ? Number(data.num_reviews) : null,
    url: data.web_url ?? null,
  };
}

export async function GET(request: Request) {
  // Sécurise l'endpoint : seul Vercel Cron (avec CRON_SECRET) peut déclencher
  // cette route. Voir Vercel → Project Settings → Environment Variables.
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("No autorizado", { status: 401 });
  }

  const supabase = createAdminClient();
  const resultados = await Promise.all([fetchGoogle(), fetchTripadvisor()]);

  const actualizados: string[] = [];
  for (const r of resultados) {
    if (!r) continue;
    const { error } = await supabase
      .from("resenas_externas")
      .upsert({ ...r, updated_at: new Date().toISOString() }, { onConflict: "fuente" });
    if (!error) actualizados.push(r.fuente);
  }

  return NextResponse.json({ ok: true, actualizados });
}
