// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4">
      <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-xl w-full text-center border border-white/10">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-4 tracking-tight animate-pulse">
          Welcome to <span className="text-white">DineBoard</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Plan your weekly meals and simplify your cooking life.
          All in one sleek dashboard.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/login"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-full text-white font-semibold shadow-md"
          >
            <LogIn size={20} /> Login
          </Link>
          <Link
            to="/signup"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-full text-white font-semibold shadow-md"
          >
            <UserPlus size={20} /> Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
