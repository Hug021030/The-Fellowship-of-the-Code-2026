
# Rextending the Fellowship
## Automation: Fellowship Quest Log

For the automation task, we created a small quest reporting system using Microsoft Forms and Power Automate.

First, we created a Microsoft Form called Fellowship Quest Log. The form contains two fields:

Quest Name
Hero

When a user submits the form, Power Automate automatically starts a workflow.

The workflow retrieves the submitted information and sends an email containing the quest details. This simulates members of the Fellowship reporting their quests back to Rivendell.

### Trigger

A new Microsoft Forms response is submitted.

### Outcome

An email is automatically sent containing the submitted quest information.

### Screenshots
<img width="1175" height="552" alt="image" src="https://github.com/user-attachments/assets/b6bfc712-39ff-423f-a87d-b3915f79dbfa" />
<img width="349" height="531" alt="image" src="https://github.com/user-attachments/assets/414ad328-d623-4e4f-ae7b-c3e25e9e3de1" />
<img width="1096" height="361" alt="image" src="https://github.com/user-attachments/assets/0d71b2fc-381f-49fb-a4bf-fa44e30cd31c" />

## Low-Code App: Ring Collector

For the low-code application task, we created a small game using Microsoft MakeCode Arcade.

### Game Link:

https://makecode.com/_fq7Xai48hfuD

In the game, the player controls Frodo. His goal is to collect 15 ring fragments in order to assemble the complete ring.

At the start of the game, Frodo has 3 lives and is chased by a single orc while collecting the fragments. After collecting 10 fragments, additional orcs begin to appear, making it increasingly difficult to survive and reach the goal.

The player wins after collecting all 15 ring fragments. Every time Frodo is caught by an orc, he loses one life. When all 3 lives are lost, the game ends.

### Features
- Player movement
- Collectible ring fragments
- Score counter
- Orc enemies
- Increasing number of orcs after collecting 10 fragments
- Win condition after collecting all 15 ring fragments
- Lose condition when all lives are lost
