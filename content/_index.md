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

## Whitepaper

Raphael Hans

### Summary {.abstract}

Continuous governance is proposed as an automation dialect for the operation of IT services. A task is written as a finite automaton whose state is the pair `q = (r, y)`: `r` is the desired state, derived from the IT environment, and `y` is the current state, measured on the Service-under-Control. The drift `e = r − y` selects the event `σ`, and the enforced transition is `δ(q, σ) = q'`.  Observability, controllability, and a policy-as-code trace are properties of this design. The design is illustrated by granting access to a platform resource from an Active Directory group.

### Contents {.toc}

1. [Introduction](#introduction)
2. [State machine](#state-machine)
3. [Observability & Controllability](#observability)
4. [Policy-as-Code](#policy-as-code)
5. [Scalability](#scalability)
   - [5.1 Populator — data import and processing](#populator)
   - [5.2 Generator — drift calculation and event generation](#generator)
   - [5.3 Shared memory](#shared-memory)
   - [5.4 Summary](#scalability-summary)
6. [Scenario: Manage the access to a resource](#scenario)
   - [6.1 Summary](#scenario-summary)
   - [6.2 Comparison with manifest reconciliation](#comparison)
7. [References](#references)

### Introduction {#introduction}

Releasing software over time for sustainable commercial use is a decade-old discipline in software development. Since 2010, it has evolved from centralized versioning concepts such as Subversion to distributed ones such as *git*, and from organizational models such as *Waterfall* to role-based *Agile*. These changes are only examples of how software-development-driven patterns have diffused into domain-agnostic enterprise and organizational patterns.

A continuation of this thinking is continuous deployment, as represented by tools such as Argo CD [1]. Here, modern infrastructure-as-code methods are used to adapt software-development patterns to service operations. This enables a modern DevOps engineer to handle the complexity of today's cloud platforms, and the same line evolves into methods such as GitOps. In practice, this replaces legacy Ansible-operated deployment pipelines based on classical CI tools [2] and VM-based enterprise IT infrastructure.

This is surprising for the following reason. While Ops in DevOps has evolved over time into its own automation language, Dev has no automation dialect of its own.

This whitepaper proposes a dedicated automation dialect for DevOps engineers in IT environments, "continuous governance". It focuses on an end-to-end practice, starting at the DevOps engineer's intent during the implementation phase and continuing through the calculated events of the compiled automation system during its execution. This is a governance- and audit-oriented approach that aims to match daily DevOps practice and responsibility more closely.

![Three boxed panels. CI shows build stages ending in a code or binary artifact. CD shows a rendered manifest, a diff, and Kubernetes or OpenShift. CG shows rendered policies, a state-machine design, and the four-state machine. The output is transitions and events.](/dialects-comic-v3-light.svg)

*Fig. 1. CI pipeline, CD manifest sync, and CG policy sync.*


### State machine {#state-machine}

The automation is written as a finite automaton `(Q, Σ, δ, q₀)`.

- `Q` is a finite set of states.
- `Σ` is a finite set of events.
- `δ: Q × Σ → Q` maps a state and an event to the successor state.
- `q₀ ∈ Q` is the initial state.

Any automation problem is expressed by a desired state and a current state. The automaton state is that pair.

`q = (r, y)`

`r` is the desired state. It is typically derived from the IT environment. `y` is the current state. It is typically measured from the target system, the Service-under-Control (SuC). `Q` is the finite set of pairs the problem distinguishes. `q₀ = (r₀, y₀)` is the pair at the start.

Drift is `e = r − y`. Where `r` and `y` are predicates rather than numbers, `e` is the set of predicates on which they disagree. The event `σ ∈ Σ` is selected from `e`.

The transition is the map already given. `δ(q, σ) = q'`, with `q' = (r', y')`. `r'` is the desired state at the successor, derived from the IT environment. `y'` is the current state measured from the **SuC** after `σ`. The service does not hard-code one workflow. It evaluates a declared machine. Each automation problem is one declaration of `(r, y)` and of `δ`.

In the following, the core properties of such a system are investigated.

### Observability & Controllability {#observability}

Any IT automation task that can be expressed as `q = (r, y)` with a corresponding set of transitions `δ(q, σ) = q'` can be represented by the state machine design presented above. The same fundamental control theoretical principles apply. For a DevOps engineer, this means the following for an automation task:
- observability: the current and desired state of the SuC can be observed and/or calculated
- controllability: events `δ(q, σ) = q'` can be implemented that set the SuC, the Service-under-Control, to the desired state

Both properties correspond to the control-engineering definitions of observability and controllability of a control system. On that basis, it can be assumed that any engineering automation task in practice fulfills the criteria above, and that the state machine design can be applied.

### Policy-as-Code {#policy-as-code}

Any IT automation task that can be expressed as `q = (r, y)` with the set of transitions `δ(q, σ) = q'` is machine-readable and can be tracked by a common revision-management system. It thereby fulfills policy-as-code practice. In more detail, states and transitions represent the formally abstracted rules applied to the SuC. Their verbal description, formal abstraction, and implementation belong to a single implementation trace, which has to be actively governed in practice.



### Scalability {#scalability}

Any IT automation task that can be expressed as `q = (r, y)` with the transitions `δ(q, σ) = q'` separates into two atomic calculations. The state and the event are calculated separately from each other. This is a split of the state machine into the data processing paths it requires and the transitions it enforces.

- data import and processing, the required data paths: `q = (r, y)`
- drift calculation and event generation, the enforced transitions: `δ(q, σ) = q'`

#### Populator - data import and processing {#populator}

A populator is a general data importer and processor, and one required data processing path. It can read from any IT remote system, or process cached data. It calculates `r` and `y` in generic form. That result is the state. The event is calculated by a generator.

It calculates `q = (r, y)`.

#### Generator - drift calculation and event generation {#generator}

A generator is a general drift calculator for event emission, and one enforced transition. It calculates an individual drift. It reads the state `q` already produced, applies one event `σ` selected from `e`, and yields the successor. The state is calculated by a populator.

It calculates `δ(q, σ) = q'`, with `q' = (r', y')`. One generator applies one event.


#### Shared memory {#shared-memory}

A populator and a generator are atomic: each calculates either the state or one event. Assembled, they are the finite state machine, with states `q = (r, y)` and transitions `δ(q, σ) = q'`.

All populators and generators are coupled by a shared memory, typically in the form of a database. The tables read and written by the populators and generators are the state of the machine. A further data processing path is a further populator. A further enforced transition is a further generator.

#### Summary {#scalability-summary}

With that concept, multi-threading is built in, and event-generation times within seconds are reasonable to reach for enterprise sizes of up to 500,000 associates. 

### Scenario: Manage the access to a resource {#scenario}

In the following, the state-machine design is applied to an IT-related use case: automated access management.

In the scenario presented here, access for an employee to a resource is granted on a Service-under-Control through an Active Directory group membership. This is representative of granting employees permissions to a document, a binary, source code, or other material served by the SuC. The input is a reference Active Directory group. Its member set is `r`, derived from the enterprise identity provider. The member set currently on the resource is `y`, fetched from the platform, the SuC. The output is the events that add or remove a member on that resource.

`e` is the drift of the two sets. Members in `r` but not in `y` are to be added. Members in `y` but not in `r` are to be removed. `Σ` contains `add(m)`, `remove(m)`, and `none`, where `m` is one member drawn from the drift `e`.

- `δ((r, y), add(m)) = (r, y ∪ {m})`
- `δ((r, y), remove(m)) = (r, y ∖ {m})`
- `δ((r, y), none) = (r, y)` when `e` is empty.

The definitions above are based on sets, but can be rewritten as atomic member predicates. `y ∈ {0, 1}` represents the membership state on the Service-under-Control. `r ∈ {0, 1}` represents the membership state in the reference Active Directory group. The state is `q = (r, y)`. The four states are `(0, 0)`, `(1, 0)`, `(0, 1)`, and `(1, 1)`. The initial state is `q₀ = (0, 0)`.

`e` is empty at `(0, 0)` and at `(1, 1)`, and there `σ = none`. At `(1, 0)` the predicate is `add`. At `(0, 1)` the predicate is `remove`. Each member `m` is one copy of this machine.

![State machine of one member. Initial state q0 is (0,0). States are (0,0), (1,0), (0,1), and (1,1), written as (r, y). Add to AD-Group on IdP goes from (0,0) to (1,0) and from (0,1) to (1,1). Removed from AD-Group on IdP goes the other way. The event δ((1, 0), add(*)) goes from (1,0) to (1,1). The event δ((0, 1), remove(*)) goes from (0,1) to (0,0). A manual change on SuC goes from (1,1) to (1,0) and from (0,0) to (0,1). none holds (0,0) and (1,1).](/membership-sm-v1-light.svg)

*Fig. 2. The membership machine for one member. The state is `(r, y)`. `q₀ = (0, 0)`.*

From `q₀`, an employee added to the AD group on the identity provider reaches `(1, 0)`. `δ` applies `add` and reaches `(1, 1)`. `σ = none` holds `(1, 1)`. An employee removed from the AD group on the identity provider reaches `(0, 1)`. `δ` applies `remove` and returns to `q₀`. A manual change on the resource is an error: `(1, 1)` goes to `(1, 0)`, and `(0, 0)` goes to `(0, 1)`. 

#### Summary {#scenario-summary}

Access management is a simple, straightforward example of how typical automation and development tasks can be expressed as a state machine. This applies to any task that can be executed in finite steps, where the overall setup is observable and controllable. In other words, no limitation can be assumed in IT practice.

 



#### Comparison with manifest reconciliation {#comparison}

Argo CD renders YAML to a desired manifest, reads the live object set, and reconciles the diff by create, update, or delete [1]. Continuous governance applies the same render-and-diff step to a law. The rendered artifact is a set of predicates. The live state is the SuC, observed into the same store. Reconciliation is one transition of the automaton, and the transition is persisted. Argo CD emits cluster objects. This proposal emits the recorded event of an operational rule.



### References {#references}

1. Argo CD project. *Core Concepts.* <https://argo-cd.readthedocs.io/en/stable/core_concepts/>
2. Fowler, M. *Continuous Integration.* 2006. <https://martinfowler.com/articles/continuousIntegration.html>


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