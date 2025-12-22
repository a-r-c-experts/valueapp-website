---
i18nTitle: wiki.projectSection.title
i18nSubtitle: wiki.projectSection.subtitle
navKey: wiki.nav.projectSection
---

# Section Projet

L’onglet **Project (Projekt)** est l’endroit où la ValueApp transforme « Qu’est-ce que c’est ? » en « Quelle plage d’effort est plausible ? ».  
Pour cela, elle combine :

- un **déterminant / une quantité** mesurable (généralement des m² de surface brute de plancher),
- un **mix d’usages** (pour combiner les bons modèles de base),
- une **évaluation structurée de la complexité** (cartographiée sur le Leadership Framework),
- et, selon votre configuration, des saisies de **risque / exigences**.

Cette page explique les champs de manière conceptuelle. Pour une version « clic ici, saisis ça », utilisez le [Tutoriel](tutorial.html).

---

## Ce qui se passe dans la section Projet

Dans la section **Project**, la ValueApp génère une première prévision de l’effort en temps attendu (souvent affichée en **min/m²** sur la base de la quantité choisie) à partir :

- de **modèles de base** (modèles par type d’usage construits à partir de projets de référence),
- et d’un **facteur d’ajustement** dérivé de votre évaluation de la complexité (souvent appelé *degré de complexité* ou **AF_quality**).

Vous pouvez ajuster les prévisions générées à tout moment. Les meilleurs résultats viennent toutefois d’hypothèses explicites et cohérentes.

Pour la logique « sous le capot », voir [Fonctionnement de l’application](how-it-works.html).  
Si des termes comme déterminant, modèle de base ou AF_quality restent flous, commencez par [Définitions](definitions.html).

---

## Ce que vous définissez ici

1. **Déterminant / quantité** (généralement m² de surface brute de plancher)
2. **Mix d’usages** (logement, travail, enseignement, etc.)
3. **Complexité** sur quatre dimensions (conception, technique, spatial, organisationnel)
4. **Risque / exigences** (si votre version inclut ce concept)
5. Champs contextuels optionnels comme les **coûts attendus** (si présents dans votre configuration)

Ces saisies pilotent la sélection des modèles de base et les facteurs d’ajustement qui déplacent les résultats dans la plage de prédiction.

---

## Déterminant et quantité

### Surface (FA / surface brute de plancher)

Dans le champ de définition du projet, saisissez la **surface** approximative sur l’ensemble des usages en **m²**.

Si vous disposez déjà d’un programme de surfaces, mentionnez-le dans la description. Il est recommandé de documenter le calcul des surfaces de manière transparente, en particulier pour les autres parties prenantes et le client.

**Important :** la surface saisie influence directement l’effort calculé.  
De petites variations de surface peuvent déplacer sensiblement le résultat.

---

## Coûts attendus (optionnel)

Les coûts attendus sont optionnels et n’influencent en général **pas** la prévision d’effort en temps.  
Ils sont généralement compris comme le budget du client.

Dans de nombreuses configurations, la ValueApp sert de vérification de plausibilité pour des décisions liées à :

- la mission et le périmètre,
- les déterminants,
- le mix d’usages,
- la complexité.

---

## Mix d’usages

Vous devez préciser le(s) **usage(s)** du projet.

Vous pouvez sélectionner plusieurs usages (y compris des usages répétés) et attribuer des parts relatives.  
En arrière-plan, la ValueApp combine les modèles de base correspondants et génère une première prévision.

**Idée clé :** le mix d’usages indique à l’application dans quel « monde de référence » se situe votre projet.  
Un projet mixte n’est pas « un seul modèle avec une étiquette étrange », mais une **combinaison pondérée** de modèles.

Pour calibrer, comparez votre cas aux [Exemples](examples.html).

---

## Évaluation de la complexité

La complexité n’est pas « grand vs petit ». Elle décrit la prévisibilité du travail et la clarté des relations de cause à effet.

La ValueApp utilise le **Leadership Framework** pour traduire votre évaluation en **AF_quality** (ou un facteur d’ajustement similaire). Vous décrivez des défis selon quatre dimensions :

- **conception**
- **technique**
- **spatial**
- **organisationnel**

Le but n’est pas de trouver la seule « bonne » étiquette. Le but est de rendre les hypothèses **explicites et discutables**.

Pour une explication plus approfondie de AF_quality, commencez par [Définitions](definitions.html) et [Fonctionnement de l’application](how-it-works.html).

---

## Conseils pratiques

- **Soyez explicite :** notez les moteurs clés dans la description du projet (contraintes, parties prenantes, exigences particulières).
- **Calibrez avec des références :** comparez votre projet aux [Exemples](examples.html).
- **Utilisez l’outil pour structurer la discussion, pas pour l’éviter :** la valeur est la transparence, pas de faire semblant que l’incertitude n’existe pas.

---

## Programmes de bâtiments par catégorie d’usage

Les listes ci-dessous donnent des exemples de ce qui relève typiquement de chaque catégorie d’usage.  
Elles ne constituent pas une taxonomie parfaite, mais un guide pratique pour relier des projets réels à la structure des modèles.

### 1 Logement *(Habitation, sport et loisirs)*

- Logements temporaires  
- Immeubles d’habitation  
- Maisons mitoyennes  
- Maisons de week-end  
- Copropriétés  
- Maisons individuelles  
- Maisons de vacances  
- Logements pour seniors  
- Résidences pour personnes âgées  
- Résidences étudiantes  
- Résidences d’apprentis  
- Refuges de montagne  
- Campings  
- Chalets/clubs  
- Gymnases  
- Salles de sport  
- Salles polyvalentes  
- Infrastructures de stade  
- Terrains de sport  
- Bâtiments de tribunes  
- Bâtiments de vestiaires  
- Bowling  
- Patinoires en plein air  
- Piscines extérieures  
- Patinoires artificielles couvertes  
- Piscines couvertes  
- Manèges  
- Hangars à bateaux  
- Installations de tir  
- Centres de loisirs  
- Centres de jeunesse  
- Parcs  
- Aires de jeux  
- Jardins zoologiques  
- Jardins botaniques  
- Bâtiments pour animaux  
- Serres  

---

### 2 Travail *(Services et fonctions publiques)*

- Maisons de soins infirmiers  
- Maisons de prise en charge  
- Foyers pour enfants  
- Foyers pour jeunes  
- Blanchisseries centrales  
- Refuges pour animaux  
- Stations vétérinaires  
- Hôpitaux vétérinaires  
- Bâtiments de commerce de détail sans aménagement de base  
- Bâtiments de commerce de détail avec aménagement de base  
- Grands magasins  
- Centres commerciaux  
- Halles de marché  
- Bureaux simples  
- Bureaux avec exigences plus élevées  
- Bâtiments administratifs  
- Banques  
- Bâtiments communaux  
- Hôtels de ville  
- Palais de justice  
- Bâtiments opérationnels de police  
- Centres de détention  
- Établissements pénitentiaires  
- Crèches  
- Ateliers protégés  
- Églises  
- Chapelles  
- Salles funéraires  
- Centres paroissiaux  
- Installations de cimetière  
- Crématoriums  
- Monastères  
- Maisons d’aide sociale  
- Clubhouses  
- Centres culturels  
- Salles de fête  
- Restaurants  
- Hôtels  
- Motels  
- Hôtels (service limité)  
- Motels (service limité)  
- Cantines  
- Grandes cuisines indépendantes  
- Auberges  
- Auberges de jeunesse  
- Aires de service  
- Cafétérias  
- Salons de thé  
- Postes de douane autoroutiers  
- Stations-service  
- Halls d’attente avec locaux de service  
- Postes de douane  
- Terminaux de bus  
- Gares  
- Bâtiments d’exploitation ferroviaire  
- Stations de téléphérique  
- Aéroports  
- Installations portuaires  
- Bureaux de poste  
- Centrales téléphoniques  
- Bâtiments d’exploitation postale  
- Bâtiments de télécommunications  
- Centres de données  
- Casernes  
- Armureries  
- Installations publiques de protection civile  
- Postes de commandement  
- Installations de mise en place  
- Postes de premiers secours  
- Centres d’aide médicale  
- Salles d’opération protégées  
- Hôpitaux d’urgence  
- Centres de formation de la protection civile  
- Casernes de pompiers  

---

### 3 Production

- Halles industrielles  
- Bâtiments de production pour l’industrie des matières premières  
- Bâtiments de production pour l’industrie lourde  
- Bâtiments de production pour l’industrie mécanique  
- Bâtiments de production pour la mécanique de précision  
- Bâtiments de production pour l’industrie de transformation  
- Bâtiments de production pour l’industrie agroalimentaire  
- Bâtiments d’exploitation  
- Bâtiments commerciaux  
- Ateliers  
- Étables  
- Installations de production agricole  
- Abattoirs  
- Chaufferies  
- Réseaux de chauffage à distance  
- Bâtiments de centrales électriques  
- Stations de traitement de l’eau  
- Stations d’épuration des eaux usées  
- Usines d’incinération des déchets  
- Dépôts de stockage de carburant  

---

### 4 Stockage *(Stockage et distribution, stationnement)*

- Halles de stockage  
- Bâtiments de stockage à plusieurs niveaux  
- Stockage mécanisé  
- Entrepôts frigorifiques  
- Silos  
- Centres de distribution (alimentaire)  
- Centres de distribution (non-alimentaire)  
- Hangars  
- Cabanes  
- Locaux de stockage de fourrage  
- Serres  
- Garages de plain-pied  
- Parkings souterrains  
- Parkings à étages en surface  
- Bâtiments liés au trafic routier  
- Dépôts/centres d’exploitation  
- Dépôts ferroviaires  
- Dépôts de tram  
- Zones piétonnes  
- Rues résidentielles  

---

### 5 Enseignement et recherche *(Éducation, enseignement, culture, recherche)*

- Crèches  
- Jardins d’enfants  
- Écoles primaires  
- Écoles secondaires  
- Écoles professionnelles  
- Écoles techniques supérieures  
- Collèges  
- Lycées  
- Écoles polyvalentes  
- Écoles spécialisées  
- Écoles de rattrapage  
- Universités  
- Établissements d’enseignement supérieur  
- Bibliothèques  
- Archives d’État  
- Instituts de recherche sans laboratoires  
- Instituts de recherche avec laboratoires  
- Bâtiments de laboratoires pour l’industrie  
- Bâtiments de laboratoires pour l’artisanat  
- Halls d’exposition temporaires  
- Bâtiments d’exposition  
- Pavillons  
- Musées locaux  
- Galeries d’art  
- Musées  
- Petits théâtres  
- Salles de concert  
- Bâtiments de théâtre  
- Kiosques à musique  
- Cinémas  
- Discothèques  
- Salles d’assemblée  
- Centres de congrès  
- Studios radio  
- Studios TV  
- Studios de cinéma  

---

### 6 Soins et prise en charge

- Cabinets médicaux  
- Centres médicaux  
- Hôpitaux  
- Ailes d’hospitalisation  
- Ailes de traitement  
- Cliniques universitaires  
- Maisons de retraite / EMS  
- Centres de réadaptation  
- Sanatoriums  
- Stations thermales  
- Instituts spécialisés  

---

## Voir aussi

- [Définitions et concepts clés](definitions.html)  
- [Fonctionnement de l’application](how-it-works.html)  
- [Exemples](examples.html)  
- [Tutoriel](tutorial.html)  
- [Pourquoi la ValueApp existe](why-valueapp.html)