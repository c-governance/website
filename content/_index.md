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

![A setting sun labeled conventional, with locked boxes in the dunes, and three people walking toward a star labeled Northstar.](/northstar-v18-light.png)
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

Continuous Governance addresses the particular requirements of IT operations in enterprise environments.

Continuous integration and testing
: The shift-left promise is kept by moving release-related activities into the early stages of ongoing development. As a result, releases can be performed often and quickly.

Continuous Governance
: The shift-left promise is kept by moving governance-related activities into the day-to-day routine. DevOps does not keep pipeline tools for this work. Those tools remain with software development. As a result, audits can be performed often, and incidents can be investigated quickly.


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

## Contact

I am Raphael, the initiator of Continuous Governance. I work at Robert Bosch GmbH. Fifteen years of experience in project management and software development led to the idea of Continuous Governance.

This page is meant as a concept paper. It considers the most recent developments in agentic programming and can be interpreted as a state-of-the-art approach to IT automation. The use of a mathematical modelling language as a mutual contract between human and agent can also be taken as a blueprint for other applications or domains.

The IT automation service under development follows this same novel agentic development approach. It comes with its own set of agents, which are context- and architecture-aware. Curated training of agents is a new task in software engineering and shows that trained agents and code belong together. I am convinced that this concept will find further application in practice.


Write to ![E-mail](/contact-email-light.png) or open a [ticket](https://github.com/c-governance/website/issues) on GitHub. 

### Impressum

Angaben gemäß § 5 DDG

Raphael Hans  
![Postal address](/contact-address-light.png)

E-Mail: ![E-mail](/contact-email-light.png)

Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Raphael Hans, Anschrift wie oben.

Diese Website wird von Raphael Hans betrieben. Robert Bosch GmbH ist nicht Diensteanbieter dieser Website.