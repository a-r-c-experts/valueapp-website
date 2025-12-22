---
i18nTitle: wiki.tutorial.title
i18nSubtitle: wiki.tutorial.subtitle
navKey: wiki.nav.tutorial
---

# Tutoriel – pas à pas dans la ValueApp

Ce tutoriel vous guide pas à pas dans la ValueApp à l’aide d’un projet exemple concret.  
L’accent est mis sur **quoi saisir dans chaque onglet**, **pourquoi cela compte** et **comment interpréter les résultats**.

Pour un arrière-plan conceptuel pendant la lecture, gardez  
[Définitions](definitions.html) ou [Comment l’application fonctionne](how-it-works.html) ouverts dans un autre onglet.

---

## Vue d’ensemble — Quatre onglets, une méthode

La ValueApp est structurée en quatre onglets :

- **Beschrieb** – identité et contexte du projet  
- **Projekt** – quantités, mix d’usages et complexité  
- **Leistung** – rôle, prestations et heures  
- **Zusammenfassung** – synthèse sur une page  

Ils suivent la logique de la méthode Value de l’ETH, du contexte du projet jusqu’à la répartition des efforts et des prestations.

![Diagramme de la structure de la ValueApp](/wiki-assets/valueapp-architecture-overview.jpeg)

*L’application relie description du projet, déterminants, facteurs d’ajustement et prestations dans un flux cohérent.*

---

## Étape 1 — Beschrieb (décrire le projet)

Commencez par une description claire du projet. Ces informations apparaissent dans les rapports et fournissent le contexte lors d’analyses, de comparaisons ou de discussions ultérieures.

Renseignez :

- le titre et l’adresse du projet,  
- le statut du projet (p. ex. *En planification*, *En exécution*),  
- l’organisation côté planification et entreprises,  
- un court texte décrivant le périmètre, la mission et les contraintes principales (5 à 10 lignes).

De bonnes descriptions rendent les évaluations de complexité ultérieures **justifiables et transparentes**.

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-beschrieb-kindergarten.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Exemple de l’onglet Beschrieb complété pour un bâtiment éducatif.*

<div class="wiki-note-box">
  <strong>Enregistrement et feedback</strong>
  <p>
    Utilisez le bouton « Speichern » pour sauvegarder votre progression.
    Le bouton « Feedback » ouvre un court formulaire pour signaler des problèmes ou proposer des améliorations.
  </p>
</div>

---

## Étape 2 — Projekt (quantités, usages et complexité)

Dans l’onglet **Projekt**, vous traduisez le cahier des charges en chiffres et en une évaluation structurée de la complexité.

### 2.1 Déterminant et mix d’usages

Saisissez le **déterminant**, généralement la surface brute de plancher (SBP / GF).  
Attribuez ensuite des pourcentages de cette quantité aux usages concernés.

Cela indique à l’application quels **modèles de base** appliquer et comment les combiner.

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-project-uses-empty.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Onglet Projet avant l’attribution des usages.*

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-project-uses-education-100.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*L’ensemble de la surface brute affecté à « Former et rechercher ».*

Pour des explications détaillées sur les déterminants et le mix d’usages, voir la  
[section Projet](project-section.html).

---

### 2.2 Complexité et défis

Décrivez les défis du projet selon quatre dimensions :

- conception  
- technique  
- spatiale  
- organisationnelle  

Positionnez-les dans le **Leadership Framework**.

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-complexity-challenges-popup.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Défis spécifiques au projet positionnés dans le framework.*

L’application calcule un **facteur d’ajustement (AF_quality)** à partir du centre de gravité de vos entrées.  
Ce facteur déplace l’effort attendu **à l’intérieur** de l’intervalle de prédiction du modèle de base.

Si cela vous paraît abstrait, consultez  
[Définitions](definitions.html) ou [Comment l’application fonctionne](how-it-works.html).

---

### 2.3 Niveau de risque (le cas échéant)

Définissez le niveau de risque :

- **aucun**,  
- **accru**,  
- **exigences élevées**.

Cela reflète les incertitudes et peut influencer la **partie haute de la fourchette d’effort**.

---

## Étape 3 — Leistung (rôle et heures par phase)

Dans l’onglet **Leistung**, vous définissez votre responsabilité et analysez la répartition de l’effort calculé.

En pratique :

- vous choisissez votre rôle (Architecte / Architecte & planificateur général / Planificateur général),  
- vous indiquez les thèmes prioritaires (conception, direction des travaux, planification des coûts),  
- vous vérifiez le total des heures pour **100 % de prestations de base**,  
- vous contrôlez et ajustez si nécessaire la répartition par phases SIA.

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-roles-hours.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Rôles, thèmes prioritaires et heures calculées par phase.*

### Plusieurs disciplines

Pour les projets multidisciplinaires (architecture, structure, électricité, CVC, sanitaire) :

- répétez **Projekt** et **Leistung** pour chaque discipline,  
- l’onglet **Zusammenfassung** affichera les résultats côte à côte.

---

## Étape 4 — Zusammenfassung (lire la synthèse)

L’onglet **Zusammenfassung** est en lecture seule. Il consolide :

- la description du projet et l’organisation,  
- le mix d’usages et le déterminant,  
- l’effort par m²,  
- le niveau de risque,  
- les heures par phase SIA,  
- les prestations supplémentaires le cas échéant.

Cette synthèse peut être exportée ou imprimée et jointe à :

- des offres d’honoraires,  
- des documents internes de planification ou de controlling,  
- des procédures d’appel d’offres ou de marchés publics.

Son objectif est de documenter **pourquoi** une certaine fourchette d’effort est plausible au regard des déterminants et de la complexité du projet.

---

## Quand lire quoi

- Pour une première utilisation : [Getting started](getting-started.html)  
- Pour la terminologie et la logique : [Définitions](definitions.html)  
- Pour la compréhension conceptuelle : [Comment l’application fonctionne](how-it-works.html) et [Pourquoi la ValueApp existe](why-valueapp.html)  
- Pour la calibration : [Exemples](examples.html)

---

## Voir aussi

- [Getting started](getting-started.html)  
- [Définitions et concepts clés](definitions.html)  
- [Section Projet](project-section.html)  
- [Comment l’application fonctionne](how-it-works.html)  
- [Pourquoi la ValueApp existe](why-valueapp.html)  
- [Exemples](examples.html)