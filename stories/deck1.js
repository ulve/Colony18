import { createChoice } from "../choice";
import { createStory } from "../story";
// import { addArtifact } from "../artifact";
import { setResolution } from "../resolution";

const test1 = createStory(
  "Du blir informerad av ett syreläckage. Efter vidare utredning visar det sig att arbetarna tagit extra syre för att skynda på odlingen lite. Det är inte så effektivt enligt vetenskapsmännen men någon form av resultat ger det i vart fall.",
  createChoice("Återställ som det varit tidigare", s =>
    setResolution("Arbetarna verkar besvikna, ingen lyssnar på dom.", s)
  ),
  createChoice("Mer mat är mer mat, vi har ändå syre så vi klarar oss", s =>
    setResolution(
      "Vetenskapsmännen är inte imponerade av din slutledningsförmåga",
      s
    )
  ),
  createChoice(
    "Sätt vetenskapsmännen på att utreda ett sätt att göra det hela mer effektivt",
    s => {
      if (success(30))
        return setResolution(
          "Dom gör ett bra arbete, syreförbrukningen är minimal",
          s
        );
      else
        return setResolution(
          "Det hela var ett misstag, efter en massa förlorad syre så tvingas experimentet med maten att sluta",
          s
        );
    }
  )
);

const success = chance => Math.floor(Math.random() * Math.floor(100)) <= chance;

export { test1 };
