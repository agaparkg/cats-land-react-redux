import React from "react";
import { Button } from "reactstrap";
import { DebounceInput } from "react-debounce-input";

const AddCatFacts = ({ inputVal, setInputVal, handleAddClick }) => {
  return (
    <div className="add-cat-facts-to-local common">
      <div>
        <DebounceInput
          id="debounce-input"
          value={inputVal}
          minLength={2}
          debounceTimeout={500}
          placeholder="Add cats facts"
          onChange={(e) => setInputVal(e.target.value)}
        />
      </div>
      <Button onClick={handleAddClick} id="add-btn" color="primary">
        ADD
      </Button>
    </div>
  );
};

export default AddCatFacts;
