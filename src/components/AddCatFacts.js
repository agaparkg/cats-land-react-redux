import React from "react";
import { Button } from "reactstrap";
import { DebounceInput } from "react-debounce-input";
import { useDispatch, useSelector } from "react-redux";
import { updateInputValue } from "../redux-store/actions";

const AddCatFacts = ({ handleAddClick }) => {
  const dispatch = useDispatch();
  const inputVal = useSelector((state) => state.inputValReducer.inputVal);

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
      <Button onClick={handleAddClick} id="add-btn" color="primary">
        ADD
      </Button>
    </div>
  );
};

export default AddCatFacts;
