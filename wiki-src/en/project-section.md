---
i18nTitle: wiki.projectSection.title
i18nSubtitle: wiki.projectSection.subtitle
navKey: wiki.nav.projectSection
---

# Project section

The **Project** tab is where the ValueApp turns  
**“what kind of project is this?”** into **“what effort range is plausible?”**

It does this by combining:

- a measurable **quantity** (project size),
- a defined **use mix** (reference context),
- a structured **complexity assessment**,
- and, depending on configuration, **risk / requirements** inputs.

This page explains the fields conceptually.  
For click-by-click instructions, see the [Tutorial](tutorial.html).

---

## What happens in the Project section

In the **Project** section, the ValueApp generates the **baseline effort range** by:

1. selecting relevant **base models** via the use mix,
2. scaling them with the entered **quantity**,
3. adjusting the result through **complexity and leadership conditions**.

The output is usually shown as:
- an effort range,
- often normalised (e.g. min/m²),
- before role and service scope are applied.

For the full method logic, see:
→ [How the app works](how-it-works.html)

---

## What you define here

You typically define:

1. **Quantity / project size**  
   → [Quantity](quantity.html)

2. **Use mix**  
   → [Use categories](use-categories.html)

3. **Complexity** across four dimensions  
   → [Complexity dimensions](complexity.html)

4. **Leadership / adjustment factor** (derived)  
   → [Adjustment factor](adjustment-factor.html)

5. **Risk / requirements** (if enabled)

Together, these inputs determine the **baseline effort profile** before roles and services are applied.

---

## Quantity (determinant)

The quantity represents the **scale of the project**, most commonly:

- gross floor area (m² GF)

Key points:
- always enter **total project quantity**,
- include basements and shared areas where relevant,
- small changes can significantly affect the result.

For details and common pitfalls:
→ [Quantity](quantity.html)

---

## Use mix

The use mix tells the app **what reference world your project belongs to**.

- You can select one or multiple uses.
- Percentages must sum to 100%.
- Mixed-use projects are calculated as **weighted combinations**.

The use mix selects the relevant base models.  
Complexity explains deviations *within* those models.

For examples and category definitions:
→ [Use categories](use-categories.html)

---

## Complexity assessment

Complexity describes **how predictable and manageable the project is**, not how “good” or “ambitious” it is.

The ValueApp assesses complexity across four dimensions:
- design
- technical
- spatial
- organisational

These inputs are mapped to a **leadership / adjustment factor** that modifies the baseline effort.

For conceptual background:
→ [Complexity dimensions](complexity.html)  
→ [Adjustment factor](adjustment-factor.html)

---

## Risk and requirements (optional)

If enabled in your setup, risk inputs help document:
- external uncertainty,
- approval risks,
- process instability.

Risk typically:
- widens ranges,
- does not change the underlying baseline logic.

For interpretation:
→ [Output interpretation](output-interpretation.html)

---

## Practical guidance

- **Be explicit**: document assumptions in the project description.
- **Use references**: compare with similar projects.
- **Avoid tuning**: don’t “fix” results here that belong to role or service scope later.

The Project section is about **context and plausibility**, not negotiation.

---

## See also

- [Tutorial](tutorial.html)
- [Quantity](quantity.html)
- [Use categories](use-categories.html)
- [Complexity dimensions](complexity.html)
- [Adjustment factor](adjustment-factor.html)
- [Interpreting results](output-interpretation.html)
- [Why ValueApp exists](why-valueapp.html)