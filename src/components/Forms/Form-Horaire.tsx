import { useQuery } from "@tanstack/react-query";
import { getHoraires } from "../../utils";
import { useState } from "react";
import { Button, Col, Form, Spinner } from "react-bootstrap";

const FormHoraire = () => {
  const [showResult, setShowResult] = useState(false);
  const [codeArret, setCodeArret] = useState("HBLI2");
  const [numLigne, setNumLigne] = useState("C5");
  const [sens, setSens] = useState<"1" | "2">("1");

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["horaires", { codeArret, numLigne, sens }],
    enabled: showResult,
    queryFn: () => getHoraires(codeArret, numLigne, sens),
  });

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setShowResult(true);
        }}
      >
        <h1>Horaires (théoriques)</h1>
            <Col xs={4}>
              <Form.Group className="mb-3" controlId="formCodeArret">
                <Form.Label>Code Arrêt</Form.Label>
                <Form.Control type="text" defaultValue="HBLI2" onChange={(e) => setCodeArret(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formNumLigne">
                <Form.Label>Numéro Ligne</Form.Label>
                <Form.Control type="text" defaultValue="C5" onChange={(e) => setNumLigne(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSens">
                <Form.Label>Sens</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setSens(e.target.value === "2" ?  "2" : "1")}>
                  <option value="1">Un</option>
                  <option value="2">Deux</option>
                </Form.Select>
              </Form.Group>
            </Col>
        <Button className="mt-1" variant="primary" type="submit">
          Submit
        </Button>
        <Button
          className="mt-1"
          variant="primary"
          type="reset"
          onClick={() => setShowResult(false)}
        >
          Clear
        </Button>
      </Form>
      {!showResult ? (
        <></>
      ) : isPending ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : isError ? (
        <p>
          An error has occured: {error.name} - {error.message}
        </p>
      ) : (
        <Col md={4} className="mt-3">
          {<p>{data.ligne.numLigne}</p>}
        </Col>
      )}
    </>
  );
};

export default FormHoraire;
