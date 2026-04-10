---
i18nTitle: wiki.definitions.title
i18nSubtitle: wiki.definitions.subtitle
navKey: wiki.nav.definitions
---

# Definizioni e concetti chiave

Questa pagina spiega i concetti fondamentali della ValueApp e della ETH Value Method: **modelli di base**, **determinanti**, **fattori di adeguamento**, il **Leadership Framework**, nonché la loro interazione per formare un **corridoio di sforzo trasparente**.

Se desideri lavorare in modo pratico, puoi accedere direttamente al [tutorial](tutorial.html) o consultare gli [esempi](examples.html).  
Per una visione concettuale completa, vedi [Come funziona l’app](how-it-works.html).

---

## Cosa fa la ValueApp

La ValueApp stima lo sforzo di pianificazione (ore) per diverse discipline sulla base di **determinanti trasparenti e documentati**.

Invece dei costi di costruzione, utilizza grandezze misurabili come la **superficie lorda di piano** e le collega a **modelli di base statistici** derivati da progetti realizzati.

La complessità e il contesto specifici del progetto vengono integrati tramite **fattori di adeguamento**, derivati dal **Leadership Framework for Decision Making**.  
Il risultato è un **corridoio di sforzo plausibile e trasparente**, che può essere documentato, discusso e comunicato.

---

## Formula di base (semplificata)

In forma semplificata, il metodo può essere espresso come:

**Sforzo (h) = LI × Determinante × AF<sub>Qualità</sub> × AF<sub>Progetto/Processo</sub>**

Dove:

- **LI** è lo sforzo base per unità (ad es. minuti per m² di superficie lorda di piano) derivato dal modello statistico.  
- La **determinante** è una grandezza di scala misurabile e trasparente, tipicamente m² di superficie lorda di piano (SLP).  
- **AF<sub>Qualità</sub>** è un fattore di adeguamento derivato dal Leadership Framework, basato su sfide progettuali, tecniche, spaziali e organizzative.  
- **AF<sub>Progetto/Processo</sub>** rappresenta ulteriori adeguamenti specifici di progetto o di processo, dove opportuno.

La maggior parte di questi dati viene definita nella [sezione progetto](project-section.html).

---

## Modelli di base e determinanti

I modelli di base sono costruiti a partire da **progetti di riferimento realizzati**.  
Per ogni tipologia d’uso collegano una determinante (generalmente m² SLP) a **intervalli di sforzo**.

Questi intervalli coprono di norma circa **l’80% dei progetti comparabili** e sono suddivisi in **decili**, rendendo visibile la dispersione invece di nasconderla dietro un unico valore.

![Referenzwolke Wohnungsbau](/wiki-assets/base-model-housing-reference-cloud.jpeg)

*Progetti di riferimento e intervalli previsionali per edifici residenziali e affini.*

![Mehrfamilienhaus im Prognoseintervall](/wiki-assets/base-model-mfh-example.jpeg)

*Esempio: edificio plurifamiliare all’interno dell’intervallo di previsione dell’80% per una data superficie lorda di piano.*

Attualmente, la ValueApp utilizza modelli di base per le seguenti categorie d’uso:

- Abitare e tempo libero  
- Lavoro  
- Produzione  
- Stoccaggio  
- Formazione e ricerca  
- Cura e assistenza  

Tutti i modelli assumono **100% di prestazioni di base** per la disciplina considerata.

---

## Leadership Framework e complessità

Il **Leadership Framework for Decision Making** classifica le situazioni in base alla chiarezza delle relazioni causa-effetto.  
Distingue tra contesti **semplici**, **complicati**, **complessi** e **caotici**, suggerendo approcci diversi.

![Leadership Framework Übersicht](/wiki-assets/leadership-framework-overview.jpeg)

*Leadership Framework: dai contesti semplici a quelli complicati, complessi e caotici.*

Nella ValueApp, le sfide specifiche del progetto sono descritte in quattro dimensioni:

- **progettuale**,  
- **tecnica**,  
- **spaziale**,  
- **organizzativa**.

Queste dimensioni vengono posizionate nel framework. Il loro “centro di gravità” comune determina il valore di **AF<sub>Qualità</sub>**.

![Leadership Framework mit Schwerpunkt](/wiki-assets/leadership-framework-centre-of-gravity.jpeg)

*Sfide specifiche del progetto nel framework; il centro di gravità determina il fattore di adeguamento.*

Questa logica è esplicita e discutibile – nessuna calibrazione nascosta.

---

## Fattori di adeguamento

I fattori di adeguamento rappresentano la complessità e il contesto che non possono essere catturati dalla sola determinante.

### AF<sub>Qualità</sub>

AF<sub>Qualità</sub> deriva dal Leadership Framework e descrive l’effetto combinato delle sfide progettuali, tecniche, spaziali e organizzative.

### AF<sub>Progetto/Processo</sub>

Fattori aggiuntivi tengono conto delle condizioni specifiche di progetto e di processo, come il modello di appalto, la forma di collaborazione, le restrizioni, la suddivisione in fasi o particolari requisiti contrattuali.

---

## Intervalli di previsione

Un **intervallo di previsione** descrive un intervallo che copre la maggior parte dei progetti comparabili, tipicamente circa l’80%.

Non è né una garanzia né un valore obiettivo, ma una rappresentazione strutturata di **incertezza e variabilità** basata su dati reali.

---

## Struttura della ValueApp

La ValueApp è suddivisa in quattro schede principali:

- **Descrizione** – contesto del progetto, indirizzo, organizzazione e stato  
- **Progetto** – determinante, mix di utilizzi, complessità e rischio  
- **Prestazioni** – ruolo, temi principali e ore per fase  
- **Sintesi** – riepilogo consolidato per comunicazione e documentazione  

![Architekturübersicht der ValueApp](/wiki-assets/valueapp-architecture-overview.jpeg)

*La ValueApp collega descrizione del progetto, determinanti, fattori di adeguamento e prestazioni in un modello coerente.*

---

## Campi nell’applicazione – utilizzo raccomandato

### Descrizione

Utilizzare titolo e indirizzo del progetto per una chiara identificazione nei report e nei sistemi interni.  
La descrizione dovrebbe riassumere brevemente il contesto, l’incarico, le condizioni principali e gli aspetti rilevanti per la complessità.

### Progetto

Definire la determinante (tipicamente m² SLP) e distribuirla tra gli utilizzi pertinenti.  
Valutare i fattori di adeguamento nelle quattro dimensioni e impostare il livello di requisito (**basso**, **standard**, **alto**, **molto alto**).

Ulteriori indicazioni sono disponibili nella [sezione progetto](project-section.html).

### Prestazioni

Selezionare il proprio ruolo contrattuale e identificare i temi principali.  
Verificare le ore calcolate per il 100% delle prestazioni di base e la loro distribuzione nelle fasi.  
Adattare le quote di fase, se necessario, con adeguata motivazione.

### Sintesi

La sintesi riunisce tutti i dati e i risultati in una visione coerente e comprensibile.  
È destinata a offerte di onorari, documenti di controllo o procedure di gara.

---

## Glossario

**Determinante (grandezza determinante)**  
Grandezza misurabile che guida il modello di base, generalmente la superficie lorda di piano.

**Modello di base**  
Modello statistico che collega le determinanti ai corridoi di sforzo per il 100% delle prestazioni di base.

**Intervallo di previsione**  
Intervallo che copre la maggior parte dei progetti comparabili (~80%), suddiviso in decili.

**AF Qualità**  
Fattore di adeguamento derivato dal Leadership Framework.

**Prestazioni di base**  
Prestazioni standard secondo normative professionali (es. SIA), assunte al 100%.

**Prestazioni aggiuntive**  
Prestazioni specifiche di progetto al di fuori delle prestazioni di base, documentabili separatamente.

---

<div class="wiki-aside-card">
  <h3>Fondamenti metodologici</h3>
  <p>
    La Value Method e la ValueApp si basano su ricerche condotte presso l’ETH di Zurigo
    e vengono sviluppate insieme a partner della pratica e associazioni professionali.
    I modelli di riferimento vengono continuamente aggiornati con progetti realizzati.
  </p>
</div>

<div class="wiki-aside-card">
  <h3>Nota per gli utenti</h3>
  <p>
    Nell’uso quotidiano non è necessario conoscere ogni dettaglio statistico.
    Ciò che conta è una descrizione chiara del progetto, grandezze realistiche,
    una valutazione onesta della complessità e una distribuzione trasparente delle prestazioni.
  </p>
</div>

## Vedi anche

- [Come funziona l’app](how-it-works.html)  
- [Perché esiste la ValueApp](why-valueapp.html)  
- [Sezione progetto](project-section.html)  
- [Esempi](examples.html)  
- [Tutorial](tutorial.html)