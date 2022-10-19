const { referralController } = require("../controllers");
const router = require("express").Router();
const { authorizedLoggedInUser } = require("../middlewares/authMiddleware");

router.post("/", authorizedLoggedInUser, referralController.createReferral);
router.get("/", authorizedLoggedInUser, referralController.getReferral);

module.exports = router;
