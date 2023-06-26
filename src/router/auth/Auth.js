import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function Auth() {
  const user = localStorage.getItem("user");
  // const user = true;
  return user ? <Outlet /> : <Navigate to={"/login"} replace />;
}

export default Auth;
