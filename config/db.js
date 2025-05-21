const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.error(`DB connection failed: ${error.message}`);
    throw error
  }
};

module.exports = connectDB
