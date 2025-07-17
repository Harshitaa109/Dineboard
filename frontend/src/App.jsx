// App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import MealPlanner from "./pages/MealPlanner";



// Child Pages for "Suggest My Week"
import Breakfast from "./pages/Suggest/Breakfast";
import Lunch from "./pages/Suggest/Lunch";
import Dinner from "./pages/Suggest/Dinner";
import IndianCuisine from "./pages/Suggest/IndianCuisine";
import MexicanCuisine from "./pages/Suggest/MexicanCuisine";
import ItalianCuisine from "./pages/Suggest/ItalianCuisine";
import ThaiCuisine from "./pages/Suggest/ThaiCuisine";
import ChineseCuisine from "./pages/Suggest/ChineseCuisine";
import DietFood from "./pages/Suggest/DietFood";
import Starters from "./pages/Suggest/Starters";

const App = () => {
  return (
    <Routes>
      {/* 🔐 Protected Routes - Require Authentication */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="mealplanner" element={<MealPlanner />} />
        
       
        <Route path="suggest/breakfast" element={<Breakfast />} />
        <Route path="suggest/lunch" element={<Lunch />} />
        <Route path="suggest/dinner" element={<Dinner />} />
        <Route path="suggest/indiancuisine" element={<IndianCuisine />} />
        <Route path="suggest/mexicancuisine" element={<MexicanCuisine />} />
        <Route path="suggest/italiancuisine" element={<ItalianCuisine />} />
        <Route path="suggest/thaicuisine" element={<ThaiCuisine />} />
        <Route path="suggest/chinesecuisine" element={<ChineseCuisine />} />
        <Route path="suggest/dietfood" element={<DietFood />} />
        <Route path="suggest/starters" element={<Starters />} />
      </Route>

      {/* 🔓 Public Routes - No Authentication Needed */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
