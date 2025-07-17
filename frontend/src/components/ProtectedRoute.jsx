import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // converts token to true/false
  }, []);

  if (isAuthenticated === null) {
    // You can show a spinner/loading screen if needed
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-600">Checking authentication...</p>
      </div>
    );
  }

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
