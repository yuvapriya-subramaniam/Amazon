const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const bcrypt = require("bcrypt");

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

// Hash password before saving if the password is modified
userSchema.pre('save', async function(next) {
  const user = this;
  // Only hash the password if it has been modified (during user creation or password change)
  if (user.isModified('password')) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      //Proceed with saving
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next(); // Proceed with saving without modifying password
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
