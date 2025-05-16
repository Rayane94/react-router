import { NavLink, useMatch } from "react-router";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const match = useMatch("/categorie/:category");

  return (
    <Navbar bg="light" expand="lg" className="justify-content-end border-bottom">
      <Container className="justify-content-end">
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink} to="/" end>Accueil</Nav.Link>
            <Nav.Link as={NavLink} to="/categorie/vetements">Vêtements</Nav.Link>
            <Nav.Link as={NavLink} to="/categorie/chaussures">Chaussures</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
