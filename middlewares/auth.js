const jwt = require('jsonwebtoken');
const User = require("../models/User");

const userAuth = async(req, res, next) => {
    try {
        const {token} = req.cookies;
        if(!token){
          throw new Error("Invalid token");
        }
        const verifiedData = await jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(verifiedData.id);
        if(!user){
          throw new Error("User doesn't exist in the system.");
        }
        req.user = user;
        next();
      } catch (error) {
        return res.status(400).send("Error: " + error.message);
      }
};

module.exports = userAuth;