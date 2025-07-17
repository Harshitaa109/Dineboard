import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../contexts/useUser.js";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-[#1e1e2f] text-white px-6 py-4 shadow-lg flex justify-between items-center z-50 border-b border-gray-700">
      {/* Branding - Professional Purple + Clean Font */}
      <Link
        to="/"
        className="text-3xl font-bold tracking-wide text-purple-400 hover:text-purple-500 transition-all duration-200"
        style={{ fontFamily: "'Segoe UI', 'Open Sans', sans-serif" }}
      >
        DINEBOARD
      </Link>

      <div className="flex items-center space-x-4">
        {user && (
          <Link
            to="/"
            className="text-gray-300 hover:text-white px-3 py-2 transition-colors duration-200"
          >
            🏠 Home
          </Link>
        )}

        {user ? (
          <>
            <span className="text-gray-400 hidden sm:inline font-light tracking-wide">
              Hi, <span className="font-semibold text-white">{user.name}</span>
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg shadow-md transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-lg transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition duration-200"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
