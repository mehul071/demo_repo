import axios from "axios";

export const createorder = (id, subtotal) => async (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems;
  dispatch({ type: "CREATE_ORDER_REQUEST" });
  try {
    const response = await axios.get("/api/orders/createorder");
    dispatch({ type: "CREATE_ORDER_SUCCESS", payload: response.data });
    console.log(response);
  } catch (error) {
    dispatch({ type: "CREATE_ORDER_FAILED", payload: error });
  }
};

export const placeorder = (subtotal) => async (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems;
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  try {
    const response = await axios.post("/api/orders/placeorder", { cartItems });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED", type: error });
  }
};
