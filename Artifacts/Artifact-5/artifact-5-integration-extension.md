# Artifact V - Integration and Extension

## Table of Contents

- [System Capabilitiy](#system-capability)
- [Decisions](#decisions)
- [Adding Logic and State](#adding-logic-and-state)
- [Design Rationale](#design-rationale)

---

## System Capability
As the Fellowship presses on toward Mordor, no company that hopes to reach the fires of Mount Doom can afford to march blind into storm or scorching sun. So we turn our eyes to the skies, applying logic to a new feature of our companion, the HobViewer, within The Fellowship Companion (TFC). To stay true to our intent, decisions and representation, where we:

- defined live weather reporting across the realms of Middle-earth as the main capability of this feature
- designed a set of weather cards that bind each fictional realm to a true place upon our own earth, so the conditions our members face are drawn from the real world rather than from invention; the Shire to New Zealand, Mordor to the Sahara, Rivendell to the Swiss Alps and Lothlórien to the Black Forest
- made our concepts tangible by building the interface through HTML and CSS, then breathing life into it through logic, calling upon an external oracle, the Open-Meteo API, to fetch the present temperature of each land and place it before our members

To prove our worth as capable members of the Fellowship, we present the HobViewer at the council in its full functionality, where the weather of the Shire, of Mordor, of Rivendell and of Lothlórien is summoned in real time and laid plainly before the eyes of all who gather. Each realm is given its own colour and mood, so that a single glance reveals both the temperature of the land and the spirit of the place. Should the oracle ever fall silent, a guiding value remains in view, so the feature never abandons its reader. As we reach this milestone on our journey, we want one of many features of the TFC ready to be used, so that we may read the skies of Middle-earth at any given moment, and our chances of casting the ring into the fires of Mount Doom rise with every step.

Alas, the Weather Condition Check *(WCC)* was created

---

## Decisions

#### Flowchart & Wireframe
- [designchoices.md](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-5/src/decisions/designchoices.md)

Both flowchart and wireframe serve us as means to conceptionalise our vision. Bringing both to paper supports us on our endeavor to realise our intentions through coding. Chronologic documentation is deemed necessary to show our work-process: From capabilities to design decisions over to generating code.

Our flowchart describes the user flow extended through our new feature. From a user's perspective, users can choose inside the HobViewer to either access the inventory or WCC. When entering the WCC, the user is welcomed with real-time data of areas on Middle-Earth.

Our low-fidelty wireframe displays our vision how we want the WCC to look like. Simplicity over complexity, neatness above overloading. Combining what and how within flowchart and wireframe delivers concept ready to be implemented.

---

## Adding Logic and State

#### HTML Pages
- [index.html](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-5/src/index.html)
- [weatherpage.html](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-5/src/weatherpage.html)
#### CSS Files
- [weatherpage-style](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-5/src/css/weatherpage-style.css)
#### JS File
- [weatherpage-script.js](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-5/src/js/weatherpage-script.js)

---

## Design Rationale

Our logic serves the original intent of the HobViewer from Assignment 1: to give members clear and trustworthy information at a glance. The weather feature delivers this by pulling genuine, up to date temperatures for each realm instead of inventing them, treating every location as a real place with real coordinates.

The behavior follows the flow and wireframe from Assignment 2. The wireframe placed a card for each realm holding a name, a real world location, a temperature and a description. Our logic keeps that structure untouched and simply fills the temperature with a live value once the data arrives, so the page works exactly as designed without any extra action from the member.

A few constraints shaped the logic. We chose the Open-Meteo API because it is free and needs no key, which keeps the feature dependable for an academic submission, and we rely on a real web address through GitHub Pages to fetch the data. If the data ever fails to load, a placeholder value stays visible so the page remains readable.

We deliberately left some things for later: the realm descriptions are still fixed text rather than reacting to live conditions, and we have not added weather icons or a loading state. These were set aside to get the core capability, real data in the right place, working cleanly first. Clarity and structure mattered more to us at this stage than added cleverness.
