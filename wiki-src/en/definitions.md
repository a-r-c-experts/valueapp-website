---
i18nTitle: wiki.definitions.title
i18nSubtitle: wiki.definitions.subtitle
navKey: wiki.nav.definitions
---

# Definitions and core concepts

This page explains the main concepts behind the ValueApp and the ETH Value Method: **base models**, **determinants**, **adjustment factors**, the **Leadership Framework**, and how they combine into a transparent **effort range**.

If you mainly want to learn by doing, you can jump directly to the [Tutorial](tutorial.html) or explore the [Examples](examples.html). For the conceptual pipeline, see [How the app works](how-it-works.html).

---

## What the ValueApp does

The ValueApp estimates planning effort (hours) for different disciplines based on **transparent, documented determinants**.

Instead of construction cost, it uses measurable quantities such as **gross floor area** and links them to statistical **base models** derived from realised projects.

Project-specific complexity and context are incorporated through **adjustment factors** derived from the **Leadership Framework for Decision Making**.  
The result is a **plausible, transparent effort range** that can be documented, discussed and communicated.

---

## Core formula (simplified)

In simplified form, the method can be written as:

**Effort (h) = LI × Determinant × AF<sub>quality</sub> × AF<sub>project/process</sub>**

Where:

- **LI** is the base effort per unit (e.g. minutes per m² gross floor area) from the statistical base model.  
- The **determinant** is a transparent, measurable scaling quantity, typically m² gross floor area (GF).  
- **AF<sub>quality</sub>** is an adjustment factor derived from the Leadership Framework, based on design, technical, spatial and organisational challenges.  
- **AF<sub>project/process</sub>** captures additional project- or process-specific adjustments where relevant.

The practical place where most of these inputs are entered is the [Project section](project-section.html).

---

## Base models and determinants

Base models are built from **realised reference projects**. For each use type, they link a determinant (typically m² GF) to **intervals of planning effort**.

These intervals usually cover around **80% of comparable projects** and are structured into **deciles**, making variability explicit rather than hiding it behind a single number.

![Reference cloud for residential base model](/wiki-assets/base-model-housing-reference-cloud.jpeg)

*Reference projects and prediction intervals for residential and related buildings.*

![Example of a multi-family house in the prediction interval](/wiki-assets/base-model-mfh-example.jpeg)

*Example: multi-family house at a given gross floor area within the 80% prediction interval.*

The ValueApp currently uses usage-based base models such as:

- Housing  
- Working / Services  
- Industry  
- Storage  
- Learning / Research  
- Healing / Care  

Each model assumes **100% basic services** for the corresponding discipline.

---

## Leadership Framework and complexity

The **Leadership Framework for Decision Making** classifies situations according to the clarity of cause-and-effect relationships.  
It distinguishes between **simple**, **complicated**, **complex** and **chaotic** contexts and suggests different ways of acting in each.

![Leadership framework overview](/wiki-assets/leadership-framework-overview.jpeg)

*Leadership Framework: from simple through complicated and complex to chaotic decision contexts.*

In the ValueApp, project challenges are described across four dimensions:

- **design**,  
- **technical**,  
- **spatial**,  
- **organisational**.

These challenges are positioned within the framework. Their combined “centre of gravity” results in an **AF<sub>quality</sub>** value.

![Leadership framework with centre of gravity](/wiki-assets/leadership-framework-centre-of-gravity.jpeg)

*Project-specific challenges positioned in the framework; the centre of gravity determines the adjustment factor.*

This logic is explicit and discussable. It is not hidden calibration.

---

## Adjustment factors

Adjustment factors represent complexity and context that the determinant alone cannot capture.

### AF<sub>quality</sub>

Derived from the Leadership Framework, AF<sub>quality</sub> reflects the combined effect of design, technical, spatial and organisational challenges.

### AF<sub>project/process</sub>

Where applicable, additional factors reflect project and process setup, such as procurement model, collaboration structure, constraints, phasing or special contractual conditions.

---

## Prediction intervals

A **prediction interval** is a range that covers the majority of comparable projects, typically around 80%.

It is not a guarantee and not a target.  
It is a structured way to express **uncertainty and variability** based on observed data.

---

## Structure of the ValueApp

The ValueApp is organised into four main tabs that mirror the logic of the method:

- **Beschrieb (Description)** – project context, address, organisational setup and status.  
- **Projekt (Project)** – determinant, use mix, complexity and risk.  
- **Leistung (Services)** – role, focus topics and hours per phase.  
- **Zusammenfassung (Summary)** – consolidated one-pager for communication and documentation.

![Diagram of the ValueApp architecture and data flows](/wiki-assets/valueapp-architecture-overview.jpeg)

*The ValueApp connects project description, determinants, adjustment factors and services into one consistent model.*

---

## Fields in the app: recommended usage

### Beschrieb

Use the project title and address to clearly identify the project in reports and internal systems.  
The project description should briefly cover starting situation, task, key constraints and central themes that influence complexity.

### Projekt

Enter the determinant (typically m² gross floor area) and assign percentages to the relevant uses.  
Assess complexity across the four dimensions and set the risk level (**no special**, **increased**, **high**).

Further guidance is available in the [Project section](project-section.html).

### Leistung

Choose your contractual role and highlight focus topics.  
Review the calculated hours for 100% basic services and their distribution across phases.  
Adjust phase percentages where justified.

### Zusammenfassung

The summary compiles all inputs and calculated results into a traceable overview.  
It is intended to be attached to fee offers, internal controlling documents or procurement procedures.

---

## Glossary

**Determinant (determinierende Grösse)**  
Measurable quantity that drives the base model, usually the gross floor area GF relevant for the project scope.  
See also the [Project section](project-section.html).

**Base model (Grundmodell)**  
Statistical model for a usage type that links determinants to effort ranges for 100% basic services.

**Prediction interval (Prognoseintervall)**  
Range covering most comparable projects (around 80%), structured in deciles.

**AF Qualität**  
Adjustment factor derived from the Leadership Framework based on design, technical, spatial and organisational challenges.

**Basic services (Grundleistungen)**  
Scope of standard services defined in professional regulations (e.g. SIA), assumed at 100% in the base models.

**Additional services (Zusätzliche Leistungen)**  
Project-specific services beyond basic services that can be documented separately.

---

<div class="wiki-aside-card">
  <h3>Method sources</h3>
  <p>
    The Value Method and the ValueApp are based on research at ETH Zürich and are developed
    together with practice partners and professional associations.
    Reference models are continuously updated with realised project data.
  </p>
</div>

<div class="wiki-aside-card">
  <h3>Tip for users</h3>
  <p>
    In everyday work, you do not need to master every statistical detail.
    Focus on a clear project description, realistic quantities,
    an honest complexity assessment and a transparent distribution of services across phases.
  </p>
</div>

## See also

- [How the app works](how-it-works.html)  
- [Why ValueApp exists](why-valueapp.html)  
- [Project section](project-section.html)  
- [Examples](examples.html)  
- [Tutorial](tutorial.html)