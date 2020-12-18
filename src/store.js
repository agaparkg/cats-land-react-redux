import rootReducer from './reducers';
import { applyMiddleware, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(ReduxThunk), devtools)
);
export default store;
