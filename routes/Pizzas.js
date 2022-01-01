const express = require("express");
const router = express.Router();

const Pizza = require("../models/pizzamodel");

router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.send(400).json({ message: error });
  }
});

module.exports = router;
