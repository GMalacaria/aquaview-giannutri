import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import ChiSiamo from '../pages/who-are/ChiSiamo';
import Giannutri from '../pages/giannutri/Giannutri';
import Privacy from '../pages/privacy/Privacy';
import Apartament from '../pages/appartament/Apartament';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appartamento/:id" element={<Apartament />} />
      <Route path="/chi-siamo" element={<ChiSiamo />} />
      <Route path="/giannutri" element={<Giannutri />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  </Router>
);

export default AppRouter;
