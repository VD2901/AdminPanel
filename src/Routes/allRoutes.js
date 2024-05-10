import React from "react";
import { Navigate } from "react-router-dom";


import DashboardEcommerce from "../pages/DashboardEcommerce";

import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

//Invoices
import InvoiceList from "../pages/Invoices/InvoiceList";
import InvoiceCreate from "../pages/Invoices/InvoiceCreate";
import InvoiceDetails from "../pages/Invoices/InvoiceDetails";

const authProtectedRoutes = [
 
  { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/index", component: <DashboardEcommerce /> },
   //Invoices
   { path: "/apps-invoices-list", component: <InvoiceList /> },
   { path: "/apps-invoices-details", component: <InvoiceDetails /> },
   { path: "/apps-invoices-create", component: <InvoiceCreate /> },
  
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },
  //AuthenticationInner pages
];

export { authProtectedRoutes, publicRoutes };