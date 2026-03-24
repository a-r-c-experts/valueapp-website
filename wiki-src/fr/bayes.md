---
i18nTitle: wiki.bayes.title
navKey: bayes
---

# Apprentissage bayésien dans ValueApp

L’apprentissage bayésien décrit **comment ValueApp combine les connaissances existantes avec les données réelles des projets**.

Il permet au système de :

- partir d’une référence structurée,
- apprendre à partir des projets observés,
- et mettre à jour les résultats de manière contrôlée et transparente.

---

## Ce que signifie « bayésien » (en termes simples)

Au fond, le raisonnement bayésien répond à une question :

> *« Comment devons-nous mettre à jour ce que nous croyons lorsque nous voyons de nouvelles données ? »*

Il combine toujours deux éléments :

- ce que nous **attendons déjà**  
- ce que nous **observons réellement**

Dans ValueApp, cela signifie :

- nous ne partons pas de zéro  
- et nous ne faisons pas confiance aux données aveuglément  
- nous **combinons les deux**

---

## Les deux composantes

### 1. Prior (connaissance existante)

Le **prior** correspond à ce que nous savons avant d’observer les données actuelles.

Dans ValueApp, cela provient de :

- études (p. ex. travaux de l’ETH),
- expérience structurée,
- courbes de référence établies.

Il définit :

> *Ce que nous attendons du comportement d’un type de bâtiment selon les intervalles de GF.*

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

L’apprentissage bayésien combine le prior et les données pour produire :

> un **posterior (résultat mis à jour)**

C’est ce que ValueApp affiche comme **courbe apprise**.

Elle est :

- ni purement prédéfinie,
- ni purement issue des données,
- mais une **combinaison des deux**.

---

## Pourquoi c’est nécessaire

Si nous utilisions uniquement les priors :

- les résultats seraient stables  
- mais déconnectés de la réalité  

Si nous utilisions uniquement les données :

- les résultats seraient instables  
- surtout avec peu d’observations  

L’approche bayésienne équilibre ces deux aspects.

---

## Comment l’équilibre fonctionne

Le système ajuste automatiquement le poids de chaque source.

### Lorsqu’il y a beaucoup de données

- le modèle s’appuie davantage sur les **projets réels**  
- le résultat devient plus spécifique  
- la courbe reflète le comportement observé  

### Lorsqu’il y a peu de données

- le modèle s’appuie davantage sur le **prior**  
- le résultat reste stable  
- les variations irréalistes sont évitées  

Dans tous les cas :

> Le système reste cohérent tout en s’adaptant lorsque c’est possible.

---

## Pourquoi c’est important pour les types de bâtiments

Tous les types de bâtiments ne sont pas représentés de manière égale.

Certains ont :
- beaucoup de projets  
- des signaux forts dans les données  

D’autres ont :
- très peu d’observations  
- des informations incomplètes  

L’apprentissage bayésien permet à ValueApp de :

- produire des résultats pour tous les types de bâtiments,  
- refléter clairement la disponibilité des données,  
- sans surajustement ni estimation arbitraire.

---

## Ce que cela signifie pour les intervalles de GF

Dans chaque intervalle de GF, le modèle :

1. commence avec la valeur de référence (prior),  
2. la compare aux données réelles,  
3. ajuste la valeur en conséquence.  

Cela produit une courbe qui :

- suit le comportement réel là où les données existent,  
- et reste stable là où elles manquent.

---

## Ce que l’apprentissage bayésien n’est pas

Ce n’est pas :

- une boîte noire qui invente des valeurs  
- un remplacement du savoir métier  
- un exercice purement statistique sans structure  

Au contraire :

- il formalise l’interaction entre expérience et données  
- et la rend cohérente pour tous les types de bâtiments  

---

## En une phrase

> L’apprentissage bayésien permet à ValueApp de partir de références établies et de les mettre à jour en continu à partir de données réelles de projets.

---

## Pourquoi cela améliore ValueApp

Avec l’apprentissage bayésien, le système devient :

- plus réaliste → reflète les projets réels  
- plus robuste → reste stable même avec peu de données  
- plus scalable → fonctionne pour tous les types de bâtiments  

Il garantit que :

- les nouvelles données améliorent les résultats,  
- sans jamais supprimer les connaissances existantes.

---

## Malentendus fréquents

Ne pas supposer :

- que les priors sont ignorés  
- que les données remplacent tout  
- que plus de données signifie forcément de grands changements  

Au contraire :

- les priors restent la base  
- les données les affinent  
- et le modèle contrôle l’ampleur des ajustements  

---

## Voir aussi

- [Intervalles de GF et courbes apprises](gf-intervals.html)
- [Dimensions de complexité](complexity.html)
- [Quantité et effort de base](quantity.html)
- [Interprétation des résultats](output-interpretation.html)