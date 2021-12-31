import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzas } from "./actions/pizzaActions";
import { getAllPizzasReducer } from "./reducers/pizzareducers";

const FinalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
});

const initialState = {};
const composeEnhnacers = composeWithDevTools({});
const store = createStore(
  FinalReducer,
  initialState,
  composeEnhnacers(applyMiddleware(thunk))
);

export default store;
