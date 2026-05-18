# Reading the Runes

## Short description of what the code is supposed to do
The code displays the Hobbit Rations Tracker with a status line ("Rations available:10"), an input field for an amount and two buttons: Add Rations and Eat Rations. Each button has a click handler attached. The Add Rations button reads the number the user typed into the input field and adds it to the current rations, then refreshes the display. The Eat Rations button also reads the input value and checks whether enough rations are left. If subtracting would drop the count below zero, it shows an alert saying "Not enough rations!" - otherwise it subtracts the amount from the total and updates the status line.

## Identified Issues (with explanations)

1. The code currently mixes HTML and JavaScript within the same file. To follow best practices and ensure a proper separation of concerns, these two components should be isolated into distinct files. Additionally, the variable and function naming could be improved for better readability and clarity—for example, by renaming the functions to explicitly reflect their actions, such as "addRations" and "eatRations".

2. In line 16, the variable “rations” is initialized as a string due to the quotation marks. In line 29, the function attempts to add “value” to it. However, since both “rations” and the input “value” are treated as text, JavaScript chains them together instead of calculating the sum. This is why the new value is just appended to the '10'.

3. Additionally, the "eat" button updates the screen in the wrong order. It calls updateStatus() before checking the rations and doing the math. Because of this, the screen shows the old amount when clicked, and the background data changes only afterward. Since the screen is never refreshed again after the subtraction, the display is always one step behind the real data.

## Why the Issues matter

1. Mixing HTML and JavaScript in a single file might seem convenient for small examples but it quickly becomes a problem as a project grows. Without a clear separation of concerns, the structure of the page and its behaviour get tangled together, which makes the code harder to read, harder to debug and harder to reuse.

2. The string-vs-number issue is more dangerous because the program does not crash - it silently produces wrong results. Clicking "Add Rations" with an input of 5 turns the displayed value from 10 to 105 instead of 15.

3. The incorrect logic order creates a confusing user experience. Users see outdated numbers on the screen after they click a button, which makes the app feel broken, unresponsive, or buggy, even if the data is correct in the background.

## Description of Fixes

1. The HTML and JavaScript should be split into two separate files. The script is moved into a new file for example rations.js and linked from the HTML.

2. The variable should be initialized without quotation marks: let rations = 10; instead of let rations = "10";

3. Move the updateStatus() function call to the very end of both event listeners, after all calculations are completely finished. For the "eat" button, place updateStatus() inside the else block, right after the subtraction. This ensures the screen always displays the most accurate and updated data.

## AI reflection

I gave the AI the whole code, but didn't ask it to look for issues. Instead, I wrote my own suggestions to the AI about what an issue could be and why. The AI then helped to turn my broken English into correct sentences and added tips on what impact these issues could have. However, the AI didn't understand UX problems on its own, such as getting NaN results when you first enter text and then try to eat rations, for example.
