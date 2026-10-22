+++
title = 'Continuous Governance'
description = 'Continuous Governance is an automation dialect for enterprise IT operations that focuses on governance and enablement.'
summary = 'Continuous Governance is an automation dialect for enterprise IT operations that focuses on governance and enablement.'
+++

## At a Glance

![Stick-figure cycle titled Continuous Governance Cycle for auditable service operations. Observe desired and current state, plan a rule and a model controller, operate by monitoring health and drift, and record the rule, the plan, and the result. The center shows service model plus service state.](/cg-entry-comic-v7-light.png)

*Fig.1: This comic was designed and edited by Raphael Hans - created by Grok 4.7.*

The loop above is how day-to-day enterprise IT operations look when Continuous Governance is applied: formulate and observe the desired and the current state of your service, the *Service-under-Control*. Decide on your events and rules, keep a record of everything, and repeat. At the center of this is the service *state* and *model*. The *state* is a durable memory, holding the current information about the *Service-under-Control*.
The *model* is a mathematical abstraction of IT policies, automation workflows, or any other DevOps engineering task in enterprise IT that is done today with scripts or pipelines.

A *model* allows us to express our intent with precision and formalism. Basically any IT automation process with finite steps can be formulated like this:

![A state machine that expresses, mathematically, the policies inside an IT organization.](/state-machine-comic-v20-light.png)
*Fig.2: This comic was designed and edited by Raphael Hans - created by Grok 4.7.*

The *state-machine*  is one option for a *model* and is a classical microprocessor-oriented technique in control engineering. In this context, it is meant to be an enabler for IT organizations, since such formal expressions can be:

- tracked simply
- audited programmatically
- governed continuously

Although it looks old-fashioned, and perhaps unnecessarily over-engineered at first, it also builds a mutual language with coding agents and allows a fully assisted development workflow without coding - since it's replaced by **assisted modelling**. This can be interpreted as *no-code* engineering approach for IT automation and governance, which fits current trends and technical progresses. 

### An incremental change in enterprise IT

Continuous Governance promotes a shift in the awareness of transparency in IT operations. Today, DevOps teams and their services work behind curtains, and insights are available only to a handful of people in operations. Continuous Governance promotes publishing the collected information about its service and environment state through a curated, read-only API that readers outside the operating team can use. This simple idea expands incrementally and enables IT environments. This is not radical. It is simply *API-first*, together with transparency that aims to simplify upstream services and to actively support organizations in governing service content and its compliance, or in investigating incidents more quickly. 

![Continuous Governance promotes publishing all the data its controllers are collecting to its IT environment. This can change enterprises incrementally.](/enterprise-comic-v15-light.png)
*Fig.3: This comic was designed and edited by Raphael Hans - created by Grok 4.7.*

### Northstar

Continuous Governance contributes to a shift-left in IT service operations by making every IT operation 
auditable and transparent to its enterprise organization. 

![A setting sun labeled conventional, with one locked box in the dunes, and three people walking toward a star labeled Northstar.](/northstar-v30-light.png)
*Fig.4: This comic was designed and edited by Raphael Hans - created by Grok 4.7.*





## Problem

In corporate IT, an IT service is connected to other services, identity providers, platforms, and local processes already in place. The operational discipline behind this is called **DevOps (Development and Operations)**.
**Continuous deployment (CD)** tools handle the *operational aspect* and support the shift to modern cloud environments, including their complexity.
The *development aspect* of **DevOps** addresses the usage of the operated IT service, for example:
- Resource management
- Internal billing
- Maintenance and security
- Audit and governance
- Custom user and business workflows

Since **Continuous Integration (CI)** tools are already available to DevOps engineers in their IT environment, these software development tools are typically used for the automation tasks above.
**Continuous Integration (CI)** tools are perfect for building, testing, and deploying software, but they miss the original intent of DevOps. Using **CI** tools to automate IT systems has the following methodological disadvantages: 

- The operation has no durable *model*. Its *state* is the last log, a spreadsheet, or the remote system.
- Each run starts without a retained *model* and reads the live APIs again. The operation is recomputed from those calls.
- Evidence for an audit is assembled after the run.
- A further operation requires a further pipeline. The implementation is duplicated.
- A completed job records that a run finished. The record omits the resulting content of the operation, the cause of the change, and the rule that permitted it.

Any IT operations team in a corporate environment that uses continuous integration tools for service automation runs into the same problems with upstream processes and governance. Additional synergies of selecting such tools typically do not exist.


## Solution

Continuous Governance is an automation dialect for operating a service. Continuous integration, testing, deployment, and security remain the tools of software development. DevOps does not use them for service operation. The shift-left promise is that auditability and governance are first-class concerns, and they shape the design of automation in IT. The dialect introduces:

- a ``desired state`` and a ``current state``, and a ``drift`` between them, for the operated service, the ``Service-under-Control`` (``SuC``). Drift is the error, reference minus actual state
- a database whose tables store the ``state``. The state is the mathematical expression. The tables represent it
- ``rule sets`` modelled as a ``state machine``, one type of model. The controller evaluates their ``state``
- ``events`` that have ``context`` and ``intent``
- a curated, read-only ``API`` through which readers outside the operating team can see the ``state`` and the operation of the ``SuC``

With that new perspective and wording, code and logs that today live in pipelines are replaced, one for one, by a *Service-under-Control* that is auditable as it runs. This heavily impacts DevOps routines.

| Conventional | Continuous Governance |
| --- | --- |
| A run starts from a cron trigger or a source code change. | A *local model* is polled for events continuously. |
| Each run talks to live systems and then exits. | Remote state is observed into a local *model*. The next operation is calculated in memory. |
| Success means the job was green. | Success means the calculated event was applied and recorded. |
| The trace is assembled from unstructured logs. | The trace is the record of the applied event: the rule, the plan, and the result. |

That is the new perspective. A *state machine* ensures that a *Service-under-Control* is aligned over time with its operational rules. Because *events* are a calculation over a local *model*, an event can be repeated, explained, and shown. Governance is not a second process. It is the trace of the rule sets and their implementation by the DevOps engineer, and it is the trace of the events, their execution, and their runtime context.

CI, CT, and CD stay in place for software development. They remain how software is shipped, tested, or deployed. They are not the controller of the service. Continuous Governance (CG) carries shift-left into service operation and its governance, which is especially relevant in enterprise IT environments.



## Principles

Continuous Governance applies the ideas that made software delivery continuous to IT operations and their related engineering tasks. This requires a further class of automation services and platforms for enterprise IT DevOps engineers, operated in addition to the existing solutions for software developers.

Continuous integration and testing
: The shift-left promise is kept by moving release-related activities into the early stages of ongoing development. As a result, releases can be performed often and quickly.

Continuous Governance
: The shift-left promise is kept by moving governance-related activities into the day-to-day routine. DevOps does not keep pipeline tools for this work. Those tools remain with software development. As a result, audits can be performed often, and incidents can be investigated quickly.



Continuous Governance oriented services and platforms follow these principles:

State before action
: Decide from the *state* and the *model*, not from data that exists only inside a running script.

One owner
: Each record and each side effect has one owner, so several jobs do not fix the same condition.

Reviewable rules
: The *model* is the engineer's contract. It holds the desired state, the eligibility, the safeguards, and the limits. The agent's code, configuration, and tests must match that model.

Evidence by default
: The rule, the plan, and the result are one record.

Bounded recovery
: Reconciliation is idempotent. Timeouts, retries, and empty-input safeguards keep a failure visible.

Zero trust
: The *model* defines the intended state, the reference. An out-of-band change is a disturbance. The controller detects it and may revert it. A deviation is an event, not a surprise.

Human approval
: The machine may execute approved rules, and AI may speed the engineering. Ownership of requirements, architecture, acceptance, and release stays with people.

Curated learning
: Lessons are kept only when someone accepts them. They do not drift in from the last session.

### Two aspects

Continuous Governance reads the day-to-day work of a DevOps engineer as classical software engineering. This engineering process is considered actively in the service and platform design.

Operation
: How an operation is automated: each event is auditable, each change is traceable, each state is observable.

Engineering
: How that automation is built: each requirement is traceable, each decision is auditable, each change is reviewable. Assistants work inside a declared use case. The *model* is the contract. Accepted knowledge is advisory. An organization that adopts this assisted workflow can aim at ISO 42001. Conformity belongs to that organization, and it is established by assessment.

## What's new?

### A continuous governance oriented service design

A *Continuous Governance* oriented service keeps a *Service-under-Control (SuC)* in sync with it's *desired state*, by watching it's *current state*. Populator- and Generator-microservices share one database and build together a *state machine (controller)*. A user reads status, an auditor follows the trace, and a hacker is pushed back to the intended state.

![Stick-figure diagram of a Continuous Governance service: an initiator, populators, a central database, generators, and a service under control, with a user, an auditor, and a hacker.](/lorena-architecture-comic-v17-light.png)
*Fig. 5: This comic was designed and edited by Raphael Hans - created by Grok 4.7.*

This is a sketch of an unreleased service that implements the principles.


### A continuous governance oriented engineering workflow

Continuous Governance also moves the practical automation work of a DevOps engineer from scripting and coding to the engineering work of *modelling* a *state machine*: its *states* and its *transitions*. This requires particular design steps and precise mathematical formulations, which are the basis of
- governing any automation process precisely across planning, implementation, and execution
- a fully AI-assisted engineering process that considers ad-hoc know-how (feedforward) and a knowledge base (feedback), which allows human-curated training of agents over time.


Since such modelling techniques are not typically known to DevOps engineers, AI-assisted development is feasible. An organization that adopts it can aim at ISO 42001. Conformity belongs to that organization and is established by assessment.

![Two-panel stick-figure comic comparing pipeline scripting with a continuous governance engineering workflow.](/lorena-workflow-comic-v10-light.png)
*Fig. 6: This comic was designed and edited by Raphael Hans - created by Grok 4.7.*

In the context of Continuous Governance, previously unprioritized code is now planned, documented, and monitored. Its operation is readable beyond the operating team, curated in content, and read-only in effect. 


### Continuous Governance is an agentic no-code approach

A *Service-under-Control* is operated by rules, through a *state machine*. These rules are mathematical expressions, governed by the DevOps engineer. This controller-oriented perspective applies [*Policy-as-Code*](https://www.ibm.com/de-de/think/topics/policy-as-code) to service operation. The *state machine*, one type of *model*, represents the service rules one to one.

This drives a fundamental shift in DevOps practice. The *state machine* design is the single-policy contract for the engineer and the enterprise organization. Its documentation and its implementation are performed by a set of trained agents. The engineer is expected to:

- formulate the rule
- govern the implementation
- perform the end-to-end testing
- plan the rollout
- curate knowledge for the agent
- monitor service health

Here, a *state machine* is an agent-friendly language. It lets the DevOps engineer carry out the former coding work in a fully agentic way. The development trace is now straightforward Markdown files, used at every stage and simple to archive and track. Their content is the precise service rules (`intent`). Their implementation is performed by an agent (`action`). In day-to-day work, it remains a human responsibility that

`intent(human) == action(agent)`.

This split is pragmatic and reflects the governance rules in enterprise environments. With recent progress in agentic coding, it is straightforward to implement prototypical development workflows for the agents. Those workflows keep the work compliant and can fulfill individual enterprise requirements. A prototypical workflow can look like this:

![Stick-figure flowchart of a policy-as-code process from an enterprise requirement through model, plan, code, deploy, and debug to human review.](/lorena-process-comic-v23-light.png)
*Fig. 7: This comic was designed and edited by Raphael Hans - created by Grok 4.7.*

In practice, it can be seen that human implementations and manual changes do not follow the same precision as agents. These manual changes often introduce misaligned wording or content mismatches, which confuse agents. That is experience from the work. The engineer does the six duties above and does not write the implementation. An agent writes it. This can be read as a modern [no-code](https://www.ibm.com/think/topics/low-code-vs-no-code) approach.

### Summary

Enterprise IT operations always include engineering work. In the past, and still today, that work is often done with monolithic scripts and pipelines. New no-code, low-code, and vibe-coding approaches offer a chance to cut this Gordian knot. But an enterprise operation still has to carry the work through to a measurable trace: who made a change, which rule allowed it, and what was executed. Traceability and governance are the requirements the recent trends still leave to the surrounding environment.

Continuous Governance uses a *state machine* applied to a *Service-under-Control*. The service has a *desired state*, the reference, and a *current state*. Drift is the difference. One event is applied, and the rule, the plan, and the result are recorded. The same *model* is the contract for agentic coding. Classical *state machine* *modeling* names the *states* and the *transitions*. A modern agent implements them. People keep ownership of the rules and their acceptance. The standing check is that human intent and agent action match. To that end, an end-to-end agentic development process is proposed, one that takes individual enterprise requirements and boundaries into account.

In this way, Continuous Governance treats the **service operation and the engineering process behind it as one**. A *state machine* can seem old-fashioned at first, yet its well-established formalism fits the most recent trends in agentic coding and builds a mutual language between human and AI assistant. As a consequence, AI-assisted work has a central, well-defined scope in the concept. *State machines* also contribute a further perspective in IT: the [feedback loop](https://en.wikipedia.org/wiki/Closed-loop_controller). This fundamental principle of control engineering can be applied in IT in a universal way, for automation, governance, or security. It is established on embedded devices, for example in elevator control. The use of *state machines* for IT and service operation is novel and, to the best of the author's knowledge, not yet explored to that extent.

## Glossary

Entries are in alphabetical order. A term keeps its meaning from control engineering. Where this method applies the term to an IT service, the entry says so. A mention of a term elsewhere on the page links to its entry.

| Term | Definition |
| --- | --- |
| Action | see Event. |
| Controller | see state machine |
| read-only API | The interface through which a reader outside the operating team can read the state and the operation. The content is curated. The effect is read-only. |
| Current state | The actual state of the service, typically fetched from remote on a regular basis  |
| Database | Cloud native shared storage of the service-under-control |
| Desired state | The reference: the state the controller is required to reach or keep. The model defines it. |
| Drift | The error, equal to the desired state minus the current state. |
| Event | The controller's calculated response to a drift. It carries context and intent. The same state and the same model yield the same event. |
| Intent | The engineer's statement of the rule, held in the model. The engineer formulates the rule, governs the implementation, tests, plans the rollout, curates knowledge, and monitors health. The engineer does not write the implementation. |
| Model | The mathematical abstraction of the Service-under-Control and of its rules. |
| Plant | The system under control. See Service-under-Control. |
| Record | The trace of an applied event: the rule, the plan, and the result. |
| Rule | The content of the model: the admitted situations, the allowed events, and the desired state. |
| Service-under-Control | The remote system operated by the controller-oriented automation system sketched on this page. Abbreviated SuC. |
| Shift-left | Placement of a control at an earlier point in the work. Continuous integration does this for the release of software. Continuous Governance does this for the governance of service operation, and for that work replaces the pipeline. |
| State | The mathematical expression of the condition of the Service-under-Control. In practice it is represented by the database tables that store the current state and the desired state of the Service-under-Control. |
| State machine | A finite automaton (Q, Σ, δ, q₀). Q is a finite set of states, Σ a finite set of events, δ the transition function from a state and an event to the next state, and q₀ the initial state. It is the model in which the automation is written. |

{{% whitepaper %}}

## Whitepaper {#wp-title}

Raphael Hans, Draft, 22.10.2026

### Summary {.abstract}

Continuous governance is an automation dialect for the operation of an IT service. A task in this dialect declares a finite set of pairs

`(r, y)`,

a signed residual of that pair, and the events the residual enables. `r` is the desired state. `y` is the current state. One generator applies one enabled event to one pair and records the snapshot, the event, and the result.

The design applies where those pairs can be read and the enabled events can be carried out. It does not apply to every procedure of finite length, and it states no measured latency. Distinct pairs with one owner each can be advanced concurrently. The design is illustrated by granting access to a platform resource from an Active Directory group.

This whitepaper is the formal basis for continuous governance.

### Contents {.toc}

1. [Introduction](#introduction)
2. [State machine](#state-machine)
3. [Observability and controllability](#observability)
4. [Policy-as-code](#policy-as-code)
5. [Scalability](#scalability)
   - [5.1 Populator — data import and processing](#populator)
   - [5.2 Generator — drift calculation and event generation](#generator)
   - [5.3 Shared memory](#shared-memory)
   - [5.4 Summary](#scalability-summary)
6. [Scenario: Manage the access to a resource](#scenario)
   - [6.1 Summary](#scenario-summary)
   - [6.2 Comparison with manifest reconciliation](#comparison)
7. [Conclusion](#conclusion)
8. [References](#references)

### Introduction {#introduction}

Software development is a craft. Since 2010, it has evolved from centralized versioning concepts such as Subversion to distributed ones such as *git*, and from organizational models such as *Waterfall* to role-based *Agile*. Many of these software-development patterns have diffused into enterprise practice.

A continuation of this thinking is continuous deployment, as represented by tools such as Argo CD [1]. Infrastructure-as-code takes a rendered manifest, compares it with the live system, and syncs the difference. That pattern replaces a class of deployment pipelines that had been written as classical CI jobs [2].

CI remains the dialect that builds and tests an artifact. CD remains the dialect that syncs a manifest. The policies a DevOps engineer is accountable for in daily operation — who may access a resource, which rule allowed a change, what the service now contains — are still often expressed as scripts or as a further pipeline. A finished job of that kind records that a run ended. It does not retain the pair `(r, y)` or the event that was applied to it.

This whitepaper proposes a dialect for that work, called continuous governance. It runs from the policy, written as a declared machine, through the event a generator calculates and applies. The aim is a governance and audit record that matches the accountability of the operating role.

![Three boxed panels. CI shows build stages ending in a code or binary artifact. CD shows a rendered manifest, a diff, and Kubernetes or OpenShift. CG shows rendered policies, a state-machine design, and the four-state machine. The output is transitions and events.](/dialects-comic-v3-light.svg)

*Fig. 1. CI pipeline, CD manifest sync, and CG state-machine design and policy sync.*


### State machine {#state-machine}

The automation is written as a transition system

`(Q, Σ, δ, q₀)`.

- `Q` is a finite set of states.
- `Σ` is a finite set of events. An event here is an action the generator may apply. It is not an input symbol of a language recognizer. A recognizer would also name an accepting set [4]. This machine does not accept a language.
- `δ` is a partial function. It is defined only when the event is enabled at the state, and the value is the successor after the actuator succeeds.
- `q₀ ∈ Q` is the starting pair of the task that declares it.

The state is the pair

`q = (r, y)`.

`r` is the desired state, written by a populator from the IT environment. `y` is the current state, written by a populator from the target system, the Service-under-Control (SuC). `Q` is the finite set of pairs the task distinguishes. A populator write is not an element of `Σ`. It replaces `r`, or `y`, or both, and the next round reads the new pair.

Drift is the signed residual of that pair, written `e`. The sign is part of the definition, because the event depends on which side is ahead.

When `r` and `y` are bits, `r, y ∈ {0, 1}`,

`e = r − y`,

with `e ∈ {−1, 0, +1}`. Subtraction is defined because both components are numbers in the same set [3]. When `r` and `y` are sets, subtraction is not the operation. The residual is the ordered pair of differences

`e = (r \ y, y \ r)`.

Members of `r \ y` are to be added. Members of `y \ r` are to be removed. The residual is empty when `r = y`. A test `r ≠ y` says only that the residual is nonempty. It does not name the event.

The generator selects one enabled event `σ ∈ Σ` from the residual. When several events are enabled, the declaration names the order, so the same pair yields the same event. The transition is

`δ(q, σ) = q'`,

defined only for an enabled `σ`, and `q'` is the pair after the actuator succeeds. In the machines in this paper the actuator changes `y` and leaves `r` to the populator. A failed actuator does not apply `δ`. The pair stays, and the failure is recorded.

A task is one declaration of `Q`, of the residual, of the enabled events, and of `δ`. The declaration is the model. The populators and generators run it. They are not themselves the model.

### Observability and controllability {#observability}

The machine above is usable for a task when the following conditions hold. They are assumptions of the dialect. This paper does not prove that every IT procedure meets them.

Observation. For each declared key, a populator can write `r` and `y`, or it can record that the read failed. A failed read is not stored as the value that means absent. Stored that way, a missing response becomes a residual and can delete a live resource.

Control. For every nonempty residual the declaration has an enabled event, and a successful actuator moves `y` toward `r`. At an empty residual the enabled event is `none`, and

`δ(q, none) = q`.

The actuator is idempotent at the target: applying the successful event again does not create a second copy. A change of `y` that no declared event can undo is outside the machine. The generator has nothing to apply.

These conditions are the operational reading of observability and controllability used in this paper. The textbook reading is a different test. For a linear state-space model, observability and controllability are rank conditions on the system matrices [3]. This paper does not claim those rank conditions, and a finite checklist of steps is not enough to put a task inside `Q`. A counter, a timestamp, or an unbounded collection is in `Q` only after the task declares a finite schema.

Under these assumptions, with `r` held fixed during the step and the actuator successful, a membership bit reaches `r = y` in one event. The next round sees a new populator write, including a disturbance, and may correct it. The tuple `(Q, Σ, δ, q₀)` does not provide that convergence by itself.

### Policy-as-code {#policy-as-code}

The declaration is the policy: the pairs, the residual, and the enabled events. It is text, so a revision-management system can hold it, diff it, and review it. That is the policy-as-code practice this dialect uses.

A round then has one trace. The trace holds the declaration that was in force, the pair the generator read, the event it selected, and the result, which is the successor or the recorded failure. The event is the plan. Without the pair that was read, the event cannot be repeated from the trace. Verbal description, formal declaration, and implementation meet in that trace. A person accepts the declaration and the implementation that is supposed to match it. The acceptance is a judgment on the trace and on the tests. It is not an equality between a sentence and a source file.

A pair `(r, y)` that was never given a residual and a set of enabled events is not yet a policy in this sense.

### Scalability {#scalability}

A task that declares the pair and the events splits into two calculations. Populators write the pair. Generators read a committed pair and apply one enabled event. A further data path is a further populator. A further kind of correction is a further generator.

#### Populator — data import and processing {#populator}

A populator is a data path. It reads a remote system, or data already stored, and writes the component it owns: the reference `r`, the measurement `y`, or both. It does not select `σ`. The pair it publishes is

`q = (r, y)`,

or a recorded failure to read. Each component of a key has one writing populator, so two imports do not overwrite the same value in the same round.

#### Generator — drift calculation and event generation {#generator}

A generator reads one committed pair, computes the residual, and applies one enabled event. One generator applies one event to one key. It then records the successor the actuator confirmed, or the failure. In the machines here that successor changes `y` and leaves `r` as the populator last wrote it:

`δ(q, σ) = q'`.

#### Shared memory {#shared-memory}

Populators and generators meet in a shared memory, typically a database. The tables store the latest committed pair of each key. They are the memory of the machine. They are not the declaration.

A generator acts on a committed pair. Writes still in flight are not yet that pair. Two generators do not apply two events to the same key in the same round. That is the one-owner rule. Keys that satisfy it do not share a write, so their events can be applied concurrently. The concurrency is the product of the per-key machines. It is not a property of every automaton, and this paper reports no measured reaction time.

#### Summary {#scalability-summary}

The work of a round grows with the keys whose residual is nonempty, and those keys can be handed to separate generators when each key has one owner. Enterprise size is then a question of how many such keys the operators declare, and of how the shared memory is run. It is not a claim that a state machine is fast at every scale.

### Scenario: Manage the access to a resource {#scenario}

Access for an employee to a resource is granted on a Service-under-Control through an Active Directory group. The same shape covers a document, a binary, a source repository, or another object the SuC serves. The reference is the member set of the Active Directory group, written `r`, from the enterprise identity provider. The measurement is the member set currently on the resource, written `y`, from the SuC. The events add or remove one member on that resource.

This scenario takes the directory's set of people as finite. For the sets,

`e = (r \ y, y \ r)`.

`add(m)` is enabled when `m ∈ r \ y`. `remove(m)` is enabled when `m ∈ y \ r`. `none` is enabled when `r = y`. The declaration orders the enabled members, for example by directory identifier, and the generator takes the first. The successful transitions, with `r` unchanged by the actuator, are

`δ((r, y), add(m)) = (r, y ∪ {m})`,

`δ((r, y), remove(m)) = (r, y ∖ {m})`,

`δ((r, y), none) = (r, y)`.

If `m` is already in `y`, then `y ∪ {m} = y`. The generator does not emit `add(m)` in that case, because it is not enabled. A retry after a lost response is a no-op when the actuator implements the union. Removal is the same: `y ∖ {m} = y` when `m` is already absent.

The set machine is one bit machine per person. From here, `r` and `y` denote the bits of one member, not the sets. `r, y ∈ {0, 1}`, with `r = 1` when the member is in the reference group and `y = 1` when the member is on the resource. The state is `(r, y)`. The four states are `(0, 0)`, `(1, 0)`, `(0, 1)`, and `(1, 1)`. For a member absent on both sides at the start of the story,

`q₀ = (0, 0)`.

A member who is already present starts at the pair the first populator writes. That pair need not be `(0, 0)`.

| (r, y) | Residual | Enabled event | After a successful actuator |
| --- | --- | --- | --- |
| (0, 0) | empty | none | (0, 0) |
| (1, 1) | empty | none | (1, 1) |
| (1, 0) | add | add | (1, 1) |
| (0, 1) | remove | remove | (0, 0) |

![Membership machine for one member. State is (r, y). q0 is (0, 0). Green reference writes: Add to AD-Group on IdP from (0, 0) to (1, 0), and Removed from AD-Group on IdP from (1, 1) to (0, 1). Black actuator events: add from (1, 0) to (1, 1), remove from (0, 1) to (0, 0), and none holding (0, 0) and (1, 1). Red disturbances on the SuC: (1, 1) to (1, 0), and (0, 0) to (0, 1). Dashed edges reverse the green reference writes and are marked unused.](/membership-sm-v1-light.svg)

*Fig. 2. The membership machine for one member. The state is `(r, y)`. `q₀ = (0, 0)`. Green edges write `r`. Black edges are `δ`. Red edges disturb `y`.*

From `q₀`, a populator that sees the employee added to the AD group writes `(1, 0)`. That write is the green edge on the figure. It is not `δ`. The generator then applies `add` and, on success, reaches `(1, 1)`. `none` holds `(1, 1)`. A populator that sees the employee removed from the AD group, while the resource still lists them, writes `(0, 1)`. The generator applies `remove` and returns to `(0, 0)`.

The red edges are disturbances. A manual change on the resource moves `(1, 1)` to `(1, 0)`, or `(0, 0)` to `(0, 1)`, without an enabled event. The residual is then nonempty, and the next successful `add` or `remove` may restore the pair. The dashed edges are the reverse of the green reference writes. The figure marks them as unused in this scenario. They are not actuator events. A later populator read still copies the directory as it stands.

#### Summary {#scenario-summary}

Access management fits the machine because each person is one bit and the corrections are `add` and `remove`. A procedure of finite length, with a counter or an open-ended collection and no declared finite schema, is not yet this machine. Where the assumptions in the observability section hold, the same declaration pattern applies. Where a read cannot be trusted, or no event can undo the change, the pattern stops.

#### Comparison with manifest reconciliation {#comparison}

Argo CD reconciles a desired manifest with the live state of a cluster [1]. Each pass reads the desired state and the current state and applies the difference. The membership machine has the same shape on one bit: a desired value, a current value, a residual, and one corrective event.

The difference is the record and the object of the policy. A manifest sync records that the cluster was brought toward the manifest. The machine in this paper records the rule that enabled `add(m)` or `remove(m)`, the pair that was read, the event, and the result. CI and CD stay in place for build and for deployment. Continuous governance is the dialect for the operating rule. Group membership is the example.

### Conclusion {#conclusion}

The state-machine section defines the machine as a finite set of pairs, a signed residual, and a partial transition on enabled events. Populator writes of `r` and `y` sit outside `Σ`. The observability section states the assumptions under which one successful event reaches `r = y` for a membership bit, and it separates those assumptions from the rank tests of linear control theory. The policy-as-code section defines the trace a round keeps. The scalability section separates writers of the pair from appliers of events, and limits concurrency to keys with one owner. The scenario writes access management in sets and in bits, in agreement with the figure, and places the pattern next to manifest reconciliation.

The paper does not show that every IT procedure is this kind of machine, and it does not report a latency.

### References {#references}

1. Argo CD project. *Core Concepts.* <https://argo-cd.readthedocs.io/en/stable/core_concepts/>
2. Fowler, M. *Continuous Integration.* 2006. <https://martinfowler.com/articles/continuousIntegration.html>
3. Åström, K. J. and Murray, R. M. *Feedback Systems: An Introduction for Scientists and Engineers.* Princeton University Press, second edition, 2021. The regulation error `e = r − y` is defined on a common signal. Observability and controllability, in that text, are properties of a linear model.
4. Hopcroft, J. E., Motwani, R., and Ullman, J. D. *Introduction to Automata Theory, Languages, and Computation.* 3rd edition. A deterministic finite automaton is a 5-tuple `(Q, Σ, δ, q₀, F)`.

{{% /whitepaper %}}

## Contact

I am Raphael, author of this page and initiator of Continuous Governance. In ancient times, I studied control engineering, and today I work at Robert Bosch GmbH. Fifteen years of hands-on work in project management, service operation, and software development led to Continuous Governance.

The domain changed over those years, from embedded real-time systems to cloud-based service operation. Automation pipelines and jobs remained the de facto standard in my daily work, as a software developer and as a DevOps engineer.

Software-development principles are fruitful in day-to-day DevOps work, but the automation tools and services for that work should be different. These two practices create different artifacts and follow a different scope in daily work. As a software developer I trace a requirement, its implementation, and the build, test, and delivery of a binary or a service. As a DevOps engineer I trace enterprise governance rules, their implementation, their continuous execution, and the drift of the operated service. These are different jobs, and they require different automation approaches.

This page is a concept paper. It proposes a dialect of its own for the automation of IT systems. Governance is the focus, and a control-engineering approach is a good fit for it. A prototype of the service is in internal use at Robert Bosch GmbH.

Continuous-Governance.org is at present a privately motivated one-person project. The intention is an open-source initiative from business to business: begun in enterprise practice, and carried by the enterprises that share the problem and benefit from the result. I am looking for practitioners, contributors, and collaborators in enterprise IT who know this problem from their own operations. The services they run are subject to governance rules, while the automation in daily use was built to ship software.

The goal is a new kind of service, open source, and supported by the companies that benefit from it directly. The service will be presented in more detail in the coming months. Further information will be released step by step. Organizations that join the conversation now can take part in shaping what is built.

If you work in enterprise IT and this gap is part of your daily work, I welcome a conversation. Write to ![E-mail](/contact-email-light.png) or open a [ticket](https://github.com/c-governance/website/issues) on GitHub. 

### Impressum

Angaben gemäß § 5 DDG

Raphael Hans  
![Postal address](/contact-address-light.png)

E-Mail: ![E-mail](/contact-email-light.png)

Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Raphael Hans, Anschrift wie oben.

Diese Website wird von Raphael Hans betrieben. Robert Bosch GmbH ist nicht Diensteanbieter dieser Website.