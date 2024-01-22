import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

import "../App.css";
import { Link } from "react-router-dom";

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
              />
              <Button variant="outline-primary">Rechercher</Button>
            </Form>
            <Nav.Link className="mx-1" href="#action1">
              <Link to={"/"}>Acceuil</Link>
            </Nav.Link>
            <Nav.Link className="mx-1" href="#action2">
              <Link to={"/aboutus"}>Concept</Link>
            </Nav.Link>
            <Nav.Link className="mx-1" href="#action3">
              <Link to={"/events"}>Evènements</Link>
            </Nav.Link>
            <NavDropdown
              className="mx-1"
              title="Utilisateur"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item>
                <Link to={"/login"}>Se connecter</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/register"}>Créer un compte</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to={"/myevents"}>Mes évènements</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
