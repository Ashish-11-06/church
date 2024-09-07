import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-primary text-white p-3">
    <nav className="container">
      <h1>Church Name</h1>
      <ul className="nav">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
