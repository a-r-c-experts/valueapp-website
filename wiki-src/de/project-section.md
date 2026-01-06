---
i18nTitle: wiki.projectSection.title
i18nSubtitle: wiki.projectSection.subtitle
navKey: wiki.nav.projectSection
---

# Projektbereich

Der Reiter **Projekt** ist der Ort, an dem die ValueApp  
**„um was für ein Projekt handelt es sich?“** in  
**„welcher Aufwandsbereich ist plausibel?“** übersetzt.

Dies geschieht durch die Kombination von:

- einer messbaren **Menge** (Projektgrösse),
- einer definierten **Nutzungsmischung** (Referenzkontext),
- einer strukturierten **Komplexitätsbeurteilung**,
- sowie – je nach Konfiguration – **Risiko- / Anforderungsangaben**.

Diese Seite erklärt die Felder konzeptionell.  
Für eine Schritt-für-Schritt-Anleitung siehe das [Tutorial](tutorial.html).

---

## Was im Projektbereich passiert

Im **Projektbereich** erzeugt die ValueApp den **Basis-Aufwandsbereich**, indem sie:

1. über die Nutzung passende **Basismodelle** auswählt,
2. diese mit der eingegebenen **Menge** skaliert,
3. das Resultat über **Komplexität und Führungsbedingungen** anpasst.

Das Ergebnis wird in der Regel dargestellt als:
- Aufwandsbandbreite,
- häufig normiert (z.B. min/m²),
- noch **vor** Anwendung von Rollen und Leistungsumfang.

Zur methodischen Herleitung siehe:
→ [Wie die App funktioniert](how-it-works.html)

---

## Was Sie hier definieren

Typischerweise definieren Sie:

1. **Menge / Projektgrösse**  
   → [Menge](quantity.html)

2. **Nutzungsmischung**  
   → [Nutzungskategorien](use-categories.html)

3. **Komplexität** in vier Dimensionen  
   → [Komplexitätsdimensionen](complexity.html)

4. **Führungs- / Anpassungsfaktor** (abgeleitet)  
   → [Anpassungsfaktor](adjustment-factor.html)

5. **Risiko / Anforderungen** (falls aktiviert)

Diese Eingaben bestimmen gemeinsam das **Basis-Aufwandsprofil**, bevor Rollen und Leistungen berücksichtigt werden.

---

## Menge (Determinante)

Die Menge beschreibt den **Massstab des Projekts**, meist als:

- Bruttogeschossfläche (m² BGF)

Wichtige Punkte:
- immer die **Gesamtmenge des Projekts** eingeben,
- Untergeschosse und gemeinschaftliche Flächen berücksichtigen,
- kleine Änderungen können grosse Auswirkungen haben.

Details und typische Fehler:
→ [Menge](quantity.html)

---

## Nutzungsmischung

Die Nutzungsmischung sagt der App, **in welcher Referenzwelt sich das Projekt bewegt**.

- Eine oder mehrere Nutzungen sind möglich.
- Die Anteile müssen zusammen 100 % ergeben.
- Mischnutzungen werden als **gewichtete Kombinationen** berechnet.

Die Nutzung wählt die Basismodelle.  
Komplexität erklärt Abweichungen *innerhalb* dieser Modelle.

Beispiele und Definitionen:
→ [Nutzungskategorien](use-categories.html)

---

## Komplexitätsbeurteilung

Komplexität beschreibt, **wie vorhersehbar und beherrschbar die Planungsaufgabe ist**, nicht deren Qualität oder Ambition.

Die ValueApp beurteilt Komplexität in vier Dimensionen:
- gestalterisch
- technisch
- räumlich
- organisatorisch

Diese Einschätzungen werden auf einen **Führungs- / Anpassungsfaktor** abgebildet, der den Basisaufwand modifiziert.

Konzeptioneller Hintergrund:
→ [Komplexitätsdimensionen](complexity.html)  
→ [Anpassungsfaktor](adjustment-factor.html)

---

## Risiko und Anforderungen (optional)

Falls in Ihrer Konfiguration aktiviert, dienen Risikoangaben dazu, festzuhalten:
- externe Unsicherheiten,
- Bewilligungsrisiken,
- Prozessinstabilität.

Risiko:
- verbreitert in der Regel die Bandbreite,
- verändert nicht die grundlegende Basissystematik.

Zur Interpretation:
→ [Ergebnisse interpretieren](output-interpretation.html)

---

## Praktische Hinweise

- **Explizit sein**: Annahmen in der Projektbeschreibung festhalten.
- **Referenzen nutzen**: mit ähnlichen Projekten vergleichen.
- **Nicht nachjustieren**: Ergebnisse hier nicht „reparieren“, wenn das Thema eigentlich Rolle oder Leistungsumfang betrifft.

Der Projektbereich dient der **Einordnung und Plausibilisierung**, nicht der Verhandlung.

---

## Siehe auch

- [Tutorial](tutorial.html)
- [Menge](quantity.html)
- [Nutzungskategorien](use-categories.html)
- [Komplexitätsdimensionen](complexity.html)
- [Anpassungsfaktor](adjustment-factor.html)
- [Ergebnisse interpretieren](output-interpretation.html)
- [Warum ValueApp existiert](why-valueapp.html)