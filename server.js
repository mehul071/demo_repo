const express = require("express");
const db = require("./db");
const pizza = require("./models/pizzamodel");

const app = express();
const pizzaRoute = require("./routes/PizzasRoute");

app.use(express.json());
app.use("/api/pizzas/", pizzaRoute);

app.get("/getpizzas", (req, res) => {
  pizza.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else res.send(data);
  });
});
app.get("/", (req, res) => {
  res.send("Server Working");
});

const port = process.env.PORT || 3001;

app.listen(port, () => "Server running on port 4000");
