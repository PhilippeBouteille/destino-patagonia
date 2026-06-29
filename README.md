# Destino Patagonia — site web

Next.js 14 (App Router) + Supabase + Tailwind. Pages publiques générées
statiquement avec revalidation horaire (ISR) ; section `/admin` protégée par
Supabase Auth pour modifier les tours, les infos générales et les pages de
contenu (Quiénes Somos, Logística) sans toucher au code.

## Mise en route locale

```bash
npm install
cp .env.local.example .env.local   # remplir avec les clés Supabase du projet
npm run dev
```

Les clés se trouvent dans le dashboard Supabase : Project Settings → API.

## Créer le compte admin

Dans Supabase → Authentication → Users → "Add user", créer un compte
email/mot de passe. C'est ce compte qui se connecte sur `/admin`.

## Déploiement (Vercel)

1. Pousser ce repo sur GitHub (sous le compte/organisation existant).
2. Importer le repo dans Vercel (même équipe que les autres projets).
3. Dans Vercel → Project Settings → Environment Variables, ajouter
   `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Déployer. Le build Next.js génère les pages statiquement à partir des
   données Supabase présentes au moment du build, puis les régénère seules
   automatiquement (ISR, 1h) ou immédiatement après une sauvegarde dans
   `/admin` (revalidation ciblée).

## Pages

- `/` — Inicio
- `/aventuras` — listing des tours publiés
- `/tour/[slug]` — fiche détaillée d'un tour
- `/logistica`, `/quienes-somos` — contenu éditable (table `paginas`)
- `/contacto` — coordonnées (table `info_general`)
- `/admin` — back-office (login requis)

## Pas encore fait (phase 2)

- Version anglaise (`/en/...`) — structure à dupliquer une fois le contenu
  espagnol validé par le client.
- Photos haute résolution — à remplacer dans `public/images` (placeholders
  Supabase Storage prévus dans `tours.fotos`, pas encore branchés au rendu).
- Module réservation/paiement en ligne — explicitement hors scope pour
  l'instant.
