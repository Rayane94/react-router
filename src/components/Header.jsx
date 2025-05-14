import { NavLink, useMatch } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const match = useMatch("/categorie/:category");

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {match && (
          <span className="me-3 fw-bold">
            Catégorie : {match.params.category}
          </span>
        )}
        <Navbar.Brand as={NavLink} to="/">
          Mon Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Accueil
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categorie/vetements">
              Vêtements
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categorie/chaussures">
              Chaussures
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
