import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Events from './pages/Events';
import Navigation from './components/Navbar';
import Table from './pages/Table';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact'

const App = () => (
  <Router>
    
    <Analytics />
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/table" element={<Table />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
