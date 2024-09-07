// import '../Style/Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">St. Teresa Church Harigaon</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="nav-link" to="/events">Events</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/table">Timetable</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav.Link>
              </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
