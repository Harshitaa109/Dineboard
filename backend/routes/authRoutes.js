const express = require("express");
const router = express.Router();

// Controller functions
const { registerUser, loginUser } = require("../controllers/authController");

// Routes
router.post("/signup", registerUser);  // ✅ POST /api/auth/signup
router.post("/login", loginUser);      // ✅ POST /api/auth/login

module.exports = router;
