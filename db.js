const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://mehul:mehul@cluster0.edukd.mongodb.net/mernpizza";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;
db.on("connected", () => {
  console.log("Connection done");
});

db.on("error", () => {
  console.log("error");
});
module.exports = mongoose;
