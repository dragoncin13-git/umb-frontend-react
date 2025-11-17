// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const usuario = localStorage.getItem("usuario");
  if (!usuario) {
    // Si no hay usuario, redirige al login
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
