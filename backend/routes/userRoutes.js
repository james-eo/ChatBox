const express = require("express");
const { registerUser, allUsers } = require("../controllers/userController");
const { authUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser);//.get(protect, allUsers);
router.post("/login", authUser);

module.exports = router;