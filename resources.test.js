import { initGameState } from "./gameState";
import * as matchers from "jest-immutable-matchers";
import {
  growFood,
  consumeFood,
  increaseFoodProduction,
  decreaseFoodProduction
} from "./resources";

describe("Resources can", () => {
  beforeEach(() => jest.addMatchers(matchers));

  it("Can grow food", () => {
    const state = initGameState();
    const grow = growFood(state);
    expect(state.get("food")).toBeLessThan(grow.get("food"));
  });

  it("Can can consume food", () => {
    const state = initGameState();
    const consumed = consumeFood(10, state);
    expect(state.get("food")).toBeGreaterThan(consumed.get("food"));
  });

  it("Can can consume food", () => {
    const state = initGameState();
    const consumed = consumeFood(10, state);
    expect(state.get("food")).toBeGreaterThan(consumed.get("food"));
  });

  it("Can increase food production", () => {
    const state = initGameState();
    const inc = increaseFoodProduction(20, state);
    expect(state.get("foodProduction")).toBeLessThan(inc.get("foodProduction"));
  });

  it("Can decrese food production", () => {
    const state = initGameState();
    const inc = decreaseFoodProduction(5, state);
    expect(state.get("foodProduction")).toBeGreaterThan(
      inc.get("foodProduction")
    );
  });
});
