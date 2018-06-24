import { Map, List } from "immutable";

// initGameState :: () -> GameState
const initGameState = () =>
  new Map({
    stories: List(),
    artifacts: List(),
    workers: new Map({
      relations: new Map({
        scientists: 50,
        engineers: 50
      })
    }),
    engineers: new Map({
      relations: new Map({
        scientists: 50,
        workers: 50
      })
    }),
    scientists: new Map({
      relations: new Map({
        engineers: 50,
        workers: 50
      })
    }),
    food: 100,
    foodProduction: 10,
    energy: 100,
    energyProduction: 10,
    mech: 100,
    mechProduction: 10
  });

export { initGameState };
