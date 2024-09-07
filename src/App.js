import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Navigation from './components/Navbar';

const App = () => (
  <Router>
    <Navigation />
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
