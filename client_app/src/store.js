import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzas } from "./actions/pizzaActions";
import { getAllPizzasReducer } from "./reducers/pizzareducers";
import { cartReducer } from "./reducers/cartreducers";

const FinalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
};
const composeEnhnacers = composeWithDevTools({});
const store = createStore(
  FinalReducer,
  initialState,
  composeEnhnacers(applyMiddleware(thunk))
);

export default store;
