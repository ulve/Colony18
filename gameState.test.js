import { initGameState } from "./gameState";
import * as matchers from "jest-immutable-matchers";

describe("Game state tests", () => {
  beforeEach(() => jest.addMatchers(matchers));

  it("Can init game state", () => {
    const gameState = initGameState();
    expect(gameState).toBeImmutableMap();
  });

  it("Game state contains stories", () => {
    const gameState = initGameState();
    expect(gameState.get("stories")).not.toBeUndefined();
  });

  it("Game state contains artifacts", () => {
    const gameState = initGameState();
    expect(gameState.get("artifacts")).not.toBeUndefined();
  });
});
