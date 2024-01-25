import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

import "../../App.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg" className="flex-column">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>Hackathon LOGIN</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav style={{ maxHeight: "100px" }} navbarScroll>
            <Form className="d-flex mx-1">
              <Form.Control
                type="search"
                placeholder="Rechercher"
                className="me-2"
                aria-label="Search"
                id="navbar-search"
              />
              <Button variant="outline-primary">Rechercher</Button>
            </Form>
            <NavLink className="mx-1 nav-link" to={"/"}>
              Acceuil
            </NavLink>
            <NavLink className="mx-1 nav-link" to={"/aboutus"}>
              Concept
            </NavLink>
            <NavLink className="mx-1 nav-link" to={"/events"}>
              Evènements
            </NavLink>
            <NavDropdown
              className="mx-1"
              title="Utilisateur"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item onClick={() => navigate("/myevents")}>
                Mes évènements
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate("/login")}>
                Se connecter
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/register")}>
                Créer un compte
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
