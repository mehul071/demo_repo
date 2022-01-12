import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import "./cartScreen.css";
import { addtoCart, deletefromCart } from "../actions/cartAction";

function CartScreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  const dispatch = useDispatch();
  return (
    <div className="cart flex justify-center">
      <div className="cart_items flex-1 justify-center">
        <h1 className="cart_heading">Cart</h1>
        {cartItems.map((item) => {
          return (
            <div className="cart_item mb-3 flex">
              <div className="items flex-1 items-center">
                <h1>{item.name}</h1>
                <p>
                  price: {item.quantity} * {item.price} = {item.price}
                </p>
                <p className="inline-block">
                  Quantity:
                  <AiOutlinePlus
                    className="inline-block plus"
                    onClick={() => {
                      dispatch(
                        addtoCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  />
                  {item.quantity}
                  <AiOutlineMinus
                    className="inline-block minus"
                    onClick={() => {
                      dispatch(
                        addtoCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  />
                </p>
              </div>
              <div className="cart_img flex-1 flex ">
                <img src={item.image} />
                <div className="items-center trash">
                  <span className="block">
                    <BsTrashFill
                      onClick={() => {
                        dispatch(deletefromCart(item));
                      }}
                    />
                  </span>
                </div>
              </div>
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
