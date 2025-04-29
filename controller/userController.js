const User = require("../models/User");
const bcrypt = require("bcrypt");
const sendVerificationEmail = require("./verifyAccount");
const mongoose = require("mongoose");

const signup = async (req, res) => {
  // Start a session for transaction
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { name, mobile, email, password } = req.body;
    const user = await User.create(
      [
        {
          name,
          mobile,
          email,
          password: password,
        },
      ],
      { session }
    );
    await sendVerificationEmail(user[0].email);
    await session.commitTransaction();
    session.endSession();
    return res.send(
      `User registered. Verify email for completing registration`
    );
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).send("Invalid credentials.");
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).send("Invalid credentials.");
    }
    if (!user.verified) {
      return res.status(403).send("Please verify your email.");
    }
    return res.send(`Hello ${user.name}`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const verifyEmail = async (req, res) => {
  try {
    const email = req.query.email;
    const user = await User.findOne({ email: email });
    if (!user.verified) {
      user.verified = true;
      await user.save();
      return res.send("Your email is verified");
    } else {
      return res.send("Already verified");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { signup, login, verifyEmail };
