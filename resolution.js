// setResolution :: text -> GameState -> GameState
const setResolution = (text, gameState) => gameState.set("resolution", text);

// printResolution :: GameState -> ()
const printResolution = gameState => console.log(gameState.get("resolution"));

export { printResolution, setResolution };
