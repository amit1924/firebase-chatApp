/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, register, error, setError } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
    try {
      setError(""); // Reset error message
      setLoading(true);
      await register(email, password, name);
      navigate("/");
    } catch (e) {
      console.error("Registration error:", e);
      setLoading(false);
    } finally {
      setLoading(false); // Ensure loading is set to false after attempt
    }
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[85%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
          <form className="max-w-lg w-full mx-auto" onSubmit={handleSubmit}>
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-yellow-400">
                Create an account
              </h3>
            </div>

            <div>
              <label className="text-white text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-white text-xs block mb-2">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="confirmpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                  placeholder="Confirm password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="mt-12">
              <button
                type="submit"
                disabled={loading}
                className="w-40 h-20 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
              >
                {loading ? "Loading..." : "Register"}
              </button>
              <p className="text-sm text-white mt-8">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-yellow-400 font-semibold hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
