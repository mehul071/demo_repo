import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  const currentuser = getState().loginUserReducer.current_user;
  const cartItems = getState().cartReducer.cartItems;
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  try {
    const response = await axios.post("/api/orders/placeorder", {
      token,
      subtotal,
      currentuser,
      cartItems,
    });

    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED", payload: error });
  }
};
