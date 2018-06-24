// growFood ::: GameState -> GameState
const growFood = state => {
  const oldFood = state.get("food");
  const production = state.get("foodProduction");
  const newFood = oldFood + production;
  return state.set("food", newFood);
};

// increaseFoodProduction :: Int -> GameState -> GameState
const increaseFoodProduction = (amount, state) =>
  state.set("foodProduction", state.get("foodProduction") + amount);

// decreaseFoodProduction :: Int -> GameState -> GameState
const decreaseFoodProduction = (amount, state) =>
  state.set("foodProduction", state.get("foodProduction") - amount);

// consumeFood :: Int -> GameState -> GameState
const consumeFood = (amount, state) =>
  state.set("food", state.get("food") - amount);

export {
  growFood,
  increaseFoodProduction,
  decreaseFoodProduction,
  consumeFood
};
