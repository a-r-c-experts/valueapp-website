---
i18nTitle: wiki.quantity.title
navKey: quantity
---

# Quantité et effort de base

La quantité définit **l’échelle du projet**.  
C’est le principal moteur de l’effort de base dans ValueApp.

Tout le reste (complexité, facteur d’ajustement) **vient modifier** cette base.  
Rien ne la remplace.

---

## Ce que signifie la quantité dans ValueApp

Dans ValueApp, la quantité représente :
- la **taille de ce qui est planifié**,
- exprimée par **une seule grandeur dominante**.

Elle répond à la question :

> *« Quelle est l’ampleur du projet ? »*

Et non :
- sa difficulté,
- son niveau d’organisation,
- son ambition architecturale.

Ces aspects sont traités ailleurs.

---

## Quantités couramment utilisées

Selon le type de projet, la quantité est généralement exprimée en :

- **Surface brute de plancher (SBP / BGF)**  
  Le cas le plus courant pour les bâtiments.

- **Unités**  
  Logements, chambres ou éléments répétitifs.

- **Surface fonctionnelle**  
  Lorsque seule une partie du bâtiment est pertinente.

Règle essentielle :
> **Utilisez la grandeur qui représente le mieux l’effort de planification**, pas le coût de construction.

---

## Pourquoi la quantité est si déterminante

La quantité est le **seul facteur** qui permet de faire évoluer l’effort de manière prévisible.

Un doublement de la quantité ne double pas l’effort de façon linéaire, mais entraîne :
- davantage de coordination,
- plus de documentation,
- plus de répétition avec variations.

Les courbes de base de ValueApp sont calibrées afin que :
- les petits projets ne soient pas surestimés,
- les grands projets ne soient pas extrapolés naïvement.

---

## Comment la quantité influence les résultats

La quantité :
- définit la **plage d’effort de base**,
- agit sur toutes les phases de planification,
- fonctionne toujours en interaction avec la complexité.

Une quantité plus élevée implique généralement :
- plus de plans,
- plus de cycles de coordination,
- davantage d’interfaces à gérer.

La quantité seule n’explique toutefois **pas** :
- pourquoi des projets de taille identique diffèrent fortement,
- pourquoi certains petits projets sont disproportionnellement exigeants.

C’est le rôle de la complexité et des facteurs d’ajustement.

---

## Choisir la bonne quantité

En cas de doute :

- Préférez une valeur **légèrement simplifiée** à une précision artificielle.
- Utilisez **une seule grandeur dominante**.
- Évitez les quantités « optimisées » pour influencer le résultat.

Si une valeur prête à discussion, documentez l’hypothèse au lieu de la raffiner sans fin.

La précision sans clarté n’est pas de l’exactitude.

---

## Où la quantité apparaît dans l’application

La quantité est définie dans :

- **La configuration du projet**  
  Comme première saisie substantielle.

- **Le calcul de base**  
  Où elle sert de référence à tous les ajustements.

- **Le résumé des résultats**  
  Où elle explique les différences d’effort liées à l’échelle.

Pour une procédure guidée :
→ [Workflow : définir la quantité](workflows.html#quantity)

---

## Erreurs fréquentes à éviter

Ne :
- mélangez pas surfaces nettes et brutes,
- excluez pas des parties « inconfortables » du projet,
- modifiez pas la quantité tardivement pour corriger un résultat.

Si une modification de quantité change fortement le résultat, ce n’est pas une erreur.  
Cela signifie que le périmètre du projet a changé.

---

## Référence visuelle optionnelle

La relation entre quantité et effort de base est **non linéaire** :

![Quantité vs effort de base](\/wiki-assets/knowledge/quantity-baseline-curve.jpg)

Cette courbe reflète :
- les effets de répétition,
- l’augmentation de la charge de coordination à grande échelle.

---

## Voir aussi

- [Dimensions de complexité](complexity.html)
- [Facteur d’ajustement / de pilotage](adjustment-factor.html)
- [Rôles et prestations](roles-and-services.html)
- [Interpréter les résultats](output-interpretation.html)
- [Ce que ValueApp est – et n’est pas](why-valueapp.html)