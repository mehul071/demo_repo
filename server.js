const express = require("express");
const db = require("./db");
const pizza = require("./models/pizzamodel");

const app = express();
const pizzaRoute = require("./routes/PizzasRoute");
const UserRoute = require("./routes/UserRoute");
const placeRoute = require("./routes/OrderRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/pizzas/", pizzaRoute);
app.use("/api/users/", UserRoute);
app.use("/api/orders/", placeRoute);

app.get("/", (req, res) => {
  res.send("Server Working");
});

const port = process.env.PORT || 5000;

app.listen(port, () => "Server running on port 5000");
