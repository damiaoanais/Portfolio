# PRD — Portfolio d'Anaïs DAMIAO

Version 1.0 · 6 novembre 2026 · Statut : en ligne, en cours d'amélioration

Site : https://portfolio-exercice-test.netlify.app/ · Dépôt : https://github.com/damiaoanais/Portfolio-test

Documents liés : [`design.md`](design.md) (design system) · [`content.yaml`](content.yaml) (contenus) · [`README.md`](README.md)

## 1. Contexte

Exercice de la formation Jedha « Product Builder – parcours Essentiel » : créer une landing page personnelle pour présenter un profil professionnel, la publier (GitHub puis Netlify) et la partager sur Discord (URL publique, une phrase de proposition de valeur, un aspect du parcours ou de la personnalité).

Le site est construit pas à pas avec Claude, relu et validé par Anaïs à chaque étape.

## 2. Objectif

Présenter Anaïs DAMIAO comme **Product Builder IA & no-code** : une personne qui part d'un besoin, cadre, construit une première version avec l'IA et le no-code, puis la teste.

Critères d'évaluation de l'exercice :
- **Authenticité** : aucune expérience, compétence, client ou chiffre inventé. Statuts de projets honnêtes.
- **Clarté** : un visiteur comprend en quelques secondes qui est Anaïs, ce qu'elle fait et comment la contacter.

## 3. Public cible

- Recruteurs et équipes produit, tech ou digital.
- Pairs de la formation (partage sur Discord).
- Clients potentiels (freelance).

## 4. Proposition de valeur

> « Je transforme des idées en produits digitaux avec l'IA et le no-code. »

Accroche affichée sur le site : « **Embarquement immédiat** pour vos idées : je les mène jusqu'au produit digital. » (thème hôtesse de l'air, en lien avec la photo).

## 5. Ton et identité

Énergique, affirmé, élégant, classe. Dynamique, souriante, aime cadrer. Fond noir, accent rose repris du tailleur de la photo. Détails dans `design.md`.

## 6. Périmètre

### Inclus (v1)
| Page / section | Contenu |
|---|---|
| Accueil, hero | Titre, accroche, boutons « Découvrir mes projets » et « Me contacter », disponibilité, photo détourée |
| Mon approche | 4 étapes (Comprendre, Concevoir, Construire, Améliorer) avec trajet d'avion animé |
| Projets | 2 billets maximum, flèche vers `projets.html` |
| `projets.html` | Liste de tous les projets |
| IA & product building | Phrase « Assisté par l'IA. Validé par un humain. » |
| Compétences | 3 cartes, outils explorés |
| Parcours | Jedha (en cours), Atlantic France 2024–2026, Valtech 2018–2024, Naturalia France 2016–2018 |
| Contact | Email, GitHub |

### Exclu pour l'instant
Blog, pages détaillées par projet, agent IA, RAG, connecteurs, formulaire de contact, CV téléchargeable, LinkedIn (URL à fournir).

## 7. Exigences fonctionnelles

| ID | Exigence |
|---|---|
| F1 | Le menu (Projets, Compétences, Parcours, Contact) mène aux sections ; la section en cours est en rose. |
| F2 | La photo détourée reste collée en bas à droite sur ordinateur (≥ 1100 px) et descend avec le scroll ; en dessous de 1100 px elle s'affiche dans le hero. |
| F3 | Le trajet d'avion de « Mon approche » avance avec le scroll et allume les escales et cartes atteintes. |
| F4 | Chaque projet est un billet (description à gauche, « Projet N » et titre dans le talon à droite). |
| F5 | L'accueil affiche au plus 2 projets. Une flèche sous les billets mène à `projets.html`. |
| F6 | Les contenus sont en français, le contact par mail est direct (`mailto:`). |

## 8. Exigences non fonctionnelles

- **Responsive** : ordinateur et mobile, pas de défilement horizontal (vérifié de 390 à 1600 px).
- **Accessibilité** : contraste du texte suffisant, `aria-label` sur la flèche, navigation clavier, animations désactivées si l'appareil demande moins de mouvement (`prefers-reduced-motion`).
- **Performance** : un seul fichier HTML par page (CSS et JS inclus), photo en WebP.
- **Technique** : site statique, sans build. GitHub (branche `main`) puis Netlify, redéploiement automatique à chaque push.

## 9. Règles d'authenticité

- Aucun chiffre, client ou résultat inventé.
- Chaque projet affiche ce qu'il est vraiment.
- SpotMate est confidentiel : volontairement absent du site.
- **Le second billet (« App de soins esthétiques ») est un concept réel**, présenté comme tel (statut Concept, rien de construit). À compléter dès qu'une première version existe, avant tout partage du lien.

## 10. Suivi des versions (principales étapes)

1. Landing de base (cartes, statuts), publiée sur Netlify.
2. Passage en mode sombre, accent vert fluo, mouvement (apparition au scroll, survols).
3. Photo détourée collée en bas à droite.
4. Accent rose du tailleur, accroche hôtesse de l'air, textes plus professionnels.
5. Trajet d'avion animé, menu actif, projets en billets, page Projets, flèche.
6. Documentation (`design.md`, `content.yaml`, `PRD.md`).

## 11. Points ouverts

- [x] Second projet réel ajouté (concept App de soins esthétiques).
- [ ] URL LinkedIn et CV.
- [ ] Statuts et détails réels des projets (preuves : lien, capture, repo).
- [ ] Texte personnel « parcours » et niveaux de compétences à valider.
- [ ] Renommer le projet Netlify (par exemple `anais-damiao`) ou ajouter un nom de domaine.
- [ ] Message Discord : URL, phrase de valeur, un aspect du parcours ou de la personnalité.
- [ ] Idées pour la suite : pages projets, blog, agent IA / RAG / connecteurs.

## 12. Critères de réussite

- Le site est public et s'affiche correctement sur ordinateur et mobile.
- Rien d'inventé sur le site.
- Un visiteur comprend la proposition de valeur et sait comment contacter Anaïs.
- Le message Discord est publié avec l'URL, la phrase de valeur et un aspect du parcours.
