import * as actions from './actionType';
import axios from 'axios';

export const increment = (count) => {
  // fetch api
  return {
    type: actions.INCREMENT,
    payload: count,
  };
};

export const decrement = (count) => {
  return {
    type: actions.DECREMENT,
    payload: count,
  };
};

export const incrementByAmount = (count) => {
  return {
    type: actions.INCREMENTBYAMOUNT,
    payload: count,
  };
};
export const getNumberInfo = (num) => {
  return async (dispatch) => {
    const url = `http://numbersapi.com/${num}/trivia`;
    const res = await axios.get(url);
    const numberInfo = res.data;
    try {
      if (res.status === 200) {
        dispatch({
          type: actions.NUMBERINFOLOADED,
          payload: numberInfo,
        });
      }
    } catch (err) {
      dispatch({
        type: actions.NUMBERINFOLOADFAILED,
        payload: err.message,
      });
    }
  };
};
