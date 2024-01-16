import { useQuery } from "@tanstack/react-query";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

type FormulaireProps = {
  selection: number;
};

const URL = `https://hackathon-login.osc-fr1.scalingo.io`;

const Formulaire = ({ selection }: FormulaireProps) => {
  const getFormsGroups = (selection: number) => {
    switch (selection) {
      case 0:
        return (
          <>
            <h1>Recherche arrêts proches d'une latitude/longitude</h1>
            <Col xs={4}>
              <Form.Group className="mb-3" controlId="formLatitude">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue="47,264"
                  pattern="-?\d+(,\d+)?(\.\d+)?"
                  step="any"
                  required
                />
                <Form.Text className="text-muted">
                  Doit être un nombre décimal ex "47,264"
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLongitude">
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue="-1,585"
                  pattern="-?\d+(,\d+)?(\.\d+)?"
                  step="any"
                  required
                />
                <Form.Text className="text-muted">
                  Doit être un nombre décimal ex "-1,585"
                </Form.Text>
              </Form.Group>
            </Col>
          </>
        );
      case 1:
        return (
          <>
            <h1>Liste de tous les arrêts</h1>
          </>
        );
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

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["arrets"],
    queryFn: async () => {
      const result = await fetch(`${URL}/get_all_stations/`);
      return result.json();
    },
  });

  if (isPending) return <p>Loading...</p>;
  else if (isError)
    return (
      <p>
        Error fetching data: {error.name} - {error.message}
      </p>
    );

  return (
    <Container>
      <Row>
        <Form onSubmit={(e) => {e.preventDefault(); console.log(data)}}>
          {getFormsGroups(selection)}
          <Button className="mt-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Formulaire;
