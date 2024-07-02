import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home";
import MenuItems from "../components/Menu/MenuItems";
import AddMenuItems from "../components/Menu/AddMenuItems";
import AboutUS from "../components/AboutUs/AboutUS";
import Contact from "../components/Contact/Contact";
import Booking from "../components/Booking/Booking";

import AuthSignup from "../AuthSignup";
import AuthLogin from "../AuthLogin";
import ForgetPassword from "../components/Auth/ForgetPassword";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllUsers from "../components/Menu/AllUsers";
import Dashboard from "../components/Dashboard/Dashboard";

function RouteApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/menu" element={<MenuItems />} />
        <Route path="/addMenu" element={<AdminRoute><AddMenuItems /></AdminRoute>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allUsers" element={<AdminRoute><AllUsers /></AdminRoute>} />
        <Route path="/booking" element={<PrivateRoute><Booking /></PrivateRoute>} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/signup" element={<AuthSignup />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default RouteApp;
