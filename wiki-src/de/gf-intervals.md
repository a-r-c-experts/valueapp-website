---
i18nTitle: wiki.gfIntervals.title
navKey: gf-intervals
---

# GF-Intervalle und gelernte Kurven

GF-Intervalle beschreiben, **wie sich Werte über die Gebäudegrösse verändern**.

Anstatt einem gesamten Bauwesen einen einzigen Wert zuzuweisen, bewertet ValueApp Projekte **über Bereiche der Geschossfläche (GF)** und bildet über diese Bereiche eine Kurve.

Dies ermöglicht es dem System, eine einfache Realität abzubilden:

> *Kleine Gebäude verhalten sich anders als grosse.*

---

## Was GF-Intervalle in ValueApp bedeuten

In ValueApp sind GF-Intervalle:

- **Grössenbereiche von Gebäuden** (z. B. klein, mittel, gross),
- die verwendet werden, um vergleichbare Projekte zu gruppieren,
- und um Werte unter **ähnlichen Grössenbedingungen** zu berechnen.

Sie beantworten die Frage:

> *„Wie verhält sich dieses Bauwesen bei unterschiedlichen Grössen?“*

Nicht:
- was der exakte Wert eines einzelnen Projekts ist,
- oder was der Durchschnitt über alle Grössen ist.

---

## Der bisherige Ansatz (Referenzwerte)

Bisher arbeitete ValueApp hauptsächlich mit **Referenzkurven**.

- Diese basierten auf **Priors**  
- Abgeleitet aus Studien, Erfahrung und strukturierten Annahmen  
- In der App dargestellt als **schwarze Linie**

Diese Referenzwerte waren:

- stabil,
- konsistent,
- aber nicht direkt aus Projektdaten gelernt.

Sie definierten das erwartete Verhalten über die GF-Intervalle.

---

## Der neue Ansatz (Lernen aus Daten)

Mit dem neuen Update führt ValueApp eine grundlegende Änderung ein:

> Werte werden nicht mehr nur definiert — sie werden **gelernt**.

Das System:

1. startet mit der bestehenden Referenzkurve (Priors),
2. betrachtet **reale Projektdaten**,
3. und lernt, wie sich jedes Bauwesen über die GF-Intervalle verhält.

Das Resultat:

- eine **dateninformierte Kurve** statt einer rein vorgegebenen,
- pro Bauwesen angepasst,
- und weiterhin in der ursprünglichen Referenzlogik verankert.

---

## Was man in der Grafik sieht

Ein typisches Resultat enthält drei Elemente:

- **Schwarze Linie**  
  → bisherige Referenz (Priors)

- **Punkte**  
  → reale Projekte

- **Farbige gestrichelte Linien**  
  → gelernte Werte je Anforderungsstufe

Dies zeigt klar:

- wo die Realität der Referenz entspricht,
- wo sie davon abweicht,
- und wie sich das System anpasst.

---

## Warum GF-Intervalle wesentlich sind

Ohne GF-Intervalle würde das System annehmen:

- ein Wert pro Bauwesen,
- unabhängig von der Grösse.

Das würde Folgendes ignorieren:

- Skaleneffekte,
- Effizienzunterschiede,
- strukturelle und organisatorische Veränderungen mit der Grösse.

GF-Intervalle ermöglichen dem Modell:

- diese Effekte abzubilden,
- und eine **Kurve statt eines Punktes** zu beschreiben.

---

## Wie das Lernen über Bauwesen hinweg funktioniert

Nicht alle Bauwesen haben gleich viele Daten.

Einige sind gut vertreten.  
Andere sind selten.

Das System geht damit um, indem es kombiniert:

- die **Referenzkurve (Priors)**,
- **reale Projekte desselben Bauwesens**,
- und **verwandte Bauwesen innerhalb derselben Gruppe**.

Das bedeutet:

- Bei vielen Daten → die Kurve wird spezifischer  
- Bei wenigen Daten → die Kurve bleibt näher an der Referenz  

In beiden Fällen:

> Das Resultat bleibt stabil, wird aber, wo möglich, datenbasierter.

---

## Was das in der Praxis bedeutet

Die zentrale Veränderung ist:

Früher:
- die Referenz definierte das Resultat  

Heute:
- die Referenz ist der Ausgangspunkt,
- und das System **lernt aus realen Projekten**

Das ermöglicht ValueApp:

- sich an die tatsächliche Praxis anzupassen,
- Unterschiede zwischen Bauwesen abzubilden,
- und sich mit zunehmenden Daten kontinuierlich zu verbessern.

---

## Häufige Missverständnisse

Man sollte nicht annehmen:

- dass die Referenzwerte entfernt werden  
- dass das System Werte frei erfindet  
- dass mehr Daten immer zu völlig anderen Resultaten führen  

Stattdessen:

- die Referenz bleibt die Grundlage  
- das Modell passt sie kontrolliert an  
- und das Lernen erfolgt **innerhalb einer klaren Struktur**

---

## In einem Satz

> ValueApp lernt nun, wie sich jedes Bauwesen über die GF-Intervalle verhält, indem Referenzwissen mit realen Projektdaten kombiniert wird.

---

## Siehe auch

- [Komplexitätsdimensionen](complexity.html)
- [Menge und Grundaufwand](quantity.html)
- [Adjustment (Leadership) Factor](adjustment-factor.html)
- [Interpretation der Resultate](output-interpretation.html)