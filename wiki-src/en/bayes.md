---
i18nTitle: wiki.bayes.title
navKey: bayes
---

# Bayesian learning in ValueApp

Bayesian learning describes **how ValueApp combines existing knowledge with real project data**.

It allows the system to:

- start from a structured reference,
- learn from observed projects,
- and update results in a controlled and transparent way.

---

## What Bayesian means (in simple terms)

At its core, Bayesian thinking answers one question:

> *“How should we update what we believe, once we see new data?”*

It always combines two things:

- what we **already expect**  
- what we **actually observe**

In ValueApp, this means:

- we do not start from zero  
- and we do not blindly trust data  
- we **combine both**

---

## The two ingredients

### 1. Prior (existing knowledge)

The **prior** is what we know before looking at the current data.

In ValueApp, this comes from:

- studies (e.g. ETH work),
- structured experience,
- established reference curves.

It defines:

> *What we expect a building type to look like across GF intervals.*

---

### 2. Data (real projects)

The data consists of:

- actual projects,
- observed values,
- real distributions across building sizes.

It shows:

> *What is actually happening in practice.*

---

## The result: an updated estimate

Bayesian learning combines prior and data to produce:

> a **posterior** (updated result)

This is what ValueApp shows as the **learned curve**.

It is:

- not purely predefined,
- not purely data-driven,
- but a **combination of both**.

---

## Why this is necessary

If we used only priors:

- results would be stable  
- but disconnected from reality  

If we used only data:

- results would be unstable  
- especially with few observations  

Bayesian learning solves this by balancing both.

---

## How the balance works

The system automatically adjusts how much it trusts each source.

### When there is a lot of data

- the model leans more on **real projects**  
- the result becomes more specific  
- the curve reflects observed behaviour  

### When there is little data

- the model leans more on the **prior**  
- the result stays stable  
- unrealistic jumps are avoided  

In both cases:

> The system behaves consistently, but adapts where possible.

---

## Why this matters for building types

Not all building types are equally represented.

Some have:
- many projects  
- strong data signals  

Others have:
- very few observations  
- incomplete information  

Bayesian learning allows ValueApp to:

- produce results for all building types,  
- while clearly reflecting data availability,  
- without overfitting or guessing.

---

## What this means for GF intervals

Within each GF interval, the model:

1. starts from the reference value (prior),  
2. compares it with real project data,  
3. adjusts the value accordingly.  

This creates a curve that:

- follows real behaviour where data exists,  
- and remains anchored where it does not.

---

## What Bayesian learning is not

It is not:

- a black box that invents values  
- a replacement for domain knowledge  
- a purely statistical exercise without structure  

Instead:

- it formalises how experience and data interact  
- and makes that interaction consistent across all building types  

---

## In one sentence

> Bayesian learning allows ValueApp to start from established reference knowledge and continuously update it using real project data.

---

## Why this improves ValueApp

With Bayesian learning, the system becomes:

- more realistic → reflects actual projects  
- more robust → stable even with limited data  
- more scalable → works across all building types  

It ensures that:

- new data improves results,  
- but existing knowledge is never discarded.

---

## Common misunderstandings

Do not assume:

- that priors are ignored  
- that data fully overrides everything  
- that more data always means large changes  

Instead:

- priors remain the foundation  
- data refines them  
- and the model controls how much adjustment is appropriate  

---

## See also

- [GF intervals and learned curves](gf-intervals.html)
- [Complexity dimensions](complexity.html)
- [Quantity and baseline effort](quantity.html)
- [Interpreting results](output-interpretation.html)