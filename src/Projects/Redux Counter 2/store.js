import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

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

const initialCountState = {
  count: 0,
};

const reducer = (state = initialCountState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.data + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: action.data - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export { increment, decrement, store };
