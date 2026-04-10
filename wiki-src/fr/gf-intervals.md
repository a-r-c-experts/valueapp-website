---
i18nTitle: wiki.gfIntervals.title
navKey: gf-intervals
---

# Intervalles GF et courbes apprises

Les intervalles GF décrivent **comment les valeurs évoluent en fonction de la taille des bâtiments**.

Au lieu d’attribuer une valeur unique à un type de bâtiment, la ValueApp évalue les projets **par plages de surface de plancher (SP)** et construit une courbe sur ces plages.

Cela permet au système de représenter une réalité simple :

> *Les petits bâtiments se comportent différemment des grands.*

---

## Ce que signifient les intervalles GF dans la ValueApp

Dans la ValueApp, les intervalles GF sont :

- des **plages de taille de bâtiments** (par ex. petit, moyen, grand),
- utilisées pour regrouper des projets comparables,
- et pour calculer des valeurs dans des **conditions de taille similaires**.

Ils répondent à la question :

> *« Comment ce type de bâtiment se comporte-t-il à différentes tailles ? »*

Et non :
- quelle est la valeur exacte d’un projet individuel,
- ni quelle est la moyenne sur toutes les tailles.

---

## L’approche précédente (valeurs de référence)

Jusqu’à présent, la ValueApp fonctionnait principalement avec des **intervalles de référence**.

- Ceux-ci étaient basés sur des **priors**  
- Dérivés d’études, d’expérience et d’hypothèses structurées  
- Représentés dans l’application par une **ligne noire**

Ces valeurs de référence étaient :

- stables,
- cohérentes,
- mais pas directement apprises à partir de données de projets.

Elles définissaient le comportement attendu sur les intervalles GF.

---

## La nouvelle approche (apprentissage à partir des données)

Avec la nouvelle mise à jour, la ValueApp introduit un changement fondamental :

> Les valeurs ne sont plus seulement définies — elles sont **apprises**.

Le système :

1. commence avec les intervalles de référence existants (priors),
2. prend en compte des **données de projets réels**,
3. et apprend comment chaque type de bâtiment se comporte sur les intervalles GF.

Le résultat :

- une **courbe informée par les données** au lieu d’une courbe purement prédéfinie,
- adaptée à chaque type de bâtiment,
- tout en restant ancrée dans la logique de référence initiale.

---

## Ce que montre la visualisation

Un résultat typique contient trois éléments :

- **Ligne noire**  
  → référence précédente (priors)

- **Points**  
  → projets réels

- **Lignes colorées en pointillés**  
  → valeurs apprises par niveau d’exigence

Cela montre clairement :

- où la réalité correspond à la référence,
- où elle s’en écarte,
- et comment le système s’adapte.

---

## Pourquoi les intervalles GF sont essentiels

Sans intervalles GF, le système supposerait :

- une seule valeur par type de bâtiment,
- indépendante de la taille.

Cela ignorerait :

- les effets d’échelle,
- les différences d’efficacité,
- les changements structurels et organisationnels liés à la taille.

Les intervalles GF permettent au modèle :

- de représenter ces effets,
- et de décrire une **courbe plutôt qu’un point**.

---

## Comment l’apprentissage fonctionne entre types de bâtiments

Tous les types de bâtiments ne disposent pas de la même quantité de données.

Certains sont bien représentés.  
D’autres sont rares.

Le système gère cela en combinant :

- la **courbe de référence (priors)**,
- les **projets réels du même type de bâtiment**,
- et des **types de bâtiments apparentés au sein du même groupe**.

Cela signifie :

- Avec beaucoup de données → la courbe devient plus spécifique  
- Avec peu de données → la courbe reste plus proche de la référence  

Dans les deux cas :

> Le résultat reste stable, mais devient plus basé sur les données lorsque cela est possible.

---

## Ce que cela signifie en pratique

Le changement principal est le suivant :

Avant :
- la référence définissait le résultat  

Aujourd’hui :
- la référence est le point de départ,
- et le système **apprend à partir de projets réels**

Cela permet à la ValueApp de :

- s’adapter à la pratique réelle,
- représenter les différences entre types de bâtiments,
- et s’améliorer en continu avec l’augmentation des données.

---

## Malentendus fréquents

Il ne faut pas supposer :

- que les valeurs de référence sont supprimées  
- que le système invente librement des valeurs  
- que plus de données entraîne toujours des résultats totalement différents  

Au contraire :

- la référence reste la base  
- le modèle l’ajuste de manière contrôlée  
- et l’apprentissage se fait **dans une structure claire**

---

## En une phrase

> La ValueApp apprend désormais comment chaque type de bâtiment se comporte sur les intervalles GF en combinant des connaissances de référence avec des données de projets réels.

---

## Voir aussi

- [Méthodologie facteur d’ajustement](complexity.html)
- [Grandeur déterminante et effort de base](quantity.html)
- [Facteur d’ajustement (leadership)](adjustment-factor.html)
- [Interprétation des résultats](output-interpretation.html)