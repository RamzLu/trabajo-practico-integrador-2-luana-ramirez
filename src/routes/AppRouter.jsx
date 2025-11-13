import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { Navbar } from "../components/Navbar";
import PublicRoute from "./PublicRoute";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import { Tasks } from "../pages/Task";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
};
