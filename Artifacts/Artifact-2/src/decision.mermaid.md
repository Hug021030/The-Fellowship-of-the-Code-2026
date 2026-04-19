## Mermaid Flowchart

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
