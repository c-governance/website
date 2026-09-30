+++
title = 'Continuous Governance'
description = 'A method that makes IT automation governable.'
summary = 'Continuous Governance sits beside continuous integration, delivery, and testing. It keeps IT operations auditable by calculating each change in memory, on a state machine.'
+++

## Problem

In corporate IT, an IT service is connected to other services, identity providers, platforms, and local processes already in place. The operational discipline behind this is called **DevOps (Development and Operations)**.
**Continuous deployment (CD)** tools handle the *operational aspect* and support the shift to modern cloud environments, including their complexity.
The *development aspect* of **DevOps** is typically covered by applying **Continuous Integration (CI)** tools to automation tasks that address the IT service itself, for example:

- Resource management
- Internal billing
- Maintenance and security
- Audit and governance
- Custom user and business workflows

**Continuous Integration (CI)** tools are perfect for building, testing, and deploying software, but they miss the original intent of DevOps. Using **CI** tools to automate IT systems has the following methodological disadvantages: 

- The operation has no durable model. Its state is the last log, a spreadsheet, or the remote system.
- Each run starts without a retained model and reads the live APIs again. The operation is recomputed from those calls.
- Evidence for an audit is assembled after the run.
- A further operation requires a further pipeline. The implementation is duplicated.
- A completed job records that a run finished. The record omits the resulting content of the operation, the cause of the change, and the rule that permitted it.

Any IT operations team in a corporate environment that uses continuous integration tools for service automation runs into the same problems with upstream processes and governance.

> **Vision**
>
> Continuous Governance contributes to a shift-left in IT operations by making every IT operation auditable by definition.


## Solution

Continuous Governance is an automation dialect that supplements the ones already in use: continuous integration, testing, deployment, and security. It focuses on the automation of network applications that modern IT environments require. The shift-left promise is that auditability and governance are first-class concerns, and they shape the design of the service. The dialect introduces:

- a desired state and a current state for a network application
- a database as the single source of truth, holding authoritative content
- rule sets that drive an event factory and build a state machine
- events that carry a context and an intent

With that, logic that today lives in pipelines can be replaced, one for one, by a continuous governance instance that is auditable as it runs.

| Pipeline perspective | CG perspective |
| --- | --- |
| A run starts from a change and produces an artifact. | A state machine keeps an operation aligned with an intended state. |
| Each run talks to live systems and then exits. | Remote state is observed into a local model. The next operation is calculated in memory. |
| Success means the job was green. | Success means the calculated change was applied and recorded. |
| Governance is a report assembled later. | Governance is how the machine runs: observe, decide, act, record. |

That is the new perspective. A pipeline produces an artifact and forgets the world. A state machine stays with the operation. Because the decision is a calculation over a local model, it can be repeated, explained, and shown. Governance is not a second process. It is the trace of the calculation: what was observed, what was planned, what was executed, and which rule applied.

CI, CD, and CT stay in place. They remain how software is integrated, delivered, and tested, including the software that implements CG. CG is how the operations that software performs are kept correct over time.




## Method

CG applies the ideas that made delivery continuous — small feedback loops, repeatability, version control, automation, and rapid recovery — to operations and to the engineering of those operations.

### The loop

1. Observe desired state and current state.
2. Keep both in a durable local model.
3. Calculate the difference in memory, by rules.
4. Plan one bounded, traceable change.
5. Execute that change through the system that owns the side effect.
6. Record the outcome where the model can be read.
7. Review the evidence, improve the rules, and repeat.

Each step is explicit. The automation is a governed state machine with an evidence trail, not a sequence of API calls that disappears when the job ends.

### Rules

State before action
: Decide from the model, not from data that exists only inside a running script.

One owner
: Each record and each side effect has one owner, so several jobs do not fix the same condition.

Reviewable rules
: Desired state, eligibility, safeguards, and limits live in code, configuration, and tests.

Evidence by default
: Observation, plan, result, and the rule that allowed them are one record.

Bounded recovery
: Reconciliation is idempotent. Timeouts, retries, and empty-input safeguards keep a failure visible.

Zero trust
: The model is the source of truth for the intended state. An out-of-band change is expected. The machine detects it and may revert it. A deviation is an event, not a surprise.

Human approval
: The machine may execute approved rules, and AI may speed the engineering. Ownership of requirements, architecture, acceptance, and release stays with people.

Curated learning
: Lessons are kept only when someone accepts them. They do not drift in from the last session.

### Two aspects

Usable together or alone.

Operation
: How an operation is automated: each event is auditable, each change is traceable, each state is observable.

Engineering
: How that automation is built: each requirement is traceable, each decision is auditable, each change is reviewable. Assistants work inside a declared use case. Architecture is the contract. Accepted knowledge is advisory. This side is ISO 42001 compliant, and that compliance has to be proven in practice.

## What changes

Continuous Governance addresses the particular requirements of IT operations in enterprise environments.

Continuous integration and testing
: The shift-left promise is kept by moving release-related activities into the early stages of ongoing development. As a result, releases can be performed often and quickly.

Continuous Governance
: The shift-left promise is kept by moving governance-related activities into the day-to-day routine. As a result, audits can be performed often, and incidents can be investigated quickly.

In practice, this affects the following:

| Who | What they gain |
| --- | --- |
| User Experience | Flexible code contracts, microservices, or shared memory allow faster synchronization than purely synchronous pipeline implementations. |
| Service managers | They govern what the operation contains, not only whether a job was green. |
| Operators | Scale is another instance of a known service. Health is data on the model: last run, last error, queue. |
| Engineers | A new operation is a new transition on the same machine, not a copied pipeline. AI assistance is bounded by the architecture and by human review. This enables fully process-compliant development of automation code that was previously unprioritized. |
| Security | The machine does not trust the systems it drives. Drift and unexpected privilege are inputs. The state machine sets the intended state again. |
| Auditors | Evidence is produced while the operation runs: observation, intent, and execution. It is not collected weeks later. |


## Contact

Hi,

I am Raphael, the initiator of Continuous Governance. I work at Robert Bosch GmbH. Fifteen years of experience in project management and software development led to the idea of Continuous Governance. At Robert Bosch GmbH, a continuous governance service is applied in practice and rolled out internally.

The service is planned for release under an open-source license. Details are still under internal discussion. Updates are published on this site. I am happy to take questions, feedback, and suggestions. If you want to know more about Continuous Governance, please contact me. 

Write to [raphael.hans@continuous-governance.org](mailto:raphael.hans@continuous-governance.org) or open a [ticket](https://github.com/c-governance/website/issues) on GitHub. 

## Impressum

Angaben gemäß § 5 DDG

Raphael Hans  
Seestraße 6, 71229 Leonberg

E-Mail: [raphael.hans@continuous-governance.org](mailto:raphael.hans@continuous-governance.org)

Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Raphael Hans, Anschrift wie oben.

Diese Website wird von Raphael Hans betrieben. Robert Bosch GmbH ist nicht Diensteanbieter dieser Website.