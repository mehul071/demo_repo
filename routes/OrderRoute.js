const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
// require(dotenv).config();
const razorpay = require("razorpay");

const instance = new razorpay({
  key_id: "rzp_test_QxHaQP0vbMKLZj",
  key_secret: "5drm5SkFz7jO1JEgcFpPkph2",
});
router.get("/createorder", async (req, res) => {
  const { subtotal } = req.body;

  var option = {
    amount: subtotal * 100,
    currency: "INR",
    receipt: uuidv4(),
  };
  instance.orders.create(option, function (error, order) {
    if (error)
      return res.send(500).json({ message: "Error with the api call" });
    res.json(order.id, subtotal);
  });
});

module.exports = router;
