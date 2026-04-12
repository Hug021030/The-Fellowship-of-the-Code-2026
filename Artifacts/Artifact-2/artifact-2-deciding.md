# Artifact II: Decisions

---

## System Capability
As our group has left the Shire to move to our first destination toward Bree, on our endeavor to destroy the ring, we have decided that the HobViewer (formerly known as the Person Status/Inventory Viewer) will be our first feature to build inside The Fellowship Companion (TFC).
Since we hobbits are known for being gluttonous and tend to be scatterbrained, we have come to the conclusion that having a clear and concise intel of our personal and material ressources at any given moment will prove to be essential.
Otherwise, our journey is deemed to end in failure before we have even reached the Mistey Mountains.

---

## Flow
The flowchart describes how a user interacts with the HobViewer to monitor Fellowship members and respond to critical situations.

The user starts by opening the HobViewer and selecting a member to view their status. From there, they can navigate between members to maintain an overview. If a problem is detected, such as insufficient resources, the user identifies critical items and decides whether action is needed.

If action is required, the user can either use items directly (e.g., consume resources) or reallocate them between members. After completing the action, the system updates the situation and returns the user to the overview, allowing continuous monitoring and decision-making.

For this example see flowchart.weak.mermaid.md

---

## Wireframe
[Wireframe](/src/wireframe.png)

This wireframe illustrates a tool for users to quickly track status and items during the journey. The Overview features a vertical list with large touch-targets to ensure rapid character selection. In the Inventory Wireframe, the health bar is prioritized at the top to communicate the most critical status information instantly. The inventory is displayed as a fixed 16-slot grid, using numerical indicators to provide a read-only overview of item quantities. To minimize cognitive load, the wireframe intentionally excludes management or sorting functions. To optimize the User Journey, "Previous" and "Next" buttons allow users to cycle through the party without returning to the main menu. The "Return" button provides a consistent exit path to the start screen. Portraits in both views ensure immediate visual identification of teammates. This information hierarchy is designed to support vital decision-making in seconds. 

---

## Design Rationale

