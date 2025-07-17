const express = require("express");
const router = express.Router();
const { getMealPlan, saveMealPlan } = require("../controllers/mealPlanController");
const authenticateUser = require("../middleware/authMiddleware");

router.get("/:week", authenticateUser, getMealPlan);
router.post("/", authenticateUser, saveMealPlan);

module.exports = router;
