import React from "react";
import MainContent from "./components/MainContent";
import "./App.css";
const cats = require("./images/cats1.jpg").default;

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>CATS-LAND</h1>
        <img src={cats} alt="cats avatar" />
      </header>
      <MainContent />
    </div>
  );
};

export default App;
