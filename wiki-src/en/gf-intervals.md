---
i18nTitle: wiki.gfIntervals.title
navKey: gf-intervals
---

# GF intervals and learned curves

GF intervals describe **how values change across building size**.

Instead of assigning one value to an entire building type, ValueApp evaluates projects **across ranges of gross floor area (GF)** and builds a curve over these ranges.

This allows the system to reflect a simple reality:

> *Small buildings behave differently from large ones.*

---

## What GF intervals mean in ValueApp

In ValueApp, GF intervals are:

- **size ranges of buildings** (e.g. small, medium, large),
- used to group comparable projects,
- and to calculate values within **similar scale conditions**.

They answer the question:

> *“How does this building type behave at different sizes?”*

Not:
- what is the exact value of one single project,
- or what is the average across all sizes.

---

## The previous approach (reference values)

Previously, ValueApp worked mainly with **reference curves**.

- These were based on **priors**  
- Derived from studies, experience, and structured assumptions  
- Shown in the app as the **black line**

These reference values were:

- stable,
- consistent,
- but not directly learned from project data.

They defined the expected behaviour across GF intervals.

---

## The new approach (learning from data)

With the new update, ValueApp introduces a fundamental change:

> Values are no longer only defined — they are **learned**.

The system now:

1. starts from the existing reference curve (priors),
2. looks at **real project data**,
3. and learns how each building type behaves across GF intervals.

The result:

- a **data-informed curve** instead of a purely predefined one,
- adjusted per building type,
- while still grounded in the original reference logic.

---

## What you see in the graph

A typical result contains three elements:

- **Black line**  
  → previous reference (priors)

- **Points**  
  → real projects

- **Coloured dashed lines**  
  → learned values per requirement level

This shows clearly:

- where reality matches the reference,
- where it differs,
- and how the system adapts.

---

## Why GF intervals are essential

Without GF intervals, the system would assume:

- one value per building type,
- regardless of size.

That would ignore:

- scaling effects,
- efficiency differences,
- structural and organisational changes with size.

GF intervals allow the model to:

- capture these effects,
- and describe a **curve instead of a point**.

---

## How learning works across building types

Not all building types have the same amount of data.

Some are well represented.  
Others are rare.

The system handles this by combining:

- the **reference curve (priors)**,
- **real projects from the same building type**,
- and **related building types within the same group**.

This means:

- With many data points → the curve becomes more specific  
- With few data points → the curve stays closer to the reference  

In both cases:

> The result remains stable, but becomes more data-driven where possible.

---

## What this means in practice

The key shift is:

Before:
- the reference defined the result

Now:
- the reference is the starting point,
- and the system **learns from real projects**

This allows ValueApp to:

- adapt to actual practice,
- reflect differences between building types,
- and continuously improve as more data becomes available.

---

## Common misunderstandings

Do not assume:

- that the reference values are removed  
- that the system invents values freely  
- that more data always means completely different results  

Instead:

- the reference remains the foundation  
- the model adjusts it carefully  
- and learning happens **within a controlled structure**

---

## In one sentence

> ValueApp now learns how each building type behaves across GF intervals by combining reference knowledge with real project data.

---

## See also

- [Complexity dimensions](complexity.html)
- [Quantity and baseline effort](quantity.html)
- [Adjustment (leadership) factor](adjustment-factor.html)
- [Interpreting results](output-interpretation.html)