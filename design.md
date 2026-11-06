# Design — Portfolio d'Anaïs DAMIAO

Version finale, 6 novembre 2026. Ce document décrit le site tel qu'il est en ligne.

## Vue d'ensemble

Un portfolio **énergique, affirmé, élégant** : fond noir pur, texte blanc cassé, un seul accent **rose** repris du tailleur de la photo. Univers visuel : l'hôtesse de l'air (embarquement, plan de vol, billet d'avion). La photo détourée d'Anaïs reste collée en bas à droite sur ordinateur et descend avec le scroll.

**Principes**
- Fond noir `#000`, jamais de dégradé.
- Un seul accent, le rose `#E4748C` : titres ou bouts de titres importants, étiquettes, boutons, liens actifs, avion. Tout le reste est blanc cassé ou gris.
- Titres gras et grands (esprit affiche). Texte courant sobre, pas d'italique.
- Profondeur par filets fins (1 px), pas d'ombres portées.
- Du mouvement discret : apparition au scroll, survols, avion qui suit le scroll. Tout est désactivé si l'appareil demande moins d'animations.

## Couleurs

### Marque
- **Rose** `primary` — #E4748C (repris du tailleur de la photo)
- **Rose pressé** `primary-active` — #C95C75 (état au clic)
- **Sur rose** `on-primary` — #000000

### Surfaces
- **Noir** `canvas` — #000000 : fond de page
- **Noir doux** `canvas-soft` — #070707 : sections alternées
- **Carte** `card` — #0C0C0C : cartes des 4 étapes
- **Billet** — #171717 : fond des billets de projets (bord #2C2C2C)

### Filets
- `hairline` — #262626 · `hairline-strong` — #444444

### Texte
- **Encre** `ink` — #F5F5F0 : titres
- **Corps** `body` — #BDBDB5 : texte courant
- **Discret** `muted` — #8A8A82 : sous-titres

### Statuts de projet (palette réservée)
Concept #D9A024 (texte #2B1D17) · Prototype #6B6B2A · MVP #1F5D6B · Produit en ligne #2F5233 · Archivé #6D1F2F.
Les statuts ne sont plus affichés sur les billets pour le moment.

## Typographie
- **Titres** : Bricolage Grotesque 800, interlettrage serré.
- **Texte** : Inter 400 / 500 / 600.
- Pas d'italique. Les bouts de titre en rose sont en gras droit.

| Usage | Taille | Poids |
|---|---|---|
| Titre du hero | 36–66 px (fluide) | 800 |
| Titre de section | ~40 px | 800 |
| Titre de billet | 22 px | 800 |
| Texte courant | 17 px (billet : 16 px) | 400 |
| Étiquette (majuscules) | 12 px, interlettrage 0,9 px | 600 |
| Bouton | 15 px | 600 |

## Mise en page
- Largeur maximale 1200 px, unité de base 4 px.
- Sur ordinateur (≥ 1100 px) : le contenu garde 456 px à droite pour la photo collée en bas à droite. Sous 1100 px la photo passe dans le hero.
- Cartes des 4 étapes : 2 colonnes sur ordinateur, 1 sur mobile.
- Billets de projets : 1 colonne pleine largeur, 24 px d'écart.

## Composants

- **Logo** : « Anaïs DAMIAO » en texte simple, Bricolage 800.
- **Menu** : Projets, Compétences, Parcours, Contact. Le lien de la section en cours passe en rose, soulignement fin (scroll-spy). Sur la page Projets, « Projets » est en rose.
- **Bouton principal** : fond rose, texte noir. **Secondaire** : contour blanc cassé.
- **Photo** : détourée (WebP transparent, 760 × 1748), collée en bas à droite sous le menu, bas posé sur la section Contact.
- **Trajet d'avion** (section « Mon approche ») : ligne en pointillés avec 4 escales (Comprendre, Concevoir, Construire, Améliorer). Un petit avion rose avance avec le scroll, l'escale et la carte atteintes passent en rose. Collé sous le menu pendant les 4 cartes. Sur mobile, seuls les points et l'avion sont visibles.
- **Billet de projet** : fond #171717, bord 1 px #2C2C2C, rayon 24 px, hauteur fixe 220 px sur ordinateur. Deux encoches en demi-cercle (rayon 10 px) découpées dans la séparation. À gauche la description seule, à droite (talon 280 px) la pastille « Projet N » et le titre. Sur mobile : le talon passe au-dessus, hauteur libre, encoches sur les côtés.
- **Flèche « Tous les projets »** : trait fin rose (1,2 px), centré sous les billets, glisse doucement vers la droite, plus au survol. Mène à `projets.html`.
- **Landing** : 2 billets au maximum. Les autres projets sont sur `projets.html`.
- **Bande IA** : phrase « Assisté par l'IA. Validé par un humain. »
- **Contact** : mail et GitHub.

## À faire
- Garder le rose rare et cohérent avec le tailleur.
- Garder les titres gras, droits, sans italique.
- Mettre un billet par projet réel, avec description courte (2 phrases).
- Vérifier le contraste (rose sur noir ≥ 4,5:1) et l'affichage mobile.

## À éviter
- Pas de dégradé, pas d'ombre portée.
- Pas de nouvelle couleur d'action en plus du rose.
- Pas de chiffres, clients ou résultats inventés.
- Pas de projet fictif présenté comme réel : le second billet actuel est marqué « Exemple fictif » et doit être remplacé.

## Responsive

| Écran | Largeur | Changements |
|---|---|---|
| Mobile | < 640 px | Photo dans le hero, billets en colonne (talon au-dessus), noms des escales masqués |
| Tablette | 640–1099 px | Photo dans le hero, billets avec talon à droite |
| Ordinateur | ≥ 1100 px | Photo collée en bas à droite, contenu décalé de 456 px |
