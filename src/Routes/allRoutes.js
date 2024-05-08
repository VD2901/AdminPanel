import React from "react";
import { Navigate } from "react-router-dom";

import DashboardEcommerce from "../pages/DashboardEcommerce";


const authProtectedRoutes = [

  { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/index", component: <DashboardEcommerce /> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  // { path: "/logout", component: <Logout /> },
];

export { authProtectedRoutes, publicRoutes };