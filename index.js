import { initGameState } from "./gameState";
import { addStory, nextStory, printStory, storyToText } from "./story";
import { test1 } from "./stories/deck1";
import { printResolution } from "./resolution";

const gs = initGameState();
const gs2 = addStory(test1, gs);
const { selected: s, newGameState: gs3 } = nextStory(gs2);
//printStory(s);
const st = "STORYTEXT: " + storyToText(s);
const gs4 = s.get("three").get("fn")(gs3);
printResolution(gs4);
export default st;
