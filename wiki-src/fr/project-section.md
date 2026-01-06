---
i18nTitle: wiki.projectSection.title
i18nSubtitle: wiki.projectSection.subtitle
navKey: wiki.nav.projectSection
---

# Section Projet

L’onglet **Projet** est l’endroit où ValueApp transforme  
**« de quel type de projet s’agit-il ? »** en  
**« quelle plage d’effort est plausible ? »**.

Cela se fait en combinant :

- une **quantité** mesurable (taille du projet),
- une **répartition des usages** définie (contexte de référence),
- une **évaluation structurée de la complexité**,
- et, selon la configuration, des **données de risque / exigences**.

Cette page explique les champs de manière conceptuelle.  
Pour des instructions pas à pas, voir le [Tutoriel](tutorial.html).

---

## Ce qui se passe dans la section Projet

Dans la **section Projet**, ValueApp génère la **plage d’effort de base** en :

1. sélectionnant les **modèles de référence** via la répartition des usages,
2. les mettant à l’échelle avec la **quantité** saisie,
3. ajustant le résultat à l’aide de la **complexité et des conditions de pilotage**.

Le résultat est généralement présenté comme :
- une plage d’effort,
- souvent normalisée (p. ex. min/m²),
- avant l’application des rôles et du périmètre des prestations.

Pour la logique complète de la méthode, voir :
→ [Fonctionnement de l’application](how-it-works.html)

---

## Ce que vous définissez ici

En règle générale, vous définissez :

1. **Quantité / taille du projet**  
   → [Quantité](quantity.html)

2. **Répartition des usages**  
   → [Catégories d’usage](use-categories.html)

3. **Complexité** selon quatre dimensions  
   → [Dimensions de complexité](complexity.html)

4. **Facteur de pilotage / d’ajustement** (dérivé)  
   → [Facteur d’ajustement](adjustment-factor.html)

5. **Risque / exigences** (si activé)

Ces éléments déterminent ensemble le **profil d’effort de base**, avant l’application des rôles et des prestations.

---

## Quantité (déterminant)

La quantité représente l’**échelle du projet**, le plus souvent :

- la surface brute de plancher (m² SBF)

Points clés :
- toujours saisir la **quantité totale du projet**,
- inclure les sous-sols et les surfaces communes lorsque pertinent,
- de petites variations peuvent avoir un impact significatif.

Détails et pièges fréquents :
→ [Quantité](quantity.html)

---

## Répartition des usages

La répartition des usages indique à l’application **dans quel univers de référence se situe le projet**.

- Une ou plusieurs catégories d’usage peuvent être sélectionnées.
- Les pourcentages doivent totaliser 100 %.
- Les projets mixtes sont calculés comme des **combinaisons pondérées**.

La répartition des usages sélectionne les modèles de base.  
La complexité explique les écarts *au sein* de ces modèles.

Exemples et définitions :
→ [Catégories d’usage](use-categories.html)

---

## Évaluation de la complexité

La complexité décrit **le degré de prévisibilité et de maîtrise de la tâche de conception**, et non sa qualité ou son ambition.

ValueApp évalue la complexité selon quatre dimensions :
- conceptuelle
- technique
- spatiale
- organisationnelle

Ces évaluations sont traduites en un **facteur de pilotage / d’ajustement** qui modifie l’effort de base.

Contexte conceptuel :
→ [Dimensions de complexité](complexity.html)  
→ [Facteur d’ajustement](adjustment-factor.html)

---

## Risque et exigences (optionnel)

Si cette option est activée dans votre configuration, les données de risque servent à documenter :
- les incertitudes externes,
- les risques d’autorisation,
- l’instabilité des processus.

Le risque :
- élargit généralement les plages,
- ne modifie pas la logique de base.

Pour l’interprétation :
→ [Interprétation des résultats](output-interpretation.html)

---

## Conseils pratiques

- **Être explicite** : consigner les hypothèses dans la description du projet.
- **Utiliser des références** : comparer avec des projets similaires.
- **Éviter les ajustements artificiels** : ne pas « corriger » ici ce qui relève du rôle ou du périmètre des prestations.

La section Projet sert à la **mise en contexte et à la plausibilité**, pas à la négociation.

---

## Voir aussi

- [Tutoriel](tutorial.html)
- [Quantité](quantity.html)
- [Catégories d’usage](use-categories.html)
- [Dimensions de complexité](complexity.html)
- [Facteur d’ajustement](adjustment-factor.html)
- [Interprétation des résultats](output-interpretation.html)
- [Pourquoi ValueApp existe](why-valueapp.html)