const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Import Routes
const mealPlanRoutes = require("./routes/mealPlanRoutes");
const authRoutes = require("./routes/authRoutes");


// ✅ Mount Routes
app.use("/api/mealplan", mealPlanRoutes);
app.use("/api/auth", authRoutes);



// ✅ Health Check Route
app.get("/", (req, res) => {
  res.send("🍽️ DineBoard API is running!");
});

module.exports = app;
