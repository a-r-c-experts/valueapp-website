---
i18nTitle: wiki.examples.title
i18nSubtitle: wiki.examples.subtitle
navKey: wiki.nav.examples
---

# Examples

Examples help calibrate expectations and show how inputs influence results in the ValueApp.  
They demonstrate how **determinants**, **use mix** and **complexity** translate into effort ranges.

If you are new, start with [Getting started](getting-started.html), then return here once you understand the basic workflow.

---

## What these examples are for

These examples are meant to:

- show how to translate a real project into determinants, use mix and complexity,
- demonstrate how adjustment factors shift results,
- provide reference points for discussion with clients and teams,
- illustrate what “plausible” means in practice.

They are not templates to be copied verbatim, but **patterns to be adapted**.

---

## Suggested reading order

1. Read [Definitions and core concepts](definitions.html) if terms like LI, determinant or AF<sub>quality</sub> are new.
2. Review [How the app works](how-it-works.html) to understand the conceptual pipeline.
3. Compare your project to the examples below.
4. Use the [Tutorial](tutorial.html) to implement the steps in the application.

---

## Example 1 – Simple feasibility / competition project

*Small residential project, clear task, few stakeholders, low-to-medium complexity.*

### Step 1 – Beschrieb

The project is a small residential building with approximately **100 m² gross floor area (GF)**.  
The task is to examine feasibility and prepare a concept for a possible building permit or competition entry.

The client is a private owner with a standard schedule and no unusual contractual constraints.

In the **Beschrieb** tab you:

- use a clear project title and enter the address,
- set the status to *In Planung*,
- describe the task in a short paragraph (existing situation, goal of the study, key constraints),
- choose an organisational setup with individual planners and no general contractor.

### Step 2 – Projekt

In the **Projekt** tab you enter a gross floor area of **100 m²**.  
The main use is *Wohnen*, for example:

- Wohnen – 95% of GF  
- Wohnen 2 – 5% of GF (e.g. ancillary residential space)

Complexity is mostly in the **simple to complicated** range: standard residential typology, known regulations, no special technical systems.

Most challenges are positioned in the *einfach / kompliziert* domain of the Leadership Framework,  
and the risk level is set to **Keine spez. Anforderungen**.

### Step 3 – Leistung

As an architect you select the role **Architekt/in** and focus topics such as design and early cost planning.

The app calculates a total of roughly **300 hours** for 100% basic services,  
with a stronger emphasis on phases 2 and 3 (pre-design and design) and fewer hours in execution.

### Step 4 – Zusammenfassung

The summary provides a compact overview: project description, organisational setup, use mix, effort per m² and hours per phase.

For feasibility studies or competitions, this page can be attached to internal planning documents  
or used as a reference for fee discussions.

<div class="wiki-highlight-box">
  <strong>What this example shows</strong>
  <p>
    Even for small, relatively simple projects, the ValueApp uses the same base models
    and complexity logic. The resulting hours are modest, but fully traceable and
    comparable with larger projects.
  </p>
</div>

---

## Example 2 – Educational building (Kindergarten)

*Educational building with a clear function but higher design, organisational and spatial complexity.*

### Context and data basis

This example is based on a realised kindergarten project.  
The building belongs to the usage group **Learning / Research** and forms part of the data basis  
for the corresponding base model.

![Base model chart for educational buildings](/wiki-assets/education-model-chart.jpeg)

*Educational and research buildings with prediction intervals for planning effort.*

### Step 1 – Beschrieb

The **Beschrieb** tab contains a structured project description:

- location and client,
- context (e.g. neighbourhood, outdoor spaces),
- pedagogical concept,
- special requirements such as inclusion, flexible spaces or specific safety constraints.

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-beschrieb-kindergarten.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Project description in the ValueApp for the kindergarten example.*

### Step 2 – Projekt

The determinating quantity is the **gross floor area** of the kindergarten.  
The entire GF is assigned to the use **Learning / Research**, linking the project directly to the educational base model.

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-project-uses-education-100.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Project tab with 100% of the gross floor area assigned to Learning / Research.*

Complexity is assessed as higher than in the residential example:

- demanding spatial organisation,
- pedagogical concept,
- integration into an existing context,
- coordination of multiple stakeholders.

Several challenges are positioned in the **complex** domain of the Leadership Framework.

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-complexity-challenges-popup.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Challenges positioned in the Leadership Framework; the centre of gravity leads to an adjustment factor.*

### Step 3 – Leistung

The architectural office takes the role **Architekt/in** or **Architekt/in & Generalplaner/in**, depending on the setup.

Focus topics include design, coordination with specialists, construction management and cost planning.

<video class="wiki-img" controls preload="metadata">
  <source src="/wiki-assets/app-roles-hours.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

*Calculated hours for 100% basic services and their distribution across SIA phases.*

The total hours are significantly higher than in the simple example,  
both due to the larger GF and the higher adjustment factor.

Phases **3–5** (projecting, tendering and execution) account for the majority of effort.

### Step 4 – Zusammenfassung

The summary presents the kindergarten as a reference project with:

- clearly documented determinants,
- explicit complexity assessment,
- resulting effort distribution.

Such summaries can be used as internal benchmarks,  
for transparent fee discussions or in public procurement procedures.

<div class="wiki-highlight-box">
  <strong>What this example shows</strong>
  <p>
    Complexity and context matter. Even with the same determinating quantity,
    the adjustment factor derived from the Leadership Framework can significantly
    shift expected effort. This example shows how that shift is documented transparently.
  </p>
</div>

<div class="wiki-highlight-box">
  <strong>Data provenance</strong>
  <p>
    Realised projects are documented in a separate data and reference system.
    These data sets feed the statistical base models behind the ValueApp.
  </p>
  <video class="wiki-img" controls preload="metadata">
    <source src="/wiki-assets/werk-material-kindergarten.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div class="wiki-img-caption">
    Example of a project entry in the underlying reference database (illustrative).
  </div>
</div>

---

## What other examples you may add later

To further strengthen the wiki (and future chatbot retrieval), consider adding:

- a complex **mixed-use** project (multiple base models),
- a **process-heavy** project (unusual procurement or collaboration),
- an edge case with odd but realistic inputs.

---

## See also

- [Definitions and core concepts](definitions.html)  
- [Project section](project-section.html)  
- [How the app works](how-it-works.html)  
- [Tutorial](tutorial.html)  
- [Why ValueApp exists](why-valueapp.html)