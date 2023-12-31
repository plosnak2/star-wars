import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function CustomNavbar() {
  // navbar component
  return (
    <Navbar expand="lg" style={{backgroundColor:"#fddf2b"}}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
              <img
                src={require('../images/star-wars.png')}
                width="120"
                className="d-inline-block align-top"
                alt="Star Wars"
              />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to="/">  Movies </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;