/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Logout({ modal, setModal }) {
  const navigate = useNavigate();
  const { logout, setError } = useAuth();

  async function handleLogout() {
    try {
      setError("");
      await logout();
      setModal(false);
      navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  if (!modal) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-600 bg-opacity-75">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Sign out</h3>
        <p className="text-gray-700 mb-6">
          Are you sure you want to sign out of your account?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign out
          </button>
          <button
            onClick={() => setModal(false)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
