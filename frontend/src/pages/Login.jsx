import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext); // ✅ Access context

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const token = res?.data?.token;
      const user = res?.data?.user;

      if (token && user) {
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setUser(user); // ✅ update user context
        navigate("/mealplanner");
      } else {
        throw new Error("Invalid response: Missing token or user.");
      }
    } catch (err) {
      const message =
        err?.response?.data?.message || "Something went wrong. Try again.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Login to Meal Planner 🍽️
        </h2>

        {errorMsg && (
          <div className="mb-4 text-sm text-red-500 text-center">
            {errorMsg}
          </div>
        )}

        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-4 py-2 border rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-semibold py-2 rounded-md transition duration-200 ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
