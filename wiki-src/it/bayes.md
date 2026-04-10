---
i18nTitle: wiki.bayes.title
navKey: bayes
---

# Apprendimento bayesiano in ValueApp

L’apprendimento bayesiano descrive **come ValueApp combina conoscenze esistenti con dati reali di progetto**.

Permette al sistema di:

- partire da una base di riferimento strutturata,
- apprendere dai progetti osservati,
- aggiornare i risultati in modo controllato e trasparente.

---

## Cosa significa “bayesiano” (spiegato in modo semplice)

Alla base, il pensiero bayesiano risponde a una domanda:

> *«Come dovremmo adattare ciò che crediamo quando osserviamo nuovi dati?»*

Combina sempre due elementi:

- ciò che **ci aspettiamo già**  
- ciò che **osserviamo realmente**

In ValueApp questo significa:

- non partiamo da zero  
- non ci fidiamo ciecamente dei dati  
- **combiniamo entrambi**

---

## I due componenti

### 1. Prior (conoscenza esistente)

Il **prior** è ciò che sappiamo prima di considerare i dati attuali.

In ValueApp deriva da:

- studi (ad es. ETH),
- esperienza strutturata,
- curve di riferimento esistenti.

Definisce:

> *Come ci aspettiamo che un tipo di edificio si comporti nei diversi intervalli GF.*

---

### 2. Dati (progetti reali)

I dati comprendono:

- progetti reali,
- valori osservati,
- distribuzioni effettive in base alla dimensione degli edifici.

Mostrano:

> *Ciò che accade realmente nella pratica.*

---

## Il risultato: una stima aggiornata

L’apprendimento bayesiano combina prior e dati in un:

> **Posterior (risultato aggiornato)**

Questo è ciò che ValueApp mostra come **curva appresa**.

È:

- non puramente predefinita,
- non puramente guidata dai dati,
- ma una **combinazione di entrambe**.

---

## Perché è necessario

Se usassimo solo i prior:

- i risultati sarebbero stabili  
- ma scollegati dalla realtà  

Se usassimo solo i dati:

- i risultati sarebbero instabili  
- soprattutto con poche osservazioni  

L’apprendimento bayesiano risolve questo problema bilanciando entrambi.

---

## Come funziona la ponderazione

Il sistema regola automaticamente quanto fidarsi di ciascuna fonte.

### Quando sono disponibili molti dati

- il modello si basa maggiormente sui **progetti reali**  
- il risultato diventa più specifico  
- la curva segue il comportamento osservato  

### Quando sono disponibili pochi dati

- il modello si basa maggiormente sul **prior**  
- il risultato rimane stabile  
- si evitano variazioni irrealistiche  

In entrambi i casi:

> Il sistema rimane coerente, adattandosi dove possibile.

---

## Perché è importante per le tipologie edilizie

Non tutte le tipologie edilizie sono ugualmente rappresentate.

Alcune hanno:
- molti progetti  
- segnali di dati forti  

Altre hanno:
- pochissime osservazioni  
- informazioni incomplete  

L’apprendimento bayesiano consente a ValueApp di:

- fornire risultati per tutte le tipologie,  
- considerare in modo trasparente la disponibilità dei dati,  
- senza sovradattamento o “stima arbitraria”.

---

## Significato per gli intervalli GF

All’interno di ogni intervallo GF:

1. il modello parte dal valore di riferimento (prior),  
2. lo confronta con i dati reali,  
3. adatta il valore di conseguenza.  

Si ottiene così una curva che:

- segue il comportamento reale dove sono presenti dati,  
- e rimane stabile dove non lo sono.

---

## Cosa non è l’apprendimento bayesiano

Non è:

- una black box che inventa valori  
- un sostituto del giudizio professionale  
- un esercizio puramente statistico privo di struttura  

Al contrario:

- formalizza l’interazione tra esperienza e dati  
- e rende questa interazione coerente per tutte le tipologie edilizie  

---

## In una frase

> L’apprendimento bayesiano consente a ValueApp di partire da valori di riferimento esistenti e aggiornarli continuamente con dati reali di progetto.

---

## Perché migliora ValueApp

Grazie all’apprendimento bayesiano, il sistema diventa:

- più realistico → rappresenta meglio i progetti reali  
- più robusto → rimane stabile anche con pochi dati  
- più scalabile → funziona per tutte le tipologie edilizie  

Garantisce:

- che i nuovi dati migliorino i risultati,  
- senza scartare le conoscenze esistenti.

---

## Malintesi frequenti

Non bisogna assumere:

- che i prior vengano ignorati  
- che i dati sovrascrivano tutto  
- che più dati portino sempre a grandi cambiamenti  

In realtà:

- i prior restano la base  
- i dati li affinano  
- e il modello controlla il grado di adattamento  

---

## Vedi anche

- [Intervalli GF e curve apprese](gf-intervals.html)
- [Metodologia del fattore di adeguamento](complexity.html)
- [Variabili determinanti e sforzo di base](quantity.html)
- [Interpretazione dei risultati](output-interpretation.html)