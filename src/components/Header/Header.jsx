import { NavLink, useMatch } from "react-router";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const match = useMatch("/categorie/:category");

  return (
    <Navbar bg="light" expand="lg" className="border-bottom py-3">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="fw-bold">
          {match && `Catégorie : ${match.params.category}`}
        </div>

        <Nav className="ms-auto">
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
      </Container>
    </Navbar>
  );
};

export default Header;
