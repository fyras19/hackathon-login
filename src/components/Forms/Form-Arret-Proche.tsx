import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getNearbyStops, getStopsPaginated } from "../../utils";
import { useState } from "react";
import { Button, Col, Form, Spinner } from "react-bootstrap";

const FormArretProche = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [latitude, setLatitude] = useState("47,264");
  const [longitude, setLongitude] = useState("-1,585");

  const { data: listArrets, isFetched } = useQuery({
    queryKey: ["arrets_proches", { latitude, longitude }],
    enabled: showResult,
    queryFn: async () => getNearbyStops(latitude, longitude),
  });

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["arrets_proches", { page, filter, latitude, longitude }],
    placeholderData: keepPreviousData,
    enabled: isFetched,
    queryFn: () => getStopsPaginated(listArrets!, page, filter),
  });

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setShowResult(true);
        }}
      >
        <h1>Recherche arrêts proches d'une latitude/longitude</h1>
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formLatitude">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="text"
              defaultValue={latitude}
              onChange={(e) => setLatitude(e.target.value)}
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
              defaultValue={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              pattern="-?\d+(,\d+)?(\.\d+)?"
              step="any"
              required
            />
            <Form.Text className="text-muted">
              Doit être un nombre décimal ex "-1,585"
            </Form.Text>
          </Form.Group>
        </Col>
        <Form.Group className="mb-3" controlId="ArretSearchBar">
          <Form.Label>Barre de recherche</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ecrire ici pour filtrer"
            onChange={(e) => {
              setPage(1);
              setFilter(e.target.value);
            }}
          />
        </Form.Group>
        <Button className="mt-1" variant="primary" type="submit">
          Submit
        </Button>
        <Button
          className="mt-1"
          variant="primary"
          type="reset"
          onClick={() => {
            setFilter("");
            setShowResult(false);
          }}
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
          {data.arrets.map((arret) => (
            <p key={arret.id}>{arret.libelle}</p>
          ))}
          <Button
            disabled={data.previousPage === undefined}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <Button
            disabled={data.nextPage === undefined}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Col>
      )}
    </>
  );
};

export default FormArretProche;
