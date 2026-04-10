---
i18nTitle: wiki.quantity.title
navKey: quantity
---

# Determinant and Baseline Effort

The determinant defines the **scale of the project**.  
It is the primary driver of baseline effort in the ValueApp.

Adjustment factors **modify** this baseline value.  
Nothing replaces it.

---

## What “determinant” means in the ValueApp

In the ValueApp, the determinant represents:
- the **size of what is being planned**,
- expressed through **one dominant metric**.

---

## Determinants used

The determinant is specified as:

- **floor area / gross floor area**

---

## Why the determinant is so critical

The determinant is the **only factor** that reliably scales effort.

Doubling the determinant does not double effort linearly, but leads to:
- more coordination,
- more documentation,
- more repetition with variation.

The ValueApp intervals are calibrated so that:
- small projects are not overestimated,
- large projects are not naively extrapolated.

---

## How the determinant affects results

The determinant:
- defines the **baseline effort range**,
- applies across all planning phases,
- always interacts with adjustment factors.

A larger determinant typically means:
- more drawings,
- more coordination loops,
- more interfaces.

However, the determinant alone does **not** explain:
- why projects of the same size can have very different effort,
- why small projects can sometimes be disproportionately complex.

That is what adjustment factors are for.

---

## Choosing the right determinant

As a rule:

- Prefer **slight simplification** over artificial precision.
- Use **one dominant metric**, not multiple.
- Do not “optimize” the determinant to influence results.

If a value is debatable, document the assumption rather than refining it endlessly.

Precision without clarity is not accuracy.

---

## Where the determinant appears in the app

You define the determinant in:

- **Project definition**  
  As the first key input.

- **Baseline calculation**  
  Where it anchors all further adjustments.

- **Result summary**  
  Where it explains scale-related differences in effort.

For guided instructions:
→ [Workflow: define determinant](workflows.html#quantity)

---

## Avoid common mistakes

Avoid:
- mixing net and gross areas,
- excluding inconvenient parts of the project,
- changing the determinant afterward to “fix” a result.

If changing the determinant significantly alters the result, that is not an error.  
It means the project scope has changed.

---

## Optional visual reference

The relationship between determinant and baseline effort is **not linear**:

![Determinant vs. baseline effort](\/wiki-assets/knowledge/quantity-baseline-curve.jpeg)

The curve reflects:
- repetition effects,
- increasing coordination effort with larger scale.

---

## See also

- [Adjustment factor methodology](complexity.html)
- [Adjustment factor](adjustment-factor.html)
- [Roles and services](roles-and-services.html)
- [Interpreting results](output-interpretation.html)
- [What ValueApp is—and what it is not](why-valueapp.html)