---
i18nTitle: wiki.gfIntervals.title
navKey: gf-intervals
---

# GF Intervals and Learned Curves

GF intervals describe **how values change across building size**.

Instead of assigning a single value to an entire building type, ValueApp evaluates projects **across ranges of gross floor area (GFA)** and forms a curve over these ranges.

This allows the system to represent a simple reality:

> *Small buildings behave differently from large ones.*

---

## What GF intervals mean in ValueApp

In ValueApp, GF intervals are:

- **size ranges of buildings** (e.g. small, medium, large),
- used to group comparable projects,
- and to calculate values under **similar size conditions**.

They answer the question:

> *“How does this building type behave at different sizes?”*

Not:
- what the exact value of a single project is,
- or what the average across all sizes is.

---

## The previous approach (reference values)

Previously, ValueApp mainly worked with **reference intervals**.

- These were based on **priors**  
- Derived from studies, experience, and structured assumptions  
- Shown in the app as a **black line**

These reference values were:

- stable,
- consistent,
- but not directly learned from project data.

They defined the expected behavior across GF intervals.

---

## The new approach (learning from data)

With the new update, ValueApp introduces a fundamental change:

> Values are no longer only defined — they are **learned**.

The system:

1. starts with the existing reference intervals (priors),
2. considers **real project data**,
3. and learns how each building type behaves across GF intervals.

The result:

- a **data-informed curve** instead of a purely predefined one,
- adjusted per building type,
- and still anchored in the original reference logic.

---

## What you see in the visualization

A typical result contains three elements:

- **Black line**  
  → previous reference (priors)

- **Points**  
  → real projects

- **Colored dashed lines**  
  → learned values per requirement level

This clearly shows:

- where reality matches the reference,
- where it deviates,
- and how the system adapts.

---

## Why GF intervals are essential

Without GF intervals, the system would assume:

- one value per building type,
- independent of size.

This would ignore:

- scaling effects,
- efficiency differences,
- structural and organizational changes with size.

GF intervals allow the model:

- to capture these effects,
- and to describe a **curve instead of a point**.

---

## How learning works across building types

Not all building types have the same amount of data.

Some are well represented.  
Others are rare.

The system handles this by combining:

- the **reference curve (priors)**,
- **real projects of the same building type**,
- and **related building types within the same group**.

This means:

- With many data points → the curve becomes more specific  
- With few data points → the curve stays closer to the reference  

In both cases:

> The result remains stable but becomes more data-driven where possible.

---

## What this means in practice

The key change is:

Before:
- the reference defined the result  

Today:
- the reference is the starting point,
- and the system **learns from real projects**

This allows ValueApp to:

- adapt to actual practice,
- reflect differences between building types,
- and continuously improve as more data becomes available.

---

## Common misunderstandings

One should not assume:

- that reference values are removed  
- that the system freely invents values  
- that more data always leads to completely different results  

Instead:

- the reference remains the foundation  
- the model adjusts it in a controlled way  
- and learning happens **within a clear structure**

---

## In one sentence

> ValueApp now learns how each building type behaves across GF intervals by combining reference knowledge with real project data.

---

## See also

- [Adjustment factor methodology](complexity.html)
- [Determinant and baseline effort](quantity.html)
- [Adjustment (Leadership) Factor](adjustment-factor.html)
- [Interpretation of results](output-interpretation.html)