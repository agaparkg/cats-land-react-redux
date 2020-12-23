import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  console.log(count);
  return (
    <div className="App">
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement(count))}>-</button>
      <button onClick={() => dispatch(increment(count))}>+</button>
    </div>
  );
};

export default App;
