const MealPlan = require("../models/MealPlan");

// GET /api/mealplan/:week
exports.getMealPlan = async (req, res) => {
  try {
    const week = req.params.week;
    const user = req.user;

    if (!user || !user._id) {
      return res.status(401).json({ error: "Unauthorized: User not found in request." });
    }

    const mealPlan = await MealPlan.findOne({ week, user: user._id });

    if (!mealPlan) {
      return res.status(404).json({ message: "No meal plan found for this week." });
    }

    res.status(200).json({
      message: "Meal plan retrieved successfully",
      meals: mealPlan.meals,
      week: mealPlan.week,
    });
  } catch (err) {
    console.error("Error fetching meal plan:", err.message);
    res.status(500).json({ error: "Could not fetch meal plan" });
  }
};

// POST /api/mealplan
exports.saveMealPlan = async (req, res) => {
  try {
    console.log("🔧 Request body:", req.body);
    console.log("🔒 Authenticated user:", req.user);

    const { week, meals } = req.body;

    if (!req.user || !req.user._id) {
      console.log("❌ req.user is missing or null");
      return res.status(401).json({ error: "User not authenticated" });
    }

    const userId = req.user._id;

    let mealPlan = await MealPlan.findOne({ week, user: userId });

    if (mealPlan) {
      console.log("🔄 Updating existing plan");
      mealPlan.meals = meals;
    } else {
      console.log("🆕 Creating new plan");
      mealPlan = new MealPlan({ week, meals, user: userId });
    }

    await mealPlan.save();
    console.log("✅ Meal plan saved");
    res.status(201).json({ message: "Meal plan saved successfully", mealPlan });
  } catch (err) {
    console.error("🔥 Error in saveMealPlan:", err.message);
    res.status(500).json({ error: "Could not save meal plan" });
  }
};
