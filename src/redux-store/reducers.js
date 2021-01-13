import { combineReducers } from "redux";
import {
  FETCH_CAT_FACTS,
  UPDATE_LOCAL_CAT_FACTS,
  CHANGE_INPUT_VALUE,
  LOADING,
  FETCH_CAT_FACTS_ERROR,
} from "./actionTypes";

const initialApiState = {
  apiCats: [],
};
const initialApiLoadState = {
  loading: false,
};
const initialLocalState = {
  localCats: [],
};
const initialInputState = {
  inputVal: "",
};
const initialApiErrorState = {
  error: "",
};

const apiReducer = (state = initialApiState, action) => {
  switch (action.type) {
    case FETCH_CAT_FACTS:
      return {
        ...state,
        apiCats: action.payload,
      };
    default:
      return state;
  }
};

const apiErrorReducer = (state = initialApiErrorState, action) => {
  switch (action.type) {
    case FETCH_CAT_FACTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const loadingReducer = (state = initialApiLoadState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
const localReducer = (state = initialLocalState, action) => {
  switch (action.type) {
    case UPDATE_LOCAL_CAT_FACTS:
      return {
        ...state,
        localCats: action.payload,
      };
    default:
      return state;
  }
};

const inputValReducer = (state = initialInputState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputVal: action.payload,
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  apiReducer,
  localReducer,
  inputValReducer,
  loadingReducer,
  apiErrorReducer,
});

export { rootReducer };
