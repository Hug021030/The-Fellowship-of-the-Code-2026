# The Red Book of Westmarch - Chapter II: Paths & Choices

*`"All we have to decide is what to do with the time that is given us." - Gandalf the Grey`*

**Table of Contents**

- [The Red Book of Westmarch - Chapter X: Title](#the-red-book-of-westmarch---chapter-x-title)
  - [Summary](#summary)
  - [Artifact](#artifact)
  - [AI Assistance](#ai-assistance)
  - [Lessons Learned](#lessons-learned)

---

## Summary

As we are on our way to our first destination along the journey, we've decided to make the most out of the time we have been given. Hence, we focused our brainpower on what capability to build first inside our TFC, while eating our Lembasbread for second breakfast. While munching away our last supplies, we have come to the conclusion that without a concrete overview of our ressources we are doomed to fail. Alas, our first capability will be the HobViewer.

We've unwraped our quills and parchment to design the workflow-chart of how the HobViewer is supposed to work accompanied by a low-fidelity wireframe representing a conceptual user interface as to how it shall look like from a user's perspective. The HobViewer was developed to support the Fellowship in monitoring and assessing member condition and available resources. As we are "sneaky little Hobbitses" we've written down everthing that has been done so far inside this very chapter of the Redbook to document artefacts such as the the interaction workflow and the wireframe aswell as our retrospective of our sprint, which contains our lessons learned and how Gandalf the Grey guided us.   

---

## Artifact

**File:** 

[Artifact II - Decisions](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-2/artifact-2-decisions.md)

**Build:**

Mermaid flowchart, representing the systems behaviour and a low-fidelity wireframe representing the user interface.

**Focus:**

The HobViewer capability, specifically how users access and interact with member status, equipment and resources in order to support easier decision making.
Flowchart is designed to visualize the key steps of the user journey, while the wireframe is designed to focus on the what the user sees when interacting with the HobViewer and providing a neat user interface.

System capability explains our the *Why* behind our decision, while the design rationale provides insight to our decision making process for both flowchart and wireframe aswell as assumptions made in creating our very first design of the TFC's first capability: **Monitor and assess available resources**

---

## AI Assistance
Questions:
What did I expect?
What actually happened?
How did AI help or mislead me?
What decision (changes) did I make consciously?
What would I do differently next time?

- Jusuf: We expected AI to help us with generating structured flowcharts and supporting us in the creation of the wireframe. The result was underwhelming, the AI generated flowchart was relatively bad and needed a complete overhaul, which concluded in us doing it by ourselves. This was necessary so that the flowchart aligns with the idea we have envisioned. Also, the provided flowchart was way too complex and all over the place, which is why we used it as a weak example to design our simplified flow to keep our feature clean and comprehensible. 

- Alex: We've tried to consult Gandalf regarding the mermaid flowchart. We've prompted the sequences and actions/questions to be depicted and hoped for a finished product. Unfortunately that didn't work out as the flow was all over the place semantically and syntax-wise. Though not usable itself, it gave as a look into how it *could* look like and providing at least the code behind it helped us building our flowchart in mermaid from scratch. For the future I would go into the prompt with a different expectation, but totally would go for it again as a weak example to assess and learn from as a starting point of the work that follows.

---

## Lessons Learned
Questions
Insights, challenges, reflections

- Georg: I've gained a deeper understanding in design choices by learning how to use Mermaid and Whiteboard Teams (for the wireframe) in cooperation with AI to envision how our feature shall look like, what the use case of it is and how to reason certain features around the present system capabilities to explain design choices both procedurally and visually. Gandalf enlighted us with wisdom, showing us paths and possibilities, while we ourselves made the decisions.

- Jusuf: A key learning was that proper planning and documentation helps before starting to avoid inconsistencies and problems later on. I also learned that simplifying the features is essential. Trying to include too many details or actions makes the system harder to understand and design. Working with AI can help speeding up the process, however it does not replace the need to think through the logic and structure of the system itself. Also, flowchart and wireframe are two sides of the same coin: you cannot do both seperately. Understanding how to structure a system by doing both at once helps understanding the overall process of developing and why certain steps are needed to be done in a specific order. Learned alot about using Mermaid, Whiteboard and AI in unison.

- Alex: After deciding the capability, we've tried to intuitively split the tasks between us fairly in our working session: A few members provide the wireframe, while a few members work on the flowchart and the other member providing the text for system capability and design rationale. We went into focus groups after the division of tasks. Subsequently we've realized it is impossible due to dependency of each subtask. Hence we've come together to do it all together waiving the division. Another topic we had was the capability itself. How in-depht do we wanna go? Shall it be a MVP or a capability with multiple flows? Alas, we have decided on the first option, as it is our first time developing. Less is more and it's better doing babysteps learning to walk than doing a leap of faith 50m into a bale of hay.

- Gabriel: This project taught me that good planning is the most important step. At first, we tried to work separately, but we quickly realized that wireframes and flowcharts must be done together. I learned how to use AI correctly. I leanred how to use Mermaid, and Whiteboard as a team to visualize our ideas. I also learned that "less is more." Instead of making a complex system, we focused on a simple MVP. Making "baby steps" helped us understand the logic better. AI is a great help for speed. - but we still had to make the final decisions ourselves.

---

### Version Control
- 0.2: Fixed typos
- 0.1: Added content to our .md for our Red Book task
