---
i18nTitle: wiki.gfIntervals.title
navKey: gf-intervals
---

# Intervalli GF e curve apprese

Gli intervalli GF descrivono **come i valori cambiano in funzione della dimensione degli edifici**.

Invece di assegnare un unico valore a un’intera tipologia edilizia, la ValueApp valuta i progetti **per intervalli di superficie di piano (SP)** e costruisce una curva su questi intervalli.

Questo permette al sistema di rappresentare una realtà semplice:

> *Gli edifici piccoli si comportano diversamente da quelli grandi.*

---

## Cosa significano gli intervalli GF nella ValueApp

Nella ValueApp, gli intervalli GF sono:

- **intervalli di dimensione degli edifici** (ad es. piccolo, medio, grande),
- utilizzati per raggruppare progetti comparabili,
- e per calcolare valori in **condizioni dimensionali simili**.

Rispondono alla domanda:

> *«Come si comporta questa tipologia edilizia a diverse dimensioni?»*

Non:
- qual è il valore esatto di un singolo progetto,
- né qual è la media su tutte le dimensioni.

---

## L’approccio precedente (valori di riferimento)

In precedenza, la ValueApp lavorava principalmente con **intervalli di riferimento**.

- Questi erano basati su **priors**  
- Derivati da studi, esperienza e ipotesi strutturate  
- Rappresentati nell’app come una **linea nera**

Questi valori di riferimento erano:

- stabili,
- coerenti,
- ma non direttamente appresi da dati di progetto.

Definivano il comportamento atteso sugli intervalli GF.

---

## Il nuovo approccio (apprendimento dai dati)

Con il nuovo aggiornamento, la ValueApp introduce un cambiamento fondamentale:

> I valori non sono più solo definiti — vengono **appresi**.

Il sistema:

1. parte dagli intervalli di riferimento esistenti (priors),
2. considera **dati di progetti reali**,
3. e apprende come ogni tipologia edilizia si comporta sugli intervalli GF.

Il risultato:

- una **curva informata dai dati** invece di una puramente predefinita,
- adattata per ogni tipologia edilizia,
- e comunque ancorata alla logica di riferimento originale.

---

## Cosa si vede nella visualizzazione

Un risultato tipico contiene tre elementi:

- **Linea nera**  
  → riferimento precedente (priors)

- **Punti**  
  → progetti reali

- **Linee tratteggiate colorate**  
  → valori appresi per livello di requisito

Questo mostra chiaramente:

- dove la realtà corrisponde al riferimento,
- dove se ne discosta,
- e come il sistema si adatta.

---

## Perché gli intervalli GF sono essenziali

Senza intervalli GF, il sistema assumerebbe:

- un unico valore per tipologia edilizia,
- indipendentemente dalla dimensione.

Questo ignorerebbe:

- effetti di scala,
- differenze di efficienza,
- cambiamenti strutturali e organizzativi legati alla dimensione.

Gli intervalli GF permettono al modello:

- di rappresentare questi effetti,
- e di descrivere una **curva invece di un punto**.

---

## Come funziona l’apprendimento tra tipologie edilizie

Non tutte le tipologie edilizie hanno la stessa quantità di dati.

Alcune sono ben rappresentate.  
Altre sono rare.

Il sistema gestisce questa situazione combinando:

- la **curva di riferimento (priors)**,
- **progetti reali della stessa tipologia edilizia**,
- e **tipologie affini all’interno dello stesso gruppo**.

Questo significa:

- Con molti dati → la curva diventa più specifica  
- Con pochi dati → la curva resta più vicina al riferimento  

In entrambi i casi:

> Il risultato rimane stabile, ma diventa più basato sui dati dove possibile.

---

## Cosa significa nella pratica

Il cambiamento principale è:

Prima:
- il riferimento definiva il risultato  

Oggi:
- il riferimento è il punto di partenza,
- e il sistema **apprende da progetti reali**

Questo permette alla ValueApp di:

- adattarsi alla pratica reale,
- rappresentare le differenze tra tipologie edilizie,
- e migliorare continuamente con l’aumento dei dati.

---

## Malintesi frequenti

Non si deve assumere:

- che i valori di riferimento vengano rimossi  
- che il sistema inventi liberamente valori  
- che più dati portino sempre a risultati completamente diversi  

Al contrario:

- il riferimento resta la base  
- il modello lo adatta in modo controllato  
- e l’apprendimento avviene **all’interno di una struttura chiara**

---

## In una frase

> La ValueApp ora apprende come ogni tipologia edilizia si comporta sugli intervalli GF combinando conoscenza di riferimento e dati reali di progetto.

---

## Vedi anche

- [Metodologia fattore di adeguamento](complexity.html)
- [Grandezza determinante e sforzo di base](quantity.html)
- [Fattore di adeguamento (leadership)](adjustment-factor.html)
- [Interpretazione dei risultati](output-interpretation.html)