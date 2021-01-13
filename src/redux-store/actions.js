import axios from "axios";
import {
  FETCH_CAT_FACTS,
  UPDATE_LOCAL_CAT_FACTS,
  CHANGE_INPUT_VALUE,
  FETCH_CAT_FACTS_ERROR,
  LOADING,
} from "./actionTypes";

const updateApiCatFacts = (apiCatFacts) => {
  return {
    type: FETCH_CAT_FACTS,
    payload: apiCatFacts,
  };
};

const isLoadingStatus = (status) => {
  return {
    type: LOADING,
    payload: status,
  };
};

const fetchCatFactsError = (errorMessage) => {
  return {
    type: FETCH_CAT_FACTS_ERROR,
    payload: errorMessage,
  };
};

const updateLocalCatFacts = (localCatFacts) => {
  return {
    type: UPDATE_LOCAL_CAT_FACTS,
    payload: localCatFacts,
  };
};

const updateInputValue = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: value,
  };
};

// Fetch cat facts from an API end point
const fetchApiCatFacts = () => {
  return (dispatch) => {
    dispatch(isLoadingStatus(false));
    axios
      .get(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10"
      )
      .then((res) => {
        setTimeout(() => {
          dispatch(isLoadingStatus(true));
          dispatch(updateApiCatFacts(res.data));
        }, 1000);
      })
      .catch((err) => {
        console.log("seeing an error = ", err.message);
        dispatch(fetchCatFactsError("Network Error! Please Try Again Later."));
        dispatch(isLoadingStatus(false));
      });
  };
};

export {
  updateApiCatFacts,
  updateLocalCatFacts,
  updateInputValue,
  fetchApiCatFacts,
  isLoadingStatus,
};
