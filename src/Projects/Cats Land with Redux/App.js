import React from "react";
import MainContent from "./components/MainContent";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { updateLocalCatFacts, updateInputValue } from "./redux-store/actions";
const cats = require("./images/cats1.jpg").default;

const App = () => {
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
    <div className="App">
      <header>
        <h1>CATS-LAND</h1>
        <img src={cats} alt="cats avatar" />
      </header>
      <MainContent handleAddClick={handleAddClick} />
    </div>
  );
};

export default App;
