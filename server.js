const express = require("express");
const db = require("./db");
const path = require("path");

const app = express();
const pizzaRoute = require("./routes/PizzasRoute");
const UserRoute = require("./routes/UserRoute");
const placeRoute = require("./routes/OrderRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/pizzas/", pizzaRoute);
app.use("/api/users/", UserRoute);
app.use("/api/orders/", placeRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client_app/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client_app/build/index.html"));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port 5000"));
