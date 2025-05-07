const router = require("express").Router();
const {signup, login, verifyEmail, userProfile} = require("../controller/userController");
const userAuth = require("../middlewares/auth");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/verify").get(verifyEmail);
router.route("/profile").get(userAuth, userProfile);

module.exports = router;
