---
i18nTitle: wiki.gfIntervals.title
navKey: gf-intervals
---

# Intervalles de GF et courbes apprises

Les intervalles de GF décrivent **comment les valeurs évoluent selon la taille des bâtiments**.

Au lieu d’attribuer une seule valeur à un type de bâtiment entier, ValueApp évalue les projets **sur des plages de surface de plancher (GF)** et construit une courbe sur ces plages.

Cela permet au système de refléter une réalité simple :

> *Les petits bâtiments se comportent différemment des grands.*

---

## Ce que signifient les intervalles de GF dans ValueApp

Dans ValueApp, les intervalles de GF sont :

- des **plages de taille de bâtiments** (p. ex. petit, moyen, grand),
- utilisées pour regrouper des projets comparables,
- et pour calculer des valeurs dans des **conditions d’échelle similaires**.

Ils répondent à la question :

> *« Comment ce type de bâtiment se comporte-t-il selon la taille ? »*

Pas :
- quelle est la valeur exacte d’un projet individuel,
- ni quelle est la moyenne sur toutes les tailles.

---

## L’approche précédente (valeurs de référence)

Auparavant, ValueApp fonctionnait principalement avec des **courbes de référence**.

- Basées sur des **priors**  
- Issues d’études, d’expérience et d’hypothèses structurées  
- Représentées dans l’application par la **ligne noire**

Ces valeurs étaient :

- stables,
- cohérentes,
- mais pas directement apprises à partir des données.

Elles définissaient le comportement attendu sur les intervalles de GF.

---

## La nouvelle approche (apprentissage à partir des données)

Avec la nouvelle version, ValueApp introduit un changement fondamental :

> Les valeurs ne sont plus seulement définies — elles sont **apprises**.

Le système :

1. part de la courbe de référence (priors),
2. analyse les **données réelles des projets**,
3. et apprend le comportement de chaque type de bâtiment sur les intervalles de GF.

Le résultat :

- une **courbe informée par les données** au lieu d’une courbe purement définie,
- ajustée par type de bâtiment,
- tout en restant ancrée dans la logique de référence initiale.

---

## Ce que montre le graphique

Un résultat typique contient trois éléments :

- **Ligne noire**  
  → référence (priors)

- **Points**  
  → projets réels

- **Lignes pointillées colorées**  
  → valeurs apprises selon le niveau d’exigence

Cela montre clairement :

- où la réalité correspond à la référence,
- où elle s’en écarte,
- et comment le système s’adapte.

---

## Pourquoi les intervalles de GF sont essentiels

Sans intervalles de GF, le système supposerait :

- une valeur unique par type de bâtiment,
- indépendamment de la taille.

Cela ignorerait :

- les effets d’échelle,
- les différences d’efficacité,
- les changements structurels et organisationnels liés à la taille.

Les intervalles de GF permettent au modèle :

- de capturer ces effets,
- et de décrire une **courbe plutôt qu’un point**.

---

## Comment l’apprentissage fonctionne entre types de bâtiments

Tous les types de bâtiments ne disposent pas de la même quantité de données.

Certains sont bien représentés.  
D’autres sont rares.

Le système combine :

- la **courbe de référence (priors)**,
- les **projets réels du même type**,
- et des **types de bâtiments similaires dans le même groupe**.

Cela signifie :

- beaucoup de données → courbe plus spécifique  
- peu de données → courbe plus proche de la référence  

Dans tous les cas :

> Le résultat reste stable, mais devient plus basé sur les données lorsque c’est possible.

---

## Ce que cela signifie en pratique

Le changement clé est :

Avant :
- la référence définissait le résultat  

Maintenant :
- la référence est le point de départ,
- et le système **apprend à partir des projets réels**

Cela permet à ValueApp :

- de s’adapter à la pratique réelle,
- de refléter les différences entre types de bâtiments,
- et de s’améliorer continuellement avec de nouvelles données.

---

## Malentendus fréquents

Ne pas supposer :

- que les valeurs de référence sont supprimées  
- que le système invente des valeurs librement  
- que plus de données signifie toujours des résultats complètement différents  

Au contraire :

- la référence reste la base  
- le modèle l’ajuste avec prudence  
- et l’apprentissage se fait **dans une structure contrôlée**

---

## En une phrase

> ValueApp apprend désormais comment chaque type de bâtiment se comporte selon les intervalles de GF en combinant les connaissances de référence avec les données réelles.

---

## Voir aussi

- [Dimensions de complexité](complexity.html)
- [Quantité et effort de base](quantity.html)
- [Facteur d’ajustement (pilotage)](adjustment-factor.html)
- [Interprétation des résultats](output-interpretation.html)