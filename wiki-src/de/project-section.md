---
i18nTitle: wiki.projectSection.title
i18nSubtitle: wiki.projectSection.subtitle
navKey: wiki.nav.projectSection
---

# Projekt-Bereich

Im Tab **Projekt (Projekt)** macht die ValueApp aus „Was ist es?“ die Frage „Welcher Aufwandskorridor ist plausibel?“.  
Dazu kombiniert sie:

- eine messbare **Determinante / Menge** (typischerweise m² Bruttogeschossfläche),
- einen **Nutzungsmix** (damit die passenden Basismodelle kombiniert werden können),
- eine strukturierte **Komplexitätsbeurteilung** (Abbildung im Leadership Framework),
- und je nach Konfiguration Eingaben zu **Risiko / Anforderungen**.

Diese Seite erklärt die Felder konzeptionell. Wenn Sie eine Schritt-für-Schritt-Klickanleitung möchten, nutzen Sie das [Tutorial](tutorial.html).

---

## Was im Projekt-Bereich passiert

Im **Projekt**-Bereich erzeugt die ValueApp eine erste Prognose des erwarteten Zeitaufwands (oft dargestellt als **min/m²** bezogen auf die gewählte Menge) basierend auf:

- **Basismodellen** (nutzungsbasierte Modelle aus Referenzprojekten),
- und einem **Anpassungsfaktor**, der aus Ihrer Komplexitätsbeurteilung abgeleitet wird (oft als *Komplexitätsgrad* oder **AF_quality** bezeichnet).

Sie können die erzeugten Prognosen jederzeit individuell anpassen. Die besten Resultate entstehen jedoch, wenn Annahmen explizit und konsistent dokumentiert werden.

Für die „unter der Haube“-Sicht siehe [Wie die App funktioniert](how-it-works.html).  
Wenn Begriffe wie Determinante, Basismodell oder AF_quality unklar sind, beginnen Sie mit [Definitionen](definitions.html).

---

## Was Sie hier definieren

1. **Determinante / Menge** (typischerweise m² Bruttogeschossfläche)
2. **Nutzungsmix** (Wohnen, Arbeiten, Lernen usw.)
3. **Komplexität** in vier Dimensionen (Gestaltung, Technik, Raum, Organisation)
4. **Risiko / Anforderungen** (falls Ihre Version dieses Konzept enthält)
5. Optionale Kontextfelder wie **erwartete Kosten** (falls in Ihrem Setup vorhanden)

Diese Eingaben steuern die Auswahl der Basismodelle und die Anpassungsfaktoren, welche die Resultate innerhalb des Prognosebandes verschieben.

---

## Determinante und Menge

### Fläche (FA / Bruttogeschossfläche)

Im Feld zur Projektspezifikation erfassen Sie die ungefähre **Fläche** über alle Nutzungen in **m²**.

Wenn Sie bereits ein Flächenprogramm oder eine Flächenberechnung haben, referenzieren Sie es im Beschrieb. Es wird empfohlen, die Flächenberechnung transparent zu dokumentieren, insbesondere für andere Projektbeteiligte und die Auftraggeberschaft.

**Wichtig:** Die eingegebene Fläche beeinflusst den berechneten Aufwand direkt.  
Schon kleine Flächenänderungen können die Resultate merklich verschieben.

---

## Erwartete Kosten (optional)

Erwartete Kosten sind optional und beeinflussen die Zeitaufwandsprognose in der Regel **nicht**.  
Sie werden meist als Budget der Auftraggeberschaft verstanden.

In vielen Setups wird die ValueApp als Plausibilitätsprüfung für Entscheidungen verwendet zu:

- Aufgabe und Umfang,
- Determinanten,
- Nutzungsmix,
- Komplexität.

---

## Nutzungsmix

Sie müssen die **Nutzung(en)** des Projekts festlegen.

Sie können mehrere Nutzungen (auch wiederholte Nutzungen) auswählen und relative Anteile vergeben.  
Im Hintergrund kombiniert die ValueApp die entsprechenden Basismodelle dieser Nutzungen und berechnet eine erste Prognose.

**Kernidee:** Der Nutzungsmix sagt der App, „in welcher Referenzwelt“ Ihr Projekt liegt.  
Ein Mischnutzungsprojekt ist nicht „ein Modell mit einem komischen Label“, sondern eine **gewichtete Kombination** von Modellen.

Zur Kalibrierung vergleichen Sie Ihr Projekt mit den [Beispielen](examples.html).

---

## Komplexitätsbeurteilung

Komplexität ist nicht „gross vs. klein“. Sie beschreibt, wie gut die Arbeit planbar ist und wie klar Ursache-Wirkung-Beziehungen sind.

Die ValueApp nutzt das **Leadership Framework**, um Ihre Einschätzung in ein **AF_quality** (oder einen ähnlichen Anpassungsfaktor) zu übersetzen. Dazu beschreiben Sie Herausforderungen in vier Dimensionen:

- **Gestaltung**
- **Technik**
- **Raum**
- **Organisation**

Das Ziel ist nicht, das eine „richtige“ Label zu finden. Das Ziel ist, Annahmen **explizit und diskutierbar** zu machen.

Wenn Sie AF_quality vertieft verstehen möchten, beginnen Sie mit [Definitionen](definitions.html) und [Wie die App funktioniert](how-it-works.html).

---

## Praktische Tipps

- **Seien Sie explizit:** notieren Sie die wichtigsten Treiber im Projektbeschrieb (Rahmenbedingungen, Stakeholder, besondere Anforderungen).
- **Kalibrieren Sie mit Referenzen:** vergleichen Sie Ihr Projekt mit den [Beispielen](examples.html).
- **Nutzen Sie das Tool zur Strukturierung von Diskussionen, nicht zu deren Vermeidung:** der Wert liegt in Transparenz, nicht darin, Unsicherheit zu übertünchen.

---

## Bauprogramme nach Nutzungskategorie

Die folgenden Listen geben Beispiele, was typischerweise unter die jeweilige Nutzungskategorie fällt.  
Sie sind keine perfekte Taxonomie, sondern eine praktische Hilfe, um reale Projekte auf die Modellstruktur abzubilden.

### 1 Wohnen *(Wohnen, Sport und Freizeit)*

- Temporäres Wohnen  
- Mehrfamilienhäuser  
- Reihenhäuser  
- Wochenendhäuser  
- Eigentumswohnungen  
- Einfamilienhäuser  
- Ferienhäuser  
- Seniorenwohnen  
- Alterswohnanlagen  
- Studierendenwohnheime  
- Lernendenwohnheime  
- Berghütten  
- Campingplätze  
- Clubhütten  
- Turnhallen  
- Sporthallen  
- Mehrzweckhallen  
- Stadionanlagen  
- Sportplätze  
- Tribünenbauten  
- Garderobenbauten  
- Bowlinganlagen  
- Freiluft-Eisbahnen  
- Freibäder  
- Kunsteisbahnen  
- Hallenbäder  
- Reithallen  
- Bootshäuser  
- Schiessanlagen  
- Freizeitanlagen  
- Jugendzentren  
- Parks  
- Spielplätze  
- Zoologische Gärten  
- Botanische Gärten  
- Tierhäuser  
- Gewächshäuser  

---

### 2 Arbeiten *(Dienstleistungen und öffentliche Funktionen)*

- Pflegeheime  
- Betreuungsheime  
- Kinderheime  
- Jugendheime  
- Zentrallöschereien  
- Tierheime  
- Veterinärstationen  
- Tierkliniken  
- Detailhandelsbauten ohne Grundausbau  
- Detailhandelsbauten mit Grundausbau  
- Warenhäuser  
- Einkaufszentren  
- Markthallen  
- Einfache Bürogebäude  
- Bürogebäude mit erhöhten Anforderungen  
- Verwaltungsgebäude  
- Banken  
- Gemeindebauten  
- Rathäuser  
- Gerichtsgebäude  
- Polizei-Betriebsgebäude  
- Haftanstalten  
- Strafvollzugsanstalten  
- Kindertagesstätten  
- Geschützte Werkstätten  
- Kirchen  
- Kapellen  
- Abdankungshallen  
- Pfarreizentren  
- Friedhofsanlagen  
- Krematorien  
- Klöster  
- Sozialbauten  
- Clubhäuser  
- Kulturzentren  
- Festhallen  
- Restaurants  
- Hotels  
- Motels  
- Hotels (Limited Service)  
- Motels (Limited Service)  
- Kantinen  
- Grossküchen (selbständig)  
- Gasthöfe  
- Jugendherbergen  
- Raststätten  
- Cafeterias  
- Teestuben  
- Autobahnzollstationen  
- Tankstellen  
- Wartehallen mit Diensträumen  
- Zollstellen  
- Bus-Terminals  
- Bahnhöfe  
- Bahn-Betriebsgebäude  
- Seilbahnstationen  
- Flughäfen  
- Hafenanlagen  
- Postgebäude  
- Telefonzentralen  
- Postbetriebsgebäude  
- Telekommunikationsgebäude  
- Rechenzentren  
- Kasernen  
- Zeug-/Arsenalbauten  
- Zivilschutzanlagen (öffentlich)  
- Kommandoposten  
- Bereitstellungsanlagen  
- Sanitätsposten  
- Sanitätszentren  
- Geschützte Operationsräume  
- Notspitäler  
- Zivilschutz-Ausbildungszentren  
- Feuerwehrgebäude  

---

### 3 Produktion

- Industriehallen  
- Produktionsbauten der Rohstoffindustrie  
- Produktionsbauten der Schwerindustrie  
- Produktionsbauten der Maschinenindustrie  
- Produktionsbauten der Feinmechanik  
- Produktionsbauten der Verarbeitungsindustrie  
- Produktionsbauten der Lebensmittelindustrie  
- Betriebsgebäude  
- Gewerbebauten  
- Werkstätten  
- Ställe  
- Landwirtschaftliche Produktionsanlagen  
- Schlachthöfe  
- Heizwerke  
- Fernwärmeanlagen  
- Kraftwerksgebäude  
- Wasseraufbereitungsanlagen  
- Abwasserreinigungsanlagen  
- Kehrichtverbrennungsanlagen  
- Treibstofflageranlagen  

---

### 4 Lagern *(Lager und Distribution, Parkieren)*

- Lagerhallen  
- Mehrgeschossige Lagergebäude  
- Mechanisierte Lager  
- Kühlhäuser  
- Silobauten  
- Verteilzentren (Food)  
- Verteilzentren (Non-Food)  
- Schuppen  
- Hütten  
- Futtermagazine  
- Gewächshäuser  
- Einstöckige Garagen  
- Einstellhallen (unterirdisch)  
- Parkhäuser (oberirdisch)  
- Strassenverkehrsbauten  
- Werkhöfe  
- Bahndepots  
- Tramdepots  
- Fussgängerzonen  
- Wohnstrassen  

---

### 5 Ausbilden und Forschen *(Bildung, Lehre, Kultur, Forschung)*

- Kindertagesstätten  
- Kindergärten  
- Primarschulen  
- Sekundarschulen  
- Berufsschulen  
- Höhere Fachschulen  
- Mittelschulen  
- Gymnasien  
- Gesamtschulen  
- Sonderschulen  
- Förder-/Heilpädagogische Schulen  
- Universitäten  
- Hochschulen  
- Bibliotheken  
- Staatsarchive  
- Forschungsinstitute ohne Labore  
- Forschungsinstitute mit Labors  
- Laborgebäude für Industrie  
- Laborgebäude für Gewerbe  
- Temporäre Ausstellungshallen  
- Ausstellungsbauten  
- Pavillons  
- Lokalmuseen  
- Kunstgalerien  
- Museen  
- Kleine Theater  
- Konzerthallen  
- Theaterbauten  
- Musikpavillons  
- Kinos  
- Diskotheken  
- Versammlungssäle  
- Kongresszentren  
- Radiostudios  
- Fernsehstudios  
- Filmstudios  

---

### 6 Heilen und Pflegen

- Arztpraxen  
- Medizinische Zentren  
- Spitäler  
- Bettenhäuser  
- Behandlungstrakte  
- Universitätskliniken  
- Pflegeheime  
- Rehabilitationszentren  
- Sanatorien  
- Bäder  
- Spezialinstitute  

---

## Siehe auch

- [Definitionen und zentrale Konzepte](definitions.html)  
- [Wie die App funktioniert](how-it-works.html)  
- [Beispiele](examples.html)  
- [Tutorial](tutorial.html)  
- [Warum es die ValueApp gibt](why-valueapp.html)