import React, { useState } from 'react';
import '../Style/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    // Collapse the navbar
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} collapseOnSelect expand="lg" className="navbar-custom sticky-top">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/" onClick={handleLinkClick}>St. Teresa Church Harigaon</Link>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle the navbar
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/events" onClick={handleLinkClick}>Events</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/table" onClick={handleLinkClick}>Timetable</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/aboutUs" onClick={handleLinkClick}>About Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/contact" onClick={handleLinkClick}>Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
