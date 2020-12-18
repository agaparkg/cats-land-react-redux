import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  getNumberInfo,
} from './actions';

const App = () => {
  const store = useStore();
  const dispatch = useDispatch();
  // state values
  const count = useSelector((state) => state.countReducer.count);
  const numberInfo = useSelector((state) => state.numberReducer.numberInfo);
  const error = useSelector((state) => state.numberReducer.error);

  const [amount, setAmount] = useState(2);
  console.log('store', store.getState());

  return (
    <div className="app">
      <div className="counter">
        <h1>Counter</h1>
        <div>
          <button onClick={() => dispatch(decrement(count))}> - </button>
          <div className="count">{count} </div>
          <button onClick={() => dispatch(increment(count))}> + </button>
        </div>
      </div>
      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value) || 0)}
        />
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          {' '}
          +{amount}{' '}
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => dispatch(getNumberInfo(count))}>
          Click to learn more about this number
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>{error ? error : numberInfo}</div>
    </div>
  );
};

export default App;
