import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState(""); // New name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, {
        name, // Send name too
        email,
        password,
      });
      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Server not responding. Is your backend running?";
      alert("Signup failed: " + message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Sign Up
        </h2>

        <label className="block mb-2 text-sm font-medium text-gray-600">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
