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
    res.send(`User registered. Verify email for completing registration`);
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          if (user.verified) {
            res.send(`Hello ${user.name}`);
          } else {
            res
              .status(403)
              .send("Verify your email to complete the registration process.");
          }
        } else {
          res.status(401).send("Incorrect email or password.");
        }
      });
    } else {
      res.status(401).send("Incorrect email or password.");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const verifyEmail = async (req, res) => {
  const email = req.query.email;
  const user = await User.findOne({ email: email });
  if (!user.verified) {
    user.verified = true;
    await user.save();
    res.send("Your email is verified");
  } else {
    res.send("Already verified");
  }
};

module.exports = { signup, login, verifyEmail };
