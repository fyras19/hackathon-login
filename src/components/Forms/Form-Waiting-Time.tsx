import { useQuery } from "@tanstack/react-query";
import { getWaitingTime } from "../../utils";
import { useState } from "react";
import { Button, Col, Form, Spinner } from "react-bootstrap";

const FormWaitingTime = () => {
  const [showResult, setShowResult] = useState(false);
  const [codeArret, setCodeArret] = useState("HBLI");

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["tempsAttente", { codeArret }],
    enabled: showResult,
    queryFn: async () => getWaitingTime(codeArret),
  });

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setShowResult(true);
        }}
      >
        <h1>Temps d'attente par rapport à un arrêt</h1>
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formCodeArret">
            <Form.Label>Code Arrêt</Form.Label>
            <Form.Control
              type="text"
              defaultValue="HBLI"
              onChange={(e) => setCodeArret(e.target.value)}
              required
            />
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
          {data.map((time) => (
            <p key={time.id}>
              Ligne: {time.ligne.numLigne} - Sens: {time.sens} - Temps: {time.temps}
            </p>
          ))}
        </Col>
      )}
    </>
  );
};

export default FormWaitingTime;
