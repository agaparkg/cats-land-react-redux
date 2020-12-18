import * as actions from './actionType';
import { combineReducers } from 'redux';

const initialCountState = {
  count: 0,
};
const initalNumbersState = {
  numberInfo: '',
  error: '',
};

const countReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case actions.INCREMENT: {
      return {
        ...state,
        count: action.payload + 1,
      };
    }
    case actions.DECREMENT: {
      return {
        ...state,
        count: action.payload - 1,
      };
    }
    case actions.INCREMENTBYAMOUNT: {
      return {
        ...state,
        count: (state.count += action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

const numberReducer = (state = initalNumbersState, action) => {
  switch (action.type) {
    case actions.NUMBERINFOLOADED: {
      return {
        ...state,
        numberInfo: action.payload,
      };
    }
    case actions.NUMBERINFOLOADFAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  countReducer,
  numberReducer,
});

export default rootReducer;
