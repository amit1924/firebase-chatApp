/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../config/firebase";

// Create Auth Context
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const register = async (email, password, name) => {
    try {
      setError(""); // Reset error message
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update user profile with the provided name
      const profile = { displayName: name };
      await updateProfile(user, profile);
      setCurrentUser({ ...user, ...profile }); // Update current user state

      return user;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const updateUserProfile = async (user, profile) => {
    try {
      await updateProfile(user, profile);
      setCurrentUser({ ...user, ...profile }); // Update current user state
    } catch (error) {
      setError(error.message);
      throw error; // Re-throw error to be caught in Profile component
    }
  };

  const login = async (email, password) => {
    try {
      setError(""); // Reset error message
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    error,
    setError,
    login,
    register,
    logout,
    updateUserProfile, // Include updateUserProfile in the value
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
