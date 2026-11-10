# Portfolio — Anaïs DAMIAO

Landing page personnelle : Product Builder IA & no-code, Paris.

Site statique (un seul fichier `index.html`), prêt à être déployé sur Netlify.

## Version mobile et PWA

- Mobile (< 768 px) : barre d'onglets fixe en bas (Accueil, Projets, Compétences, Parcours, Contact), portrait recadré dans le premier écran.
- PWA : `manifest.webmanifest`, `sw.js` (hors ligne, réseau d'abord), icônes dans `icons/` (monogramme « AD » rose sur noir).
- Installation : ouvrir le site sur mobile, puis « Ajouter à l'écran d'accueil ».

## Statistiques (page admin)

- `track.js` (chargé sur les 4 pages) envoie chaque page vue à `api/collect.js`, une fonction Vercel. Mesure sans cookie : le visiteur est reconnu par une empreinte hachée renouvelée chaque jour, l'adresse IP n'est jamais conservée. Les robots et le site en local ne sont pas comptés.
- Les données sont stockées dans Upstash Redis (gratuit), 400 jours.
- `admin.html` (non indexée) affiche visites, pages vues, visiteurs uniques, clics sur « Me contacter » (menu et accueil), sur l’e-mail et GitHub, appareils, pages, sources, navigateurs, systèmes et pays. Les chiffres viennent de `api/stats.js`, protégé par mot de passe.
- Case « Ne pas compter mes visites sur ce navigateur » dans la page admin.

**Mise en route sur Vercel**
1. Projet Vercel → Storage → ajouter **Upstash for Redis** et le relier au projet (crée `KV_REST_API_URL` et `KV_REST_API_TOKEN`).
2. Settings → Environment Variables → ajouter `ADMIN_PASSWORD` (mot de passe de la page admin).
3. Redéployer, puis ouvrir `/admin.html`.
