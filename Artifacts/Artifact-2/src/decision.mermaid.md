## Mermaid Flowchart

```mermaid
flowchart TB
    
    A["Choose member to monitor"]
  
    A --> B["Display member's page"]

    B -- Analyse items --> C
    
    C{"Take action?"} 
    C -- Yes --> D["Interact with item 
                    eg. eat/reallocate"] --> F
    C -- No --> F
    D -- Interaction with member --> E["Choose member"] --> F
  
    F["Close/Switch 
        member's Page"]
 ```
