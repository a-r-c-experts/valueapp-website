---
i18nTitle: wiki.definitions.title
i18nSubtitle: wiki.definitions.subtitle
navKey: wiki.nav.definitions
---

# Definitionen und zentrale Konzepte

Diese Seite erläutert die zentralen Konzepte hinter der ValueApp und der ETH Value Method: **Basismodelle**, **Determinanten**, **Anpassungsfaktoren**, das **Leadership Framework** sowie deren Zusammenspiel zu einem transparenten **Aufwandskorridor**.

Wenn Sie primär praktisch arbeiten möchten, können Sie direkt zum [Tutorial](tutorial.html) wechseln oder die [Beispiele](examples.html) ansehen.  
Für den konzeptionellen Gesamtzusammenhang siehe [Wie die App funktioniert](how-it-works.html).

---

## Was die ValueApp leistet

Die ValueApp schätzt den Planungsaufwand (Stunden) für unterschiedliche Disziplinen auf Basis **transparenter, dokumentierter Determinanten**.

Anstelle von Baukosten verwendet sie messbare Grössen wie die **Bruttogeschossfläche** und verknüpft diese mit statistischen **Basismodellen**, die aus realisierten Projekten abgeleitet sind.

Projektspezifische Komplexität und Kontext werden über **Anpassungsfaktoren** integriert, die aus dem **Leadership Framework for Decision Making** abgeleitet werden.  
Das Ergebnis ist ein **plausibler, transparenter Aufwandskorridor**, der dokumentiert, diskutiert und kommuniziert werden kann.

---

## Kernformel (vereinfacht)

In vereinfachter Form lässt sich die Methode wie folgt darstellen:

**Aufwand (h) = LI × Determinante × AF<sub>Qualität</sub> × AF<sub>Projekt/Prozess</sub>**

Dabei gilt:

- **LI** ist der Basisaufwand pro Einheit (z. B. Minuten pro m² Bruttogeschossfläche) aus dem statistischen Basismodell.  
- Die **Determinante** ist eine transparente, messbare Skalierungsgrösse, typischerweise m² Bruttogeschossfläche (GF).  
- **AF<sub>Qualität</sub>** ist ein aus dem Leadership Framework abgeleiteter Anpassungsfaktor, basierend auf gestalterischen, technischen, räumlichen und organisatorischen Herausforderungen.  
- **AF<sub>Projekt/Prozess</sub>** bildet zusätzliche projekt- oder prozessspezifische Anpassungen ab, wo sinnvoll.

Die meisten dieser Eingaben erfolgen im [Projekt-Bereich](project-section.html).

---

## Basismodelle und Determinanten

Basismodelle werden aus **realisierten Referenzprojekten** aufgebaut.  
Für jede Nutzungsart verknüpfen sie eine Determinante (typischerweise m² GF) mit **Aufwandsintervallen**.

Diese Intervalle decken in der Regel rund **80 % vergleichbarer Projekte** ab und sind in **Dezile** unterteilt. Dadurch wird Streuung sichtbar gemacht, statt sie hinter einer einzelnen Zahl zu verbergen.

![Referenzwolke Wohnungsbau](/wiki-assets/base-model-housing-reference-cloud.jpeg)

*Referenzprojekte und Prognoseintervalle für Wohn- und verwandte Bauten.*

![Mehrfamilienhaus im Prognoseintervall](/wiki-assets/base-model-mfh-example.jpeg)

*Beispiel: Mehrfamilienhaus bei gegebener Bruttogeschossfläche innerhalb des 80-%-Prognoseintervalls.*

Aktuell nutzt die ValueApp nutzungsbasierte Basismodelle für:

- Wohnen  
- Arbeiten / Dienstleistungen  
- Industrie  
- Lagerung  
- Lernen / Forschen  
- Heilen / Pflegen  

Alle Modelle gehen von **100 % Grundleistungen** für die jeweilige Disziplin aus.

---

## Leadership Framework und Komplexität

Das **Leadership Framework for Decision Making** klassifiziert Situationen nach der Klarheit von Ursache-Wirkungs-Beziehungen.  
Es unterscheidet zwischen **einfachen**, **komplizierten**, **komplexen** und **chaotischen** Kontexten und legt unterschiedliche Vorgehensweisen nahe.

![Leadership Framework Übersicht](/wiki-assets/leadership-framework-overview.jpeg)

*Leadership Framework: von einfachen über komplizierte und komplexe bis zu chaotischen Entscheidungskontexten.*

In der ValueApp werden projektspezifische Herausforderungen in vier Dimensionen beschrieben:

- **Gestaltung**,  
- **Technik**,  
- **Raum**,  
- **Organisation**.

Diese werden im Framework positioniert. Ihr gemeinsamer „Schwerpunkt“ ergibt den Wert für **AF<sub>Qualität</sub>**.

![Leadership Framework mit Schwerpunkt](/wiki-assets/leadership-framework-centre-of-gravity.jpeg)

*Projektspezifische Herausforderungen im Framework; der Schwerpunkt bestimmt den Anpassungsfaktor.*

Diese Logik ist explizit und diskutierbar – keine versteckte Kalibrierung.

---

## Anpassungsfaktoren

Anpassungsfaktoren bilden Komplexität und Kontext ab, die mit der Determinante allein nicht erfasst werden können.

### AF<sub>Qualität</sub>

AF<sub>Qualität</sub> ergibt sich aus dem Leadership Framework und beschreibt die kombinierte Wirkung gestalterischer, technischer, räumlicher und organisatorischer Herausforderungen.

### AF<sub>Projekt/Prozess</sub>

Zusätzliche Faktoren berücksichtigen projekt- und prozessbezogene Rahmenbedingungen wie Vergabemodell, Zusammenarbeitsform, Restriktionen, Etappierung oder besondere vertragliche Anforderungen.

---

## Prognoseintervalle

Ein **Prognoseintervall** beschreibt einen Bereich, der den Grossteil vergleichbarer Projekte abdeckt, typischerweise rund 80 %.

Es ist weder Garantie noch Zielwert, sondern eine strukturierte Darstellung von **Unsicherheit und Streuung** auf Basis realer Daten.

---

## Aufbau der ValueApp

Die ValueApp ist in vier Haupt-Tabs gegliedert, die der Logik der Methode folgen:

- **Beschrieb** – Projektkontext, Adresse, organisatorisches Setup und Status  
- **Projekt** – Determinante, Nutzungsmix, Komplexität und Risiko  
- **Leistung** – Rolle, Schwerpunkte und Stunden pro Phase  
- **Zusammenfassung** – konsolidierter Einseiter für Kommunikation und Dokumentation  

![Architekturübersicht der ValueApp](/wiki-assets/valueapp-architecture-overview.jpeg)

*Die ValueApp verbindet Projektbeschrieb, Determinanten, Anpassungsfaktoren und Leistungen zu einem konsistenten Modell.*

---

## Felder in der Anwendung – empfohlene Nutzung

### Beschrieb

Nutzen Sie Projekttitel und Adresse zur eindeutigen Identifikation in Berichten und internen Systemen.  
Die Beschreibung sollte Ausgangslage, Aufgabe, wesentliche Rahmenbedingungen und komplexitätsrelevante Themen kurz zusammenfassen.

### Projekt

Erfassen Sie die Determinante (typischerweise m² GF) und verteilen Sie diese auf die relevanten Nutzungen.  
Beurteilen Sie die Komplexität in den vier Dimensionen und setzen Sie den Risikograd (**keine speziellen**, **erhöhte**, **hohe Anforderungen**).

Weitere Hinweise finden Sie im [Projekt-Bereich](project-section.html).

### Leistung

Wählen Sie Ihre vertragliche Rolle und markieren Sie Schwerpunktthemen.  
Prüfen Sie die berechneten Stunden für 100 % Grundleistungen sowie deren Verteilung über die Phasen.  
Passen Sie Phasenanteile bei Bedarf begründet an.

### Zusammenfassung

Die Zusammenfassung führt alle Eingaben und Ergebnisse in einer nachvollziehbaren Übersicht zusammen.  
Sie ist für Honorarangebote, Controlling-Unterlagen oder Vergabeverfahren gedacht.

---

## Glossar

**Determinante (determinierende Grösse)**  
Messbare Grösse, welche das Basismodell steuert, in der Regel die für den Projektumfang relevante Bruttogeschossfläche GF.  
Siehe auch [Projekt-Bereich](project-section.html).

**Basismodell (Grundmodell)**  
Statistisches Modell einer Nutzungsart, das Determinanten mit Aufwandskorridoren für 100 % Grundleistungen verknüpft.

**Prognoseintervall**  
Bereich, der die meisten vergleichbaren Projekte (rund 80 %) abdeckt und in Dezile gegliedert ist.

**AF Qualität**  
Anpassungsfaktor aus dem Leadership Framework, basierend auf gestalterischen, technischen, räumlichen und organisatorischen Herausforderungen.

**Grundleistungen**  
Standardleistungen gemäss Berufsordnungen (z. B. SIA), die in den Basismodellen mit 100 % angenommen werden.

**Zusätzliche Leistungen**  
Projektspezifische Leistungen ausserhalb der Grundleistungen, die separat dokumentiert werden können.

---

<div class="wiki-aside-card">
  <h3>Methodische Grundlagen</h3>
  <p>
    Die Value Method und die ValueApp basieren auf Forschung an der ETH Zürich
    und werden gemeinsam mit Praxispartner:innen und Berufsverbänden weiterentwickelt.
    Referenzmodelle werden laufend mit realisierten Projekten aktualisiert.
  </p>
</div>

<div class="wiki-aside-card">
  <h3>Hinweis für Anwender:innen</h3>
  <p>
    Im Alltag müssen Sie nicht jedes statistische Detail kennen.
    Entscheidend sind eine klare Projektbeschreibung, realistische Grössen,
    eine ehrliche Komplexitätsbeurteilung und eine transparente Leistungsaufteilung.
  </p>
</div>

## Siehe auch

- [Wie die App funktioniert](how-it-works.html)  
- [Warum es die ValueApp gibt](why-valueapp.html)  
- [Projekt-Bereich](project-section.html)  
- [Beispiele](examples.html)  
- [Tutorial](tutorial.html)