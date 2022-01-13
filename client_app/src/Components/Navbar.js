import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  console.log(cartState);

  return (
    <div className="Navbar flex justify-between p-6 place-items-center hadow-lg shadow-indigo-500/50">
      <div className="left">
        <h1>
          F<span>oo</span>dy
        </h1>
      </div>
      <div className="center font-semibold">
        <a className="text-black " href="/">
          Home
        </a>
        <a>Menu</a>
        <a className="">About Us</a>
        <a>Contact</a>
      </div>
      <div className="right ">
        <a href="/login" className="login_btn">
          Login
        </a>

        <a href="/cart" className="text-xl cart_icon">
          <AiOutlineShoppingCart />
          {cartState.cartItems.length}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
