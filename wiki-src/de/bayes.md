---
i18nTitle: wiki.bayes.title
navKey: bayes
---

# Bayesianisches Lernen in ValueApp

Bayesianisches Lernen beschreibt **wie ValueApp bestehendes Wissen mit realen Projektdaten kombiniert**.

Es ermöglicht dem System:

- von einer strukturierten Referenz auszugehen,
- aus beobachteten Projekten zu lernen,
- und Resultate kontrolliert und transparent zu aktualisieren.

---

## Was „Bayesianisch“ bedeutet (einfach erklärt)

Im Kern beantwortet bayesianisches Denken eine Frage:

> *„Wie sollen wir das, was wir glauben, anpassen, sobald wir neue Daten sehen?“*

Es kombiniert immer zwei Dinge:

- was wir **bereits erwarten**  
- was wir **tatsächlich beobachten**

In ValueApp bedeutet das:

- wir starten nicht bei null  
- und wir vertrauen den Daten nicht blind  
- wir **kombinieren beides**

---

## Die zwei Bestandteile

### 1. Prior (bestehendes Wissen)

Der **Prior** ist das, was wir wissen, bevor wir die aktuellen Daten betrachten.

In ValueApp stammt das aus:

- Studien (z. B. ETH),
- strukturierter Erfahrung,
- bestehenden Referenzkurven.

Er definiert:

> *Wie wir erwarten, dass sich ein Bauwesen über die GF-Intervalle verhält.*

---

### 2. Daten (reale Projekte)

Die Daten bestehen aus:

- realen Projekten,
- beobachteten Werten,
- tatsächlichen Verteilungen über Gebäudegrössen.

Sie zeigen:

> *Was in der Praxis tatsächlich passiert.*

---

## Das Resultat: eine aktualisierte Schätzung

Bayesianisches Lernen kombiniert Prior und Daten zu einem:

> **Posterior (aktualisiertes Resultat)**

Das ist das, was ValueApp als **gelernte Kurve** zeigt.

Sie ist:

- nicht rein vorgegeben,
- nicht rein datengetrieben,
- sondern eine **Kombination aus beidem**.

---

## Warum das notwendig ist

Wenn wir nur Priors verwenden würden:

- wären die Resultate stabil  
- aber von der Realität entkoppelt  

Wenn wir nur Daten verwenden würden:

- wären die Resultate instabil  
- besonders bei wenigen Beobachtungen  

Bayesianisches Lernen löst dieses Problem, indem es beides ausbalanciert.

---

## Wie die Gewichtung funktioniert

Das System passt automatisch an, wie stark es welcher Quelle vertraut.

### Wenn viele Daten vorhanden sind

- das Modell stützt sich stärker auf **reale Projekte**  
- das Resultat wird spezifischer  
- die Kurve folgt dem beobachteten Verhalten  

### Wenn wenige Daten vorhanden sind

- das Modell stützt sich stärker auf den **Prior**  
- das Resultat bleibt stabil  
- unrealistische Sprünge werden vermieden  

In beiden Fällen gilt:

> Das System verhält sich konsistent, passt sich aber dort an, wo es möglich ist.

---

## Warum das für Bauwesen wichtig ist

Nicht alle Bauwesen sind gleich gut abgedeckt.

Einige haben:
- viele Projekte  
- starke Datensignale  

Andere haben:
- sehr wenige Beobachtungen  
- unvollständige Informationen  

Bayesianisches Lernen ermöglicht ValueApp:

- Resultate für alle Bauwesen zu liefern,  
- die Datenlage transparent zu berücksichtigen,  
- ohne Überanpassung oder „Raten“.

---

## Bedeutung für GF-Intervalle

Innerhalb jedes GF-Intervalls:

1. startet das Modell beim Referenzwert (Prior),  
2. vergleicht ihn mit realen Projektdaten,  
3. passt den Wert entsprechend an.  

So entsteht eine Kurve, die:

- dem realen Verhalten folgt, wo Daten vorhanden sind,  
- und stabil bleibt, wo dies nicht der Fall ist.

---

## Was Bayesianisches Lernen nicht ist

Es ist nicht:

- eine Blackbox, die Werte erfindet  
- ein Ersatz für Fachwissen  
- eine rein statistische Übung ohne Struktur  

Stattdessen:

- formalisiert es das Zusammenspiel von Erfahrung und Daten  
- und macht dieses Zusammenspiel über alle Bauwesen hinweg konsistent  

---

## In einem Satz

> Bayesianisches Lernen ermöglicht es ValueApp, von bestehenden Referenzwerten auszugehen und diese kontinuierlich mit realen Projektdaten zu aktualisieren.

---

## Warum dies ValueApp verbessert

Durch bayesianisches Lernen wird das System:

- realistischer → bildet reale Projekte besser ab  
- robuster → bleibt stabil auch bei wenig Daten  
- skalierbarer → funktioniert über alle Bauwesen hinweg  

Es stellt sicher:

- dass neue Daten die Resultate verbessern,  
- ohne bestehendes Wissen zu verwerfen.

---

## Häufige Missverständnisse

Man sollte nicht annehmen:

- dass Priors ignoriert werden  
- dass Daten alles vollständig überschreiben  
- dass mehr Daten immer zu grossen Änderungen führen  

Stattdessen gilt:

- Priors bleiben die Grundlage  
- Daten verfeinern diese  
- und das Modell steuert, wie stark angepasst wird  

---

## Siehe auch

- [GF-Intervalle und gelernte Kurven](gf-intervals.html)
- [Komplexitätsdimensionen](complexity.html)
- [Menge und Grundaufwand](quantity.html)
- [Interpretation der Resultate](output-interpretation.html)