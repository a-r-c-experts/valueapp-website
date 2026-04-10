---
i18nTitle: wiki.bayes.title
navKey: bayes
---

# Apprentissage bayésien dans ValueApp

L’apprentissage bayésien décrit **comment ValueApp combine les connaissances existantes avec des données réelles de projets**.

Il permet au système de :

- partir d’une référence structurée,
- apprendre à partir de projets observés,
- et mettre à jour les résultats de manière contrôlée et transparente.

---

## Que signifie « bayésien » (explication simple)

Au cœur, le raisonnement bayésien répond à une question :

> *« Comment devons-nous ajuster ce que nous pensons lorsque nous observons de nouvelles données ? »*

Il combine toujours deux éléments :

- ce que nous **attendons déjà**  
- ce que nous **observons réellement**

Dans ValueApp, cela signifie :

- nous ne partons pas de zéro  
- et nous ne faisons pas confiance aveuglément aux données  
- nous **combinons les deux**

---

## Les deux composantes

### 1. Prior (connaissance existante)

Le **prior** correspond à ce que nous savons avant d’observer les données actuelles.

Dans ValueApp, il provient de :

- études (par ex. ETH),
- expérience structurée,
- courbes de référence existantes.

Il définit :

> *Comment nous attendons qu’un type de bâtiment se comporte selon les intervalles de GF.*

---

### 2. Données (projets réels)

Les données comprennent :

- des projets réels,
- des valeurs observées,
- des distributions réelles selon la taille des bâtiments.

Elles montrent :

> *Ce qui se passe réellement en pratique.*

---

## Le résultat : une estimation mise à jour

L’apprentissage bayésien combine prior et données en un :

> **Posterior (résultat actualisé)**

C’est ce que ValueApp affiche sous forme de **courbe apprise**.

Elle est :

- ni purement prédéfinie,
- ni purement basée sur les données,
- mais une **combinaison des deux**.

---

## Pourquoi cela est nécessaire

Si nous utilisions uniquement des priors :

- les résultats seraient stables  
- mais déconnectés de la réalité  

Si nous utilisions uniquement des données :

- les résultats seraient instables  
- surtout avec peu d’observations  

L’apprentissage bayésien équilibre ces deux aspects.

---

## Comment fonctionne la pondération

Le système ajuste automatiquement le niveau de confiance accordé à chaque source.

### Lorsque de nombreuses données sont disponibles

- le modèle s’appuie davantage sur les **projets réels**  
- le résultat devient plus spécifique  
- la courbe suit le comportement observé  

### Lorsque peu de données sont disponibles

- le modèle s’appuie davantage sur le **prior**  
- le résultat reste stable  
- les variations irréalistes sont évitées  

Dans les deux cas :

> Le système reste cohérent tout en s’adaptant lorsque cela est possible.

---

## Pourquoi c’est important pour les types de bâtiments

Tous les types de bâtiments ne sont pas également bien représentés.

Certains ont :
- de nombreux projets  
- des signaux de données forts  

D’autres ont :
- très peu d’observations  
- des informations incomplètes  

L’apprentissage bayésien permet à ValueApp de :

- fournir des résultats pour tous les types de bâtiments,  
- prendre en compte la disponibilité des données de manière transparente,  
- sans surajustement ni « estimation arbitraire ».

---

## Importance pour les intervalles GF

Dans chaque intervalle GF :

1. le modèle part de la valeur de référence (prior),  
2. la compare aux données réelles,  
3. ajuste la valeur en conséquence.  

Cela produit une courbe qui :

- suit le comportement réel là où des données existent,  
- et reste stable là où ce n’est pas le cas.

---

## Ce que l’apprentissage bayésien n’est pas

Ce n’est pas :

- une boîte noire qui invente des valeurs  
- un remplacement de l’expertise professionnelle  
- un exercice purement statistique sans structure  

Au contraire :

- il formalise l’interaction entre expérience et données  
- et rend cette interaction cohérente pour tous les types de bâtiments  

---

## En une phrase

> L’apprentissage bayésien permet à ValueApp de partir de valeurs de référence existantes et de les mettre à jour en continu à l’aide de données réelles.

---

## Pourquoi cela améliore ValueApp

Grâce à l’apprentissage bayésien, le système devient :

- plus réaliste → reflète mieux les projets réels  
- plus robuste → reste stable même avec peu de données  
- plus évolutif → fonctionne pour tous les types de bâtiments  

Il garantit :

- que les nouvelles données améliorent les résultats,  
- sans abandonner les connaissances existantes.

---

## Idées reçues fréquentes

Il ne faut pas supposer :

- que les priors sont ignorés  
- que les données remplacent tout  
- que plus de données implique toujours de grands changements  

En réalité :

- les priors restent la base  
- les données les affinent  
- et le modèle contrôle le degré d’ajustement  

---

## Voir aussi

- [Intervalles GF et courbes apprises](gf-intervals.html)
- [Méthodologie du facteur d’ajustement](complexity.html)
- [Variables déterminantes et effort de base](quantity.html)
- [Interprétation des résultats](output-interpretation.html)