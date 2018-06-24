import { initGameState } from "./gameState";
//import * as matchers from "jest-immutable-matchers";
import { describe, beforeEach, addMatchers, it, expect, toBe } from "jest";

describe("Game state tests", () => {
  //beforeEach(() => addMatchers(matchers));

  it("Can init game state", () => {
    expect(2).toBe(2);
    // const gameState = initGameState();
    //expect(gameState).toBeImmutableMap();
  });
});
