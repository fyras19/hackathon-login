import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

type SidebarProps = {
  setSelection: React.Dispatch<React.SetStateAction<number>>;
};

const Sidebar = ({ setSelection }: SidebarProps) => {
  return (
    <Navbar bg="light" expand="lg" className="flex-column">
      <Container>
        <Navbar.Brand href="#">HACKATHON LOGIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-row">
            <NavDropdown
              title="Arrêts"
              id="temps-dattente-dropdown"
              className="flex-column"
            >
              <NavDropdown.Item onClick={() => setSelection(0)}>
                Arrêts proches
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setSelection(1)}>
                Tous les arrêts
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setSelection(2)}>
                Horaires théoriques
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Temps d'attente"
              id="temps-dattente-dropdown"
              className="flex-column"
            >
              <NavDropdown.Item onClick={() => setSelection(3)}>
                Pour un arrêt
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
