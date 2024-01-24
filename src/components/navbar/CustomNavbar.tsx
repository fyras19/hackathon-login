import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

import "../../App.css";
import { Link, NavLink } from "react-router-dom";

const CustomNavbar = () => {
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
              <NavDropdown.Item>
                <NavLink to={"/myevents"} className="nav-link">
                  Mes évènements
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink to={"/login"} className="nav-link">
                  Se connecter
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={"/register"} className="nav-link">
                  Créer un compte
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
