import React from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector, useStore } from "react-redux";
import { increment, decrement } from "./actions";
import "./App.css";
// import store from "./store";

function App(props) {
  const dispatch = useDispatch();
  const store = useStore();
  const count = useSelector((state) => state.countReducer.count);
  console.log(store.getState());
  console.log("count = ", count);
  // const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="result">
        {/* <Button onClick={() => setCount(count - 1)} color="danger"> */}
        <Button onClick={() => dispatch(decrement(count))} color="danger">
          -
        </Button>
        <div id="output">{count}</div>
        {/* <Button onClick={() => setCount(count + 1)} color="success"> */}
        <Button onClick={() => dispatch(increment(count))} color="success">
          +
        </Button>
      </div>
    </div>
  );
}

export default App;
