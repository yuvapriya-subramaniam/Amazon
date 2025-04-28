const router = require("express").Router();
const {signup, login, verifyEmail} = require("../controller/userController");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/verify").get(verifyEmail);

module.exports = router;
