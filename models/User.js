const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      maxLength: [50, "Name shouldn't contain more than 50 characters"],
      minLength: [3, "Name should contain atleast 3 characters"],
      trim: true,
    },
    mobile: {
      type: String,
      minLength: 11,
      maxLength: 15,
      unique: [ 
        true,
        "User is already registered",
      ],
      required: [true, "Mobile number is required"],
      validate: {
        validator: value => validator.isMobilePhone(value, "any", {strictMode:false}),
        message: "Mobile number is not valid",
      },
      trim: true,
    },
    email: {
      type: String,
      unique: [true, "User is already registered"],
      required: [true, "Email is required"],
      validate: {
        validator: validator.isEmail,
        message: "Email id is not valid",
      },
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Password should be atleast 6 characters"],
      validate: {
        validator: validator.isStrongPassword,
        message: "Enter a strong password",
      },
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
