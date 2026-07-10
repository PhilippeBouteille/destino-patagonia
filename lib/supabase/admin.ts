import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Client Supabase avec la clé service_role — contourne les policies RLS.
 * ⚠ Ne JAMAIS importer ce fichier dans un composant client ou une page
 * publique. Réservé aux routes serveur privilégiées (ex: app/api/cron/*)
 * qui doivent écrire dans des tables en lecture publique / écriture
 * restreinte, sans session utilisateur authentifiée.
 *
 * SUPABASE_SERVICE_ROLE_KEY (sans préfixe NEXT_PUBLIC_) doit être configurée
 * dans Vercel → Project Settings → Environment Variables. Se trouve dans
 * Supabase → Project Settings → API → "service_role" (secret, ne jamais
 * exposer côté client).
 */
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}
