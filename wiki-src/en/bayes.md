---
i18nTitle: wiki.bayes.title
navKey: bayes
---

# Bayesian Learning in ValueApp

Bayesian learning describes **how ValueApp combines existing knowledge with real project data**.

It enables the system to:

- start from a structured reference,
- learn from observed projects,
- and update results in a controlled and transparent way.

---

## What “Bayesian” means (simply explained)

At its core, Bayesian thinking answers one question:

> *“How should we adjust what we believe once we see new data?”*

It always combines two things:

- what we **already expect**  
- what we **actually observe**

In ValueApp, this means:

- we do not start from zero  
- and we do not blindly trust the data  
- we **combine both**

---

## The two components

### 1. Prior (existing knowledge)

The **prior** is what we know before looking at the current data.

In ValueApp, this comes from:

- studies (e.g. ETH),
- structured experience,
- existing reference curves.

It defines:

> *How we expect a building type to behave across GF intervals.*

---

### 2. Data (real projects)

The data consists of:

- real projects,
- observed values,
- actual distributions across building sizes.

They show:

> *What actually happens in practice.*

---

## The result: an updated estimate

Bayesian learning combines prior and data into a:

> **Posterior (updated result)**

This is what ValueApp shows as the **learned curve**.

It is:

- not purely predefined,
- not purely data-driven,
- but a **combination of both**.

---

## Why this is necessary

If we only used priors:

- results would be stable  
- but disconnected from reality  

If we only used data:

- results would be unstable  
- especially with few observations  

Bayesian learning solves this by balancing both.

---

## How the weighting works

The system automatically adjusts how much it trusts each source.

### When many data points are available

- the model relies more on **real projects**  
- the result becomes more specific  
- the curve follows observed behavior  

### When few data points are available

- the model relies more on the **prior**  
- the result remains stable  
- unrealistic jumps are avoided  

In both cases:

> The system behaves consistently, but adapts where possible.

---

## Why this matters for building types

Not all building types are equally well covered.

Some have:
- many projects  
- strong data signals  

Others have:
- very few observations  
- incomplete information  

Bayesian learning allows ValueApp to:

- deliver results for all building types,  
- account for data availability transparently,  
- without overfitting or “guessing”.

---

## Relevance for GF intervals

Within each GF interval:

1. the model starts with the reference value (prior),  
2. compares it with real project data,  
3. adjusts the value accordingly.  

This creates a curve that:

- follows real behavior where data exists,  
- and remains stable where it does not.

---

## What Bayesian learning is not

It is not:

- a black box that invents values  
- a replacement for professional expertise  
- a purely statistical exercise without structure  

Instead:

- it formalizes the interaction between experience and data  
- and makes this interaction consistent across all building types  

---

## In one sentence

> Bayesian learning enables ValueApp to start from existing reference values and continuously update them using real project data.

---

## Why this improves ValueApp

Through Bayesian learning, the system becomes:

- more realistic → better reflects real projects  
- more robust → remains stable even with limited data  
- more scalable → works across all building types  

It ensures:

- that new data improves results,  
- without discarding existing knowledge.

---

## Common misconceptions

One should not assume:

- that priors are ignored  
- that data fully overrides everything  
- that more data always leads to large changes  

Instead:

- priors remain the foundation  
- data refines them  
- and the model controls the degree of adjustment  

---

## See also

- [GF intervals and learned curves](gf-intervals.html)
- [Adjustment factor methodology](complexity.html)
- [Determining variables and base effort](quantity.html)
- [Interpreting results](output-interpretation.html)