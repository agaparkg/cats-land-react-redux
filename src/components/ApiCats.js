import React, { useEffect } from "react";
import { fetchApiCatFacts } from "../redux-store/actions";
import { useDispatch, useSelector } from "react-redux";
import SingleApiCat from "./SingleApiCat";

const ApiCats = () => {
  const dispatch = useDispatch();
  const apiCats = useSelector((state) => state.apiReducer.apiCats);

  useEffect(() => {
    dispatch(fetchApiCatFacts());
  }, [dispatch]);

  return (
    <div className="cat-facts-from-api common">
      <div id="cat-facts-from-api-header">
        <strong>Cats from API</strong>
        {" ("}
        <a
          title="Cats API Link"
          href="https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10"
          target="_new"
          style={{ textDecoration: "none" }}
        >
          CLICK HERE
        </a>
        {")"}
      </div>
      {apiCats.map((cat, idx) => {
        return <SingleApiCat key={cat._id} cat={cat} idx={idx} />;
      })}
    </div>
  );
};

export default ApiCats;
