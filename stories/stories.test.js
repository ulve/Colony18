import { deck } from "./deck1";
import * as matchers from "jest-immutable-matchers";
import { initGameState } from "../gameState";

describe("Each story", () => {
  beforeEach(() => jest.addMatchers(matchers));

  deck.forEach(story => {
    it("Has a text", () => {
      const text = story.get("text");
      expect(text).not.toBeUndefined();
    });

    it("Has a nice ending", () => {
      const text = story.get("text");
      expect(text.slice(-1)).toEqual(niceEnding);
    });

    it("Has three choices", () => {
      const c1 = story.get("one");
      const c2 = story.get("two");
      const c3 = story.get("three");
      expect(c1).not.toBeUndefined();
      expect(c2).not.toBeUndefined();
      expect(c3).not.toBeUndefined();
    });

    it("Each choice have text", () => {
      const c1 = story.get("one");
      const c2 = story.get("two");
      const c3 = story.get("three");
      expect(c1.get("text")).not.toBeUndefined();
      expect(c1.get("text").length).toBeGreaterThan(0);
      expect(c2.get("text")).not.toBeUndefined();
      expect(c2.get("text").length).toBeGreaterThan(0);
      expect(c3.get("text")).not.toBeUndefined();
      expect(c3.get("text").length).toBeGreaterThan(0);
    });

    it("Each choice have a nice ending", () => {
      const c1 = story.get("one");
      const c2 = story.get("two");
      const c3 = story.get("three");
      expect(c1.get("text").slice(-1)).toEqual(niceEnding);
      expect(c2.get("text").slice(-1)).toEqual(niceEnding);
      expect(c3.get("text").slice(-1)).toEqual(niceEnding);
    });

    it("Each choice return a state", () => {
      var s = initGameState();
      const s1 = story.get("one").get("fn")(s);
      const s2 = story.get("two").get("fn")(s);
      const s3 = story.get("three").get("fn")(s);
      expect(s1).not.toBeUndefined();
      expect(s2).not.toBeUndefined();
      expect(s3).not.toBeUndefined();
    });

    it("Each choice sets resolution", () => {
      var s = initGameState();
      const s1 = story.get("one").get("fn")(s);
      const s2 = story.get("two").get("fn")(s);
      const s3 = story.get("three").get("fn")(s);
      expect(s1.get("resolution")).not.toBeUndefined();
      expect(s1.get("resolution").length).toBeGreaterThan(0);
      expect(s2.get("resolution")).not.toBeUndefined();
      expect(s2.get("resolution").length).toBeGreaterThan(0);
      expect(s3.get("resolution")).not.toBeUndefined();
      expect(s3.get("resolution").length).toBeGreaterThan(0);
    });

    it("Each resolution have a nice ending", () => {
      var s = initGameState();
      const s1 = story.get("one").get("fn")(s);
      const s2 = story.get("two").get("fn")(s);
      const s3 = story.get("three").get("fn")(s);
      expect(s1.get("resolution").slice(-1)).toEqual(niceEnding);
      expect(s2.get("resolution").slice(-1)).toEqual(niceEnding);
      expect(s3.get("resolution").slice(-1)).toEqual(niceEnding);
    });
  });
});

const niceEnding = {
  asymmetricMatch: actual => actual === "." || actual === "?" || actual === "!"
};
