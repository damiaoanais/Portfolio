# CLAUDE.md

## Vue d'ensemble

Ce projet est un portfolio statique pour Anaïs DAMIAO. Il s'agit d'une landing page personnelle et d'une page de projets, conçus selon un design sombre, premium et très cadré, avec accent rose sur fond noir.

Le site est construit sans framework ou build system. Les pages sont codées en HTML/CSS/JS directement, avec des fichiers de contenu et de design séparés.

## Structure du dépôt

- `index.html` : landing page principale
- `projets.html` : page listant tous les projets
- `design.md` : système visuel, palette, typographie, composants
- `PRD.md` : cahier des charges et objectifs du projet
- `content.yaml` : contenu éditorial qui alimente le site
- `README.md` : résumé rapide du projet
- `logos/` : fichiers logos SVG/PNG/WebP pour les outils

## Objectif fonctionnel

Présenter Anaïs comme Product Builder IA & no-code :
- claire, professionnelle, inspirante
- sans inventer de chiffres, clients ou résultats
- avec un ton affirmé et élégant
- orienté recruteurs, clients et pairs de formation

## Règles de conception à respecter

### Design
- Fond noir pur (`#000`) sans dégradé
- Accent principal rose (`#E4748C`)
- Texte blanc cassé / gris, jamais de couleur secondaire inutile
- Titres gras, droits, sans italique
- Éléments sobres, fins, élégants
- Pas d'ombres portées excessives, pas d'animation inutile

### Contenu
- Les contenus doivent rester authentiques
- Ne pas inventer de projets, clients, chiffres ou résultats
- Les contenus doivent rester en français
- Les liens de contact doivent être propres et fonctionnels

### Performance / technique
- Site statique, sans build
- Compatible mobile et desktop
- Réduire les animations si `prefers-reduced-motion` est activé
- Éviter tout défilement horizontal

## Commandes locales utiles

Pour lancer le site en local :

```bash
cd /Users/siana/Desktop/Projet_portfolio/Portfolio-main
python3 -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000
```

## Bonnes pratiques pour les modifications

- Préserver la cohérence visuelle avec `design.md`
- Mettre à jour `content.yaml` si le texte éditorial change
- Ne pas introduire de nouveaux composants visuels sans cohérence avec le système existant
- Garder le code simple et lisible
- Vérifier l'affichage mobile après chaque changement notable

## Points de vigilance

- Le second projet de démonstration est explicitement mentionné comme fictif dans le PRD ; ne pas le présenter comme réel
- La photo, les outils, les statuts et les textes doivent rester crédibles
- Les sections doivent rester alignées avec les exigences du PRD
- Le site est un portfolio personnel, pas un projet e-commerce ou SaaS fictif

## Référence principale

Pour toute modification de design, content ou structure, se référer en priorité à :
- `design.md`
- `PRD.md`
- `content.yaml`

## Objectif de l'agent

Réaliser des changements cohérents, lisibles et strictement alignés sur la direction artistique et la vérité éditoriale du projet.
