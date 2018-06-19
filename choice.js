import { Map } from "immutable";

const createChoice = (text, fn) =>
  Map({
    text: text,
    fn: fn
  });

export { createChoice };
