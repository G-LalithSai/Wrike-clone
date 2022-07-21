import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home";
import Products from "./Products";
import Pricing from "./Pricing";
import Login from "./Login";
import Resources from "./Resources";
import Solutions from "./Solutions";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Product" element={<Products />} />
      <Route path="Pricing" element={<Pricing />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Login" element={<Login />} />
      <Route path="Resources" element={<Resources />} />
      <Route path="Solutions" element={<Solutions />} />
    </Routes>
  );
};

export default AllRoutes;
