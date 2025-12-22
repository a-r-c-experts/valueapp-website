---
i18nTitle: wiki.definitions.title
i18nSubtitle: wiki.definitions.subtitle
navKey: wiki.nav.definitions
---

# Définitions et concepts clés

Cette page explique les concepts fondamentaux de la ValueApp et de la ETH Value Method : les **modèles de base**, les **déterminants**, les **facteurs d’ajustement**, le **Leadership Framework**, ainsi que leur combinaison en une **plage d’effort** transparente.

Si vous préférez une approche pratique, vous pouvez passer directement au [Tutoriel](tutorial.html) ou consulter les [Exemples](examples.html).  
Pour la logique conceptuelle globale, voir [Fonctionnement de l’application](how-it-works.html).

---

## Ce que fait la ValueApp

La ValueApp estime l’effort de planification (en heures) pour différentes disciplines sur la base de **déterminants transparents et documentés**.

Au lieu des coûts de construction, elle utilise des grandeurs mesurables telles que la **surface brute de plancher** et les relie à des **modèles de base statistiques** issus de projets réalisés.

La complexité et le contexte spécifiques au projet sont intégrés via des **facteurs d’ajustement** dérivés du **Leadership Framework for Decision Making**.  
Le résultat est une **plage d’effort plausible et transparente**, pouvant être documentée, discutée et communiquée.

---

## Formule de base (simplifiée)

De manière simplifiée, la méthode s’exprime comme suit :

**Effort (h) = LI × Déterminant × AF<sub>qualité</sub> × AF<sub>projet/processus</sub>**

Où :

- **LI** correspond à l’effort de base par unité (p. ex. minutes par m² de surface brute) issu du modèle statistique.  
- Le **déterminant** est une grandeur mesurable et transparente, généralement la surface brute de plancher (SBP).  
- **AF<sub>qualité</sub>** est un facteur d’ajustement dérivé du Leadership Framework, basé sur des défis de conception, techniques, spatiaux et organisationnels.  
- **AF<sub>projet/processus</sub>** représente des ajustements supplémentaires liés au projet ou au processus, lorsque pertinent.

La majorité de ces données sont saisies dans la [Section Projet](project-section.html).

---

## Modèles de base et déterminants

Les modèles de base sont construits à partir de **projets de référence réalisés**.  
Pour chaque type d’usage, ils relient un déterminant (généralement la SBP) à des **intervalles d’effort de planification**.

Ces intervalles couvrent en général environ **80 % des projets comparables** et sont structurés en **déciles**, afin de rendre la variabilité explicite.

![Nuage de références – logement](/wiki-assets/base-model-housing-reference-cloud.jpeg)

*Projets de référence et intervalles de prédiction pour le logement et les bâtiments apparentés.*

![Immeuble collectif dans l’intervalle de prédiction](/wiki-assets/base-model-mfh-example.jpeg)

*Exemple : immeuble collectif à une surface donnée dans l’intervalle de prédiction à 80 %.*

La ValueApp utilise actuellement des modèles par usage pour :

- Habitat  
- Travail / Services  
- Industrie  
- Stockage  
- Enseignement / Recherche  
- Soins / Santé  

Chaque modèle suppose **100 % de prestations de base** pour la discipline concernée.

---

## Leadership Framework et complexité

Le **Leadership Framework for Decision Making** classe les situations selon la clarté des relations de cause à effet.  
Il distingue les contextes **simples**, **compliqués**, **complexes** et **chaotiques**, et propose des modes d’action adaptés.

![Vue d’ensemble du Leadership Framework](/wiki-assets/leadership-framework-overview.jpeg)

*Leadership Framework : du simple au compliqué, au complexe et au chaotique.*

Dans la ValueApp, les défis du projet sont décrits selon quatre dimensions :

- **conception**,  
- **technique**,  
- **spatial**,  
- **organisationnel**.

Ils sont positionnés dans le framework. Leur « centre de gravité » détermine la valeur de **AF<sub>qualité</sub>**.

![Leadership Framework avec centre de gravité](/wiki-assets/leadership-framework-centre-of-gravity.jpeg)

*Défis spécifiques au projet positionnés dans le framework ; le centre de gravité détermine le facteur d’ajustement.*

Cette logique est explicite et discutable. Elle ne repose pas sur un calibrage caché.

---

## Facteurs d’ajustement

Les facteurs d’ajustement représentent la complexité et le contexte que le déterminant seul ne peut pas capter.

### AF<sub>qualité</sub>

Issu du Leadership Framework, AF<sub>qualité</sub> reflète l’effet combiné des défis de conception, techniques, spatiaux et organisationnels.

### AF<sub>projet/processus</sub>

Lorsque pertinent, des facteurs supplémentaires tiennent compte de la configuration du projet et du processus, tels que le mode de passation, la structure de collaboration, les contraintes, le phasage ou des conditions contractuelles particulières.

---

## Intervalles de prédiction

Un **intervalle de prédiction** correspond à une plage couvrant la majorité des projets comparables, généralement autour de 80 %.

Il ne s’agit ni d’une garantie ni d’un objectif, mais d’une manière structurée d’exprimer **l’incertitude et la variabilité** à partir de données observées.

---

## Structure de la ValueApp

La ValueApp est organisée en quatre onglets principaux, reflétant la logique de la méthode :

- **Beschrieb (Description)** – contexte du projet, adresse, organisation et statut  
- **Projekt (Projet)** – déterminant, mix d’usages, complexité et risque  
- **Leistung (Prestations)** – rôle, priorités et heures par phase  
- **Zusammenfassung (Synthèse)** – fiche récapitulative pour communication et documentation  

![Architecture et flux de données de la ValueApp](/wiki-assets/valueapp-architecture-overview.jpeg)

*La ValueApp relie description du projet, déterminants, facteurs d’ajustement et prestations dans un modèle cohérent.*

---

## Champs de l’application – recommandations d’utilisation

### Beschrieb

Utilisez le titre et l’adresse du projet pour une identification claire dans les rapports et systèmes internes.  
La description doit résumer la situation initiale, la mission, les contraintes clés et les thèmes influençant la complexité.

### Projekt

Saisissez le déterminant (généralement la SBP) et répartissez-le entre les usages pertinents.  
Évaluez la complexité selon les quatre dimensions et définissez le niveau de risque (**aucune exigence particulière**, **exigences accrues**, **exigences élevées**).

Des informations complémentaires sont disponibles dans la [Section Projet](project-section.html).

### Leistung

Choisissez votre rôle contractuel et identifiez les thèmes prioritaires.  
Examinez les heures calculées pour 100 % de prestations de base et leur répartition par phase.  
Ajustez les pourcentages de phase si nécessaire et de manière justifiée.

### Zusammenfassung

La synthèse regroupe toutes les données et résultats dans une vue d’ensemble traçable.  
Elle est destinée à être jointe aux offres d’honoraires, documents de controlling interne ou procédures de marchés publics.

---

## Glossaire

**Déterminant (grandeur déterminante)**  
Grandeur mesurable pilotant le modèle de base, généralement la surface brute de plancher pertinente pour le projet.  
Voir aussi la [Section Projet](project-section.html).

**Modèle de base**  
Modèle statistique par type d’usage reliant les déterminants à des plages d’effort pour 100 % de prestations de base.

**Intervalle de prédiction**  
Plage couvrant la majorité des projets comparables (environ 80 %), structurée en déciles.

**AF Qualité**  
Facteur d’ajustement issu du Leadership Framework, basé sur les défis de conception, techniques, spatiaux et organisationnels.

**Prestations de base**  
Prestations standard définies par les règlements professionnels (p. ex. SIA), supposées à 100 % dans les modèles de base.

**Prestations supplémentaires**  
Prestations spécifiques au projet en dehors des prestations de base, pouvant être documentées séparément.

---

<div class="wiki-aside-card">
  <h3>Sources méthodologiques</h3>
  <p>
    La Value Method et la ValueApp reposent sur des recherches menées à l’ETH Zurich
    et sont développées en collaboration avec des partenaires de pratique et des associations professionnelles.
    Les modèles de référence sont continuellement mis à jour à partir de projets réalisés.
  </p>
</div>

<div class="wiki-aside-card">
  <h3>Conseil aux utilisateurs</h3>
  <p>
    Dans la pratique quotidienne, il n’est pas nécessaire de maîtriser chaque détail statistique.
    L’essentiel est une description claire du projet, des quantités réalistes,
    une évaluation honnête de la complexité et une répartition transparente des prestations par phase.
  </p>
</div>

## Voir aussi

- [Fonctionnement de l’application](how-it-works.html)  
- [Pourquoi la ValueApp existe](why-valueapp.html)  
- [Section Projet](project-section.html)  
- [Exemples](examples.html)  
- [Tutoriel](tutorial.html)