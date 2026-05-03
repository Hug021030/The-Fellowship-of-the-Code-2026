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

**How does this interface support the intent and value defined in Assignment 1?**

Das Interface der „Memberpage“ geht auf Intent und Value aus Assignment 1 ein, indem es Members hilft, durch eine visuelle Aufbereitung und eine klare Struktur stets ein geteiltes Verständnis über ihren Status und ihre Ressourcen zu behalten. 
Sowohl die eigenen als auch die Ressourcen, die Ressourcenanzahl und der Gesundheitsstatus der anderen Mitglieder können durch das Interface des „HobViewers“ eingesehen werden. Somit wird der Value aus Assignment 1 unterstützt, indem sichergestellt wird, dass der Gruppe nie wieder das Essen für ein zweites Frühstück ausgeht, während gleichzeitig die Aufmerksamkeit aller Mitglieder für kritische Zustände – wie zum Beispiel Vergiftungen durch eine Morgul-Klinge – verbessert wird.

**How does it reflect the wireframe from Assignment 2?**

Die Struktur und Navigation der Wireframes aus Assignment 2 wurden exakt übernommen. 
* Vertikale Liste „Overview Hobbit“-Screen ermöglicht schnelle Auswahl der Charaktere durch große Touch-Targets
* Informationshierarchie der Detailansicht in Memberspage wurde beibehalten
    * HP-Balken oben platziert
    * 16-Slot-Grid für Items und Ressourcen
*Navigationselemente wie: „Previous“-, „Next“- und „Return“-Buttons wurden eins zu eins übernommen.

**What did you deliberately not implement yet?**

Der Plan ist, KI-generierte Bilder von uns im Hobbit-Stil auf der „Overview Hobbit“-Seite einzufügen. Da wir jedoch aus Datenschutzgründen unsere eigenen Gesichter nicht für das KI-Training verwenden möchten, haben wir diesen Schritt vorerst ausgelassen. Wir sind uns aktuell noch unsicher, ob wir diesen Weg wählen oder eine andere Lösung für die Portraits finden wollen.

**What assumptions or constraints shaped your decisions?**

* Es wurde angenommen, dass Nutzer schnell zwischen den Charakteren wechseln müssen, weshalb „Previous“ und „Next“ Buttons eingebaut wurden, um den Umweg über das Hauptmenü zu vermeiden.

* Es wird vorausgesetzt, dass die Gefährten bereits wissen, wie sie das Interface bedienen müssen.

* Da die Privatsphäre der Teammitglieder Priorität hat, wurde auf die Nutzung persönlicher Daten für KI-Generierungen verzichtet, was die visuelle Platzhalter-Strategie für die Porträts bestimmt hat.

* Um die Entscheidungsfindung für die Gefährten in Stresssituationen zu erleichtern, wurde bewusst auf komplexe Management- oder Sortierfunktionen im Inventar verzichtet.

