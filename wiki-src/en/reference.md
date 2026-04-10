---
i18nTitle: wiki.reference.title
navKey: reference
---

# Reference

This chapter is the **lookup layer**: short, structured pages that you can consult directly while working in the app.

- **Tutorial** = step-by-step guide  
- **Knowledge base** = concepts and logic  
- **Reference** = “What does this field mean?” and “How do I read this result?”

If you are looking for click-based instructions, switch to the [tutorial](tutorial.html) or the [workflows](workflows.html).

---

## Quick access

Use this section if you want to quickly find the relevant page.

### Project (determinant, use, adjustment factor)
- **Determinant / project size** (what counts, units, typical mistakes)  
  → [Determinant](quantity.html)

- **Use categories** (how real projects are mapped to uses)  
  → [Use categories](use-categories.html)

- **Project fields overview** (conceptual functioning of the project tab)  
  → [Project section](project-section.html)

- **Adjustment factor** (what it represents and what it does not)  
  → [Adjustment factor](adjustment-factor.html)

- **Adjustment factor methodology** (what “design / technical / spatial / organizational” means)  
  → [Complexity](complexity.html)

---

### Services (roles, phases, additional services)
- **Roles and services** (impact of role selection, meaning of base services)  
  → [Roles and services](roles-and-services.html)

---

### Results (hours, ranges, phase distribution)
- **Reading results** (hours, ranges, distributions, what should not be claimed)  
  → [Result interpretation](output-interpretation.html)

---

### Purpose and limits
- **What ValueApp is (and what it is not)** (avoiding the “fee calculator” misunderstanding)  
  → [What ValueApp is—and what it is not](why-valueapp.html)

---

## What belongs in the reference (and what does not)

Reference pages should:

- be **precise** (one term = one meaning),
- be **structured** (for search and future assistants),
- be **free of marketing language**,
- clearly define limits (what a field does *not* do).

Reference pages should **not** be:
- a theory chapter (that is what the [knowledge base](knowledge-base.html) is for),
- a workflow (that is what the [workflows](workflows.html) are for),
- an argumentation piece (that is what [why ValueApp exists](why-valueapp.html) is for).

---

## Planned reference pages

These pages are intended to be developed here over time. The titles are formulated so they can later become standalone markdown files.

### Reference for inputs and parameters
Goal: consistently explain each input field in the UI.

Recommended structure per field:
- **What it is**
- **Where it appears** (tab / section)
- **What it influences**
- **Typical mistakes**
- **Related concepts** (links)

Planned pages:
- **Description tab – fields and meaning** (project identity, status, task, organization)
- **Project tab – fields and meaning** (determinant, use, complexity, risk)
- **Services tab – fields and meaning** (role, focus topics, phase distribution, additional services)

Until these exist, use:
- [Project section](project-section.html)
- [Roles and services](roles-and-services.html)
- [Tutorial](tutorial.html)

---

### Reference for result interpretation
Goal: prevent misuse of results and establish ranges as non-negotiable.

Planned pages:
- **Hours and ranges** (meaning and communication)
- **Phase distributions** (what shifts mean, what remains constant)
- **min/m² and derived metrics** (interpretation and limits)
- **Project comparisons** (what is comparable and what is not)

Until these exist, use:
- [Result interpretation](output-interpretation.html)

---

### Technical and integration reference
Goal: everything needed to embed the ValueApp as a widget.

Planned pages:
- **Widget integration** (placement, sizes, responsiveness)
- **Data formats and callbacks** (metadata, events, export)
- **Authentication / access patterns** (if relevant)
- **Example implementation** (based on the public integration repository)

Current entry point:
- Public integration repository: https://github.com/a-r-c-experts/core-value-integration

---

### Versions and release notes
Goal: traceability of changes affecting results, UI, or assumptions.

Planned pages:
- **Release notes** (chronological, concise, user-relevant)
- **Model changes** (adjustments to base models or calibration)
- **Known limitations** (topics intentionally not yet covered)

---

## See also

- [Tutorial](tutorial.html)
- [Workflows](workflows.html)
- [Knowledge base](knowledge-base.html)
- [Support](support.html)