import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getStops, getStopsPaginated } from "../../utils";
import { useState } from "react";
import { Button, Col, Form, Spinner } from "react-bootstrap";

const FormulaireArret = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [showResult, setShowResult] = useState(false);

  const { data: listArrets, isFetched } = useQuery({
    queryKey: ["arrets"],
    queryFn: async () => getStops(),
  });

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["arrets", { page, filter }],
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
        <h1>Liste de tous les arrêts</h1>
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

export default FormulaireArret;
