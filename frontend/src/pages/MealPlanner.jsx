import React, { useEffect, useState } from "react";
import axios from "axios";
import MealCard from "../components/MealCard";

const MealPlanner = () => {
  const [week, setWeek] = useState("2025-W29");
  const [meals, setMeals] = useState({});
  const [notes, setNotes] = useState({});
  const [copiedWeek, setCopiedWeek] = useState(null);
  const [saveToCloud, setSaveToCloud] = useState(true);

  const defaultDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const fetchWithToken = async (weekParam) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await axios.get(`http://localhost:5000/api/mealplan/${weekParam}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const { meals: mealData } = res.data;
      const updatedMeals = {}, updatedNotes = {};
      defaultDays.forEach((day) => {
        const entry = mealData[day];
        updatedMeals[day] = typeof entry === "string" ? entry : entry?.name || "";
        updatedNotes[day] = typeof entry === "object" ? entry?.note || "" : "";
      });
      setMeals(updatedMeals);
      setNotes(updatedNotes);
    } catch (err) {
      if (err.response?.status === 404) {
        setMeals({});
        setNotes({});
      } else {
        console.error("Error fetching meals:", err.message);
      }
    }
  };

  useEffect(() => {
    fetchWithToken(week);
  }, [week]);

  const saveMealPlan = async () => {
    const mealsWithNotes = {};
    defaultDays.forEach((day) => {
      mealsWithNotes[day] = {
        name: meals[day] || "",
        note: notes[day] || "",
      };
    });

    if (!saveToCloud) {
      localStorage.setItem(`mealplan-${week}`, JSON.stringify(mealsWithNotes));
      alert("Saved to Local Storage");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) return alert("Login required");

    try {
      await axios.post(`http://localhost:5000/api/mealplan`, { week, meals: mealsWithNotes }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Meal plan saved to cloud");
    } catch (err) {
      console.error("Save error:", err.message);
      alert("Failed to save meal plan");
    }
  };

  const handleMealChange = (day, value) => setMeals({ ...meals, [day]: value });
  const handleNoteChange = (day, value) => setNotes({ ...notes, [day]: value });

  const handleCopyLastWeek = async () => {
    const prevWeek = getPreviousWeek(week);
    await fetchWithToken(prevWeek);
    setCopiedWeek(prevWeek);
  };

  const handleResetWeek = () => {
    const resetMeals = {}, resetNotes = {};
    defaultDays.forEach((day) => {
      resetMeals[day] = "";
      resetNotes[day] = "";
    });
    setMeals(resetMeals);
    setNotes(resetNotes);
  };

  const getPreviousWeek = (weekStr) => {
    const [year, weekNum] = weekStr.split("-W").map(Number);
    let date = new Date(year, 0, 1 + (weekNum - 1) * 7);
    date.setDate(date.getDate() - 7);
    return `${date.getFullYear()}-W${String(getISOWeek(date)).padStart(2, "0")}`;
  };

  const getISOWeek = (date) => {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold mb-6 text-center text-teal-400 tracking-tight">
        Weekly Meal Planner
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-6 items-center">
        <label className="font-medium text-md text-gray-300">
          Select Week:
          <input
            type="week"
            value={week}
            onChange={(e) => setWeek(e.target.value)}
            className="ml-2 bg-gray-800 border border-gray-600 text-white rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </label>

        <div className="flex gap-2">
          <button
            onClick={() => setSaveToCloud(true)}
            className={`px-3 py-1 rounded font-semibold ${
              saveToCloud ? "bg-teal-600 text-white" : "bg-gray-700"
            }`}
          >
            ☁️ Cloud
          </button>
          <button
            onClick={() => setSaveToCloud(false)}
            className={`px-3 py-1 rounded font-semibold ${
              !saveToCloud ? "bg-yellow-500 text-black" : "bg-gray-700"
            }`}
          >
            💾 Local
          </button>
        </div>

        <button
          onClick={handleCopyLastWeek}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded shadow"
        >
          Copy Last Week
        </button>

        <button
          onClick={handleResetWeek}
          className="bg-rose-500 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded shadow"
        >
          🧹 Reset
        </button>
      </div>

      {copiedWeek && (
        <p className="text-center text-sm mb-4 text-gray-400">
          Copied from: <strong>{copiedWeek}</strong>
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {defaultDays.map((day) => (
          <MealCard
            key={day}
            day={day}
            meal={meals[day] || ""}
            note={notes[day] || ""}
            onMealChange={handleMealChange}
            onNoteChange={handleNoteChange}
            darkMode={true} // you can use this prop in MealCard to apply dark styles
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={saveMealPlan}
          className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold px-6 py-3 rounded shadow-xl transition-all"
        >
          ✅ Save Meal Plan
        </button>
      </div>
    </div>
  );
};

export default MealPlanner;
