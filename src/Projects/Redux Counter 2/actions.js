import { INCREMENT, DECREMENT } from "./actionTypes";

const increment = (count) => {
  return {
    type: INCREMENT,
    data: count,
  };
};

const decrement = (count) => {
  return {
    type: DECREMENT,
    data: count,
  };
};

export { increment, decrement };
