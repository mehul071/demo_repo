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
        <a className="text-red-600" href="/">
          Home
        </a>
        <a>Menu</a>
        <a className="">About Us</a>
        <a>Contact</a>
      </div>
      <div className="right">
        <button>Login</button>

        <a href="/cart" className="text-xl cart_icon">
          <AiOutlineShoppingCart />
          {cartState.cartItems.length}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
