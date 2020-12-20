import React, { useState, useEffect } from "react";
import MainContent from "./components/MainContent";
import "./App.css";

const App = () => {
  const [apiCats, setApiCats] = useState([]);
  const [localCats, setLocalCats] = useState([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    fetch(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10"
    )
      .then((res) => res.json())
      .then((data) => setApiCats(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(localCats, inputVal);
  }, [localCats, inputVal]);

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
        setLocalCats(newLocal);
        setInputVal("");
      }
    }
  };

  const handleFactDelete = (id) => {
    const newLocal = [...localCats];
    setLocalCats(newLocal.filter((fact) => fact.id !== id));
  };

  const handleSelectFavorite = (id) => {
    const newLocal = [...localCats];
    newLocal.forEach((cat) => {
      if (cat.id === id) {
        cat.favorite = !cat.favorite;
      }
    });
    setLocalCats(newLocal);
  };
  return (
    <div className="App">
      <header>
        <h1>CATS-LAND</h1>
        <img src={require("./images/cats1.jpg").default} alt="cats avatar" />
      </header>
      <MainContent
        apiCats={apiCats}
        localCats={localCats}
        handleFactDelete={handleFactDelete}
        inputVal={inputVal}
        handleAddClick={handleAddClick}
        setInputVal={setInputVal}
        handleSelectFavorite={handleSelectFavorite}
      />
    </div>
  );
};

export default App;
