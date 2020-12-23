import { INCREMENT, DECREMENT } from "./actionTypes";

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

export default reducer;
