const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const razorpay = require("razorpay");

const instance = new razorpay({
  key_id: "rzp_test_QxHaQP0vbMKLZj",
  key_secret: "5drm5SkFz7jO1JEgcFpPkph2",
});
router.post("/placeorder", async (req, res) => {
  const { token, subtotal, currentuser, cartItems } = req.body;

  try {
    const customer = await instance.orders.create({
      amount: subtotal * 100,
      currency: "INR",
      receipt: token.email,
      notes: { key1: "value3", key2: "value2" },
    });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" } + error);
  }
  console.log(customer);
});

module.exports = router;
