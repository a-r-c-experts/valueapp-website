---
i18nTitle: wiki.reference.title
navKey: reference
---

# Référence

Ce chapitre constitue la **couche de consultation** : des pages concises et structurées que vous pouvez utiliser comme aide rapide pendant le travail dans l’application.

- **Tutoriel** = guide pas à pas  
- **Base de connaissances** = concepts et logique  
- **Référence** = « que signifie ce champ ? » et « comment lire ce résultat ? »

Si vous cherchez une aide cliquable étape par étape, consultez le [Tutoriel](tutorial.html) ou les [Workflows](workflows.html).

---

## Accès rapide

Utilisez cette section lorsque vous avez simplement besoin de trouver rapidement la bonne page.

### Projet (quantité, usages, complexité)
- **Quantité / déterminant** (ce qui compte, unités, erreurs fréquentes)  
  → [Quantité](quantity.html)

- **Catégories d’usage** (comment rattacher des projets réels aux usages)  
  → [Catégories d’usage](use-categories.html)

- **Vue d’ensemble des champs Projet** (fonctionnement conceptuel de l’onglet Projet)  
  → [Section Projet](project-section.html)

- **Dimensions de complexité** (ce que signifient « conceptuel / technique / spatial / organisationnel »)  
  → [Complexité](complexity.html)

- **Facteur d’ajustement / de pilotage** (ce qu’il reflète et ce qu’il ne fait pas)  
  → [Facteur d’ajustement](adjustment-factor.html)

### Prestations (rôles, phases, prestations supplémentaires)
- **Rôles et prestations** (impact du choix du rôle, signification des prestations de base)  
  → [Rôles et prestations](roles-and-services.html)

### Résultats (heures, plages, répartition par phase)
- **Lire les résultats** (heures, plages, répartitions, ce qu’il ne faut pas affirmer)  
  → [Interprétation des résultats](output-interpretation.html)

### Finalité et limites
- **Ce que ValueApp est (et n’est pas)** (éviter le malentendu du « calculateur d’honoraires »)  
  → [Ce que ValueApp est – et ce qu’il n’est pas](why-valueapp.html)

---

## Ce qui relève de la Référence (et ce qui n’en relève pas)

Les pages de référence doivent être :

- **précises** (un terme = une signification),
- **structurées** (pour la recherche et les assistants futurs),
- **dépourvues de langage marketing**,
- **claires sur les limites** (ce qu’un champ *ne fait pas*).

Les pages de référence ne doivent **pas** être :
- un chapitre théorique complet (voir la [Base de connaissances](knowledge-base.html)),
- un workflow (voir les [Workflows](workflows.html)),
- un document de présentation ou de vente (voir [Pourquoi ValueApp existe](why-valueapp.html)).

---

## Pages de référence prévues

Ces pages devraient à terme être intégrées ici. Les titres sont formulés de manière à pouvoir devenir des fichiers Markdown distincts.

### Référence des entrées et paramètres
Objectif : expliquer chaque champ de saisie de l’interface selon une structure cohérente.

Structure recommandée par champ :
- **Définition**
- **Emplacement** (onglet / section)
- **Impact**
- **Erreurs fréquentes**
- **Concepts associés** (liens)

Pages prévues :
- **Onglet Description – champs et signification** (identité du projet, statut, tâche, organisation)
- **Onglet Projet – champs et signification** (quantité, usages, complexité, risque)
- **Onglet Prestations – champs et signification** (rôle, thèmes clés, répartition par phase, prestations supplémentaires)

En attendant, utilisez :
- [Section Projet](project-section.html)
- [Rôles et prestations](roles-and-services.html)
- [Tutoriel](tutorial.html)

---

### Référence d’interprétation des résultats
Objectif : éviter les mauvaises utilisations et rendre les plages d’effort non négociables.

Pages prévues :
- **Heures et plages** (signification et communication)
- **Répartition par phase** (ce que signifient les variations, ce qui reste constant)
- **min/m² et indicateurs dérivés** (interprétation et limites)
- **Comparaison de projets** (ce qui est comparable et ce qui ne l’est pas)

En attendant, utilisez :
- [Interprétation des résultats](output-interpretation.html)

---

### Référence technique et intégration
Objectif : fournir tout ce qui est nécessaire pour intégrer ValueApp comme widget.

Pages prévues :
- **Intégration du widget** (emplacement, dimensions, responsive)
- **Formats de données et callbacks** (métadonnées, événements, export)
- **Authentification / accès** (le cas échéant)
- **Résumé d’implémentation** (basé sur le dépôt d’intégration public)

Point d’entrée actuel :
- Dépôt d’intégration public : https://github.com/a-r-c-experts/core-value-integration

---

### Versions et notes de version
Objectif : assurer la traçabilité des changements affectant les résultats, l’interface ou les hypothèses.

Pages prévues :
- **Notes de version** (chronologiques, concises, orientées utilisateur)
- **Évolutions du modèle** (modifications des modèles de base ou de la calibration)
- **Limitations connues** (éléments volontairement non couverts à ce stade)

---

## Voir aussi

- [Tutoriel](tutorial.html)
- [Workflows](workflows.html)
- [Base de connaissances](knowledge-base.html)
- [Support](support.html)