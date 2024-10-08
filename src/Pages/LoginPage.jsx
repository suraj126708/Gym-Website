import React, { useState } from "react";
import NavBar from "../components/Navbar";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const [loading, setLoading] = useState(false); // For loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(""); // Reset any previous errors

    try {
      const response = await axios.post("/auth/login", {
        username: email,
        password,
      });
      // Handle success (e.g., redirect to dashboard or show success message)
      console.log(response.data); // Check response for success
    } catch (err) {
      setError("Invalid email or password."); // Set error message on failure
      console.error(err); // Log error for debugging
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 p-16 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Gym Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-2 border bg-transparent font-semibold border-black rounded-lg focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent w-full p-2 mt-2 border font-semibold border-black rounded-lg focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
            {/* Display error message */}
            <button
              type="submit"
              className={`w-full py-2 bg-green-500 rounded-lg hover:bg-green-700 transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable button during loading
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-green-900">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
