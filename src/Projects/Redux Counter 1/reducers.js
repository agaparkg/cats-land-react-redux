import { INCREMENT, DECREMENT } from "./actionsType";
import { combineReducers } from "redux";

const initialCount = {
  count: 0,
};

const countReducer = (state = initialCount, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: action.payload + 1,
      };
    case DECREMENT:
      return { count: action.payload - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ countReducer });

export default rootReducer;
