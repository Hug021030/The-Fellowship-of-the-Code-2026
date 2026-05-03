# Artifact III - Representation

## Table of Contents

- [System Capabilitiy](#system-capability)
- [Static Interface Implementation](#static-interface-implementation)
- [Design Rationale](#design-rationale)

---

## System Capability
As the Fellowship presses onward from the Shire toward Bree, the need for clarity and unity grows ever more urgent. To meet this need, we are implementing the HobViewer within The Fellowship Companion (TFC) — a capability designed to provide a clear and shared view of each member’s condition, readiness, and available resources at any given moment.

At this early stage of the journey, when the road is uncertain and dangers may arise without warning, such awareness is vital. Though the path may seem gentle, even the smallest weakness — an unnoticed injury, dwindling supplies, or a moment of disarray — could place the entire Fellowship in peril. Without a shared understanding, the group risks acting as scattered individuals rather than as a united force.

Thus, this capability serves as a guiding light in the early days of the quest. It enables the Fellowship to detect risks before they grow, to make informed decisions, and to move forward with purpose and coordination. For only through such unity and awareness can the Fellowship hope to withstand the trials that lie ahead.

---

## Static Interface Implementation

#### HTML Pages
- [index.html](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-3/src/index.html)
- [hobbit-jusuf.html](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-3/src/hobbit-jusuf.html)
- [hobbit-artur.html](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-3/src/hobbit-artur.html)
- [hobbit-georg.html](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-3/src/hobbit-georg.html)
- [hobbit-alex.html](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-3/src/hobbit-alex.html)
- [hobbit-gabriel.html](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-3/src/hobbit-gabriel.html)

#### CSS Style Sheets
- [index-style](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-3/src/css/index-style.css)
- [memberpage-style](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-3/src/css/memberpage-style.css)

  


---

## Design Rationale

The interface of the "Memberpage" addresses the intent and value from Assignment 1 by helping members maintain a shared understanding of their status and resources at all times through visual preparation and a clear structure. Both one's own resources and the resource count and health status of other members can be viewed through the "HobViewer" interface. Thus, the value from Assignment 1 is supported by ensuring that the group never runs out of food for a second breakfast again, while simultaneously improving the attention of all members to critical conditions—such as poisoning by a Morgul blade.

The structure and navigation of the wireframes from Assignment 2 were adopted exactly.
* The vertical list on the "Overview Hobbit" screen allows for quick character selection through large touch targets.
* The information hierarchy of the detail view in the Memberpage was retained.
    * HP bars are placed at the top.
    * A 16-slot grid for items and resources.
* Navigation elements such as "Previous", "Next", and "Return" buttons were adopted one-to-one.

The plan is to include AI-generated images of ourselves in Hobbit style on the "Overview Hobbit" page. However, since we do not want to use our own faces for AI training due to data privacy reasons, we have skipped this step for now. We are currently still unsure whether we want to choose this path or find another solution for the portraits.

* It was assumed that users need to switch quickly between characters, which is why "Previous" and "Next" buttons were integrated to avoid the detour via the main menu.

* It is assumed that the companions already know how to operate the interface.

* Since the privacy of the team members is a priority, the use of personal data for AI generation was waived, which determined the visual placeholder strategy for the portraits.

* To facilitate decision-making for the companions in stressful situations, complex management or sorting functions in the inventory were deliberately omitted.

