import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ component: Component }) => {
  const isLoggedIn = false;

  return isLoggedIn ? <Component /> : <Navigate to='/' />
};

export default AuthGuard;
