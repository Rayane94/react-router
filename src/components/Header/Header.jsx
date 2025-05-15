import { NavLink, useNavigate, useMatch, useParams, Outlet } from "react-router";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css"; 

const Header = () => {
  const match = useMatch("/categorie/:category");

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        {match && (
          <span className="me-3 fw-bold">
            Catégorie : {match.params.category}
          </span>
        )}
        <Navbar.Brand as={NavLink} to="/">
          Mon Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
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
