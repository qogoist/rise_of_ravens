```mermaid
sequenceDiagram
  participant Hub
  participant Mini as Minigame

  Hub ->>+ Mini : Start Game

  loop Gameloop
    Mini ->> Mini : 
  end

  Mini ->>- Hub : Game Finished



```