const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const apiRoutes = require("./routes");
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
}))
app.use(cookieParser());
app.use(express.json());
const port = process.env.PORT || 3000;
(async () => {
  try {
    await connectDB(); // Wait for DB connection
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Server not started due to DB connection error");
    process.exit(1);
  }
})(); //IIFE - Immediately Invoked Function Expression

app.use("/api", apiRoutes);

app.use("/", (err, req, res, next) => {
  if(err){
    res.status(500).send("Something went wrong");
  }
})
