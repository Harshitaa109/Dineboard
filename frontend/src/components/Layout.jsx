// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar - fixed width, full height */}
      <aside className="w-64 bg-blue-900 text-white flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <header className="bg-white shadow z-10">
          <Navbar />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
