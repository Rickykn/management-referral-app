const { referralController } = require("../controllers");
const router = require("express").Router();
const { authorizedLoggedInUser } = require("../middlewares/authMiddleware");

router.post("/", authorizedLoggedInUser, referralController.createReferral);
router.get("/", authorizedLoggedInUser, referralController.getReferral);
router.delete(
  "/:id",
  authorizedLoggedInUser,
  referralController.deleteReferral
);

module.exports = router;
