import React from "react";
import ApiCats from "./ApiCats";
import LocalCats from "./LocalCats";
import AddCatFacts from "./AddCatFacts";

const MainContent = ({
  apiCats,
  localCats,
  handleAddClick,
  handleFactDelete,
  inputVal,
  setInputVal,
  handleSelectFavorite,
}) => {
  return (
    <div className="main-content">
      <ApiCats apiCats={apiCats} />
      <LocalCats
        handleSelectFavorite={handleSelectFavorite}
        localCats={localCats}
        handleFactDelete={handleFactDelete}
      />
      <AddCatFacts
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleAddClick={handleAddClick}
      />
    </div>
  );
};

export default MainContent;
