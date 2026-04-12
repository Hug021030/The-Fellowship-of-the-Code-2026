# Artifact II: Decisions

---

## System Capability
As our group has left the Shire to move to our first destination toward Bree, on our endeavor to destroy the ring, we have decided that the HobViewer (formerly known as the Person Status/Inventory Viewer) will be our first feature to build inside The Fellowship Companion *(TFC)*.
Since we hobbits are known for being gluttonous and tend to be scatterbrained, we have come to the conclusion that having a clear and concise intel of our personal and material ressources at any given moment will prove to be essential.
Otherwise, our journey is deemed to end in failure before we have even reached the Mistey Mountains.

---

## Flow
The flowchart describes how a user interacts with the HobViewer to monitor Fellowship members and respond to critical situations.

The user starts by opening the HobViewer and selecting a member to view their status. From there, they can navigate between members to maintain an overview. If a problem is detected, such as insufficient resources, the user identifies critical items and decides whether action is needed.
If action is required, the user can either use items directly (e.g., consume resources) or reallocate them between members. After completing the action, the system updates the situation and returns the user to the overview, allowing continuous monitoring and decision-making.

```mermaid
flowchart TB
    A["Open The HobViewer"] --> B
    B["Choose member to monitor"]
    B -- Done Monitoring --> M["Close the HobViewer"]
    B --> C["Display member's page"]

    C --> N["Return"] --> B
    C --> O["Next Hobbit"] --> C
    C --> P["Previous Hobbit"] --> C
    C -- Resources unsufficient --> G["Identify critical items"]
    
    G --> H{"take action?"} -- No --> N 
    H -- Yes --> J["reallocate items"]
    H -- Yes --> I["Interact with item eg. eat"] --> L
    J --> K["choose member"] --> L
  
    L["Done?"]
    L -- No --> H
    L -- Yes --> N
 ```

For this example see flowchart.weak.mermaid.md

---

## Wireframe
[Wireframe]()

This wireframe illustrates a tool for users to quickly track status and items during the journey. The Overview features a vertical list with large touch-targets to ensure rapid character selection. In the Inventory Wireframe, the health bar is prioritized at the top to communicate the most critical status information instantly. The inventory is displayed as a fixed 16-slot grid, using numerical indicators to provide a read-only overview of item quantities. To minimize cognitive load, the wireframe intentionally excludes management or sorting functions. To optimize the User Journey, "Previous" and "Next" buttons allow users to cycle through the party without returning to the main menu. The "Return" button provides a consistent exit path to the start screen. Portraits in both views ensure immediate visual identification of teammates. This information hierarchy is designed to support vital decision-making in seconds. 

---

## Design Rationale
The HobViewer is centered around providing clarity in different situations, where uncertainty would lead to poor decisions such as misallocating food or overlooking critical health states. As described, our intent for the TFC is defined as a support tool to understand our current situation at any given moment and to be able to act accordingly. The HobViewer implements this by making each member’s status and inventory accessible to all members of the Fellowship. 

Instead of adding complexity, the design prioritizes comprehension and transparency, which is crucial in a resource-constrained world. A key design decision was to structure the first page of the UI as a selection page, so that users can quickly select and access a specific member. 
On the second page, users can access both inventory and health-bar of selected members allowing them to immediately understand the selected members condition and available resources. 
From there, users can evaluate available resources and take appropriate actions, which supports fast decision making by providing a holistic view of the members situation. 

The focus of this design was deliberately narrowed to the core interactions of viewing and managing resources. We intentionally exclude features such as confirmation dialogs and advanced item categorization. While these features would be relevant in a complete system, we’ve concluded that these aren’t essential at this stage of our journey and would distract from the main system capability that we’ve worked on:  
**Monitor and assess available resources** 

We assumed within our design choice that prioritizing fast access, clear structure and minimal interaction steps are more valuable to the Fellowship than an in-depth and complex design, resulting in various constraints. The absence of confirmation dialogs increases the risk of unintended actions. Additionally, the low fidelity requirement constrained the level of detail in the visual design, shifting the focus toward structure and interaction efficiency rather than aesthetics.
