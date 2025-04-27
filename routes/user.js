const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const { name, mobile, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      mobile,
      email,
      password: hashedPassword,
    });
    console.log(user._id);
    res.send(`Account created successfully`);
  } catch (error) {
    console.error(`Error in user signup: ${error.message}`);
    res.status(400).send(error.message);
  }
});

router.get("/signup", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
