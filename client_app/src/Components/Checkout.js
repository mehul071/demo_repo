import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import uuid from "uuid";
import "./Checkout.css";

function Checkout({ subtotal }) {
  const dispatch = useDispatch();
  function loadRazorpay(src) {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
  }
  async function displayRazorpay() {
    const res = await loadRazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razor pay SDK failed" + res);
    }
    var options = {
      key: "rzp_test_QxHaQP0vbMKLZj", // Enter the Key ID generated from the Dashboard
      amount: subtotal,
      currency: "INR",
      name: "Foody",
      order_id: uuid.v4(),
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razorpayObject = new window.Razorpay(options);
    razorpayObject.open();
  }
  return (
    <div>
      <button className="paynow_btn" onClick={displayRazorpay}>
        Paynow
      </button>
    </div>
  );
}

export default Checkout;
