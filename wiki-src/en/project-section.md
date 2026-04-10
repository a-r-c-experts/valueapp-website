---
i18nTitle: wiki.projectSection.title
i18nSubtitle: wiki.projectSection.subtitle
navKey: wiki.nav.projectSection
---

# Project Section

The **Project** tab is where the ValueApp translates  
**“what kind of project is this?”** into  
**“which effort range is plausible?”**.

This is done by combining:

- a measurable **determinant** (project size),
- a defined **use mix** (reference context),
- a structured **complexity assessment**,
- and – depending on configuration – **risk / requirement inputs**.

This page explains the fields conceptually.  
For a step-by-step guide, see the [tutorial](tutorial.html).

---

## What happens in the project section

In the **project section**, the ValueApp generates the **baseline effort range** by:

1. selecting appropriate **base models** based on use,
2. scaling them using the entered **determinant**,
3. adjusting the result through **complexity and leadership conditions**.

The result is typically shown as:
- an effort range,
- often normalized (e.g. min/m²),
- still **before** applying roles and scope of services.

For the methodological background:
→ [How the app works](how-it-works.html)

---

## What you define here

Typically, you define:

1. **Determinant / project size**  
   → [Determinant](quantity.html)

2. **Use mix**  
   → [Use categories](use-categories.html)

3. **Complexity** in four dimensions  
   → [Adjustment factor methodology](complexity.html)

4. **Leadership / adjustment factor** (derived)  
   → [Adjustment factor](adjustment-factor.html)

5. **Risk / requirements** (if enabled)

These inputs together determine the **baseline effort profile**, before roles and services are considered.

---

## Determinant (project size)

The determinant describes the **scale of the project**, typically as:

- gross floor area (m² GFA)

Important points:
- always enter the **total determinant of the project**,
- include basements and shared areas,
- small changes can have large effects.

Details and common mistakes:
→ [Determinant](quantity.html)

---

## Use mix

The use mix tells the app **which reference world the project belongs to**.

- One or multiple uses are possible.
- Shares must sum to 100%.
- Mixed-use projects are calculated as **weighted combinations**.

The use selects the base models.  
Adjustment factors explain deviations *within* those models.

Examples and definitions:
→ [Use categories](use-categories.html)

---

## Assessment of adjustment factors

Adjustment factors describe **how predictable and manageable the planning task is**, not its quality or ambition.

The ValueApp evaluates adjustment factors across four dimensions:
- design
- technical
- spatial
- organizational

These assessments are mapped to a **leadership / adjustment factor**, which modifies the baseline effort.

Conceptual background:
→ [Adjustment factor methodology](complexity.html)  
→ [Adjustment factor](adjustment-factor.html)

---

## Risk and requirements (optional)

If enabled in your configuration, risk inputs are used to capture:
- external uncertainties,
- approval risks,
- process instability.

Risk:
- usually widens the range,
- does not change the underlying baseline logic.

For interpretation:
→ [Interpreting results](output-interpretation.html)

---

## Practical guidance

- **Be explicit**: document assumptions in the project description.
- **Use references**: compare with similar projects.
- **Do not tweak here**: do not “fix” results here if the issue actually relates to role or scope.

The project section is for **classification and plausibility checking**, not negotiation.

---

## See also

- [Tutorial](tutorial.html)
- [Determinant](quantity.html)
- [Use categories](use-categories.html)
- [Adjustment factor methodology](complexity.html)
- [Adjustment factor](adjustment-factor.html)
- [Interpreting results](output-interpretation.html)
- [Why ValueApp exists](why-valueapp.html)