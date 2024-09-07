import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Events from './pages/Events';
import Contact from './pages/Schedule';
import Navigation from './components/Navbar';
import Table from './pages/Table';
import AboutUs from './pages/AboutUs';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/table" element={<Table />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
