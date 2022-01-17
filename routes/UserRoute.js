const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const NewUser = new User({ name, email, password });
  try {
    NewUser.save();
    res.send("User successfully registerd");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const current_user = {
        name: user[0].name,
        email: user[0].email,
        isadmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(current_user);
    } else {
      throw "login failed";
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" } + error);
  }
});

module.exports = router;
