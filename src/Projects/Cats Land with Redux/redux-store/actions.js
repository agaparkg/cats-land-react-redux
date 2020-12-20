import axios from "axios";
import {
  FETCH_CAT_FACTS,
  UPDATE_LOCAL_CAT_FACTS,
  CHANGE_INPUT_VALUE,
} from "./actionTypes";

const updateApiCatFacts = (apiCatFacts) => {
  return {
    type: FETCH_CAT_FACTS,
    payload: apiCatFacts,
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
    axios
      .get(
        "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10"
      )
      .then((res) => {
        dispatch(updateApiCatFacts(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export {
  updateApiCatFacts,
  updateLocalCatFacts,
  updateInputValue,
  fetchApiCatFacts,
};
