---
i18nTitle: wiki.projectSection.title
i18nSubtitle: wiki.projectSection.subtitle
navKey: wiki.nav.projectSection
---

# Section Projet

L’onglet **Projet** est l’endroit où la ValueApp traduit  
**« de quel type de projet s’agit-il ? »** en  
**« quelle plage d’effort est plausible ? »**.

Cela se fait en combinant :

- une **grandeur déterminante** mesurable (taille du projet),
- un **mix d’usages** défini (contexte de référence),
- une **évaluation structurée de la complexité**,
- ainsi que – selon la configuration – des **indications de risque / exigences**.

Cette page explique les champs de manière conceptuelle.  
Pour une procédure étape par étape, voir le [tutorial](tutorial.html).

---

## Ce qui se passe dans la section projet

Dans la **section projet**, la ValueApp génère la **plage d’effort de base** en :

1. sélectionnant des **modèles de base** appropriés selon l’usage,
2. les mettant à l’échelle avec la **grandeur déterminante** saisie,
3. ajustant le résultat via **la complexité et les conditions de pilotage**.

Le résultat est généralement présenté comme :
- une plage d’effort,
- souvent normalisée (par ex. min/m²),
- encore **avant** l’application des rôles et des prestations.

Pour la logique méthodologique :
→ [Comment fonctionne l’application](how-it-works.html)

---

## Ce que vous définissez ici

Vous définissez généralement :

1. **Grandeur déterminante / taille du projet**  
   → [Grandeur déterminante](quantity.html)

2. **Mix d’usages**  
   → [Catégories d’usage](use-categories.html)

3. **Complexité** en quatre dimensions  
   → [Méthodologie du facteur d’ajustement](complexity.html)

4. **Facteur de pilotage / d’ajustement** (dérivé)  
   → [Facteur d’ajustement](adjustment-factor.html)

5. **Risque / exigences** (si activé)

Ces éléments déterminent ensemble le **profil d’effort de base**, avant la prise en compte des rôles et des prestations.

---

## Grandeur déterminante

La grandeur déterminante décrit **l’échelle du projet**, généralement sous forme de :

- surface de plancher brute (m²)

Points importants :
- toujours saisir la **grandeur totale du projet**,
- inclure les sous-sols et les surfaces communes,
- de petites variations peuvent avoir de grands effets.

Détails et erreurs fréquentes :
→ [Grandeur déterminante](quantity.html)

---

## Mix d’usages

Le mix d’usages indique à l’application **dans quel univers de référence se situe le projet**.

- Un ou plusieurs usages sont possibles.
- Les parts doivent totaliser 100 %.
- Les projets mixtes sont calculés comme des **combinaisons pondérées**.

L’usage sélectionne les modèles de base.  
Les facteurs d’ajustement expliquent les écarts *au sein* de ces modèles.

Exemples et définitions :
→ [Catégories d’usage](use-categories.html)

---

## Évaluation des facteurs d’ajustement

Les facteurs d’ajustement décrivent **à quel point la tâche de planification est prévisible et maîtrisable**, et non sa qualité ou son ambition.

La ValueApp évalue ces facteurs selon quatre dimensions :
- conception
- technique
- spatial
- organisationnel

Ces évaluations sont traduites en un **facteur de pilotage / d’ajustement**, qui modifie l’effort de base.

Contexte conceptuel :
→ [Méthodologie du facteur d’ajustement](complexity.html)  
→ [Facteur d’ajustement](adjustment-factor.html)

---

## Risques et exigences (optionnel)

Si activé, les indications de risque permettent de documenter :
- les incertitudes externes,
- les risques d’autorisation,
- l’instabilité des processus.

Le risque :
- élargit généralement la plage,
- ne modifie pas la logique de base.

Pour l’interprétation :
→ [Interpréter les résultats](output-interpretation.html)

---

## Conseils pratiques

- **Soyez explicite** : documentez les hypothèses dans la description du projet.
- **Utilisez des références** : comparez avec des projets similaires.
- **Ne corrigez pas ici** : ne « réparez » pas les résultats si le problème concerne en réalité le rôle ou les prestations.

La section projet sert à la **classification et à la plausibilisation**, pas à la négociation.

---

## Voir aussi

- [Tutorial](tutorial.html)
- [Grandeur déterminante](quantity.html)
- [Catégories d’usage](use-categories.html)
- [Méthodologie du facteur d’ajustement](complexity.html)
- [Facteur d’ajustement](adjustment-factor.html)
- [Interpréter les résultats](output-interpretation.html)
- [Pourquoi la ValueApp existe](why-valueapp.html)