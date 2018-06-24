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
    expect(gameState.get("stories")).toBeDefined();
  });

  it("Game state contains artifacts", () => {
    const gameState = initGameState();
    expect(gameState.get("artifacts")).toBeDefined();
  });

  it("Workers have relation to Scientists", () => {
    const gameState = initGameState();
    const relation = gameState.getIn(["workers", "relations", "scientists"]);
    expect(relation).toBeDefined();
  });

  it("Workers have relation to Engineers", () => {
    const gameState = initGameState();
    const relation = gameState.getIn(["workers", "relations", "engineers"]);
    expect(relation).toBeDefined();
  });

  it("Engineers have relation to Scientists", () => {
    const gameState = initGameState();
    const relation = gameState.getIn(["engineers", "relations", "scientists"]);
    expect(relation).toBeDefined();
  });

  it("Engineers have relation to Workers", () => {
    const gameState = initGameState();
    const relation = gameState.getIn(["engineers", "relations", "workers"]);
    expect(relation).toBeDefined();
  });

  it("Scientists have relation to Workers", () => {
    const gameState = initGameState();
    const relation = gameState.getIn(["scientists", "relations", "workers"]);
    expect(relation).toBeDefined();
  });

  it("Scientists have relation to Engineers", () => {
    const gameState = initGameState();
    const relation = gameState.getIn(["scientists", "relations", "engineers"]);
    expect(relation).toBeDefined();
  });

  it("Have food", () => {
    const gameState = initGameState();
    expect(gameState.get("food")).toBeDefined();
  });

  it("Have food production", () => {
    const gameState = initGameState();
    expect(gameState.get("foodProduction")).toBeDefined();
  });

  it("Have energy", () => {
    const gameState = initGameState();
    expect(gameState.get("energy")).toBeDefined();
  });

  it("Have energy production", () => {
    const gameState = initGameState();
    expect(gameState.get("energyProduction")).toBeDefined();
  });

  it("Have mech", () => {
    const gameState = initGameState();
    expect(gameState.get("mech")).toBeDefined();
  });

  it("Have mech production", () => {
    const gameState = initGameState();
    expect(gameState.get("mechProduction")).toBeDefined();
  });
});
