---
i18nTitle: wiki.definitions.title
i18nSubtitle: wiki.definitions.subtitle
navKey: wiki.nav.definitions
---

# Definitions and Core Concepts

This page explains the core concepts behind the ValueApp and the ETH Value Method: **base models**, **determinants**, **adjustment factors**, the **Leadership Framework**, and their interaction in forming a transparent **effort corridor**.

If you prefer a practical approach, you can go directly to the [tutorial](tutorial.html) or view the [examples](examples.html).  
For the conceptual overview, see [How the app works](how-it-works.html).

---

## What the ValueApp delivers

The ValueApp estimates planning effort (hours) for different disciplines based on **transparent, documented determinants**.

Instead of construction costs, it uses measurable quantities such as **gross floor area** and links them to statistical **base models** derived from realized projects.

Project-specific complexity and context are integrated via **adjustment factors**, derived from the **Leadership Framework for Decision Making**.  
The result is a **plausible, transparent effort corridor** that can be documented, discussed, and communicated.

---

## Core formula (simplified)

In simplified form, the method can be expressed as:

**Effort (h) = LI × Determinant × AF<sub>Quality</sub> × AF<sub>Project/Process</sub>**

Where:

- **LI** is the base effort per unit (e.g. minutes per m² of gross floor area) from the statistical base model.  
- The **determinant** is a transparent, measurable scaling variable, typically m² gross floor area (GFA).  
- **AF<sub>Quality</sub>** is an adjustment factor derived from the Leadership Framework, based on design, technical, spatial, and organizational challenges.  
- **AF<sub>Project/Process</sub>** represents additional project- or process-specific adjustments where appropriate.

Most of these inputs are defined in the [project section](project-section.html).

---

## Base models and determinants

Base models are built from **realized reference projects**.  
For each use type, they link a determinant (typically m² GFA) with **effort intervals**.

These intervals usually cover around **80% of comparable projects** and are divided into **deciles**, making variability visible instead of hiding it behind a single value.

![Referenzwolke Wohnungsbau](/wiki-assets/base-model-housing-reference-cloud.jpeg)

*Reference projects and prediction intervals for residential and related buildings.*

![Mehrfamilienhaus im Prognoseintervall](/wiki-assets/base-model-mfh-example.jpeg)

*Example: multi-family housing within the 80% prediction interval for a given gross floor area.*

Currently, the ValueApp uses use-based base models for:

- Residential and leisure  
- Work  
- Production  
- Storage  
- Education and research  
- Healthcare  

All models assume **100% base services** for the respective discipline.

---

## Leadership Framework and complexity

The **Leadership Framework for Decision Making** classifies situations based on the clarity of cause-and-effect relationships.  
It distinguishes between **simple**, **complicated**, **complex**, and **chaotic** contexts and suggests different approaches.

![Leadership Framework Übersicht](/wiki-assets/leadership-framework-overview.jpeg)

*Leadership Framework: from simple to complicated, complex, and chaotic decision contexts.*

In the ValueApp, project-specific challenges are described in four dimensions:

- **design**,  
- **technical**,  
- **spatial**,  
- **organizational**.

These are positioned within the framework. Their combined “center of gravity” determines the value of **AF<sub>Quality</sub>**.

![Leadership Framework mit Schwerpunkt](/wiki-assets/leadership-framework-centre-of-gravity.jpeg)

*Project-specific challenges within the framework; the center of gravity defines the adjustment factor.*

This logic is explicit and discussable – no hidden calibration.

---

## Adjustment factors

Adjustment factors represent complexity and context that cannot be captured by the determinant alone.

### AF<sub>Quality</sub>

AF<sub>Quality</sub> is derived from the Leadership Framework and describes the combined effect of design, technical, spatial, and organizational challenges.

### AF<sub>Project/Process</sub>

Additional factors account for project- and process-related conditions such as procurement model, collaboration structure, constraints, phasing, or specific contractual requirements.

---

## Prediction intervals

A **prediction interval** describes a range that covers the majority of comparable projects, typically around 80%.

It is neither a guarantee nor a target value, but a structured representation of **uncertainty and variation** based on real data.

---

## Structure of the ValueApp

The ValueApp is structured into four main tabs:

- **Description** – project context, address, organizational setup, and status  
- **Project** – determinant, use mix, complexity, and risk  
- **Services** – role, focus areas, and hours per phase  
- **Summary** – consolidated one-pager for communication and documentation  

![Architekturübersicht der ValueApp](/wiki-assets/valueapp-architecture-overview.jpeg)

*The ValueApp links project description, determinants, adjustment factors, and services into a consistent model.*

---

## Fields in the application – recommended use

### Description

Use project title and address for clear identification in reports and internal systems.  
The description should briefly summarize context, task, key conditions, and complexity-related aspects.

### Project

Define the determinant (typically m² GFA) and distribute it across the relevant uses.  
Assess the adjustment factors across the four dimensions and define the requirement level (**low**, **standard**, **high**, **very high**).

Further guidance can be found in the [project section](project-section.html).

### Services

Select your contractual role and highlight focus areas.  
Review the calculated hours for 100% base services and their distribution across phases.  
Adjust phase shares if needed with justification.

### Summary

The summary consolidates all inputs and results into a coherent overview.  
It is intended for fee proposals, controlling documents, or procurement processes.

---

## Glossary

**Determinant (determining variable)**  
Measurable variable that drives the base model, typically gross floor area.

**Base model**  
Statistical model linking determinants to effort corridors for 100% base services.

**Prediction interval**  
Range covering most comparable projects (~80%), divided into deciles.

**AF Quality**  
Adjustment factor derived from the Leadership Framework.

**Base services**  
Standard services assumed at 100% in the models.

**Additional services**  
Project-specific services beyond base scope.

---

<div class="wiki-aside-card">
  <h3>Methodological foundations</h3>
  <p>
    The Value Method and the ValueApp are based on research at ETH Zurich
    and are continuously developed together with industry partners and professional associations.
    Reference models are regularly updated using realized projects.
  </p>
</div>

<div class="wiki-aside-card">
  <h3>Note for users</h3>
  <p>
    In practice, you do not need to understand every statistical detail.
    What matters is a clear project description, realistic quantities,
    an honest assessment of complexity, and a transparent allocation of services.
  </p>
</div>

## See also

- [How the app works](how-it-works.html)  
- [Why the ValueApp exists](why-valueapp.html)  
- [Project section](project-section.html)  
- [Examples](examples.html)  
- [Tutorial](tutorial.html)