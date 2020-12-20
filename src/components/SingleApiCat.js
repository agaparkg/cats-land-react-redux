import React from "react";

const SingleApiCat = ({ cat, idx }) => {
  return (
    <div className="each-api-cat-fact">
      <strong>{idx + 1}</strong>
      {". "} {cat.text !== "" ? cat.text : null}
    </div>
  );
};

export default SingleApiCat;
