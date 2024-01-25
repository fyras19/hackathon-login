import { Spinner } from "react-bootstrap";

export default function LoadingDisplay() {
  return (
    <div className="d-flex justify-content-center p-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
