import React from "react";
import ApiCats from "./ApiCats";
import LocalCats from "./LocalCats";
import AddCatFacts from "./AddCatFacts";

const MainContent = ({ handleAddClick }) => {
  return (
    <div className="main-content">
      <ApiCats />
      <LocalCats />
      <AddCatFacts />
    </div>
  );
};

export default MainContent;
