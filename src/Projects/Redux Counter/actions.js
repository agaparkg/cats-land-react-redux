import { INCREMENT, DECREMENT } from "../../actionsType";

const increment = (count) => {
  return {
    type: INCREMENT,
    payload: count,
  };
};

const decrement = (count) => {
  return {
    type: DECREMENT,
    payload: count,
  };
};

export { increment, decrement };
