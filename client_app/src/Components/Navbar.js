import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
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
      </div>
      <div className="right">
        <AiOutlineShoppingCart className="cart_icon" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
