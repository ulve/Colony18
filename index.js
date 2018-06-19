import { Map, List } from "immutable";

// createStory :: String -> Option -> Option -> Option -> Artifact -> Story
const createStory = (
  storyText,
  option1,
  option2,
  option3,
  requiredArtifact = null
) =>
  Map({
    text: storyText,
    one: option1,
    two: option2,
    three: option3,
    requiredArtifact: requiredArtifact
  });

class Choice {
  constructor(text, fn, resolution) {
    this.text = text;
    this.fn = fn;
    this.resolution = resolution;
  }
}

// addStory :: Story -> GameState -> GameState
const addStory = (story, gameState) =>
  gameState.updateIn(["stories"], l => l.push(story));

// addArtifact :: Artifact -> GameState -> GameState
const addArtifact = (artifact, gameState) =>
  gameState.updateIn(["artifacts"], l => l.push(artifact));

// hasArtifact :: Artifact -> GameState -> Bool
const hasArtifact = (artifact, gameState) =>
  gameState.get("artifacts").includes(artifact);

// initGameState :: () -> GameState
const initGameState = () => new Map({ stories: List(), artifacts: List() });

// setResolution :: text -> GameState -> GameState
const setResolution = (text, gameState) => gameState.set("resolution", text);

// nextStory :: GameState -> (Story, GameState)
const nextStory = gameState => {
  const filtered = gameState.get("stories").filter(s => {
    const ra = s.get("requiredArtifact");
    return ra === null || gameState.get("artifacts").includes(ra);
  });

  const index = Math.floor(Math.random() * filtered.size);
  const selected = filtered.get(index);
  const newGameState = gameState.updateIn(["stories"], l => l.delete(index));

  return { selected, newGameState };
};

const s1 = createStory(
  "Du befinner dig i templet. Du hör hur munkarna kommer. Du har bara tid att plocka en av sakerna. Vilken väljer du?",
  new Choice("Du tar kniven", s => {
    const s2 = addArtifact("Knivs", s);
    return setResolution(
      "Du stoppar kiven inannför västen, känns som ett bra val",
      s2
    );
  }),
  new Choice("Du tar bägaren", s => {
    const s2 = addArtifact("Bägare", s);
    return setResolution("vad skall man ens med en sådan här till?", s2);
  }),
  new Choice("Du springer", s => {
    return setResolution("Mmmm fegis", s);
  })
);

const s2 = createStory(
  "Med kniven i handen har du all makt över hennes liv vad gör du?",
  new Choice("Skär av henne håret", s => {
    const s2 = addArtifact("Jagad", s);
    return setResolution(
      "Du hör hur någon bankar in dörren. Du hinner just ut men du känner dig inte trygg. Vad har du gjort",
      s2
    );
  }),
  new Choice("Skär henne i foten", s => {
    const s2 = addArtifact("Fot", s);
    return setResolution("Utan fötter kan man inte göra något", s2);
  }),
  new Choice("Skär henne i tungan", s => {
    const s2 = addArtifact("Tunga", s);
    const s3 = addStory(sTunga, s2);
    return setResolution("Ännu ett smart val!", s3);
  }),
  "Kniv"
);

const sTunga = createStory(
  "Opium och torkad tunga. Det är tidens melodi",
  new Choice("Väääässs", s => setResolution("Du känner giftet i blodet", s)),
  new Choice("Vyyys", s => setResolution("Du känner kraften i blodet", s)),
  new Choice("MMmppfff", s => setResolution("Du har inget blod", s))
);

const s3 = createStory(
  "Du fumlar genom mörkret men vad är det du ser?",
  new Choice("En kentaur", s => setResolution("Dom här kan man slåss med", s)),
  new Choice("En orm", s => setResolution("Dom här ger en styrka", s)),
  new Choice("En man i blått", s => {
    if (hasArtifact("Jagad", s)) {
      const s2 = addArtifact("Död", s);
      return setResolution("Mannen skjuter dig i huvudet", s2);
    } else {
      return setResolution("Ingen du känner", s);
    }
  })
);

// printStory :: Story -> ()
const printStory = s => {
  console.log(s.get("text"));
  console.log("1: " + s.get("one").text);
  console.log("2: " + s.get("two").text);
  console.log("3: " + s.get("three").text);
};

// printResolution :: GameState -> ()
const printResolution = gameState => console.log(gameState.get("resolution"));

const gs1 = initGameState();
const gs2 = addStory(s1, gs1);
const gs3 = addStory(s2, gs2);
const gs4 = addStory(s3, gs3);

// Game loop

// Select story
const { selected: s, newGameState: gs5 } = nextStory(gs4);

// Print
printStory(s);

// Select
const gs6 = s.get("two").fn(gs5);

// Resolve
printResolution(gs6);

// Kör igen med gs6 som gamestate istälet för gs4
