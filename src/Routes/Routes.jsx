import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ShoppingPage from "../Pages/ShoppingPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoppingPage" element={<ShoppingPage />} />
      </Routes>
    </Router>
  );
}
