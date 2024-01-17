import { Col, Container, Form, Row } from "react-bootstrap";
import FormArret from "./Forms/Form-Arret";
import FormArretProche from "./Forms/Form-Arret-Proche";

type FormulaireProps = {
  selection: number;
};

const Formulaire = ({ selection }: FormulaireProps) => {
  const getFormsGroups = (selection: number) => {
    switch (selection) {
      case 0:
        return <FormArretProche />;
      case 1:
        return <FormArret />;
      case 2:
        return (
          <>
            <h1>Horaires (théoriques)</h1>
            <Col xs={4}>
              <Form.Group className="mb-3" controlId="formCodeArret">
                <Form.Label>Code Arrêt</Form.Label>
                <Form.Control type="text" defaultValue="HBLI2" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formNumLigne">
                <Form.Label>Numéro Ligne</Form.Label>
                <Form.Control type="text" defaultValue="C5" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSens">
                <Form.Label>Sens</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="1">Un</option>
                  <option value="2">Deux</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </>
        );
      case 3:
        return (
          <>
            <h1>Temps d'attente par rapport à un arrêt</h1>
            <Col xs={4}>
              <Form.Group className="mb-3" controlId="formCodeArret">
                <Form.Label>Code Arrêt</Form.Label>
                <Form.Control type="text" defaultValue="HBLI" required />
              </Form.Group>
            </Col>
          </>
        );
      default:
        return <div>{selection}</div>;
    }
  };

  return (
    <Container>
      <Row>{getFormsGroups(selection)}</Row>
    </Container>
  );
};

export default Formulaire;
