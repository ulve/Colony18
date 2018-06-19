import { Map, List } from "immutable";

// initGameState :: () -> GameState
const initGameState = () => new Map({ stories: List(), artifacts: List() });

export { initGameState };
