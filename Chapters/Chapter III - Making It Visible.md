# The Red Book of Westmarch - Chapter III: Making it Visible

*`"All that is gold does not glitter; Not all those who wander are lost" - Gandalf the Grey in his letter to Frodo Baggins`*

**Table of Contents**

- [The Red Book of Westmarch - Chapter III: Making it Visible](#the-red-book-of-westmarch---chapter-III-making-it-visible)
  - [Summary](#summary)
  - [Artifact](#artifact)
  - [AI Assistance](#ai-assistance)
  - [Lessons Learned](#lessons-learned)
  - [Version Control](#version-control)

---

## Summary

Before running out of supplies, we finally arrived in Bree to restock them. While there, we've visited the well-travelled inn - The Prancing Pony - to have a good 1420er Ale or two. As we await to meet up with 
a ranger called *Strider*, we took our time to make the most out of our conceptional design to turn it into visible progress. We took out quill and parchment and wrote down our HTML and CSS code based on our flowchart and wireframe for the *Hobviewer* that we've designed on our last long rest.

Since we already settled on the HobViewer being a feature to both monitor and assess each other's condition and resources, *all* there was left for us to do is makting it visible by doing the work. As a result, we have created both an index of the HobViewer to access members individually and their respective memberpage, where not only the current health points are displayed, but also which and how much ressources and utility items each member has, which helps not only the individual member to monitor themselves, but others aswell - so that we never run out of food for second breakfast again!

Everything done so far since last chapter's entry has been passed down in this chapter of the Redbook, where we documented artifacts such as our HTML codes and CSS stylesheets for both index- and memberpage.
Though seperated in body with our (AI-)guide, Gandalf the Grey, we were able to connect in spirit to request guidance on our endeavors to make conceptional designs into visible craft.

---

## Artifact

**File:** 

[Artifact III - Representation](https://github.com/Hug021030/The-Fellowship-of-the-Code-2026/blob/main/Artifacts/Artifact-3/artifact-3-representation.md)

**Build:**

HTML index- and memberpages (one memberpage for each individal member of the Fellowship of the Code), representing a static page in resemblance to our wireframe.
CSS stylesheets for both index- and memberpages (one for index and one stylesheet for all memberpages) to assist our vision of both wireframe and upcoming logic implementation for interaction.  

**Focus:**

Primary focus was the implementation of our wireframe into a static feature, which shall grant access to member status and overview of our resources, as described as one of our main feature capabilities of the HobViewer. Complemented by style, we provided a design choice suitable for both user accessability aswell as user experience, making it easy to navigate between each member, which was also a necessity we deemed important.

With that in mind, once entering the HobViewer you are greeted by it together with it's unique logo. Beneath you'll find a picture of every member with it's name next to it to access it's page to grant insight.
Once in the memberpage, you are greeted again by the logo, which is also a shortcut to the index. Next to it the member's name is represented to clarify which memberpage the user is currently on. Below, users find the current healthpoint bar with further insights once hovering over. Further below users are greeted by the inventory, where they see
- which items are in the backback of the member
- how much of regarded item are in the backback of the member

supported by an item name and a visualisazion of the items for easier grasp of the status quo. At the end of the memberpage, we implemented the navigation bar to switch between members in a given logic aswell as the option to return to the mainscreen.

Alas, we have accomplished the static capability of our first feature, The HobViewer, within our TFC: **Monitor and assess available resources**

---

## AI Assistance
Questions:
What did I expect?
What actually happened?
How did AI help or mislead me?
What decision (changes) did I make consciously?
What would I do differently next time?

- Alex:

I expected AI to help me find proper colors and fonts, help me debug lines and unwanted designs (i.e. alignment of text), help me improve my the stylesheet to upgrade visual prowess.
AI helped me do so, sometimes though adjusting small bits of code I did not want to change (i.e. changing padding from 20px to 15px) or suggesting me new variants to the original design choice, which were not needed as we already settled on our design choice within the wireframe. Next time, I would take the time to explicity call out what I dont want to be changed to avoid time wasters.

- Georg:

I used AI mainly to help me make the Website look nicer and to support me whenever I ran into issues I could not immediately figure out on my own. A big part of my workflow was jumping into the browser's DevTools (F12) to poke around the elements and figure out why things were not behaving the way I wanted. I would usually try to narrow it down in DevTools first and then bring the problem to the AI to get a second opinion or a possible fix. It turned out to be really effective for me, because DevTools showed me *what* was happening and the AI often helped me understand *why*. It was especially useful for those small, annoying bugs you can stare at for ages without spotting and for cleaning up code that technically worked but was not very elegant.

- Gabriel:

- Jusuf:

- Artur

---

## Lessons Learned
Questions
Insights, challenges, reflections

- Alex:

What really kept me going was the fun I had while *coding*. I found HTML to be quite easy to work with once you got the hang of the rules. It was do-able without AI assistance to say the least. When it came to CSS it was the other way around. There, I was in dire need of AI assistance, not because I wasn't able to apply the standard CSS we've learned throughout the last weeks, but because we wanted to go all out. CSS is like the ocean with unlimited possibilities, depending what you envision to do. And so, I fell into a rabbit hole. All in all I'm happy with the "finished" product and even went out of the way to make redundancy checks and applying the "Outside-in" ordering principle at the end to *learn it the right way from the getgo*.

- Georg:

Probably the most important lesson and also the most boring one: name your files properly and reference them correctly. It sounds trivial but one wrong path or typo in a link or src attribute and suddenly nothing loads, the styling is gone and you are left wondering what just happened. The HTML side itself was actually pretty manageable once I got the hang of the basic structure. The real work cleary lives in the CSS file. That is where I spent  most of my time. CSS honestly surprised me in how powerful it is - you can build almost anything visually if you know your way around it and the more I played with it, the more I realized how much depth there actually is. The downside of that flexibility is that debugging can get really frustrating/annoying. When something looks off, it is not always obvious *why* - it could be specificity, inheritance, a stray margin somewhere or just a missing semicolon and those rare moments where even the AI could not figure it out what was going on, I had no choice but to go through the code line by line myself. Annoying in the moment but probably where I picked up the most actually understanding of how everything fits together.

- Gabriel:

- Jusuf:

- Artur:
---

### Version Control
- 0.3: added AI assistance & Lessons Learned
- 0.2: added first content to summary & artifact 
- 0.1: copy/past of chapter II for structure
