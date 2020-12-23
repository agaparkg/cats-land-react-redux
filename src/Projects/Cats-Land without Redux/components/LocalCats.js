import React from "react";
import { Button } from "reactstrap";

const LocalCats = ({ localCats, handleFactDelete, handleSelectFavorite }) => {
  return (
    <div className="cat-facts-local common">
      <div id="cat-facts-local-header">
        <strong>Local Cats</strong> (add a cat fact{" "}
        <i className="fa fa-arrow-right" style={{ color: "blue" }}></i>)
      </div>
      {localCats.map((cat, idx) => {
        return (
          <div key={cat.id} className="each-local-cat-fact">
            <div className="each-local-cat-fact-text">
              <strong>{idx + 1}</strong>
              {". "}
              {cat.text}
            </div>
            {cat.favorite ? (
              <Button
                onClick={() => handleSelectFavorite(cat.id)}
                color="success"
              >
                <i className="fa fa-heart" style={{ color: "red" }}></i>
              </Button>
            ) : (
              <Button
                onClick={() => handleSelectFavorite(cat.id)}
                color="secondary"
              >
                <i className="fa fa-heart"></i>
              </Button>
            )}
            <Button
              className="delete-btn"
              onClick={() => handleFactDelete(cat.id)}
              color="danger"
            >
              <i className="fa fa-trash"></i>
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default LocalCats;
