/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { AuthProvider } from "./contexts/AuthContext";
import WithPrivateRoute from "./utils/WithPrivateRoute";
import Logout from "./components/Logout";
import Header from "./components/layouts/Header";
import ErrorMessage from "./components/layouts/ErrorMessage";
import ChatLayout from "./components/layouts/ChatLayout";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <ErrorMessage />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/profile"
            element={
              <WithPrivateRoute>
                <Profile />
              </WithPrivateRoute>
            }
          />
          <Route
            exact
            path="/"
            element={
              <WithPrivateRoute>
                <ChatLayout />
              </WithPrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
