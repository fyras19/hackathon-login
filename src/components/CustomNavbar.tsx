import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useAppDispatch } from "../hooks";
import { setSelection } from "../slices/selectionSlice";
import { Link } from "react-router-dom";

import "../App.css";

/* type SidebarProps = {
  setSelection: React.Dispatch<React.SetStateAction<number>>;
}; */

const CustomNavbar = (/* { setSelection }: SidebarProps */) => {
  const dispatch = useAppDispatch();

  return (
    <Navbar bg="light" expand="lg" className="flex-column">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>HACKATHON LOGIN</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-row">
            <NavDropdown
              title="Arrêts"
              id="temps-dattente-dropdown"
              className="flex-column"
            >
              <NavDropdown.Item onClick={() => dispatch(setSelection(0))}>
                <Link to={"/"}>Arrêts proches</Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => dispatch(setSelection(1))}>
                <Link to={"/"}>Tous les arrêts</Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => dispatch(setSelection(2))}>
                <Link to={"/"}>Horaires théoriques</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"aboutus"}>About us</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Temps d'attente"
              id="temps-dattente-dropdown"
              className="flex-column"
            >
              <NavDropdown.Item onClick={() => dispatch(setSelection(3))}>
                <Link to={"/"}>Pour un arrêt</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
