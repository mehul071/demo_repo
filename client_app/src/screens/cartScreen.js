import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cartScreen.css";

function CartScreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  return (
    <div className="cart flex justify-center">
      <div className="cart_items flex-1 justify-center">
        <h1 className="cart_heading">Cart</h1>
        {cartItems.map((item) => {
          return (
            <div className="cart_item mb-3">
              <h1>{item.name}</h1>
              <p>
                price: {item.quantity}*{item.price} = {item.price}
              </p>
            </div>
          );
        })}
      </div>
      <div className="cart_cost flex-1 flex justify-center">
        <h1>Cost</h1>
      </div>
    </div>
  );
}

export default CartScreen;
