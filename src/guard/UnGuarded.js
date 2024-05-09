import React from "react";
import { Navigate } from "react-router-dom";

const UnGuarded = ({ component: Component }) => {
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to="/" /> : <Component />;
};

export default UnGuarded;
