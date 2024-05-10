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
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProducts/EcommerceProductDetail";
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceProducts/EcommerceAddProduct";
import UserProfile from "../pages/Authentication/user-profile";
import Settings from "../pages/Profile/Settings/Settings";

const authProtectedRoutes = [
 
  { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/index", component: <DashboardEcommerce /> },
  // { path: "/profile", component: <UserProfile /> },
  { path: "/profile", component: <Settings /> },
   //Invoices
   { path: "/apps-invoices-list", component: <InvoiceList /> },
   { path: "/apps-invoices-details", component: <InvoiceDetails /> },
   { path: "/apps-invoices-create", component: <InvoiceCreate /> },
  { path: "*", component: <Navigate to="/dashboard" /> },
  { path: "/apps-ecommerce-product-details", component: <EcommerceProductDetail /> },
  { path: "/apps-ecommerce-add-product", component: <EcommerceAddProduct /> },
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