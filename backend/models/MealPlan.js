// models/MealPlan.js

const mongoose = require("mongoose");

const dailyMealSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  note: { type: String, default: "" },
});

const mealPlanSchema = new mongoose.Schema({
  week: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  meals: {
    Monday: dailyMealSchema,
    Tuesday: dailyMealSchema,
    Wednesday: dailyMealSchema,
    Thursday: dailyMealSchema,
    Friday: dailyMealSchema,
    Saturday: dailyMealSchema,
    Sunday: dailyMealSchema,
  },
});

module.exports = mongoose.model("MealPlan", mealPlanSchema);
