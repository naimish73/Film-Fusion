import React from "react";

// router imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// css imports
import "./App.css";

// pages imports
import Home from "./pages/home/Home";
import PageNotFound from "./pages/PageNotFound.js/PageNotFound";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
