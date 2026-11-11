# Portfolio — Anaïs DAMIAO

Portfolio personnel : Marketing Digital, IA & no-code, Paris. L'IA et le no-code au service de vos projets.

- Site en ligne : https://anais-damiao.vercel.app/
- Dépôt : https://github.com/damiaoanais/Portfolio-test

## Pages

| Page | Contenu |
| --- | --- |
| `index.html` | Accueil, avec les sections ancrées du menu : Projets, Compétences, Parcours, Contact |
| `projets.html` | Liste de l'ensemble des projets |
| `competences.html` | Détail des compétences (savoir-faire par catégorie) et citation « À noter » |
| `outils.html` | Outils maîtrisés, regroupés par type |

Le Blog est prévu comme section de la page d'accueil (ancre `#blog`) : masqué dans `index.html` (en commentaire) en attendant les premiers articles.

## Technique

- Site statique : HTML, CSS et JavaScript, sans build ni framework.
- Design : fond noir, un seul accent rose `#E4748C`, titres en Bricolage Grotesque, texte en Inter (voir `design.md`).
- Sections « panneau » ajustées à la hauteur de l'écran, portrait fixe sur ordinateur jusqu'à la section Blog.
- Aperçu de lien (Open Graph) : `og-image.png` (1200 × 630).
- Contenu de référence : `content.yaml`. Cahier des charges : `PRD.md`.

## Version mobile et PWA

- Mobile (< 768 px) : barre d'onglets fixe en bas (Accueil, Projets, Compétences, Parcours, Contact), portrait recadré dans le premier écran.
- PWA : `manifest.webmanifest`, `sw.js` (hors ligne, réseau d'abord, cache versionné), icônes dans `icons/` (monogramme « AD » rose sur noir).
- Installation : ouvrir le site sur mobile, puis « Ajouter à l'écran d'accueil ».
- Arrivée toujours sur l'accueil, même après un rechargement.

## Logos des outils

Le bandeau d'outils charge les logos officiels déposés dans `logos/` (voir `logos/LISEZ-MOI.txt`). Sans fichier, le nom de l'outil s'affiche seul.

## Mise en ligne et versions

- Hébergement : Vercel, déploiement automatique à chaque envoi sur la branche `main` de GitHub.
- Chaque modification validée est versionnée par un commit sur GitHub.
- Après une évolution du site, incrémenter le nom du cache dans `sw.js` (`portfolio-vN`) pour que les visiteurs récupèrent la dernière version.
