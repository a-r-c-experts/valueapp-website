---
i18nTitle: wiki.howItWorks.title
navKey: wiki.nav.howItWorks
---

# Wie die App funktioniert

## Kurzfassung

Die ValueApp schätzt den Planungsaufwand (Stunden) für Disziplinen und Phasen auf Basis von **messbaren Determinanten** (z. B. Bruttogeschossfläche) und **projektbezogener Komplexität**.  
Statt „Baukosten → Honorar“ arbeitet die App mit: **Referenzdaten → Basisaufwand → Anpassungsfaktoren → Stunden je Phase → Zusammenfassung**.

## Datenfluss in vier Schritten

### 1. Beschrieb: Kontext und Organisation

Im Schritt **Beschrieb** erfassen Sie:
- Projekttitel, Adresse, Status (z. B. Studie, Vorprojekt, Ausführung)
- eine kurze Projektbeschreibung (Randbedingungen, Besonderheiten)
- die organisatorische Einordnung (z. B. Einzelplaner, Generalplaner, GU/TU)

**Warum das wichtig ist:**  
Kontext und Organisation beeinflussen die Interpretation der Resultate (z. B. Verantwortlichkeiten, Schnittstellen, Kommunikationsaufwand).

### 2. Projekt: Determinante, Nutzungsmix und Komplexität

Im Schritt **Projekt** definieren Sie die Grundlage der Berechnung:
- **Determinante** (typisch: m² Bruttogeschossfläche)
- **Nutzung(en)** bzw. Nutzungsmix (z. B. Wohnen, Arbeiten, Lernen/Forschen)
- **Komplexität** in vier Dimensionen: Gestaltung, Technik, Raum, Organisation

Die App verknüpft die Eingaben mit einem **Grundmodell** (Referenzdaten) und leitet daraus einen Basisaufwand (LI) ab.  
Die Komplexitätsbeurteilung wird im **Leadership Framework for Decision Making** positioniert und führt zu einem **Anpassungsfaktor (AF)**.

### 3. Leistung: Rolle, Schwerpunkte und Phasenverteilung

Im Schritt **Leistung** wählen Sie:
- Ihre Rolle (z. B. Architektur, Architektur & Generalplanung)
- Schwerpunktthemen (falls vorgesehen)
- die Verteilung über die Phasen (z. B. SIA 1–6)

**Ergebnis:** Stunden je Phase (und je Disziplin, falls relevant) auf Basis:
- Basisaufwand (Grundmodell + Determinante)
- Anpassungsfaktor(en) aus Komplexität/Qualität/Projekt- und Prozessaspekten

### 4. Zusammenfassung: Resultate, Dokumentation, Export

Die **Zusammenfassung** ist die „kommunizierbare“ Ebene:
- Kerndaten (Menge, Nutzungsmix, Organisation)
- Aufwandkennwerte (z. B. Stunden / m², Bandbreiten)
- Stunden je Phase und ggf. Hinweise zur Interpretation

Diese Seite ist für **Angebote, interne Plausibilisierung, Beschaffung** gedacht (je nach Nutzungskontext).

## Berechnungslogik in einem Satz

Vereinfacht:

**Aufwand (h) = Basisaufwand LI (h) × Determinante × AF\_Qualität × AF\_(Projekt/Prozess)**

- **LI** stammt aus dem Grundmodell (Referenzdaten) und ist „Aufwand pro Einheit“.
- **AF** verschiebt das Ergebnis abhängig von Komplexität und Kontext.

## Was die Resultate sind und was nicht

**Die Resultate sind:**
- eine transparente, nachvollziehbare **Schätzung** auf Basis von Referenzen und klaren Eingaben
- gut geeignet für Plausibilisierung, Kommunikation und frühe Entscheidungen

**Die Resultate sind nicht:**
- eine Honorarberechnung nach Kostenmodellen
- ein Ersatz für Vertrag, Leistungsdefinition oder projektspezifische Klärungen

## Weiterführende Seiten

- **Erste Schritte:** Überblick über die vier Schritte: [getting-started.html](getting-started.html)  
- **Begriffe und Konzepte:** Grundmodelle, Determinanten, AF: [definitions.html](definitions.html)  
- **Tutorial:** Schritt-für-Schritt mit Screenshots: [tutorial.html](tutorial.html)
