---
i18nTitle: wiki.howItWorks.title
navKey: wiki.nav.howItWorks
---

# How the App Works

## Summary

The ValueApp estimates planning effort (hours) for disciplines and phases based on **measurable determinants** (e.g. floor area/gross floor area) and **project-specific adjustment factors**.  
Instead of “construction cost → fee”, the app works with: **reference data → baseline effort → adjustment factors → hours per phase → summary**.

## Data flow in four steps

### 1. Description: context and organization

In the **Description** step, you enter:
- project title, address, status (e.g. study, preliminary project, execution)
- a short project description (conditions, special aspects)
- the organizational setup (e.g. individual planner, general planner, general contractor)

**Why this matters:**  
Context and organization influence how results are interpreted (e.g. responsibilities, interfaces, communication effort).

### 2. Project: determinant, use mix and adjustment factors

In the **Project** step, you define the basis of the calculation:
- **determinant** (typically m² gross floor area)
- **use(s)** or use mix (e.g. residential, work, education/research)
- **adjustment factor** across four dimensions: design, technical, spatial, organizational

The app links these inputs to a **base model** (reference data) and derives a baseline effort (LI).  
The complexity assessment is positioned within the **Leadership Framework for Decision Making** and results in an **adjustment factor (AF)**.

### 3. Services: role, focus and phase distribution

In the **Services** step, you select:
- your role (e.g. architecture, architecture & general planning)
- focus topics (if applicable)
- the distribution across phases (e.g. SIA 3–5)

**Result:** hours per phase (and per discipline, if relevant), based on:
- baseline effort (base model + determinant)
- adjustment factor(s) from quality, project and process aspects

### 4. Summary: results, documentation, export

The **Summary** is the “communicable” level:
- key data (determinant, use mix, organization)
- effort indicators (e.g. hours per m², ranges)
- hours per phase and, if applicable, notes on interpretation

This page is intended for **proposals, internal validation, procurement** (depending on context).

## Calculation logic in one sentence

Simplified:

**Effort (h) = Baseline effort LI (h) × Determinant × AF\_Quality × AF\_(Project/Process)**

- **LI** comes from the base model (reference data) and represents “effort per unit”.
- **AF** shifts the result depending on complexity and context.

## What the results are and are not

**The results are:**
- a transparent, traceable **estimate** based on references and clear inputs
- well suited for validation, communication and early decisions

**The results are not:**
- a fee calculation based on cost models
- a substitute for contracts, service definitions or project-specific clarifications

## Further pages

- **Getting started:** overview of the four steps: [getting-started.html](getting-started.html)  
- **Concepts and definitions:** base models, determinants, AF: [definitions.html](definitions.html)  
- **Tutorial:** step-by-step with screenshots: [tutorial.html](tutorial.html)