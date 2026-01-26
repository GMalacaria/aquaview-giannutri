import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Appartamento from "../pages/Appartamento";
import ChiSiamo from "../pages/ChiSiamo";
import Giannutri from "../pages/Giannutri";
import Privacy from "../pages/Privacy";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appartamento/:id" element={<Appartamento />} />
      <Route path="/chi-siamo" element={<ChiSiamo />} />
      <Route path="/giannutri" element={<Giannutri />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  </Router>
);

export default AppRouter;
