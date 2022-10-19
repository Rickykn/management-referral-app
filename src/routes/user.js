const { userController } = require("../controllers");
const router = require("express").Router();

router.post("/register", userController.register);
router.post("/login", userController.Login);

module.exports = router;
