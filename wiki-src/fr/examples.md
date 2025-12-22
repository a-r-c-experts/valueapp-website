---
i18nTitle: wiki.examples.title
i18nSubtitle: wiki.examples.subtitle
navKey: wiki.nav.examples
---

# Exemples

Les exemples aident à calibrer les attentes et montrent comment les saisies influencent les résultats dans la ValueApp.  
Ils démontrent comment les **déterminants**, le **mix d’usages** et la **complexité** se traduisent en plages d’effort.

Si vous débutez, commencez par [Bien démarrer](getting-started.html), puis revenez ici une fois le flux de travail de base compris.

---

## À quoi servent ces exemples

Ces exemples ont pour but de :

- montrer comment traduire un projet réel en déterminants, mix d’usages et complexité,
- démontrer comment les facteurs d’ajustement déplacent les résultats,
- fournir des points de référence pour les échanges avec les clients et les équipes,
- illustrer ce que signifie « plausible » dans la pratique.

Ils ne sont pas des modèles à copier tels quels, mais des **schémas à adapter** à vos propres projets.

---

## Ordre de lecture recommandé

1. Lisez [Définitions et concepts clés](definitions.html) si des termes comme LI, déterminant ou AF<sub>qualité</sub> sont nouveaux.
2. Consultez [Fonctionnement de l’application](how-it-works.html) pour comprendre la logique conceptuelle.
3. Comparez votre projet aux exemples ci-dessous.
4. Utilisez le [Tutoriel](tutorial.html) pour appliquer les étapes dans l’application.

---

## Exemple 1 – Étude de faisabilité simple / concours

*Petit projet résidentiel, mission claire, peu d’intervenants, complexité faible à moyenne.*

### Étape 1 – Beschrieb

Le projet est un petit bâtiment d’habitation d’environ **100 m² de surface brute de plancher (GF)**.  
La mission consiste à vérifier la faisabilité et à préparer un concept pour une éventuelle demande de permis de construire ou une participation à un concours.

Le client est un propriétaire privé avec un calendrier standard et sans contraintes contractuelles particulières.

Dans l’onglet **Beschrieb** :

- utilisez un titre de projet clair et saisissez l’adresse,
- définissez le statut sur *In Planung*,
- décrivez la mission dans un court paragraphe (situation initiale, objectif de l’étude, contraintes clés),
- choisissez une organisation avec des planificateurs individuels et sans entreprise générale.

### Étape 2 – Projekt

Dans l’onglet **Projekt**, vous saisissez une surface brute de plancher de **100 m²**.  
L’usage principal est *Wohnen*, par exemple :

- Wohnen – 95 % de la GF  
- Wohnen 2 – 5 % de la GF (p. ex. surfaces annexes liées au logement)

La complexité se situe principalement dans le registre **simple à compliqué** : typologie standard, cadre réglementaire connu, pas de systèmes techniques particuliers.

La plupart des défis sont positionnés dans le Leadership Framework dans le domaine *einfach / kompliziert*,  
et le niveau de risque est réglé sur **Keine spez. Anforderungen**.

### Étape 3 – Leistung

En tant qu’architecte, vous sélectionnez le rôle **Architekt/in** et des thèmes prioritaires tels que la conception et la planification des coûts en phase initiale.

L’application calcule un total d’environ **300 heures** pour 100 % de prestations de base,  
avec un accent plus fort sur les phases 2 et 3 (pré-étude et projet) et moins d’heures en exécution.

### Étape 4 – Zusammenfassung

La synthèse fournit un aperçu compact : description du projet, organisation, mix d’usages, effort par m² et heures par phase.

Pour des études de faisabilité ou des concours, cette page peut être jointe à des documents internes  
ou utilisée comme référence lors de discussions d’honoraires.

<div class="wiki-highlight-box">
  <strong>Ce que montre cet exemple</strong>
  <p>
    Même pour de petits projets relativement simples, la ValueApp utilise les mêmes modèles de base
    et la même logique de complexité. Les heures obtenues restent modestes, mais elles sont traçables
    et comparables à celles de projets plus grands.
  </p>
</div>

---

## Exemple 2 – Bâtiment éducatif (jardin d’enfants)

*Bâtiment éducatif à fonction claire, mais avec une complexité plus élevée sur les plans de la conception, de l’organisation et de l’espace.*

### Contexte et base de données

Cet exemple est basé sur un projet de jardin d’enfants réalisé.  
Le bâtiment appartient au groupe d’usage **Enseignement / Recherche** et fait partie de la base de données  
du modèle de base correspondant.

![Graphique de modèle de base pour bâtiments éducatifs](/wiki-assets/education-model-chart.jpeg)

*Bâtiments d’enseignement et de recherche avec intervalles de prédiction pour l’effort de planification.*

### Étape 1 – Beschrieb

L’onglet **Beschrieb** contient une description structurée :

- localisation et client,
- contexte (p. ex. quartier, espaces extérieurs),
- concept pédagogique,
- exigences particulières telles que l’inclusion, la flexibilité des espaces ou des contraintes de sécurité spécifiques.

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-beschrieb-kindergarten.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Description du projet dans la ValueApp pour l’exemple du jardin d’enfants.*

### Étape 2 – Projekt

La grandeur déterminante est la **surface brute de plancher** du jardin d’enfants.  
La totalité de la GF est attribuée à l’usage **Enseignement / Recherche**, ce qui relie directement le projet au modèle éducatif.

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-project-uses-education-100.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Onglet Projet avec 100 % de la surface brute attribuée à Enseignement / Recherche.*

La complexité est évaluée comme plus élevée que dans l’exemple résidentiel :

- organisation spatiale exigeante,
- concept pédagogique,
- intégration dans un contexte existant,
- coordination de plusieurs parties prenantes.

Plusieurs défis sont positionnés dans le domaine **complexe** du Leadership Framework.

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-complexity-challenges-popup.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Défis positionnés dans le Leadership Framework ; le centre de gravité mène à un facteur d’ajustement.*

### Étape 3 – Leistung

Le bureau d’architecture assume le rôle **Architekt/in** ou **Architekt/in & Generalplaner/in**, selon la configuration.

Les thèmes prioritaires incluent la conception, la coordination avec les spécialistes, la direction des travaux et la planification des coûts.

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-roles-hours.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Heures calculées pour 100 % de prestations de base et leur répartition par phases SIA.*

Le total d’heures est nettement plus élevé que dans l’exemple simple,  
à la fois en raison de la GF plus importante et du facteur d’ajustement plus élevé.

Les phases **3–5** (projet, appel d’offres et exécution) représentent la plus grande part de l’effort.

### Étape 4 – Zusammenfassung

La synthèse présente le jardin d’enfants comme projet de référence avec :

- des déterminants clairement documentés,
- une évaluation explicite de la complexité,
- la répartition résultante de l’effort.

De telles synthèses peuvent servir de benchmarks internes,  
de base pour des discussions d’honoraires transparentes ou dans des procédures de marchés publics.

<div class="wiki-highlight-box">
  <strong>Ce que montre cet exemple</strong>
  <p>
    La complexité et le contexte comptent. Même avec une grandeur déterminante identique,
    le facteur d’ajustement dérivé du Leadership Framework peut modifier sensiblement l’effort attendu.
    Cet exemple montre comment ce déplacement est documenté de manière transparente.
  </p>
</div>

<div class="wiki-highlight-box">
  <strong>Origine des données</strong>
  <p>
    Les projets réalisés sont documentés dans un système séparé de données et de références.
    Ces jeux de données alimentent les modèles statistiques de base de la ValueApp.
  </p>
  <video class="wiki-img" controls preload="metadata">
    <source src="/wiki-assets/werk-material-kindergarten.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div class="wiki-img-caption">
    Exemple d’une entrée de projet dans la base de référence sous-jacente (illustratif).
  </div>
</div>

---

## Autres exemples que vous pourrez ajouter plus tard

Pour renforcer le wiki (et une future recherche via chatbot), vous pouvez envisager d’ajouter :

- un projet **mixte complexe** (plusieurs modèles de base),
- un projet **très dépendant du processus** (passation ou collaboration atypiques),
- un cas limite avec des saisies inhabituelles mais réalistes.

---

## Voir aussi

- [Définitions et concepts clés](definitions.html)  
- [Section Projet](project-section.html)  
- [Fonctionnement de l’application](how-it-works.html)  
- [Tutoriel](tutorial.html)  
- [Pourquoi la ValueApp existe](why-valueapp.html)