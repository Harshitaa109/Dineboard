import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional for icons

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSuggestOpen, setIsSuggestOpen] = useState(false);

  const baseStyle =
    "block py-2 px-4 rounded-lg font-medium transition duration-200";

  const getLinkStyle = ({ isActive }) =>
    `${baseStyle} ${
      isActive
        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <>
      {/* Toggle Button - Always Visible on small screens */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-800 p-2 rounded-md text-white shadow-lg"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white min-h-screen p-5 shadow-xl z-40 transform transition-transform duration-300
        fixed top-0 left-0 w-64 md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-3xl font-semibold mb-10 text-center tracking-wide text-indigo-400">
          DineBoard
        </h1>

        <nav className="space-y-2">
          <NavLink to="/home" className={getLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/mealplanner" className={getLinkStyle}>
            Weekly Planner
          </NavLink>

          {/* Dropdown for food */}
          <button
            onClick={() => setIsSuggestOpen(!isSuggestOpen)}
            className="w-full text-left py-2 px-4 rounded-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200"
          >
            Food {isSuggestOpen ? "▾" : "▸"}
          </button>

          {isSuggestOpen && (
            <div className="ml-4 space-y-1 text-sm">
              <NavLink to="/suggest/breakfast" className={getLinkStyle}>
                Breakfast
              </NavLink>
              <NavLink to="/suggest/lunch" className={getLinkStyle}>
                Lunch
              </NavLink>
              <NavLink to="/suggest/dinner" className={getLinkStyle}>
                Dinner
              </NavLink>
              <NavLink to="/suggest/indiancuisine" className={getLinkStyle}>
                Indian Cuisine
              </NavLink>
              <NavLink to="/suggest/italiancuisine" className={getLinkStyle}>
                Italian Cuisine
              </NavLink>
              <NavLink to="/suggest/mexicancuisine" className={getLinkStyle}>
                Mexican Cuisine
              </NavLink>
              <NavLink to="/suggest/thaicuisine" className={getLinkStyle}>
                Thai Cuisine
              </NavLink>
              <NavLink to="/suggest/chinesecuisine" className={getLinkStyle}>
                Chinese Cuisine
              </NavLink>
              <NavLink to="/suggest/dietfood" className={getLinkStyle}>
                Diet Food
              </NavLink>
              <NavLink to="/suggest/starters" className={getLinkStyle}>
                Starters
              </NavLink>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
