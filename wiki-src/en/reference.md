---
i18nTitle: wiki.reference.title
navKey: reference
---

# Reference

This chapter is the **lookup layer**: concise, structured pages you can consult while working in the app.

- **Tutorial** = step-by-step walkthrough  
- **Knowledge base** = concepts and logic  
- **Reference** = “what does this field mean” and “how do I read this output”

If you are looking for click-by-click guidance, go to the [Tutorial](tutorial.html) or [Workflows](workflows.html).

---

## Quick lookup

Use this section when you just need the right page, quickly.

### Project (quantity, uses, complexity)
- **Quantity / determinant** (what counts, units, typical mistakes)  
  → [Quantity](quantity.html)

- **Use categories** (how to map real projects to “uses”)  
  → [Use categories](use-categories.html)

- **Project fields overview** (how the Project tab works conceptually)  
  → [Project section](project-section.html)

- **Complexity dimensions** (what “design/technical/spatial/organisational” actually means)  
  → [Complexity](complexity.html)

- **Adjustment / leadership factor** (what it reflects and what it does not)  
  → [Adjustment factor](adjustment-factor.html)

### Services (roles, phases, additional services)
- **Roles and services** (what the role selection changes, what basic services means)  
  → [Roles and services](roles-and-services.html)

### Results (hours, ranges, phase distributions)
- **How to read results** (hours, ranges, distributions, what not to claim)  
  → [Output interpretation](output-interpretation.html)

### Purpose and limits
- **What ValueApp is (and is not)** (avoid the “fee calculator” misunderstanding)  
  → [What ValueApp is – and what it is not](why-valueapp.html)

---

## What belongs in Reference (and what does not)

Reference pages should be:

- **precise** (one term = one meaning),
- **structured** (so search and future assistants can retrieve it),
- **free of marketing language**,
- **explicit about limits** (what a field does *not* do).

Reference pages should *not* try to be:
- a full theory chapter (that’s the [Knowledge base](knowledge-base.html)),
- a workflow (that’s [Workflows](workflows.html)),
- a pitch deck (that’s [Why ValueApp exists](why-valueapp.html)).

---

## Planned reference pages

These are the pages that should eventually live here. The titles are written so they can become individual markdown files later.

### Inputs and parameters reference
Goal: explain every input field in the UI in a consistent structure.

Recommended structure per field:
- **What it is**
- **Where it appears** (tab/section)
- **What it influences**
- **Common mistakes**
- **Related concepts** (links)

Planned pages:
- **Description tab – fields and meaning** (project identity, status, task, organisation)
- **Project tab – fields and meaning** (quantity, use mix, complexity, risk)
- **Services tab – fields and meaning** (role, focus topics, phase distribution, additional services)

Until these exist, use:
- [Project section](project-section.html)
- [Roles and services](roles-and-services.html)
- [Tutorial](tutorial.html)

---

### Result interpretation reference
Goal: prevent misuse of the output and make “ranges” non-negotiable.

Planned pages:
- **Hours and ranges** (what the range means, how to communicate it)
- **Phase distributions** (what shifts mean, what stays constant)
- **min/m² and derived metrics** (how to interpret and when not to use)
- **Comparisons across projects** (what is comparable and what is not)

Until these exist, use:
- [Output interpretation](output-interpretation.html)

---

### Integration and technical reference
Goal: everything needed to embed ValueApp as a widget.

Planned pages:
- **Widget embedding** (where to place it, sizing, responsive constraints)
- **Data formats and callbacks** (metadata, events, export)
- **Authentication / access patterns** (if applicable)
- **Example implementation summary** (based on the public integration repository)

For now, the integration entry point is:
- Public integration repository: https://github.com/a-r-c-experts/core-value-integration

---

### Versions and release notes
Goal: traceability for changes affecting results, UI, or assumptions.

Planned pages:
- **Release notes** (chronological, short, user-impact focused)
- **Model changes** (when base models or calibration changed)
- **Known limitations** (what’s intentionally not covered yet)

---

## See also

- [Tutorial](tutorial.html)
- [Workflows](workflows.html)
- [Knowledge base](knowledge-base.html)
- [Support](support.html)