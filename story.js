import { Map } from "immutable";

// createStory :: String -> Choice -> Choice -> Choice -> Artifact -> Story
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

// addStory :: Story -> GameState -> GameState
const addStory = (story, gameState) =>
  gameState.updateIn(["stories"], l => l.push(story));

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

// printStory :: Story -> ()
const printStory = s => {
  console.log(s.get("text"));
  console.log("1: " + s.get("one").get("text"));
  console.log("2: " + s.get("two").get("text"));
  console.log("3: " + s.get("three").get("text"));
};

export { addStory, createStory, nextStory, printStory };
