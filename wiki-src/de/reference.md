---
i18nTitle: wiki.reference.title
navKey: reference
---

# Referenz

Dieses Kapitel ist die **Nachschlageebene**: kurze, strukturierte Seiten, die Sie während der Arbeit in der App gezielt konsultieren können.

- **Tutorial** = Schritt-für-Schritt-Anleitung  
- **Wissensbasis** = Konzepte und Logik  
- **Referenz** = «Was bedeutet dieses Feld?» und «Wie lese ich dieses Ergebnis?»

Wenn Sie eine klickbasierte Anleitung suchen, wechseln Sie zum [Tutorial](tutorial.html) oder zu den [Workflows](workflows.html).

---

## Schnellzugriff

Nutzen Sie diesen Bereich, wenn Sie schnell die passende Seite finden möchten.

### Projekt (Menge, Nutzung, Komplexität)
- **Menge / Determinante** (was zählt, Einheiten, typische Fehler)  
  → [Menge](quantity.html)

- **Nutzungskategorien** (wie reale Projekte auf Nutzungen abgebildet werden)  
  → [Nutzungskategorien](use-categories.html)

- **Übersicht Projektfelder** (konzeptionelle Funktionsweise des Projekt-Reiters)  
  → [Projektbereich](project-section.html)

- **Komplexitätsdimensionen** (was „gestalterisch / technisch / räumlich / organisatorisch“ bedeutet)  
  → [Komplexität](complexity.html)

- **Anpassungs- / Führungsfaktor** (was er abbildet und was nicht)  
  → [Anpassungsfaktor](adjustment-factor.html)

### Leistungen (Rollen, Phasen, Zusatzleistungen)
- **Rollen und Leistungen** (Auswirkung der Rollenwahl, Bedeutung der Grundleistungen)  
  → [Rollen und Leistungen](roles-and-services.html)

### Ergebnisse (Stunden, Bandbreiten, Phasenverteilung)
- **Ergebnisse lesen** (Stunden, Bandbreiten, Verteilungen, was nicht behauptet werden sollte)  
  → [Ergebnisinterpretation](output-interpretation.html)

### Zweck und Grenzen
- **Was ValueApp ist (und was nicht)** (Vermeidung des „Honorarrechner“-Missverständnisses)  
  → [Was ValueApp ist – und was nicht](why-valueapp.html)

---

## Was in die Referenz gehört (und was nicht)

Referenzseiten sollen:

- **präzise** sein (ein Begriff = eine Bedeutung),
- **strukturiert** sein (für Suche und zukünftige Assistenten),
- **frei von Marketing-Sprache** sein,
- **Grenzen klar benennen** (was ein Feld *nicht* tut).

Referenzseiten sollen **nicht** sein:
- ein Theorie-Kapitel (dafür ist die [Wissensbasis](knowledge-base.html)),
- ein Workflow (dafür sind die [Workflows](workflows.html)),
- eine Argumentationsfolie (dafür ist [Warum ValueApp existiert](why-valueapp.html)).

---

## Geplante Referenzseiten

Diese Seiten sollen hier langfristig entstehen. Die Titel sind so formuliert, dass sie später eigenständige Markdown-Dateien werden können.

### Referenz zu Eingaben und Parametern
Ziel: jedes Eingabefeld in der UI konsistent erklären.

Empfohlene Struktur pro Feld:
- **Was es ist**
- **Wo es erscheint** (Reiter / Abschnitt)
- **Was es beeinflusst**
- **Typische Fehler**
- **Verwandte Konzepte** (Links)

Geplante Seiten:
- **Reiter Beschreibung – Felder und Bedeutung** (Projektidentität, Status, Aufgabe, Organisation)
- **Reiter Projekt – Felder und Bedeutung** (Menge, Nutzung, Komplexität, Risiko)
- **Reiter Leistungen – Felder und Bedeutung** (Rolle, Fokusthemen, Phasenverteilung, Zusatzleistungen)

Bis diese existieren, nutzen Sie:
- [Projektbereich](project-section.html)
- [Rollen und Leistungen](roles-and-services.html)
- [Tutorial](tutorial.html)

---

### Referenz zur Ergebnisinterpretation
Ziel: Fehlanwendung der Ergebnisse verhindern und Bandbreiten als nicht verhandelbar etablieren.

Geplante Seiten:
- **Stunden und Bandbreiten** (Bedeutung und Kommunikation)
- **Phasenverteilungen** (was Verschiebungen bedeuten, was konstant bleibt)
- **min/m² und abgeleitete Kennwerte** (Interpretation und Grenzen)
- **Projektvergleiche** (was vergleichbar ist und was nicht)

Bis diese existieren, nutzen Sie:
- [Ergebnisinterpretation](output-interpretation.html)

---

### Technische und Integrationsreferenz
Ziel: alles, was zur Einbettung von ValueApp als Widget benötigt wird.

Geplante Seiten:
- **Widget-Einbettung** (Platzierung, Grössen, Responsivität)
- **Datenformate und Callbacks** (Metadaten, Events, Export)
- **Authentifizierung / Zugriffsmuster** (falls relevant)
- **Beispiel-Implementierung** (basierend auf dem öffentlichen Integrations-Repository)

Aktueller Einstiegspunkt:
- Öffentliches Integrations-Repository: https://github.com/a-r-c-experts/core-value-integration

---

### Versionen und Release Notes
Ziel: Nachvollziehbarkeit von Änderungen mit Einfluss auf Resultate, UI oder Annahmen.

Geplante Seiten:
- **Release Notes** (chronologisch, kurz, nutzerrelevant)
- **Modelländerungen** (Anpassungen an Basismodellen oder Kalibrierung)
- **Bekannte Einschränkungen** (bewusst noch nicht abgedeckte Themen)

---

## Siehe auch

- [Tutorial](tutorial.html)
- [Workflows](workflows.html)
- [Wissensbasis](knowledge-base.html)
- [Support](support.html)