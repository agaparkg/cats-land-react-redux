import React from "react";
import { Button } from "reactstrap";
import { DebounceInput } from "react-debounce-input";
import { useDispatch, useSelector } from "react-redux";
import { updateLocalCatFacts, updateInputValue } from "../redux-store/actions";

const AddCatFacts = () => {
  const dispatch = useDispatch();
  const inputVal = useSelector((state) => state.inputValReducer.inputVal);
  const localCats = useSelector((state) => state.localReducer.localCats);

  const handleAddClick = () => {
    if (inputVal) {
      const newCatFact = {};
      const newLocal = [...localCats];
      const check = newLocal.some((fact) => {
        return fact.text === inputVal;
      });
      if (!check) {
        newCatFact["id"] = newLocal.length
          ? newLocal[newLocal.length - 1].id + 1
          : 1;
        newCatFact["text"] = inputVal;
        newCatFact["deleted"] = false;
        newCatFact["favorite"] = false;
        newLocal.push(newCatFact);
        dispatch(updateLocalCatFacts(newLocal));
        dispatch(updateInputValue(""));
      }
    }
  };

  return (
    <div className="add-cat-facts-to-local common">
      <div>
        <DebounceInput
          id="debounce-input"
          value={inputVal}
          minLength={2}
          debounceTimeout={500}
          placeholder="Add cats facts"
          onChange={(e) => dispatch(updateInputValue(e.target.value))}
        />
      </div>
      <Button onClick={() => handleAddClick()} id="add-btn" color="primary">
        ADD
      </Button>
    </div>
  );
};

export default AddCatFacts;
