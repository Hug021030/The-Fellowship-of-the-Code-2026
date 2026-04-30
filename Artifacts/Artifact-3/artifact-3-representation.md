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
![Index.html](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-3/src/index.html)

```Web
<!DOCTYPE html>
<html lang="de">
    
<head>

    <!-- Für im web anschauen -->
    <!--  https://html-preview.github.io/  -->
    
    <title>Hob Viewer</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./css/style.css">
    
</head>

<body>

    <!-- HEADER -->
    <header class="page-header">
    <h2 class="header2">Welcome to the Hobbit Viewer</h2>
    </header>
    
    <!-- MAIN -->
    <!-- place the content here please -->
    
    <main class="app-card">
        <header class="app-header">
            <img src="./images/Logo.png" alt="HobViewer Logo">
            <h1 class="app-title">HobViewer</h1>      
        </header>

        <nav>
            <ul class="hobbit-list">
                <li>
                    <img src="./images/hobbit.png" alt="Avatar von Hobbit 1">
                    <a href="hobbit-jusuf.html"><span>Hobbit Jusuf</span></a>
                </li>
                <li>
                    <img src="./images/hobbit.png" alt="Avatar von Hobbit 2">
                    <a href="hobbit-artur.html"><span>Hobbit Artur</span></a>
                </li>
                <li>
                    <img src="./images/hobbit.png" alt="Avatar von Hobbit 3">
                    <a href="hobbit-georg.html"><span>Hobbit Georg</span></a>
                </li>
                <li>
                    <img src="./images/hobbit.png" alt="Avatar von Hobbit 4">
                    <a href="hobbit-alex.html"><span>Hobbit Alex</span></a>
                </li>
                <li>
                    <img src="./images/hobbit.png" alt="Avatar von Hobbit 5">
                    <a href="hobbit-gabriel.html"><span>Hobbit Gabriel</span></a>
                </li>
            </ul>
        </nav>
    </main>
    
    <!-- FOOTER -->
    <footer>
            <p>&copy; 2026 by J.Hann, A. Hochmeister, G.Hu, A.Ipser, G.Neuberger. All rights reserved</p>
    </footer>

</body>
</html>

text

---

## Design Rationale

text
