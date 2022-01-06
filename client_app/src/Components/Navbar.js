import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  console.log(cartState);

  return (
    <div className="Navbar flex justify-between p-6 place-items-center">
      <div className="left">
        <h1>
          F<span>oo</span>dy
        </h1>
      </div>
      <div className="center">
        <a className="text-red-600">Home</a>
        <a>Menu</a>
        <a className="">About Us</a>
        <a>Contact</a>
        {cartState.cartItems.length}
      </div>
      <div className="right">
        <span className="cart">
          <AiOutlineShoppingCart className="cart_icon" />
        </span>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
